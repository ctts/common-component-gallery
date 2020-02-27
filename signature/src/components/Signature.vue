<template>
  <div class="container">
    <canvas
      ref="signature"
      :width="ctx.width"
      :height="ctx.height"
      :style="{'background':ctx.background}"
      @mousedown="touchstart"
      @mousemove="touchmove"
      @mouseup="touchend"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
    ></canvas>
    <img
      class="preview"
      :src="preview"
      alt="preview"
      :class="[preview === '' ? 'hide' : 'show']"
    >
    <button
      class="btn-clear"
      @click="clear"
    >清空</button>
    <button
      class="btn-save"
      @click="save"
    >保存</button>
  </div>
</template>

<script>
import Signature from '../assets/Signature'
export default {
  name: 'signature',
  props: {
    background: {
      type: String,
      default: 'rgb(255, 255, 255)'
    },
    strokeStyle: {
      type: String,
      default: 'rgba(0, 0, 0, 1)'
    },
    width: {
      type: Number,
      default: document.body.clientWidth
    },
    height: {
      type: Number,
      default: document.body.clientHeight
    },
    lineWidth: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      ctx: {},
      preview: '',
      canvasDom: {}
    }
  },
  mounted () {
    this.canvasDom = this.$refs.signature
    this.ctx = new Signature({
      canvasDom: this.canvasDom,
      width: this.width,
      height: this.height,
      background: this.background,
      strokeStyle: this.strokeStyle,
      lineWidth: this.lineWidth
    })
  },
  methods: {
    touchstart (e) {
      this.ctx.moveStart(e)
    },
    touchmove (e) {
      this.ctx.moveOn(e)
    },
    touchend (e) {
      this.ctx.moveEnd(e)
    },
    clear () {
      this.ctx.clear()
      this.preview = ''
    },
    save () {
      let img = this.ctx.save()
      this.preview = img
    }
  },
}
</script>

<style scoped>
.container {
  position: relative;
}
.btn-clear {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  z-index: 1;
}
.btn-save {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 50%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  z-index: 1;
}
.preview {
  position: absolute;
  background: #eee;
  width: 80%;
  height: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -55%);
}

.hide {
  display: none;
}

.show {
  display: block;
  animation: show 1s ease-out;
}

@keyframes show {
  0% {
    top: -100%;
  }
  100% {
    top: 50%;
  }
}
</style>

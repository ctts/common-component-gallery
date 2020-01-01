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
  data () {
    return {
      ctx: {},
      preview: '',
      signatureOption: {
        canvasDom: {},
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        background: 'rgb(255, 255, 255)',
        strokeStyle: 'rgba(0, 0, 0, 1)',
        lineWidth: 1
      }
    }
  },
  mounted () {
    this.signatureOption.canvasDom = this.$refs.signature
    this.ctx = new Signature(this.signatureOption)
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

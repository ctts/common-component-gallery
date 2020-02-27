# tabbar

> 快速开发移动端tabbar

## 使用方法：直接以组件形式导入

例子：
```
<template>
  <div id="app">
    <router-view />
    <tabbar
      :tabs="tabs"
      class="tabbar"
      v-show="showTabbar"
    >
      <template #home>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#el-iconstar-copy"></use>
        </svg>
      </template>
      <template #_home>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#el-iconwujiaoxing_kong"></use>
        </svg>
      </template>
      <template #search>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#el-iconfaxian1"></use>
        </svg>
      </template>
      <template #_search>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#el-iconfaxian2"></use>
        </svg>
      </template>
      <template #person>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#el-icongerenzhongxin1"></use>
        </svg>
      </template>
      <template #_person>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#el-iconicon7"></use>
        </svg>
      </template>
    </tabbar>
  </div>
</template>

<script>
import tabbar from './components/Tabbar'
export default {
  name: 'app',
  data () {
    return {
      showTabbar: true,
      tabs: [
        {
          name: 'home',
          routerLink: '/',
          isActive: true
        },
        {
          name: 'search',
          routerLink: '/search',
        },
        {
          name: 'person',
          routerLink: '/person',
        },
      ]
    }
  }
```

## api

```
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
```

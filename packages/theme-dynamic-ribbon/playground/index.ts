import {
  Ribbon,
  type RibbonConfig,
  type CanvasOptions,
  MAX_Z_INDEX,
} from '@moefy-canvas/theme-dynamic-ribbon'

const themeConfig: RibbonConfig = {
  size: 90,
}

const canvasOptions: CanvasOptions = {
  opacity: 1,
  zIndex: -MAX_Z_INDEX,
}

const el = document.getElementById('moefy-canvas')
const sparkler = new Ribbon(themeConfig, canvasOptions)
sparkler.mount(el as HTMLCanvasElement)
// @ts-ignore
window.sp = sparkler

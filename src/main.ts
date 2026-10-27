import './style.css'
import * as myCode from './myCode.ts'

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
}

myCode.startApp()

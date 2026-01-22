/** Chunk was on web.js **/
/** chunk id: 96175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Br: () => a,
  I2: () => s,
  Ms: () => o,
  Oy: () => i
}), require("./896048.js");
var Chunk41984 = require("./41984.js");

function i(e) {
  return e
}

function a(e) {
  switch (e) {
    case "click":
    case "unknown":
    default:
      return "click";
    case "mouseover":
      return "mouseover";
    case "mouseout":
      return "mouseout";
    case "mousemove":
    case "hover":
      return "mousemove"
  }
}

function s() {
  return {
    popoutOpened: false,
    windowHandleSentToNative: false,
    hasUseEffectFired: false,
    trackedPidFocused: false,
    reactInitializationStarted: false,
    cssLoaded: false,
    showInactiveCalled: false,
    allDone: false,
    errorMessage: null
  }
}
let o = new Set([Chunk41984.AR.WAITING_FOR_POPOUT_OPEN, Chunk41984.AR.WAITING_FOR_REACT_INITIALIZATION, Chunk41984.AR.WAITING_FOR_PID_FOCUS, Chunk41984.AR.WAITING_FOR_SUCCESSFUL_SHOW])
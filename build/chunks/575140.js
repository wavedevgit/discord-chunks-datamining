/** Chunk was on web.js **/
/** chunk id: 575140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FX: () => s,
  oc: () => a,
  r4: () => o,
  rd: () => i
}), require("./388685.js");
var Chunk837268 = require("./837268.js");

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

function o() {
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
let s = new Set([Chunk837268.mM.WAITING_FOR_POPOUT_OPEN, Chunk837268.mM.WAITING_FOR_REACT_INITIALIZATION, Chunk837268.mM.WAITING_FOR_PID_FOCUS, Chunk837268.mM.WAITING_FOR_SUCCESSFUL_SHOW])
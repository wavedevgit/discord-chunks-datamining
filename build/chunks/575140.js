/** Chunk was on web.js **/
/** chunk id: 575140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FX: () => o,
  r4: () => a,
  rd: () => i
}), require("./388685.js");
var Chunk837268 = require("./837268.js");

function i(e) {
  return e
}

function a() {
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
let o = new Set([Chunk837268.mM.WAITING_FOR_POPOUT_OPEN, Chunk837268.mM.WAITING_FOR_REACT_INITIALIZATION, Chunk837268.mM.WAITING_FOR_PID_FOCUS])
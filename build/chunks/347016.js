/** Chunk was on web.js **/
/** chunk id: 347016, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => a
});
var Chunk793030 = require("./793030.js"),
  Chunk607070 = require("./607070.js");
require("./865052.js"), require("./884221.js");
let a = {
  init() {
    Chunk607070.Z.addChangeListener(() => {
      Chunk607070.Z.keyboardModeEnabled ? (Chunk793030.dxT.setRingsEnabled(true), Chunk793030.dxT.enableAnimationTracking()) : (Chunk793030.dxT.setRingsEnabled(false), Chunk793030.dxT.disableAnimationTracking())
    })
  }
}
/** Chunk was on web.js **/
/** chunk id: 347016, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => o
});
var Chunk67136 = require("./67136.jsx"),
  Chunk607070 = require("./607070.js");
require("./47131.js"), require("./822928.js");
let o = {
  init() {
    Chunk607070.Z.addChangeListener(() => {
      Chunk607070.Z.keyboardModeEnabled ? (Chunk67136.dx.setRingsEnabled(true), Chunk67136.dx.enableAnimationTracking()) : (Chunk67136.dx.setRingsEnabled(false), Chunk67136.dx.disableAnimationTracking())
    })
  }
}
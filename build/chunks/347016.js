/** Chunk was on web.js **/
/** chunk id: 347016, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => o
});
var Chunk708816 = require("./708816.jsx"),
  Chunk607070 = require("./607070.js");
require("./64583.js"), require("./170424.js");
let o = {
  init() {
    Chunk607070.Z.addChangeListener(() => {
      Chunk607070.Z.keyboardModeEnabled ? (Chunk708816.dx.setRingsEnabled(true), Chunk708816.dx.enableAnimationTracking()) : (Chunk708816.dx.setRingsEnabled(false), Chunk708816.dx.disableAnimationTracking())
    })
  }
}
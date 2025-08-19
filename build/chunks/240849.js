/** Chunk was on web.js **/
/** chunk id: 240849, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk891304 = require("./891304.js"),
  Chunk556296 = require("./556296.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js");

function l(e, t) {
  return !(e === s.MAM.BROWSER && i.ZP.hasKeybind(s.MoX.MOUSE_BUTTON, t))
}
class c {
  initialize() {
    (0, Chunk358085.isDesktop)() && (Chunk998502.ZP.on("NAVIGATE_BACK", (e, t) => {
      l(t, s.qXD.Back) && (0, r.Hm)("native")
    }), Chunk998502.ZP.on("NAVIGATE_FORWARD", (e, t) => {
      l(t, s.qXD.Forward) && (0, r.TL)("native")
    }))
  }
}
let u = new c
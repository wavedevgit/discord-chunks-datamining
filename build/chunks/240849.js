/** Chunk was on web.js **/
/** chunk id: 240849, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk891304 = require("./891304.js"),
  Chunk556296 = require("./556296.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk295907 = require("./295907.js");

function c(e, t) {
  return !(e === s.MAM.BROWSER && i.ZP.hasKeybind(l.Mo.MOUSE_BUTTON, t))
}
class u {
  initialize() {
    (0, a.isDesktop)() && (o.ZP.on("NAVIGATE_BACK", (e, t) => {
      c(t, l.qX.Back) && (0, r.Hm)("native")
    }), o.ZP.on("NAVIGATE_FORWARD", (e, t) => {
      c(t, l.qX.Forward) && (0, r.TL)("native")
    }))
  }
}
let d = new u
/** Chunk was on web.js **/
/** chunk id: 769341, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk963169 = require("./963169.js"),
  Chunk532624 = require("./532624.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js"),
  Chunk650583 = require("./650583.js");

function c(e, t) {
  return !(e === o.TGd.BROWSER && i.Ay.hasKeybind(l.zY.MOUSE_BUTTON, t))
}
class u {
  initialize() {
    (0, a.isDesktop)() && (s.Ay.on("NAVIGATE_BACK", (e, t) => {
      c(t, l.RX.Back) && (0, r.OE)("native")
    }), s.Ay.on("NAVIGATE_FORWARD", (e, t) => {
      c(t, l.RX.Forward) && (0, r.Qb)("native")
    }))
  }
}
let d = new u
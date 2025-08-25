/** Chunk was on web.js **/
/** chunk id: 556809, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk710845 = require("./710845.js"),
  Chunk522474 = require("./522474.js"),
  Chunk145597 = require("./145597.js"),
  Chunk41534 = require("./41534.js"),
  Chunk32300 = require("./32300.js"),
  Chunk371651 = require("./371651.js"),
  Chunk610394 = require("./610394.js"),
  Chunk501787 = require("./501787.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = new Chunk710845.Z("OverlayWindowRAFManager"),
  p = window.requestAnimationFrame.bind(window),
  h = e => {
    try {
      let t = o.Z.getWindow(d.$J);
      if (null == t || "function" != typeof t.requestAnimationFrame || !c.default.isAnyOverlayRendering()) return p(e);
      let n = null !== u.ZP.getFocusedRunningGame(),
        r = null != t && t.document.hasFocus();
      if (n || r) return t.requestAnimationFrame(e)
    } catch (e) {
      _.error("RAF redirect failed, falling back to original", e), (0, s.D1)(e, u.ZP.getOverlayMethod((0, a.getPID)()))
    }
    return p(e)
  };
class m extends Chunk147913.Z {
  handlePatchOverlayWindowRaf() {
    let {
      enabled: e
    } = (0, Chunk32300.td)("OverlayWindowRAFManager");
    !module || __OVERLAY__ || (window.requestAnimationFrame = h)
  }
  _terminate() {
    window.requestAnimationFrame = p
  }
  constructor(...e) {
    super(...e), f(this, "actions", {
      OVERLAY_UPDATE_OVERLAY_STATE: this.handlePatchOverlayWindowRaf
    })
  }
}
let g = new m
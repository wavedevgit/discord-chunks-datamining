/** Chunk was on web.js **/
/** chunk id: 48345, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk77729 = require("./77729.js"),
  Chunk626584 = require("./626584.js"),
  Chunk616356 = require("./616356.js"),
  Chunk777334 = require("./777334.js"),
  Chunk41984 = require("./41984.js"),
  Chunk392164 = require("./392164.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Chunk626584.A("OverlayContentProtectionManagerV3");
class f extends Chunk439372.A {
  constructor(...e) {
    var t;
    super(...e), t = this, u(this, "shouldEnable", false), u(this, "enabled", false), u(this, "setContentProtection", e => {
      this.shouldEnable = e, this.flushContentProtection()
    }), u(this, "resetWindowState", function() {
      let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
      t.enabled = false, e && t.flushContentProtection()
    }), u(this, "flushContentProtection", () => {
      try {
        var e, t;
        if (this.enabled === this.shouldEnable) return;
        null === i.A || true === i.A || null == (e = (t = i.A.window).setWindowContentProtection) || e.call(t, c.f, this.shouldEnable), this.enabled = this.shouldEnable
      } catch (e) {
        d.error("Error setting content protection:", e), (0, s.pj)(e, l.Ue.OutOfProcess)
      }
    }), u(this, "actions", {
      STREAM_START: e => {
        let {
          pid: t,
          sourceId: n
        } = e, r = null != t || null != n && n.startsWith("window");
        this.setContentProtection(r)
      },
      STREAM_STOP: () => {
        null == o.A.getCurrentUserActiveStream() && this.setContentProtection(false)
      }
    })
  }
}
let p = new f
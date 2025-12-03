/** Chunk was on web.js **/
/** chunk id: 503522, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk579806 = require("./579806.js"),
  Chunk710845 = require("./710845.js"),
  Chunk199902 = require("./199902.js"),
  Chunk338388 = require("./338388.js"),
  Chunk837268 = require("./837268.js"),
  Chunk501787 = require("./501787.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Chunk710845.Z("OverlayContentProtectionManagerV3");
class f extends Chunk147913.Z {
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
        null === i.Z || true === i.Z || null == (e = (t = i.Z.window).setWindowContentProtection) || e.call(t, c.$J, this.shouldEnable), this.enabled = this.shouldEnable
      } catch (e) {
        d.error("Error setting content protection:", e), (0, s.D1)(e, l.gl.OutOfProcess)
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
        null == o.Z.getCurrentUserActiveStream() && this.setContentProtection(false)
      }
    })
  }
}
let p = new f
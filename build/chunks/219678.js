/** Chunk was on web.js **/
/** chunk id: 219678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk217222 = require("./217222.js"),
  Chunk353835 = require("./353835.js"),
  Chunk723702 = require("./723702.js"),
  Chunk751496 = require("./751496.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = false,
  u = null;
async function d() {
  var e, t;
  if ((0, o.isWindows)() && !a.A.getAppHardwareAccelerationEnabled() && (null == (t = window.DiscordNative) || null == (e = t.settings) ? true : e.set) != null) {
    let {
      enabled: e
    } = (0, s.b)({
      location: "updateSwitch"
    });
    await window.DiscordNative.settings.set("enableH264MFElectron", e), u = e
  }
}
class f extends Chunk439372.A {
  constructor(...e) {
    super(...e), l(this, "stores", new Map().set(i.A, () => {
      if (c && !a.A.getAppHardwareAccelerationEnabled()) {
        let {
          enabled: e
        } = (0, s.b)({
          location: "experimentStoreUpdate"
        });
        u !== e && d()
      }
    })), l(this, "actions", {
      POST_CONNECTION_OPEN: async () => {
        var e, t;
        c || (null == (t = window.DiscordNative) || null == (e = t.settings) ? true : e.set) == null || (0, o.isWindows)() && (c = true, await d())
      },
      LOGOUT: () => {
        c = false, u = null
      }
    })
  }
}
let p = new f
/** Chunk was on web.js **/
/** chunk id: 219678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk217222 = require("./217222.js"),
  Chunk723702 = require("./723702.js"),
  Chunk751496 = require("./751496.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = false,
  c = null;
async function u() {
  var e, t;
  if ((0, a.isWindows)() && (null == (t = window.DiscordNative) || null == (e = t.settings) ? true : e.set) != null) {
    let {
      enabled: e
    } = (0, s.b)({
      location: "updateSwitch"
    });
    await window.DiscordNative.settings.set("enableH264MFElectron", e), c = e
  }
}
class d extends Chunk439372.A {
  constructor(...e) {
    super(...e), o(this, "stores", new Map().set(i.A, () => {
      if (l) {
        let {
          enabled: e
        } = (0, s.b)({
          location: "experimentStoreUpdate"
        });
        c !== e && u()
      }
    })), o(this, "actions", {
      POST_CONNECTION_OPEN: async () => {
        var e, t;
        l || (null == (t = window.DiscordNative) || null == (e = t.settings) ? true : e.set) == null || (0, a.isWindows)() && (l = true, await u())
      },
      LOGOUT: () => {
        l = false, c = null
      }
    })
  }
}
let f = new d
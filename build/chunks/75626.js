/** Chunk was on web.js **/
/** chunk id: 75626, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk633289 = require("./633289.js"),
  Chunk358085 = require("./358085.js"),
  Chunk232850 = require("./232850.js");

function s(e, t, n) {
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
    } = (0, o.F)({
      location: "updateSwitch"
    });
    await window.DiscordNative.settings.set("enableH264MFElectron", e), c = e
  }
}
class d extends Chunk147913.Z {
  constructor(...e) {
    super(...e), s(this, "stores", new Map().set(i.Z, () => {
      if (l) {
        let {
          enabled: e
        } = (0, o.F)({
          location: "experimentStoreUpdate"
        });
        c !== e && u()
      }
    })), s(this, "actions", {
      POST_CONNECTION_OPEN: async () => {
        var e, t;
        !l && (null == (t = window.DiscordNative) || null == (e = t.settings) ? true : e.set) != null && (0, a.isWindows)() && (l = true, await u())
      },
      LOGOUT: () => {
        l = false, c = null
      }
    })
  }
}
let f = new d
/** Chunk was on web.js **/
/** chunk id: 894247, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./358797.js"), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk695346 = require("./695346.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = false;
class s extends Chunk147913.Z {
  setVerifyTimezone() {
    o = true
  }
  ensureTimezoneUpdated() {
    if (!o) return;
    o = false;
    let e = new Date().getTimezoneOffset();
    i.rN.getSetting() !== e && setImmediate(() => i.rN.updateSetting(e))
  }
  constructor(...e) {
    super(...e), a(this, "actions", {
      POST_CONNECTION_OPEN: () => {
        this.setVerifyTimezone()
      },
      OVERLAY_INITIALIZE: this.setVerifyTimezone,
      USER_SETTINGS_PROTO_UPDATE: this.ensureTimezoneUpdated
    })
  }
}
let l = new s
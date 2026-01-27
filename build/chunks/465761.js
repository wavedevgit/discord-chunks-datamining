/** Chunk was on web.js **/
/** chunk id: 465761, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./142703.js"), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk253932 = require("./253932.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = false;
class s extends Chunk439372.A {
  setVerifyTimezone() {
    o = true
  }
  ensureTimezoneUpdated() {
    if (!o) return;
    o = false;
    let e = new Date().getTimezoneOffset();
    i.JI.getSetting() !== e && setImmediate(() => i.JI.updateSetting(e))
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
/** Chunk was on web.js **/
/** chunk id: 894247, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./358797.js"), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk695346 = require("./695346.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = false;
class s extends Chunk147913.Z {
  maybeShowChangeLanguageToast() {}
  setVerifyTimezone() {
    a = true
  }
  ensureTimezoneUpdated() {
    if (!a) return;
    a = false;
    let e = new Date().getTimezoneOffset();
    Chunk695346.rN.getSetting() !== module && setImmediate(() => Chunk695346.rN.updateSetting(module))
  }
  constructor(...e) {
    super(...e), o(this, "actions", {
      POST_CONNECTION_OPEN: () => {
        this.setVerifyTimezone(), this.maybeShowChangeLanguageToast()
      },
      OVERLAY_INITIALIZE: this.setVerifyTimezone,
      USER_SETTINGS_PROTO_UPDATE: this.ensureTimezoneUpdated
    })
  }
}
let l = new s
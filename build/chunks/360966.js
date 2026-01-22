/** Chunk was on web.js **/
/** chunk id: 360966, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u,
  Q: () => c
}), require("./896048.js");
var Chunk562465 = require("./562465.js"),
  Chunk439372 = require("./439372.js"),
  Chunk869290 = require("./869290.jsx"),
  Chunk652215 = require("./652215.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk439372.A {
  handleDmSettingsUpsellShow(e) {
    a.A.openDmSettingsUpsellModal(e.guildId)
  }
  constructor(...e) {
    super(...e), o(this, "actions", {
      DM_SETTINGS_UPSELL_SHOW: this.handleDmSettingsUpsellShow
    })
  }
}

function c(e) {
  return r.Bo.post({
    url: s.Rsh.DM_SETTINGS_UPSELL_ACK(e),
    rejectWithError: false
  })
}
let u = new l
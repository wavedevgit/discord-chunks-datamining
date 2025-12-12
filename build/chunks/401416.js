/** Chunk was on web.js **/
/** chunk id: 401416, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => c,
  Z: () => u
}), require("./388685.js");
var Chunk544891 = require("./544891.js"),
  Chunk147913 = require("./147913.js"),
  Chunk25733 = require("./25733.jsx"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk147913.Z {
  handleDmSettingsUpsellShow(e) {
    o.Z.openDmSettingsUpsellModal(e.guildId)
  }
  constructor(...e) {
    super(...e), s(this, "actions", {
      DM_SETTINGS_UPSELL_SHOW: this.handleDmSettingsUpsellShow
    })
  }
}

function c(e) {
  return r.tn.post({
    url: a.ANM.DM_SETTINGS_UPSELL_ACK(e),
    rejectWithError: false
  })
}
let u = new l
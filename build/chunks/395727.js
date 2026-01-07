/** Chunk was on web.js **/
/** chunk id: 395727, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk317770 = require("./317770.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk801814 = require("./801814.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends Chunk317770.Z {
  _initialize() {
    a.isPlatformEmbedded && (o.ZP.on("UPDATE_DOWNLOADED", () => this.processModuleEvents()), o.ZP.on("MODULE_INSTALLED", (e, t, n) => this.processModuleEvents()), o.ZP.on("UPDATER_HISTORY_RESPONSE", (e, t) => {
      this._handleHistoryResponse(t)
    }), this.processModuleEvents())
  }
  _terminate() {}
  processModuleEvents() {
    o.ZP.send("UPDATER_HISTORY_QUERY_AND_TRUNCATE")
  }
  _handleHistoryResponse(e) {
    if (null == e) return;
    let t = 0 === Math.floor(500 * Math.random());
    e.forEach(e => {
      "analytics" === e.type ? e.name === l.rMx.UPDATER_METRICS_DOWNLOAD || e.name === l.rMx.UPDATER_METRICS_INSTALL || e.name === l.rMx.UPDATER_METRICS_COMBINED || e.name === l.rMx.UPDATER_METRICS_TRANSITION_STATUS ? t && i.default.track(e.name, e.data) : console.warn("Unknown updater analytic event ".concat(e.name)) : this._tracker.trackEvent(e)
    }), this._tracker.submissionReady() && (i.default.track(l.rMx.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset())
  }
  constructor(...e) {
    super(...e), c(this, "_tracker", new s.Z)
  }
}
let d = new u
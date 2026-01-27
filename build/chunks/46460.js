/** Chunk was on web.js **/
/** chunk id: 46460, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk272355 = require("./272355.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk777009 = require("./777009.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends Chunk272355.A {
  _initialize() {
    a.isPlatformEmbedded && (o.Ay.on("UPDATE_DOWNLOADED", () => this.processModuleEvents()), o.Ay.on("MODULE_INSTALLED", (e, t, n) => this.processModuleEvents()), o.Ay.on("UPDATER_HISTORY_RESPONSE", (e, t) => {
      this._handleHistoryResponse(t)
    }), this.processModuleEvents())
  }
  _terminate() {}
  processModuleEvents() {
    o.Ay.send("UPDATER_HISTORY_QUERY_AND_TRUNCATE")
  }
  _handleHistoryResponse(e) {
    if (null == e) return;
    let t = 0 === Math.floor(500 * Math.random());
    e.forEach(e => {
      "analytics" === e.type ? e.name === l.HAw.UPDATER_METRICS_DOWNLOAD || e.name === l.HAw.UPDATER_METRICS_INSTALL || e.name === l.HAw.UPDATER_METRICS_COMBINED || e.name === l.HAw.UPDATER_METRICS_TRANSITION_STATUS ? t && i.default.track(e.name, e.data) : console.warn("Unknown updater analytic event ".concat(e.name)) : this._tracker.trackEvent(e)
    }), this._tracker.submissionReady() && (i.default.track(l.HAw.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset())
  }
  constructor(...e) {
    super(...e), c(this, "_tracker", new s.A)
  }
}
let d = new u
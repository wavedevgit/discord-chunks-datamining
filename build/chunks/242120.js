/** Chunk was on web.js **/
/** chunk id: 242120, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk272355 = require("./272355.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js");
class l extends Chunk272355.A {
  _initialize() {
    a.isPlatformEmbedded && (o.Ay.on("APP_PUSH_ANALYTICS", (e, t) => {
      this._handleEventResponse(t)
    }), this.processModuleEvents())
  }
  _terminate() {}
  processModuleEvents() {
    try {
      o.Ay.send("APP_GET_ANALYTICS_EVENTS")
    } catch (e) {
      console.error("[analytics] failed to send analytics events query: ".concat(e))
    }
  }
  _handleEventResponse(e) {
    null != e && e.forEach(e => {
      "cdm" === e.type ? e.name === s.HAw.CDM_LOAD_STATUS || e.name === s.HAw.CDM_READY_COMPLETE ? i.default.track(e.name, e.data) : console.log("[analytics] received unknown cdm analytic event ".concat(e.name)) : "desktop_tti" === e.type && (e.name === s.HAw.DESKTOP_TTI ? i.default.track(e.name, e.data) : console.log("[analytics] received unknown desktop_tti analytic event ".concat(e.name)))
    })
  }
}
let c = new l
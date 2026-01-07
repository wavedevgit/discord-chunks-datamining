/** Chunk was on web.js **/
/** chunk id: 749349, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk317770 = require("./317770.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js");
class l extends Chunk317770.Z {
  _initialize() {
    a.isPlatformEmbedded && (o.ZP.on("APP_PUSH_ANALYTICS", (e, t) => {
      this._handleEventResponse(t)
    }), this.processModuleEvents())
  }
  _terminate() {}
  processModuleEvents() {
    try {
      o.ZP.send("APP_GET_ANALYTICS_EVENTS")
    } catch (e) {
      console.error("[analytics] failed to send analytics events query: ".concat(e))
    }
  }
  _handleEventResponse(e) {
    null != e && e.forEach(e => {
      "cdm" === e.type ? e.name === s.rMx.CDM_LOAD_STATUS || e.name === s.rMx.CDM_READY_COMPLETE ? i.default.track(e.name, e.data) : console.log("[analytics] received unknown cdm analytic event ".concat(e.name)) : "desktop_tti" === e.type && (e.name === s.rMx.DESKTOP_TTI ? i.default.track(e.name, e.data) : console.log("[analytics] received unknown desktop_tti analytic event ".concat(e.name)))
    })
  }
}
let c = new l
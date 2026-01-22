/** Chunk was on web.js **/
/** chunk id: 785796, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
let s = "".concat(Chunk652215.Joy, "/api/v2/scheduled-maintenances"),
  o = "".concat(Chunk652215.Joy, "/api/v2/incidents/unresolved.json"),
  l = {
    checkIncidents() {
      Promise.all([r.Bo.get({
        url: "".concat(s, "/active.json"),
        rejectWithError: true
      }), r.Bo.get(o)]).then(e => {
        let [t, n] = e, [r] = t.body.scheduled_maintenances, [a] = n.body.incidents;
        i.h.dispatch({
          type: "STATUS_PAGE_INCIDENT",
          incident: a || r
        })
      })
    },
    checkScheduledMaintenances() {
      r.Bo.get({
        url: "".concat(s, "/upcoming.json"),
        rejectWithError: true
      }).then(e => {
        let [t] = e.body.scheduled_maintenances;
        i.h.dispatch({
          type: "STATUS_PAGE_SCHEDULED_MAINTENANCE",
          maintenance: t
        })
      })
    },
    ackScheduledMaintenance() {
      i.h.dispatch({
        type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK"
      })
    }
  }
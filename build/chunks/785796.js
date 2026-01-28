/** Chunk was on 44384 **/
/** chunk id: 785796, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
let o = "".concat(Chunk652215.Joy, "/api/v2/scheduled-maintenances"),
  a = "".concat(Chunk652215.Joy, "/api/v2/incidents/unresolved.json"),
  s = {
    checkIncidents() {
      Promise.all([r.Bo.get({
        url: "".concat(o, "/active.json"),
        rejectWithError: true
      }), r.Bo.get(a)]).then(e => {
        let [t, n] = e, [r] = t.body.scheduled_maintenances, [l] = n.body.incidents;
        i.h.dispatch({
          type: "STATUS_PAGE_INCIDENT",
          incident: l || r
        })
      })
    },
    checkScheduledMaintenances() {
      r.Bo.get({
        url: "".concat(o, "/upcoming.json"),
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
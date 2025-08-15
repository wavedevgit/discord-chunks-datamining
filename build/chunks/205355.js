/** Chunk was on 31253 **/
/** chunk id: 205355, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let o = "".concat(Chunk981631.dGm, "/api/v2/scheduled-maintenances"),
  a = "".concat(Chunk981631.dGm, "/api/v2/incidents/unresolved.json"),
  c = {
    checkIncidents() {
      Promise.all([Chunk544891.tn.get({
        url: "".concat(o, "/active.json"),
        rejectWithError: true
      }), Chunk544891.tn.get(a)]).then(e => {
        let [t, n] = e, [r] = t.body.scheduled_maintenances, [l] = n.body.incidents;
        i.Z.dispatch({
          type: "STATUS_PAGE_INCIDENT",
          incident: l || r
        })
      })
    },
    checkScheduledMaintenances() {
      Chunk544891.tn.get({
        url: "".concat(o, "/upcoming.json"),
        rejectWithError: true
      }).then(e => {
        let [t] = e.body.scheduled_maintenances;
        i.Z.dispatch({
          type: "STATUS_PAGE_SCHEDULED_MAINTENANCE",
          maintenance: t
        })
      })
    },
    ackScheduledMaintenance() {
      Chunk570140.Z.dispatch({
        type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK"
      })
    }
  }
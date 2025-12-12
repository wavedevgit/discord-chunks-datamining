/** Chunk was on web.js **/
/** chunk id: 205355, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let o = "".concat(Chunk981631.dGm, "/api/v2/scheduled-maintenances"),
  s = "".concat(Chunk981631.dGm, "/api/v2/incidents/unresolved.json"),
  l = {
    checkIncidents() {
      Promise.all([Chunk544891.tn.get({
        url: "".concat(o, "/active.json"),
        rejectWithError: true
      }), Chunk544891.tn.get(s)]).then(e => {
        let [t, n] = e, [r] = t.body.scheduled_maintenances, [a] = n.body.incidents;
        i.Z.dispatch({
          type: "STATUS_PAGE_INCIDENT",
          incident: a || r
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
/** Chunk was on 76282 **/
n.d(t, {
  Z: () => s
}), n(47120);
var r = n(544891),
  i = n(570140),
  o = n(981631);
let l = "".concat(o.dGm, "/api/v2/scheduled-maintenances"),
  a = "".concat(o.dGm, "/api/v2/incidents/unresolved.json"),
  s = {
    checkIncidents() {
      Promise.all([r.tn.get({
        url: "".concat(l, "/active.json"),
        rejectWithError: !0
      }), r.tn.get(a)]).then(e => {
        let [t, n] = e, [r] = t.body.scheduled_maintenances, [o] = n.body.incidents;
        i.Z.dispatch({
          type: "STATUS_PAGE_INCIDENT",
          incident: o || r
        })
      })
    },
    checkScheduledMaintenances() {
      r.tn.get({
        url: "".concat(l, "/upcoming.json"),
        rejectWithError: !0
      }).then(e => {
        let [t] = e.body.scheduled_maintenances;
        i.Z.dispatch({
          type: "STATUS_PAGE_SCHEDULED_MAINTENANCE",
          maintenance: t
        })
      })
    },
    ackScheduledMaintenance() {
      i.Z.dispatch({
        type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK"
      })
    }
  }
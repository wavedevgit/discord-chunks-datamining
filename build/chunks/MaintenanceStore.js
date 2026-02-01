/** Chunk was on 9753 **/
/** chunk id: 437959, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var r, i, Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk785796 = require("./785796.js");
let c = "MaintenanceStore",
  u = null,
  d = null,
  p = null;
class m extends(i = Chunk311907.Ay.Store) {
  initialize() {
    p = a.w.get(c)
  }
  getIncident() {
    return u
  }
  getScheduledMaintenance() {
    return null != d && d.id !== p ? d : null
  }
}(r = "displayName") in m ? Object.defineProperty(m, r, {
  value: "MaintenanceStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : m[r] = "MaintenanceStore";
let f = new m(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    u = null, o.A.checkScheduledMaintenances()
  },
  STATUS_PAGE_INCIDENT: function(e) {
    u = e.incident
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE: function(e) {
    d = e.maintenance
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function() {
    if (null == d) returnfalse;
    p = d.id, a.w.set(c, p)
  }
})
/** Chunk was on 91173 **/
/** chunk id: 215427, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk205355 = require("./205355.js");
let c = "MaintenanceStore",
  u = null,
  d = null,
  p = null;
class m extends(i = Chunk442837.ZP.Store) {
  initialize() {
    p = Chunk433517.K.get(c)
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
let f = new m(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    u = null, Chunk205355.Z.checkScheduledMaintenances()
  },
  STATUS_PAGE_INCIDENT: function(e) {
    u = e.incident
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE: function(e) {
    d = e.maintenance
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function() {
    if (null == d) returnfalse;
    p = d.id, Chunk433517.K.set(c, p)
  }
})
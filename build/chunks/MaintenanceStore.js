/** Chunk was on web.js **/
/** chunk id: 437959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var r, Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk785796 = require("./785796.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = "MaintenanceStore",
  u = null,
  d = null,
  f = null;

function p() {
  u = null, o.A.checkScheduledMaintenances()
}

function _(e) {
  u = e.incident
}

function h(e) {
  d = e.maintenance
}

function m() {
  if (null == d) returnfalse;
  f = d.id, a.w.set(c, f)
}
class g extends(r = Chunk311907.Ay.Store) {
  initialize() {
    f = a.w.get(c)
  }
  getIncident() {
    return u
  }
  getScheduledMaintenance() {
    return null != d && d.id !== f ? d : null
  }
}
l(g, "displayName", "MaintenanceStore");
let E = new g(Chunk73153.h, {
  CONNECTION_OPEN: p,
  STATUS_PAGE_INCIDENT: _,
  STATUS_PAGE_SCHEDULED_MAINTENANCE: h,
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: m
})
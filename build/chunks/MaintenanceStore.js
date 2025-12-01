/** Chunk was on web.js **/
/** chunk id: 215427, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var r, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk205355 = require("./205355.js");

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
  u = null, Chunk205355.Z.checkScheduledMaintenances()
}

function _(e) {
  u = e.incident
}

function m(e) {
  d = e.maintenance
}

function h() {
  if (null == d) returnfalse;
  f = d.id, Chunk433517.K.set(c, f)
}
class g extends(r = Chunk442837.ZP.Store) {
  initialize() {
    f = Chunk433517.K.get(c)
  }
  getIncident() {
    return u
  }
  getScheduledMaintenance() {
    return null != d && d.id !== f ? d : null
  }
}
l(g, "displayName", "MaintenanceStore");
let E = new g(Chunk570140.Z, {
  CONNECTION_OPEN: p,
  STATUS_PAGE_INCIDENT: _,
  STATUS_PAGE_SCHEDULED_MAINTENANCE: m,
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: h
})
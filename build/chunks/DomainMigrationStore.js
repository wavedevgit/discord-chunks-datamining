/** Chunk was on web.js **/
/** chunk id: 554608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => s,
  Z: () => p
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var s = function(e) {
  return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.FAILED = 2] = "FAILED", e[e.SKIPPED = 3] = "SKIPPED", e
}({});
let l = 0;

function c() {
  l = 1
}

function u() {
  l = 2
}

function d() {
  l = 3
}
class f extends(r = Chunk442837.ZP.Store) {
  getMigrationStatus() {
    return l
  }
}
a(f, "displayName", "DomainMigrationStore");
let p = new f(Chunk570140.Z, {
  DOMAIN_MIGRATION_START: c,
  DOMAIN_MIGRATION_FAILURE: u,
  DOMAIN_MIGRATION_SKIP: d
})
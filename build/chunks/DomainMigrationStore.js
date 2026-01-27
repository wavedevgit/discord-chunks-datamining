/** Chunk was on web.js **/
/** chunk id: 7143, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p,
  p: () => s
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function o(e, t, n) {
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
class f extends(r = Chunk311907.Ay.Store) {
  getMigrationStatus() {
    return l
  }
}
o(f, "displayName", "DomainMigrationStore");
let p = new f(Chunk73153.h, {
  DOMAIN_MIGRATION_START: c,
  DOMAIN_MIGRATION_FAILURE: u,
  DOMAIN_MIGRATION_SKIP: d
})
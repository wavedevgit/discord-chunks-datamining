/** Chunk was on web.js **/
/** chunk id: 286934, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
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
let s = false;

function l() {
  s = false
}

function c() {
  s = true
}

function u() {
  s = false
}
class d extends(r = Chunk442837.ZP.Store) {
  initialize() {
    l()
  }
  isInProgress() {
    return s
  }
  constructor(...e) {
    super(...e), a(this, "summaryInProgress", false)
  }
}
a(d, "displayName", "ThreadSummaryStore");
let f = new d(Chunk570140.Z, {
  SUMMARIZE_THREAD_START: c,
  SUMMARIZE_THREAD_SUCCESS: u,
  SUMMARIZE_THREAD_FAILURE: u
})
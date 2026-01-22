/** Chunk was on web.js **/
/** chunk id: 780057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = false;

function l() {
  o = false
}

function c() {
  o = true
}

function u() {
  o = false
}
class d extends(r = Chunk311907.Ay.Store) {
  initialize() {
    l()
  }
  isInProgress() {
    return o
  }
  constructor(...e) {
    super(...e), s(this, "summaryInProgress", false)
  }
}
s(d, "displayName", "ThreadSummaryStore");
let f = new d(Chunk73153.h, {
  SUMMARIZE_THREAD_START: c,
  SUMMARIZE_THREAD_SUCCESS: u,
  SUMMARIZE_THREAD_FAILURE: u
})
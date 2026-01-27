/** Chunk was on web.js **/
/** chunk id: 780057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
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
class d extends(r = Chunk311907.Ay.Store) {
  initialize() {
    l()
  }
  isInProgress() {
    return s
  }
  constructor(...e) {
    super(...e), o(this, "summaryInProgress", false)
  }
}
o(d, "displayName", "ThreadSummaryStore");
let f = new d(Chunk73153.h, {
  SUMMARIZE_THREAD_START: c,
  SUMMARIZE_THREAD_SUCCESS: u,
  SUMMARIZE_THREAD_FAILURE: u
})
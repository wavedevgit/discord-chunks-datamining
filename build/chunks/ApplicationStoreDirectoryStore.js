/** Chunk was on web.js **/
/** chunk id: 31455, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E,
  N: () => f
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk156898 = require("./156898.js"),
  Chunk67480 = require("./67480.js"),
  Chunk328968 = require("./328968.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = new Map,
  d = new Map;
var f = function(e) {
  return e[e.NONE = 0] = "NONE", e[e.FETCHING = 1] = "FETCHING", e[e.FETCHED = 2] = "FETCHED", e[e.FAILED = 3] = "FAILED", e
}({});
let p = new Chunk156898.A({
  subscriptions: [],
  otps: []
});

function _(e) {
  let {
    applicationId: t,
    layout: n
  } = e;
  u.set(t, s.A.createFromServer(n)), d.delete(t)
}

function h(e) {
  let {
    applicationId: t
  } = e;
  d.set(t, 3)
}

function m(e) {
  let {
    applicationId: t
  } = e;
  d.set(t, 1)
}
class g extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.A, l.A)
  }
  hasStorefront(e) {
    return u.has(e)
  }
  getStoreLayout(e) {
    var t;
    return null != (t = u.get(e)) ? t : p
  }
  getFetchStatus(e) {
    var t;
    return u.has(e) ? 2 : null != (t = d.get(e)) ? t : 0
  }
}
c(g, "displayName", "ApplicationStoreDirectoryStore");
let E = new g(Chunk73153.h, {
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: _,
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: h,
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: m
})
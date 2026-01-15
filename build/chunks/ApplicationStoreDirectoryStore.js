/** Chunk was on web.js **/
/** chunk id: 238, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => f,
  Z: () => E
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk331065 = require("./331065.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js");

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
let p = new Chunk331065.Z({
  subscriptions: [],
  otps: []
});

function _(e) {
  let {
    applicationId: t,
    layout: n
  } = e;
  u.set(t, o.Z.createFromServer(n)), d.delete(t)
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
class g extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(s.Z, l.Z)
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
let E = new g(Chunk570140.Z, {
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: _,
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: h,
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: m
})
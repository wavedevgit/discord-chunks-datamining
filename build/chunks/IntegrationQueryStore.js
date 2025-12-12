/** Chunk was on web.js **/
/** chunk id: 718745, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = {},
  c = {
    integration: "",
    query: ""
  };

function u(e) {
  var t;
  let {
    integration: n,
    query: r
  } = e;
  l[n] = null != (t = l[n]) ? t : {}, l[n][r] = {
    loading: true,
    results: []
  }
}

function d(e) {
  let {
    integration: t,
    query: n,
    results: r
  } = e;
  l[t][n] = {
    loading: false,
    results: r.map(e => ({
      type: o.nkL[t].type,
      meta: e
    }))
  }, c = {
    query: n,
    integration: t
  }
}

function f(e) {
  let {
    integration: t,
    query: n
  } = e;
  delete l[t][n]
}
class p extends(r = Chunk442837.ZP.Store) {
  getResults(e, t) {
    if (null == e || null == t) return null;
    let n = l[e];
    return null != n && null != n[t] ? n[t] : null
  }
  getQuery() {
    return c
  }
}
s(p, "displayName", "IntegrationQueryStore");
let _ = new p(Chunk570140.Z, {
  INTEGRATION_QUERY: u,
  INTEGRATION_QUERY_SUCCESS: d,
  INTEGRATION_QUERY_FAILURE: f
})
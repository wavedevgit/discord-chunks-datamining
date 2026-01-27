/** Chunk was on web.js **/
/** chunk id: 29599, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

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
      type: o.Z86[t].type,
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
class p extends(r = Chunk311907.Ay.Store) {
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
let _ = new p(Chunk73153.h, {
  INTEGRATION_QUERY: u,
  INTEGRATION_QUERY_SUCCESS: d,
  INTEGRATION_QUERY_FAILURE: f
})
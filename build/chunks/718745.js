/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => _
});
var r, i = n(442837),
  o = n(570140),
  a = n(981631);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
  l[n] = null !== (t = l[n]) && void 0 !== t ? t : {}, l[n][r] = {
    loading: !0,
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
    loading: !1,
    results: r.map(e => ({
      type: a.nkL[t].type,
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
class p extends(r = i.ZP.Store) {
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
let _ = new p(o.Z, {
  INTEGRATION_QUERY: u,
  INTEGRATION_QUERY_SUCCESS: d,
  INTEGRATION_QUERY_FAILURE: f
})
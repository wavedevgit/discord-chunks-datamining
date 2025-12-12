/** Chunk was on web.js **/
/** chunk id: 741995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./781311.js"), require("./290780.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk723642 = require("./723642.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = Chunk723642.OA,
  u = "tokenized",
  d = false,
  f = {};

function p(e) {
  var t;
  let {
    id: n,
    query: r
  } = e;
  if ("string" != typeof r || "" === (r = r.trim())) return;
  let i = f[n] = null != (t = f[n]) ? t : [],
    a = i.indexOf(r);
  false !== a ? (i.splice(a, 1), i.unshift(r)) : null != i[0] && "" !== i[0] && r.startsWith(i[0]) ? i[0] = r : a < 0 && i.unshift(r), i.length > 5 && i.splice(5, i.length), o.K.set(s.OA, {
    history: f
  })
}

function _(e) {
  let {
    id: t
  } = e;
  delete f[t], o.K.set(s.OA, {
    history: f
  })
}

function m(e) {
  let {
    id: t,
    query: n
  } = e;
  null != f[t] && (f[t] = f[t].filter(e => e !== n), o.K.set(s.OA, {
    history: f
  }))
}

function h(e) {
  return Object.keys(e).forEach(t => {
    Array.isArray(e[t]) && (e[t] = e[t].filter(e => "string" == typeof e && e.trim())), Array.isArray(e[t]) && 0 !== e[t].length || delete e[t]
  }), e
}

function g() {
  Chunk433517.K.remove(Chunk723642.OA), f = {}
}
class E extends(r = Chunk442837.ZP.Store) {
  initialize() {
    let e = Chunk433517.K.get(c);
    (null == module ? true : module.history) != null && (f = h(module.history)), d = !!Chunk433517.K.get(u)
  }
  isTokenized() {
    return d
  }
  getHistory(e) {
    return f[e]
  }
}
l(E, "displayName", Chunk723642.zn);
let b = new E(Chunk570140.Z, {
  SEARCH_HISTORY_WEB_CLEAR_ITEMS: _,
  SEARCH_HISTORY_WEB_REMOVE_ITEM: m,
  SEARCH_HISTORY_WEB_ADD_ITEM: p,
  LOGOUT: g
})
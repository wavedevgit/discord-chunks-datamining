/** Chunk was on web.js **/
/** chunk id: 842716, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./733351.js"), require("./667532.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk768570 = require("./768570.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = Chunk768570.nC,
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
    s = i.indexOf(r);
  false !== s ? (i.splice(s, 1), i.unshift(r)) : null != i[0] && "" !== i[0] && r.startsWith(i[0]) ? i[0] = r : s < 0 && i.unshift(r), i.length > 5 && i.splice(5, i.length), a.w.set(o.nC, {
    history: f
  })
}

function _(e) {
  let {
    id: t
  } = e;
  delete f[t], a.w.set(o.nC, {
    history: f
  })
}

function h(e) {
  let {
    id: t,
    query: n
  } = e;
  null != f[t] && (f[t] = f[t].filter(e => e !== n), a.w.set(o.nC, {
    history: f
  }))
}

function m(e) {
  return Object.keys(e).forEach(t => {
    Array.isArray(e[t]) && (e[t] = e[t].filter(e => "string" == typeof e && e.trim())), Array.isArray(e[t]) && 0 !== e[t].length || delete e[t]
  }), e
}

function g() {
  a.w.remove(o.nC), f = {}
}
class E extends(r = Chunk311907.Ay.Store) {
  initialize() {
    let e = a.w.get(c);
    (null == e ? true : e.history) != null && (f = m(e.history)), d = !!a.w.get(u)
  }
  isTokenized() {
    return d
  }
  getHistory(e) {
    return f[e]
  }
}
l(E, "displayName", Chunk768570.yQ);
let y = new E(Chunk73153.h, {
  SEARCH_HISTORY_WEB_CLEAR_ITEMS: _,
  SEARCH_HISTORY_WEB_REMOVE_ITEM: h,
  SEARCH_HISTORY_WEB_ADD_ITEM: p,
  LOGOUT: g
})
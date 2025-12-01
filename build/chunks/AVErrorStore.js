/** Chunk was on web.js **/
/** chunk id: 915525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./539854.js");
var r, Chunk843991 = require("./843991.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = new Map,
  c = new Map;

function u(e, t) {
  return e.type === t
}
class d extends(r = Chunk442837.ZP.Store) {
  hasActiveErrorOfType(e) {
    var t;
    return (null != (t = c.get(e)) ? t : []).length > 0
  }
  getActiveErrors() {
    return l instanceof Map || (l = new Map), l
  }
  getActiveErrorsOfType(e) {
    let t = [],
      n = c.get(e);
    if (null == n) return t;
    for (let r of n) {
      let n = l.get(r);
      null != n && u(n, e) && t.push(n)
    }
    return t
  }
}

function f(e) {
  let {
    activeErrors: t
  } = e;
  if (__OVERLAY__ || !(t instanceof Map)) return;
  l instanceof Map || (l = new Map);
  let n = new Set(t.keys()),
    r = new Set(l.keys());
  if (!(0, i.O)(n, r))
    for (let [e, n] of(l = t, c = new Map, l.entries())) {
      var a;
      let t = null != (a = c.get(n.type)) ? a : [];
      t.push(e), c.set(n.type, t)
    }
}
s(d, "displayName", "AVErrorStore");
let p = new d(Chunk570140.Z, {
  ACTIVE_AV_ERRORS_CHANGED: f
})
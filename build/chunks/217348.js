/** Chunk was on web.js **/
/** chunk id: 217348, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Df: () => l,
  S6: () => c,
  Xy: () => s,
  ZT: () => i,
  dE: () => a,
  is: () => o,
  qo: () => u,
  yl: () => d
});
var Chunk239189 = require("./239189.js"),
  i = function() {},
  a = function(e, t, n) {
    return Object.defineProperty(e, t, {
      value: n,
      writable: true,
      configurable: true
    })
  },
  o = {
    arr: Array.isArray,
    obj: function(e) {
      return !!e && "Object" === e.constructor.name
    },
    fun: function(e) {
      return "function" == typeof e
    },
    str: function(e) {
      return "string" == typeof e
    },
    num: function(e) {
      return "number" == typeof e
    },
    und: function(e) {
      return true === e
    }
  };

function s(e, t) {
  if (o.arr(e)) {
    if (!o.arr(t) || e.length !== t.length) returnfalse;
    for (var n = 0; n < e.length; n++)
      if (e[n] !== t[n]) returnfalse;
    returntrue
  }
  return e === t
}
var l = function(e) {
    return o.str(e) && ("#" == e[0] || /\d/.test(e) || !!(r.colorNames && r.colorNames[e]))
  },
  c = function(e, t, n) {
    o.fun(e.forEach) ? e.forEach(t, n) : Object.keys(e).forEach(function(r) {
      return t.call(n, e[r], r)
    })
  },
  u = function(e) {
    return o.und(e) ? [] : o.arr(e) ? e : [e]
  };

function d(e, t) {
  if (e.size) {
    var n = Array.from(e);
    e.clear(), c(n, t)
  }
}
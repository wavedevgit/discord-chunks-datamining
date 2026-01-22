/** Chunk was on web.js **/
/** chunk id: 233710, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $7: () => l,
  $r: () => u,
  OX: () => a,
  __: () => c,
  bX: () => d,
  is: () => s,
  lQ: () => i,
  n4: () => o
});
var Chunk476575 = require("./476575.js"),
  i = function() {},
  a = function(e, t, n) {
    return Object.defineProperty(e, t, {
      value: n,
      writable: true,
      configurable: true
    })
  },
  s = {
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

function o(e, t) {
  if (s.arr(e)) {
    if (!s.arr(t) || e.length !== t.length) returnfalse;
    for (var n = 0; n < e.length; n++)
      if (e[n] !== t[n]) returnfalse;
    returntrue
  }
  return e === t
}
var l = function(e) {
    return s.str(e) && ("#" == e[0] || /\d/.test(e) || !!(r.colorNames && r.colorNames[e]))
  },
  c = function(e, t, n) {
    s.fun(e.forEach) ? e.forEach(t, n) : Object.keys(e).forEach(function(r) {
      return t.call(n, e[r], r)
    })
  },
  u = function(e) {
    return s.und(e) ? [] : s.arr(e) ? e : [e]
  };

function d(e, t) {
  if (e.size) {
    var n = Array.from(e);
    e.clear(), c(n, t)
  }
}
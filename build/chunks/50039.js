/** Chunk was on web.js **/
/** chunk id: 50039, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $p: () => i,
  DL: () => o,
  LI: () => l,
  k$: () => a,
  sq: () => s
});
var Chunk73800 = require("./73800.js"),
  i = function(e) {
    return Array.isArray(e) ? e[0] : e
  },
  o = function(e) {
    if ("function" == typeof e) {
      for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
      return e.apply(true, n)
    }
  },
  a = function(e, t) {
    if ("function" == typeof e) return o(e, t);
    null != e && (e.current = t)
  },
  s = function(e) {
    return e.reduce(function(e, t) {
      var n = t[0],
        r = t[1];
      return e[n] = r, e
    }, {})
  },
  l = "undefined" != typeof window && window.document && window.document.createElement ? Chunk73800.useLayoutEffect : Chunk73800.useEffect
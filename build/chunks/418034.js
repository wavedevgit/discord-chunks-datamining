/** Chunk was on web.js **/
/** chunk id: 418034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Es: () => l,
  PW: () => s,
  cZ: () => o,
  oV: () => a,
  vq: () => i
});
var Chunk64700 = require("./64700.js"),
  i = function(e) {
    return Array.isArray(e) ? e[0] : e
  },
  a = function(e) {
    if ("function" == typeof e) {
      for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
      return e.apply(true, n)
    }
  },
  o = function(e, t) {
    if ("function" == typeof e) return a(e, t);
    null != e && (e.current = t)
  },
  s = function(e) {
    return e.reduce(function(e, t) {
      var n = t[0],
        r = t[1];
      return e[n] = r, e
    }, {})
  },
  l = "u" > typeof window && window.document && window.document.createElement ? Chunk64700.useLayoutEffect : Chunk64700.useEffect
/** Chunk was on web.js **/
/** chunk id: 303527, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return function(t) {
    var n, r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
      s = r.width,
      o = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth],
      l = t.match(o);
    if (!l) return null;
    var c = l[0],
      u = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth],
      d = Array.isArray(u) ? a(u, function(e) {
        return e.test(c)
      }) : i(u, function(e) {
        return e.test(c)
      });
    return n = e.valueCallback ? e.valueCallback(d) : d, {
      value: n = r.valueCallback ? r.valueCallback(n) : n,
      rest: t.slice(c.length)
    }
  }
}

function i(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n])) return n
}

function a(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n])) return n
}
require.d(exports, {
  A: () => r
})
/** Chunk was on web.js **/
/** chunk id: 21814, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  var t;
  if ("undefined" == typeof window || null == window.navigator) returnfalse;
  let n = null == (t = window.navigator.userAgentData) ? true : t.brands;
  return Array.isArray(n) && n.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
}

function i(e) {
  var t;
  return "undefined" != typeof window && null != window.navigator && e.test((null == (t = window.navigator.userAgentData) ? true : t.platform) || window.navigator.platform)
}

function o(e) {
  let t = null;
  return () => (null == t && (t = e()), t)
}
require.d(exports, {
  Dt: () => p,
  Pf: () => d,
  V5: () => a,
  ad: () => u,
  gn: () => c,
  i7: () => f,
  vU: () => _,
  zc: () => l
});
let a = o(function() {
    return i(/^Mac/i)
  }),
  s = o(function() {
    return i(/^iPhone/i)
  }),
  l = o(function() {
    return i(/^iPad/i) || a() && navigator.maxTouchPoints > 1
  }),
  c = o(function() {
    return s() || l()
  }),
  u = o(function() {
    return a() || c()
  }),
  d = o(function() {
    return r(/AppleWebKit/i) && !f()
  }),
  f = o(function() {
    return r(/Chrome/i)
  }),
  p = o(function() {
    return r(/Android/i)
  }),
  _ = o(function() {
    return r(/Firefox/i)
  })
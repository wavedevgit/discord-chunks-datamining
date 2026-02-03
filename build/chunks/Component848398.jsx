/** Chunk was on web.js **/
/** chunk id: 848398, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function s(e) {
  (0, i.mMO)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("50906"), n.e("89479"), n.e("41917")]).then(n.bind(n, 126703));
    return n => (0, r.jsx)(t, o({
      analyticsLocation: e
    }, n))
  })
}
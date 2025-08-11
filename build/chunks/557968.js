/** Chunk was on web.js **/
/** chunk id: 557968, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk626135 = require("./626135.js"),
  Chunk360347 = require("./360347.js"),
  Chunk981631 = require("./981631.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
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

function l(e) {
  let {
    tab_opened: t,
    source: n
  } = e, a = (0, i.Z)();
  r.default.track(o.rMx.FRIENDS_LIST_CLICKED, s({
    tab_opened: t,
    source: n
  }, a))
}
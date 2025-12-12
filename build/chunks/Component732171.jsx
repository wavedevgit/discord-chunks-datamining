/** Chunk was on web.js **/
/** chunk id: 732171, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e) {
  a.default.track(o.rMx.OPEN_MODAL, {
    type: o.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
    location: e
  }), (0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("76157").then(n.bind(n, 828569));
    return t => (0, r.jsx)(e, l({}, t))
  })
}
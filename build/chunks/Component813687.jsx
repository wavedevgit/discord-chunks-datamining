/** Chunk was on web.js **/
/** chunk id: 813687, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js");

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

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = "social-layer-storefront-forward-link-modal",
  u = e => {
    let {
      sku: t,
      guildId: a,
      source: s,
      analyticsLocations: u,
      analyticsContext: d
    } = e;
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("36653"), n.e("33648"), n.e("8193")]).then(n.bind(n, 560083));
      return n => (0, r.jsx)(e, l(o({}, n), {
        sku: t,
        guildId: a,
        source: s,
        analyticsLocations: u,
        analyticsContext: d
      }))
    }, {
      stackingBehavior: "stack",
      modalKey: c
    })
  }
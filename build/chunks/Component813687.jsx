/** Chunk was on web.js **/
/** chunk id: 813687, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk912332 = require("./912332.jsx");

function o(e, t, n) {
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
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = e => {
  let {
    sku: t,
    guildId: o,
    source: l,
    analyticsLocations: u,
    analyticsContext: d
  } = e;
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("36653"), n.e("33648"), n.e("8193")]).then(n.bind(n, 560083));
    return n => (0, r.jsx)(e, c(s({}, n), {
      sku: t,
      guildId: o,
      source: l,
      analyticsLocations: u,
      analyticsContext: d
    }))
  }, {
    stackingBehavior: "stack",
    modalKey: a.so
  })
}
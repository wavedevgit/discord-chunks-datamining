/** Chunk was on web.js **/
/** chunk id: 345938, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk294454 = require("./294454.jsx");

function s(e, t, n) {
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
      s(e, t, n[t])
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
    guildId: s,
    source: l,
    analyticsLocations: u,
    analyticsContext: d
  } = e;
  (0, i.mMO)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("96758"), n.e("43622"), n.e("2644")]).then(n.bind(n, 763375));
    return n => (0, r.jsx)(e, c(o({}, n), {
      sku: t,
      guildId: s,
      source: l,
      analyticsLocations: u,
      analyticsContext: d
    }))
  }, {
    stackingBehavior: "stack",
    modalKey: a.aU
  })
}
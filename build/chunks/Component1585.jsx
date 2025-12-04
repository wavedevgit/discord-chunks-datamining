/** Chunk was on web.js **/
/** chunk id: 1585, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ps: () => d,
  y9: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js");
require("./956664.js");
var Chunk419061 = require("./419061.js");

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

function u(e) {
  return "number" != typeof e ? (0, i.dcp)(e) * a.hs : e * a.hs
}
let d = e => {
  let {
    analyticsLocations: t,
    initialSelectedDecoration: a,
    isTryItOut: o,
    guild: l,
    onClose: u
  } = e;
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("79589").then(n.bind(n, 235400));
    return n => (0, r.jsx)(e, c(s({}, n), {
      onCloseModal: n.onClose,
      onClose: u,
      analyticsLocations: t,
      initialSelectedDecoration: a,
      isTryItOut: o,
      guild: l
    }))
  }, {})
}
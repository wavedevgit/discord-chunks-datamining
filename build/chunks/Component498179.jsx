/** Chunk was on web.js **/
/** chunk id: 498179, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk283595 = require("./283595.js"),
  Chunk55563 = require("./55563.js"),
  Chunk780570 = require("./780570.js"),
  Chunk701560 = require("./701560.jsx"),
  Chunk785547 = require("./785547.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  let {
    application: t,
    fullWidth: n = false,
    size: d = a.zx.Sizes.LARGE,
    color: p,
    customDisabledColor: m,
    hideNotLaunchable: h,
    tooltipPosition: g,
    onClick: E,
    className: b,
    source: y,
    hover: O,
    innerClassName: v
  } = e, S = {
    fullWidth: n,
    size: d,
    color: p,
    customDisabledColor: m,
    tooltipPosition: g,
    onClick: E,
    className: b,
    hover: O,
    innerClassName: v
  }, I = (0, i.e7)([o.Z], () => o.Z.getActiveLibraryApplication(t.id)), T = null != I ? I.sku.id : null, C = null != T ? T : t.primarySkuId, A = (0, i.e7)([s.Z], () => null != C && !s.Z.didFetchingSkuFail(C));
  return null != I && (0, l.Je)(I) ? (0, r.jsx)(u.Z, _(f({}, S), {
    libraryApplication: I,
    source: y
  })) : A ? (0, r.jsx)("div", {
    children: "deprecated!"
  }) : (0, r.jsx)(c.Z, _(f({}, S), {
    hideNotLaunchable: h,
    applicationId: t.id
  }))
}
/** Chunk was on web.js **/
/** chunk id: 498179, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk283595 = require("./283595.js"),
  Chunk55563 = require("./55563.js"),
  Chunk780570 = require("./780570.js"),
  Chunk701560 = require("./701560.jsx"),
  Chunk785547 = require("./785547.jsx");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e) {
  let {
    application: t,
    fullWidth: n = false,
    size: u = "md",
    playButtonVariant: f,
    disabledVariant: _,
    hideNotLaunchable: m,
    tooltipPosition: h,
    onClick: g,
    className: E,
    source: b,
    hover: y,
    innerClassName: O
  } = e, v = {
    fullWidth: n,
    size: u,
    disabledVariant: _,
    tooltipPosition: h,
    onClick: g,
    className: E,
    hover: y,
    innerClassName: O
  }, S = (0, i.e7)([a.Z], () => a.Z.getActiveLibraryApplication(t.id)), I = null != S ? S.sku.id : null, T = null != I ? I : t.primarySkuId, C = (0, i.e7)([o.Z], () => null != T && !o.Z.didFetchingSkuFail(T));
  return null != S && (0, s.Je)(S) ? (0, r.jsx)(c.Z, p(d({}, v), {
    playButtonVariant: f,
    libraryApplication: S,
    source: b
  })) : C ? (0, r.jsx)("div", {
    children: "deprecated!"
  }) : (0, r.jsx)(l.Z, p(d({}, v), {
    variant: f,
    hideNotLaunchable: m,
    applicationId: t.id
  }))
}
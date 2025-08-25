/** Chunk was on web.js **/
/** chunk id: 359138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk747545 = require("./747545.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk745343 = require("./745343.js");

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

function _(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = 387,
  m = 218;

function g() {
  let e = Chunk131951.Z.getCameraComponent(),
    t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getVideoDeviceId()),
    [n, d] = Chunk647438.useState(false),
    _ = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isVideoAvailable());
  return require ? (0, Chunk951288.jsx)("div", {
    className: Chunk745343.cameraWrapper,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk745343.camera,
      children: [(0, Chunk951288.jsx)(module, {
        deviceId: exports,
        width: h,
        height: m,
        disabled: !require
      }), (0, Chunk951288.jsx)(Chunk747545.S, {})]
    })
  }) : (0, Chunk951288.jsx)("div", {
    className: Chunk745343.cameraWrapper,
    children: (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: _ ? null : Chunk388032.intl.string(Chunk388032.t["8jSzSU"]),
      children: e => (0, r.jsx)(a.zxk, p(f({
        variant: "primary",
        text: c.intl.string(c.t.JIf4v7)
      }, e), {
        onClick: () => d(true),
        disabled: !_
      }))
    })
  })
}
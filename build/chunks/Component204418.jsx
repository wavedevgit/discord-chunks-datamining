/** Chunk was on web.js **/
/** chunk id: 204418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  d = e => {
    let {
      user: t,
      guildId: n,
      avatarDecorationOverride: o,
      status: l,
      avatarSize: d = i.EFr.SIZE_120,
      "aria-hidden": f = false,
      className: p,
      animateOnHover: _ = false,
      questPreviewRewardAssetUrl: h = null
    } = e, {
      avatarDecorationSrc: m,
      avatarSrc: g,
      eventHandlers: E
    } = (0, a.Z)({
      userId: t.id,
      guildId: n,
      size: d,
      showPending: true,
      avatarDecorationOverride: o,
      animateOnHover: _
    });
    return (0, r.jsx)(u, c({
      avatarDecoration: null != m ? m : h,
      src: g,
      size: d,
      status: l,
      "aria-label": f ? true : s.intl.string(s.t.lqaIxI),
      "aria-hidden": f,
      className: p
    }, E))
  }
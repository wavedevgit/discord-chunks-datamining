/** Chunk was on web.js **/
/** chunk id: 291661, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk837921 = require("./837921.js"),
  Chunk985018 = require("./985018.jsx");

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
let u = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF,
  d = e => {
    let {
      user: t,
      guildId: n,
      avatarDecorationOverride: s,
      status: l,
      avatarSize: d = i._3J.SIZE_120,
      "aria-hidden": f = false,
      className: p,
      animateOnHover: _ = false,
      questPreviewRewardAssetUrl: h = null
    } = e, {
      avatarDecorationSrc: m,
      avatarSrc: g,
      eventHandlers: E
    } = (0, a.A)({
      userId: t.id,
      guildId: n,
      size: d,
      showPending: true,
      avatarDecorationOverride: s,
      animateOnHover: _
    });
    return (0, r.jsx)(u, c({
      avatarDecoration: null != m ? m : h,
      src: g,
      size: d,
      status: l,
      "aria-label": f ? true : o.intl.string(o.t.lqaIxI),
      "aria-hidden": f,
      className: p
    }, E))
  }
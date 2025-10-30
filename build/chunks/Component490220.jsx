/** Chunk was on web.js **/
/** chunk id: 490220, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk588126 = require("./588126.js"),
  Chunk643879 = require("./643879.js"),
  Chunk25990 = require("./25990.js"),
  Chunk678135 = require("./678135.jsx"),
  Chunk575169 = require("./575169.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e) {
  var t;
  let {
    user: f,
    disabledInputs: p,
    containerClassName: h
  } = e, {
    reducedMotion: m
  } = i.useContext(o.Sfi), {
    pendingAvatar: g,
    pendingBanner: E,
    pendingDisplayNameStyles: b,
    pendingThemeColors: y,
    pendingPronouns: O,
    pendingBio: v,
    tryItOutThemeColors: I,
    tryItOutAvatar: S,
    tryItOutBanner: T,
    tryItOutAvatarDecoration: A,
    tryItOutDisplayNameStyles: C
  } = (0, a.cj)([c.Z], () => _({}, c.Z.getAllPending(), c.Z.getAllTryItOut())), N = (0, l.SD)({
    userId: f.id,
    image: null != S ? S : g
  }), R = (0, s.Z)(A, false);
  return (0, r.jsx)(u.Z, {
    containerClassName: h,
    user: f,
    pendingPronouns: O,
    pendingBio: v,
    pendingBanner: null != (t = null != T ? T : E) ? t : n(466045),
    pendingDisplayNameStyles: null != C ? C : b,
    pendingAvatar: N,
    pendingThemeColors: null != I ? I : y,
    pendingAvatarDecoration: R,
    avatarClassName: null != S || null != g || m.enabled ? true : d.spinningAvatar,
    canUsePremiumCustomization: true,
    isTryItOutFlow: true,
    disabledInputs: p,
    hideExampleButton: true
  })
}
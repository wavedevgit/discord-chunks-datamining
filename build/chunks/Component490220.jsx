/** Chunk was on web.js **/
/** chunk id: 490220, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk643879 = require("./643879.js"),
  Chunk25990 = require("./25990.js"),
  Chunk678135 = require("./678135.jsx"),
  Chunk575169 = require("./575169.js");

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

function _(e) {
  var t;
  let {
    user: d,
    disabledInputs: _,
    containerClassName: p
  } = e, {
    reducedMotion: h
  } = i.useContext(o.Sfi), {
    pendingAvatar: m,
    pendingBanner: g,
    pendingAvatarDecoration: E,
    pendingDisplayNameStyles: b,
    pendingThemeColors: y,
    pendingPronouns: O,
    pendingBio: v,
    tryItOutThemeColors: I,
    tryItOutAvatar: T,
    tryItOutBanner: S,
    tryItOutAvatarDecoration: A,
    tryItOutDisplayNameStyles: C
  } = (0, a.cj)([l.Z], () => f({}, l.Z.getAllPending(), l.Z.getAllTryItOut())), N = (0, s.SD)({
    userId: d.id,
    image: null != T ? T : m
  });
  return (0, r.jsx)(c.Z, {
    containerClassName: p,
    user: d,
    pendingPronouns: O,
    pendingBio: v,
    pendingBanner: null != (t = null != S ? S : g) ? t : n(466045),
    pendingDisplayNameStyles: null != C ? C : b,
    pendingAvatar: N,
    pendingThemeColors: null != I ? I : y,
    pendingAvatarDecoration: true !== A ? A : E,
    avatarClassName: null != T || null != m || h.enabled ? true : u.spinningAvatar,
    canUsePremiumCustomization: true,
    isTryItOutFlow: true,
    disabledInputs: _,
    hideExampleButton: true
  })
}
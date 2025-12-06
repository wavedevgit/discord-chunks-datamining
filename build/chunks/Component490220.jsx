/** Chunk was on web.js **/
/** chunk id: 490220, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function p(e) {
  var t;
  let {
    user: d,
    disabledInputs: p,
    containerClassName: _
  } = e, {
    reducedMotion: m
  } = i.useContext(o.Sfi), {
    pendingAvatar: h,
    pendingBanner: g,
    pendingAvatarDecoration: E,
    pendingProfileEffect: b,
    pendingDisplayNameStyles: y,
    pendingThemeColors: O,
    pendingPronouns: v,
    pendingBio: S,
    tryItOutThemeColors: I,
    tryItOutAvatar: T,
    tryItOutBanner: A,
    tryItOutAvatarDecoration: C,
    tryItOutDisplayNameStyles: N
  } = (0, a.cj)([l.Z], () => f({}, l.Z.getAllPending(), l.Z.getAllTryItOut())), P = (0, s.SD)({
    userId: d.id,
    image: null != T ? T : h
  });
  return (0, r.jsx)(c.Z, {
    containerClassName: _,
    user: d,
    pendingPronouns: v,
    pendingBio: S,
    pendingBanner: null != (t = null != A ? A : g) ? t : n(466045),
    pendingDisplayNameStyles: null != N ? N : y,
    pendingAvatar: P,
    pendingThemeColors: null != I ? I : O,
    pendingAvatarDecoration: true !== C ? C : E,
    pendingProfileEffect: b,
    avatarClassName: null != T || null != h || m.enabled ? true : u.spinningAvatar,
    canUsePremiumCustomization: true,
    isTryItOut: true,
    disabledInputs: p,
    hideExampleButton: true
  })
}
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
  Chunk725412 = require("./725412.js");

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
    pendingProfileEffect: b,
    pendingDisplayNameStyles: y,
    pendingThemeColors: O,
    pendingPronouns: v,
    pendingBio: I,
    tryItOutThemeColors: S,
    tryItOutAvatar: T,
    tryItOutBanner: A,
    tryItOutProfileEffect: C,
    tryItOutAvatarDecoration: N,
    tryItOutDisplayNameStyles: R
  } = (0, a.cj)([l.Z], () => f({}, l.Z.getAllPending(), l.Z.getAllTryItOut())), P = (0, s.SD)({
    userId: d.id,
    image: null != T ? T : m
  });
  return (0, r.jsx)(c.Z, {
    containerClassName: p,
    user: d,
    pendingPronouns: v,
    pendingBio: I,
    pendingBanner: null != (t = null != A ? A : g) ? t : n(466045),
    pendingDisplayNameStyles: null != R ? R : y,
    pendingAvatar: P,
    pendingThemeColors: null != S ? S : O,
    pendingAvatarDecoration: true !== N ? N : E,
    pendingProfileEffect: true !== C ? C : b,
    avatarClassName: null != T || null != m || h.enabled ? true : u.spinningAvatar,
    canUsePremiumCustomization: true,
    isTryItOut: true,
    disabledInputs: _,
    hideExampleButton: true
  })
}
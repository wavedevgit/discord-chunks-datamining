/** Chunk was on web.js **/
/** chunk id: 253604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk101058 = require("./101058.js"),
  Chunk752319 = require("./752319.js"),
  Chunk287070 = require("./287070.jsx"),
  Chunk83118 = require("./83118.js");

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
    reducedMotion: h
  } = i.useContext(s.CZY), {
    pendingAvatar: m,
    pendingBanner: g,
    pendingAvatarDecoration: E,
    pendingProfileEffect: y,
    pendingDisplayNameStyles: b,
    pendingThemeColors: O,
    pendingPronouns: v,
    pendingBio: A,
    tryItOutThemeColors: I,
    tryItOutAvatar: S,
    tryItOutBanner: T,
    tryItOutAvatarDecoration: C,
    tryItOutDisplayNameStyles: N
  } = (0, a.cf)([l.A], () => f({}, l.A.getAllPending(), l.A.getAllTryItOut())), R = (0, o.V7)({
    userId: d.id,
    image: null != S ? S : m
  });
  return (0, r.jsx)(c.A, {
    containerClassName: _,
    user: d,
    pendingPronouns: v,
    pendingBio: A,
    pendingBanner: null != (t = null != T ? T : g) ? t : n(636763),
    pendingDisplayNameStyles: null != N ? N : b,
    pendingAvatar: R,
    pendingThemeColors: null != I ? I : O,
    pendingAvatarDecoration: true !== C ? C : E,
    pendingProfileEffect: y,
    avatarClassName: null != S || null != m || h.enabled ? true : u.W,
    canUsePremiumCustomization: true,
    isTryItOut: true,
    disabledInputs: p,
    hideExampleButton: true
  })
}
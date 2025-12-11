/** Chunk was on web.js **/
/** chunk id: 266910, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk220082 = require("./220082.js"),
  Chunk420596 = require("./420596.js"),
  Chunk880563 = require("./880563.jsx"),
  Chunk168631 = require("./168631.js"),
  Chunk687158 = require("./687158.js"),
  Chunk213053 = require("./213053.js"),
  Chunk484459 = require("./484459.js"),
  Chunk695346 = require("./695346.js"),
  Chunk775610 = require("./775610.js"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk607437 = require("./607437.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = C(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let A = function(e) {
  var t, n, a, O, S, C, {
      style: A,
      src: N,
      backgroundSrc: P,
      userId: R,
      guildId: w,
      pulseSpeakingIndicator: D = false,
      speaking: x = false
    } = e,
    L = T(e, ["style", "src", "backgroundSrc", "userId", "guildId", "pulseSpeakingIndicator", "speaking"]);
  let j = null != P ? P : N,
    M = (0, c.ZP)(j, s.Z.unsafe_rawColors.PRIMARY_800.css),
    k = (0, u.c)(true, "VideoBackground-web").enabled,
    U = (0, p.ZP)(null != R ? R : E.lds, w),
    G = null != (O = (0, f.V3)(null == U || null == (t = U.themeColors) ? true : t[0])) ? O : E.BRd.DARK,
    {
      profileThemeStyle: Z,
      profileThemeClassName: B
    } = (0, _.Z)({
      theme: G,
      themeType: b.l.VIDEO_TILE_BACKGROUND,
      primaryColor: null != (S = null == U || null == (n = U.themeColors) ? true : n[0]) ? S : null,
      secondaryColor: null != (C = null == U || null == (a = U.themeColors) ? true : a[1]) ? C : null
    }),
    F = null == U ? true : U.getBannerURL({
      size: 1024,
      canAnimate: h.QK.getSetting()
    }),
    {
      useProfileColors: V
    } = (0, g.$i)("VideoBackground-web"),
    H = V || k;
  if (i.useEffect(() => {
      null != R && H && (0, m.Z)(R, true, {
        guildId: w,
        dispatchWait: true
      })
    }, [H, R, w]), null == N) return null;
  let Y = (0, r.jsx)(l.qEK, v({
      className: y.avatarWrapper,
      src: N
    }, L)),
    W = I(v({}, A), {
      backgroundColor: M
    });
  return null != F && x && k && (W.backgroundImage = "url(".concat(F, ")"), W.backgroundSize = "cover"), (0, r.jsx)("div", {
    style: V ? v({}, A, Z) : v({}, W),
    className: o()(y.background, {
      [B]: V
    }),
    children: D ? (0, r.jsx)(d.Z, {
      shouldAnimate: x,
      children: Y
    }) : Y
  })
}
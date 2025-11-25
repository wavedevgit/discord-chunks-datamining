/** Chunk was on web.js **/
/** chunk id: 266910, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
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
  Chunk182719 = require("./182719.js");

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

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let C = function(e) {
  var t, n, a, O, I, A, {
      style: C,
      src: N,
      backgroundSrc: R,
      userId: P,
      guildId: D,
      pulseSpeakingIndicator: w = false,
      speaking: L = false
    } = e,
    x = S(e, ["style", "src", "backgroundSrc", "userId", "guildId", "pulseSpeakingIndicator", "speaking"]);
  let M = null != R ? R : N,
    k = (0, c.ZP)(M, s.Z.unsafe_rawColors.PRIMARY_800.css),
    j = (0, u.c)(true, "VideoBackground-web").enabled,
    U = (0, _.ZP)(null != P ? P : E.lds, D),
    G = null != (O = (0, f.V3)(null == U || null == (t = U.themeColors) ? true : t[0])) ? O : E.BRd.DARK,
    {
      profileThemeStyle: B,
      profileThemeClassName: Z
    } = (0, p.Z)({
      theme: G,
      themeType: b.l.VIDEO_TILE_BACKGROUND,
      primaryColor: null != (I = null == U || null == (n = U.themeColors) ? true : n[0]) ? I : null,
      secondaryColor: null != (A = null == U || null == (a = U.themeColors) ? true : a[1]) ? A : null
    }),
    F = null == U ? true : U.getBannerURL({
      size: 1024,
      canAnimate: m.QK.getSetting()
    }),
    {
      useProfileColors: V
    } = (0, g.$i)("VideoBackground-web"),
    H = V || j;
  if (i.useEffect(() => {
      null != P && H && (0, h.Z)(P, true, {
        guildId: D,
        dispatchWait: true
      })
    }, [H, P, D]), null == N) return null;
  let Y = (0, r.jsx)(l.qEK, v({
      className: y.avatarWrapper,
      src: N
    }, x)),
    W = T(v({}, C), {
      backgroundColor: k
    });
  return null != F && L && j && (W.backgroundImage = "url(".concat(F, ")"), W.backgroundSize = "cover"), (0, r.jsx)("div", {
    style: V ? v({}, C, B) : v({}, W),
    className: o()(y.background, {
      [Z]: V
    }),
    children: w ? (0, r.jsx)(d.Z, {
      shouldAnimate: L,
      children: Y
    }) : Y
  })
}
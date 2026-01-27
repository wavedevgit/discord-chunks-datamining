/** Chunk was on web.js **/
/** chunk id: 915614, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w,
  o: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk317097 = require("./317097.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk654107 = require("./654107.js"),
  Chunk450373 = require("./450373.js"),
  Chunk915089 = require("./915089.js"),
  Chunk693875 = require("./693875.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk531685 = require("./531685.js"),
  Chunk486020 = require("./486020.js"),
  Chunk686189 = require("./686189.js"),
  Chunk985253 = require("./985253.js"),
  Chunk166212 = require("./166212.js");

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

function A(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = T(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let C = e => {
  let {
    size: t,
    stroke: n
  } = (0, u.KjH)(e);
  return t / 2 + n
};

function N(e) {
  var t;
  let {
    user: n,
    displayProfile: a,
    guildId: y,
    pendingBanner: O,
    children: v,
    className: A,
    avatarSize: I,
    avatarOffsetX: S,
    avatarOffsetY: T,
    bannerWidth: N,
    bannerHeight: w,
    themePadding: R,
    pendingAccentColor: P,
    animateOnHoverOrFocusOnly: D = false
  } = e, L = (0, p.GV)(), [x, M] = i.useState(false), j = (0, l.bG)([m.A], () => m.A.isFocused()), k = h.kt.getSetting(), {
    bannerSrc: U,
    status: G
  } = (0, E.A)({
    displayProfile: a,
    pendingBanner: O,
    size: N,
    canAnimate: D || !k ? x : j
  }), F = (0, u.rdh)(c.A.unsafe_rawColors.PRIMARY_800).hex(), V = n.getAvatarURL(y, (0, u.FT9)(I)), B = (0, s.LX)((0, d.Ay)(V, F, false)), H = (0, f.A)(null != (t = null != P ? P : null == a ? true : a.primaryColor) ? t : B).hex, Y = C(I), W = Y + S - R, K = w - T - R;
  return (0, r.jsxs)("svg", {
    className: b.dK,
    viewBox: "0 0 ".concat(N, " ").concat(w),
    style: {
      minWidth: N,
      minHeight: w
    },
    children: [(0, r.jsxs)("mask", {
      id: L,
      children: [(0, r.jsx)("rect", {
        fill: "white",
        x: "0",
        y: "0",
        width: "100%",
        height: "100%"
      }), (0, r.jsx)("circle", {
        fill: "black",
        cx: W,
        cy: K,
        r: Y
      })]
    }), (0, r.jsxs)("foreignObject", {
      x: "0",
      y: "0",
      width: "100%",
      height: "100%",
      overflow: "visible",
      mask: "url(#".concat(L, ")"),
      children: [v, (0, r.jsx)("div", {
        className: o()(b.vK, A),
        onMouseMove: () => M(true),
        onMouseLeave: () => M(false),
        style: {
          height: w,
          minHeight: w,
          backgroundImage: null != U ? "url(".concat(U, ")") : true,
          backgroundColor: "COMPLETE" !== G ? c.A.unsafe_rawColors.PRIMARY_800.css : H
        },
        children: !k && (0, g.o4)(U) && (0, r.jsx)(_.A, {
          className: b.pH
        })
      })]
    })]
  })
}

function w(e) {
  let {
    themeType: t,
    displayProfile: n,
    canUsePremiumProfileCustomization: i = false
  } = e, a = S(e, ["themeType", "displayProfile", "canUsePremiumProfileCustomization"]), o = y.T[t], s = i || (null == n ? true : n.canUsePremiumProfileCustomization) || false;
  return (0, r.jsx)(N, I(v({}, a, o), {
    displayProfile: n,
    themePadding: s ? o.themePadding : 0
  }))
}
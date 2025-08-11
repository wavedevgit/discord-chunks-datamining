/** Chunk was on web.js **/
/** chunk id: 867176, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R,
  b: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk220082 = require("./220082.js"),
  Chunk583405 = require("./583405.js"),
  Chunk313201 = require("./313201.js"),
  Chunk279745 = require("./279745.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk451478 = require("./451478.js"),
  Chunk768581 = require("./768581.js"),
  Chunk28660 = require("./28660.js"),
  Chunk462997 = require("./462997.js"),
  Chunk738861 = require("./738861.js");

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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let N = e => {
  let {
    size: t,
    stroke: n
  } = (0, u.UCu)(e);
  return t / 2 + n
};

function C(e) {
  var t;
  let {
    user: n,
    displayProfile: o,
    guildId: b,
    pendingBanner: O,
    children: v,
    className: I,
    avatarSize: T,
    avatarOffsetX: S,
    avatarOffsetY: A,
    bannerWidth: C,
    bannerHeight: R,
    themePadding: P,
    pendingAccentColor: w,
    animateOnHover: D = false
  } = e, L = (0, _.Dt)(), [x, M] = i.useState(false), k = (0, l.e7)([m.Z], () => m.Z.isFocused()), j = h.QK.getSetting(), {
    bannerSrc: U,
    status: G
  } = (0, E.Z)({
    displayProfile: o,
    pendingBanner: O,
    size: C,
    canAnimate: D || !j ? x : k
  }), B = (0, u.dQu)(c.Z.unsafe_rawColors.PRIMARY_800).hex(), Z = n.getAvatarURL(b, (0, u.pxk)(T)), F = (0, s._i)((0, d.ZP)(Z, B, false)), V = (0, f.Z)(null != (t = null != w ? w : null == o ? true : o.primaryColor) ? t : F).hex, H = N(T), Y = H + S - P, W = R - A - P;
  return (0, r.jsxs)("svg", {
    className: y.mask,
    viewBox: "0 0 ".concat(C, " ").concat(R),
    style: {
      minWidth: C,
      minHeight: R
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
        cx: Y,
        cy: W,
        r: H
      })]
    }), (0, r.jsxs)("foreignObject", {
      x: "0",
      y: "0",
      width: "100%",
      height: "100%",
      overflow: "visible",
      mask: "url(#".concat(L, ")"),
      children: [v, (0, r.jsxs)("div", {
        className: a()(y.banner, I),
        onMouseMove: () => M(true),
        onMouseLeave: () => M(false),
        style: {
          height: R,
          minHeight: R,
          backgroundImage: null != U ? "url(".concat(U, ")") : true,
          backgroundColor: "COMPLETE" !== G ? c.Z.unsafe_rawColors.PRIMARY_800.css : V
        },
        children: [!j && (0, g.F8)(U) && (0, r.jsx)(p.Z, {
          className: y.gifTag
        }), v]
      })]
    })]
  })
}

function R(e) {
  var {
    themeType: t,
    displayProfile: n,
    canUsePremiumProfileCustomization: i = false
  } = e, o = S(e, ["themeType", "displayProfile", "canUsePremiumProfileCustomization"]);
  let a = b.q[t],
    s = i || (null == n ? true : n.canUsePremiumProfileCustomization) || false;
  return (0, r.jsx)(C, T(v({}, o, a), {
    displayProfile: n,
    themePadding: s ? a.themePadding : 0
  }))
}
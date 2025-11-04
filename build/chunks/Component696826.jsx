/** Chunk was on web.js **/
/** chunk id: 696826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dk: () => T,
  QF: () => O,
  Sk: () => Chunk981631.Skl,
  W5: () => N,
  lm: () => y,
  qb: () => R,
  rs: () => C,
  vP: () => A,
  vj: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk689628 = require("./689628.js"),
  Chunk780384 = require("./780384.js");
require("./481060.js");
var Chunk44315 = require("./44315.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk268685 = require("./268685.js"),
  Chunk247483 = require("./247483.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = 8;

function E(e) {
  switch (e) {
    case u.Skl.ONLINE:
      return u.Ilk.GREEN_NEW_38;
    case u.Skl.IDLE:
      return u.Ilk.YELLOW_NEW_30;
    case u.Skl.DND:
      return u.Ilk.RED_NEW_46;
    case u.Skl.STREAMING:
      return u.Ilk.TWITCH;
    case u.Skl.INVISIBLE:
    case u.Skl.UNKNOWN:
    case u.Skl.OFFLINE:
    default:
      return u.Ilk.NEUTRAL_34
  }
}

function b(e, t) {
  let n = (0, l.Sl)(E(e)).hex,
    r = null != t ? t : n,
    i = (0, l.K3)(r);
  return null != i ? i : true
}

function y(e, t) {
  return t === d.VZ.WHITE && e === u.Skl.IDLE ? d.d_.HIGH : d.d_.LOW
}

function O(e) {
  return (0, s.wj)(e) ? d.VZ.BLACK : d.VZ.WHITE
}

function v(e, t, n, r) {
  return "scale(".concat(t, ") translate(").concat(.5625 * e + r, " ").concat(.75 * e + n, ")")
}

function I(e, t, n) {
  return "".concat(.5625 * e + n, "px ").concat(.75 * e + t, "px")
}

function T(e) {
  let {
    size: t,
    status: n,
    isMobile: r,
    isTyping: i,
    topOffset: a = 0,
    leftOffset: o = 0
  } = e, s = a / g * t, l = o / g * t;
  if (i) return {
    bgRadius: .5 * t,
    bgY: .25 * t + s,
    bgX: 0,
    bgHeight: t,
    bgWidth: t * d.D6,
    cutoutX: .5 * t + l,
    cutoutY: .75 * t + s,
    cutoutWidth: 0,
    cutoutHeight: 0,
    cutoutRadius: 0,
    polygonScale: v(t, 0, s, l),
    polygonOrigin: I(t, s, l),
    dotY: .75 * t + s,
    dotX: .5 * t + l,
    dotRadius: 0
  };
  switch (n) {
    case u.Skl.ONLINE:
      if (r) return {
        bgRadius: t * d.EW * d.e7,
        bgY: 0,
        bgX: l,
        bgHeight: t * d.EW,
        bgWidth: t,
        cutoutX: .125 * t + l,
        cutoutY: .25 * t,
        cutoutWidth: .75 * t,
        cutoutHeight: .75 * t,
        cutoutRadius: 0,
        polygonScale: v(t, 0, s, l),
        polygonOrigin: I(t, s, l),
        dotY: 1.25 * t,
        dotX: .5 * t + l,
        dotRadius: .125 * t
      };
      return {
        bgRadius: .5 * t, bgY: .25 * t + s, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .5 * t + l, cutoutY: .75 * t + s, cutoutWidth: 0, cutoutHeight: 0, cutoutRadius: 0, polygonScale: v(t, 0, s, l), polygonOrigin: I(t, s, l), dotY: .75 * t + s, dotX: .5 * t + l, dotRadius: 0
      };
    case u.Skl.IDLE:
      return {
        bgRadius: .5 * t, bgY: .25 * t + s, bgX: l, bgHeight: t, bgWidth: t, cutoutX: -(.125 * t) + l, cutoutY: .125 * t + s, cutoutWidth: .75 * t, cutoutHeight: .75 * t, cutoutRadius: .375 * t, polygonScale: v(t, 0, s, l), polygonOrigin: I(t, s, l), dotY: .75 * t + s, dotX: .5 * t + l, dotRadius: 0
      };
    case u.Skl.DND:
      return {
        bgRadius: .5 * t, bgY: .25 * t + s, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .125 * t + l, cutoutY: .625 * t + s, cutoutWidth: .75 * t, cutoutHeight: .25 * t, cutoutRadius: .125 * t, polygonScale: v(t, 0, s, l), polygonOrigin: I(t, s, l), dotY: .75 * t + s, dotX: .5 * t + l, dotRadius: 0
      };
    case u.Skl.STREAMING:
      return {
        bgRadius: .5 * t, bgY: .25 * t + s, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .5 * t + l, cutoutY: .75 * t + s, cutoutWidth: 0, cutoutHeight: 0, cutoutRadius: .25 * t, polygonScale: v(t, 1, s, l), polygonOrigin: I(t, s, l), dotY: .75 * t + s, dotX: .5 * t + l, dotRadius: 0
      };
    case u.Skl.INVISIBLE:
    case u.Skl.UNKNOWN:
    case u.Skl.OFFLINE:
    default:
      return {
        bgRadius: .5 * t, bgY: .25 * t + s, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .25 * t + l, cutoutY: .5 * t + s, cutoutWidth: .5 * t, cutoutHeight: .5 * t, cutoutRadius: .25 * t, polygonScale: v(t, 0, s, l), polygonOrigin: I(t, s, l), dotY: .75 * t + s, dotX: .5 * t + l, dotRadius: 0
      }
  }
}

function S(e) {
  return "-".concat(.216506 * e, ",-").concat(.25 * e, " ").concat(.216506 * e, ",0 -").concat(.216506 * e, ",").concat(.25 * e)
}

function A(e, t, n) {
  let {
    bgRadius: i,
    bgY: a,
    bgX: s,
    bgHeight: l,
    bgWidth: c,
    cutoutX: u,
    cutoutY: d,
    cutoutWidth: f,
    cutoutHeight: _,
    cutoutRadius: p,
    polygonScale: h,
    polygonOrigin: m,
    dotY: g,
    dotX: E,
    dotRadius: b
  } = e;
  return (0, r.jsxs)("mask", {
    id: n,
    children: [(0, r.jsx)(o.animated.rect, {
      x: s,
      y: a,
      width: c,
      height: l,
      rx: i,
      ry: i,
      fill: "white"
    }), (0, r.jsx)(o.animated.rect, {
      x: u,
      y: d,
      width: f,
      height: _,
      rx: p,
      ry: p,
      fill: "black"
    }), (0, r.jsx)(o.animated.polygon, {
      points: S(t),
      fill: "black",
      transform: h,
      style: {
        transformOrigin: m
      }
    }), (0, r.jsx)(o.animated.circle, {
      fill: "black",
      cx: E,
      cy: g,
      r: b
    })]
  })
}

function C(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (n) return c.ZP.Masks.STATUS_TYPING;
  switch (e) {
    case u.Skl.IDLE:
      return c.ZP.Masks.STATUS_IDLE;
    case u.Skl.DND:
      return c.ZP.Masks.STATUS_DND;
    case u.Skl.STREAMING:
      return c.ZP.Masks.STATUS_STREAMING;
    case u.Skl.INVISIBLE:
    case u.Skl.UNKNOWN:
    case u.Skl.OFFLINE:
      return c.ZP.Masks.STATUS_OFFLINE;
    case u.Skl.ONLINE:
    default:
      if (t) return c.ZP.Masks.STATUS_ONLINE_MOBILE;
      return c.ZP.Masks.STATUS_ONLINE
  }
}

function N(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] && arguments[3];
  return t === u.Skl.ONLINE && n && !r ? {
    width: e,
    height: e * d.EW
  } : {
    width: r ? e * d.D6 : e,
    height: e
  }
}

function R(e) {
  let {
    status: t,
    isMobile: n = false,
    size: i = g,
    className: o,
    style: s,
    color: l
  } = e, d = t === u.Skl.ONLINE && n, _ = b(t, l);
  return (0, r.jsx)(c.ZP, m(p({
    mask: C(t, d),
    className: a()(f.mask, o),
    style: s
  }, N(i, t, d)), {
    children: (0, r.jsx)("div", {
      style: {
        backgroundColor: _
      },
      className: f.status
    })
  }))
}
/** Chunk was on web.js **/
/** chunk id: 696826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dk: () => T,
  QF: () => v,
  Sk: () => Chunk981631.Skl,
  W5: () => P,
  lm: () => O,
  qb: () => R,
  rs: () => N,
  vP: () => A,
  vj: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk692547 = require("./692547.js"),
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

function m(e) {
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

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = 8;

function b(e) {
  switch (e) {
    case d.Skl.ONLINE:
      return s.Z.unsafe_rawColors.GREEN_NEW_38;
    case d.Skl.IDLE:
      return s.Z.unsafe_rawColors.YELLOW_NEW_30;
    case d.Skl.DND:
      return s.Z.unsafe_rawColors.RED_NEW_46;
    case d.Skl.STREAMING:
      return s.Z.unsafe_rawColors.TWITCH;
    case d.Skl.INVISIBLE:
    case d.Skl.UNKNOWN:
    case d.Skl.OFFLINE:
    default:
      return s.Z.unsafe_rawColors.NEUTRAL_34
  }
}

function y(e, t) {
  let n = b(e).resolve({
      saturation: 1
    }).hex(),
    r = null != t ? t : n,
    i = (0, c.K)(r);
  return null != i ? i : true
}

function O(e, t) {
  return t === f.VZ.WHITE && e === d.Skl.IDLE ? f.d_.HIGH : f.d_.LOW
}

function v(e) {
  return (0, l.wj)(e) ? f.VZ.BLACK : f.VZ.WHITE
}

function S(e, t, n, r) {
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
    topOffset: o = 0,
    leftOffset: a = 0
  } = e, s = o / E * t, l = a / E * t;
  if (i) return {
    bgRadius: .5 * t,
    bgY: .25 * t + s,
    bgX: 0,
    bgHeight: t,
    bgWidth: t * f.D6,
    cutoutX: .5 * t + l,
    cutoutY: .75 * t + s,
    cutoutWidth: 0,
    cutoutHeight: 0,
    cutoutRadius: 0,
    polygonScale: S(t, 0, s, l),
    polygonOrigin: I(t, s, l),
    dotY: .75 * t + s,
    dotX: .5 * t + l,
    dotRadius: 0
  };
  switch (n) {
    case d.Skl.ONLINE:
      if (r) return {
        bgRadius: t * f.EW * f.e7,
        bgY: 0,
        bgX: l,
        bgHeight: t * f.EW,
        bgWidth: t,
        cutoutX: .125 * t + l,
        cutoutY: .25 * t,
        cutoutWidth: .75 * t,
        cutoutHeight: .75 * t,
        cutoutRadius: 0,
        polygonScale: S(t, 0, s, l),
        polygonOrigin: I(t, s, l),
        dotY: 1.25 * t,
        dotX: .5 * t + l,
        dotRadius: .125 * t
      };
      return {
        bgRadius: .5 * t, bgY: .25 * t + s, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .5 * t + l, cutoutY: .75 * t + s, cutoutWidth: 0, cutoutHeight: 0, cutoutRadius: 0, polygonScale: S(t, 0, s, l), polygonOrigin: I(t, s, l), dotY: .75 * t + s, dotX: .5 * t + l, dotRadius: 0
      };
    case d.Skl.IDLE:
      return {
        bgRadius: .5 * t, bgY: .25 * t + s, bgX: l, bgHeight: t, bgWidth: t, cutoutX: -(.125 * t) + l, cutoutY: .125 * t + s, cutoutWidth: .75 * t, cutoutHeight: .75 * t, cutoutRadius: .375 * t, polygonScale: S(t, 0, s, l), polygonOrigin: I(t, s, l), dotY: .75 * t + s, dotX: .5 * t + l, dotRadius: 0
      };
    case d.Skl.DND:
      return {
        bgRadius: .5 * t, bgY: .25 * t + s, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .125 * t + l, cutoutY: .625 * t + s, cutoutWidth: .75 * t, cutoutHeight: .25 * t, cutoutRadius: .125 * t, polygonScale: S(t, 0, s, l), polygonOrigin: I(t, s, l), dotY: .75 * t + s, dotX: .5 * t + l, dotRadius: 0
      };
    case d.Skl.STREAMING:
      return {
        bgRadius: .5 * t, bgY: .25 * t + s, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .5 * t + l, cutoutY: .75 * t + s, cutoutWidth: 0, cutoutHeight: 0, cutoutRadius: .25 * t, polygonScale: S(t, 1, s, l), polygonOrigin: I(t, s, l), dotY: .75 * t + s, dotX: .5 * t + l, dotRadius: 0
      };
    case d.Skl.INVISIBLE:
    case d.Skl.UNKNOWN:
    case d.Skl.OFFLINE:
    default:
      return {
        bgRadius: .5 * t, bgY: .25 * t + s, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .25 * t + l, cutoutY: .5 * t + s, cutoutWidth: .5 * t, cutoutHeight: .5 * t, cutoutRadius: .25 * t, polygonScale: S(t, 0, s, l), polygonOrigin: I(t, s, l), dotY: .75 * t + s, dotX: .5 * t + l, dotRadius: 0
      }
  }
}

function C(e) {
  return "-".concat(.216506 * e, ",-").concat(.25 * e, " ").concat(.216506 * e, ",0 -").concat(.216506 * e, ",").concat(.25 * e)
}

function A(e, t, n) {
  let {
    bgRadius: i,
    bgY: o,
    bgX: s,
    bgHeight: l,
    bgWidth: c,
    cutoutX: u,
    cutoutY: d,
    cutoutWidth: f,
    cutoutHeight: p,
    cutoutRadius: _,
    polygonScale: m,
    polygonOrigin: h,
    dotY: g,
    dotX: E,
    dotRadius: b
  } = e;
  return (0, r.jsxs)("mask", {
    id: n,
    children: [(0, r.jsx)(a.animated.rect, {
      x: s,
      y: o,
      width: c,
      height: l,
      rx: i,
      ry: i,
      fill: "white"
    }), (0, r.jsx)(a.animated.rect, {
      x: u,
      y: d,
      width: f,
      height: p,
      rx: _,
      ry: _,
      fill: "black"
    }), (0, r.jsx)(a.animated.polygon, {
      points: C(t),
      fill: "black",
      transform: m,
      style: {
        transformOrigin: h
      }
    }), (0, r.jsx)(a.animated.circle, {
      fill: "black",
      cx: E,
      cy: g,
      r: b
    })]
  })
}

function N(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (n) return u.ZP.Masks.STATUS_TYPING;
  switch (e) {
    case d.Skl.IDLE:
      return u.ZP.Masks.STATUS_IDLE;
    case d.Skl.DND:
      return u.ZP.Masks.STATUS_DND;
    case d.Skl.STREAMING:
      return u.ZP.Masks.STATUS_STREAMING;
    case d.Skl.INVISIBLE:
    case d.Skl.UNKNOWN:
    case d.Skl.OFFLINE:
      return u.ZP.Masks.STATUS_OFFLINE;
    case d.Skl.ONLINE:
    default:
      if (t) return u.ZP.Masks.STATUS_ONLINE_MOBILE;
      return u.ZP.Masks.STATUS_ONLINE
  }
}

function P(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] && arguments[3];
  return t === d.Skl.ONLINE && n && !r ? {
    width: e,
    height: e * f.EW
  } : {
    width: r ? e * f.D6 : e,
    height: e
  }
}

function R(e) {
  let {
    status: t,
    isMobile: n = false,
    size: i = E,
    className: a,
    style: s,
    color: l
  } = e, c = t === d.Skl.ONLINE && n, f = y(t, l);
  return (0, r.jsx)(u.ZP, g(m({
    mask: N(t, c),
    className: o()(p.mask, a),
    style: s
  }, P(i, t, c)), {
    children: (0, r.jsx)("div", {
      style: {
        backgroundColor: f
      },
      className: p.status
    })
  }))
}
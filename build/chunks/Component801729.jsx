/** Chunk was on web.js **/
/** chunk id: 801729, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dv: () => p,
  G2: () => y,
  IG: () => E,
  NG: () => m,
  OV: () => h,
  fW: () => O,
  lB: () => b,
  mA: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk377171 = require("./377171.js"),
  Chunk785114 = require("./785114.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let p = {
  ROUND: Chunk785114.baseShapeRound,
  ROUND_LEFT: Chunk785114.baseShapeRoundLeft,
  ROUND_RIGHT: Chunk785114.baseShapeRoundRight,
  SQUARE: ""
};

function h(e) {
  return e < 10 ? 16 : e < 100 ? 22 : 30
}

function m(e) {
  return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
}
let g = e => {
    var {
      count: t,
      color: n = o.Z.STATUS_DANGER,
      disableColor: i = false,
      shape: l = p.ROUND,
      className: u,
      style: _,
      renderBadgeCount: g = m
    } = e, E = f(e, ["count", "color", "disableColor", "shape", "className", "style", "renderBadgeCount"]);
    return (0, r.jsx)("div", d(c({
      className: a()(u, s.numberBadge, l),
      style: c({
        backgroundColor: i ? true : n,
        width: h(t)
      }, _)
    }, E), {
      children: g(t)
    }))
  },
  E = e => {
    var {
      text: t,
      className: n,
      color: i = o.Z.STATUS_DANGER,
      shape: l = p.ROUND,
      disableColor: u = false,
      style: _
    } = e, h = f(e, ["text", "className", "color", "shape", "disableColor", "style"]);
    return (0, r.jsx)("div", d(c({
      className: a()(n, s.textBadge, l),
      style: c({
        backgroundColor: u ? true : i
      }, _)
    }, h), {
      children: t
    }))
  },
  b = e => {
    var {
      text: t,
      className: n
    } = e, i = f(e, ["text", "className"]);
    return (0, r.jsx)(E, c({
      className: a()(s.premiumBadge, n),
      text: t
    }, i))
  },
  y = e => {
    let {
      icon: t,
      className: n,
      color: i = o.Z.STATUS_DANGER,
      shape: l = p.ROUND,
      disableColor: u = false,
      style: d
    } = e;
    return (0, r.jsx)("div", {
      className: a()(n, s.iconBadge, l),
      style: c({
        backgroundColor: u ? true : i
      }, d),
      children: (0, r.jsx)(t, {
        className: s.icon,
        color: "currentColor"
      })
    })
  },
  O = e => {
    var {
      className: t,
      color: n = o.Z.INTERACTIVE_ACTIVE,
      shape: i = p.ROUND,
      disableColor: l = false,
      style: u
    } = e, d = f(e, ["className", "color", "shape", "disableColor", "style"]);
    return (0, r.jsx)("div", c({
      className: a()(t, s.circleBadge, i),
      style: c({
        backgroundColor: l ? true : n
      }, u)
    }, d))
  }
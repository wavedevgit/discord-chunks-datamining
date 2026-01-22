/** Chunk was on web.js **/
/** chunk id: 777666, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EG: () => _,
  Gu: () => m,
  JI: () => b,
  Lp: () => E,
  SC: () => O,
  fk: () => y,
  hV: () => g,
  o6: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk668016 = require("./668016.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = p(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let _ = {
  ROUND: Chunk668016.rS,
  ROUND_LEFT: Chunk668016.Q2,
  ROUND_RIGHT: Chunk668016.Hg,
  SQUARE: ""
};

function h(e) {
  return e < 10 ? 16 : e < 100 ? 22 : 30
}

function m(e) {
  return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
}
let g = e => {
    let {
      count: t,
      color: n = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
      disableColor: i = false,
      shape: l = _.ROUND,
      className: u,
      style: p,
      renderBadgeCount: g = m
    } = e, E = f(e, ["count", "color", "disableColor", "shape", "className", "style", "renderBadgeCount"]);
    return (0, r.jsx)("div", d(c({
      className: a()(u, o.Do, l),
      style: c({
        backgroundColor: i ? true : n,
        width: h(t)
      }, p)
    }, E), {
      children: g(t)
    }))
  },
  E = e => {
    let {
      text: t,
      className: n,
      color: i = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
      shape: l = _.ROUND,
      disableColor: u = false,
      style: p
    } = e, h = f(e, ["text", "className", "color", "shape", "disableColor", "style"]);
    return (0, r.jsx)("div", d(c({
      className: a()(n, o.U1, l),
      style: c({
        backgroundColor: u ? true : i
      }, p)
    }, h), {
      children: t
    }))
  },
  b = e => {
    let {
      text: t,
      className: n
    } = e, i = f(e, ["text", "className"]);
    return (0, r.jsx)(E, c({
      className: a()(o.BE, n),
      text: t
    }, i))
  },
  y = e => {
    let {
      icon: t,
      className: n,
      color: i = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
      shape: l = _.ROUND,
      disableColor: u = false,
      style: d
    } = e;
    return (0, r.jsx)("div", {
      className: a()(n, o.u3, l),
      style: c({
        backgroundColor: u ? true : i
      }, d),
      children: (0, r.jsx)(t, {
        className: o.Kk,
        color: "currentColor"
      })
    })
  },
  O = e => {
    let {
      className: t,
      color: n = s.A.colors.INTERACTIVE_TEXT_ACTIVE.css,
      shape: i = _.ROUND,
      disableColor: l = false,
      style: u
    } = e, d = f(e, ["className", "color", "shape", "disableColor", "style"]);
    return (0, r.jsx)("div", c({
      className: a()(t, o.Ky, i),
      style: c({
        backgroundColor: l ? true : n
      }, u)
    }, d))
  }
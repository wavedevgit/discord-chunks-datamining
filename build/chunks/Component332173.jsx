/** Chunk was on web.js **/
/** chunk id: 332173, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk317097 = require("./317097.js"),
  Chunk397927 = require("./397927.js"),
  Chunk232042 = require("./232042.jsx"),
  Chunk189153 = require("./189153.js");

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

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let g = e => {
  let {
    ref: t,
    children: n,
    className: a,
    color: d,
    roleColors: p,
    iconType: m,
    onMouseEnter: g,
    onMouseLeave: E
  } = e, y = h(e, ["ref", "children", "className", "color", "roleColors", "iconType", "onMouseEnter", "onMouseLeave"]), [b, O] = i.useState(false), {
    gradientStyle: v,
    gradientClassname: A
  } = (0, l.v5K)({
    colorStrings: null != p ? p : null,
    roleStyle: "username",
    animateGradient: b
  }), I = i.useCallback(e => {
    O(true), null == g || g(e)
  }, [O, g]), S = i.useCallback(e => {
    O(false), null == E || E(e)
  }, [O, E]), T = {};
  return null != d && (T = {
    color: (0, s.Hl)(d),
    backgroundColor: b ? (0, s.gq)(d, .3) : (0, s.gq)(d, .1)
  }), (0, r.jsx)(l.DUT, _(f({}, y), {
    innerRef: t,
    tag: "span",
    className: o()(a, {
      [u.i]: true,
      interactive: y.onClick
    }),
    onMouseEnter: I,
    onMouseLeave: S,
    style: T,
    tabIndex: null != y.onClick ? 0 : false,
    children: null != m ? (0, r.jsx)(c.A, {
      iconType: m,
      children: n
    }) : null != p ? (0, r.jsx)("span", {
      style: f({}, v),
      className: A,
      children: n
    }) : n
  }))
}
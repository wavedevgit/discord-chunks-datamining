/** Chunk was on web.js **/
/** chunk id: 124072, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk779699 = require("./779699.jsx"),
  Chunk831418 = require("./831418.js");

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

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let g = e => {
  var {
    ref: t,
    children: n,
    className: a,
    color: d,
    roleColors: _,
    iconType: m,
    onMouseEnter: g,
    onMouseLeave: E
  } = e, b = h(e, ["ref", "children", "className", "color", "roleColors", "iconType", "onMouseEnter", "onMouseLeave"]);
  let [y, O] = i.useState(false), {
    gradientStyle: v,
    gradientClassname: I
  } = (0, l.Icv)({
    colorStrings: null != _ ? _ : null,
    roleStyle: "username",
    animateGradient: y
  }), T = i.useCallback(e => {
    O(true), null == g || g(e)
  }, [O, g]), S = i.useCallback(e => {
    O(false), null == E || E(e)
  }, [O, E]), A = {};
  return null != d && (A = {
    color: (0, s.Rf)(d),
    backgroundColor: y ? (0, s.br)(d, .3) : (0, s.br)(d, .1)
  }), (0, r.jsx)(l.P3F, p(f({}, b), {
    innerRef: t,
    tag: "span",
    className: o()(a, {
      [u.wrapper]: true,
      interactive: b.onClick
    }),
    onMouseEnter: T,
    onMouseLeave: S,
    style: A,
    tabIndex: null != b.onClick ? 0 : false,
    children: null != m ? (0, r.jsx)(c.Z, {
      iconType: m,
      children: n
    }) : null != _ ? (0, r.jsx)("span", {
      style: f({}, v),
      className: I,
      children: n
    }) : n
  }))
}
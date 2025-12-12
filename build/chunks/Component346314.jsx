/** Chunk was on web.js **/
/** chunk id: 346314, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => S,
  r: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk756715 = require("./756715.jsx"),
  Chunk573385 = require("./573385.js"),
  Chunk607070 = require("./607070.js"),
  Chunk865672 = require("./865672.jsx"),
  Chunk109161 = require("./109161.jsx"),
  Chunk836484 = require("./836484.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function O(e) {
  let {
    roleStyle: t,
    name: n,
    colorString: o,
    roleName: l,
    colorStrings: c,
    dotAlignment: d = "left",
    className: m,
    nameTextClassName: g,
    animateRoleGradient: E,
    variant: b,
    displayNameStylesFont: y = ""
  } = e, O = i.useContext(u.d), [v, S] = i.useState(false), I = i.useCallback(() => {
    S(true)
  }, []), T = i.useCallback(() => {
    S(false)
  }, []), C = "username" === t, A = "dot" === t, N = null != c && null != c.primaryColor && null != c.secondaryColor, P = C && N, {
    gradientStyle: R,
    gradientClassname: w,
    gradientGlowClassname: D
  } = (0, f.Ic)({
    colorStrings: c,
    roleStyle: "username",
    animateGradient: E || v || (null == O ? true : O.animate)
  }), x = (0, f.EJ)(n), L = {
    className: a()(_.name, g, y, {
      [_.username]: C,
      [w]: P
    }),
    children: x
  }, j = {
    className: a()(_.nameGlow, D, y),
    children: n
  }, M = A ? (0, r.jsx)(p.F, {
    color: o,
    colors: N ? c : null,
    name: l,
    className: "left" === d ? _.roleDotLeft : _.roleDotRight,
    hoverOverride: E || v || (null == O ? true : O.animate)
  }) : null;
  return (0, r.jsxs)("span", {
    className: a()(m, _.container),
    onMouseEnter: I,
    onMouseLeave: T,
    children: ["left" === d && M, (0, r.jsxs)("span", {
      className: _.nameContainer,
      style: h({
        color: C && !N && null != o ? o : true
      }, P ? R : {}),
      children: [null != b ? (0, r.jsx)(s.xvT, h({
        tag: "span",
        color: "currentColor",
        variant: b
      }, L)) : (0, r.jsx)("span", h({}, L)), P && (null != b ? (0, r.jsx)(s.xvT, h({
        tag: "span",
        color: "currentColor",
        "aria-hidden": true,
        variant: b
      }, j)) : (0, r.jsx)("span", h({
        "aria-hidden": true
      }, j)))]
    }), "right" === d && M]
  })
}

function v(e) {
  let {
    name: t,
    colorString: n,
    roleName: i,
    dotAlignment: o,
    className: a,
    colorStrings: s,
    animateRoleGradient: u,
    ref: f
  } = e, p = b(e, ["name", "colorString", "roleName", "dotAlignment", "className", "colorStrings", "animateRoleGradient", "ref"]), _ = (0, l.e7)([d.Z], () => d.Z.roleStyle), m = "username" === _, g = (0, r.jsx)(O, {
    roleStyle: _,
    name: t,
    colorString: n,
    roleName: i,
    dotAlignment: o,
    className: a,
    colorStrings: s,
    animateRoleGradient: u
  }), y = m && null != n ? {
    color: n
  } : true;
  return (0, r.jsx)(c.Anchor, E(h({}, p), {
    children: g,
    style: y,
    ref: f
  }))
}

function S(e) {
  let t = (0, l.e7)([d.Z], () => d.Z.roleStyle);
  return (0, r.jsx)(O, E(h({}, e), {
    roleStyle: t
  }))
}
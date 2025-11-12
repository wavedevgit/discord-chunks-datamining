/** Chunk was on web.js **/
/** chunk id: 346314, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => I,
  r: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk756715 = require("./756715.jsx"),
  Chunk573385 = require("./573385.js"),
  Chunk607070 = require("./607070.js"),
  Chunk865672 = require("./865672.jsx"),
  Chunk109161 = require("./109161.jsx"),
  Chunk836484 = require("./836484.js");

function h(e, t, n) {
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
      h(e, t, n[t])
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
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function O(e) {
  let {
    roleStyle: t,
    name: n,
    colorString: a,
    roleName: l,
    colorStrings: c,
    dotAlignment: d = "left",
    className: h,
    nameTextClassName: g,
    animateRoleGradient: E,
    variant: b,
    displayNameStylesFont: y = ""
  } = e, O = i.useContext(u.d), [v, I] = i.useState(false), T = i.useCallback(() => {
    I(true)
  }, []), S = i.useCallback(() => {
    I(false)
  }, []), A = "username" === t, C = "dot" === t, N = null != c && null != c.primaryColor && null != c.secondaryColor, R = A && N, {
    gradientStyle: P,
    gradientClassname: D,
    gradientGlowClassname: w
  } = (0, f.Ic)({
    colorStrings: c,
    roleStyle: "username",
    animateGradient: E || v || (null == O ? true : O.animate)
  }), x = (0, f.EJ)(n), L = {
    className: o()(p.name, g, y, {
      [p.username]: A,
      [D]: R
    }),
    children: x
  }, M = {
    className: o()(p.nameGlow, w, y),
    children: n
  }, j = C ? (0, r.jsx)(_.F, {
    color: a,
    colors: N ? c : null,
    name: l,
    className: "left" === d ? p.roleDotLeft : p.roleDotRight,
    hoverOverride: E || v || (null == O ? true : O.animate)
  }) : null;
  return (0, r.jsxs)("span", {
    className: o()(h, p.container),
    onMouseEnter: T,
    onMouseLeave: S,
    children: ["left" === d && j, (0, r.jsxs)("span", {
      className: p.nameContainer,
      style: m({
        color: A && !N && null != a ? a : true
      }, R ? P : {}),
      children: [null != b ? (0, r.jsx)(s.xvT, m({
        tag: "span",
        color: "currentColor",
        variant: b
      }, L)) : (0, r.jsx)("span", m({}, L)), R && (null != b ? (0, r.jsx)(s.xvT, m({
        tag: "span",
        color: "currentColor",
        "aria-hidden": true,
        variant: b
      }, M)) : (0, r.jsx)("span", m({
        "aria-hidden": true
      }, M)))]
    }), "right" === d && j]
  })
}

function v(e) {
  let {
    name: t,
    colorString: n,
    roleName: i,
    dotAlignment: a,
    className: o,
    colorStrings: s,
    animateRoleGradient: u,
    ref: f
  } = e, _ = b(e, ["name", "colorString", "roleName", "dotAlignment", "className", "colorStrings", "animateRoleGradient", "ref"]), p = (0, l.e7)([d.Z], () => d.Z.roleStyle), h = "username" === p, g = (0, r.jsx)(O, {
    roleStyle: p,
    name: t,
    colorString: n,
    roleName: i,
    dotAlignment: a,
    className: o,
    colorStrings: s,
    animateRoleGradient: u
  }), y = h && null != n ? {
    color: n
  } : true;
  return (0, r.jsx)(c.Anchor, E(m({}, _), {
    children: g,
    style: y,
    ref: f
  }))
}

function I(e) {
  let t = (0, l.e7)([d.Z], () => d.Z.roleStyle);
  return (0, r.jsx)(O, E(m({}, e), {
    roleStyle: t
  }))
}
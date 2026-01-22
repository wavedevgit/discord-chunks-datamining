/** Chunk was on web.js **/
/** chunk id: 463930, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => A,
  g: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk349288 = require("./349288.jsx"),
  Chunk473193 = require("./473193.js"),
  Chunk775602 = require("./775602.js"),
  Chunk36075 = require("./36075.jsx"),
  Chunk545442 = require("./545442.jsx"),
  Chunk224896 = require("./224896.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = y(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
  } = e, O = i.useContext(u.C), [A, v] = i.useState(false), S = i.useCallback(() => {
    v(true)
  }, []), I = i.useCallback(() => {
    v(false)
  }, []), T = "username" === t, C = "dot" === t, N = null != c && null != c.primaryColor && null != c.secondaryColor, R = T && N, {
    gradientStyle: w,
    gradientClassname: P,
    gradientGlowClassname: D
  } = (0, f.v5)({
    colorStrings: c,
    roleStyle: "username",
    animateGradient: E || A || (null == O ? true : O.animate)
  }), x = (0, f.CR)(n), L = {
    className: s()(_.UU, g, y, {
      [_.Xh]: T,
      [P]: R
    }),
    children: x
  }, j = {
    className: s()(_.lD, D, y),
    children: n
  }, M = C ? (0, r.jsx)(p.W, {
    color: a,
    colors: N ? c : null,
    name: l,
    className: "left" === d ? _.Hf : _.WN,
    hoverOverride: E || A || (null == O ? true : O.animate)
  }) : null;
  return (0, r.jsxs)("span", {
    className: s()(h, _.kL),
    onMouseEnter: S,
    onMouseLeave: I,
    children: ["left" === d && M, (0, r.jsxs)("span", {
      className: _.VW,
      style: m({
        color: T && !N && null != a ? a : true
      }, R ? w : {}),
      children: [null != b ? (0, r.jsx)(o.EYj, m({
        tag: "span",
        color: "currentColor",
        variant: b
      }, L)) : (0, r.jsx)("span", m({}, L)), R && (null != b ? (0, r.jsx)(o.EYj, m({
        tag: "span",
        color: "currentColor",
        "aria-hidden": true,
        variant: b
      }, j)) : (0, r.jsx)("span", m({
        "aria-hidden": true
      }, j)))]
    }), "right" === d && M]
  })
}

function A(e) {
  let {
    name: t,
    colorString: n,
    roleName: i,
    dotAlignment: a,
    className: s,
    colorStrings: o,
    animateRoleGradient: u,
    ref: f
  } = e, p = b(e, ["name", "colorString", "roleName", "dotAlignment", "className", "colorStrings", "animateRoleGradient", "ref"]), _ = (0, l.bG)([d.A], () => d.A.roleStyle), h = "username" === _, g = (0, r.jsx)(O, {
    roleStyle: _,
    name: t,
    colorString: n,
    roleName: i,
    dotAlignment: a,
    className: s,
    colorStrings: o,
    animateRoleGradient: u
  }), y = h && null != n ? {
    color: n
  } : true;
  return (0, r.jsx)(c.Anchor, E(m({}, p), {
    children: g,
    style: y,
    ref: f
  }))
}

function v(e) {
  let t = (0, l.bG)([d.A], () => d.A.roleStyle);
  return (0, r.jsx)(O, E(m({}, e), {
    roleStyle: t
  }))
}
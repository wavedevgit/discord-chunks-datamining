/** Chunk was on web.js **/
/** chunk id: 756715, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Anchor: () => b
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk532712 = require("./532712.js"),
  Chunk1561 = require("./1561.jsx"),
  Chunk335854 = require("./335854.js"),
  Chunk645499 = require("./645499.js"),
  Chunk656550 = require("./656550.js");

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

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function b(e) {
  var {
    href: t,
    onClick: n,
    className: a,
    children: _,
    rel: h,
    target: E,
    useDefaultUnderlineStyles: b = true,
    title: y,
    style: O,
    focusProps: v,
    ref: I
  } = e, T = g(e, ["href", "onClick", "className", "children", "rel", "target", "useDefaultUnderlineStyles", "title", "style", "focusProps", "ref"]);
  null != t && null == n && (n = u.X.getDefaultLinkInterceptor(t));
  let S = i.useContext(l.g),
    A = {
      className: o()(f.anchor, {
        [f.anchorUnderlineOnHover]: b
      }, a),
      href: t,
      onClick: n,
      rel: null != h ? h : true,
      target: null != E ? E : true,
      title: null != y ? y : true,
      style: null != O ? O : true
    };
  return (null == t || (0, d.B)(t) || (A.rel = "noreferrer noopener", A.target = "_blank"), S && delete A.href, null != n) ? (0, r.jsx)(c.P, m(p({
    tag: "a"
  }, T, A), {
    onClick: n,
    focusProps: v,
    innerRef: I,
    children: _
  })) : (0, r.jsx)(s.tEY, m(p({}, v), {
    children: (0, r.jsx)("a", m(p({}, T, A), {
      ref: I,
      children: _
    }))
  }))
}
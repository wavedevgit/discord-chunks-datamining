/** Chunk was on web.js **/
/** chunk id: 756715, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Anchor: () => b
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk532712 = require("./532712.js"),
  Chunk1561 = require("./1561.jsx"),
  Chunk84735 = require("./84735.js"),
  Chunk335854 = require("./335854.js"),
  Chunk645499 = require("./645499.js"),
  Chunk868385 = require("./868385.js");

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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function b(e) {
  var {
    href: t,
    onClick: n,
    className: o,
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
  let S = i.useContext(s.g),
    A = {
      className: a()(f.anchor, {
        [f.anchorUnderlineOnHover]: b
      }, o),
      href: t,
      onClick: n,
      rel: null != h ? h : true,
      target: null != E ? E : true,
      title: null != y ? y : true,
      style: null != O ? O : true
    };
  return (null == t || (0, d.B)(t) || (A.rel = "noreferrer noopener", A.target = "_blank"), S && delete A.href, null != n) ? (0, r.jsx)(l.P, m(p({
    tag: "a"
  }, T, A), {
    onClick: n,
    focusProps: v,
    innerRef: I,
    children: _
  })) : (0, r.jsx)(c.t, m(p({}, v), {
    children: (0, r.jsx)("a", m(p({}, T, A), {
      ref: I,
      children: _
    }))
  }))
}
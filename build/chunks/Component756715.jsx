/** Chunk was on web.js **/
/** chunk id: 756715, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  Anchor: () => E
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk427398 = require("./427398.js"),
  Chunk793030 = require("./793030.js"),
  Chunk1561 = require("./1561.jsx"),
  Chunk335854 = require("./335854.js"),
  Chunk709049 = require("./709049.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function E(e) {
  var {
    href: t,
    onClick: n,
    className: a,
    children: f,
    rel: p,
    target: g,
    useDefaultUnderlineStyles: E = true,
    title: b,
    style: y,
    focusProps: O,
    ref: v
  } = e, I = m(e, ["href", "onClick", "className", "children", "rel", "target", "useDefaultUnderlineStyles", "title", "style", "focusProps", "ref"]);
  null != t && null == n && (n = u.X.getDefaultLinkInterceptor(t));
  let T = i.useContext(l.g$b),
    S = {
      className: o()(d.anchor, {
        [d.anchorUnderlineOnHover]: E
      }, a),
      href: t,
      onClick: n,
      rel: null != p ? p : true,
      target: null != g ? g : true,
      title: null != b ? b : true,
      style: null != y ? y : true
    };
  return (null == t || (0, s.B)(t) || (S.rel = "noreferrer noopener", S.target = "_blank"), T && delete S.href, null != n) ? (0, r.jsx)(c.P, h(_({
    tag: "a"
  }, I, S), {
    onClick: n,
    focusProps: O,
    innerRef: v,
    children: f
  })) : (0, r.jsx)(l.tEY, h(_({}, O), {
    children: (0, r.jsx)("a", h(_({}, I, S), {
      ref: v,
      children: f
    }))
  }))
}
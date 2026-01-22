/** Chunk was on web.js **/
/** chunk id: 234914, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk6976 = require("./6976.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = _(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function h(e) {
  let {
    alt: t
  } = e, n = p(e, ["alt"]), [a, s] = i.useState(true);
  return (0, r.jsxs)(r.Fragment, {
    children: [a && (0, r.jsx)(o.y$y, {
      type: o.y$y.Type.LOW_MOTION,
      className: l.wG
    }), (0, r.jsx)("img", f(u({}, n), {
      alt: t,
      onLoad: () => s(false)
    }))]
  })
}

function m(e) {
  let {
    src: t,
    backgroundSrc: n,
    alt: i,
    aspectRatio: a,
    className: o,
    imageChildClassName: c
  } = e, d = p(e, ["src", "backgroundSrc", "alt", "aspectRatio", "className", "imageChildClassName"]);
  return (0, r.jsxs)("div", {
    className: s()(l.kL, o),
    children: [(0, r.jsx)("img", {
      src: n,
      alt: i,
      className: l.iL
    }), (0, r.jsx)("div", {
      className: l.CC
    }), (0, r.jsx)("div", {
      style: {
        aspectRatio: a
      },
      className: l.ZS,
      children: (0, r.jsx)(h, u({
        src: t,
        alt: i,
        className: s()(l.Sl, c)
      }, d))
    })]
  })
}
/** Chunk was on web.js **/
/** chunk id: 295074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk996682 = require("./996682.js"),
  Chunk27989 = require("./27989.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = d(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let f = e => {
  var t, n;
  let {
    size: o = "md",
    width: l,
    height: d
  } = e, f = u(e, ["size", "width", "height"]), p = (0, a.J)(o), _ = null != (t = null == p ? true : p.width) ? t : l, h = null != (n = null == p ? true : p.height) ? n : d;
  return (0, r.jsxs)("svg", c(s({}, (0, i.A)(f)), {
    xmlns: "http://www.w3.org/2000/svg",
    width: _,
    height: h,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, r.jsx)("path", {
      fill: "#F3F3F4",
      fillRule: "evenodd",
      d: "M2.4 4h19.2c1.32 0 2.4.9 2.4 2v12c0 1.1-1.08 2-2.4 2H2.4C1.08 20 0 19.1 0 18V6c0-1.1 1.08-2 2.4-2Z",
      clipRule: "evenodd"
    }), (0, r.jsx)("path", {
      fill: "#E02228",
      fillRule: "evenodd",
      d: "M16.9 11a5 5 0 0 0-9.8 0h9.8ZM7.1 13a5 5 0 0 0 9.8 0H7.1Z",
      clipRule: "evenodd"
    }), (0, r.jsx)("path", {
      fill: "#284E98",
      fillRule: "evenodd",
      d: "M8 15H7a3 3 0 1 1 0-6h1c.28-.38.62-.72 1-1H7a4 4 0 0 0 0 8h2a4.99 4.99 0 0 1-1-1ZM17 8h-2c.38.28.72.62 1 1h1a3 3 0 1 1 0 6h-1c-.28.38-.62.72-1 1h2a4 4 0 0 0 0-8Z",
      clipRule: "evenodd"
    })]
  }))
}
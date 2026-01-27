/** Chunk was on web.js **/
/** chunk id: 598139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => f
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
      fill: "#211D1D",
      fillRule: "evenodd",
      d: "M2.4 4h19.2c1.32 0 2.4.9 2.4 2v12c0 1.1-1.08 2-2.4 2H2.4C1.08 20 0 19.1 0 18V6c0-1.1 1.08-2 2.4-2Z",
      clipRule: "evenodd"
    }), (0, r.jsx)("path", {
      fill: "#FFD634",
      fillRule: "evenodd",
      d: "M6 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z",
      clipRule: "evenodd"
    }), (0, r.jsx)("path", {
      fill: "#fff",
      fillRule: "evenodd",
      d: "M7 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM18.42 11.54H20V10h1v4h-1v-1.65h-1.5V14h-1v-4h1l-.08 1.54Zm-2-.66V14h-1v-3.12h-.86V10h2.75v.88h-.89Zm-3.11 1.63-.47-1.33-.47 1.33h.94Zm.27.79H12.1l-.24.7h-1.11l1.52-4h1.14l1.52 4h-1.11l-.24-.7Z",
      clipRule: "evenodd"
    })]
  }))
}
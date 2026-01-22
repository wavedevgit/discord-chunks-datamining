/** Chunk was on web.js **/
/** chunk id: 218471, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk827734 = require("./827734.js"),
  Chunk996682 = require("./996682.js"),
  Chunk27989 = require("./27989.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
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

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = f(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let p = e => {
  var t, n;
  let {
    size: o = "md",
    width: c,
    height: f,
    color: p = i.A.colors.INTERACTIVE_ICON_DEFAULT,
    colorClass: _ = ""
  } = e, h = d(e, ["size", "width", "height", "color", "colorClass"]), m = (0, s.J)(o), g = null != (t = null == m ? true : m.width) ? t : c, E = null != (n = null == m ? true : m.height) ? n : f;
  return (0, r.jsx)("svg", u(l({}, (0, a.A)(h)), {
    xmlns: "http://www.w3.org/2000/svg",
    width: g,
    height: E,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof p ? p : p.css,
      d: "M18.31 6.2A5.04 5.04 0 0 1 16.06 2h-3.55v14.47a3 3 0 0 1-2.98 2.92 3.04 3.04 0 0 1 0-6.07c.3 0 .6.05.88.14V9.77A6.6 6.6 0 0 0 3 16.35c0 2.25 1.1 4.24 2.79 5.45A6.42 6.42 0 0 0 9.53 23a6.6 6.6 0 0 0 6.53-6.65V9.02A8.34 8.34 0 0 0 21 10.63v-3.6c-1 0-1.91-.3-2.69-.82Z",
      className: _
    })
  }))
}
/** Chunk was on web.js **/
/** chunk id: 141060, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => p
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
      d: "M7 1a1 1 0 0 0-1 1v.2c0 .79-.4 1.53-1.05 1.97A4.37 4.37 0 0 0 3 7.8V8a1 1 0 0 0 2 0v-.2c0-.79.4-1.53 1.05-1.97A4.37 4.37 0 0 0 8 2.2V2a1 1 0 0 0-1-1ZM10 3a1 1 0 1 1 2 0v.42a3.2 3.2 0 0 1-2.18 3.03A1.2 1.2 0 0 0 9 7.58V8a1 1 0 0 1-2 0v-.42c0-1.37.88-2.6 2.18-3.03.5-.16.82-.62.82-1.13V3ZM2 11a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1 10 10 0 0 1-4.7 8.49.6.6 0 0 0-.3.51 2 2 0 0 1-2 2H9a2 2 0 0 1-2-2 .6.6 0 0 0-.3-.51A10 10 0 0 1 2 11ZM20.85 8.02c.16.52-.3.98-.85.98h-8c-.55 0-1.01-.46-.85-.98a4.07 4.07 0 0 1 1.31-1.84 5.23 5.23 0 0 1 1.63-.88 6.1 6.1 0 0 1 3.82 0c.61.2 1.16.5 1.63.87a4.07 4.07 0 0 1 1.3 1.85Z",
      className: _
    })
  }))
}
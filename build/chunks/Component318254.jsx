/** Chunk was on web.js **/
/** chunk id: 318254, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => p
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
  return (0, r.jsxs)("svg", u(l({}, (0, a.A)(h)), {
    xmlns: "http://www.w3.org/2000/svg",
    width: g,
    height: E,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, r.jsx)("path", {
      d: "M11.75 7.57a5.12 5.12 0 0 1-3.86 3.87.42.42 0 0 0 0 .82 5.1 5.1 0 0 1 3.86 3.86.42.42 0 0 0 .81 0 5.12 5.12 0 0 1 3.87-3.86.42.42 0 0 0 0-.82 5.15 5.15 0 0 1-3.87-3.86.42.42 0 0 0-.81-.01Z",
      fill: "string" == typeof p ? p : p.css,
      className: _
    }), (0, r.jsx)("path", {
      fillRule: "evenodd",
      d: "M11.64.22c.3-.12.62-.12.91 0l7.49 3.1c.29.12.52.35.64.64l3.1 7.49c.12.29.12.62 0 .9l-3.1 7.5c-.12.28-.35.51-.64.63l-7.49 3.1c-.29.13-.62.13-.9 0l-7.5-3.1c-.28-.12-.52-.35-.64-.64l-3.1-7.48c-.12-.3-.12-.62 0-.91l3.1-7.49c.12-.29.36-.52.65-.64l7.48-3.1ZM20.6 11.5 12.5 3.4a.56.56 0 0 0-.8 0l-8.1 8.1a.56.56 0 0 0 0 .8l8.1 8.1c.22.22.57.22.8 0l8.1-8.1a.56.56 0 0 0 0-.8Zm-8.85-3.94a5.12 5.12 0 0 1-3.86 3.87.42.42 0 0 0 0 .82 5.1 5.1 0 0 1 3.86 3.86.42.42 0 0 0 .81 0 5.12 5.12 0 0 1 3.87-3.86.42.42 0 0 0 0-.82 5.15 5.15 0 0 1-3.87-3.86.42.42 0 0 0-.81-.01Z",
      clipRule: "evenodd",
      fill: "string" == typeof p ? p : p.css,
      className: _
    })]
  }))
}
/** Chunk was on web.js **/
/** chunk id: 16030, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk390507 = require("./390507.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
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

function s(e, t) {
  if (null == e) return {};
  var n, r, i = l(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function l(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let c = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  return function(n) {
    var o, l, c, u, d, {
        color: f
      } = n,
      p = s(n, ["color"]);
    let _ = "currentColor";
    null != f && (_ = "string" != typeof f && "css" in f ? f.css : f);
    let m = null != (o = p.size) ? o : "md",
      h = (0, i.m)(m),
      g = {
        color: _,
        width: null != (c = null != (l = null == h ? true : h.width) ? l : p.width) ? c : 24,
        height: null != (d = null != (u = null == h ? true : h.height) ? u : p.height) ? d : 24,
        foreground: p.colorClass
      };
    for (let [e, n] of Object.entries(t)) null != p[e] && (g[n] = p[e]);
    return (0, r.jsx)(e, a({}, p, g))
  }
}
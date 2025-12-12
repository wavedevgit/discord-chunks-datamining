/** Chunk was on web.js **/
/** chunk id: 677850, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js");

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

function c(e) {
  var {
    src: t,
    dynamicDataBinding: n
  } = e, o = s(e, ["src", "dynamicDataBinding"]);
  let {
    status: l,
    buffer: c
  } = (0, i.VG8)(t);
  return l === i.JtY.Loading ? null : (0, r.jsx)(i.vS4, a({
    buffer: c,
    artboardProperties: {},
    dynamicDataBinding: n
  }, o), t)
}
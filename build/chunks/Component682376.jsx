/** Chunk was on web.js **/
/** chunk id: 682376, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk144197 = require("./144197.js"),
  Chunk404726 = require("./404726.jsx"),
  Chunk98123 = require("./98123.js");

function s(e, t, n) {
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
      s(e, t, n[t])
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
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let p = {
  "Icon Unlock": {
    locked: "boolean",
    fill: "color"
  }
};

function _(e) {
  let {
    artboard: t = "Icon Unlock"
  } = e, n = d(e, ["artboard"]), {
    status: s,
    buffer: c
  } = (0, o.VG)(i.Z), f = (0, o.T3)(i.Z);
  return s === o.Jt.Loading ? null : (0, r.jsx)(a.v, l(u(l({}, f ? {
    key: "override"
  } : {}), {
    buffer: c,
    artboard: t,
    artboardProperties: p
  }), n))
}
_.riveSrc = Chunk144197.Z
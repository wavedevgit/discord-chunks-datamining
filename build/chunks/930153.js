/** Chunk was on web.js **/
/** chunk id: 930153, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $U: () => l,
  Bs: () => c,
  Lk: () => u,
  T3: () => d
});
var Chunk388032 = require("./388032.jsx");

function i(e, t, n) {
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
      i(e, t, n[t])
    })
  }
  return e
}
let o = 1e6,
  s = 1e3;

function l(e) {
  if (e < o) return r.intl.formatToPlainString(r.t.OiHat3, {
    value: e
  });
  let t = (e / o).toFixed(1);
  return r.intl.formatToPlainString(r.t.Iku48I, {
    value: t
  })
}

function c(e, t) {
  if (e < s) return r.intl.formatToPlainString(r.t.OiHat3, {
    value: Math.floor(e)
  });
  if (e < o) return r.intl.formatToPlainString(r.t["84R4Tc"], {
    value: Math.floor(e / s)
  });
  let n = Math.floor(10 * e / o) / 10,
    i = new Intl.NumberFormat(t, {
      maximumFractionDigits: 1
    }).format(n);
  return r.intl.formatToPlainString(r.t.Iku48I, {
    value: i
  })
}

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : NaN;
  if (null == e) return t;
  let n = parseInt(e);
  return Number.isNaN(n) ? t : n
}

function d(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  return Intl.NumberFormat(e, a({
    style: "percent",
    minimumFractionDigits: 0
  }, n)).format(t)
}
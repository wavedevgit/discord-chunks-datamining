/** Chunk was on web.js **/
/** chunk id: 275388, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GE: () => y,
  qA: () => E,
  r9: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk772848 = require("./772848.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk396639 = require("./396639.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk602091 = require("./602091.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let m = "orb-checkout-payment-modal-key",
  g = () => (0, Chunk481060.VXO)(m),
  E = e => {
    var {
      skuId: t,
      analyticsLocations: a = [],
      analyticsSourceLocation: c,
      onCloseCallback: u,
      onCheckoutSuccess: f
    } = e, h = p(e, ["skuId", "analyticsLocations", "analyticsSourceLocation", "onCloseCallback", "onCheckoutSuccess"]);
    let g = false,
      E = (0, i.Z)();
    return (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 396639));
      return n => (0, r.jsx)(e, _(d({
        skuId: t,
        analyticsLocations: a,
        analyticsSourceLocation: c,
        onCheckoutSuccess: e => {
          g || f(e), g = true
        }
      }, h, n), {
        loadId: E
      }))
    }, {
      onCloseCallback: u,
      onCloseRequest() {
        g || (0, s._Y)(l.rMx.PAYMENT_FLOW_CANCELED, {
          loadId: E,
          skuId: t,
          analyticsLocations: a,
          analyticsSourceLocation: c
        }), (0, o.Mr3)(m)
      },
      modalKey: m
    })
  };

function b(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : c.z1,
    r = e[n];
  return null != r && r.some(e => e.key !== t)
}

function y(e) {
  return (0, a.s9)(t => b(t, e))
}
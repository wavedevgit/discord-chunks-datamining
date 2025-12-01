/** Chunk was on web.js **/
/** chunk id: 275388, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  qA: () => h,
  r9: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk772848 = require("./772848.js");
require("./952265.js");
var Chunk481060 = require("./481060.js"),
  Chunk887505 = require("./887505.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
require("./602091.js");
let _ = "orb-checkout-payment-modal-key",
  m = () => (0, Chunk481060.VXO)(_),
  h = e => {
    var {
      skuId: t,
      analyticsLocations: l = [],
      analyticsSourceLocation: u,
      onCloseCallback: p,
      onCheckoutSuccess: m,
      isRental: h
    } = e, g = f(e, ["skuId", "analyticsLocations", "analyticsSourceLocation", "onCloseCallback", "onCheckoutSuccess", "isRental"]);
    let E = false,
      b = (0, i.Z)();
    return (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("22002").then(n.bind(n, 922987));
      return n => (0, r.jsx)(e, d(c({
        skuId: t,
        analyticsLocations: l,
        analyticsSourceLocation: u,
        onCheckoutSuccess: e => {
          E || m(e), E = true
        },
        isRental: h
      }, g, n), {
        loadId: b
      }))
    }, {
      onCloseCallback: p,
      onCloseRequest() {
        E || (0, o._)(s.rMx.PAYMENT_FLOW_CANCELED, {
          loadId: b,
          skuId: t,
          analyticsLocations: l,
          analyticsSourceLocation: u
        }), (0, a.Mr3)(_)
      },
      modalKey: _
    })
  }
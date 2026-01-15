/** Chunk was on web.js **/
/** chunk id: 275388, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  qA: () => b,
  r9: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk772848 = require("./772848.js");
require("./952265.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk844718 = require("./844718.js"),
  Chunk762853 = require("./762853.js"),
  Chunk301167 = require("./301167.js"),
  Chunk887505 = require("./887505.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
require("./602091.js");
let m = "orb-checkout-payment-modal-key",
  g = () => (0, a.VXO)(m);

function E() {
  o.Z.wait(() => {
    o.Z.dispatch({
      type: "PAYMENT_MODAL_OPEN"
    })
  })
}
let b = e => {
    let {
      skuId: t,
      onCheckoutSuccess: n,
      analyticsLocations: r = [],
      analyticsSourceLocation: o,
      onCloseCallback: l,
      rentalDuration: f
    } = e, {
      enabled: p
    } = (0, s.VL)({
      location: "openOrbCheckoutPaymentModal"
    }), _ = (0, i.Z)(), h = false, g = () => {
      h || (0, u._)(d.rMx.PAYMENT_FLOW_CANCELED, {
        loadId: _,
        skuId: t,
        analyticsLocations: r,
        analyticsSourceLocation: o
      }), (0, a.Mr3)(m)
    }, E = {
      loadId: _,
      skuId: t,
      onCheckoutSuccess: e => {
        h || n(e), h = true
      },
      analyticsLocations: r,
      analyticsSourceLocation: o,
      onCloseCallback: () => {
        (0, c.x)({
          checkoutSucceeded: h
        }), null == l || l()
      },
      rentalDuration: f,
      onCloseRequest: g
    };
    return p ? y(E) : O(E)
  },
  y = e => {
    let {
      loadId: t,
      skuId: n,
      onCheckoutSuccess: r,
      analyticsLocations: i = [],
      analyticsSourceLocation: a,
      onCloseCallback: o,
      rentalDuration: s,
      onCloseRequest: c
    } = e;
    return E(), (0, l.wO)().openCheckoutModal({
      loadId: t,
      skuId: n,
      analyticsLocations: i,
      analyticsSourceLocation: a,
      flowSpecificOptions: {
        rentalDuration: s,
        onCheckoutSuccess: r
      },
      openModalOptions: {
        onCloseCallback: o,
        modalKey: m,
        onCloseRequest: c
      }
    })
  },
  O = e => {
    let {
      skuId: t,
      onCheckoutSuccess: i,
      onCloseRequest: o,
      loadId: s,
      analyticsLocations: l = [],
      analyticsSourceLocation: c,
      onCloseCallback: u,
      rentalDuration: d
    } = e;
    return E(), (0, a.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 922987));
      return n => (0, r.jsx)(e, h(p({
        skuId: t,
        analyticsLocations: l,
        analyticsSourceLocation: c,
        onCheckoutSuccess: i,
        rentalDuration: d
      }, n), {
        loadId: s
      }))
    }, {
      onCloseCallback: u,
      onCloseRequest: o,
      modalKey: m
    })
  }
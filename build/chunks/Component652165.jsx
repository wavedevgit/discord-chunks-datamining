/** Chunk was on web.js **/
/** chunk id: 652165, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B4: () => y,
  o6: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk835245 = require("./835245.js");
require("./192308.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk769315 = require("./769315.js"),
  Chunk589078 = require("./589078.js"),
  Chunk301518 = require("./301518.js"),
  Chunk373856 = require("./373856.js"),
  Chunk652215 = require("./652215.js");

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
require("./231723.js");
let m = "orb-checkout-payment-modal-key",
  g = () => (0, a.Ry6)(m);

function E() {
  s.h.wait(() => {
    s.h.dispatch({
      type: "PAYMENT_MODAL_OPEN"
    })
  })
}
let y = e => {
    let {
      skuId: t,
      onCheckoutSuccess: n,
      analyticsLocations: r = [],
      analyticsSourceLocation: s,
      onCloseCallback: l,
      rentalDuration: f
    } = e, {
      enabled: p
    } = (0, o.ik)({
      location: "openOrbCheckoutPaymentModal"
    }), _ = (0, i.A)(), h = false, g = () => {
      h || (0, u.g)(d.HAw.PAYMENT_FLOW_CANCELED, {
        loadId: _,
        skuId: t,
        analyticsLocations: r,
        analyticsSourceLocation: s
      }), (0, a.OoC)(m)
    }, E = {
      loadId: _,
      skuId: t,
      onCheckoutSuccess: e => {
        h || n(e), h = true
      },
      analyticsLocations: r,
      analyticsSourceLocation: s,
      onCloseCallback: () => {
        (0, c.S)({
          checkoutSucceeded: h
        }), null == l || l()
      },
      rentalDuration: f,
      onCloseRequest: g
    };
    return p ? b(E) : O(E)
  },
  b = e => {
    let {
      loadId: t,
      skuId: n,
      onCheckoutSuccess: r,
      analyticsLocations: i = [],
      analyticsSourceLocation: a,
      onCloseCallback: s,
      rentalDuration: o,
      onCloseRequest: c
    } = e;
    return E(), (0, l.Tt)().openCheckoutModal({
      loadId: t,
      skuId: n,
      analyticsLocations: i,
      analyticsSourceLocation: a,
      flowSpecificOptions: {
        rentalDuration: o,
        onCheckoutSuccess: r
      },
      openModalOptions: {
        onCloseCallback: s,
        modalKey: m,
        onCloseRequest: c
      }
    })
  },
  O = e => {
    let {
      skuId: t,
      onCheckoutSuccess: i,
      onCloseRequest: s,
      loadId: o,
      analyticsLocations: l = [],
      analyticsSourceLocation: c,
      onCloseCallback: u,
      rentalDuration: d
    } = e;
    return E(), (0, a.mMO)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 440612));
      return n => (0, r.jsx)(e, h(p({
        skuId: t,
        analyticsLocations: l,
        analyticsSourceLocation: c,
        onCheckoutSuccess: i,
        rentalDuration: d
      }, n), {
        loadId: o
      }))
    }, {
      onCloseCallback: u,
      onCloseRequest: s,
      modalKey: m
    })
  }
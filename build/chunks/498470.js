/** Chunk was on web.js **/
/** chunk id: 498470, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => f
});
var Chunk232582 = require("./232582.js"),
  Chunk532794 = require("./532794.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js");

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

function f(e) {
  let {
    buttonAction: t,
    analyticsLocations: n = [],
    analyticsLocation: l,
    onClose: u
  } = e;
  switch (t) {
    case r.dz.OPEN_MARKETING_PAGE:
      return () => {
        (0, a.pX)(o.BVt.APPLICATION_STORE), null == u || u()
      };
    case r.dz.OPEN_TIER_1_PAYMENT_MODAL:
      return () => (0, i.A)({
        subscriptionTier: s.pe.TIER_1,
        analyticsLocations: n,
        analyticsObject: d(c({}, l), {
          object: o.ZSU.BUTTON_CTA,
          objectType: o.AnalyticsObjectTypes.TIER_1
        }),
        onClose: e => {
          e && (null == u || u())
        }
      });
    case r.dz.OPEN_PLAN_SELECTION_MODAL:
      return () => (0, i.A)({
        analyticsLocations: n
      });
    case r.dz.OPEN_TIER_2_PAYMENT_MODAL:
    case r.dz.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
    default:
      return () => (0, i.A)({
        subscriptionTier: s.pe.TIER_2,
        analyticsLocations: n,
        analyticsObject: d(c({}, l), {
          object: o.ZSU.BUTTON_CTA,
          objectType: o.AnalyticsObjectTypes.TIER_2
        }),
        onClose: e => {
          e && (null == u || u())
        }
      })
  }
}
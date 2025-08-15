/** Chunk was on 61670 **/
/** chunk id: 409600, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk107998 = require("./107998.jsx"),
  Chunk791785 = require("./791785.jsx"),
  Chunk961830 = require("./961830.jsx"),
  Chunk382263 = require("./382263.jsx"),
  Chunk231338 = require("./231338.js");

function p(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: a,
    applicationId: s,
    analyticsLocationObject: o,
    skuId: u
  } = e, {} = (0, r.JL)(), {
    analyticsLocations: d
  } = (0, l.ZP)();
  return (0, i.jsx)(c.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: s,
    skuId: u,
    initialPlanId: null,
    analyticsObject: o,
    analyticsLocations: d,
    transitionState: a
  })
}

function m(e) {
  let {
    loadId: t,
    applicationId: n,
    skuId: c,
    analyticsLocations: m,
    isGift: g = false
  } = e, {
    analyticsLocations: b
  } = (0, l.ZP)(m, a.Z.PREMIUM_PAYMENT_MODAL);
  return (0, i.jsx)(l.Gt, {
    value: b,
    children: (0, i.jsx)(r.PaymentContextProvider, {
      loadId: t,
      stepConfigs: function() {
        let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
        return [u.WA, ...e ? [d.PT] : [], u.s2, ...u.yp, u.wo, u.F7]
      }(g),
      applicationId: n,
      skuIDs: [c],
      activeSubscription: null,
      purchaseType: f.GZ.ONE_TIME,
      isGift: g,
      children: (0, i.jsx)(o.c1, {
        children: (0, i.jsx)(s.KB, {
          isGift: g,
          children: (0, i.jsx)(p, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), i.forEach(function(t) {
                var i;
                i = n[t], t in e ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = i
              })
            }
            return e
          }({}, e))
        })
      })
    })
  })
}
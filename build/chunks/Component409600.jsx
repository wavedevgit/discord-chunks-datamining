/** Chunk was on 61670 **/
/** chunk id: 409600, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk107998 = require("./107998.jsx"),
  Chunk791785 = require("./791785.jsx"),
  Chunk961830 = require("./961830.jsx"),
  Chunk382263 = require("./382263.jsx"),
  Chunk231338 = require("./231338.js");

function g(e) {
  let {
    onClose: n,
    onComplete: t,
    transitionState: a,
    applicationId: r,
    analyticsLocationObject: o,
    skuId: u
  } = e, {} = (0, s.JL)(), {
    analyticsLocations: d
  } = (0, i.ZP)();
  return (0, l.jsx)(c.PaymentModal, {
    onClose: n,
    onComplete: t,
    applicationId: r,
    skuId: u,
    initialPlanId: null,
    analyticsObject: o,
    analyticsLocations: d,
    transitionState: a
  })
}

function p(e) {
  let {
    loadId: n,
    applicationId: t,
    skuId: c,
    analyticsLocations: p,
    isGift: m = false
  } = e, {
    analyticsLocations: b
  } = (0, i.ZP)(p, a.Z.PREMIUM_PAYMENT_MODAL);
  return (0, l.jsx)(i.Gt, {
    value: b,
    children: (0, l.jsx)(s.PaymentContextProvider, {
      loadId: n,
      stepConfigs: function() {
        let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
        return [u.WA, ...e ? [d.PT] : [], u.s2, ...u.yp, u.wo, u.F7]
      }(m),
      applicationId: t,
      skuIDs: [c],
      activeSubscription: null,
      purchaseType: f.GZ.ONE_TIME,
      isGift: m,
      children: (0, l.jsx)(o.c1, {
        children: (0, l.jsx)(r.KB, {
          isGift: m,
          children: (0, l.jsx)(g, function(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {},
                l = Object.keys(t);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              }))), l.forEach(function(n) {
                var l;
                l = t[n], n in e ? Object.defineProperty(e, n, {
                  value: l,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[n] = l
              })
            }
            return e
          }({}, e))
        })
      })
    })
  })
}
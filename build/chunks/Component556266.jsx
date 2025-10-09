/** Chunk was on 45227 **/
/** chunk id: 556266, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
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
  Chunk137440 = require("./137440.jsx"),
  Chunk511821 = require("./511821.jsx"),
  Chunk231338 = require("./231338.js");
let m = (e, t, n) => (0, i.jsx)(u.Z, {
  step: n,
  onClose: () => t(false)
});

function p(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: a,
    applicationId: r,
    analyticsLocationObject: o,
    skuId: c
  } = e, {} = (0, s.JL)(), {
    analyticsLocations: u
  } = (0, l.ZP)();
  return (0, i.jsx)(d.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: r,
    skuId: c,
    renderHeader: m,
    initialPlanId: null,
    analyticsObject: o,
    analyticsLocations: u,
    transitionState: a
  })
}

function v(e) {
  let {
    loadId: t,
    applicationId: n,
    skuId: d,
    analyticsLocations: u,
    isGift: m = false
  } = e, {
    analyticsLocations: v
  } = (0, l.ZP)(u, a.Z.PREMIUM_PAYMENT_MODAL);
  return (0, i.jsx)(l.Gt, {
    value: v,
    children: (0, i.jsx)(s.PaymentContextProvider, {
      loadId: t,
      stepConfigs: function() {
        let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
        return [c.WA, ...e ? [g.jM] : [], c.s2, ...c.yp, c.wo, c.F7]
      }(m),
      applicationId: n,
      skuIDs: [d],
      activeSubscription: null,
      purchaseType: f.GZ.ONE_TIME,
      isGift: m,
      children: (0, i.jsx)(o.c1, {
        children: (0, i.jsx)(r.KB, {
          isGift: m,
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
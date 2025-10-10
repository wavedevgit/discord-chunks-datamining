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
  Chunk439293 = require("./439293.jsx"),
  Chunk152242 = require("./152242.jsx"),
  Chunk231338 = require("./231338.js");
let m = function() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return (t, n, l) => (0, i.jsx)(u.Z, {
    step: l,
    onClose: () => n(false),
    isGift: e
  })
};

function p(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: l,
    applicationId: a,
    analyticsLocationObject: o,
    skuId: d,
    isGift: u
  } = e, {} = (0, s.JL)(), {
    analyticsLocations: f
  } = (0, r.ZP)();
  return (0, i.jsx)(c.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: a,
    skuId: d,
    renderHeader: m(u),
    initialPlanId: null,
    analyticsObject: o,
    analyticsLocations: f,
    transitionState: l
  })
}

function v(e) {
  let {
    loadId: t,
    applicationId: n,
    skuId: c,
    analyticsLocations: u,
    isGift: m = false
  } = e, {
    analyticsLocations: v
  } = (0, r.ZP)(u, l.Z.PREMIUM_PAYMENT_MODAL);
  return (0, i.jsx)(r.Gt, {
    value: v,
    children: (0, i.jsx)(s.PaymentContextProvider, {
      loadId: t,
      stepConfigs: function() {
        let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
        return [d.WA, ...e ? [f.jM] : [], d.s2, ...d.yp, d.wo, d.F7]
      }(m),
      applicationId: n,
      skuIDs: [c],
      activeSubscription: null,
      purchaseType: g.GZ.ONE_TIME,
      isGift: m,
      children: (0, i.jsx)(o.c1, {
        children: (0, i.jsx)(a.KB, {
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
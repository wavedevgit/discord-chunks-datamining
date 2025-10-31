/** Chunk was on 45227 **/
/** chunk id: 556266, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk107998 = require("./107998.jsx"),
  Chunk791785 = require("./791785.jsx"),
  Chunk961830 = require("./961830.jsx"),
  Chunk444448 = require("./444448.jsx"),
  Chunk439293 = require("./439293.jsx"),
  Chunk152242 = require("./152242.jsx"),
  Chunk231338 = require("./231338.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let v = function() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return (t, n, i) => (0, r.jsx)(p.Z, {
    step: i,
    onClose: () => n(false),
    isGift: e
  })
};

function j(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: i,
    applicationId: a,
    analyticsLocationObject: c,
    skuId: s,
    isGift: d
  } = e, {} = (0, o.JL)(), {
    analyticsLocations: f
  } = (0, l.ZP)();
  return (0, r.jsx)(u.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: a,
    skuId: s,
    renderHeader: v(d),
    initialPlanId: null,
    analyticsObject: c,
    analyticsLocations: f,
    transitionState: i
  })
}

function O(e) {
  let {
    loadId: t,
    applicationId: n,
    skuId: u,
    analyticsLocations: p,
    isGift: v = false
  } = e, {
    analyticsLocations: O
  } = (0, l.ZP)(p, i.Z.PREMIUM_PAYMENT_MODAL);
  return (0, r.jsx)(l.Gt, {
    value: O,
    children: (0, r.jsx)(o.PaymentContextProvider, {
      loadId: t,
      stepConfigs: function() {
        let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
        return [d.WA, ...e ? [g.jM] : [], d.s2, ...d.yp, d.wo, {
          key: c.h8.CONFIRM,
          renderStep: e => (0, r.jsx)(f.d, m({}, e))
        }]
      }(v),
      applicationId: n,
      skuIDs: [u],
      activeSubscription: null,
      purchaseType: b.GZ.ONE_TIME,
      isGift: v,
      children: (0, r.jsx)(s.c1, {
        children: (0, r.jsx)(a.KB, {
          isGift: v,
          children: (0, r.jsx)(j, m({}, e))
        })
      })
    })
  })
}
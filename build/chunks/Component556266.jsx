/** Chunk was on 45227 **/
/** chunk id: 556266, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
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

function v(e) {
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
}
let b = function() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return (t, n, r) => (0, i.jsx)(g.Z, {
    step: r,
    onClose: () => n(false),
    isGift: e
  })
};

function h(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: r,
    applicationId: a,
    analyticsLocationObject: s,
    skuId: c,
    isGift: u
  } = e, {} = (0, o.JL)(), {
    analyticsLocations: f
  } = (0, l.ZP)();
  return (0, i.jsx)(d.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: a,
    skuId: c,
    renderHeader: b(u),
    initialPlanId: null,
    analyticsObject: s,
    analyticsLocations: f,
    transitionState: r
  })
}

function x(e) {
  let {
    loadId: t,
    applicationId: n,
    skuId: d,
    analyticsLocations: g,
    isGift: b = false
  } = e, {
    analyticsLocations: x
  } = (0, l.ZP)(g, r.Z.PREMIUM_PAYMENT_MODAL);
  return (0, i.jsx)(l.Gt, {
    value: x,
    children: (0, i.jsx)(o.PaymentContextProvider, {
      loadId: t,
      stepConfigs: function() {
        let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
        return [u.WA, ...e ? [p.jM] : [], u.s2, ...u.yp, u.wo, {
          key: s.h8.CONFIRM,
          renderStep: e => (0, i.jsx)(f.d, v({}, e))
        }]
      }(b),
      applicationId: n,
      skuIDs: [d],
      activeSubscription: null,
      purchaseType: m.GZ.ONE_TIME,
      isGift: b,
      children: (0, i.jsx)(c.c1, {
        children: (0, i.jsx)(a.KB, {
          isGift: b,
          children: (0, i.jsx)(h, v({}, e))
        })
      })
    })
  })
}
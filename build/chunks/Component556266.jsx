/** Chunk was on 45227 **/
/** chunk id: 556266, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk107998 = require("./107998.jsx"),
  Chunk791785 = require("./791785.jsx"),
  Chunk961830 = require("./961830.jsx"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk411935 = require("./411935.js"),
  Chunk444448 = require("./444448.jsx"),
  Chunk439293 = require("./439293.jsx"),
  Chunk152242 = require("./152242.jsx"),
  Chunk231338 = require("./231338.js");

function j(e) {
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
  return (t, n, l) => (0, i.jsx)(v.Z, {
    step: l,
    onClose: () => n(false),
    isGift: e
  })
};

function I(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: l,
    applicationId: r,
    analyticsLocationObject: s,
    skuId: o,
    isGift: d
  } = e, {} = (0, c.JL)(), {
    analyticsLocations: u
  } = (0, a.ZP)();
  return (0, i.jsx)(f.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: r,
    skuId: o,
    renderHeader: b(d),
    initialPlanId: null,
    analyticsObject: s,
    analyticsLocations: u,
    transitionState: l
  })
}

function P(e) {
  let {
    loadId: t,
    applicationId: n,
    skuId: f,
    analyticsLocations: v,
    isGift: b = false,
    giftRecipient: P,
    giftingOrigin: w
  } = e, {
    analyticsLocations: y
  } = (0, a.ZP)(v, r.Z.SLAYER_STOREFRONT_PAYMENT_MODAL), S = (0, s.q)(n);
  return l.useEffect(() => {
    null == S || null == S.guildId || null == f || p.Z.isFetchingForSKU(f) || null != m.Z.get(f) || (0, h.y)(S.guildId, f)
  }, [S, f]), (0, i.jsx)(a.Gt, {
    value: y,
    children: (0, i.jsx)(c.PaymentContextProvider, {
      loadId: t,
      stepConfigs: function() {
        let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
        return [g.WA, ...e ? [C.jM] : [], g.s2, ...g.yp, g.wo, {
          key: d.h8.CONFIRM,
          renderStep: e => (0, i.jsx)(x.d, j({}, e))
        }]
      }(b),
      applicationId: n,
      skuIDs: [f],
      activeSubscription: null,
      purchaseType: _.GZ.ONE_TIME,
      isGift: b,
      children: (0, i.jsx)(u.c1, {
        children: (0, i.jsx)(o.KB, {
          isGift: b,
          giftRecipient: P,
          giftingOrigin: w,
          children: (0, i.jsx)(I, j({}, e))
        })
      })
    })
  })
}
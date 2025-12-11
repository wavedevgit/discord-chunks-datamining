/** Chunk was on 45227 **/
/** chunk id: 556266, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => w
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
let I = function() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return (t, n, a) => (0, i.jsx)(v.Z, {
    step: a,
    onClose: () => n(false),
    isGift: e
  })
};

function P(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: a,
    applicationId: l,
    analyticsLocationObject: s,
    skuId: o,
    isGift: c
  } = e, {} = (0, d.JL)(), {
    analyticsLocations: u
  } = (0, r.ZP)();
  return (0, i.jsx)(f.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: l,
    skuId: o,
    renderHeader: I(c),
    initialPlanId: null,
    analyticsObject: s,
    analyticsLocations: u,
    transitionState: a
  })
}

function w(e) {
  let {
    loadId: t,
    applicationId: n,
    skuId: f,
    analyticsLocations: v,
    isGift: I = false,
    giftRecipient: w,
    giftingOrigin: _
  } = e, {
    analyticsLocations: y
  } = (0, r.ZP)(v, l.Z.SLAYER_STOREFRONT_PAYMENT_MODAL), S = (0, s.q)(n);
  return a.useEffect(() => {
    null == S || null == S.guildId || null == f || p.Z.isFetchingForSKU(f) || null != m.Z.get(f) || (0, h.y)(S.guildId, f)
  }, [S, f]), (0, i.jsx)(r.Gt, {
    value: y,
    children: (0, i.jsx)(d.PaymentContextProvider, {
      loadId: t,
      stepConfigs: function() {
        let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
        return [g.WA, ...e ? [C.jM] : [], g.s2, ...g.yp, g.wo, {
          key: c.h8.CONFIRM,
          renderStep: e => (0, i.jsx)(x.d, j({}, e))
        }]
      }(I),
      applicationId: n,
      skuIDs: [f],
      activeSubscription: null,
      purchaseType: b.GZ.ONE_TIME,
      isGift: I,
      children: (0, i.jsx)(u.c1, {
        children: (0, i.jsx)(o.KB, {
          isGift: I,
          giftRecipient: w,
          giftingOrigin: _,
          children: (0, i.jsx)(P, j({}, e))
        })
      })
    })
  })
}
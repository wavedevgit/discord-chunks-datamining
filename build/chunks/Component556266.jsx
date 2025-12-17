/** Chunk was on web.js **/
/** chunk id: 556266, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => C,
  default: () => A
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

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}
let S = function() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return (t, n, i) => (0, r.jsx)(E.Z, {
    step: i,
    onClose: () => n(false),
    isGift: e
  })
};

function I(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: i,
    applicationId: a,
    analyticsLocationObject: s,
    skuId: l,
    isGift: u
  } = e, {} = (0, c.JL)(), {
    analyticsLocations: d
  } = (0, o.ZP)();
  return (0, r.jsx)(f.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: a,
    skuId: l,
    renderHeader: S(u),
    initialPlanId: null,
    analyticsObject: s,
    analyticsLocations: d,
    transitionState: i
  })
}

function T() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return [Chunk961830.WA, ...module ? [Chunk152242.jM] : [], Chunk961830.s2, ...Chunk961830.yp, Chunk961830.wo, {
    key: Chunk409813.h8.CONFIRM,
    renderStep: e => (0, r.jsx)(g.d, v({}, e))
  }]
}
let C = e => {
  let {
    applicationId: t,
    skuId: n,
    analyticsLocations: r
  } = e, {
    analyticsLocations: l
  } = (0, o.ZP)(r, a.Z.SLAYER_STOREFRONT_PAYMENT_MODAL), c = (0, s.q)(t);
  return i.useEffect(() => {
    null == c || null == c.guildId || null == n || m.Z.isFetchingForSKU(n) || null != _.Z.get(n) || (0, h.y)(c.guildId, n)
  }, [c, n]), {
    analyticsLocations: l
  }
};

function A(e) {
  let {
    loadId: t,
    applicationId: n,
    isGift: i = false,
    giftRecipient: a,
    giftingOrigin: s,
    additionalUserIds: u
  } = e, {
    analyticsLocations: f
  } = C(e);
  return (0, r.jsx)(o.Gt, {
    value: f,
    children: (0, r.jsx)(c.PaymentContextProvider, {
      loadId: t,
      stepConfigs: T(i),
      applicationId: n,
      skuIDs: [e.skuId],
      activeSubscription: null,
      purchaseType: y.GZ.ONE_TIME,
      isGift: i,
      children: (0, r.jsx)(d.c1, {
        children: (0, r.jsx)(l.KB, {
          isGift: i,
          giftRecipient: a,
          giftingOrigin: s,
          additionalUserIds: u,
          children: (0, r.jsx)(I, v({}, e))
        })
      })
    })
  })
}
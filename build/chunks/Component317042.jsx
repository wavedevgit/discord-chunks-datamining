/** Chunk was on web.js **/
/** chunk id: 317042, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => T,
  default: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk491057 = require("./491057.jsx"),
  Chunk546042 = require("./546042.jsx"),
  Chunk721252 = require("./721252.jsx"),
  Chunk67480 = require("./67480.js"),
  Chunk328968 = require("./328968.js"),
  Chunk733391 = require("./733391.js"),
  Chunk11054 = require("./11054.jsx"),
  Chunk639149 = require("./639149.jsx"),
  Chunk941673 = require("./941673.jsx"),
  Chunk818348 = require("./818348.js");

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
let A = function() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return (t, n, i) => (0, r.jsx)(E.A, {
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
  } = e, {} = (0, c.P5)(), {
    analyticsLocations: d
  } = (0, o.Ay)();
  return (0, r.jsx)(f.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: a,
    skuId: l,
    renderHeader: A(u),
    initialPlanId: null,
    analyticsObject: s,
    analyticsLocations: d,
    transitionState: i
  })
}

function S() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return [p.kJ, ...e ? [y.gj] : [], p.zK, ...p.hh, p.r2, {
    key: u.pn.CONFIRM,
    renderStep: e => (0, r.jsx)(g.M, v({}, e))
  }]
}
let T = e => {
  let {
    applicationId: t,
    skuId: n,
    analyticsLocations: r
  } = e, {
    analyticsLocations: l
  } = (0, o.Ay)(r, a.A.SLAYER_STOREFRONT_PAYMENT_MODAL), c = (0, s.h)(t);
  return i.useEffect(() => {
    null == c || null == c.guildId || null == n || h.A.isFetchingForSKU(n) || null != _.A.get(n) || (0, m.qf)(c.guildId, n)
  }, [c, n]), {
    analyticsLocations: l
  }
};

function C(e) {
  let {
    loadId: t,
    applicationId: n,
    isGift: i = false,
    giftRecipient: a,
    giftingOrigin: s,
    additionalUserIds: u
  } = e, {
    analyticsLocations: f
  } = T(e);
  return (0, r.jsx)(o.f5, {
    value: f,
    children: (0, r.jsx)(c.PaymentContextProvider, {
      loadId: t,
      stepConfigs: S(i),
      applicationId: n,
      skuIDs: [e.skuId],
      activeSubscription: null,
      purchaseType: b.VV.ONE_TIME,
      isGift: i,
      children: (0, r.jsx)(d.Qt, {
        children: (0, r.jsx)(l.dX, {
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
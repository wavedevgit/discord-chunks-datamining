/** Chunk was on web.js **/
/** chunk id: 963249, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk97613 = require("./97613.js"),
  a = require.n(Chunk97613),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk159351 = require("./159351.js"),
  Chunk366939 = require("./366939.js"),
  Chunk667 = require("./667.js"),
  Chunk138464 = require("./138464.js"),
  Chunk453227 = require("./453227.js"),
  Chunk164275 = require("./164275.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk74538 = require("./74538.js"),
  Chunk518727 = require("./518727.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = C(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function N(e) {
  let {
    initialPlanId: t,
    followupSKUInfo: i,
    onClose: v,
    onComplete: S,
    onSubscriptionConfirmation: C,
    analyticsLocations: N,
    analyticsObject: R,
    analyticsLocation: P,
    analyticsSourceLocation: w,
    confirmationFooter: D,
    paymentModalBanner: x,
    isGift: L = false,
    giftMessage: j,
    giftStyle: M,
    giftingOrigin: k,
    subscriptionTier: U,
    trialId: G,
    postSuccessGuild: B,
    openInvoiceId: Z,
    applicationId: F,
    referralTrialOfferId: V,
    giftRecipient: H,
    returnRef: Y,
    subscription: W,
    skipConfirm: K
  } = null != e ? e : {}, z = false, q = (0, o.Z)(), X = h.default.getCurrentUser(), Q = (0, E.M5)(X, O.p9.TIER_2), J = a()("payment-modal"), $ = (0, E.Wz)(U), ee = false;
  return (0, s.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("84992"), n.e("54400")]).then(n.bind(n, 7305));
    return n => {
      var {
        onClose: a
      } = n, o = A(n, ["onClose"]);
      return (0, r.jsx)(e, T(I({}, o), {
        loadId: q,
        subscriptionTier: U,
        skuId: $,
        isGift: L,
        giftMessage: j,
        giftStyle: M,
        giftingOrigin: k,
        giftRecipient: H,
        initialPlanId: t,
        followupSKUInfo: i,
        onClose: (e, t) => {
          if (ee) return;
          ee = true, g.S.dispatch(y.CkL.PREMIUM_PAYMENT_MODAL_CLOSED);
          let n = () => {
            a(), null == v || v(e), e && (null == C || C(), (0, p.M)(L, Q, t) && g.S.dispatch(y.CkL.PREMIUM_SUBSCRIPTION_CREATED)), l.Z.dispatch({
              type: "PREMIUM_PAYMENT_MODAL_CLOSE",
              didSucceed: e
            })
          };
          _.Z.isDisplayingWowMomentConfirmation && _.Z.isAnimated ? setTimeout(() => {
            n()
          }, b.P) : n()
        },
        onComplete: e => {
          z = true, null == S || S(), (0, p.M)(L, Q, (0, E.k5)(null == e ? true : e.subscription)) && (0, f.H)(true)
        },
        onSubscriptionConfirmation: C,
        analyticsLocations: N,
        analyticsObject: R,
        analyticsLocation: P,
        analyticsSourceLocation: w,
        confirmationFooter: D,
        paymentModalBanner: x,
        trialId: G,
        postSuccessGuild: B,
        planGroup: O.Y1,
        openInvoiceId: Z,
        applicationId: F,
        referralTrialOfferId: V,
        returnRef: Y,
        subscription: W,
        skipConfirm: !!K,
        wasTier2PremiumBeforePurchase: Q
      }))
    }
  }, {
    onCloseRequest: () => {
      ee || (ee = true, g.S.dispatch(y.CkL.PREMIUM_PAYMENT_MODAL_CLOSED), _.Z.isDisplayingWowMomentConfirmation && _.Z.isAnimated ? setTimeout(() => {
        (0, s.Mr3)(J)
      }, b.P) : (0, s.Mr3)(J))
    },
    modalKey: J,
    onCloseCallback: () => {
      z || m.default.track(y.rMx.PAYMENT_FLOW_CANCELED, {
        load_id: q,
        payment_type: y.Zuq[y.GZQ.SUBSCRIPTION],
        location: null != P ? P : R,
        source: w,
        subscription_type: y.NYc.PREMIUM,
        is_gift: L,
        sku_id: $,
        eligible_for_trial: null != G,
        application_id: F,
        location_stack: N
      }), (0, u.fw)(), (0, c.fw)(), (0, d.p)(), null == v || v(z), z && (null == C || C())
    }
  })
}
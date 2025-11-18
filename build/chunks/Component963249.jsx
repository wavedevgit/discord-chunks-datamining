/** Chunk was on web.js **/
/** chunk id: 963249, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk845220 = require("./845220.js"),
  Chunk518727 = require("./518727.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
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

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = N(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function R(e) {
  var t;
  let {
    initialPlanId: i,
    followupSKUInfo: I,
    onClose: S,
    onComplete: N,
    onSubscriptionConfirmation: R,
    analyticsLocations: P,
    analyticsObject: D,
    analyticsLocation: w,
    analyticsSourceLocation: L,
    confirmationFooter: x,
    isGift: M = false,
    giftMessage: k,
    giftStyle: j,
    giftingOrigin: U,
    subscriptionTier: G,
    trialId: B,
    postSuccessGuild: Z,
    openInvoiceId: F,
    applicationId: V,
    referralTrialOfferId: H,
    giftRecipient: Y,
    returnRef: W,
    subscription: K,
    skipConfirm: z
  } = null != e ? e : {}, q = false, X = null != (t = (0, b.b)()) ? t : (0, o.Z)(), Q = h.default.getCurrentUser(), J = (0, E.M5)(Q, v.PremiumTypes.TIER_2), $ = a()("payment-modal"), ee = (0, E.Wz)(G), et = false;
  return (0, s.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("84992"), n.e("16"), n.e("54400")]).then(n.bind(n, 7305));
    return t => {
      var {
        onClose: n
      } = t, a = C(t, ["onClose"]);
      return (0, r.jsx)(e, A(T({}, a), {
        loadId: X,
        subscriptionTier: G,
        skuId: ee,
        isGift: M,
        giftMessage: k,
        giftStyle: j,
        giftingOrigin: U,
        giftRecipient: Y,
        initialPlanId: i,
        followupSKUInfo: I,
        onClose: (e, t) => {
          if (et) return;
          et = true, g.S.dispatch(O.CkL.PREMIUM_PAYMENT_MODAL_CLOSED);
          let r = () => {
            n(), null == S || S(e), e && (null == R || R(), (0, p.M)(M, J, t) && g.S.dispatch(O.CkL.PREMIUM_SUBSCRIPTION_CREATED)), l.Z.dispatch({
              type: "PREMIUM_PAYMENT_MODAL_CLOSE",
              didSucceed: e
            })
          };
          _.Z.isDisplayingWowMomentConfirmation && _.Z.isAnimated ? setTimeout(() => {
            r()
          }, y.P) : r()
        },
        onComplete: e => {
          q = true, null == N || N(), (0, p.M)(M, J, (0, E.k5)(null == e ? true : e.subscription)) && (0, f.H)(true)
        },
        onSubscriptionConfirmation: R,
        analyticsLocations: P,
        analyticsObject: D,
        analyticsLocation: w,
        analyticsSourceLocation: L,
        confirmationFooter: x,
        trialId: B,
        postSuccessGuild: Z,
        planGroup: v.Y1,
        openInvoiceId: F,
        applicationId: V,
        referralTrialOfferId: H,
        returnRef: W,
        subscription: K,
        skipConfirm: !!z,
        wasTier2PremiumBeforePurchase: J
      }))
    }
  }, {
    onCloseRequest: () => {
      et || (et = true, g.S.dispatch(O.CkL.PREMIUM_PAYMENT_MODAL_CLOSED), _.Z.isDisplayingWowMomentConfirmation && _.Z.isAnimated ? setTimeout(() => {
        (0, s.Mr3)($)
      }, y.P) : (0, s.Mr3)($))
    },
    modalKey: $,
    onCloseCallback: () => {
      q || m.default.track(O.rMx.PAYMENT_FLOW_CANCELED, {
        load_id: X,
        payment_type: O.Zuq[O.GZQ.SUBSCRIPTION],
        location: null != w ? w : D,
        source: L,
        subscription_type: O.NYc.PREMIUM,
        is_gift: M,
        sku_id: ee,
        eligible_for_trial: null != B,
        application_id: V,
        location_stack: P
      }), (0, u.fw)(), (0, c.fw)(), (0, d.p)(), null == S || S(q), q && (null == R || R())
    }
  })
}
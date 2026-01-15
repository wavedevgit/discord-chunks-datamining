/** Chunk was on web.js **/
/** chunk id: 963249, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
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
  Chunk453227 = require("./453227.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk74538 = require("./74538.js"),
  Chunk845220 = require("./845220.js"),
  Chunk518727 = require("./518727.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

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

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
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

function A(e) {
  var t;
  let {
    initialPlanId: i,
    followupSKUInfo: O,
    onClose: S,
    onComplete: C,
    onSubscriptionConfirmation: A,
    analyticsLocations: N,
    analyticsObject: P,
    analyticsLocation: w,
    analyticsSourceLocation: R,
    confirmationFooter: D,
    isGift: x = false,
    giftMessage: L,
    giftStyle: j,
    giftingOrigin: M,
    subscriptionTier: k,
    trialId: U,
    postSuccessGuild: G,
    openInvoiceId: Z,
    applicationId: F,
    referralTrialOfferId: B,
    giftRecipient: V,
    returnRef: H,
    subscription: Y,
    skipConfirm: W
  } = null != e ? e : {}, K = false, z = null != (t = (0, g.b)()) ? t : (0, o.Z)(), q = p.default.getCurrentUser(), Q = (0, m.M5)(q, y.PremiumTypes.TIER_2), X = a()("payment-modal"), J = (0, m.Wz)(k), $ = false;
  return (0, s.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("84992"), n.e("16"), n.e("23242"), n.e("98587")]).then(n.bind(n, 7305));
    return t => {
      var {
        onClose: n
      } = t, a = T(t, ["onClose"]);
      return (0, r.jsx)(e, I(v({}, a), {
        loadId: z,
        subscriptionTier: k,
        skuId: J,
        isGift: x,
        giftMessage: L,
        giftStyle: j,
        giftingOrigin: M,
        giftRecipient: V,
        initialPlanId: i,
        followupSKUInfo: O,
        onClose: e => {
          if ($) return;
          $ = true, h.S.dispatch(b.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED);
          let t = () => {
            n(), null == S || S(e), e && (null == A || A()), l.Z.dispatch({
              type: "PREMIUM_PAYMENT_MODAL_CLOSE",
              didSucceed: e
            })
          };
          f.Z.isDisplayingWowMomentConfirmation && f.Z.isAnimated ? setTimeout(() => {
            t()
          }, E.P) : t()
        },
        onComplete: () => {
          K = true, null == C || C()
        },
        onSubscriptionConfirmation: A,
        analyticsLocations: N,
        analyticsObject: P,
        analyticsLocation: w,
        analyticsSourceLocation: R,
        confirmationFooter: D,
        trialId: U,
        postSuccessGuild: G,
        planGroup: y.Y1,
        openInvoiceId: Z,
        applicationId: F,
        referralTrialOfferId: B,
        returnRef: H,
        subscription: Y,
        skipConfirm: !!W,
        wasTier2PremiumBeforePurchase: Q
      }))
    }
  }, {
    onCloseRequest: () => {
      $ || ($ = true, h.S.dispatch(b.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), f.Z.isDisplayingWowMomentConfirmation && f.Z.isAnimated ? setTimeout(() => {
        (0, s.Mr3)(X)
      }, E.P) : (0, s.Mr3)(X))
    },
    modalKey: X,
    onCloseCallback: () => {
      K || _.default.track(b.rMx.PAYMENT_FLOW_CANCELED, {
        load_id: z,
        payment_type: b.Zuq[b.GZQ.SUBSCRIPTION],
        location: null != w ? w : P,
        source: R,
        subscription_type: b.NYc.PREMIUM,
        is_gift: x,
        sku_id: J,
        eligible_for_trial: null != U,
        application_id: F,
        location_stack: N
      }), (0, u.fw)(), (0, c.fw)(), (0, d.p)(), null == S || S(K), K && (null == A || A())
    }
  })
}
/** Chunk was on web.js **/
/** chunk id: 532794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk296489 = require("./296489.js"),
  a = require.n(Chunk296489),
  Chunk835245 = require("./835245.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk391048 = require("./391048.js"),
  Chunk158032 = require("./158032.js"),
  Chunk636099 = require("./636099.js"),
  Chunk573359 = require("./573359.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk927578 = require("./927578.js"),
  Chunk925847 = require("./925847.js"),
  Chunk639289 = require("./639289.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = T(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function C(e) {
  var t;
  let {
    initialPlanId: i,
    followupSKUInfo: O,
    onClose: v,
    onComplete: T,
    onSubscriptionConfirmation: C,
    analyticsLocations: N,
    analyticsObject: R,
    analyticsLocation: w,
    analyticsSourceLocation: P,
    confirmationFooter: D,
    isGift: x = false,
    giftMessage: L,
    giftStyle: j,
    giftingOrigin: M,
    subscriptionTier: k,
    trialId: U,
    postSuccessGuild: G,
    openInvoiceId: V,
    applicationId: F,
    referralTrialOfferId: B,
    giftRecipient: H,
    returnRef: Y,
    subscription: W,
    skipConfirm: K
  } = null != e ? e : {}, z = false, q = null != (t = (0, g.A)()) ? t : (0, s.A)(), X = p.default.getCurrentUser(), Z = (0, m.YE)(X, y.PremiumTypes.TIER_2), Q = a()("payment-modal"), $ = (0, m.mH)(k), J = false;
  return (0, o.mMO)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("14704"), n.e("29716"), n.e("2824"), n.e("58846")]).then(n.bind(n, 674619));
    return t => {
      let {
        onClose: n
      } = t, a = I(t, ["onClose"]);
      return (0, r.jsx)(e, S(A({}, a), {
        loadId: q,
        subscriptionTier: k,
        skuId: $,
        isGift: x,
        giftMessage: L,
        giftStyle: j,
        giftingOrigin: M,
        giftRecipient: H,
        initialPlanId: i,
        followupSKUInfo: O,
        onClose: e => {
          if (J) return;
          J = true, h._.dispatch(b.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED);
          let t = () => {
            n(), null == v || v(e), e && (null == C || C()), l.h.dispatch({
              type: "PREMIUM_PAYMENT_MODAL_CLOSE",
              didSucceed: e
            })
          };
          f.A.isDisplayingWowMomentConfirmation && f.A.isAnimated ? setTimeout(() => {
            t()
          }, E.K) : t()
        },
        onComplete: () => {
          z = true, null == T || T()
        },
        onSubscriptionConfirmation: C,
        analyticsLocations: N,
        analyticsObject: R,
        analyticsLocation: w,
        analyticsSourceLocation: P,
        confirmationFooter: D,
        trialId: U,
        postSuccessGuild: G,
        planGroup: y.LE,
        openInvoiceId: V,
        applicationId: F,
        referralTrialOfferId: B,
        returnRef: Y,
        subscription: W,
        skipConfirm: !!K,
        wasTier2PremiumBeforePurchase: Z
      }))
    }
  }, {
    onCloseRequest: () => {
      J || (J = true, h._.dispatch(b.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), f.A.isDisplayingWowMomentConfirmation && f.A.isAnimated ? setTimeout(() => {
        (0, o.OoC)(Q)
      }, E.K) : (0, o.OoC)(Q))
    },
    modalKey: Q,
    onCloseCallback: () => {
      z || _.default.track(b.HAw.PAYMENT_FLOW_CANCELED, {
        load_id: q,
        payment_type: b.frM[b.VVm.SUBSCRIPTION],
        location: null != w ? w : R,
        source: P,
        subscription_type: b.rzx.PREMIUM,
        is_gift: x,
        sku_id: $,
        eligible_for_trial: null != U,
        application_id: F,
        location_stack: N
      }), (0, u.ET)(), (0, c.ET)(), (0, d.z)(), null == v || v(z), z && (null == C || C())
    }
  })
}
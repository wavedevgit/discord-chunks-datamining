/** Chunk was on web.js **/
/** chunk id: 791785, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => $,
  PaymentModal: () => J
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk548680 = require("./548680.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk496929 = require("./496929.js"),
  Chunk366939 = require("./366939.js"),
  Chunk16084 = require("./16084.js"),
  Chunk975608 = require("./975608.js"),
  Chunk493773 = require("./493773.js"),
  Chunk89057 = require("./89057.jsx"),
  Chunk232127 = require("./232127.js"),
  Chunk382577 = require("./382577.js"),
  Chunk522558 = require("./522558.js"),
  Chunk795448 = require("./795448.js"),
  Chunk317271 = require("./317271.js"),
  Chunk104494 = require("./104494.js"),
  Chunk176919 = require("./176919.js"),
  Chunk711007 = require("./711007.js"),
  Chunk459965 = require("./459965.js"),
  Chunk509545 = require("./509545.js"),
  Chunk580130 = require("./580130.js"),
  Chunk626135 = require("./626135.js"),
  Chunk669079 = require("./669079.js"),
  Chunk74538 = require("./74538.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk45572 = require("./45572.js"),
  Chunk784707 = require("./784707.js"),
  Chunk614223 = require("./614223.js"),
  Chunk48175 = require("./48175.js"),
  Chunk435020 = require("./435020.js"),
  Chunk928886 = require("./928886.jsx"),
  Chunk456251 = require("./456251.jsx"),
  Chunk614277 = require("./614277.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk876414 = require("./876414.js");

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      W(e, t, n[t])
    })
  }
  return e
}

function z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let X = 2,
  Q = "billing";

function J(e) {
  let {
    analyticsDataOverride: t,
    analyticsLocations: n,
    analyticsLocation: a,
    analyticsObject: l,
    analyticsSourceLocation: d,
    analyticsSubscriptionType: p = F.NYc.PREMIUM,
    onComplete: m,
    transitionState: C,
    initialPlanId: j,
    subscriptionTier: k,
    onClose: B,
    trialId: W,
    trialFooterMessageOverride: z,
    reviewWarningMessage: Q,
    planGroup: $ = V.Y1,
    openInvoiceId: ee,
    onSubscriptionConfirmation: et,
    renderPurchaseConfirmation: en,
    postSuccessGuild: er,
    followupSKUInfo: ei,
    renderHeader: ea,
    applicationId: eo,
    guildId: es,
    referralTrialOfferId: el,
    skuId: ec,
    onStepChange: eu,
    shakeWhilePurchasing: ed = false,
    isLargeModal: ef = false,
    isMediumModal: e_ = false,
    isDynamicModal: ep = false,
    hideShadow: eh = false,
    returnRef: em,
    skipConfirm: eg = false,
    continueSessionToInitialStep: eE
  } = e, {
    activitySessionId: eb,
    purchaseState: ey,
    setPurchaseState: eO,
    selectedSkuId: ev,
    setSelectedSkuId: eI,
    selectedPlan: eS,
    setSelectedPlanId: eT,
    setSelectedPlanNotification: eA,
    setStep: eC,
    setPurchaseError: eN,
    paymentAuthenticationState: eR,
    step: eP,
    contextMetadata: ew,
    purchaseTokenAuthState: eD,
    activeSubscription: ex,
    priceOptions: eL,
    hasPaymentSources: eM,
    paymentSourceId: ej,
    paymentSources: ek,
    purchaseType: eU,
    defaultPlanId: eG,
    premiumBrandRefreshBackgroundClassName: eB,
    customCheckoutFlow: eZ,
    invoicePreview: eF
  } = (0, D.JL)(), eV = (0, M.Z)(), {
    isGift: eH,
    giftRecipient: eY,
    customGiftMessage: eW,
    emojiConfetti: eK,
    soundEffect: ez
  } = (0, w.wD)(), eq = c.CgR.SMALL;
  ef || (null == eV ? true : eV.isLargeModal) ? eq = c.CgR.LARGE : e_ || (null == eV ? true : eV.isMediumModal) ? eq = c.CgR.MEDIUM : (eP === x.h8.ADD_PAYMENT_STEPS || ep || (null == eV ? true : eV.isDynamicModal)) && (eq = c.CgR.DYNAMIC);
  let eX = (0, v.Ng)(),
    eQ = null != k && !eH && (0, v.Wp)(eX, k),
    [eJ, e$] = i.useState(K({
      load_id: ew.loadId,
      payment_type: F.Zuq[eU],
      location: null != a ? a : l,
      source: d,
      subscription_type: p,
      subscription_plan_id: null == eS ? true : eS.id,
      is_gift: eH,
      eligible_for_trial: null != W,
      location_stack: n,
      sku_id: ec,
      application_id: eo,
      guild_id: es,
      payment_modal_version: J.CURRENT_VERSION,
      activity_session_id: eb,
      eligible_for_discount: eQ
    }, t)),
    e0 = (0, U.m)(ek, ej),
    e1 = null != eF ? eF.getDiscountIdIfExists() : true;
  i.useEffect(() => {
    e$(e => {
      let n = null != eS ? (0, P.aS)(eS.id, false, eH, eL) : true;
      return K(q(K({}, e), {
        subscription_plan_id: null == eS ? true : eS.id,
        price: null == n ? true : n.amount,
        regular_price: null == eS ? true : eS.price,
        currency: eL.currency,
        sku_id: ev
      }), t)
    })
  }, [eS, ev, eH, eL, t]), (0, h.ZP)(() => {
    (0, g.U)(q(K({}, eJ), {
      continue_session_initial_step: eE,
      custom_checkout_flow: eZ,
      has_saved_payment_source: eM,
      discount_id: null != eX ? eX.discount_id : e1
    }))
  }), i.useEffect(() => {
    if (null == eS && (null != eG && null != eE ? eT(eG) : eT(j)), null != ec) eI(ec);
    else if (null != j) {
      var e;
      eI(null == (e = A.Z.get(j)) ? true : e.skuId)
    }
  }, [eT, eS, eI, j, ec, eG, eE]);
  let e3 = i.useCallback(() => {
      let e = (0, R.MY)(eY) === R.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        t = Date.now();
      N.default.track(F.rMx.PAYMENT_FLOW_SUCCEEDED, q(K({}, eJ), {
        is_custom_message_edited: eH && e && null != eW ? eW !== H.intl.string(H.t.ZkOo1U) : true,
        is_custom_emoji_sound_available: eH && e,
        emoji_name: eH && e && (null == eK ? true : eK.id) == null ? null == eK ? true : eK.surrogates : true,
        sound_id: eH && e ? null == ez ? true : ez.soundId : true,
        duration_ms: t - ew.startTime,
        payment_source_type: null == e0 ? true : e0.type
      }));
      let {
        enabled: n
      } = b.w.getCurrentConfig({
        location: "PaymentModal emitPaymentFlowSuccess"
      }, {
        autoTrackExposure: false
      });
      eH && null != eY && null != a && n && (0, O.n)(a) && (0, y.Ni)(eY.id)
    }, [eJ, eK, eW, eY, eH, ez, ew.startTime, e0, a]),
    e2 = i.useMemo(() => () => null == B ? true : B(ey === L.A.COMPLETED, ev), [B, ey, ev]),
    e4 = (0, s.Z)(() => Date.now(), [eP]),
    e8 = i.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        {
          trackedFromStep: n,
          analyticsDataOverride: r,
          fulfillment: i,
          emitPaymentFlowLoadedEvent: a
        } = t,
        o = Date.now();
      if (e === x.h8.CONFIRM && (e3(), null == m || m(i), eg)) return void e2();
      eC(e), null == eu || eu(e), eN(null), eA(null), e === x.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(_.pB));
      let s = null != n ? n : eP;
      if (null === s || a) return void N.default.track(F.rMx.PAYMENT_FLOW_LOADED, q(K({}, eJ), {
        initial_step: null != s ? s : e,
        continue_session_initial_step: eE,
        has_saved_payment_source: eM
      }));
      N.default.track(F.rMx.PAYMENT_FLOW_STEP, q(K({}, eJ, r), {
        from_step: s,
        to_step: e === x.h8.ADD_PAYMENT_STEPS ? x.h8.PAYMENT_TYPE : e,
        step_duration_ms: o - e4,
        flow_duration_ms: o - ew.startTime
      }))
    }, [eC, eu, eN, eA, eP, eE, eJ, e4, ew.startTime, e3, m, eg, e2, eM]);
  (0, I.bp)(eP, eR, e8, eO), (0, x.dZ)(eP, ey, eO), (0, S.p)(eP, eD, e8), (0, E.Z)(e2), (0, T.w)(ex, () => B(false), eH), (0, I.D6)(eR);
  let e5 = {
      initialPlanId: j,
      subscriptionTier: k,
      handleStepChange: e8,
      handleClose: e2,
      analyticsData: eJ,
      setAnalyticsData: e$,
      trialId: W,
      trialFooterMessageOverride: z,
      reviewWarningMessage: Q,
      planGroup: $,
      openInvoiceId: ee,
      analyticsLocation: a,
      onSubscriptionConfirmation: et,
      renderPurchaseConfirmation: en,
      postSuccessGuild: er,
      followupSKUInfo: ei,
      referralTrialOfferId: el,
      skipConfirm: eg,
      continueSessionToInitialStep: eE
    },
    e6 = (0, G.U)({
      renderHeader: ea,
      referralTrialOfferId: el,
      handleClose: e2
    });
  return (0, r.jsx)(c.UkV, {
    className: Y.shaker,
    isShaking: ed && ey === L.A.PURCHASING,
    intensity: X,
    children: (0, r.jsx)(c.Y0X, {
      "data-migration-pending": true,
      className: o()(Y.root, eB, {
        [Y.withHeader]: null != e6
      }),
      transitionState: C,
      hideShadow: eh,
      returnRef: em,
      size: eq,
      parentComponent: "PaymentModal",
      children: (0, r.jsx)(Z.ZP, K({
        header: e6,
        isLargeModal: ef || (null == eV ? true : eV.isLargeModal),
        isDynamicModal: ep || (null == eV ? true : eV.isDynamicModal)
      }, e5))
    })
  })
}

function $(e) {
  let {
    subscriptionTier: t,
    initialPlanId: n,
    handleStepChange: a,
    referralTrialOfferId: o,
    handleClose: s,
    continueSessionToInitialStep: c
  } = e, {
    activeSubscription: u,
    blockedPayments: f,
    hasFetchedSubscriptions: _,
    hasFetchedSubscriptionPlans: h,
    currencyLoading: g,
    selectedSkuId: E,
    setSelectedPlanId: b,
    defaultPlanId: y,
    startedPaymentFlowWithPaymentSourcesRef: O
  } = (0, D.JL)(), {
    isGift: v
  } = (0, w.wD)(), I = O.current, S = (0, k.Z)({
    isGift: v,
    skuId: E,
    referralTrialOfferId: o
  }), [T, A] = i.useState(true), N = (0, l.e7)([C.Z], () => C.Z.applicationIdsFetched.has(V.CL));
  return (i.useEffect(() => {
    A(!_ || !h || g)
  }, [g, h, _]), (0, p.Z)("Payment Modal", T, 5, {
    hasFetchedSubscriptions: _,
    hasFetchedSubscriptionPlans: h,
    currencyLoading: g
  }, {
    tags: {
      app_context: Q
    }
  }), i.useEffect(() => {
    if (N || (0, d.yD)(V.CL), T || f) return;
    let e = (0, j.Kp)({
      isTrial: S,
      isGift: v,
      selectedSkuId: E,
      startedPaymentFlowWithPaymentSources: I
    });
    null != c ? a(x.h8.ADD_PAYMENT_STEPS, {
      emitPaymentFlowLoadedEvent: true,
      trackedFromStep: c
    }) : null != n ? a(x.h8.REVIEW) : e ? (b((0, j.nA)(E, u, y)), a(x.h8.REVIEW)) : null != t ? a(x.h8.PLAN_SELECT) : a(x.h8.SKU_SELECT)
  }, [c, u, f, N, n, T, a, t, E, b, S, y, v, I]), T) ? (0, r.jsx)(B.Z, {}) : f ? (0, r.jsx)(m.Vq, {
    onClose: s
  }) : null
}
J.CURRENT_VERSION = "v1"
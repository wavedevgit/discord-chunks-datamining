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
  Chunk695694 = require("./695694.js");

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
    initialPlanId: k,
    subscriptionTier: j,
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
    isDynamicModal: e_ = false,
    hideShadow: ep = false,
    returnRef: eh,
    skipConfirm: em = false,
    continueSessionToInitialStep: eg
  } = e, {
    activitySessionId: eE,
    purchaseState: eb,
    setPurchaseState: ey,
    selectedSkuId: eO,
    setSelectedSkuId: ev,
    selectedPlan: eI,
    setSelectedPlanId: eT,
    setSelectedPlanNotification: eS,
    setStep: eA,
    setPurchaseError: eC,
    paymentAuthenticationState: eN,
    step: eR,
    contextMetadata: eP,
    purchaseTokenAuthState: ew,
    activeSubscription: eD,
    priceOptions: ex,
    hasPaymentSources: eL,
    paymentSourceId: eM,
    paymentSources: ek,
    purchaseType: ej,
    defaultPlanId: eU,
    premiumBrandRefreshBackgroundClassName: eG,
    customCheckoutFlow: eB,
    invoicePreview: eZ
  } = (0, D.JL)(), eF = (0, M.Z)(), {
    isGift: eV,
    giftRecipient: eH,
    customGiftMessage: eY,
    emojiConfetti: eW,
    soundEffect: eK
  } = (0, w.wD)(), ez = c.CgR.SMALL;
  ef || (null == eF ? true : eF.isLargeModal) ? ez = c.CgR.LARGE : (eR === x.h8.ADD_PAYMENT_STEPS || e_ || (null == eF ? true : eF.isDynamicModal)) && (ez = c.CgR.DYNAMIC);
  let eq = (0, v.Ng)(),
    eX = null != j && !eV && (0, v.Wp)(eq, j),
    [eQ, eJ] = i.useState(K({
      load_id: eP.loadId,
      payment_type: F.Zuq[ej],
      location: null != a ? a : l,
      source: d,
      subscription_type: p,
      subscription_plan_id: null == eI ? true : eI.id,
      is_gift: eV,
      eligible_for_trial: null != W,
      location_stack: n,
      sku_id: ec,
      application_id: eo,
      guild_id: es,
      payment_modal_version: J.CURRENT_VERSION,
      activity_session_id: eE,
      eligible_for_discount: eX
    }, t)),
    e$ = (0, U.m)(ek, eM),
    e0 = null != eZ ? eZ.getDiscountIdIfExists() : true;
  i.useEffect(() => {
    eJ(e => {
      let n = null != eI ? (0, P.aS)(eI.id, false, eV, ex) : true;
      return K(q(K({}, e), {
        subscription_plan_id: null == eI ? true : eI.id,
        price: null == n ? true : n.amount,
        regular_price: null == eI ? true : eI.price,
        currency: ex.currency,
        sku_id: eO
      }), t)
    })
  }, [eI, eO, eV, ex, t]), (0, h.ZP)(() => {
    (0, g.U)(q(K({}, eQ), {
      continue_session_initial_step: eg,
      custom_checkout_flow: eB,
      has_saved_payment_source: eL,
      discount_id: null != eq ? eq.discount_id : e0
    }))
  }), i.useEffect(() => {
    if (null == eI && (null != eU && null != eg ? eT(eU) : eT(k)), null != ec) ev(ec);
    else if (null != k) {
      var e;
      ev(null == (e = A.Z.get(k)) ? true : e.skuId)
    }
  }, [eT, eI, ev, k, ec, eU, eg]);
  let e1 = i.useCallback(() => {
      let e = (0, R.MY)(eH) === R.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        t = Date.now();
      N.default.track(F.rMx.PAYMENT_FLOW_SUCCEEDED, q(K({}, eQ), {
        is_custom_message_edited: eV && e && null != eY ? eY !== H.intl.string(H.t.ZkOo1U) : true,
        is_custom_emoji_sound_available: eV && e,
        emoji_name: eV && e && (null == eW ? true : eW.id) == null ? null == eW ? true : eW.surrogates : true,
        sound_id: eV && e ? null == eK ? true : eK.soundId : true,
        duration_ms: t - eP.startTime,
        payment_source_type: null == e$ ? true : e$.type
      }));
      let {
        enabled: n
      } = b.w.getCurrentConfig({
        location: "PaymentModal emitPaymentFlowSuccess"
      }, {
        autoTrackExposure: false
      });
      eV && null != eH && null != a && n && (0, O.n)(a) && (0, y.Ni)(eH.id)
    }, [eQ, eW, eY, eH, eV, eK, eP.startTime, e$, a]),
    e2 = i.useMemo(() => () => null == B ? true : B(eb === L.A.COMPLETED, eO), [B, eb, eO]),
    e3 = (0, s.Z)(() => Date.now(), [eR]),
    e4 = i.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        {
          trackedFromStep: n,
          analyticsDataOverride: r,
          fulfillment: i,
          emitPaymentFlowLoadedEvent: a
        } = t,
        o = Date.now();
      if (e === x.h8.CONFIRM && (e1(), null == m || m(i), em)) return void e2();
      eA(e), null == eu || eu(e), eC(null), eS(null), e === x.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(_.pB));
      let s = null != n ? n : eR;
      if (null === s || a) return void N.default.track(F.rMx.PAYMENT_FLOW_LOADED, q(K({}, eQ), {
        initial_step: null != s ? s : e,
        continue_session_initial_step: eg,
        has_saved_payment_source: eL
      }));
      N.default.track(F.rMx.PAYMENT_FLOW_STEP, q(K({}, eQ, r), {
        from_step: s,
        to_step: e === x.h8.ADD_PAYMENT_STEPS ? x.h8.PAYMENT_TYPE : e,
        step_duration_ms: o - e3,
        flow_duration_ms: o - eP.startTime
      }))
    }, [eA, eu, eC, eS, eR, eg, eQ, e3, eP.startTime, e1, m, em, e2, eL]);
  (0, I.bp)(eR, eN, e4, ey), (0, x.dZ)(eR, eb, ey), (0, T.p)(eR, ew, e4), (0, E.Z)(e2), (0, S.w)(eD, () => B(false), eV), (0, I.D6)(eN);
  let e8 = {
      initialPlanId: k,
      subscriptionTier: j,
      handleStepChange: e4,
      handleClose: e2,
      analyticsData: eQ,
      setAnalyticsData: eJ,
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
      skipConfirm: em,
      continueSessionToInitialStep: eg
    },
    e5 = (0, G.U)({
      renderHeader: ea,
      referralTrialOfferId: el,
      handleClose: e2
    });
  return (0, r.jsx)(c.UkV, {
    className: Y.shaker,
    isShaking: ed && eb === L.A.PURCHASING,
    intensity: X,
    children: (0, r.jsx)(c.Y0X, {
      "data-migration-pending": true,
      className: o()(Y.root, eG, {
        [Y.withHeader]: null != e5
      }),
      transitionState: C,
      hideShadow: ep,
      returnRef: eh,
      size: ez,
      parentComponent: "PaymentModal",
      children: (0, r.jsx)(Z.ZP, K({
        header: e5,
        isLargeModal: ef || (null == eF ? true : eF.isLargeModal),
        isDynamicModal: e_ || (null == eF ? true : eF.isDynamicModal)
      }, e8))
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
  } = (0, w.wD)(), I = O.current, T = (0, j.Z)({
    isGift: v,
    skuId: E,
    referralTrialOfferId: o
  }), [S, A] = i.useState(true), N = (0, l.e7)([C.Z], () => C.Z.applicationIdsFetched.has(V.CL));
  return (i.useEffect(() => {
    A(!_ || !h || g)
  }, [g, h, _]), (0, p.Z)("Payment Modal", S, 5, {
    hasFetchedSubscriptions: _,
    hasFetchedSubscriptionPlans: h,
    currencyLoading: g
  }, {
    tags: {
      app_context: Q
    }
  }), i.useEffect(() => {
    if (N || (0, d.yD)(V.CL), S || f) return;
    let e = (0, k.Kp)({
      isTrial: T,
      isGift: v,
      selectedSkuId: E,
      startedPaymentFlowWithPaymentSources: I
    });
    null != c ? a(x.h8.ADD_PAYMENT_STEPS, {
      emitPaymentFlowLoadedEvent: true,
      trackedFromStep: c
    }) : null != n ? a(x.h8.REVIEW) : e ? (b((0, k.nA)(E, u, y)), a(x.h8.REVIEW)) : null != t ? a(x.h8.PLAN_SELECT) : a(x.h8.SKU_SELECT)
  }, [c, u, f, N, n, S, a, t, E, b, T, y, v, I]), S) ? (0, r.jsx)(B.Z, {}) : f ? (0, r.jsx)(m.Vq, {
    onClose: s
  }) : null
}
J.CURRENT_VERSION = "v1"
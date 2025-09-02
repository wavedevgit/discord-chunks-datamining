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
  Chunk27034 = require("./27034.jsx"),
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
    initialPlanId: M,
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
    setSelectedPlanId: eS,
    setSelectedPlanNotification: eT,
    setStep: eA,
    setPurchaseError: eC,
    paymentAuthenticationState: eN,
    step: eR,
    contextMetadata: eP,
    purchaseTokenAuthState: ew,
    activeSubscription: eD,
    priceOptions: ex,
    hasPaymentSources: eL,
    paymentSourceId: ej,
    paymentSources: eM,
    purchaseType: ek,
    defaultPlanId: eU,
    premiumBrandRefreshBackgroundClassName: eG
  } = (0, D.JL)(), eB = (0, j.Z)(), {
    isGift: eZ,
    giftRecipient: eF,
    customGiftMessage: eV,
    emojiConfetti: eH,
    soundEffect: eY
  } = (0, w.wD)(), eW = c.CgR.SMALL;
  ef || (null == eB ? true : eB.isLargeModal) ? eW = c.CgR.LARGE : (eR === x.h8.ADD_PAYMENT_STEPS || e_ || (null == eB ? true : eB.isDynamicModal)) && (eW = c.CgR.DYNAMIC);
  let eK = (0, v.Ng)(),
    ez = null != k && !eZ && (0, v.Wp)(eK, k),
    [eq, eX] = i.useState(K({
      load_id: eP.loadId,
      payment_type: F.Zuq[ek],
      location: null != a ? a : l,
      source: d,
      subscription_type: p,
      subscription_plan_id: null == eI ? true : eI.id,
      is_gift: eZ,
      eligible_for_trial: null != W,
      location_stack: n,
      sku_id: ec,
      application_id: eo,
      guild_id: es,
      payment_modal_version: J.CURRENT_VERSION,
      activity_session_id: eE,
      eligible_for_discount: ez
    }, t)),
    eQ = (0, U.m)(eM, ej);
  i.useEffect(() => {
    eX(e => {
      let n = null != eI ? (0, P.aS)(eI.id, false, eZ, ex) : true;
      return K(q(K({}, e), {
        subscription_plan_id: null == eI ? true : eI.id,
        price: null == n ? true : n.amount,
        regular_price: null == eI ? true : eI.price,
        currency: ex.currency,
        sku_id: eO
      }), t)
    })
  }, [eI, eO, eZ, ex, t]), (0, h.ZP)(() => {
    (0, g.U)(q(K({}, eq), {
      continue_session_initial_step: eg,
      has_saved_payment_source: eL
    }))
  }), i.useEffect(() => {
    if (null == eI && (null != eU && null != eg ? eS(eU) : eS(M)), null != ec) ev(ec);
    else if (null != M) {
      var e;
      ev(null == (e = A.Z.get(M)) ? true : e.skuId)
    }
  }, [eS, eI, ev, M, ec, eU, eg]);
  let eJ = i.useCallback(() => {
      let e = (0, R.MY)(eF) === R.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        t = Date.now();
      N.default.track(F.rMx.PAYMENT_FLOW_SUCCEEDED, q(K({}, eq), {
        is_custom_message_edited: eZ && e && null != eV ? eV !== H.intl.string(H.t.ZkOo1d) : true,
        is_custom_emoji_sound_available: eZ && e,
        emoji_name: eZ && e && (null == eH ? true : eH.id) == null ? null == eH ? true : eH.surrogates : true,
        sound_id: eZ && e ? null == eY ? true : eY.soundId : true,
        duration_ms: t - eP.startTime,
        payment_source_type: null == eQ ? true : eQ.type
      }));
      let {
        enabled: n
      } = b.w.getCurrentConfig({
        location: "PaymentModal emitPaymentFlowSuccess"
      }, {
        autoTrackExposure: false
      });
      eZ && null != eF && null != a && n && (0, O.n)(a) && (0, y.Ni)(eF.id)
    }, [eq, eH, eV, eF, eZ, eY, eP.startTime, eQ, a]),
    e$ = i.useMemo(() => () => null == B ? true : B(eb === L.A.COMPLETED, eO), [B, eb, eO]),
    e0 = (0, s.Z)(() => Date.now(), [eR]),
    e1 = i.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        {
          trackedFromStep: n,
          analyticsDataOverride: r,
          fulfillment: i,
          emitPaymentFlowLoadedEvent: a
        } = t,
        o = Date.now();
      if (e === x.h8.CONFIRM && (eJ(), null == m || m(i), em)) return void e$();
      eA(e), null == eu || eu(e), eC(null), eT(null), e === x.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(_.pB));
      let s = null != n ? n : eR;
      if (null === s || a) return void N.default.track(F.rMx.PAYMENT_FLOW_LOADED, q(K({}, eq), {
        initial_step: null != s ? s : e,
        continue_session_initial_step: eg,
        has_saved_payment_source: eL
      }));
      N.default.track(F.rMx.PAYMENT_FLOW_STEP, q(K({}, eq, r), {
        from_step: s,
        to_step: e === x.h8.ADD_PAYMENT_STEPS ? x.h8.PAYMENT_TYPE : e,
        step_duration_ms: o - e0,
        flow_duration_ms: o - eP.startTime
      }))
    }, [eA, eu, eC, eT, eR, eg, eq, e0, eP.startTime, eJ, m, em, e$, eL]);
  (0, I.bp)(eR, eN, e1, ey), (0, x.dZ)(eR, eb, ey), (0, S.p)(eR, ew, e1), (0, E.Z)(e$), (0, T.w)(eD, () => B(false), eZ), (0, I.D6)(eN);
  let e2 = {
      initialPlanId: M,
      subscriptionTier: k,
      handleStepChange: e1,
      handleClose: e$,
      analyticsData: eq,
      setAnalyticsData: eX,
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
    e3 = (0, G.U)({
      renderHeader: ea,
      referralTrialOfferId: el,
      handleClose: e$
    });
  return (0, r.jsx)(c.UkV, {
    className: Y.shaker,
    isShaking: ed && eb === L.A.PURCHASING,
    intensity: X,
    children: (0, r.jsx)(c.Y0X, {
      "data-migration-pending": true,
      className: o()(Y.root, eG, {
        [Y.withHeader]: null != e3
      }),
      transitionState: C,
      hideShadow: ep,
      returnRef: eh,
      size: eW,
      parentComponent: "PaymentModal",
      children: (0, r.jsx)(Z.ZP, K({
        header: e3,
        isLargeModal: ef || (null == eB ? true : eB.isLargeModal),
        isDynamicModal: e_ || (null == eB ? true : eB.isDynamicModal)
      }, e2))
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
    let e = (0, M.Kp)({
      isTrial: S,
      isGift: v,
      selectedSkuId: E,
      startedPaymentFlowWithPaymentSources: I
    });
    null != c ? a(x.h8.ADD_PAYMENT_STEPS, {
      emitPaymentFlowLoadedEvent: true,
      trackedFromStep: c
    }) : null != n ? a(x.h8.REVIEW) : e ? (b((0, M.nA)(E, u, y)), a(x.h8.REVIEW)) : null != t ? a(x.h8.PLAN_SELECT) : a(x.h8.SKU_SELECT)
  }, [c, u, f, N, n, T, a, t, E, b, S, y, v, I]), T) ? (0, r.jsx)(B.Z, {}) : f ? (0, r.jsx)(m.Vq, {
    onClose: s
  }) : null
}
J.CURRENT_VERSION = "v1"
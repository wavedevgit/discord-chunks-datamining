/** Chunk was on web.js **/
/** chunk id: 791785, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => et,
  PaymentModal: () => ee
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk35387 = require("./35387.js"),
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
  Chunk622909 = require("./622909.js"),
  Chunk230916 = require("./230916.js"),
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
  Chunk545006 = require("./545006.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk876414 = require("./876414.js");

function z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      z(e, t, n[t])
    })
  }
  return e
}

function Q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function X(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let J = 2,
  $ = "billing";

function ee(e) {
  let {
    analyticsDataOverride: t,
    analyticsLocations: n,
    analyticsLocation: o,
    analyticsObject: l,
    analyticsSourceLocation: d,
    analyticsSubscriptionType: _ = H.NYc.PREMIUM,
    onComplete: h,
    transitionState: N,
    initialPlanId: k,
    subscriptionTier: U,
    onClose: F,
    trialId: z,
    trialFooterMessageOverride: Q,
    reviewWarningMessage: $,
    planGroup: ee = Y.Y1,
    openInvoiceId: et,
    onSubscriptionConfirmation: en,
    renderPurchaseConfirmation: er,
    postSuccessGuild: ei,
    followupSKUInfo: eo,
    renderHeader: ea,
    applicationId: es,
    guildId: el,
    referralTrialOfferId: ec,
    skuId: eu,
    onStepChange: ed,
    shakeWhilePurchasing: ef = false,
    isLargeModal: ep = false,
    isMediumModal: e_ = false,
    isDynamicModal: em = false,
    hideShadow: eh = false,
    returnRef: eg,
    skipConfirm: eE = false,
    continueSessionToInitialStep: eb,
    paymentModalVersion: ey = V.g
  } = e, {
    activitySessionId: eO,
    purchaseState: ev,
    setPurchaseState: eS,
    selectedSkuId: eI,
    setSelectedSkuId: eT,
    selectedPlan: eC,
    setSelectedPlanId: eA,
    setSelectedPlanNotification: eN,
    setStep: eP,
    setPurchaseError: eR,
    paymentAuthenticationState: ew,
    step: eD,
    selectedSku: ex,
    contextMetadata: eL,
    purchaseTokenAuthState: ej,
    activeSubscription: eM,
    priceOptions: ek,
    hasPaymentSources: eU,
    paymentSourceId: eG,
    paymentSources: eZ,
    purchaseType: eF,
    defaultPlanId: eB,
    premiumBrandRefreshBackgroundClassName: eV,
    customCheckoutFlow: eH,
    invoicePreview: eY
  } = (0, x.JL)(), eW = (0, M.Z)(), {
    isGift: eK,
    giftRecipient: ez,
    customGiftMessage: eq,
    emojiConfetti: eQ,
    soundEffect: eX
  } = (0, D.wD)(), eJ = c.CgR.SMALL;
  ep || (null == eW ? true : eW.isLargeModal) ? eJ = c.CgR.LARGE : e_ || (null == eW ? true : eW.isMediumModal) ? eJ = c.CgR.MEDIUM : (eD === L.h8.ADD_PAYMENT_STEPS || em || (null == eW ? true : eW.isDynamicModal)) && (eJ = c.CgR.DYNAMIC);
  let e$ = (0, v.N)(),
    e0 = null != U && !eK && (0, S.Wp)(e$, U),
    [e1, e3] = i.useState(q({
      load_id: eL.loadId,
      payment_type: H.Zuq[eF],
      location: null != o ? o : l,
      source: d,
      subscription_type: _,
      subscription_plan_id: null == eC ? true : eC.id,
      is_gift: eK,
      eligible_for_trial: null != z,
      location_stack: n,
      sku_id: eu,
      application_id: es,
      guild_id: el,
      payment_modal_version: ey,
      activity_session_id: eO,
      eligible_for_discount: e0,
      sku_product_line: null == ex ? true : ex.productLine
    }, t)),
    e2 = (0, G.m)(eZ, eG),
    e4 = null != eY ? eY.getDiscountIdIfExists() : true;
  i.useEffect(() => {
    e3(e => {
      let n = null != eC ? (0, w.aS)(eC.id, false, eK, ek) : true;
      return q(X(q({}, e), {
        subscription_plan_id: null == eC ? true : eC.id,
        price: null == n ? true : n.amount,
        regular_price: null == eC ? true : eC.price,
        currency: ek.currency,
        sku_id: eI,
        sku_product_line: null == ex ? true : ex.productLine
      }), t)
    })
  }, [eC, eI, eK, ek, t, null == ex ? true : ex.productLine]), (0, m.ZP)(() => {
    (0, g.U)(X(q({}, e1), {
      continue_session_initial_step: eb,
      custom_checkout_flow: eH,
      has_saved_payment_source: eU,
      discount_id: null != e$ ? e$.discount_id : e4
    }))
  }), i.useEffect(() => {
    if (null == eC && (null != eB && null != eb ? eA(eB) : eA(k)), null != eu) eT(eu);
    else if (null != k) {
      var e;
      eT(null == (e = A.Z.get(k)) ? true : e.skuId)
    }
  }, [eA, eC, eT, k, eu, eB, eb]);
  let e5 = i.useCallback(() => {
      let e = (0, R.MY)(ez) === R.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        t = Date.now();
      P.default.track(H.rMx.PAYMENT_FLOW_SUCCEEDED, X(q({}, e1), {
        is_custom_message_edited: eK && e && null != eq ? eq !== W.intl.string(W.t.ZkOo1U) : true,
        is_custom_emoji_sound_available: eK && e,
        emoji_name: eK && e && (null == eQ ? true : eQ.id) == null ? null == eQ ? true : eQ.surrogates : true,
        sound_id: eK && e ? null == eX ? true : eX.soundId : true,
        duration_ms: t - eL.startTime,
        payment_source_type: null == e2 ? true : e2.type
      }));
      let {
        enabled: n
      } = b.w.getConfig({
        location: "PaymentModal emitPaymentFlowSuccess"
      });
      eK && null != ez && null != o && n && (0, O.n)(o) && (0, y.Ni)(ez.id)
    }, [e1, eQ, eq, ez, eK, eX, eL.startTime, e2, o]),
    e8 = i.useMemo(() => () => null == F ? true : F(ev === j.A.COMPLETED, eI), [F, ev, eI]),
    e6 = (0, s.Z)(() => Date.now(), [eD]),
    e7 = i.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        {
          trackedFromStep: n,
          analyticsDataOverride: r,
          fulfillment: i,
          emitPaymentFlowLoadedEvent: o
        } = t,
        a = Date.now();
      if (e === L.h8.CONFIRM && (e5(), null == h || h(i), eE)) return void e8();
      eP(e), null == ed || ed(e), eR(null), eN(null), e === L.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(p.pB));
      let s = null != n ? n : eD;
      if (null === s || o) return void P.default.track(H.rMx.PAYMENT_FLOW_LOADED, X(q({}, e1), {
        initial_step: null != s ? s : e,
        continue_session_initial_step: eb,
        has_saved_payment_source: eU
      }));
      P.default.track(H.rMx.PAYMENT_FLOW_STEP, X(q({}, e1, r), {
        from_step: s,
        to_step: e === L.h8.ADD_PAYMENT_STEPS ? L.h8.PAYMENT_TYPE : e,
        step_duration_ms: a - e6,
        flow_duration_ms: a - eL.startTime
      }))
    }, [eP, ed, eR, eN, eD, eb, e1, e6, eL.startTime, e5, h, eE, e8, eU]);
  (0, I.bp)(eD, ew, e7, eS), (0, L.dZ)(eD, ev, eS), (0, T.p)(eD, ej, e7), (0, E.Z)(e8), (0, C.w)(eM, () => F(false), eK), (0, I.D6)(ew);
  let e9 = {
      initialPlanId: k,
      subscriptionTier: U,
      handleStepChange: e7,
      handleClose: e8,
      analyticsData: e1,
      setAnalyticsData: e3,
      trialId: z,
      trialFooterMessageOverride: Q,
      reviewWarningMessage: $,
      planGroup: ee,
      openInvoiceId: et,
      analyticsLocation: o,
      onSubscriptionConfirmation: en,
      renderPurchaseConfirmation: er,
      postSuccessGuild: ei,
      followupSKUInfo: eo,
      referralTrialOfferId: ec,
      skipConfirm: eE,
      continueSessionToInitialStep: eb
    },
    te = (0, Z.U)({
      renderHeader: ea,
      referralTrialOfferId: ec,
      handleClose: e8
    });
  return (0, r.jsx)(c.UkV, {
    className: K.shaker,
    isShaking: ef && ev === j.A.PURCHASING,
    intensity: J,
    children: (0, r.jsx)(c.Y0X, {
      "data-migration-pending": true,
      className: a()(K.root, eV, {
        [K.withHeader]: null != te
      }),
      transitionState: N,
      hideShadow: eh,
      returnRef: eg,
      size: eJ,
      parentComponent: "PaymentModal",
      children: (0, r.jsx)(B.ZP, q({
        header: te,
        isLargeModal: ep || (null == eW ? true : eW.isLargeModal),
        isDynamicModal: em || (null == eW ? true : eW.isDynamicModal)
      }, e9))
    })
  })
}

function et(e) {
  let {
    subscriptionTier: t,
    initialPlanId: n,
    handleStepChange: o,
    referralTrialOfferId: a,
    handleClose: s,
    continueSessionToInitialStep: c
  } = e, {
    activeSubscription: u,
    blockedPayments: f,
    hasFetchedSubscriptions: p,
    hasFetchedSubscriptionPlans: m,
    currencyLoading: g,
    selectedSkuId: E,
    setSelectedPlanId: b,
    defaultPlanId: y,
    startedPaymentFlowWithPaymentSourcesRef: O,
    hasPaymentSources: v
  } = (0, x.JL)(), {
    isGift: S
  } = (0, D.wD)(), I = O.current, T = (0, U.Z)({
    isGift: S,
    skuId: E,
    referralTrialOfferId: a
  }), [C, A] = i.useState(true), P = (0, l.e7)([N.Z], () => N.Z.applicationIdsFetched.has(Y.CL));
  return (i.useEffect(() => {
    A(!p || !m || g)
  }, [g, m, p]), (0, _.Z)("Payment Modal", C, 5, {
    hasFetchedSubscriptions: p,
    hasFetchedSubscriptionPlans: m,
    currencyLoading: g
  }, {
    tags: {
      app_context: $
    }
  }), i.useEffect(() => {
    if (P || (0, d.yD)(Y.CL), C || f) return;
    let e = (0, k.Kp)({
      isTrial: T,
      isGift: S,
      selectedSkuId: E,
      startedPaymentFlowWithPaymentSources: I
    });
    null != c ? o(L.h8.ADD_PAYMENT_STEPS, {
      emitPaymentFlowLoadedEvent: true,
      trackedFromStep: c
    }) : null != n ? n !== Y.Xh.PREMIUM_GROUP_MONTH || v ? o(L.h8.REVIEW) : o(L.h8.ADD_PAYMENT_STEPS) : e ? (b((0, k.nA)(E, u, y)), o(L.h8.REVIEW)) : null != t ? o(L.h8.PLAN_SELECT) : o(L.h8.SKU_SELECT)
  }, [c, u, f, P, n, C, o, t, E, b, T, y, S, I, v]), C) ? (0, r.jsx)(F.Z, {}) : f ? (0, r.jsx)(h.Vq, {
    onClose: s
  }) : null
}
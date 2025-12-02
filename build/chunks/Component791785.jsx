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
  o = require.n(Chunk120356),
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

function X(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : X(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let J = 2,
  $ = "billing";

function ee(e) {
  let {
    analyticsDataOverride: t,
    analyticsLocations: n,
    analyticsLocation: a,
    analyticsObject: l,
    analyticsSourceLocation: d,
    analyticsSubscriptionType: _ = H.NYc.PREMIUM,
    onComplete: h,
    transitionState: N,
    initialPlanId: k,
    subscriptionTier: U,
    onClose: B,
    trialId: z,
    trialFooterMessageOverride: X,
    reviewWarningMessage: $,
    planGroup: ee = Y.Y1,
    openInvoiceId: et,
    onSubscriptionConfirmation: en,
    renderPurchaseConfirmation: er,
    postSuccessGuild: ei,
    followupSKUInfo: ea,
    renderHeader: eo,
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
    continueSessionToInitialStep: eb
  } = e, {
    activitySessionId: ey,
    purchaseState: eO,
    setPurchaseState: ev,
    selectedSkuId: eS,
    setSelectedSkuId: eI,
    selectedPlan: eT,
    setSelectedPlanId: eA,
    setSelectedPlanNotification: eC,
    setStep: eN,
    setPurchaseError: eP,
    paymentAuthenticationState: eR,
    step: ew,
    selectedSku: eD,
    contextMetadata: ex,
    purchaseTokenAuthState: eL,
    activeSubscription: ej,
    priceOptions: eM,
    hasPaymentSources: ek,
    paymentSourceId: eU,
    paymentSources: eG,
    purchaseType: eZ,
    defaultPlanId: eB,
    premiumBrandRefreshBackgroundClassName: eF,
    customCheckoutFlow: eV,
    invoicePreview: eH
  } = (0, x.JL)(), eY = (0, M.Z)(), {
    isGift: eW,
    giftRecipient: eK,
    customGiftMessage: ez,
    emojiConfetti: eq,
    soundEffect: eX
  } = (0, D.wD)(), eQ = c.CgR.SMALL;
  ep || (null == eY ? true : eY.isLargeModal) ? eQ = c.CgR.LARGE : e_ || (null == eY ? true : eY.isMediumModal) ? eQ = c.CgR.MEDIUM : (ew === L.h8.ADD_PAYMENT_STEPS || em || (null == eY ? true : eY.isDynamicModal)) && (eQ = c.CgR.DYNAMIC);
  let eJ = (0, v.N)(),
    e$ = null != U && !eW && (0, S.Wp)(eJ, U),
    [e0, e1] = i.useState(q({
      load_id: ex.loadId,
      payment_type: H.Zuq[eZ],
      location: null != a ? a : l,
      source: d,
      subscription_type: _,
      subscription_plan_id: null == eT ? true : eT.id,
      is_gift: eW,
      eligible_for_trial: null != z,
      location_stack: n,
      sku_id: eu,
      application_id: es,
      guild_id: el,
      payment_modal_version: V.g,
      activity_session_id: ey,
      eligible_for_discount: e$,
      sku_product_line: null == eD ? true : eD.productLine
    }, t)),
    e3 = (0, G.m)(eG, eU),
    e2 = null != eH ? eH.getDiscountIdIfExists() : true;
  i.useEffect(() => {
    e1(e => {
      let n = null != eT ? (0, w.aS)(eT.id, false, eW, eM) : true;
      return q(Q(q({}, e), {
        subscription_plan_id: null == eT ? true : eT.id,
        price: null == n ? true : n.amount,
        regular_price: null == eT ? true : eT.price,
        currency: eM.currency,
        sku_id: eS,
        sku_product_line: null == eD ? true : eD.productLine
      }), t)
    })
  }, [eT, eS, eW, eM, t, null == eD ? true : eD.productLine]), (0, m.ZP)(() => {
    (0, g.U)(Q(q({}, e0), {
      continue_session_initial_step: eb,
      custom_checkout_flow: eV,
      has_saved_payment_source: ek,
      discount_id: null != eJ ? eJ.discount_id : e2
    }))
  }), i.useEffect(() => {
    if (null == eT && (null != eB && null != eb ? eA(eB) : eA(k)), null != eu) eI(eu);
    else if (null != k) {
      var e;
      eI(null == (e = C.Z.get(k)) ? true : e.skuId)
    }
  }, [eA, eT, eI, k, eu, eB, eb]);
  let e4 = i.useCallback(() => {
      let e = (0, R.MY)(eK) === R.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        t = Date.now();
      P.default.track(H.rMx.PAYMENT_FLOW_SUCCEEDED, Q(q({}, e0), {
        is_custom_message_edited: eW && e && null != ez ? ez !== W.intl.string(W.t.ZkOo1U) : true,
        is_custom_emoji_sound_available: eW && e,
        emoji_name: eW && e && (null == eq ? true : eq.id) == null ? null == eq ? true : eq.surrogates : true,
        sound_id: eW && e ? null == eX ? true : eX.soundId : true,
        duration_ms: t - ex.startTime,
        payment_source_type: null == e3 ? true : e3.type
      }));
      let {
        enabled: n
      } = b.w.getConfig({
        location: "PaymentModal emitPaymentFlowSuccess"
      });
      eW && null != eK && null != a && n && (0, O.n)(a) && (0, y.Ni)(eK.id)
    }, [e0, eq, ez, eK, eW, eX, ex.startTime, e3, a]),
    e5 = i.useMemo(() => () => null == B ? true : B(eO === j.A.COMPLETED, eS), [B, eO, eS]),
    e8 = (0, s.Z)(() => Date.now(), [ew]),
    e6 = i.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        {
          trackedFromStep: n,
          analyticsDataOverride: r,
          fulfillment: i,
          emitPaymentFlowLoadedEvent: a
        } = t,
        o = Date.now();
      if (e === L.h8.CONFIRM && (e4(), null == h || h(i), eE)) return void e5();
      eN(e), null == ed || ed(e), eP(null), eC(null), e === L.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(p.pB));
      let s = null != n ? n : ew;
      if (null === s || a) return void P.default.track(H.rMx.PAYMENT_FLOW_LOADED, Q(q({}, e0), {
        initial_step: null != s ? s : e,
        continue_session_initial_step: eb,
        has_saved_payment_source: ek
      }));
      P.default.track(H.rMx.PAYMENT_FLOW_STEP, Q(q({}, e0, r), {
        from_step: s,
        to_step: e === L.h8.ADD_PAYMENT_STEPS ? L.h8.PAYMENT_TYPE : e,
        step_duration_ms: o - e8,
        flow_duration_ms: o - ex.startTime
      }))
    }, [eN, ed, eP, eC, ew, eb, e0, e8, ex.startTime, e4, h, eE, e5, ek]);
  (0, I.bp)(ew, eR, e6, ev), (0, L.dZ)(ew, eO, ev), (0, T.p)(ew, eL, e6), (0, E.Z)(e5), (0, A.w)(ej, () => B(false), eW), (0, I.D6)(eR);
  let e7 = {
      initialPlanId: k,
      subscriptionTier: U,
      handleStepChange: e6,
      handleClose: e5,
      analyticsData: e0,
      setAnalyticsData: e1,
      trialId: z,
      trialFooterMessageOverride: X,
      reviewWarningMessage: $,
      planGroup: ee,
      openInvoiceId: et,
      analyticsLocation: a,
      onSubscriptionConfirmation: en,
      renderPurchaseConfirmation: er,
      postSuccessGuild: ei,
      followupSKUInfo: ea,
      referralTrialOfferId: ec,
      skipConfirm: eE,
      continueSessionToInitialStep: eb
    },
    e9 = (0, Z.U)({
      renderHeader: eo,
      referralTrialOfferId: ec,
      handleClose: e5
    });
  return (0, r.jsx)(c.UkV, {
    className: K.shaker,
    isShaking: ef && eO === j.A.PURCHASING,
    intensity: J,
    children: (0, r.jsx)(c.Y0X, {
      "data-migration-pending": true,
      className: o()(K.root, eF, {
        [K.withHeader]: null != e9
      }),
      transitionState: N,
      hideShadow: eh,
      returnRef: eg,
      size: eQ,
      parentComponent: "PaymentModal",
      children: (0, r.jsx)(F.ZP, q({
        header: e9,
        isLargeModal: ep || (null == eY ? true : eY.isLargeModal),
        isDynamicModal: em || (null == eY ? true : eY.isDynamicModal)
      }, e7))
    })
  })
}

function et(e) {
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
    hasFetchedSubscriptions: p,
    hasFetchedSubscriptionPlans: m,
    currencyLoading: g,
    selectedSkuId: E,
    setSelectedPlanId: b,
    defaultPlanId: y,
    startedPaymentFlowWithPaymentSourcesRef: O
  } = (0, x.JL)(), {
    isGift: v
  } = (0, D.wD)(), S = O.current, I = (0, U.Z)({
    isGift: v,
    skuId: E,
    referralTrialOfferId: o
  }), [T, A] = i.useState(true), C = (0, l.e7)([N.Z], () => N.Z.applicationIdsFetched.has(Y.CL));
  return (i.useEffect(() => {
    A(!p || !m || g)
  }, [g, m, p]), (0, _.Z)("Payment Modal", T, 5, {
    hasFetchedSubscriptions: p,
    hasFetchedSubscriptionPlans: m,
    currencyLoading: g
  }, {
    tags: {
      app_context: $
    }
  }), i.useEffect(() => {
    if (C || (0, d.yD)(Y.CL), T || f) return;
    let e = (0, k.Kp)({
      isTrial: I,
      isGift: v,
      selectedSkuId: E,
      startedPaymentFlowWithPaymentSources: S
    });
    null != c ? a(L.h8.ADD_PAYMENT_STEPS, {
      emitPaymentFlowLoadedEvent: true,
      trackedFromStep: c
    }) : null != n ? a(L.h8.REVIEW) : e ? (b((0, k.nA)(E, u, y)), a(L.h8.REVIEW)) : null != t ? a(L.h8.PLAN_SELECT) : a(L.h8.SKU_SELECT)
  }, [c, u, f, C, n, T, a, t, E, b, I, y, v, S]), T) ? (0, r.jsx)(B.Z, {}) : f ? (0, r.jsx)(h.Vq, {
    onClose: s
  }) : null
}
ee.CURRENT_VERSION = Chunk545006.g
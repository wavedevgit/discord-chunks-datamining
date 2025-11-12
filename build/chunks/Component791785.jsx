/** Chunk was on web.js **/
/** chunk id: 791785, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => ee,
  PaymentModal: () => $
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
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk876414 = require("./876414.js");

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      K(e, t, n[t])
    })
  }
  return e
}

function q(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Q = 2,
  J = "billing";

function $(e) {
  let {
    analyticsDataOverride: t,
    analyticsLocations: n,
    analyticsLocation: a,
    analyticsObject: l,
    analyticsSourceLocation: d,
    analyticsSubscriptionType: p = V.NYc.PREMIUM,
    onComplete: m,
    transitionState: N,
    initialPlanId: k,
    subscriptionTier: U,
    onClose: Z,
    trialId: K,
    trialFooterMessageOverride: q,
    reviewWarningMessage: J,
    planGroup: ee = H.Y1,
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
    isLargeModal: e_ = false,
    isMediumModal: ep = false,
    isDynamicModal: eh = false,
    hideShadow: em = false,
    returnRef: eg,
    skipConfirm: eE = false,
    continueSessionToInitialStep: eb
  } = e, {
    activitySessionId: ey,
    purchaseState: eO,
    setPurchaseState: ev,
    selectedSkuId: eI,
    setSelectedSkuId: eS,
    selectedPlan: eT,
    setSelectedPlanId: eA,
    setSelectedPlanNotification: eC,
    setStep: eN,
    setPurchaseError: eR,
    paymentAuthenticationState: eP,
    step: ew,
    contextMetadata: eD,
    purchaseTokenAuthState: ex,
    activeSubscription: eL,
    priceOptions: eM,
    hasPaymentSources: ej,
    paymentSourceId: ek,
    paymentSources: eU,
    purchaseType: eG,
    defaultPlanId: eB,
    premiumBrandRefreshBackgroundClassName: eZ,
    customCheckoutFlow: eF,
    invoicePreview: eV
  } = (0, x.JL)(), eH = (0, j.Z)(), {
    isGift: eY,
    giftRecipient: eW,
    customGiftMessage: eK,
    emojiConfetti: ez,
    soundEffect: eq
  } = (0, D.wD)(), eX = c.CgR.SMALL;
  e_ || (null == eH ? true : eH.isLargeModal) ? eX = c.CgR.LARGE : ep || (null == eH ? true : eH.isMediumModal) ? eX = c.CgR.MEDIUM : (ew === L.h8.ADD_PAYMENT_STEPS || eh || (null == eH ? true : eH.isDynamicModal)) && (eX = c.CgR.DYNAMIC);
  let eQ = (0, v.N)(),
    eJ = null != U && !eY && (0, I.Wp)(eQ, U),
    [e$, e0] = i.useState(z({
      load_id: eD.loadId,
      payment_type: V.Zuq[eG],
      location: null != a ? a : l,
      source: d,
      subscription_type: p,
      subscription_plan_id: null == eT ? true : eT.id,
      is_gift: eY,
      eligible_for_trial: null != K,
      location_stack: n,
      sku_id: eu,
      application_id: es,
      guild_id: el,
      payment_modal_version: $.CURRENT_VERSION,
      activity_session_id: ey,
      eligible_for_discount: eJ
    }, t)),
    e1 = (0, G.m)(eU, ek),
    e3 = null != eV ? eV.getDiscountIdIfExists() : true;
  i.useEffect(() => {
    e0(e => {
      let n = null != eT ? (0, w.aS)(eT.id, false, eY, eM) : true;
      return z(X(z({}, e), {
        subscription_plan_id: null == eT ? true : eT.id,
        price: null == n ? true : n.amount,
        regular_price: null == eT ? true : eT.price,
        currency: eM.currency,
        sku_id: eI
      }), t)
    })
  }, [eT, eI, eY, eM, t]), (0, h.ZP)(() => {
    (0, g.U)(X(z({}, e$), {
      continue_session_initial_step: eb,
      custom_checkout_flow: eF,
      has_saved_payment_source: ej,
      discount_id: null != eQ ? eQ.discount_id : e3
    }))
  }), i.useEffect(() => {
    if (null == eT && (null != eB && null != eb ? eA(eB) : eA(k)), null != eu) eS(eu);
    else if (null != k) {
      var e;
      eS(null == (e = C.Z.get(k)) ? true : e.skuId)
    }
  }, [eA, eT, eS, k, eu, eB, eb]);
  let e2 = i.useCallback(() => {
      let e = (0, P.MY)(eW) === P.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        t = Date.now();
      R.default.track(V.rMx.PAYMENT_FLOW_SUCCEEDED, X(z({}, e$), {
        is_custom_message_edited: eY && e && null != eK ? eK !== Y.intl.string(Y.t.ZkOo1U) : true,
        is_custom_emoji_sound_available: eY && e,
        emoji_name: eY && e && (null == ez ? true : ez.id) == null ? null == ez ? true : ez.surrogates : true,
        sound_id: eY && e ? null == eq ? true : eq.soundId : true,
        duration_ms: t - eD.startTime,
        payment_source_type: null == e1 ? true : e1.type
      }));
      let {
        enabled: n
      } = b.w.getCurrentConfig({
        location: "PaymentModal emitPaymentFlowSuccess"
      }, {
        autoTrackExposure: false
      });
      eY && null != eW && null != a && n && (0, O.n)(a) && (0, y.Ni)(eW.id)
    }, [e$, ez, eK, eW, eY, eq, eD.startTime, e1, a]),
    e4 = i.useMemo(() => () => null == Z ? true : Z(eO === M.A.COMPLETED, eI), [Z, eO, eI]),
    e8 = (0, s.Z)(() => Date.now(), [ew]),
    e5 = i.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        {
          trackedFromStep: n,
          analyticsDataOverride: r,
          fulfillment: i,
          emitPaymentFlowLoadedEvent: a
        } = t,
        o = Date.now();
      if (e === L.h8.CONFIRM && (e2(), null == m || m(i), eE)) return void e4();
      eN(e), null == ed || ed(e), eR(null), eC(null), e === L.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(_.pB));
      let s = null != n ? n : ew;
      if (null === s || a) return void R.default.track(V.rMx.PAYMENT_FLOW_LOADED, X(z({}, e$), {
        initial_step: null != s ? s : e,
        continue_session_initial_step: eb,
        has_saved_payment_source: ej
      }));
      R.default.track(V.rMx.PAYMENT_FLOW_STEP, X(z({}, e$, r), {
        from_step: s,
        to_step: e === L.h8.ADD_PAYMENT_STEPS ? L.h8.PAYMENT_TYPE : e,
        step_duration_ms: o - e8,
        flow_duration_ms: o - eD.startTime
      }))
    }, [eN, ed, eR, eC, ew, eb, e$, e8, eD.startTime, e2, m, eE, e4, ej]);
  (0, S.bp)(ew, eP, e5, ev), (0, L.dZ)(ew, eO, ev), (0, T.p)(ew, ex, e5), (0, E.Z)(e4), (0, A.w)(eL, () => Z(false), eY), (0, S.D6)(eP);
  let e6 = {
      initialPlanId: k,
      subscriptionTier: U,
      handleStepChange: e5,
      handleClose: e4,
      analyticsData: e$,
      setAnalyticsData: e0,
      trialId: K,
      trialFooterMessageOverride: q,
      reviewWarningMessage: J,
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
    e7 = (0, B.U)({
      renderHeader: eo,
      referralTrialOfferId: ec,
      handleClose: e4
    });
  return (0, r.jsx)(c.UkV, {
    className: W.shaker,
    isShaking: ef && eO === M.A.PURCHASING,
    intensity: Q,
    children: (0, r.jsx)(c.Y0X, {
      "data-migration-pending": true,
      className: o()(W.root, eZ, {
        [W.withHeader]: null != e7
      }),
      transitionState: N,
      hideShadow: em,
      returnRef: eg,
      size: eX,
      parentComponent: "PaymentModal",
      children: (0, r.jsx)(F.ZP, z({
        header: e7,
        isLargeModal: e_ || (null == eH ? true : eH.isLargeModal),
        isDynamicModal: eh || (null == eH ? true : eH.isDynamicModal)
      }, e6))
    })
  })
}

function ee(e) {
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
  } = (0, x.JL)(), {
    isGift: v
  } = (0, D.wD)(), I = O.current, S = (0, U.Z)({
    isGift: v,
    skuId: E,
    referralTrialOfferId: o
  }), [T, A] = i.useState(true), C = (0, l.e7)([N.Z], () => N.Z.applicationIdsFetched.has(H.CL));
  return (i.useEffect(() => {
    A(!_ || !h || g)
  }, [g, h, _]), (0, p.Z)("Payment Modal", T, 5, {
    hasFetchedSubscriptions: _,
    hasFetchedSubscriptionPlans: h,
    currencyLoading: g
  }, {
    tags: {
      app_context: J
    }
  }), i.useEffect(() => {
    if (C || (0, d.yD)(H.CL), T || f) return;
    let e = (0, k.Kp)({
      isTrial: S,
      isGift: v,
      selectedSkuId: E,
      startedPaymentFlowWithPaymentSources: I
    });
    null != c ? a(L.h8.ADD_PAYMENT_STEPS, {
      emitPaymentFlowLoadedEvent: true,
      trackedFromStep: c
    }) : null != n ? a(L.h8.REVIEW) : e ? (b((0, k.nA)(E, u, y)), a(L.h8.REVIEW)) : null != t ? a(L.h8.PLAN_SELECT) : a(L.h8.SKU_SELECT)
  }, [c, u, f, C, n, T, a, t, E, b, S, y, v, I]), T) ? (0, r.jsx)(Z.Z, {}) : f ? (0, r.jsx)(m.Vq, {
    onClose: s
  }) : null
}
$.CURRENT_VERSION = "v1"
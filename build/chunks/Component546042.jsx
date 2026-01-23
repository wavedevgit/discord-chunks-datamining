/** Chunk was on web.js **/
/** chunk id: 546042, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => ee,
  PaymentModal: () => $
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk330140 = require("./330140.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk339048 = require("./339048.js"),
  Chunk158032 = require("./158032.js"),
  Chunk830382 = require("./830382.js"),
  Chunk428644 = require("./428644.js"),
  Chunk964486 = require("./964486.js"),
  Chunk459793 = require("./459793.jsx"),
  Chunk357669 = require("./357669.js"),
  Chunk319437 = require("./319437.js"),
  Chunk70730 = require("./70730.js"),
  Chunk45787 = require("./45787.js"),
  Chunk51501 = require("./51501.js"),
  Chunk422936 = require("./422936.js"),
  Chunk511484 = require("./511484.js"),
  Chunk251913 = require("./251913.js"),
  Chunk869573 = require("./869573.js"),
  Chunk344159 = require("./344159.js"),
  Chunk97352 = require("./97352.js"),
  Chunk469778 = require("./469778.js"),
  Chunk954571 = require("./954571.js"),
  Chunk45938 = require("./45938.js"),
  Chunk927578 = require("./927578.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk566980 = require("./566980.js"),
  Chunk379174 = require("./379174.js"),
  Chunk800471 = require("./800471.js"),
  Chunk169801 = require("./169801.js"),
  Chunk216641 = require("./216641.js"),
  Chunk462309 = require("./462309.jsx"),
  Chunk534479 = require("./534479.jsx"),
  Chunk482132 = require("./482132.jsx");
require("./322076.js");
var Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk898772 = require("./898772.js");

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

function Z(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
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
    analyticsSubscriptionType: _ = H.rzx.PREMIUM,
    onComplete: m,
    transitionState: N,
    initialPlanId: k,
    subscriptionTier: U,
    onClose: F,
    trialId: z,
    trialFooterMessageOverride: Z,
    reviewWarningMessage: J,
    planGroup: $ = Y.LE,
    openInvoiceId: ee,
    onSubscriptionConfirmation: et,
    renderPurchaseConfirmation: en,
    postSuccessGuild: er,
    followupSKUInfo: ei,
    renderHeader: ea,
    applicationId: es,
    guildId: eo,
    referralTrialOfferId: el,
    skuId: ec,
    onStepChange: eu,
    shakeWhilePurchasing: ed = false,
    isLargeModal: ef = false,
    isMediumModal: ep = false,
    isDynamicModal: e_ = false,
    hideShadow: eh = false,
    returnRef: em,
    skipConfirm: eg = false,
    continueSessionToInitialStep: eE,
    paymentModalVersion: ey = "v1"
  } = e, {
    activitySessionId: eb,
    purchaseState: eO,
    setPurchaseState: ev,
    selectedSkuId: eA,
    setSelectedSkuId: eI,
    selectedPlan: eS,
    setSelectedPlanId: eT,
    setSelectedPlanNotification: eC,
    setStep: eN,
    setPurchaseError: ew,
    paymentAuthenticationState: eR,
    step: eP,
    selectedSku: eD,
    contextMetadata: ex,
    purchaseTokenAuthState: eL,
    activeSubscription: ej,
    priceOptions: eM,
    hasPaymentSources: ek,
    paymentSourceId: eU,
    paymentSources: eG,
    purchaseType: eV,
    defaultPlanId: eF,
    premiumBrandRefreshBackgroundClassName: eB,
    customCheckoutFlow: eH,
    invoicePreview: eY
  } = (0, x.P5)(), eW = (0, M.A)(), {
    isGift: eK,
    giftRecipient: ez,
    customGiftMessage: eq,
    emojiConfetti: eZ,
    soundEffect: eX
  } = (0, D.Pv)(), eQ = c.rIJ.SMALL;
  ef || (null == eW ? true : eW.isLargeModal) ? eQ = c.rIJ.LARGE : ep || (null == eW ? true : eW.isMediumModal) ? eQ = c.rIJ.MEDIUM : (eP === L.pn.ADD_PAYMENT_STEPS || e_ || (null == eW ? true : eW.isDynamicModal)) && (eQ = c.rIJ.DYNAMIC);
  let eJ = (0, v.O)(),
    e$ = null != U && !eK && (0, A.U9)(eJ, U),
    [e0, e1] = i.useState(q({
      load_id: ex.loadId,
      payment_type: H.frM[eV],
      location: null != a ? a : l,
      source: d,
      subscription_type: _,
      subscription_plan_id: null == eS ? true : eS.id,
      is_gift: eK,
      eligible_for_trial: null != z,
      location_stack: n,
      sku_id: ec,
      application_id: es,
      guild_id: eo,
      payment_modal_version: ey,
      activity_session_id: eb,
      eligible_for_discount: e$,
      sku_product_line: null == eD ? true : eD.productLine
    }, t)),
    e2 = (0, G.W)(eG, eU),
    e3 = null != eY ? eY.getDiscountIdIfExists() : true;
  i.useEffect(() => {
    e1(e => {
      let n = null != eS ? (0, P.y8)(eS.id, false, eK, eM) : true;
      return q(X(q({}, e), {
        subscription_plan_id: null == eS ? true : eS.id,
        price: null == n ? true : n.amount,
        regular_price: null == eS ? true : eS.price,
        currency: eM.currency,
        sku_id: eA,
        sku_product_line: null == eD ? true : eD.productLine
      }), t)
    })
  }, [eS, eA, eK, eM, t, null == eD ? true : eD.productLine]), (0, h.Ay)(() => {
    (0, g.b)(X(q({}, e0), {
      continue_session_initial_step: eE,
      custom_checkout_flow: eH,
      has_saved_payment_source: ek,
      discount_id: null != eJ ? eJ.discount_id : e3
    }))
  }), i.useEffect(() => {
    if (null == eS && (null != eF && null != eE ? eT(eF) : eT(k)), null != ec) eI(ec);
    else if (null != k) {
      var e;
      eI(null == (e = C.A.get(k)) ? true : e.skuId)
    }
  }, [eT, eS, eI, k, ec, eF, eE]);
  let e6 = i.useCallback(() => {
      let e = (0, R.lo)(ez) === R.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        t = Date.now();
      w.default.track(H.HAw.PAYMENT_FLOW_SUCCEEDED, X(q({}, e0), {
        is_custom_message_edited: eK && e && null != eq ? eq !== W.intl.string(W.t.ZkOo1U) : true,
        is_custom_emoji_sound_available: eK && e,
        emoji_name: eK && e && (null == eZ ? true : eZ.id) == null ? null == eZ ? true : eZ.surrogates : true,
        sound_id: eK && e ? null == eX ? true : eX.soundId : true,
        duration_ms: t - ex.startTime,
        payment_source_type: null == e2 ? true : e2.type
      }));
      let {
        enabled: n
      } = y.u.getConfig({
        location: "PaymentModal emitPaymentFlowSuccess"
      });
      eK && null != ez && null != a && n && (0, O.W)(a) && (0, b.Yd)(ez.id)
    }, [e0, eZ, eq, ez, eK, eX, ex.startTime, e2, a]),
    e4 = i.useMemo(() => () => null == F ? true : F(eO === j.h.COMPLETED, eA), [F, eO, eA]),
    e5 = (0, o.A)(() => Date.now(), [eP]),
    e7 = i.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        {
          trackedFromStep: n,
          analyticsDataOverride: r,
          fulfillment: i,
          emitPaymentFlowLoadedEvent: a
        } = t,
        s = Date.now();
      if (e === L.pn.CONFIRM && (e6(), null == m || m(i), eg)) return void e4();
      eN(e), null == eu || eu(e), ew(null), eC(null), e === L.pn.ADD_PAYMENT_STEPS && (u.h.wait(f.ET), u.h.wait(p.T3));
      let o = null != n ? n : eP;
      null === o || a ? w.default.track(H.HAw.PAYMENT_FLOW_LOADED, X(q({}, e0), {
        initial_step: null != o ? o : e,
        continue_session_initial_step: eE,
        has_saved_payment_source: ek
      })) : w.default.track(H.HAw.PAYMENT_FLOW_STEP, X(q({}, e0, r), {
        from_step: o,
        to_step: e === L.pn.ADD_PAYMENT_STEPS ? L.pn.PAYMENT_TYPE : e,
        step_duration_ms: s - e5,
        flow_duration_ms: s - ex.startTime
      }))
    }, [eN, eu, ew, eC, eP, eE, e0, e5, ex.startTime, e6, m, eg, e4, ek]);
  (0, I.b)(eP, eR, e7, ev), (0, L.zT)(eP, eO, ev), (0, S.Q)(eP, eL, e7), (0, E.A)(e4), (0, T.s)(ej, () => F(false), eK), (0, I.QR)(eR);
  let e8 = {
      initialPlanId: k,
      subscriptionTier: U,
      handleStepChange: e7,
      handleClose: e4,
      analyticsData: e0,
      setAnalyticsData: e1,
      trialId: z,
      trialFooterMessageOverride: Z,
      reviewWarningMessage: J,
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
    e9 = (0, V.L)({
      renderHeader: ea,
      handleClose: e4
    });
  return (0, r.jsx)(c.bfh, {
    className: K.Xn,
    isShaking: ed && eO === j.h.PURCHASING,
    intensity: Q,
    children: (0, r.jsx)(c.EOs, {
      "data-migration-pending": true,
      className: s()(K.zr, eB, {
        [K.wf]: null != e9
      }),
      transitionState: N,
      hideShadow: eh,
      returnRef: em,
      size: eQ,
      parentComponent: "PaymentModal",
      children: (0, r.jsx)(B.Ay, q({
        header: e9,
        isLargeModal: ef || (null == eW ? true : eW.isLargeModal),
        isDynamicModal: e_ || (null == eW ? true : eW.isDynamicModal)
      }, e8))
    })
  })
}

function ee(e) {
  let {
    subscriptionTier: t,
    initialPlanId: n,
    handleStepChange: a,
    referralTrialOfferId: s,
    handleClose: o,
    continueSessionToInitialStep: c
  } = e, {
    activeSubscription: u,
    blockedPayments: f,
    hasFetchedSubscriptions: p,
    hasFetchedSubscriptionPlans: h,
    currencyLoading: g,
    selectedSkuId: E,
    setSelectedPlanId: y,
    defaultPlanId: b,
    startedPaymentFlowWithPaymentSourcesRef: O,
    hasPaymentSources: v
  } = (0, x.P5)(), {
    isGift: A
  } = (0, D.Pv)(), I = O.current, S = (0, U.A)({
    isGift: A,
    skuId: E,
    referralTrialOfferId: s
  }), [T, C] = i.useState(true), w = (0, l.bG)([N.A], () => N.A.applicationIdsFetched.has(Y.tv));
  return (i.useEffect(() => {
    C(!p || !h || g)
  }, [g, h, p]), (0, _.A)("Payment Modal", T, 5, {
    hasFetchedSubscriptions: p,
    hasFetchedSubscriptionPlans: h,
    currencyLoading: g
  }, {
    tags: {
      app_context: J
    }
  }), i.useEffect(() => {
    if (w || (0, d.LM)(Y.tv), T || f) return;
    let e = (0, k.vT)({
      isTrial: S,
      isGift: A,
      selectedSkuId: E,
      startedPaymentFlowWithPaymentSources: I
    });
    null != c ? a(L.pn.ADD_PAYMENT_STEPS, {
      emitPaymentFlowLoadedEvent: true,
      trackedFromStep: c
    }) : null != n ? n !== Y.gD.PREMIUM_GROUP_MONTH || v ? a(L.pn.REVIEW) : a(L.pn.ADD_PAYMENT_STEPS) : e ? (y((0, k.xT)(E, u, b)), a(L.pn.REVIEW)) : null != t ? a(L.pn.PLAN_SELECT) : a(L.pn.SKU_SELECT)
  }, [c, u, f, w, n, T, a, t, E, y, S, b, A, I, v]), T) ? (0, r.jsx)(F.A, {}) : f ? (0, r.jsx)(m.oO, {
    onClose: o
  }) : null
}
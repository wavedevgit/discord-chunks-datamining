/** Chunk was on web.js **/
/** chunk id: 546042, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => er,
  PaymentModal: () => en
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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
  Chunk608805 = require("./608805.js"),
  Chunk169797 = require("./169797.jsx"),
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

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Z(e, t, n[t])
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

function J(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : X(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let $ = 2,
  ee = "billing",
  et = e => {
    let {
      step: t,
      transitionState: n,
      handleClose: i,
      legacyModalClassName: a,
      legacyModalSize: o,
      hideShadow: s,
      returnRef: l,
      children: u
    } = e, {
      enabled: d
    } = (0, g.T0)({
      location: "PaymentModal"
    });
    return d && t === j.pn.REVIEW ? (0, r.jsx)(E.Jg, {
      transitionState: n,
      returnRef: l,
      onClose: async () => {
        await i()
      },
      children: u
    }) : (0, r.jsx)(c.EOs, {
      "data-migration-pending": true,
      className: a,
      transitionState: n,
      hideShadow: s,
      returnRef: l,
      size: o,
      parentComponent: "PaymentModal",
      children: u
    })
  };

function en(e) {
  let {
    analyticsDataOverride: t,
    analyticsLocations: n,
    analyticsLocation: a,
    analyticsObject: l,
    analyticsSourceLocation: d,
    analyticsSubscriptionType: _ = W.rzx.PREMIUM,
    onComplete: m,
    transitionState: g,
    initialPlanId: E,
    subscriptionTier: R,
    onClose: G,
    trialId: F,
    trialFooterMessageOverride: H,
    reviewWarningMessage: Z,
    planGroup: X = K.LE,
    openInvoiceId: ee,
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
    isDynamicModal: eh = false,
    hideShadow: em = false,
    returnRef: eg,
    skipConfirm: eE = false,
    continueSessionToInitialStep: ey,
    paymentModalVersion: eb = "v1"
  } = e, {
    activitySessionId: eO,
    purchaseState: ev,
    setPurchaseState: eA,
    selectedSkuId: eI,
    setSelectedSkuId: eS,
    selectedPlan: eT,
    setSelectedPlanId: eC,
    setSelectedPlanNotification: eN,
    setStep: ew,
    setPurchaseError: eR,
    paymentAuthenticationState: eP,
    step: eD,
    selectedSku: eL,
    contextMetadata: ex,
    purchaseTokenAuthState: eM,
    activeSubscription: ej,
    priceOptions: ek,
    hasPaymentSources: eU,
    paymentSourceId: eG,
    paymentSources: eF,
    purchaseType: eV,
    defaultPlanId: eB,
    premiumBrandRefreshBackgroundClassName: eH,
    customCheckoutFlow: eY,
    invoicePreview: eW
  } = (0, M.P5)(), eK = (0, U.A)(), {
    isGift: ez,
    giftRecipient: eq,
    customGiftMessage: eZ,
    emojiConfetti: eQ,
    soundEffect: eX
  } = (0, x.Pv)(), eJ = c.rIJ.SMALL;
  ep || (null == eK ? true : eK.isLargeModal) ? eJ = c.rIJ.LARGE : e_ || (null == eK ? true : eK.isMediumModal) ? eJ = c.rIJ.MEDIUM : (eD === j.pn.ADD_PAYMENT_STEPS || eh || (null == eK ? true : eK.isDynamicModal)) && (eJ = c.rIJ.DYNAMIC);
  let e$ = (0, I.O)(),
    e0 = null != R && !ez && (0, S.U9)(e$, R),
    [e1, e2] = i.useState(Q({
      load_id: ex.loadId,
      payment_type: W.frM[eV],
      location: null != a ? a : l,
      source: d,
      subscription_type: _,
      subscription_plan_id: null == eT ? true : eT.id,
      is_gift: ez,
      eligible_for_trial: null != F,
      location_stack: n,
      sku_id: eu,
      application_id: es,
      guild_id: el,
      payment_modal_version: eb,
      activity_session_id: eO,
      eligible_for_discount: e0,
      sku_product_line: null == eL ? true : eL.productLine
    }, t)),
    e3 = (0, V.W)(eF, eG),
    e6 = null != eW ? eW.getDiscountIdIfExists() : true;
  i.useEffect(() => {
    e2(e => {
      let n = null != eT ? (0, L.y8)(eT.id, false, ez, ek) : true;
      return Q(J(Q({}, e), {
        subscription_plan_id: null == eT ? true : eT.id,
        price: null == n ? true : n.amount,
        regular_price: null == eT ? true : eT.price,
        currency: ek.currency,
        sku_id: eI,
        sku_product_line: null == eL ? true : eL.productLine
      }), t)
    })
  }, [eT, eI, ez, ek, t, null == eL ? true : eL.productLine]), (0, h.Ay)(() => {
    (0, y.b)(J(Q({}, e1), {
      continue_session_initial_step: ey,
      custom_checkout_flow: eY,
      has_saved_payment_source: eU,
      discount_id: null != e$ ? e$.discount_id : e6
    }))
  }), i.useEffect(() => {
    if (null == eT && (null != eB && null != ey ? eC(eB) : eC(E)), null != eu) eS(eu);
    else if (null != E) {
      var e;
      eS(null == (e = w.A.get(E)) ? true : e.skuId)
    }
  }, [eC, eT, eS, E, eu, eB, ey]);
  let e4 = i.useCallback(() => {
      let e = (0, D.lo)(eq) === D.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        t = Date.now();
      P.default.track(W.HAw.PAYMENT_FLOW_SUCCEEDED, J(Q({}, e1), {
        is_custom_message_edited: ez && e && null != eZ ? eZ !== z.intl.string(z.t.ZkOo1U) : true,
        is_custom_emoji_sound_available: ez && e,
        emoji_name: ez && e && (null == eQ ? true : eQ.id) == null ? null == eQ ? true : eQ.surrogates : true,
        sound_id: ez && e ? null == eX ? true : eX.soundId : true,
        duration_ms: t - ex.startTime,
        payment_source_type: null == e3 ? true : e3.type
      }));
      let {
        enabled: n
      } = O.u.getConfig({
        location: "PaymentModal emitPaymentFlowSuccess"
      });
      ez && null != eq && null != a && n && (0, A.W)(a) && (0, v.Yd)(eq.id)
    }, [e1, eQ, eZ, eq, ez, eX, ex.startTime, e3, a]),
    e5 = i.useMemo(() => () => null == G ? true : G(ev === k.h.COMPLETED, eI), [G, ev, eI]),
    e7 = (0, s.A)(() => Date.now(), [eD]),
    e8 = i.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        {
          trackedFromStep: n,
          analyticsDataOverride: r,
          fulfillment: i,
          emitPaymentFlowLoadedEvent: a
        } = t,
        o = Date.now();
      if (e === j.pn.CONFIRM && (e4(), null == m || m(i), eE)) return void e5();
      ew(e), null == ed || ed(e), eR(null), eN(null), e === j.pn.ADD_PAYMENT_STEPS && (u.h.wait(f.ET), u.h.wait(p.T3));
      let s = null != n ? n : eD;
      null === s || a ? P.default.track(W.HAw.PAYMENT_FLOW_LOADED, J(Q({}, e1), {
        initial_step: null != s ? s : e,
        continue_session_initial_step: ey,
        has_saved_payment_source: eU
      })) : P.default.track(W.HAw.PAYMENT_FLOW_STEP, J(Q({}, e1, r), {
        from_step: s,
        to_step: e === j.pn.ADD_PAYMENT_STEPS ? j.pn.PAYMENT_TYPE : e,
        step_duration_ms: o - e7,
        flow_duration_ms: o - ex.startTime
      }))
    }, [ew, ed, eR, eN, eD, ey, e1, e7, ex.startTime, e4, m, eE, e5, eU]);
  (0, T.b)(eD, eP, e8, eA), (0, j.zT)(eD, ev, eA), (0, C.Q)(eD, eM, e8), (0, b.A)(e5), (0, N.s)(ej, () => G(false), ez), (0, T.QR)(eP);
  let e9 = {
      initialPlanId: E,
      subscriptionTier: R,
      handleStepChange: e8,
      handleClose: e5,
      analyticsData: e1,
      setAnalyticsData: e2,
      trialId: F,
      trialFooterMessageOverride: H,
      reviewWarningMessage: Z,
      planGroup: X,
      openInvoiceId: ee,
      analyticsLocation: a,
      onSubscriptionConfirmation: en,
      renderPurchaseConfirmation: er,
      postSuccessGuild: ei,
      followupSKUInfo: ea,
      referralTrialOfferId: ec,
      skipConfirm: eE,
      continueSessionToInitialStep: ey
    },
    te = (0, B.L)({
      renderHeader: eo,
      handleClose: e5
    });
  return (0, r.jsx)(c.bfh, {
    className: q.Xn,
    isShaking: ef && ev === k.h.PURCHASING,
    intensity: $,
    children: (0, r.jsx)(et, {
      step: eD,
      transitionState: g,
      hideShadow: em,
      returnRef: eg,
      legacyModalSize: eJ,
      legacyModalClassName: o()(q.zr, eH, {
        [q.wf]: null != te
      }),
      handleClose: e5,
      children: (0, r.jsx)(Y.Ay, Q({
        header: te,
        isLargeModal: ep || (null == eK ? true : eK.isLargeModal),
        isDynamicModal: eh || (null == eK ? true : eK.isDynamicModal)
      }, e9))
    })
  })
}

function er(e) {
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
    hasFetchedSubscriptionPlans: h,
    currencyLoading: g,
    selectedSkuId: E,
    setSelectedPlanId: y,
    defaultPlanId: b,
    startedPaymentFlowWithPaymentSourcesRef: O,
    hasPaymentSources: v
  } = (0, M.P5)(), {
    isGift: A
  } = (0, x.Pv)(), I = O.current, S = (0, F.A)({
    isGift: A,
    skuId: E,
    referralTrialOfferId: o
  }), [T, C] = i.useState(true), N = (0, l.bG)([R.A], () => R.A.applicationIdsFetched.has(K.tv));
  return (i.useEffect(() => {
    C(!p || !h || g)
  }, [g, h, p]), (0, _.A)("Payment Modal", T, 5, {
    hasFetchedSubscriptions: p,
    hasFetchedSubscriptionPlans: h,
    currencyLoading: g
  }, {
    tags: {
      app_context: ee
    }
  }), i.useEffect(() => {
    if (N || (0, d.LM)(K.tv), T || f) return;
    let e = (0, G.vT)({
      isTrial: S,
      isGift: A,
      selectedSkuId: E,
      startedPaymentFlowWithPaymentSources: I
    });
    null != c ? a(j.pn.ADD_PAYMENT_STEPS, {
      emitPaymentFlowLoadedEvent: true,
      trackedFromStep: c
    }) : null != n ? n !== K.gD.PREMIUM_GROUP_MONTH || v ? a(j.pn.REVIEW) : a(j.pn.ADD_PAYMENT_STEPS) : e ? (y((0, G.xT)(E, u, b)), a(j.pn.REVIEW)) : null != t ? a(j.pn.PLAN_SELECT) : a(j.pn.SKU_SELECT)
  }, [c, u, f, N, n, T, a, t, E, y, S, b, A, I, v]), T) ? (0, r.jsx)(H.A, {}) : f ? (0, r.jsx)(m.oO, {
    onClose: s
  }) : null
}
/** Chunk was on web.js **/
/** chunk id: 716534, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => q
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk742280 = require("./742280.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk190947 = require("./190947.jsx"),
  Chunk224550 = require("./224550.jsx"),
  Chunk275850 = require("./275850.jsx"),
  Chunk672971 = require("./672971.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk45572 = require("./45572.js"),
  Chunk919778 = require("./919778.js"),
  Chunk614223 = require("./614223.js"),
  Chunk405685 = require("./405685.jsx"),
  Chunk435020 = require("./435020.js"),
  Chunk246946 = require("./246946.js"),
  Chunk351402 = require("./351402.js"),
  Chunk509545 = require("./509545.js"),
  Chunk855775 = require("./855775.js"),
  Chunk55563 = require("./55563.js"),
  Chunk669079 = require("./669079.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk479446 = require("./479446.js"),
  Chunk374649 = require("./374649.js"),
  Chunk622909 = require("./622909.js"),
  Chunk811334 = require("./811334.jsx"),
  Chunk346071 = require("./346071.jsx"),
  Chunk314182 = require("./314182.jsx"),
  Chunk981632 = require("./981632.jsx"),
  Chunk396955 = require("./396955.jsx"),
  Chunk314404 = require("./314404.jsx"),
  Chunk42818 = require("./42818.jsx"),
  Chunk459965 = require("./459965.js"),
  Chunk251660 = require("./251660.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk867983 = require("./867983.js");

function q(e) {
  var t, n, a, s;
  let q, X, {
      selectedPlanId: Q,
      planGroup: J,
      paymentSources: $,
      priceOptions: ee,
      currencies: et,
      onCurrencyChange: en,
      onPaymentSourceChange: er,
      handlePaymentSourceAdd: ei,
      setHasAcceptedTerms: ea,
      legalTermsNodeRef: eo,
      hasLegalTermsFlash: es,
      trialId: el,
      trialFooterMessageOverride: ec,
      reviewWarningMessage: eu,
      metadata: ed,
      purchaseState: ef,
      hideSubscriptionDetails: e_,
      referralTrialOfferId: ep,
      isTrial: eh = false,
      isDiscount: em = false,
      handleClose: eg
    } = e,
    {
      isEmbeddedIAP: eE,
      activeSubscription: eb,
      selectedSkuId: ey,
      defaultPlanId: eO,
      isPremium: ev,
      startedPaymentFlowWithPaymentSourcesRef: eI,
      setInvoicePreview: eT,
      contextMetadata: eS,
      inReverseTrial: eA,
      setPurchaseError: eC,
      hasPaymentSources: eN,
      enablePremiumBrandRefresh: eR,
      premiumBrandRefreshBackgroundClassName: eP
    } = (0, b.JL)(),
    {
      isGift: eD,
      giftRecipient: ew,
      selectedGiftStyle: ex
    } = (0, E.wD)(),
    eL = (0, M.N)(),
    eM = null == eL || null == (t = eL.discount) ? true : t.plan_ids.some(e => Y.GP[e].skuId === ey),
    ek = !eD && null != eL && null != ey && eM,
    ej = (0, u.e7)([C.Z], () => C.Z.get(Q));
  l()(null != ej, "Missing plan");
  let eU = [{
      planId: ej.id,
      quantity: 1
    }],
    eG = ef === y.A.PURCHASING || ef === y.A.COMPLETED,
    eB = null != ey ? ey : "",
    eZ = (0, u.e7)([R.Z], () => R.Z.get(eB), [eB]),
    eF = null == eZ ? true : eZ.eligiblePaymentGateways,
    [eV, eH] = (0, L.ED)({
      items: eU,
      renewal: false,
      preventFetch: eA || eD || eG,
      applyEntitlements: true,
      paymentSourceId: ee.paymentSourceId,
      currency: ee.currency,
      trialId: el,
      metadata: ed
    }),
    [eY, eW] = (0, L.ED)({
      subscriptionId: null == eb ? true : eb.id,
      items: eU,
      renewal: true,
      preventFetch: eD || eG,
      trialId: el,
      paymentSourceId: ee.paymentSourceId,
      currency: ee.currency,
      metadata: ed
    }),
    [eK, ez] = (0, L.ED)({
      items: [{
        planId: Y.Xh.PREMIUM_MONTH_TIER_2,
        quantity: 1
      }],
      renewal: true,
      preventFetch: !ek,
      trialId: el,
      paymentSourceId: ee.paymentSourceId,
      currency: ee.currency,
      metadata: ed
    }),
    [eq, eX] = (0, L.o5)({
      paymentSourceId: ee.paymentSourceId,
      skuId: ey,
      subscriptionPlanId: Q,
      currency: ee.currency,
      preventFetch: !eD || eG,
      loadId: eS.loadId
    }),
    eQ = eD && (0, P.pO)(ew),
    eJ = null != (a = null != (n = null != eH ? eH : eW) ? n : ez) ? a : eX;
  i.useEffect(() => {
    eC(eJ)
  }, [eJ, eC]);
  let e$ = (0, u.e7)([S.Z], () => S.Z.enabled),
    e0 = ee.paymentSourceId,
    e1 = (0, T.$)($, e0),
    {
      hasEntitlements: e3,
      entitlements: e2
    } = (0, V.H)(ej.id, eD),
    e4 = (0, D.Ap)(ee.paymentSourceId),
    e5 = (0, O.sE)(el, e0, Q),
    e8 = (0, v.Kp)({
      isTrial: eh,
      isGift: eD,
      selectedSkuId: ey,
      startedPaymentFlowWithPaymentSources: eI.current,
      inReverseTrial: eA
    }),
    [e6, e7] = i.useState(null == eV ? true : eV.subscriptionPeriodEnd);
  i.useEffect(() => {
    null == e6 && e7(null == eV ? true : eV.subscriptionPeriodEnd)
  }, [null == eV ? true : eV.subscriptionPeriodEnd, e6]);
  let e9 = (0, g.Z)({
      forceFetch: false,
      excludeReverseTrial: false,
      excludeReverseTrialFromCountdown: true
    }),
    te = !e8 && e9.isFractionalPremiumActive && Y.dJ.has(Q),
    tt = i.useMemo(() => (0, D.V7)({
      skuId: ey,
      isPremium: ev,
      multiMonthPlans: [],
      currentSubscription: eb,
      defaultPlanId: eO
    }), [ey, eb, eO, ev]),
    tn = (0, v.$g)(e8, eV, ej),
    tr = i.useMemo(() => eh && null != eV ? eV : eA && null != eY ? eY : true, [eA, eh, eV, eY]);
  if (i.useEffect(() => {
      eD ? eT(eq) : eT(eV)
    }, [eD, eT, eq, eV]), null != eJ);
  else if (eD && null != eq) X = (0, r.jsx)(F.e9, {
    plan: ej,
    className: o()(z.invoice, eP),
    isPrepaidPaymentSource: e4,
    isCustomGift: eQ,
    invoicePreview: eq
  });
  else if (null != tr) X = (0, r.jsxs)("div", {
    children: [(0, r.jsx)(k.UN, {
      negativeMarginTop: !eA
    }), (0, r.jsxs)(k.aO, {
      className: o()(z.invoice, eP),
      children: [(0, r.jsxs)("div", {
        className: z.trialPriceLine,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/bold",
          children: K.intl.string(K.t.txajQG)
        }), (0, r.jsx)(f.Text, {
          variant: "text-md/normal",
          children: K.intl.format(K.t.hXcaLT, {
            price: (0, w.T4)(0, tr.currency, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            })
          })
        })]
      }), (0, r.jsx)("div", {
        className: z.afterTrialPriceLine,
        children: (0, r.jsx)(F.yT, {
          invoice: tr,
          plan: ej
        })
      })]
    })]
  });
  else {
    if (null == eV || null == eY || tn) return (0, r.jsx)("div", {
      className: z.spinnerWrapper,
      children: (0, r.jsx)(f.$jN, {})
    });
    eh && eV.subscriptionPeriodEnd !== eY.subscriptionPeriodEnd && (q = eV.subscriptionPeriodEnd), X = (0, r.jsxs)(r.Fragment, {
      children: [te && (0, r.jsx)(j.n, {
        fractionalPremiumInfo: e9,
        enablePremiumBrandRefresh: eR
      }), (0, r.jsxs)(k.aO, {
        className: o()(z.invoice, eP),
        children: [(0, r.jsx)(k.Z9, {
          children: K.intl.string(K.t["2eh+Co"])
        }), (0, r.jsx)(F.Lu, {
          invoice: eV,
          newPlan: ej,
          isPrepaidPaymentSource: e4,
          referralTrialOfferId: ep
        }), e4 ? null : (0, r.jsx)(F.nd, {
          renewalInvoice: eY,
          isTrial: eh,
          priceOptions: ee,
          overrideRenewalDate: q,
          trialFooterMessageOverride: ec,
          hideSubscriptionDetails: e_
        })]
      })]
    })
  }
  let ti = c.M.EEA_COUNTRIES.has(A.Z.ipCountryCodeWithFallback),
    ta = K.intl.formatToPlainString(K.t["sBpy9/"], {
      planName: ej.name
    });
  eD && !eQ ? ta = K.intl.string(K.t.J5a0eb) : eD && eQ ? ta = "" : (0, D.PV)(ej.id) && (ta = D.ZP.getBillingReviewSubheader(null, ej));
  let to = null != eF && eF.length > 0 && (e0 === N.c || null === e1) && eN ? B.w.SELECT_PAYMENT_METHOD : true;
  return e5 ? null : (0, r.jsxs)("div", {
    className: z.stepBody,
    children: [(0, r.jsx)(B.Y, {
      paymentRestrictionBannerType: to
    }), null != eu && (0, r.jsxs)("div", {
      className: z.reviewWarningMessageContainer,
      children: [(0, r.jsx)(f.d3s, {
        size: "custom",
        color: d.Z.unsafe_rawColors.YELLOW_300.css,
        width: 20,
        height: 20
      }), (0, r.jsx)(f.Text, {
        className: z.reviewWarningMessage,
        variant: "text-sm/normal",
        children: eu
      })]
    }), e8 && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(k.UN, {
        negativeMarginTop: true,
        negativeMarginBottom: true
      }), (0, r.jsx)(I.a, {
        planSkuId: null == ej ? true : ej.skuId,
        referralTrialOfferId: ep
      }), (0, r.jsx)(Z.O, {
        planOptions: tt,
        eligibleForMultiMonthPlans: false,
        referralTrialOfferId: true,
        selectedPlanId: Q,
        planGroup: J,
        subscriptionPeriodEnd: e6,
        showTotal: false,
        discountInvoiceItems: ek ? null == eK ? true : eK.invoiceItems : true,
        handleClose: eg
      }), (0, r.jsx)(k.UN, {})]
    }), eA && (0, r.jsx)(f.Heading, {
      variant: "heading-md/normal",
      color: "always-white",
      className: z.trialHeader,
      children: K.intl.format(K.t["7ZS2m1"], {
        trialEnd: null == eb ? true : eb.currentPeriodEnd
      })
    }), !eh && "" !== ta && (0, r.jsx)(f.Heading, {
      variant: "heading-md/semibold",
      children: ta
    }), eQ && null != ex && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(G.Z, {
        defaultAnimationState: x.SR.LOOP,
        giftStyle: ex,
        shouldAnimate: true,
        className: z.giftMainAnimation
      }), (0, r.jsx)(H.s, {
        giftRecipient: ew
      })]
    }), X, (0, r.jsxs)("div", {
      className: z.paymentSourceWrapper,
      children: [(0, r.jsx)(h.ZP, {
        label: eh ? K.intl.string(K.t["YH7B+D"]) : K.intl.string(K.t["mmDvV+"]),
        paymentSources: Object.values($),
        selectedPaymentSourceId: e0,
        prependOption: e3 && !eh ? {
          label: K.intl.string(K.t.IGU7El),
          value: null
        } : null,
        onChange: er,
        onPaymentSourceAdd: ei,
        hidePersonalInformation: e$,
        isTrial: eh,
        paymentGatewayRestrictions: eF,
        className: o()({
          [z.premiumBrandRefreshInputBackground]: eR
        })
      }), e3 && null == e0 ? (0, r.jsx)("div", {
        className: z.paymentSourceOptionalWarning,
        children: K.intl.format(K.t["2wPRSF"], {
          months: e2.length
        })
      }) : null, em ? null : (0, r.jsx)(_.b, {
        currencies: et,
        className: z.currencyWrapper,
        children: (0, r.jsx)(_.Z, {
          label: K.intl.string(K.t["/AAR02"]),
          selectedCurrency: ee.currency,
          currencies: et,
          onChange: en
        })
      })]
    }), (0, r.jsx)(U.Z, {
      isActive: es,
      ref: eo,
      children: (0, r.jsx)(m.Z, {
        onChange: ea,
        forceShow: true,
        finePrint: null != (s = !eA && ec) ? s : (0, r.jsx)(p.Z, {
          hide: eh || em,
          subscriptionPlan: ej,
          renewalInvoice: eY,
          isGift: eD,
          paymentSourceType: e1,
          isEmbeddedIAP: eE,
          basePrice: (0, D.aS)(ej.id, false, eD, ee)
        }),
        showPricingLink: ej.currency !== W.pK.USD,
        showWithdrawalWaiver: ti,
        disabled: eG,
        isTrial: eh && null == ec,
        inReverseTrial: eA,
        isDiscount: em,
        subscriptionPlan: ej,
        isGift: eD
      })
    })]
  })
}
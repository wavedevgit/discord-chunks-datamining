/** Chunk was on web.js **/
/** chunk id: 716534, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Q
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
  Chunk282793 = require("./282793.js"),
  Chunk231338 = require("./231338.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk400005 = require("./400005.js");

function Q(e) {
  var t, n, a;
  let s, Q, {
      selectedPlanId: X,
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
      hideSubscriptionDetails: ep,
      referralTrialOfferId: e_,
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
      startedPaymentFlowWithPaymentSourcesRef: eS,
      setInvoicePreview: eI,
      contextMetadata: eT,
      inReverseTrial: eC,
      setPurchasePreviewError: eA,
      hasPaymentSources: eN,
      enablePremiumBrandRefresh: eP,
      premiumBrandRefreshBackgroundClassName: ew,
      isPremiumGroupPurchase: eR,
      isEligibleForDiscount: eD
    } = (0, b.JL)(),
    {
      isGift: ex,
      giftRecipient: eL,
      selectedGiftStyle: ej
    } = (0, E.wD)(),
    eM = (0, u.e7)([A.Z], () => A.Z.get(X));
  l()(null != eM, "Missing plan");
  let ek = [{
      planId: eM.id,
      quantity: 1
    }],
    eU = ef === y.A.PURCHASING || ef === y.A.COMPLETED,
    eG = null != ey ? ey : "",
    eZ = (0, u.e7)([P.Z], () => P.Z.get(eG), [eG]),
    eF = null == eZ ? true : eZ.eligiblePaymentGateways,
    [eB, eV] = (0, L.ED)({
      items: ek,
      renewal: false,
      preventFetch: eC || ex || eU,
      applyEntitlements: true,
      paymentSourceId: ee.paymentSourceId,
      currency: ee.currency,
      trialId: el,
      metadata: ed
    }),
    [eH, eY] = (0, L.ED)({
      subscriptionId: null == eb ? true : eb.id,
      items: ek,
      renewal: true,
      preventFetch: ex || eU,
      trialId: el,
      paymentSourceId: ee.paymentSourceId,
      currency: ee.currency,
      metadata: ed
    }),
    [eW, eK] = (0, L.ED)({
      items: [{
        planId: H.Xh.PREMIUM_MONTH_TIER_2,
        quantity: 1
      }],
      renewal: true,
      preventFetch: !eD,
      trialId: el,
      paymentSourceId: ee.paymentSourceId,
      currency: ee.currency,
      metadata: ed
    }),
    [ez, eq] = (0, L.o5)({
      paymentSourceId: ee.paymentSourceId,
      skuId: ey,
      subscriptionPlanId: X,
      currency: ee.currency,
      preventFetch: !ex || eU,
      loadId: eT.loadId
    }),
    eQ = ex && (0, w.pO)(eL),
    eX = null != (n = null != (t = null != eV ? eV : eY) ? t : eK) ? n : eq;
  i.useEffect(() => {
    eA(eX)
  }, [eX, eA]);
  let eJ = (0, u.e7)([T.Z], () => T.Z.enabled),
    e$ = ee.paymentSourceId,
    e0 = (0, I.$)($, e$),
    {
      hasEntitlements: e1,
      entitlements: e3
    } = (0, B.H)(eM.id, ex),
    e2 = (0, R.Ap)(ee.paymentSourceId),
    e4 = (0, O.sE)(el, e$, X),
    e5 = (0, v.Kp)({
      isTrial: eh,
      isGift: ex,
      selectedSkuId: ey,
      startedPaymentFlowWithPaymentSources: eS.current,
      inReverseTrial: eC
    }),
    [e8, e6] = i.useState(null == eB ? true : eB.subscriptionPeriodEnd);
  i.useEffect(() => {
    null == e8 && e6(null == eB ? true : eB.subscriptionPeriodEnd)
  }, [null == eB ? true : eB.subscriptionPeriodEnd, e8]);
  let e7 = (0, g.Z)({
      forceFetch: false,
      excludeReverseTrial: false,
      excludeReverseTrialFromCountdown: true
    }),
    e9 = !e5 && e7.isFractionalPremiumActive && H.dJ.has(X),
    te = i.useMemo(() => (0, R.V7)({
      skuId: ey,
      isPremium: ev,
      multiMonthPlans: [],
      currentSubscription: eb,
      defaultPlanId: eO
    }), [ey, eb, eO, ev]),
    tt = (0, v.$g)(e5, eB, eM),
    tn = i.useMemo(() => eh && null != eB ? eB : eC && null != eH ? eH : true, [eC, eh, eB, eH]);
  if (i.useEffect(() => {
      ex ? eI(ez) : eI(eB)
    }, [ex, eI, ez, eB]), null != eX);
  else if (ex && null != ez) Q = (0, r.jsx)(F.e9, {
    plan: eM,
    className: o()(q.invoice, ew),
    isPrepaidPaymentSource: e2,
    isCustomGift: eQ,
    invoicePreview: ez
  });
  else if (null != tn) Q = (0, r.jsxs)("div", {
    children: [(0, r.jsx)(j.UN, {
      negativeMarginTop: !eC
    }), (0, r.jsxs)(j.aO, {
      className: o()(q.invoice, ew),
      children: [(0, r.jsxs)("div", {
        className: q.trialPriceLine,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/bold",
          children: z.intl.string(z.t.txajQG)
        }), (0, r.jsx)(f.Text, {
          variant: "text-md/normal",
          children: z.intl.format(z.t.hXcaLT, {
            price: (0, D.T4)(0, tn.currency, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            })
          })
        })]
      }), (0, r.jsx)("div", {
        className: q.afterTrialPriceLine,
        children: (0, r.jsx)(F.yT, {
          invoice: tn,
          plan: eM
        })
      })]
    })]
  });
  else {
    if (null == eB || null == eH || tt) return (0, r.jsx)("div", {
      className: q.spinnerWrapper,
      children: (0, r.jsx)(f.$jN, {})
    });
    eh && eB.subscriptionPeriodEnd !== eH.subscriptionPeriodEnd && (s = eB.subscriptionPeriodEnd), Q = (0, r.jsxs)(r.Fragment, {
      children: [e9 && (0, r.jsx)(M.n, {
        fractionalPremiumInfo: e7,
        enablePremiumBrandRefresh: eP
      }), (0, r.jsxs)(j.aO, {
        className: o()(q.invoice, ew),
        children: [(0, r.jsx)(j.Z9, {
          children: z.intl.string(z.t["2eh+Co"])
        }), (0, r.jsx)(F.Lu, {
          invoice: eB,
          newPlan: eM,
          isPrepaidPaymentSource: e2,
          referralTrialOfferId: e_
        }), e2 ? null : (0, r.jsx)(F.nd, {
          renewalInvoice: eH,
          isTrial: eh,
          priceOptions: ee,
          overrideRenewalDate: s,
          trialFooterMessageOverride: ec,
          hideSubscriptionDetails: ep
        })]
      })]
    })
  }
  let tr = c.M.EEA_COUNTRIES.has(C.Z.ipCountryCodeWithFallback),
    ti = z.intl.formatToPlainString(z.t["sBpy9/"], {
      planName: eM.name
    });
  ex && !eQ ? ti = z.intl.string(z.t.J5a0eb) : ex && eQ ? ti = "" : (0, R.PV)(eM.id) && (ti = R.ZP.getBillingReviewSubheader(null, eM));
  let ta = null != eF && eF.length > 0 && (e$ === N.c || null === e0) && eN ? G.w.SELECT_PAYMENT_METHOD : true;
  return e4 ? null : (0, r.jsxs)("div", {
    className: q.stepBody,
    children: [(0, r.jsx)(G.Y, {
      paymentRestrictionBannerType: ta
    }), null != eu && (0, r.jsxs)("div", {
      className: q.reviewWarningMessageContainer,
      children: [(0, r.jsx)(f.d3s, {
        size: "custom",
        color: d.Z.unsafe_rawColors.YELLOW_300.css,
        width: 20,
        height: 20
      }), (0, r.jsx)(f.Text, {
        className: q.reviewWarningMessage,
        variant: "text-sm/normal",
        children: eu
      })]
    }), eR && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        children: z.intl.formatToPlainString(K.default["h1i+H8"], {
          premiumGroupProductName: (0, Y.sO)(),
          cooldownMonths: Y.T9
        })
      }), (0, r.jsx)(j.UN, {})]
    }), e5 && !eR && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(j.UN, {
        negativeMarginTop: true,
        negativeMarginBottom: true
      }), (0, r.jsx)(S.a, {
        planSkuId: null == eM ? true : eM.skuId,
        referralTrialOfferId: e_
      }), (0, r.jsx)(Z.O, {
        planOptions: te,
        eligibleForMultiMonthPlans: false,
        selectedPlanId: X,
        planGroup: J,
        subscriptionPeriodEnd: e8,
        showTotal: false,
        discountInvoiceItems: eD ? null == eW ? true : eW.invoiceItems : true,
        handleClose: eg
      }), (0, r.jsx)(j.UN, {})]
    }), eC && (0, r.jsx)(f.Heading, {
      variant: "heading-md/normal",
      color: "always-white",
      className: q.trialHeader,
      children: z.intl.format(z.t["7ZS2m1"], {
        trialEnd: null == eb ? true : eb.currentPeriodEnd
      })
    }), !eh && "" !== ti && (0, r.jsx)(f.Heading, {
      variant: "heading-md/semibold",
      className: q.header,
      children: ti
    }), eQ && null != ej && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(U.Z, {
        defaultAnimationState: x.SR.LOOP,
        giftStyle: ej,
        shouldAnimate: true,
        className: q.giftMainAnimation
      }), (0, r.jsx)(V.s, {
        giftRecipient: eL
      })]
    }), Q, (0, r.jsxs)("div", {
      className: q.paymentSourceWrapper,
      children: [(0, r.jsx)(h.ZP, {
        label: eh ? z.intl.string(z.t["YH7B+D"]) : z.intl.string(z.t["mmDvV+"]),
        paymentSources: Object.values($),
        selectedPaymentSourceId: e$,
        prependOption: e1 && !eh ? {
          label: z.intl.string(z.t.IGU7El),
          value: null
        } : null,
        onChange: er,
        onPaymentSourceAdd: ei,
        hidePersonalInformation: eJ,
        isTrial: eh,
        paymentGatewayRestrictions: eF,
        className: o()({
          [q.premiumBrandRefreshInputBackground]: eP
        })
      }), e1 && null == e$ ? (0, r.jsx)("div", {
        className: q.paymentSourceOptionalWarning,
        children: z.intl.format(z.t["2wPRSF"], {
          months: e3.length
        })
      }) : null, em ? null : (0, r.jsx)(p.b, {
        currencies: et,
        className: q.currencyWrapper,
        children: (0, r.jsx)(p.Z, {
          label: z.intl.string(z.t["/AAR02"]),
          selectedCurrency: ee.currency,
          currencies: et,
          onChange: en
        })
      })]
    }), (0, r.jsx)(k.Z, {
      isActive: es,
      ref: eo,
      children: (0, r.jsx)(m.Z, {
        onChange: ea,
        forceShow: true,
        finePrint: null != (a = !eC && ec) ? a : (0, r.jsx)(_.Z, {
          hide: eh || em,
          subscriptionPlan: eM,
          renewalInvoice: eH,
          isGift: ex,
          paymentSourceType: e0,
          isEmbeddedIAP: eE,
          basePrice: (0, R.aS)(eM.id, false, ex, ee)
        }),
        showPricingLink: eM.currency !== W.pK.USD,
        showWithdrawalWaiver: tr,
        disabled: eU,
        isTrial: eh && null == ec,
        inReverseTrial: eC,
        isDiscount: em,
        subscriptionPlan: eM,
        isGift: ex
      })
    })]
  })
}
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
  Chunk400005 = require("./400005.js");

function q(e) {
  var t, n, a, s;
  let q, Q, {
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
      isTrial: em = false,
      isDiscount: eh = false,
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
      premiumBrandRefreshBackgroundClassName: eR,
      isPremiumGroupPurchase: ew
    } = (0, b.JL)(),
    {
      isGift: eD,
      giftRecipient: ex,
      selectedGiftStyle: eL
    } = (0, E.wD)(),
    ej = (0, j.N)(),
    eM = null == ej || null == (t = ej.discount) ? true : t.plan_ids.some(e => Y.GP[e].skuId === ey),
    ek = !eD && null != ej && null != ey && eM,
    eU = (0, u.e7)([A.Z], () => A.Z.get(X));
  l()(null != eU, "Missing plan");
  let eG = [{
      planId: eU.id,
      quantity: 1
    }],
    eZ = ef === y.A.PURCHASING || ef === y.A.COMPLETED,
    eB = null != ey ? ey : "",
    eF = (0, u.e7)([P.Z], () => P.Z.get(eB), [eB]),
    eV = null == eF ? true : eF.eligiblePaymentGateways,
    [eH, eY] = (0, L.ED)({
      items: eG,
      renewal: false,
      preventFetch: eC || eD || eZ,
      applyEntitlements: true,
      paymentSourceId: ee.paymentSourceId,
      currency: ee.currency,
      trialId: el,
      metadata: ed
    }),
    [eW, eK] = (0, L.ED)({
      subscriptionId: null == eb ? true : eb.id,
      items: eG,
      renewal: true,
      preventFetch: eD || eZ,
      trialId: el,
      paymentSourceId: ee.paymentSourceId,
      currency: ee.currency,
      metadata: ed
    }),
    [ez, eq] = (0, L.ED)({
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
    [eQ, eX] = (0, L.o5)({
      paymentSourceId: ee.paymentSourceId,
      skuId: ey,
      subscriptionPlanId: X,
      currency: ee.currency,
      preventFetch: !eD || eZ,
      loadId: eT.loadId
    }),
    eJ = eD && (0, R.pO)(ex),
    e$ = null != (a = null != (n = null != eY ? eY : eK) ? n : eq) ? a : eX;
  i.useEffect(() => {
    eA(e$)
  }, [e$, eA]);
  let e0 = (0, u.e7)([T.Z], () => T.Z.enabled),
    e1 = ee.paymentSourceId,
    e3 = (0, I.$)($, e1),
    {
      hasEntitlements: e2,
      entitlements: e4
    } = (0, V.H)(eU.id, eD),
    e5 = (0, w.Ap)(ee.paymentSourceId),
    e8 = (0, O.sE)(el, e1, X),
    e6 = (0, v.Kp)({
      isTrial: em,
      isGift: eD,
      selectedSkuId: ey,
      startedPaymentFlowWithPaymentSources: eS.current,
      inReverseTrial: eC
    }),
    [e7, e9] = i.useState(null == eH ? true : eH.subscriptionPeriodEnd);
  i.useEffect(() => {
    null == e7 && e9(null == eH ? true : eH.subscriptionPeriodEnd)
  }, [null == eH ? true : eH.subscriptionPeriodEnd, e7]);
  let te = (0, g.Z)({
      forceFetch: false,
      excludeReverseTrial: false,
      excludeReverseTrialFromCountdown: true
    }),
    tt = !e6 && te.isFractionalPremiumActive && Y.dJ.has(X),
    tn = i.useMemo(() => (0, w.V7)({
      skuId: ey,
      isPremium: ev,
      multiMonthPlans: [],
      currentSubscription: eb,
      defaultPlanId: eO
    }), [ey, eb, eO, ev]),
    tr = (0, v.$g)(e6, eH, eU),
    ti = i.useMemo(() => em && null != eH ? eH : eC && null != eW ? eW : true, [eC, em, eH, eW]);
  if (i.useEffect(() => {
      eD ? eI(eQ) : eI(eH)
    }, [eD, eI, eQ, eH]), null != e$);
  else if (eD && null != eQ) Q = (0, r.jsx)(F.e9, {
    plan: eU,
    className: o()(z.invoice, eR),
    isPrepaidPaymentSource: e5,
    isCustomGift: eJ,
    invoicePreview: eQ
  });
  else if (null != ti) Q = (0, r.jsxs)("div", {
    children: [(0, r.jsx)(M.UN, {
      negativeMarginTop: !eC
    }), (0, r.jsxs)(M.aO, {
      className: o()(z.invoice, eR),
      children: [(0, r.jsxs)("div", {
        className: z.trialPriceLine,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/bold",
          children: K.intl.string(K.t.txajQG)
        }), (0, r.jsx)(f.Text, {
          variant: "text-md/normal",
          children: K.intl.format(K.t.hXcaLT, {
            price: (0, D.T4)(0, ti.currency, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            })
          })
        })]
      }), (0, r.jsx)("div", {
        className: z.afterTrialPriceLine,
        children: (0, r.jsx)(F.yT, {
          invoice: ti,
          plan: eU
        })
      })]
    })]
  });
  else {
    if (null == eH || null == eW || tr) return (0, r.jsx)("div", {
      className: z.spinnerWrapper,
      children: (0, r.jsx)(f.$jN, {})
    });
    em && eH.subscriptionPeriodEnd !== eW.subscriptionPeriodEnd && (q = eH.subscriptionPeriodEnd), Q = (0, r.jsxs)(r.Fragment, {
      children: [tt && (0, r.jsx)(k.n, {
        fractionalPremiumInfo: te,
        enablePremiumBrandRefresh: eP
      }), (0, r.jsxs)(M.aO, {
        className: o()(z.invoice, eR),
        children: [(0, r.jsx)(M.Z9, {
          children: K.intl.string(K.t["2eh+Co"])
        }), (0, r.jsx)(F.Lu, {
          invoice: eH,
          newPlan: eU,
          isPrepaidPaymentSource: e5,
          referralTrialOfferId: e_
        }), e5 ? null : (0, r.jsx)(F.nd, {
          renewalInvoice: eW,
          isTrial: em,
          priceOptions: ee,
          overrideRenewalDate: q,
          trialFooterMessageOverride: ec,
          hideSubscriptionDetails: ep
        })]
      })]
    })
  }
  let ta = c.M.EEA_COUNTRIES.has(C.Z.ipCountryCodeWithFallback),
    to = K.intl.formatToPlainString(K.t["sBpy9/"], {
      planName: eU.name
    });
  eD && !eJ ? to = K.intl.string(K.t.J5a0eb) : eD && eJ ? to = "" : (0, w.PV)(eU.id) && (to = w.ZP.getBillingReviewSubheader(null, eU));
  let ts = null != eV && eV.length > 0 && (e1 === N.c || null === e3) && eN ? Z.w.SELECT_PAYMENT_METHOD : true;
  return e8 ? null : (0, r.jsxs)("div", {
    className: z.stepBody,
    children: [(0, r.jsx)(Z.Y, {
      paymentRestrictionBannerType: ts
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
    }), e6 && !ew && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(M.UN, {
        negativeMarginTop: true,
        negativeMarginBottom: true
      }), (0, r.jsx)(S.a, {
        planSkuId: null == eU ? true : eU.skuId,
        referralTrialOfferId: e_
      }), (0, r.jsx)(B.O, {
        planOptions: tn,
        eligibleForMultiMonthPlans: false,
        referralTrialOfferId: true,
        selectedPlanId: X,
        planGroup: J,
        subscriptionPeriodEnd: e7,
        showTotal: false,
        discountInvoiceItems: ek ? null == ez ? true : ez.invoiceItems : true,
        handleClose: eg
      }), (0, r.jsx)(M.UN, {})]
    }), eC && (0, r.jsx)(f.Heading, {
      variant: "heading-md/normal",
      color: "always-white",
      className: z.trialHeader,
      children: K.intl.format(K.t["7ZS2m1"], {
        trialEnd: null == eb ? true : eb.currentPeriodEnd
      })
    }), !em && "" !== to && (0, r.jsx)(f.Heading, {
      variant: "heading-md/semibold",
      children: to
    }), eJ && null != eL && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(G.Z, {
        defaultAnimationState: x.SR.LOOP,
        giftStyle: eL,
        shouldAnimate: true,
        className: z.giftMainAnimation
      }), (0, r.jsx)(H.s, {
        giftRecipient: ex
      })]
    }), Q, (0, r.jsxs)("div", {
      className: z.paymentSourceWrapper,
      children: [(0, r.jsx)(m.ZP, {
        label: em ? K.intl.string(K.t["YH7B+D"]) : K.intl.string(K.t["mmDvV+"]),
        paymentSources: Object.values($),
        selectedPaymentSourceId: e1,
        prependOption: e2 && !em ? {
          label: K.intl.string(K.t.IGU7El),
          value: null
        } : null,
        onChange: er,
        onPaymentSourceAdd: ei,
        hidePersonalInformation: e0,
        isTrial: em,
        paymentGatewayRestrictions: eV,
        className: o()({
          [z.premiumBrandRefreshInputBackground]: eP
        })
      }), e2 && null == e1 ? (0, r.jsx)("div", {
        className: z.paymentSourceOptionalWarning,
        children: K.intl.format(K.t["2wPRSF"], {
          months: e4.length
        })
      }) : null, eh ? null : (0, r.jsx)(p.b, {
        currencies: et,
        className: z.currencyWrapper,
        children: (0, r.jsx)(p.Z, {
          label: K.intl.string(K.t["/AAR02"]),
          selectedCurrency: ee.currency,
          currencies: et,
          onChange: en
        })
      })]
    }), (0, r.jsx)(U.Z, {
      isActive: es,
      ref: eo,
      children: (0, r.jsx)(h.Z, {
        onChange: ea,
        forceShow: true,
        finePrint: null != (s = !eC && ec) ? s : (0, r.jsx)(_.Z, {
          hide: em || eh,
          subscriptionPlan: eU,
          renewalInvoice: eW,
          isGift: eD,
          paymentSourceType: e3,
          isEmbeddedIAP: eE,
          basePrice: (0, w.aS)(eU.id, false, eD, ee)
        }),
        showPricingLink: eU.currency !== W.pK.USD,
        showWithdrawalWaiver: ta,
        disabled: eZ,
        isTrial: em && null == ec,
        inReverseTrial: eC,
        isDiscount: eh,
        subscriptionPlan: eU,
        isGift: eD
      })
    })]
  })
}
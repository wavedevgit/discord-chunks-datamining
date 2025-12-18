/** Chunk was on web.js **/
/** chunk id: 716534, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => X
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
  Chunk282793 = require("./282793.js"),
  Chunk231338 = require("./231338.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk400005 = require("./400005.js");

function X(e) {
  var t, n, a, s;
  let X, J, {
      selectedPlanId: $,
      planGroup: ee,
      paymentSources: et,
      priceOptions: en,
      currencies: er,
      onCurrencyChange: ei,
      onPaymentSourceChange: ea,
      handlePaymentSourceAdd: eo,
      setHasAcceptedTerms: es,
      legalTermsNodeRef: el,
      hasLegalTermsFlash: ec,
      trialId: eu,
      trialFooterMessageOverride: ed,
      reviewWarningMessage: ef,
      metadata: ep,
      purchaseState: e_,
      hideSubscriptionDetails: em,
      referralTrialOfferId: eh,
      isTrial: eg = false,
      isDiscount: eE = false,
      handleClose: eb
    } = e,
    {
      isEmbeddedIAP: ey,
      activeSubscription: eO,
      selectedSkuId: ev,
      defaultPlanId: eS,
      isPremium: eI,
      startedPaymentFlowWithPaymentSourcesRef: eT,
      setInvoicePreview: eC,
      contextMetadata: eA,
      inReverseTrial: eN,
      setPurchasePreviewError: eP,
      hasPaymentSources: eR,
      enablePremiumBrandRefresh: ew,
      premiumBrandRefreshBackgroundClassName: eD,
      isPremiumGroupPurchase: ex
    } = (0, b.JL)(),
    {
      isGift: eL,
      giftRecipient: ej,
      selectedGiftStyle: eM
    } = (0, E.wD)(),
    ek = (0, j.N)(),
    eU = null == ek || null == (t = ek.discount) ? true : t.plan_ids.some(e => Y.GP[e].skuId === ev),
    eG = !eL && null != ek && null != ev && eU,
    eZ = (0, u.e7)([A.Z], () => A.Z.get($));
  l()(null != eZ, "Missing plan");
  let eF = [{
      planId: eZ.id,
      quantity: 1
    }],
    eB = e_ === y.A.PURCHASING || e_ === y.A.COMPLETED,
    eV = null != ev ? ev : "",
    eH = (0, u.e7)([P.Z], () => P.Z.get(eV), [eV]),
    eY = null == eH ? true : eH.eligiblePaymentGateways,
    [eW, eK] = (0, L.ED)({
      items: eF,
      renewal: false,
      preventFetch: eN || eL || eB,
      applyEntitlements: true,
      paymentSourceId: en.paymentSourceId,
      currency: en.currency,
      trialId: eu,
      metadata: ep
    }),
    [ez, eq] = (0, L.ED)({
      subscriptionId: null == eO ? true : eO.id,
      items: eF,
      renewal: true,
      preventFetch: eL || eB,
      trialId: eu,
      paymentSourceId: en.paymentSourceId,
      currency: en.currency,
      metadata: ep
    }),
    [eQ, eX] = (0, L.ED)({
      items: [{
        planId: Y.Xh.PREMIUM_MONTH_TIER_2,
        quantity: 1
      }],
      renewal: true,
      preventFetch: !eG,
      trialId: eu,
      paymentSourceId: en.paymentSourceId,
      currency: en.currency,
      metadata: ep
    }),
    [eJ, e$] = (0, L.o5)({
      paymentSourceId: en.paymentSourceId,
      skuId: ev,
      subscriptionPlanId: $,
      currency: en.currency,
      preventFetch: !eL || eB,
      loadId: eA.loadId
    }),
    e0 = eL && (0, R.pO)(ej),
    e1 = null != (a = null != (n = null != eK ? eK : eq) ? n : eX) ? a : e$;
  i.useEffect(() => {
    eP(e1)
  }, [e1, eP]);
  let e3 = (0, u.e7)([T.Z], () => T.Z.enabled),
    e2 = en.paymentSourceId,
    e4 = (0, I.$)(et, e2),
    {
      hasEntitlements: e5,
      entitlements: e8
    } = (0, V.H)(eZ.id, eL),
    e6 = (0, w.Ap)(en.paymentSourceId),
    e7 = (0, O.sE)(eu, e2, $),
    e9 = (0, v.Kp)({
      isTrial: eg,
      isGift: eL,
      selectedSkuId: ev,
      startedPaymentFlowWithPaymentSources: eT.current,
      inReverseTrial: eN
    }),
    [te, tt] = i.useState(null == eW ? true : eW.subscriptionPeriodEnd);
  i.useEffect(() => {
    null == te && tt(null == eW ? true : eW.subscriptionPeriodEnd)
  }, [null == eW ? true : eW.subscriptionPeriodEnd, te]);
  let tn = (0, g.Z)({
      forceFetch: false,
      excludeReverseTrial: false,
      excludeReverseTrialFromCountdown: true
    }),
    tr = !e9 && tn.isFractionalPremiumActive && Y.dJ.has($),
    ti = i.useMemo(() => (0, w.V7)({
      skuId: ev,
      isPremium: eI,
      multiMonthPlans: [],
      currentSubscription: eO,
      defaultPlanId: eS
    }), [ev, eO, eS, eI]),
    ta = (0, v.$g)(e9, eW, eZ),
    to = i.useMemo(() => eg && null != eW ? eW : eN && null != ez ? ez : true, [eN, eg, eW, ez]);
  if (i.useEffect(() => {
      eL ? eC(eJ) : eC(eW)
    }, [eL, eC, eJ, eW]), null != e1);
  else if (eL && null != eJ) J = (0, r.jsx)(B.e9, {
    plan: eZ,
    className: o()(Q.invoice, eD),
    isPrepaidPaymentSource: e6,
    isCustomGift: e0,
    invoicePreview: eJ
  });
  else if (null != to) J = (0, r.jsxs)("div", {
    children: [(0, r.jsx)(M.UN, {
      negativeMarginTop: !eN
    }), (0, r.jsxs)(M.aO, {
      className: o()(Q.invoice, eD),
      children: [(0, r.jsxs)("div", {
        className: Q.trialPriceLine,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/bold",
          children: q.intl.string(q.t.txajQG)
        }), (0, r.jsx)(f.Text, {
          variant: "text-md/normal",
          children: q.intl.format(q.t.hXcaLT, {
            price: (0, D.T4)(0, to.currency, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            })
          })
        })]
      }), (0, r.jsx)("div", {
        className: Q.afterTrialPriceLine,
        children: (0, r.jsx)(B.yT, {
          invoice: to,
          plan: eZ
        })
      })]
    })]
  });
  else {
    if (null == eW || null == ez || ta) return (0, r.jsx)("div", {
      className: Q.spinnerWrapper,
      children: (0, r.jsx)(f.$jN, {})
    });
    eg && eW.subscriptionPeriodEnd !== ez.subscriptionPeriodEnd && (X = eW.subscriptionPeriodEnd), J = (0, r.jsxs)(r.Fragment, {
      children: [tr && (0, r.jsx)(k.n, {
        fractionalPremiumInfo: tn,
        enablePremiumBrandRefresh: ew
      }), (0, r.jsxs)(M.aO, {
        className: o()(Q.invoice, eD),
        children: [(0, r.jsx)(M.Z9, {
          children: q.intl.string(q.t["2eh+Co"])
        }), (0, r.jsx)(B.Lu, {
          invoice: eW,
          newPlan: eZ,
          isPrepaidPaymentSource: e6,
          referralTrialOfferId: eh
        }), e6 ? null : (0, r.jsx)(B.nd, {
          renewalInvoice: ez,
          isTrial: eg,
          priceOptions: en,
          overrideRenewalDate: X,
          trialFooterMessageOverride: ed,
          hideSubscriptionDetails: em
        })]
      })]
    })
  }
  let ts = c.M.EEA_COUNTRIES.has(C.Z.ipCountryCodeWithFallback),
    tl = q.intl.formatToPlainString(q.t["sBpy9/"], {
      planName: eZ.name
    });
  eL && !e0 ? tl = q.intl.string(q.t.J5a0eb) : eL && e0 ? tl = "" : (0, w.PV)(eZ.id) && (tl = w.ZP.getBillingReviewSubheader(null, eZ));
  let tc = null != eY && eY.length > 0 && (e2 === N.c || null === e4) && eR ? Z.w.SELECT_PAYMENT_METHOD : true;
  return e7 ? null : (0, r.jsxs)("div", {
    className: Q.stepBody,
    children: [(0, r.jsx)(Z.Y, {
      paymentRestrictionBannerType: tc
    }), null != ef && (0, r.jsxs)("div", {
      className: Q.reviewWarningMessageContainer,
      children: [(0, r.jsx)(f.d3s, {
        size: "custom",
        color: d.Z.unsafe_rawColors.YELLOW_300.css,
        width: 20,
        height: 20
      }), (0, r.jsx)(f.Text, {
        className: Q.reviewWarningMessage,
        variant: "text-sm/normal",
        children: ef
      })]
    }), ex && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        children: q.intl.formatToPlainString(z.default["h1i+H8"], {
          premiumGroupProductName: (0, W.sO)(),
          cooldownMonths: W.T9
        })
      }), (0, r.jsx)(M.UN, {})]
    }), e9 && !ex && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(M.UN, {
        negativeMarginTop: true,
        negativeMarginBottom: true
      }), (0, r.jsx)(S.a, {
        planSkuId: null == eZ ? true : eZ.skuId,
        referralTrialOfferId: eh
      }), (0, r.jsx)(F.O, {
        planOptions: ti,
        eligibleForMultiMonthPlans: false,
        referralTrialOfferId: true,
        selectedPlanId: $,
        planGroup: ee,
        subscriptionPeriodEnd: te,
        showTotal: false,
        discountInvoiceItems: eG ? null == eQ ? true : eQ.invoiceItems : true,
        handleClose: eb
      }), (0, r.jsx)(M.UN, {})]
    }), eN && (0, r.jsx)(f.Heading, {
      variant: "heading-md/normal",
      color: "always-white",
      className: Q.trialHeader,
      children: q.intl.format(q.t["7ZS2m1"], {
        trialEnd: null == eO ? true : eO.currentPeriodEnd
      })
    }), !eg && "" !== tl && (0, r.jsx)(f.Heading, {
      variant: "heading-md/semibold",
      className: Q.header,
      children: tl
    }), e0 && null != eM && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(G.Z, {
        defaultAnimationState: x.SR.LOOP,
        giftStyle: eM,
        shouldAnimate: true,
        className: Q.giftMainAnimation
      }), (0, r.jsx)(H.s, {
        giftRecipient: ej
      })]
    }), J, (0, r.jsxs)("div", {
      className: Q.paymentSourceWrapper,
      children: [(0, r.jsx)(m.ZP, {
        label: eg ? q.intl.string(q.t["YH7B+D"]) : q.intl.string(q.t["mmDvV+"]),
        paymentSources: Object.values(et),
        selectedPaymentSourceId: e2,
        prependOption: e5 && !eg ? {
          label: q.intl.string(q.t.IGU7El),
          value: null
        } : null,
        onChange: ea,
        onPaymentSourceAdd: eo,
        hidePersonalInformation: e3,
        isTrial: eg,
        paymentGatewayRestrictions: eY,
        className: o()({
          [Q.premiumBrandRefreshInputBackground]: ew
        })
      }), e5 && null == e2 ? (0, r.jsx)("div", {
        className: Q.paymentSourceOptionalWarning,
        children: q.intl.format(q.t["2wPRSF"], {
          months: e8.length
        })
      }) : null, eE ? null : (0, r.jsx)(p.b, {
        currencies: er,
        className: Q.currencyWrapper,
        children: (0, r.jsx)(p.Z, {
          label: q.intl.string(q.t["/AAR02"]),
          selectedCurrency: en.currency,
          currencies: er,
          onChange: ei
        })
      })]
    }), (0, r.jsx)(U.Z, {
      isActive: ec,
      ref: el,
      children: (0, r.jsx)(h.Z, {
        onChange: es,
        forceShow: true,
        finePrint: null != (s = !eN && ed) ? s : (0, r.jsx)(_.Z, {
          hide: eg || eE,
          subscriptionPlan: eZ,
          renewalInvoice: ez,
          isGift: eL,
          paymentSourceType: e4,
          isEmbeddedIAP: ey,
          basePrice: (0, w.aS)(eZ.id, false, eL, en)
        }),
        showPricingLink: eZ.currency !== K.pK.USD,
        showWithdrawalWaiver: ts,
        disabled: eB,
        isTrial: eg && null == ed,
        inReverseTrial: eN,
        isDiscount: eE,
        subscriptionPlan: eZ,
        isGift: eL
      })
    })]
  })
}
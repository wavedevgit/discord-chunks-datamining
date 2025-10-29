/** Chunk was on web.js **/
/** chunk id: 716534, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Q
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk104494 = require("./104494.js"),
  Chunk642530 = require("./642530.jsx"),
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
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk867983 = require("./867983.js");

function X(e, t, n) {
  let r = null,
    i = null,
    a = null;
  if (e && null != t) {
    let {
      intervalType: e,
      intervalCount: o
    } = P.ZP.getIntervalForInvoice(t), s = (0, D.og)((0, D.T4)(t.total, t.currency), e, o), l = null != n ? n : t.subscriptionPeriodEnd;
    r = z.intl.format(z.t.ZzmrTk, {
      termsURL: W.EYA.TERMS,
      paidURL: W.EYA.PAID_TERMS,
      rate: s,
      renewalDate: l
    }), i = q.trialCheckbox, a = q.trialCheckboxLabel
  }
  return {
    checkboxLabel: r,
    checkboxClassname: i,
    checkboxLabelClassname: a
  }
}

function Q(e) {
  var t, n, a, s;
  let W, Q, {
      selectedPlanId: J,
      planGroup: $,
      paymentSources: ee,
      priceOptions: et,
      currencies: en,
      onCurrencyChange: er,
      onPaymentSourceChange: ei,
      handlePaymentSourceAdd: ea,
      setHasAcceptedTerms: eo,
      legalTermsNodeRef: es,
      hasLegalTermsFlash: el,
      trialId: ec,
      trialFooterMessageOverride: eu,
      reviewWarningMessage: ed,
      metadata: ef,
      purchaseState: e_,
      hideSubscriptionDetails: ep,
      referralTrialOfferId: eh,
      isTrial: em = false,
      isDiscount: eg = false,
      handleClose: eE
    } = e,
    {
      isEmbeddedIAP: eb,
      activeSubscription: ey,
      selectedSkuId: eO,
      defaultPlanId: ev,
      isPremium: eI,
      startedPaymentFlowWithPaymentSourcesRef: eT,
      setInvoicePreview: eS,
      contextMetadata: eA,
      inReverseTrial: eC,
      setPurchaseError: eN,
      hasPaymentSources: eR,
      enablePremiumBrandRefresh: eP,
      premiumBrandRefreshBackgroundClassName: eD
    } = (0, b.JL)(),
    {
      isGift: ew,
      giftRecipient: eL,
      selectedGiftStyle: ex
    } = (0, E.wD)(),
    eM = (0, x.Ng)(),
    ek = null == eM || null == (t = eM.discount) ? true : t.plan_ids.some(e => Y.GP[e].skuId === eO),
    ej = !ew && null != eM && null != eO && ek,
    eU = (0, u.e7)([A.Z], () => A.Z.get(J));
  l()(null != eU, "Missing plan");
  let eG = [{
      planId: eU.id,
      quantity: 1
    }],
    eB = e_ === y.A.PURCHASING || e_ === y.A.COMPLETED,
    eZ = null != eO ? eO : "",
    eF = (0, u.e7)([N.Z], () => N.Z.get(eZ), [eZ]),
    eV = null == eF ? true : eF.eligiblePaymentGateways,
    [eH, eY] = (0, L.ED)({
      items: eG,
      renewal: false,
      preventFetch: eC || ew || eB,
      applyEntitlements: true,
      paymentSourceId: et.paymentSourceId,
      currency: et.currency,
      trialId: ec,
      metadata: ef
    }),
    [eW, eK] = (0, L.ED)({
      subscriptionId: null == ey ? true : ey.id,
      items: eG,
      renewal: true,
      preventFetch: ew || eB,
      trialId: ec,
      paymentSourceId: et.paymentSourceId,
      currency: et.currency,
      metadata: ef
    }),
    [ez, eq] = (0, L.ED)({
      items: [{
        planId: Y.Xh.PREMIUM_MONTH_TIER_2,
        quantity: 1
      }],
      renewal: true,
      preventFetch: !ej,
      trialId: ec,
      paymentSourceId: et.paymentSourceId,
      currency: et.currency,
      metadata: ef
    }),
    [eX, eQ] = (0, L.o5)({
      paymentSourceId: et.paymentSourceId,
      skuId: eO,
      subscriptionPlanId: J,
      currency: et.currency,
      preventFetch: !ew || eB,
      loadId: eA.loadId
    }),
    eJ = ew && (0, R.pO)(eL),
    e$ = null != (a = null != (n = null != eY ? eY : eK) ? n : eq) ? a : eQ;
  i.useEffect(() => {
    eN(e$)
  }, [e$, eN]);
  let e0 = (0, u.e7)([T.Z], () => T.Z.enabled),
    e1 = et.paymentSourceId,
    e3 = (0, I.$)(ee, e1),
    {
      hasEntitlements: e2,
      entitlements: e4
    } = (0, V.H)(eU.id, ew),
    e8 = (0, P.Ap)(et.paymentSourceId),
    e5 = (0, O.sE)(ec, e1, J),
    e6 = (0, v.Kp)({
      isTrial: em,
      isGift: ew,
      selectedSkuId: eO,
      startedPaymentFlowWithPaymentSources: eT.current,
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
    tt = !e6 && te.isFractionalPremiumActive && Y.dJ.has(J),
    tn = i.useMemo(() => (0, P.V7)({
      skuId: eO,
      isPremium: eI,
      multiMonthPlans: [],
      currentSubscription: ey,
      defaultPlanId: ev
    }), [eO, ey, ev, eI]),
    tr = (0, v.$g)(e6, eH, eU),
    ti = i.useMemo(() => em && null != eH ? eH : eC && null != eW ? eW : true, [eC, em, eH, eW]);
  if (i.useEffect(() => {
      ew ? eS(eX) : eS(eH)
    }, [ew, eS, eX, eH]), null != e$);
  else if (ew && null != eX) Q = (0, r.jsx)(F.e9, {
    plan: eU,
    className: o()(q.invoice, eD),
    isPrepaidPaymentSource: e8,
    isCustomGift: eJ,
    invoicePreview: eX
  });
  else if (null != ti) Q = (0, r.jsxs)("div", {
    children: [(0, r.jsx)(k.UN, {
      negativeMarginTop: !eC
    }), (0, r.jsxs)(k.aO, {
      className: o()(q.invoice, eD),
      children: [(0, r.jsxs)("div", {
        className: q.trialPriceLine,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/bold",
          children: z.intl.string(z.t.txajQG)
        }), (0, r.jsx)(f.Text, {
          variant: "text-md/normal",
          children: z.intl.format(z.t.hXcaLT, {
            price: (0, D.T4)(0, ti.currency, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            })
          })
        })]
      }), (0, r.jsx)("div", {
        className: q.afterTrialPriceLine,
        children: (0, r.jsx)(F.yT, {
          invoice: ti,
          plan: eU
        })
      })]
    })]
  });
  else {
    if (null == eH || null == eW || tr) return (0, r.jsx)("div", {
      className: q.spinnerWrapper,
      children: (0, r.jsx)(f.$jN, {})
    });
    em && eH.subscriptionPeriodEnd !== eW.subscriptionPeriodEnd && (W = eH.subscriptionPeriodEnd), Q = (0, r.jsxs)(r.Fragment, {
      children: [tt && (0, r.jsx)(j.n, {
        fractionalPremiumInfo: te,
        enablePremiumBrandRefresh: eP
      }), (0, r.jsxs)(k.aO, {
        className: o()(q.invoice, eD),
        children: [(0, r.jsx)(k.Z9, {
          children: z.intl.string(z.t["2eh+Co"])
        }), (0, r.jsx)(F.Lu, {
          invoice: eH,
          newPlan: eU,
          isPrepaidPaymentSource: e8,
          referralTrialOfferId: eh
        }), e8 ? null : (0, r.jsx)(F.nd, {
          renewalInvoice: eW,
          isTrial: em,
          priceOptions: et,
          overrideRenewalDate: W,
          trialFooterMessageOverride: eu,
          hideSubscriptionDetails: ep
        })]
      })]
    })
  }
  let ta = c.M.EEA_COUNTRIES.has(S.Z.ipCountryCodeWithFallback),
    {
      checkboxLabel: to,
      checkboxClassname: ts,
      checkboxLabelClassname: tl
    } = X(null != em && em, eW, W),
    tc = z.intl.formatToPlainString(z.t["sBpy9/"], {
      planName: eU.name
    });
  ew && !eJ ? tc = z.intl.string(z.t.J5a0eb) : ew && eJ ? tc = "" : (0, P.PV)(eU.id) && (tc = P.ZP.getBillingReviewSubheader(null, eU));
  let tu = null != eV && eV.length > 0 && (e1 === C.c || null === e3) && eR ? B.w.SELECT_PAYMENT_METHOD : true;
  return e5 ? null : (0, r.jsxs)("div", {
    className: q.stepBody,
    children: [(0, r.jsx)(B.Y, {
      paymentRestrictionBannerType: tu
    }), null != ed && (0, r.jsxs)("div", {
      className: q.reviewWarningMessageContainer,
      children: [(0, r.jsx)(f.d3s, {
        size: "custom",
        color: d.Z.unsafe_rawColors.YELLOW_300.css,
        width: 20,
        height: 20
      }), (0, r.jsx)(f.Text, {
        className: q.reviewWarningMessage,
        variant: "text-sm/normal",
        children: ed
      })]
    }), e6 && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(k.UN, {
        negativeMarginTop: true,
        negativeMarginBottom: true
      }), (0, r.jsx)(M.Z, {}), (0, r.jsx)(Z.O, {
        planOptions: tn,
        eligibleForMultiMonthPlans: false,
        referralTrialOfferId: true,
        selectedPlanId: J,
        planGroup: $,
        subscriptionPeriodEnd: e7,
        showTotal: false,
        discountInvoiceItems: ej ? null == ez ? true : ez.invoiceItems : true,
        handleClose: eE
      }), (0, r.jsx)(k.UN, {})]
    }), eC && (0, r.jsx)(f.Heading, {
      variant: "heading-md/normal",
      color: "always-white",
      className: q.trialHeader,
      children: z.intl.format(z.t["7ZS2m1"], {
        trialEnd: null == ey ? true : ey.currentPeriodEnd
      })
    }), !em && "" !== tc && (0, r.jsx)(f.Heading, {
      variant: "heading-md/semibold",
      children: tc
    }), eJ && null != ex && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(G.Z, {
        defaultAnimationState: w.SR.LOOP,
        giftStyle: ex,
        shouldAnimate: true,
        className: q.giftMainAnimation
      }), (0, r.jsx)(H.s, {
        giftRecipient: eL
      })]
    }), Q, (0, r.jsxs)("div", {
      className: q.paymentSourceWrapper,
      children: [(0, r.jsx)(h.ZP, {
        label: em ? z.intl.string(z.t["YH7B+D"]) : z.intl.string(z.t["mmDvV+"]),
        paymentSources: Object.values(ee),
        selectedPaymentSourceId: e1,
        prependOption: e2 && !em ? {
          label: z.intl.string(z.t.IGU7El),
          value: null
        } : null,
        onChange: ei,
        onPaymentSourceAdd: ea,
        hidePersonalInformation: e0,
        isTrial: em,
        paymentGatewayRestrictions: eV,
        className: o()({
          [q.premiumBrandRefreshInputBackground]: eP
        })
      }), e2 && null == e1 ? (0, r.jsx)("div", {
        className: q.paymentSourceOptionalWarning,
        children: z.intl.format(z.t["2wPRSF"], {
          months: e4.length
        })
      }) : null, eg ? null : (0, r.jsx)(_.b, {
        currencies: en,
        className: q.currencyWrapper,
        children: (0, r.jsx)(_.Z, {
          label: z.intl.string(z.t["/AAR02"]),
          selectedCurrency: et.currency,
          currencies: en,
          onChange: er
        })
      })]
    }), (0, r.jsx)(U.Z, {
      isActive: el,
      ref: es,
      children: (0, r.jsx)(m.Z, {
        onChange: eo,
        forceShow: true,
        checkboxLabel: to,
        checkboxClassname: ts,
        checkboxLabelClassname: tl,
        finePrint: null != (s = !eC && eu) ? s : (0, r.jsx)(p.Z, {
          hide: em || eg,
          subscriptionPlan: eU,
          renewalInvoice: eW,
          isGift: ew,
          paymentSourceType: e3,
          isEmbeddedIAP: eb,
          basePrice: (0, P.aS)(eU.id, false, ew, et)
        }),
        showPricingLink: eU.currency !== K.pK.USD,
        showWithdrawalWaiver: ta,
        disabled: eB,
        isTrial: em && null == eu,
        inReverseTrial: eC,
        isDiscount: eg,
        subscriptionPlan: eU,
        isGift: ew
      })
    })]
  })
}
/** Chunk was on web.js **/
/** chunk id: 4434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CP: () => ed,
  Gq: () => e_,
  R7: () => ep
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk742280 = require("./742280.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk224550 = require("./224550.jsx"),
  Chunk490504 = require("./490504.jsx"),
  Chunk275850 = require("./275850.jsx"),
  Chunk672971 = require("./672971.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk435020 = require("./435020.js"),
  Chunk374649 = require("./374649.js"),
  Chunk591548 = require("./591548.js"),
  Chunk847903 = require("./847903.js"),
  Chunk639119 = require("./639119.js"),
  Chunk53900 = require("./53900.js"),
  Chunk811334 = require("./811334.jsx"),
  Chunk110818 = require("./110818.jsx"),
  Chunk553797 = require("./553797.jsx"),
  Chunk741245 = require("./741245.jsx"),
  Chunk346071 = require("./346071.jsx"),
  Chunk314182 = require("./314182.jsx"),
  Chunk42818 = require("./42818.jsx"),
  Chunk900683 = require("./900683.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk430824 = require("./430824.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk351402 = require("./351402.js"),
  Chunk853872 = require("./853872.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk267642 = require("./267642.js"),
  Chunk63063 = require("./63063.js"),
  Chunk930153 = require("./930153.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk588797 = require("./588797.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk540798 = require("./540798.js");

function en(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      en(e, t, n[t])
    })
  }
  return e
}

function ei(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ea(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ei(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eo = 1,
  es = 30;

function el(e) {
  let {
    amount: t,
    currency: n,
    intervalType: r,
    intervalCount: i = 1
  } = e, a = (0, q.T4)(t, n);
  return r === J.rV.YEAR ? ee.intl.formatToPlainString(ee.t["8M04YG"], {
    price: a
  }) : r === J.rV.MONTH && 1 === i ? ee.intl.formatToPlainString(ee.t.VStWCQ, {
    price: a
  }) : r === J.rV.MONTH && i > 1 ? ee.intl.formatToPlainString(ee.t.xJvAFR, {
    price: a
  }) : null
}

function ec(e) {
  let {
    intervalType: t,
    intervalCount: n = 1
  } = e;
  return t === J.rV.YEAR ? ee.intl.string(ee.t.YDpAzc) : t === J.rV.MONTH && 1 === n ? ee.intl.string(ee.t["6ZR3Bw"]) : null
}

function eu(e) {
  let {
    endDate: t,
    className: n
  } = e;
  return (0, r.jsxs)("div", {
    className: n,
    children: [(0, r.jsx)("div", {
      className: et.reverseTrialContextInfoDivider
    }), (0, r.jsx)(_.Text, {
      variant: "text-sm/normal",
      className: et.reverseTrialContextText,
      children: ee.intl.format(ee.t.IeaYqq, {
        endDate: t
      })
    }), (0, r.jsx)("div", {
      className: et.reverseTrialContextInfoDivider
    })]
  })
}

function ed(e) {
  var t, n;
  let {
    guildId: a,
    premiumSubscriptionPlan: s,
    numGuildBoosts: c,
    setNumGuildBoosts: f,
    setForceDisableSubmitButton: p,
    premiumSubscription: m,
    onClickPremiumSubscriptionLink: g,
    existingAvailableSlots: I = [],
    priceOptions: S
  } = e, {
    setInvoicePreview: R
  } = (0, v.JL)(), P = (0, N.Z)(), D = s.interval, L = s.intervalCount, j = (0, u.e7)([V.Z], () => V.Z.getForSkuAndInterval((0, z.Wz)(J.Si.GUILD), D, L)), G = (0, u.e7)([B.default], () => B.default.getCurrentUser()), Z = (0, u.e7)([U.Z], () => U.Z.getGuild(a), [a]), F = (0, y.Z)({
    forceFetch: false
  });
  l()(null != j, "Missing guildBoostingSubscriptionPlan"), l()(null != Z, "Unknown guild: ".concat(a));
  let en = [{
      planId: j.id,
      quantity: 1
    }],
    ei = null == m ? true : m.items.find(e => e.planId === J.Xh.PREMIUM_MONTH_TIER_2 || e.planId === J.Xh.PREMIUM_YEAR_TIER_2);
  null != ei && en.push(ei);
  let ed = null == m ? true : m.items.find(e => e.planId === J.Xh.PREMIUM_MONTH_GUILD || e.planId === J.Xh.PREMIUM_YEAR_GUILD),
    {
      enabled: ef
    } = X.Z.useExperiment({
      location: "32b64a_1"
    }),
    e_ = !ef || null == P || !J.Tp.has(P) || null == ed,
    {
      analyticsLocations: ep
    } = (0, b.ZP)(),
    [eh, em] = (0, T.ED)({
      subscriptionId: null == m ? true : m.id,
      items: en,
      renewal: true,
      paymentSourceId: null == m ? true : m.paymentSourceId,
      currency: S.currency,
      preventFetch: e_,
      analyticsLocations: ep,
      analyticsLocation: E.Z.GUILD_BOOSTING_PLAN_SELECT
    });
  i.useEffect(() => {
    R(eh)
  }, [R, eh]);
  let eg = !e_ && null == eh && null == em,
    eE = (null == (n = (0, C.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === J.Si.TIER_2,
    eb = z.ZP.hasBoostDiscount(G, F.fractionalState),
    ey = null == eh ? true : eh.findInvoiceItemByPlanId(j.id),
    eO = null != ey ? {
      amount: ey.amount,
      tax: 0,
      taxInclusive: true,
      currency: S.currency
    } : z.ZP.getPrice(j.id, eb, false, S),
    ev = c * eO.amount,
    eI = (0, u.e7)([H.Z], () => H.Z.inReverseTrial() && z.ZP.hasBoostDiscount(G, F.fractionalState) && null != m),
    eT = z.ZP.hasBoostDiscount(G, F.fractionalState) && null != m && z.ZP.getPremiumType(m.planId) === J.p9.TIER_2 ? ee.intl.format(ee.t.hf6YOT, {
      planName: z.ZP.getDisplayPremiumType(m.planId)
    }) : ee.intl.format(eE ? ee.t["ba1L7+"] : ee.t.fkffDQ, {
      onPremiumSubscriptionClick: g,
      discountPercentage: (0, K.T3)(k.default.locale, J.Rr / 100),
      freeSubscriptionCount: J.cb
    }),
    eS = I.filter(e => (0, Y.tl)(e)).length,
    eA = (0, z.Ap)(S.paymentSourceId),
    {
      ipCountryCode: eC
    } = (0, A.Z)(),
    eN = "HR" === eC && eO.currency === $.pK.EUR,
    eR = F.fractionalState === J.a$.FP_SUB_PAUSED;
  return p(eg), (0, r.jsxs)("div", {
    children: [eR && (0, r.jsx)(x.n, {
      fractionalPremiumInfo: F
    }), eI && null != m ? (0, r.jsx)(eu, {
      endDate: m.currentPeriodEnd
    }) : (0, r.jsx)("div", {
      className: o()(et.planSelectText, et.bodyText),
      children: ee.intl.string(ee.t.jNY1FB)
    }), I.length > 0 ? (0, r.jsxs)("div", {
      className: et.existingSlotNotice,
      children: [(0, r.jsx)(_.$Eu, {
        className: et.existingSlotIcon,
        color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, r.jsxs)("div", {
        children: [ee.intl.format(ee.t.F8xlho, {
          slotCount: I.length
        }), eS > 0 && null != m ? (0, r.jsx)(_.ua7, {
          text: ee.intl.formatToPlainString(ee.t.SFpsCA, {
            canceledCount: eS,
            date: m.currentPeriodEnd
          }),
          children: e => (0, r.jsx)(_.Mgn, ea(er({
            size: "custom",
            width: 20,
            height: 20
          }, e), {
            className: et.existingSlotTooltipWarningIcon,
            color: d.Z.unsafe_rawColors.YELLOW_300.css
          }))
        }) : null]
      })]
    }) : null, (0, r.jsxs)("div", {
      className: et.planSelectRow,
      children: [(0, r.jsxs)("div", {
        className: et.planSelectorWrapper,
        children: [(0, r.jsx)(_.FiK, {
          value: c,
          onChange: e => f(e),
          className: et.__invalid_planSelector,
          minValue: eo,
          maxValue: es
        }), (0, r.jsx)("div", {
          className: et.planSelectorLabel,
          children: eA ? ec({
            intervalType: D,
            intervalCount: L
          }) : ee.intl.string(ee.t.K9Bmzc)
        })]
      }), (0, r.jsx)("div", {
        className: o()(et.planSelectorPreviewPrice, {
          [et.loadingSpinner]: eg
        }),
        children: eg ? (0, r.jsx)(_.$jN, {}) : eA ? (0, q.T4)(eO.amount, eO.currency) : el({
          intervalType: D,
          intervalCount: L,
          amount: eO.amount,
          currency: eO.currency
        })
      })]
    }), (0, r.jsx)("div", {
      className: et.planSelectDivider
    }), (0, r.jsxs)("div", {
      className: et.planSelectRow,
      children: [(0, r.jsx)("div", {
        className: et.planSelectorSubtotal,
        children: ee.intl.string(ee.t.RtA7nZ)
      }), (0, r.jsx)("div", {
        className: o()(et.__invalid_planSelectorSubtotalPrice, {
          [et.loadingSpinner]: eg
        }),
        children: eg ? (0, r.jsx)(_.$jN, {}) : (0, r.jsx)(w.Z, {
          price: ev,
          currency: eO.currency,
          intervalType: D,
          intervalCount: L,
          isPrepaidPaymentSource: eA
        })
      })]
    }), eN && (0, r.jsx)(h.Z, {
      message: ee.intl.formatToPlainString(ee.t["9hnZoK"], {
        kunaPriceWithCurrency: (0, q.T4)(7.5345 * ev, $.pK.HRK)
      })
    }), (0, r.jsx)(h.Z, {
      message: ee.intl.format(ee.t.Om31w8, {
        documentationLink: W.Z.getArticleURL(Q.BhN.LOCALIZED_PRICING)
      })
    }), eI ? (0, r.jsx)(M.e, {}) : (0, r.jsx)(M.Z, {
      text: eT,
      color: O.JX.PREMIUM_TIER_2
    })]
  })
}

function ef(e) {
  let {
    premiumSubscription: t,
    premiumSubscriptionPlan: n,
    proratedInvoicePreview: i,
    renewalInvoicePreview: a,
    priceOptions: o
  } = e, s = n.interval, c = n.intervalCount, d = (0, u.e7)([V.Z], () => V.Z.getForSkuAndInterval((0, z.Wz)(J.Si.GUILD), s, c));
  l()(null != d, "Missing guildBoostingSubscriptionPlan");
  let f = e => (0, S.j)(i.invoiceItems).find(t => J.Z1.has(t.subscriptionPlanId) && e(t)),
    _ = f(e => e.amount >= 0);
  l()(null != _, "Missing guild boosting invoice item");
  let p = f(e => e.amount < 0),
    h = null != p ? _.quantity - p.quantity : _.quantity,
    m = i.invoiceItems.filter(e => (0, z.uZ)(e.subscriptionPlanId)),
    g = m.reduce((e, t) => e + t.amount, 0),
    E = (0, T.pV)(_) * h,
    b = (0, q.T4)(E, i.currency),
    y = (0, q.og)(b, s, c),
    O = (0, q.T4)(i.total, i.currency) + (i.currency !== $.pK.USD ? "*" : ""),
    v = i.total - E - g,
    I = _.discounts.map(e => {
      let t = e.amount / _.quantity;
      return ea(er({}, e), {
        amount: t * h
      })
    }),
    A = (0, z.Ap)(o.paymentSourceId),
    C = (0, u.e7)([H.Z], () => H.Z.inReverseTrial());
  return (0, r.jsxs)(r.Fragment, {
    children: [A ? null : C && null != t ? (0, r.jsx)(eu, {
      endDate: t.currentPeriodEnd,
      className: et.reverseTrialContextMarginBottom
    }) : (0, r.jsx)(j.hG, {
      proratedInvoice: i,
      renewalInvoice: a
    }), (0, r.jsxs)(R.aO, {
      children: [(0, r.jsx)(R.Z9, {
        children: ee.intl.string(ee.t.CWIwmp)
      }), (0, r.jsx)(R.i$, {
        label: ee.intl.formatToPlainString(ee.t.a3cAOj, {
          numGuildSubscriptions: h,
          planName: (0, z.Gf)(d.id, false, A)
        }),
        value: A ? b : y,
        discounts: I,
        originalAmount: _.subscriptionPlanPrice * h,
        currency: i.currency,
        interval: d.interval,
        intervalCount: d.intervalCount
      }), 0 !== g ? (0, r.jsx)(R.B1, {
        label: (0, r.jsx)(j.As, {
          label: ee.intl.formatToPlainString(ee.t.ZSVgeX, {
            planName: (0, z.aq)(m[0].subscriptionPlanId)
          }),
          tooltipText: ee.intl.string(ee.t.JmwQJC)
        }),
        value: (0, q.T4)(g, i.currency)
      }) : null, 0 !== v ? (0, r.jsx)(R.B1, {
        label: (0, r.jsx)(j.As, {
          label: ee.intl.string(ee.t["+as5ZW"]),
          tooltipText: ee.intl.string(ee.t.JmwQJC)
        }),
        value: (0, q.T4)(v, i.currency)
      }) : null, (0, r.jsx)(R.UN, {}), (0, r.jsx)(R.az, {
        label: ee.intl.format(i.taxInclusive ? A ? ee.t.BqdxQk : ee.t.XH4raG : ee.t.RUI48P, {}),
        value: O
      }), null != t ? (0, r.jsx)(j.nd, {
        premiumSubscription: t,
        proratedInvoice: i,
        renewalInvoice: a,
        isUpdate: true,
        isPrepaidPaymentSource: A,
        isTrial: C
      }) : (0, r.jsx)(j.nd, {
        renewalInvoice: a,
        priceOptions: o,
        isPrepaidPaymentSource: A
      })]
    })]
  })
}

function e_(e) {
  var t;
  let n, a, {
      paymentSources: o,
      priceOptions: s,
      currentPremiumSubscription: l,
      premiumSubscriptionPaymentSourceId: d,
      premiumSubscriptionPlan: h,
      newAdditionalPlans: y,
      onPaymentSourceChange: O,
      onPaymentSourceAdd: S,
      onPurchaseTermsChange: A,
      legalTermsNodeRef: C,
      hasLegalTermsFlash: N
    } = e,
    {
      setInvoicePreview: R
    } = (0, v.JL)(),
    P = s.paymentSourceId,
    w = (0, I.$)(o, P),
    D = (0, u.e7)([F.Z], () => null != d ? F.Z.getPaymentSource(d) : null),
    x = (0, u.e7)([G.Z], () => G.Z.hidePersonalInformation);
  n = null != l ? (0, z.Zx)(l, y[0].quantity, y[0].planId) : y;
  let {
    analyticsLocations: j
  } = (0, b.ZP)(), [M] = (0, T.ED)({
    subscriptionId: null == l ? true : l.id,
    items: n,
    renewal: false,
    applyEntitlements: true,
    paymentSourceId: P,
    currency: s.currency,
    analyticsLocations: j,
    analyticsLocation: E.Z.GUILD_BOOSTING_REVIEW_PRORATED
  }), [k] = (0, T.ED)({
    subscriptionId: null == l ? true : l.id,
    items: n,
    renewal: true,
    paymentSourceId: P,
    currency: s.currency,
    analyticsLocations: j,
    analyticsLocation: E.Z.GUILD_BOOSTING_REVIEW_RENEWAL
  }), U = k;
  null != U && (a = {
    amount: U.subtotal,
    currency: U.currency,
    tax: U.tax,
    taxInclusive: false
  });
  let B = c.M.EEA_COUNTRIES.has(Z.Z.ipCountryCodeWithFallback);
  return i.useEffect(() => {
    R(M)
  }, [R, M]), (0, r.jsxs)("div", {
    children: [null != M && null != k ? (0, r.jsx)(ef, {
      premiumSubscription: l,
      premiumSubscriptionPlan: h,
      proratedInvoicePreview: M,
      renewalInvoicePreview: k,
      priceOptions: s
    }) : null, (0, r.jsxs)("div", {
      className: et.paymentSourceWrapper,
      children: [(0, r.jsx)(_.vwX, {
        tag: _.RB0.H5,
        children: ee.intl.string(ee.t.mmDvV1)
      }), null != d ? null != D ? (0, r.jsx)(f.u, {
        asContainer: true,
        text: ee.intl.string(ee.t.XiuuV1),
        children: (0, r.jsx)(m.ZP, {
          paymentSources: [D],
          selectedPaymentSourceId: D.id,
          hidePersonalInformation: x,
          disabled: true
        })
      }) : (0, r.jsx)("div", {
        children: (0, r.jsx)(_.$jN, {})
      }) : (0, r.jsx)(m.ZP, {
        paymentSources: Object.values(o),
        selectedPaymentSourceId: P,
        onChange: O,
        onPaymentSourceAdd: S,
        hidePersonalInformation: x
      })]
    }), (0, r.jsx)(L.Z, {
      isActive: N,
      ref: C,
      children: null != a && (0, r.jsx)(g.Z, {
        onChange: A,
        forceShow: true,
        finePrint: (0, r.jsx)(p.Z, {
          subscriptionPlan: h,
          paymentSourceType: w,
          proratedAmount: null != M ? M.total : true,
          basePrice: a,
          productLine: Q.POd.BOOST
        }),
        showPricingLink: (null != (t = null == M ? true : M.currency) ? t : $.pK.USD) !== $.pK.USD,
        showWithdrawalWaiver: B,
        subscriptionPlan: h
      })
    })]
  })
}

function ep(e) {
  let t, {
      onClose: n,
      guild: a,
      guildBoostQuantity: o,
      isTransfer: s = false,
      withAnimation: l = true,
      paymentSourceType: c,
      didPurchaseOnFractionalPremium: u = false
    } = e,
    {
      theme: d
    } = (0, _.TCT)(),
    [f, p] = i.useState(P.fe.Scenes.ENTRY),
    [h, m] = i.useState(false);
  return t = s ? null == a ? ee.intl.format(ee.t.P52e1t, {}) : ee.intl.format(ee.t["4UnIk5"], {
    guildName: a.name
  }) : u ? ee.intl.format(ee.t.gFaKd3, {
    helpCenterLink: W.Z.getArticleURL(Q.BhN.FRACTIONAL_PREMIUM_ABOUT)
  }) : null == a ? ee.intl.format(ee.t.SZ5ohY, {
    guildSubscriptionQuantity: o
  }) : ee.intl.format(ee.t.GxK3Mj, {
    guildName: a.name,
    guildSubscriptionQuantity: o
  }), (0, r.jsxs)("div", {
    className: et.confirmationContainer,
    children: [l ? (0, r.jsx)(P.fe, {
      className: et.confirmationAnimation,
      nextScene: f,
      onScenePlay: e => {
        if (!h) switch (e) {
          case P.fe.Scenes.ENTRY:
            return p(P.fe.Scenes.IDLE);
          case P.fe.Scenes.IDLE:
            return p(P.fe.Scenes.SUCCESS);
          case P.fe.Scenes.SUCCESS:
            return m(true), p(P.fe.Scenes.IDLE)
        }
      },
      pauseWhileUnfocused: false
    }) : null, (0, r.jsx)(D.ZP, {
      className: et.confirmationUpgradedBanner,
      theme: d,
      premiumType: J.p9.TIER_2,
      type: $.X7.has(null != c ? c : $.He.UNKNOWN) ? D.ZP.Types.PREMIUM_PAYMENT_STARTED : D.ZP.Types.GUILD_BOOST_APPLIED
    }), (0, r.jsx)("div", {
      className: et.confirmationText,
      children: t
    }), (0, r.jsx)(_.zxk, {
      variant: "primary",
      text: ee.intl.string(ee.t["/iTxg4"]),
      onClick: n
    })]
  })
}
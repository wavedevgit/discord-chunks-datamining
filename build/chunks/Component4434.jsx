/** Chunk was on 22646 **/
/** chunk id: 4434, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  CP: () => el,
  Gq: () => ea,
  R7: () => es
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk742280 = require("./742280.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
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

function en(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = t[n], n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = i
    })
  }
  return e
}

function et(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t.push.apply(t, i)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function ei(e) {
  let {
    endDate: n,
    className: t
  } = e;
  return (0, i.jsxs)("div", {
    className: t,
    children: [(0, i.jsx)("div", {
      className: ee.reverseTrialContextInfoDivider
    }), (0, i.jsx)(m.Text, {
      variant: "text-sm/normal",
      className: ee.reverseTrialContextText,
      children: $.intl.format($.t.IeaYqq, {
        endDate: n
      })
    }), (0, i.jsx)("div", {
      className: ee.reverseTrialContextInfoDivider
    })]
  })
}

function el(e) {
  var n, t;
  let {
    guildId: r,
    premiumSubscriptionPlan: s,
    numGuildBoosts: o,
    setNumGuildBoosts: p,
    setForceDisableSubmitButton: v,
    premiumSubscription: x,
    onClickPremiumSubscriptionLink: j,
    existingAvailableSlots: b = [],
    priceOptions: E
  } = e, {
    setInvoicePreview: _
  } = (0, I.JL)(), C = (0, N.Z)(), D = s.interval, w = s.intervalCount, B = (0, u.e7)([F.Z], () => F.Z.getForSkuAndInterval((0, q.Wz)(J.Si.GUILD), D, w)), k = (0, u.e7)([M.default], () => M.default.getCurrentUser()), G = (0, u.e7)([A.Z], () => A.Z.getGuild(r), [r]), el = (0, y.Z)({
    forceFetch: false
  });
  c()(null != B, "Missing guildBoostingSubscriptionPlan"), c()(null != G, "Unknown guild: ".concat(r));
  let er = [{
      planId: B.id,
      quantity: 1
    }],
    ea = null == x ? true : x.items.find(e => e.planId === J.Xh.PREMIUM_MONTH_TIER_2 || e.planId === J.Xh.PREMIUM_YEAR_TIER_2);
  null != ea && er.push(ea);
  let es = null == x ? true : x.items.find(e => e.planId === J.Xh.PREMIUM_MONTH_GUILD || e.planId === J.Xh.PREMIUM_YEAR_GUILD),
    {
      enabled: ec
    } = X.Z.useExperiment({
      location: "32b64a_1"
    }),
    eo = !ec || null == C || !J.Tp.has(C) || null == es,
    {
      analyticsLocations: eu
    } = (0, P.ZP)(),
    [ed, em] = (0, h.ED)({
      subscriptionId: null == x ? true : x.id,
      items: er,
      renewal: true,
      paymentSourceId: null == x ? true : x.paymentSourceId,
      currency: E.currency,
      preventFetch: eo,
      analyticsLocations: eu,
      analyticsLocation: S.Z.GUILD_BOOSTING_PLAN_SELECT
    });
  l.useEffect(() => {
    _(ed)
  }, [_, ed]);
  let ep = !eo && null == ed && null == em,
    ef = (null == (t = (0, Z.N)()) || null == (n = t.subscription_trial) ? true : n.sku_id) === J.Si.TIER_2,
    ev = q.ZP.hasBoostDiscount(k, el.fractionalState),
    ex = null == ed ? true : ed.findInvoiceItemByPlanId(B.id),
    eS = null != ex ? {
      amount: ex.amount,
      tax: 0,
      taxInclusive: true,
      currency: E.currency
    } : q.ZP.getPrice(B.id, ev, false, E),
    eP = o * eS.amount,
    ey = (0, u.e7)([W.Z], () => W.Z.inReverseTrial() && q.ZP.hasBoostDiscount(k, el.fractionalState) && null != x),
    eg = q.ZP.hasBoostDiscount(k, el.fractionalState) && null != x && q.ZP.getPremiumType(x.planId) === J.p9.TIER_2 ? $.intl.format($.t.hf6YOT, {
      planName: q.ZP.getDisplayPremiumType(x.planId)
    }) : $.intl.format(ef ? $.t["ba1L7+"] : $.t.fkffDQ, {
      onPremiumSubscriptionClick: j,
      discountPercentage: (0, K.T3)(L.default.locale, J.Rr / 100),
      freeSubscriptionCount: J.cb
    }),
    eI = b.filter(e => (0, V.tl)(e)).length,
    ej = (0, q.Ap)(E.paymentSourceId),
    {
      ipCountryCode: eh
    } = (0, T.Z)(),
    eb = "HR" === eh && eS.currency === Q.pK.EUR,
    eT = el.fractionalState === J.a$.FP_SUB_PAUSED;
  return v(ep), (0, i.jsxs)("div", {
    children: [eT && (0, i.jsx)(R.n, {
      fractionalPremiumInfo: el
    }), ey && null != x ? (0, i.jsx)(ei, {
      endDate: x.currentPeriodEnd
    }) : (0, i.jsx)("div", {
      className: a()(ee.planSelectText, ee.bodyText),
      children: $.intl.string($.t.jNY1FB)
    }), b.length > 0 ? (0, i.jsxs)("div", {
      className: ee.existingSlotNotice,
      children: [(0, i.jsx)(m.$Eu, {
        className: ee.existingSlotIcon,
        color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, i.jsxs)("div", {
        children: [$.intl.format($.t.F8xlho, {
          slotCount: b.length
        }), eI > 0 && null != x ? (0, i.jsx)(m.ua7, {
          text: $.intl.formatToPlainString($.t.SFpsCA, {
            canceledCount: eI,
            date: x.currentPeriodEnd
          }),
          children: e => (0, i.jsx)(m.Mgn, et(en({
            size: "custom",
            width: 20,
            height: 20
          }, e), {
            className: ee.existingSlotTooltipWarningIcon,
            color: d.Z.unsafe_rawColors.YELLOW_300.css
          }))
        }) : null]
      })]
    }) : null, (0, i.jsxs)("div", {
      className: ee.planSelectRow,
      children: [(0, i.jsxs)("div", {
        className: ee.planSelectorWrapper,
        children: [(0, i.jsx)(m.FiK, {
          value: o,
          onChange: e => p(e),
          className: ee.__invalid_planSelector,
          minValue: 1,
          maxValue: 30
        }), (0, i.jsx)("div", {
          className: ee.planSelectorLabel,
          children: ej ? function(e) {
            let {
              intervalType: n,
              intervalCount: t = 1
            } = e;
            return n === J.rV.YEAR ? $.intl.string($.t.YDpAzc) : n === J.rV.MONTH && 1 === t ? $.intl.string($.t["6ZR3Bw"]) : null
          }({
            intervalType: D,
            intervalCount: w
          }) : $.intl.string($.t.K9Bmzc)
        })]
      }), (0, i.jsx)("div", {
        className: a()(ee.planSelectorPreviewPrice, {
          [ee.loadingSpinner]: ep
        }),
        children: ep ? (0, i.jsx)(m.$jN, {}) : ej ? (0, H.T4)(eS.amount, eS.currency) : function(e) {
          let {
            amount: n,
            currency: t,
            intervalType: i,
            intervalCount: l = 1
          } = e, r = (0, H.T4)(n, t);
          return i === J.rV.YEAR ? $.intl.formatToPlainString($.t["8M04YG"], {
            price: r
          }) : i === J.rV.MONTH && 1 === l ? $.intl.formatToPlainString($.t.VStWCQ, {
            price: r
          }) : i === J.rV.MONTH && l > 1 ? $.intl.formatToPlainString($.t.xJvAFR, {
            price: r
          }) : null
        }({
          intervalType: D,
          intervalCount: w,
          amount: eS.amount,
          currency: eS.currency
        })
      })]
    }), (0, i.jsx)("div", {
      className: ee.planSelectDivider
    }), (0, i.jsxs)("div", {
      className: ee.planSelectRow,
      children: [(0, i.jsx)("div", {
        className: ee.planSelectorSubtotal,
        children: $.intl.string($.t.RtA7nZ)
      }), (0, i.jsx)("div", {
        className: a()(ee.__invalid_planSelectorSubtotalPrice, {
          [ee.loadingSpinner]: ep
        }),
        children: ep ? (0, i.jsx)(m.$jN, {}) : (0, i.jsx)(O.Z, {
          price: eP,
          currency: eS.currency,
          intervalType: D,
          intervalCount: w,
          isPrepaidPaymentSource: ej
        })
      })]
    }), eb && (0, i.jsx)(f.Z, {
      message: $.intl.formatToPlainString($.t["9hnZoK"], {
        kunaPriceWithCurrency: (0, H.T4)(7.5345 * eP, Q.pK.HRK)
      })
    }), (0, i.jsx)(f.Z, {
      message: $.intl.format($.t.Om31w8, {
        documentationLink: Y.Z.getArticleURL(z.BhN.LOCALIZED_PRICING)
      })
    }), ey ? (0, i.jsx)(U.e, {}) : (0, i.jsx)(U.Z, {
      text: eg,
      color: g.JX.PREMIUM_TIER_2
    })]
  })
}

function er(e) {
  let {
    premiumSubscription: n,
    premiumSubscriptionPlan: t,
    proratedInvoicePreview: l,
    renewalInvoicePreview: r,
    priceOptions: a
  } = e, s = t.interval, o = t.intervalCount, d = (0, u.e7)([F.Z], () => F.Z.getForSkuAndInterval((0, q.Wz)(J.Si.GUILD), s, o));
  c()(null != d, "Missing guildBoostingSubscriptionPlan");
  let m = e => (0, b.j)(l.invoiceItems).find(n => J.Z1.has(n.subscriptionPlanId) && e(n)),
    p = m(e => e.amount >= 0);
  c()(null != p, "Missing guild boosting invoice item");
  let f = m(e => e.amount < 0),
    v = null != f ? p.quantity - f.quantity : p.quantity,
    x = l.invoiceItems.filter(e => (0, q.uZ)(e.subscriptionPlanId)),
    S = x.reduce((e, n) => e + n.amount, 0),
    P = (0, h.pV)(p) * v,
    y = (0, H.T4)(P, l.currency),
    g = (0, H.og)(y, s, o),
    I = (0, H.T4)(l.total, l.currency) + (l.currency !== Q.pK.USD ? "*" : ""),
    j = l.total - P - S,
    T = p.discounts.map(e => {
      let n = e.amount / p.quantity;
      return et(en({}, e), {
        amount: n * v
      })
    }),
    Z = (0, q.Ap)(a.paymentSourceId),
    N = (0, u.e7)([W.Z], () => W.Z.inReverseTrial());
  return (0, i.jsxs)(i.Fragment, {
    children: [Z ? null : N && null != n ? (0, i.jsx)(ei, {
      endDate: n.currentPeriodEnd,
      className: ee.reverseTrialContextMarginBottom
    }) : (0, i.jsx)(w.hG, {
      proratedInvoice: l,
      renewalInvoice: r
    }), (0, i.jsxs)(E.aO, {
      children: [(0, i.jsx)(E.Z9, {
        children: $.intl.string($.t.CWIwmp)
      }), (0, i.jsx)(E.i$, {
        label: $.intl.formatToPlainString($.t.a3cAOj, {
          numGuildSubscriptions: v,
          planName: (0, q.Gf)(d.id, false, Z)
        }),
        value: Z ? y : g,
        discounts: T,
        originalAmount: p.subscriptionPlanPrice * v,
        currency: l.currency,
        interval: d.interval,
        intervalCount: d.intervalCount
      }), 0 !== S ? (0, i.jsx)(E.B1, {
        label: (0, i.jsx)(w.As, {
          label: $.intl.formatToPlainString($.t.ZSVgeX, {
            planName: (0, q.aq)(x[0].subscriptionPlanId)
          }),
          tooltipText: $.intl.string($.t.JmwQJC)
        }),
        value: (0, H.T4)(S, l.currency)
      }) : null, 0 !== j ? (0, i.jsx)(E.B1, {
        label: (0, i.jsx)(w.As, {
          label: $.intl.string($.t["+as5ZW"]),
          tooltipText: $.intl.string($.t.JmwQJC)
        }),
        value: (0, H.T4)(j, l.currency)
      }) : null, (0, i.jsx)(E.UN, {}), (0, i.jsx)(E.az, {
        label: $.intl.format(l.taxInclusive ? Z ? $.t.BqdxQk : $.t.XH4raG : $.t.RUI48P, {}),
        value: I
      }), null != n ? (0, i.jsx)(w.nd, {
        premiumSubscription: n,
        proratedInvoice: l,
        renewalInvoice: r,
        isUpdate: true,
        isPrepaidPaymentSource: Z,
        isTrial: N
      }) : (0, i.jsx)(w.nd, {
        renewalInvoice: r,
        priceOptions: a,
        isPrepaidPaymentSource: Z
      })]
    })]
  })
}

function ea(e) {
  var n;
  let t, r, {
      paymentSources: a,
      priceOptions: s,
      currentPremiumSubscription: c,
      premiumSubscriptionPaymentSourceId: d,
      premiumSubscriptionPlan: f,
      newAdditionalPlans: y,
      onPaymentSourceChange: g,
      onPaymentSourceAdd: b,
      onPurchaseTermsChange: T,
      legalTermsNodeRef: Z,
      hasLegalTermsFlash: N
    } = e,
    {
      setInvoicePreview: E
    } = (0, I.JL)(),
    _ = s.paymentSourceId,
    O = (0, j.$)(a, _),
    C = (0, u.e7)([G.Z], () => null != d ? G.Z.getPaymentSource(d) : null),
    R = (0, u.e7)([B.Z], () => B.Z.hidePersonalInformation);
  t = null != c ? (0, q.Zx)(c, y[0].quantity, y[0].planId) : y;
  let {
    analyticsLocations: w
  } = (0, P.ZP)(), [U] = (0, h.ED)({
    subscriptionId: null == c ? true : c.id,
    items: t,
    renewal: false,
    applyEntitlements: true,
    paymentSourceId: _,
    currency: s.currency,
    analyticsLocations: w,
    analyticsLocation: S.Z.GUILD_BOOSTING_REVIEW_PRORATED
  }), [L] = (0, h.ED)({
    subscriptionId: null == c ? true : c.id,
    items: t,
    renewal: true,
    paymentSourceId: _,
    currency: s.currency,
    analyticsLocations: w,
    analyticsLocation: S.Z.GUILD_BOOSTING_REVIEW_RENEWAL
  });
  null != L && (r = {
    amount: L.subtotal,
    currency: L.currency,
    tax: L.tax,
    taxInclusive: false
  });
  let A = o.M.EEA_COUNTRIES.has(k.Z.ipCountryCodeWithFallback);
  return l.useEffect(() => {
    E(U)
  }, [E, U]), (0, i.jsxs)("div", {
    children: [null != U && null != L ? (0, i.jsx)(er, {
      premiumSubscription: c,
      premiumSubscriptionPlan: f,
      proratedInvoicePreview: U,
      renewalInvoicePreview: L,
      priceOptions: s
    }) : null, (0, i.jsxs)("div", {
      className: ee.paymentSourceWrapper,
      children: [(0, i.jsx)(m.vwX, {
        tag: m.RB0.H5,
        children: $.intl.string($.t.mmDvV1)
      }), null != d ? null != C ? (0, i.jsx)(m.DY3, {
        text: $.intl.string($.t.XiuuV1),
        children: (0, i.jsx)(v.ZP, {
          paymentSources: [C],
          selectedPaymentSourceId: C.id,
          hidePersonalInformation: R,
          disabled: true
        })
      }) : (0, i.jsx)("div", {
        children: (0, i.jsx)(m.$jN, {})
      }) : (0, i.jsx)(v.ZP, {
        paymentSources: Object.values(a),
        selectedPaymentSourceId: _,
        onChange: g,
        onPaymentSourceAdd: b,
        hidePersonalInformation: R
      })]
    }), (0, i.jsx)(D.Z, {
      isActive: N,
      ref: Z,
      children: null != r && (0, i.jsx)(x.Z, {
        onChange: T,
        forceShow: true,
        finePrint: (0, i.jsx)(p.Z, {
          subscriptionPlan: f,
          paymentSourceType: O,
          proratedAmount: null != U ? U.total : true,
          basePrice: r,
          productLine: z.POd.BOOST
        }),
        showPricingLink: (null != (n = null == U ? true : U.currency) ? n : Q.pK.USD) !== Q.pK.USD,
        showWithdrawalWaiver: A,
        subscriptionPlan: f
      })
    })]
  })
}

function es(e) {
  let n, {
      onClose: t,
      guild: r,
      guildBoostQuantity: a,
      isTransfer: s = false,
      withAnimation: c = true,
      paymentSourceType: o,
      didPurchaseOnFractionalPremium: u = false
    } = e,
    {
      theme: d
    } = (0, m.TCT)(),
    [p, f] = l.useState(_.fe.Scenes.ENTRY),
    [v, x] = l.useState(false);
  return n = s ? null == r ? $.intl.format($.t.P52e1t, {}) : $.intl.format($.t["4UnIk5"], {
    guildName: r.name
  }) : u ? $.intl.format($.t.gFaKd3, {
    helpCenterLink: Y.Z.getArticleURL(z.BhN.FRACTIONAL_PREMIUM_ABOUT)
  }) : null == r ? $.intl.format($.t.SZ5ohY, {
    guildSubscriptionQuantity: a
  }) : $.intl.format($.t.GxK3Mj, {
    guildName: r.name,
    guildSubscriptionQuantity: a
  }), (0, i.jsxs)("div", {
    className: ee.confirmationContainer,
    children: [c ? (0, i.jsx)(_.fe, {
      className: ee.confirmationAnimation,
      nextScene: p,
      onScenePlay: e => {
        if (!v) switch (e) {
          case _.fe.Scenes.ENTRY:
            return f(_.fe.Scenes.IDLE);
          case _.fe.Scenes.IDLE:
            return f(_.fe.Scenes.SUCCESS);
          case _.fe.Scenes.SUCCESS:
            return x(true), f(_.fe.Scenes.IDLE)
        }
      },
      pauseWhileUnfocused: false
    }) : null, (0, i.jsx)(C.ZP, {
      className: ee.confirmationUpgradedBanner,
      theme: d,
      premiumType: J.p9.TIER_2,
      type: Q.X7.has(null != o ? o : Q.He.UNKNOWN) ? C.ZP.Types.PREMIUM_PAYMENT_STARTED : C.ZP.Types.GUILD_BOOST_APPLIED
    }), (0, i.jsx)("div", {
      className: ee.confirmationText,
      children: n
    }), (0, i.jsx)(m.zxk, {
      variant: "primary",
      text: $.intl.string($.t["/iTxg4"]),
      onClick: t
    })]
  })
}
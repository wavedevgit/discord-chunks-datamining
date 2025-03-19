/** Chunk was on 22646 **/
t.d(n, {
  CP: () => et,
  Gq: () => er,
  R7: () => el
}), t(653041), t(47120);
var i = t(200651),
  r = t(192379),
  l = t(120356),
  a = t.n(l),
  s = t(512722),
  c = t.n(s),
  o = t(742280),
  u = t(442837),
  d = t(692547),
  p = t(481060),
  m = t(224550),
  v = t(490504),
  x = t(275850),
  S = t(672971),
  P = t(100527),
  y = t(906732),
  I = t(975298),
  N = t(436774),
  f = t(374649),
  j = t(591548),
  g = t(847903),
  h = t(639119),
  T = t(53900),
  b = t(653798),
  Z = t(110818),
  O = t(553797),
  E = t(741245),
  W = t(314182),
  _ = t(42818),
  C = t(900683),
  R = t(706454),
  D = t(430824),
  w = t(246946),
  U = t(594174),
  L = t(351402),
  A = t(853872),
  M = t(509545),
  G = t(78839),
  k = t(709586),
  B = t(267642),
  Y = t(63063),
  V = t(930153),
  K = t(74538),
  q = t(937615),
  F = t(588797),
  H = t(981631),
  X = t(474936),
  J = t(231338),
  Q = t(388032),
  z = t(138575);

function $(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = t[n], n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[n] = i
    })
  }
  return e
}

function ee(e, n) {
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

function en(e) {
  let {
    endDate: n,
    className: t
  } = e;
  return (0, i.jsxs)("div", {
    className: t,
    children: [(0, i.jsx)("div", {
      className: z.reverseTrialContextInfoDivider
    }), (0, i.jsx)(p.Text, {
      variant: "text-sm/normal",
      className: z.reverseTrialContextText,
      children: Q.NW.format(Q.t.IeaYqq, {
        endDate: n
      })
    }), (0, i.jsx)("div", {
      className: z.reverseTrialContextInfoDivider
    })]
  })
}

function et(e) {
  var n, t;
  let {
    guildId: r,
    premiumSubscriptionPlan: l,
    numGuildBoosts: s,
    setNumGuildBoosts: o,
    setForceDisableSubmitButton: m,
    premiumSubscription: x,
    onClickPremiumSubscriptionLink: S,
    existingAvailableSlots: j = [],
    priceOptions: b
  } = e, Z = (0, T.Z)(), E = l.interval, W = l.intervalCount, _ = (0, u.e7)([M.Z], () => M.Z.getForSkuAndInterval((0, K.Wz)(X.Si.GUILD), E, W)), w = (0, u.e7)([U.default], () => U.default.getCurrentUser()), L = (0, u.e7)([D.Z], () => D.Z.getGuild(r), [r]), {
    fractionalState: A
  } = (0, I.Z)({
    forceFetch: !1
  });
  c()(null != _, "Missing guildBoostingSubscriptionPlan"), c()(null != L, "Unknown guild: ".concat(r));
  let et = [{
      planId: _.id,
      quantity: 1
    }],
    ei = null == x ? void 0 : x.items.find(e => e.planId === X.Xh.PREMIUM_MONTH_TIER_2 || e.planId === X.Xh.PREMIUM_YEAR_TIER_2);
  null != ei && et.push(ei);
  let er = null == x ? void 0 : x.items.find(e => e.planId === X.Xh.PREMIUM_MONTH_GUILD || e.planId === X.Xh.PREMIUM_YEAR_GUILD),
    {
      enabled: el
    } = F.Z.useExperiment({
      location: "32b64a_1"
    }),
    ea = !el || null == Z || !X.Tp.has(Z) || null == er,
    {
      analyticsLocations: es
    } = (0, y.ZP)(),
    [ec, eo] = (0, f.ED)({
      subscriptionId: null == x ? void 0 : x.id,
      items: et,
      renewal: !0,
      paymentSourceId: null == x ? void 0 : x.paymentSourceId,
      currency: b.currency,
      preventFetch: ea,
      analyticsLocations: es,
      analyticsLocation: P.Z.GUILD_BOOSTING_PLAN_SELECT
    }),
    eu = !ea && null == ec && null == eo,
    ed = (null === (t = (0, h.N)()) || void 0 === t ? void 0 : null === (n = t.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === X.Si.TIER_2,
    ep = K.ZP.hasBoostDiscount(w, A) && null != _.premiumUserPrice,
    em = null == ec ? void 0 : ec.invoiceItems.find(e => e.subscriptionPlanId === _.id),
    ev = null != em ? {
      amount: em.amount,
      tax: 0,
      taxInclusive: !0,
      currency: b.currency
    } : K.ZP.getPrice(_.id, ep, !1, b),
    ex = s * ev.amount,
    eS = (0, u.e7)([G.ZP], () => G.ZP.inReverseTrial() && K.ZP.hasBoostDiscount(w, A) && null != x),
    eP = K.ZP.hasBoostDiscount(w, A) && null != x && K.ZP.getPremiumType(x.planId) === X.p9.TIER_2 ? Q.NW.format(Q.t.hf6YOT, {
      planName: K.ZP.getDisplayPremiumType(x.planId)
    }) : Q.NW.format(ed ? Q.t["ba1L7+"] : Q.t.fkffDQ, {
      onPremiumSubscriptionClick: S,
      discountPercentage: (0, V.T3)(R.default.locale, X.Rr / 100),
      freeSubscriptionCount: X.cb
    }),
    ey = j.filter(e => (0, B.tl)(e)).length,
    eI = (0, K.Ap)(b.paymentSourceId),
    {
      ipCountryCode: eN
    } = (0, g.Z)(),
    ef = "HR" === eN && ev.currency === J.pK.EUR;
  return m(eu), (0, i.jsxs)("div", {
    children: [eS && null != x ? (0, i.jsx)(en, {
      endDate: x.currentPeriodEnd
    }) : (0, i.jsx)("div", {
      className: a()(z.planSelectText, z.bodyText),
      children: Q.NW.string(Q.t.jNY1FB)
    }), j.length > 0 ? (0, i.jsxs)("div", {
      className: z.existingSlotNotice,
      children: [(0, i.jsx)(k.Z, {
        className: z.existingSlotIcon,
        color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
      }), (0, i.jsxs)("div", {
        children: [Q.NW.format(Q.t.F8xlho, {
          slotCount: j.length
        }), ey > 0 && null != x ? (0, i.jsx)(p.ua7, {
          text: Q.NW.formatToPlainString(Q.t.SFpsCA, {
            canceledCount: ey,
            date: x.currentPeriodEnd
          }),
          children: e => (0, i.jsx)(p.P4T, ee($({
            size: "custom",
            width: 20,
            height: 20
          }, e), {
            className: z.existingSlotTooltipWarningIcon,
            color: d.Z.unsafe_rawColors.YELLOW_300.css
          }))
        }) : null]
      })]
    }) : null, (0, i.jsxs)("div", {
      className: z.planSelectRow,
      children: [(0, i.jsxs)("div", {
        className: z.planSelectorWrapper,
        children: [(0, i.jsx)(p.FiK, {
          value: s,
          onChange: e => o(e),
          className: z.__invalid_planSelector,
          minValue: 1,
          maxValue: 30
        }), (0, i.jsx)("div", {
          className: z.planSelectorLabel,
          children: eI ? function(e) {
            let {
              intervalType: n,
              intervalCount: t = 1
            } = e;
            return n === X.rV.YEAR ? Q.NW.string(Q.t.YDpAzc) : n === X.rV.MONTH && 1 === t ? Q.NW.string(Q.t["6ZR3Bw"]) : null
          }({
            intervalType: E,
            intervalCount: W
          }) : Q.NW.string(Q.t.K9Bmzc)
        })]
      }), (0, i.jsx)("div", {
        className: a()(z.planSelectorPreviewPrice, {
          [z.loadingSpinner]: eu
        }),
        children: eu ? (0, i.jsx)(p.$jN, {}) : eI ? (0, q.T4)(ev.amount, ev.currency) : function(e) {
          let {
            amount: n,
            currency: t,
            intervalType: i,
            intervalCount: r = 1
          } = e, l = (0, q.T4)(n, t);
          return i === X.rV.YEAR ? Q.NW.formatToPlainString(Q.t["8M04YG"], {
            price: l
          }) : i === X.rV.MONTH && 1 === r ? Q.NW.formatToPlainString(Q.t.VStWCQ, {
            price: l
          }) : i === X.rV.MONTH && r > 1 ? Q.NW.formatToPlainString(Q.t.xJvAFR, {
            price: l
          }) : null
        }({
          intervalType: E,
          intervalCount: W,
          amount: ev.amount,
          currency: ev.currency
        })
      })]
    }), (0, i.jsx)("div", {
      className: z.planSelectDivider
    }), (0, i.jsxs)("div", {
      className: z.planSelectRow,
      children: [(0, i.jsx)("div", {
        className: z.planSelectorSubtotal,
        children: Q.NW.string(Q.t.RtA7nZ)
      }), (0, i.jsx)("div", {
        className: a()(z.__invalid_planSelectorSubtotalPrice, {
          [z.loadingSpinner]: eu
        }),
        children: eu ? (0, i.jsx)(p.$jN, {}) : (0, i.jsx)(O.Z, {
          price: ex,
          currency: ev.currency,
          intervalType: E,
          intervalCount: W,
          isPrepaidPaymentSource: eI
        })
      })]
    }), ef && (0, i.jsx)(v.Z, {
      message: Q.NW.formatToPlainString(Q.t["9hnZoK"], {
        kunaPriceWithCurrency: (0, q.T4)(7.5345 * ex, J.pK.HRK)
      })
    }), (0, i.jsx)(v.Z, {
      message: Q.NW.format(Q.t.Om31w8, {
        documentationLink: Y.Z.getArticleURL(H.BhN.LOCALIZED_PRICING)
      })
    }), eS ? (0, i.jsx)(C.e, {}) : (0, i.jsx)(C.Z, {
      text: eP,
      color: N.JX.PREMIUM_TIER_2
    })]
  })
}

function ei(e) {
  let {
    premiumSubscription: n,
    premiumSubscriptionPlan: t,
    proratedInvoicePreview: r,
    renewalInvoicePreview: l,
    priceOptions: a
  } = e, s = t.interval, o = t.intervalCount, d = (0, u.e7)([M.Z], () => M.Z.getForSkuAndInterval((0, K.Wz)(X.Si.GUILD), s, o));
  c()(null != d, "Missing guildBoostingSubscriptionPlan");
  let p = e => (0, j.j)(r.invoiceItems).find(n => X.Z1.has(n.subscriptionPlanId) && e(n)),
    m = p(e => e.amount >= 0);
  c()(null != m, "Missing guild boosting invoice item");
  let v = p(e => e.amount < 0),
    x = null != v ? m.quantity - v.quantity : m.quantity,
    S = r.invoiceItems.filter(e => (0, K.uZ)(e.subscriptionPlanId)),
    P = S.reduce((e, n) => e + n.amount, 0),
    y = (0, f.pV)(m) * x,
    I = (0, q.T4)(y, r.currency),
    N = (0, q.og)(I, s, o),
    g = (0, q.T4)(r.total, r.currency) + (r.currency !== J.pK.USD ? "*" : ""),
    h = r.total - y - P,
    T = m.discounts.map(e => {
      let n = e.amount / m.quantity;
      return ee($({}, e), {
        amount: n * x
      })
    }),
    Z = (0, K.Ap)(a.paymentSourceId),
    O = (0, u.e7)([G.ZP], () => G.ZP.inReverseTrial());
  return (0, i.jsxs)(i.Fragment, {
    children: [Z ? null : O && null != n ? (0, i.jsx)(en, {
      endDate: n.currentPeriodEnd,
      className: z.reverseTrialContextMarginBottom
    }) : (0, i.jsx)(_.hG, {
      proratedInvoice: r,
      renewalInvoice: l
    }), (0, i.jsxs)(b.PO, {
      children: [(0, i.jsx)(b.q9, {
        children: Q.NW.string(Q.t.CWIwmp)
      }), (0, i.jsx)(b.i$, {
        label: Q.NW.formatToPlainString(Q.t.a3cAOj, {
          numGuildSubscriptions: x,
          planName: (0, K.Gf)(d.id, !1, Z)
        }),
        value: Z ? I : N,
        discounts: T,
        originalAmount: m.subscriptionPlanPrice * x,
        currency: r.currency,
        interval: d.interval,
        intervalCount: d.intervalCount
      }), 0 !== P ? (0, i.jsx)(b.R$, {
        label: (0, i.jsx)(_.As, {
          label: Q.NW.formatToPlainString(Q.t.ZSVgeX, {
            planName: (0, K.aq)(S[0].subscriptionPlanId)
          }),
          tooltipText: Q.NW.string(Q.t.JmwQJC)
        }),
        value: (0, q.T4)(P, r.currency)
      }) : null, 0 !== h ? (0, i.jsx)(b.R$, {
        label: (0, i.jsx)(_.As, {
          label: Q.NW.string(Q.t["+as5ZW"]),
          tooltipText: Q.NW.string(Q.t.JmwQJC)
        }),
        value: (0, q.T4)(h, r.currency)
      }) : null, (0, i.jsx)(b.KU, {}), (0, i.jsx)(b.Ji, {
        label: Q.NW.format(r.taxInclusive ? Z ? Q.t.BqdxQk : Q.t.XH4raG : Q.t.RUI48P, {}),
        value: g
      }), null != n ? (0, i.jsx)(_.nd, {
        premiumSubscription: n,
        proratedInvoice: r,
        renewalInvoice: l,
        isUpdate: !0,
        isPrepaidPaymentSource: Z,
        isTrial: O
      }) : (0, i.jsx)(_.nd, {
        renewalInvoice: l,
        priceOptions: a,
        isPrepaidPaymentSource: Z
      })]
    })]
  })
}

function er(e) {
  var n, t;
  let r, l, {
      paymentSources: a,
      priceOptions: s,
      currentPremiumSubscription: c,
      premiumSubscriptionPaymentSourceId: d,
      premiumSubscriptionPlan: v,
      newAdditionalPlans: I,
      onPaymentSourceChange: N,
      onPaymentSourceAdd: j,
      onPurchaseTermsChange: g,
      legalTermsNodeRef: h,
      hasLegalTermsFlash: T
    } = e,
    b = s.paymentSourceId,
    Z = (0, u.e7)([A.Z], () => null != d ? A.Z.getPaymentSource(d) : null),
    O = (0, u.e7)([w.Z], () => w.Z.hidePersonalInformation);
  r = null != c ? (0, K.Zx)(c, I[0].quantity, I[0].planId) : I;
  let {
    analyticsLocations: E
  } = (0, y.ZP)(), [_] = (0, f.ED)({
    subscriptionId: null == c ? void 0 : c.id,
    items: r,
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: b,
    currency: s.currency,
    analyticsLocations: E,
    analyticsLocation: P.Z.GUILD_BOOSTING_REVIEW_PRORATED
  }), [C] = (0, f.ED)({
    subscriptionId: null == c ? void 0 : c.id,
    items: r,
    renewal: !0,
    paymentSourceId: b,
    currency: s.currency,
    analyticsLocations: E,
    analyticsLocation: P.Z.GUILD_BOOSTING_REVIEW_RENEWAL
  });
  null != C && (l = {
    amount: C.total,
    currency: C.currency,
    tax: C.tax,
    taxInclusive: C.taxInclusive
  });
  let R = o.M.EEA_COUNTRIES.has(L.Z.ipCountryCodeWithFallback);
  return (0, i.jsxs)("div", {
    children: [null != _ && null != C ? (0, i.jsx)(ei, {
      premiumSubscription: c,
      premiumSubscriptionPlan: v,
      proratedInvoicePreview: _,
      renewalInvoicePreview: C,
      priceOptions: s
    }) : null, (0, i.jsxs)("div", {
      className: z.paymentSourceWrapper,
      children: [(0, i.jsx)(p.vwX, {
        tag: p.RB0.H5,
        children: Q.NW.string(Q.t.mmDvV1)
      }), null != d ? null != Z ? (0, i.jsx)(p.DY3, {
        text: Q.NW.string(Q.t.XiuuV1),
        children: (0, i.jsx)(x.Z, {
          paymentSources: [Z],
          selectedPaymentSourceId: Z.id,
          hidePersonalInformation: O,
          disabled: !0
        })
      }) : (0, i.jsx)("div", {
        children: (0, i.jsx)(p.$jN, {})
      }) : (0, i.jsx)(x.Z, {
        paymentSources: Object.values(a),
        selectedPaymentSourceId: b,
        onChange: N,
        onPaymentSourceAdd: j,
        hidePersonalInformation: O
      })]
    }), (0, i.jsx)(W.Z, {
      isActive: T,
      ref: h,
      children: null != l && (0, i.jsx)(S.Z, {
        onChange: g,
        forceShow: !0,
        finePrint: (0, i.jsx)(m.Z, {
          subscriptionPlan: v,
          paymentSourceType: null === (n = a[null != b ? b : ""]) || void 0 === n ? void 0 : n.type,
          basePrice: l,
          productLine: H.POd.BOOST
        }),
        showPricingLink: (null !== (t = null == _ ? void 0 : _.currency) && void 0 !== t ? t : J.pK.USD) !== J.pK.USD,
        showWithdrawalWaiver: R,
        subscriptionPlan: v
      })
    })]
  })
}

function el(e) {
  let n, {
      onClose: t,
      guild: l,
      guildBoostQuantity: a,
      isTransfer: s = !1,
      withAnimation: c = !0,
      paymentSourceType: o
    } = e,
    {
      theme: u
    } = (0, p.TCT)(),
    [d, m] = r.useState(Z.fe.Scenes.ENTRY),
    [v, x] = r.useState(!1);
  return n = s ? null == l ? Q.NW.format(Q.t.P52e1t, {}) : Q.NW.format(Q.t["4UnIk5"], {
    guildName: l.name
  }) : null == l ? Q.NW.format(Q.t.SZ5ohY, {
    guildSubscriptionQuantity: a
  }) : Q.NW.format(Q.t.GxK3Mj, {
    guildName: l.name,
    guildSubscriptionQuantity: a
  }), (0, i.jsxs)("div", {
    className: z.confirmationContainer,
    children: [c ? (0, i.jsx)(Z.fe, {
      className: z.confirmationAnimation,
      nextScene: d,
      onScenePlay: e => {
        if (!v) switch (e) {
          case Z.fe.Scenes.ENTRY:
            return m(Z.fe.Scenes.IDLE);
          case Z.fe.Scenes.IDLE:
            return m(Z.fe.Scenes.SUCCESS);
          case Z.fe.Scenes.SUCCESS:
            return x(!0), m(Z.fe.Scenes.IDLE)
        }
      },
      pauseWhileUnfocused: !1
    }) : null, (0, i.jsx)(E.C, {
      className: z.confirmationUpgradedBanner,
      theme: u,
      premiumType: X.p9.TIER_2,
      type: J.X7.has(null != o ? o : J.He.UNKNOWN) ? E.C.Types.PREMIUM_PAYMENT_STARTED : E.C.Types.GUILD_BOOST_APPLIED
    }), (0, i.jsx)("div", {
      className: z.confirmationText,
      children: n
    }), (0, i.jsx)(p.zxk, {
      onClick: t,
      children: Q.NW.string(Q.t["/iTxg4"])
    })]
  })
}
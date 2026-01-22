/** Chunk was on web.js **/
/** chunk id: 879100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  As: () => ed,
  WE: () => e_,
  Xp: () => ep
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk997101 = require("./997101.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk821891 = require("./821891.jsx"),
  Chunk726656 = require("./726656.jsx"),
  Chunk637141 = require("./637141.jsx"),
  Chunk953689 = require("./953689.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk531260 = require("./531260.js"),
  Chunk404374 = require("./404374.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk216641 = require("./216641.js"),
  Chunk543767 = require("./543767.js"),
  Chunk874638 = require("./874638.js"),
  Chunk477421 = require("./477421.js"),
  Chunk234419 = require("./234419.js"),
  Chunk163538 = require("./163538.js"),
  Chunk735164 = require("./735164.jsx"),
  Chunk796012 = require("./796012.jsx"),
  Chunk363476 = require("./363476.jsx"),
  Chunk659746 = require("./659746.jsx"),
  Chunk156962 = require("./156962.jsx"),
  Chunk778307 = require("./778307.jsx"),
  Chunk692440 = require("./692440.jsx"),
  Chunk72140 = require("./72140.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk615405 = require("./615405.js"),
  Chunk295405 = require("./295405.js"),
  Chunk97352 = require("./97352.js"),
  Chunk166403 = require("./166403.js"),
  Chunk473145 = require("./473145.js"),
  Chunk975571 = require("./975571.js"),
  Chunk252424 = require("./252424.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk902038 = require("./902038.js"),
  Chunk652215 = require("./652215.js"),
  Chunk26279 = require("./26279.js"),
  Chunk788868 = require("./788868.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk843010 = require("./843010.js");

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
let es = 1,
  eo = 30;

function el(e) {
  let {
    amount: t,
    currency: n,
    intervalType: r,
    intervalCount: i = 1
  } = e, a = (0, q.$g)(t, n);
  return r === $.WT.YEAR ? ee.intl.formatToPlainString(ee.t["8M04YJ"], {
    price: a
  }) : r === $.WT.MONTH && 1 === i ? ee.intl.formatToPlainString(ee.t.VStWCR, {
    price: a
  }) : r === $.WT.MONTH && i > 1 ? ee.intl.formatToPlainString(ee.t.xJvAFU, {
    price: a
  }) : null
}

function ec(e) {
  let {
    intervalType: t,
    intervalCount: n = 1
  } = e;
  return t === $.WT.YEAR ? ee.intl.string(ee.t.YDpAzZ) : t === $.WT.MONTH && 1 === n ? ee.intl.string(ee.t["6ZR3By"]) : null
}

function eu(e) {
  let {
    endDate: t,
    className: n
  } = e;
  return (0, r.jsxs)("div", {
    className: n,
    children: [(0, r.jsx)("div", {
      className: et.bU
    }), (0, r.jsx)(p.Text, {
      variant: "text-sm/normal",
      className: et.b7,
      children: ee.intl.format(ee.t.IeaYqg, {
        endDate: t
      })
    }), (0, r.jsx)("div", {
      className: et.bU
    })]
  })
}

function ed(e) {
  var t, n;
  let {
    premiumSubscriptionPlan: a,
    numGuildBoosts: o,
    setNumGuildBoosts: c,
    setForceDisableSubmitButton: _,
    premiumSubscription: m,
    onClickPremiumSubscriptionLink: g,
    existingAvailableSlots: v = [],
    priceOptions: I
  } = e, {
    setInvoicePreview: R
  } = (0, A.P5)(), w = (0, N.A)(), D = a.interval, L = a.intervalCount, j = (0, u.bG)([B.A], () => B.A.getForSkuAndInterval((0, z.mH)($.pe.GUILD), D, L)), U = (0, u.bG)([G.default], () => G.default.getCurrentUser()), V = (0, y.A)({
    forceFetch: false
  });
  l()(null != j, "Missing guildBoostingSubscriptionPlan");
  let F = [{
      planId: j.id,
      quantity: 1
    }],
    Q = null == m ? true : m.items.find(e => e.planId === $.gD.PREMIUM_MONTH_TIER_2 || e.planId === $.gD.PREMIUM_YEAR_TIER_2);
  null != Q && F.push(Q);
  let en = null == m ? true : m.items.find(e => e.planId === $.gD.PREMIUM_MONTH_GUILD || e.planId === $.gD.PREMIUM_YEAR_GUILD),
    {
      enabled: er
    } = X.A.useExperiment({
      location: "32b64a_1"
    }),
    ei = !er || null == w || !$.uJ.has(w) || null == en,
    {
      analyticsLocations: ea
    } = (0, b.Ay)(),
    [ed, ef] = (0, S.Kq)({
      subscriptionId: null == m ? true : m.id,
      items: F,
      renewal: true,
      paymentSourceId: null == m ? true : m.paymentSourceId,
      currency: I.currency,
      preventFetch: ei,
      analyticsLocations: ea,
      analyticsLocation: E.A.GUILD_BOOSTING_PLAN_SELECT
    });
  i.useEffect(() => {
    R(ed)
  }, [R, ed]);
  let ep = !ei && null == ed && null == ef,
    e_ = (null == (n = (0, C.V)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === $.pe.TIER_2,
    eh = z.Ay.hasBoostDiscount(U),
    em = null == ed ? true : ed.findInvoiceItemByPlanId(j.id),
    eg = null != em ? {
      amount: em.amount,
      tax: 0,
      taxInclusive: true,
      currency: I.currency
    } : z.Ay.getPrice(j.id, eh, false, I),
    eE = o * eg.amount,
    eb = (0, u.bG)([H.A], () => H.A.inReverseTrial() && z.Ay.hasBoostDiscount(U) && null != m),
    ey = z.Ay.hasBoostDiscount(U) && null != m && z.Ay.isPremiumAtLeast(z.Ay.getPremiumType(m.planId), $.PremiumTypes.TIER_1) ? ee.intl.format(ee.t.hf6YOY, {
      planName: z.Ay.getTierDisplayNameByPlanId(m.planId)
    }) : ee.intl.format(e_ ? ee.t.ba1L74 : ee.t.fkffDT, {
      onPremiumSubscriptionClick: g,
      discountPercentage: (0, K.l9)(k.default.locale, $.oX / 100),
      freeSubscriptionCount: $.M4
    }),
    eO = v.filter(e => (0, Y.I5)(e)).length,
    eA = (0, z.J$)(I.paymentSourceId),
    {
      ipCountryCode: ev
    } = (0, T.A)(),
    eS = "HR" === ev && eg.currency === J.Yr.EUR,
    eI = V.fractionalState === $.xc.FP_SUB_PAUSED;
  return _(ep), (0, r.jsxs)("div", {
    children: [eI && (0, r.jsx)(x.v, {
      fractionalPremiumInfo: V
    }), eb && null != m ? (0, r.jsx)(eu, {
      endDate: m.currentPeriodEnd
    }) : (0, r.jsx)("div", {
      className: s()(et.hA, et.G3),
      children: ee.intl.string(ee.t.jNY1FO)
    }), v.length > 0 ? (0, r.jsxs)("div", {
      className: et.Mv,
      children: [(0, r.jsx)(p._Jp, {
        className: et.T5,
        color: d.A.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, r.jsxs)("div", {
        children: [ee.intl.format(ee.t.F8xlhr, {
          slotCount: v.length
        }), eO > 0 && null != m ? (0, r.jsx)(f.m, {
          text: ee.intl.formatToPlainString(ee.t.SFpsCH, {
            canceledCount: eO,
            date: m.currentPeriodEnd
          }),
          children: (0, r.jsx)(p.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: et.Y5,
            color: d.A.unsafe_rawColors.YELLOW_300.css
          })
        }) : null]
      })]
    }) : null, (0, r.jsxs)("div", {
      className: et.mP,
      children: [(0, r.jsxs)("div", {
        className: et.E6,
        children: [(0, r.jsx)(p.lw3, {
          value: o,
          onChange: e => c(e),
          className: et.__invalid_planSelector,
          minValue: es,
          maxValue: eo
        }), (0, r.jsx)("div", {
          className: et.$0,
          children: eA ? ec({
            intervalType: D,
            intervalCount: L
          }) : ee.intl.string(ee.t.K9Bmze)
        })]
      }), (0, r.jsx)("div", {
        className: s()(et.QK, {
          [et.S]: ep
        }),
        children: ep ? (0, r.jsx)(p.y$y, {}) : eA ? (0, q.$g)(eg.amount, eg.currency) : el({
          intervalType: D,
          intervalCount: L,
          amount: eg.amount,
          currency: eg.currency
        })
      })]
    }), (0, r.jsx)("div", {
      className: et.J3
    }), (0, r.jsxs)("div", {
      className: et.mP,
      children: [(0, r.jsx)("div", {
        className: et.xp,
        children: ee.intl.string(ee.t.RtA7nR)
      }), (0, r.jsx)("div", {
        className: s()(et.__invalid_planSelectorSubtotalPrice, {
          [et.S]: ep
        }),
        children: ep ? (0, r.jsx)(p.y$y, {}) : (0, r.jsx)(P.A, {
          price: eE,
          currency: eg.currency,
          intervalType: D,
          intervalCount: L,
          isPrepaidPaymentSource: eA
        })
      })]
    }), eS && (0, r.jsx)(h.A, {
      message: ee.intl.formatToPlainString(ee.t["9hnZoK"], {
        kunaPriceWithCurrency: (0, q.$g)(7.5345 * eE, J.Yr.HRK)
      })
    }), (0, r.jsx)(h.A, {
      message: ee.intl.format(ee.t.Om31w8, {
        documentationLink: W.A.getArticleURL(Z.MVz.LOCALIZED_PRICING)
      })
    }), eb ? (0, r.jsx)(M.G, {}) : (0, r.jsx)(M.A, {
      text: ey,
      color: O.k0.PREMIUM_TIER_2
    })]
  })
}

function ef(e) {
  let {
    premiumSubscription: t,
    premiumSubscriptionPlan: n,
    proratedInvoicePreview: i,
    renewalInvoicePreview: a,
    priceOptions: s
  } = e, o = n.interval, c = n.intervalCount, d = (0, u.bG)([B.A], () => B.A.getForSkuAndInterval((0, z.mH)($.pe.GUILD), o, c));
  l()(null != d, "Missing guildBoostingSubscriptionPlan");
  let f = e => (0, I.Z)(i.invoiceItems).find(t => $.pW.has(t.subscriptionPlanId) && e(t)),
    p = f(e => e.amount >= 0);
  l()(null != p, "Missing guild boosting invoice item");
  let _ = f(e => e.amount < 0),
    h = null != _ ? p.quantity - _.quantity : p.quantity,
    m = i.invoiceItems.filter(e => (0, z.xq)(e.subscriptionPlanId)),
    g = m.reduce((e, t) => e + t.amount, 0),
    E = (0, S.sL)(p) * h,
    b = (0, q.$g)(E, i.currency),
    y = (0, q.CE)(b, o, c),
    O = (0, q.$g)(i.total, i.currency) + (i.currency !== J.Yr.USD ? "*" : ""),
    A = i.total - E - g,
    v = p.discounts.map(e => {
      let t = e.amount / p.quantity;
      return ea(er({}, e), {
        amount: t * h
      })
    }),
    T = (0, z.J$)(s.paymentSourceId),
    C = (0, u.bG)([H.A], () => H.A.inReverseTrial());
  return (0, r.jsxs)(r.Fragment, {
    children: [T ? null : C && null != t ? (0, r.jsx)(eu, {
      endDate: t.currentPeriodEnd,
      className: et.jk
    }) : (0, r.jsx)(j.wP, {
      proratedInvoice: i,
      renewalInvoice: a
    }), (0, r.jsxs)(R.Yx, {
      children: [(0, r.jsx)(R.Xd, {
        children: ee.intl.string(ee.t.CWIwms)
      }), (0, r.jsx)(R.f0, {
        label: ee.intl.formatToPlainString(ee.t.a3cAOg, {
          numGuildSubscriptions: h,
          planName: (0, z.Mn)(d.id, false, T)
        }),
        value: T ? b : y,
        discounts: v,
        originalAmount: p.subscriptionPlanPrice * h,
        currency: i.currency,
        interval: d.interval,
        intervalCount: d.intervalCount
      }), 0 !== g ? (0, r.jsx)(R.oR, {
        label: (0, r.jsx)(j.sw, {
          label: ee.intl.formatToPlainString(ee.t.ZSVged, {
            planName: (0, z.RH)(m[0].subscriptionPlanId)
          }),
          tooltipText: ee.intl.string(ee.t.JmwQJM)
        }),
        value: (0, q.$g)(g, i.currency)
      }) : null, 0 !== A ? (0, r.jsx)(R.oR, {
        label: (0, r.jsx)(j.sw, {
          label: ee.intl.string(ee.t["+as5ZZ"]),
          tooltipText: ee.intl.string(ee.t.JmwQJM)
        }),
        value: (0, q.$g)(A, i.currency)
      }) : null, (0, r.jsx)(R.pK, {}), (0, r.jsx)(R.Sd, {
        label: ee.intl.format(i.taxInclusive ? T ? ee.t.BqdxQt : ee.t.XH4raN : ee.t.RUI48E, {}),
        value: O
      }), null != t ? (0, r.jsx)(j.m0, {
        premiumSubscription: t,
        proratedInvoice: i,
        renewalInvoice: a,
        isUpdate: true,
        isPrepaidPaymentSource: T,
        isTrial: C
      }) : (0, r.jsx)(j.m0, {
        renewalInvoice: a,
        priceOptions: s,
        isPrepaidPaymentSource: T
      })]
    })]
  })
}

function ep(e) {
  var t;
  let n, a, {
      paymentSources: s,
      priceOptions: o,
      currentPremiumSubscription: l,
      premiumSubscriptionPaymentSourceId: d,
      premiumSubscriptionPlan: h,
      newAdditionalPlans: y,
      onPaymentSourceChange: O,
      onPaymentSourceAdd: I,
      onPurchaseTermsChange: T,
      legalTermsNodeRef: C,
      hasLegalTermsFlash: N
    } = e,
    {
      setInvoicePreview: R
    } = (0, A.P5)(),
    w = o.paymentSourceId,
    P = (0, v.g)(s, w),
    D = (0, u.bG)([F.A], () => null != d ? F.A.getPaymentSource(d) : null),
    x = (0, u.bG)([U.A], () => U.A.hidePersonalInformation);
  n = null != l ? (0, z.Om)(l, y[0].quantity, y[0].planId) : y;
  let {
    analyticsLocations: j
  } = (0, b.Ay)(), [M] = (0, S.Kq)({
    subscriptionId: null == l ? true : l.id,
    items: n,
    renewal: false,
    applyEntitlements: true,
    paymentSourceId: w,
    currency: o.currency,
    analyticsLocations: j,
    analyticsLocation: E.A.GUILD_BOOSTING_REVIEW_PRORATED
  }), [k] = (0, S.Kq)({
    subscriptionId: null == l ? true : l.id,
    items: n,
    renewal: true,
    paymentSourceId: w,
    currency: o.currency,
    analyticsLocations: j,
    analyticsLocation: E.A.GUILD_BOOSTING_REVIEW_RENEWAL
  }), G = k;
  null != G && (a = {
    amount: G.subtotal,
    currency: G.currency,
    tax: G.tax,
    taxInclusive: false
  });
  let B = c.M.EEA_COUNTRIES.has(V.A.ipCountryCodeWithFallback);
  return i.useEffect(() => {
    R(M)
  }, [R, M]), (0, r.jsxs)("div", {
    children: [null != M && null != k ? (0, r.jsx)(ef, {
      premiumSubscription: l,
      premiumSubscriptionPlan: h,
      proratedInvoicePreview: M,
      renewalInvoicePreview: k,
      priceOptions: o
    }) : null, (0, r.jsx)("div", {
      className: et.LC,
      children: null != d ? null != D ? (0, r.jsx)(f.m, {
        asContainer: true,
        text: ee.intl.string(ee.t.XiuuV9),
        children: (0, r.jsx)(m.Ay, {
          label: ee.intl.string(ee.t["mmDvV+"]),
          paymentSources: [D],
          selectedPaymentSourceId: D.id,
          hidePersonalInformation: x,
          disabled: true
        })
      }) : (0, r.jsx)("div", {
        children: (0, r.jsx)(p.y$y, {})
      }) : (0, r.jsx)(m.Ay, {
        label: ee.intl.string(ee.t["mmDvV+"]),
        paymentSources: Object.values(s),
        selectedPaymentSourceId: w,
        onChange: O,
        onPaymentSourceAdd: I,
        hidePersonalInformation: x
      })
    }), (0, r.jsx)(L.A, {
      isActive: N,
      ref: C,
      children: null != a && (0, r.jsx)(g.A, {
        onChange: T,
        forceShow: true,
        finePrint: (0, r.jsx)(_.A, {
          subscriptionPlan: h,
          paymentSourceType: P,
          proratedAmount: null != M ? M.total : true,
          basePrice: a,
          productLine: Z.EZt.BOOST
        }),
        showPricingLink: (null != (t = null == M ? true : M.currency) ? t : J.Yr.USD) !== J.Yr.USD,
        showWithdrawalWaiver: B,
        subscriptionPlan: h
      })
    })]
  })
}

function e_(e) {
  var t;
  let n, {
      onClose: a,
      guild: s,
      guildBoostQuantity: o,
      isTransfer: l = false,
      withAnimation: c = true,
      paymentSourceType: u,
      didPurchaseOnFractionalPremium: d = false,
      fallbackGuildName: f,
      customCheckoutFlow: _
    } = e,
    {
      theme: h
    } = (0, p.wRf)(),
    [m, g] = i.useState(w.V1.Scenes.ENTRY),
    [E, b] = i.useState(false),
    y = null != (t = null == s ? true : s.name) ? t : f;
  return n = l ? null == y ? ee.intl.format(ee.t.P52e1r, {}) : ee.intl.format(ee.t["4UnIk9"], {
    guildName: y
  }) : d ? ee.intl.format(ee.t.gFaKd1, {
    helpCenterLink: W.A.getArticleURL(Z.MVz.FRACTIONAL_PREMIUM_ABOUT)
  }) : null == y ? ee.intl.format(ee.t.SZ5ohR, {
    guildSubscriptionQuantity: o
  }) : ee.intl.format(ee.t.GxK3Mv, {
    guildName: y,
    guildSubscriptionQuantity: o
  }), (0, r.jsxs)("div", {
    className: et.RP,
    children: [c ? (0, r.jsx)(w.V1, {
      className: et.ud,
      nextScene: m,
      onScenePlay: e => {
        if (!E) switch (e) {
          case w.V1.Scenes.ENTRY:
            return g(w.V1.Scenes.IDLE);
          case w.V1.Scenes.IDLE:
            return g(w.V1.Scenes.SUCCESS);
          case w.V1.Scenes.SUCCESS:
            return b(true), g(w.V1.Scenes.IDLE)
        }
      },
      pauseWhileUnfocused: false
    }) : null, (0, r.jsx)(D.Ay, {
      className: et.E,
      theme: h,
      premiumType: $.PremiumTypes.TIER_2,
      type: J.Nc.has(null != u ? u : J.he.UNKNOWN) ? D.Ay.Types.PREMIUM_PAYMENT_STARTED : D.Ay.Types.GUILD_BOOST_APPLIED
    }), (0, r.jsx)("div", {
      className: et.xR,
      children: n
    }), (0, r.jsx)(p.Button, {
      variant: "primary",
      text: _ === Q.uH.APPLE_PAYMENT_LINK ? ee.intl.string(ee.t.qXV2XU) : ee.intl.string(ee.t["/iTxgz"]),
      onClick: a
    })]
  })
}
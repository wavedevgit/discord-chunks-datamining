/** Chunk was on web.js **/
/** chunk id: 879100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  As: () => ef,
  WE: () => eh,
  Xp: () => e_
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
  Chunk155718 = require("./155718.js"),
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
  Chunk934581 = require("./934581.jsx"),
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

function er(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      er(e, t, n[t])
    })
  }
  return e
}

function ea(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function es(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ea(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eo = 1,
  el = 30;

function ec(e) {
  let {
    amount: t,
    currency: n,
    intervalType: r,
    intervalCount: i = 1
  } = e, a = (0, Z.$g)(t, n);
  return r === $.WT.YEAR ? et.intl.formatToPlainString(et.t["8M04YJ"], {
    price: a
  }) : r === $.WT.MONTH && 1 === i ? et.intl.formatToPlainString(et.t.VStWCR, {
    price: a
  }) : r === $.WT.MONTH && i > 1 ? et.intl.formatToPlainString(et.t.xJvAFU, {
    price: a
  }) : null
}

function eu(e) {
  let {
    intervalType: t,
    intervalCount: n = 1
  } = e;
  return t === $.WT.YEAR ? et.intl.string(et.t.YDpAzZ) : t === $.WT.MONTH && 1 === n ? et.intl.string(et.t["6ZR3By"]) : null
}

function ed(e) {
  let {
    endDate: t,
    className: n
  } = e;
  return (0, r.jsxs)("div", {
    className: n,
    children: [(0, r.jsx)("div", {
      className: en.bU
    }), (0, r.jsx)(p.Text, {
      variant: "text-sm/normal",
      className: en.b7,
      children: et.intl.format(et.t.IeaYqg, {
        endDate: t
      })
    }), (0, r.jsx)("div", {
      className: en.bU
    })]
  })
}

function ef(e) {
  var t, n;
  let {
    premiumSubscriptionPlan: a,
    numGuildBoosts: o,
    setNumGuildBoosts: c,
    setForceDisableSubmitButton: _,
    premiumSubscription: m,
    onClickPremiumSubscriptionLink: g,
    existingAvailableSlots: E = [],
    priceOptions: I
  } = e, {
    setInvoicePreview: T
  } = (0, A.P5)(), R = (0, w.A)(), P = a.interval, x = a.intervalCount, j = (0, u.bG)([H.A], () => H.A.getForSkuAndInterval((0, q.mH)($.pe.GUILD), P, x)), M = (0, u.bG)([V.default], () => V.default.getCurrentUser()), G = (0, O.A)({
    forceFetch: false
  });
  l()(null != j, "Missing guildBoostingSubscriptionPlan");
  let F = [{
      planId: j.id,
      quantity: 1
    }],
    B = null == m ? true : m.items.find(e => e.planId === $.gD.PREMIUM_MONTH_TIER_2 || e.planId === $.gD.PREMIUM_YEAR_TIER_2);
  null != B && F.push(B);
  let J = null == m ? true : m.items.find(e => e.planId === $.gD.PREMIUM_MONTH_GUILD || e.planId === $.gD.PREMIUM_YEAR_GUILD),
    {
      enabled: er
    } = X.A.useExperiment({
      location: "32b64a_1"
    }),
    ei = !er || null == R || !$.uJ.has(R) || null == J,
    {
      analyticsLocations: ea
    } = (0, b.Ay)(),
    [es, ef] = (0, S.Kq)({
      subscriptionId: null == m ? true : m.id,
      items: F,
      renewal: true,
      paymentSourceId: null == m ? true : m.paymentSourceId,
      currency: I.currency,
      preventFetch: ei,
      analyticsLocations: ea,
      analyticsLocation: y.A.GUILD_BOOSTING_PLAN_SELECT
    });
  i.useEffect(() => {
    T(es)
  }, [T, es]);
  let ep = !ei && null == es && null == ef,
    e_ = (null == (n = (0, N.V)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === $.pe.TIER_2,
    eh = q.Ay.hasBoostDiscount(M),
    em = null == es ? true : es.findInvoiceItemByPlanId(j.id),
    eg = null != em ? {
      amount: em.amount,
      tax: 0,
      taxInclusive: true,
      currency: I.currency
    } : q.Ay.getPrice(j.id, eh, false, I),
    eE = o * eg.amount,
    ey = (0, u.bG)([Y.A], () => Y.A.inReverseTrial() && q.Ay.hasBoostDiscount(M) && null != m),
    eb = q.Ay.hasBoostDiscount(M) && null != m && q.Ay.isPremiumAtLeast(q.Ay.getPremiumType(m.planId), $.PremiumTypes.TIER_1) ? et.intl.format(et.t.hf6YOY, {
      planName: q.Ay.getTierDisplayNameByPlanId(m.planId)
    }) : et.intl.format(e_ ? et.t.ba1L74 : et.t.fkffDT, {
      onPremiumSubscriptionClick: g,
      discountPercentage: (0, z.l9)(U.default.locale, $.oX / 100),
      freeSubscriptionCount: $.M4
    }),
    eO = E.filter(e => (0, W.I5)(e)).length,
    ev = (0, q.J$)(I.paymentSourceId),
    {
      ipCountryCode: eA
    } = (0, C.A)(),
    eI = "HR" === eA && eg.currency === ee.Yr.EUR,
    eS = G.fractionalState === $.xc.FP_SUB_PAUSED;
  return _(ep), (0, r.jsxs)("div", {
    children: [eS && (0, r.jsx)(L.v, {
      fractionalPremiumInfo: G
    }), ey && null != m ? (0, r.jsx)(ed, {
      endDate: m.currentPeriodEnd
    }) : (0, r.jsx)("div", {
      className: s()(en.hA, en.G3),
      children: et.intl.string(et.t.jNY1FO)
    }), E.length > 0 ? (0, r.jsxs)("div", {
      className: en.Mv,
      children: [(0, r.jsx)(p._Jp, {
        className: en.T5,
        color: d.A.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, r.jsxs)("div", {
        children: [et.intl.format(et.t.F8xlhr, {
          slotCount: E.length
        }), eO > 0 && null != m ? (0, r.jsx)(f.m, {
          text: et.intl.formatToPlainString(et.t.SFpsCH, {
            canceledCount: eO,
            date: m.currentPeriodEnd
          }),
          children: (0, r.jsx)(p.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: en.Y5,
            color: d.A.unsafe_rawColors.YELLOW_300.css
          })
        }) : null]
      })]
    }) : null, (0, r.jsxs)("div", {
      className: en.mP,
      children: [(0, r.jsxs)("div", {
        className: en.E6,
        children: [(0, r.jsx)(p.lw3, {
          value: o,
          onChange: e => c(e),
          className: en.__invalid_planSelector,
          minValue: eo,
          maxValue: el
        }), (0, r.jsx)("div", {
          className: en.$0,
          children: ev ? eu({
            intervalType: P,
            intervalCount: x
          }) : et.intl.string(et.t.K9Bmze)
        })]
      }), (0, r.jsx)("div", {
        className: s()(en.QK, {
          [en.S]: ep
        }),
        children: ep ? (0, r.jsx)(p.y$y, {}) : ev ? (0, Z.$g)(eg.amount, eg.currency) : ec({
          intervalType: P,
          intervalCount: x,
          amount: eg.amount,
          currency: eg.currency
        })
      })]
    }), (0, r.jsx)("div", {
      className: en.J3
    }), (0, r.jsxs)("div", {
      className: en.mP,
      children: [(0, r.jsx)("div", {
        className: en.xp,
        children: et.intl.string(et.t.RtA7nR)
      }), (0, r.jsx)("div", {
        className: s()(en.__invalid_planSelectorSubtotalPrice, {
          [en.S]: ep
        }),
        children: ep ? (0, r.jsx)(p.y$y, {}) : (0, r.jsx)(D.A, {
          price: eE,
          currency: eg.currency,
          intervalType: P,
          intervalCount: x,
          isPrepaidPaymentSource: ev
        })
      })]
    }), eI && (0, r.jsx)(h.A, {
      message: et.intl.formatToPlainString(et.t["9hnZoK"], {
        kunaPriceWithCurrency: (0, Z.$g)(7.5345 * eE, ee.Yr.HRK)
      })
    }), (0, r.jsx)(h.A, {
      message: et.intl.format(et.t.Om31w8, {
        documentationLink: K.A.getArticleURL(Q.MVz.LOCALIZED_PRICING)
      })
    }), ey ? (0, r.jsx)(k.G, {}) : (0, r.jsx)(k.A, {
      text: eb,
      color: v.k0.PREMIUM_TIER_2
    })]
  })
}

function ep(e) {
  let {
    premiumSubscription: t,
    premiumSubscriptionPlan: n,
    proratedInvoicePreview: i,
    renewalInvoicePreview: a,
    priceOptions: s
  } = e, o = n.interval, c = n.intervalCount, d = (0, u.bG)([H.A], () => H.A.getForSkuAndInterval((0, q.mH)($.pe.GUILD), o, c));
  l()(null != d, "Missing guildBoostingSubscriptionPlan");
  let f = e => (0, T.Z)(i.invoiceItems).find(t => $.pW.has(t.subscriptionPlanId) && e(t)),
    p = f(e => e.amount >= 0);
  l()(null != p, "Missing guild boosting invoice item");
  let _ = f(e => e.amount < 0),
    h = null != _ ? p.quantity - _.quantity : p.quantity,
    m = i.invoiceItems.filter(e => (0, q.xq)(e.subscriptionPlanId)),
    g = m.reduce((e, t) => e + t.amount, 0),
    y = (0, S.sL)(p) * h,
    b = (0, Z.$g)(y, i.currency),
    O = (0, Z.CE)(b, o, c),
    v = (0, Z.$g)(i.total, i.currency) + (i.currency !== ee.Yr.USD ? "*" : ""),
    A = i.total - y - g,
    I = p.discounts.map(e => {
      let t = e.amount / p.quantity;
      return es(ei({}, e), {
        amount: t * h
      })
    }),
    {
      subscriptionDiscount: C,
      entitlementDiscount: N
    } = {
      subscriptionDiscount: I.find(e => e.type === E.iS.SUBSCRIPTION_PLAN),
      entitlementDiscount: I.find(e => e.type === E.iS.ENTITLEMENT)
    },
    w = (0, q.J$)(s.paymentSourceId),
    P = (0, u.bG)([Y.A], () => Y.A.inReverseTrial());
  return (0, r.jsxs)(r.Fragment, {
    children: [w ? null : P && null != t ? (0, r.jsx)(ed, {
      endDate: t.currentPeriodEnd,
      className: en.jk
    }) : (0, r.jsx)(M.wP, {
      proratedInvoice: i,
      renewalInvoice: a
    }), (0, r.jsxs)(R.Yx, {
      children: [(0, r.jsx)(R.Xd, {
        children: et.intl.string(et.t.CWIwms)
      }), (0, r.jsx)(R.f0, {
        label: et.intl.formatToPlainString(et.t.a3cAOg, {
          numGuildSubscriptions: h,
          planName: (0, q.Mn)(d.id, false, w)
        }),
        value: w ? b : O,
        subscriptionDiscount: C,
        entitlementDiscount: N,
        originalAmount: p.subscriptionPlanPrice * h,
        currency: i.currency,
        interval: d.interval,
        intervalCount: d.intervalCount
      }), 0 !== g ? (0, r.jsx)(R.oR, {
        label: (0, r.jsx)(M.sw, {
          label: et.intl.formatToPlainString(et.t.ZSVged, {
            planName: (0, q.RH)(m[0].subscriptionPlanId)
          }),
          tooltipText: et.intl.string(et.t.JmwQJM)
        }),
        value: (0, Z.$g)(g, i.currency)
      }) : null, 0 !== A ? (0, r.jsx)(R.oR, {
        label: (0, r.jsx)(M.sw, {
          label: et.intl.string(et.t["+as5ZZ"]),
          tooltipText: et.intl.string(et.t.JmwQJM)
        }),
        value: (0, Z.$g)(A, i.currency)
      }) : null, (0, r.jsx)(R.pK, {}), (0, r.jsx)(R.Sd, {
        label: et.intl.format(i.taxInclusive ? w ? et.t.BqdxQt : et.t.XH4raN : et.t.RUI48E, {}),
        value: v
      }), null != t ? (0, r.jsx)(M.m0, {
        premiumSubscription: t,
        proratedInvoice: i,
        renewalInvoice: a,
        isUpdate: true,
        isPrepaidPaymentSource: w,
        isTrial: P
      }) : (0, r.jsx)(M.m0, {
        renewalInvoice: a,
        priceOptions: s,
        isPrepaidPaymentSource: w
      })]
    })]
  })
}

function e_(e) {
  var t;
  let n, a, {
      paymentSources: s,
      priceOptions: o,
      currentPremiumSubscription: l,
      premiumSubscriptionPaymentSourceId: d,
      premiumSubscriptionPlan: h,
      newAdditionalPlans: E,
      onPaymentSourceChange: O,
      onPaymentSourceAdd: v,
      onPurchaseTermsChange: T,
      legalTermsNodeRef: C,
      hasLegalTermsFlash: N
    } = e,
    {
      setInvoicePreview: w
    } = (0, A.P5)(),
    R = o.paymentSourceId,
    P = (0, I.g)(s, R),
    D = (0, u.bG)([B.A], () => null != d ? B.A.getPaymentSource(d) : null),
    x = (0, u.bG)([G.A], () => G.A.hidePersonalInformation);
  n = null != l ? (0, q.Om)(l, E[0].quantity, E[0].planId) : E;
  let {
    analyticsLocations: L
  } = (0, b.Ay)(), [M] = (0, S.Kq)({
    subscriptionId: null == l ? true : l.id,
    items: n,
    renewal: false,
    applyEntitlements: true,
    paymentSourceId: R,
    currency: o.currency,
    analyticsLocations: L,
    analyticsLocation: y.A.GUILD_BOOSTING_REVIEW_PRORATED
  }), [k] = (0, S.Kq)({
    subscriptionId: null == l ? true : l.id,
    items: n,
    renewal: true,
    paymentSourceId: R,
    currency: o.currency,
    analyticsLocations: L,
    analyticsLocation: y.A.GUILD_BOOSTING_REVIEW_RENEWAL
  }), U = k;
  null != U && (a = {
    amount: U.subtotal,
    currency: U.currency,
    tax: U.tax,
    taxInclusive: false
  });
  let V = c.M.EEA_COUNTRIES.has(F.A.ipCountryCodeWithFallback);
  return i.useEffect(() => {
    w(M)
  }, [w, M]), (0, r.jsxs)("div", {
    children: [null != M && null != k ? (0, r.jsx)(ep, {
      premiumSubscription: l,
      premiumSubscriptionPlan: h,
      proratedInvoicePreview: M,
      renewalInvoicePreview: k,
      priceOptions: o
    }) : null, (0, r.jsx)("div", {
      className: en.LC,
      children: null != d ? null != D ? (0, r.jsx)(f.m, {
        asContainer: true,
        text: et.intl.string(et.t.XiuuV9),
        children: (0, r.jsx)(m.Ay, {
          label: et.intl.string(et.t["mmDvV+"]),
          paymentSources: [D],
          selectedPaymentSourceId: D.id,
          hidePersonalInformation: x,
          disabled: true
        })
      }) : (0, r.jsx)("div", {
        children: (0, r.jsx)(p.y$y, {})
      }) : (0, r.jsx)(m.Ay, {
        label: et.intl.string(et.t["mmDvV+"]),
        paymentSources: Object.values(s),
        selectedPaymentSourceId: R,
        onChange: O,
        onPaymentSourceAdd: v,
        hidePersonalInformation: x
      })
    }), (0, r.jsx)(j.A, {
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
          productLine: Q.EZt.BOOST
        }),
        showPricingLink: (null != (t = null == M ? true : M.currency) ? t : ee.Yr.USD) !== ee.Yr.USD,
        showWithdrawalWaiver: V,
        subscriptionPlan: h
      })
    })]
  })
}

function eh(e) {
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
    [m, g] = i.useState(P.V1.Scenes.ENTRY),
    [E, y] = i.useState(false),
    b = null != (t = null == s ? true : s.name) ? t : f;
  return n = l ? null == b ? et.intl.format(et.t.P52e1r, {}) : et.intl.format(et.t["4UnIk9"], {
    guildName: b
  }) : d ? et.intl.format(et.t.gFaKd1, {
    helpCenterLink: K.A.getArticleURL(Q.MVz.FRACTIONAL_PREMIUM_ABOUT)
  }) : null == b ? et.intl.format(et.t.SZ5ohR, {
    guildSubscriptionQuantity: o
  }) : et.intl.format(et.t.GxK3Mv, {
    guildName: b,
    guildSubscriptionQuantity: o
  }), (0, r.jsxs)("div", {
    className: en.RP,
    children: [c ? (0, r.jsx)(P.V1, {
      className: en.ud,
      nextScene: m,
      onScenePlay: e => {
        if (!E) switch (e) {
          case P.V1.Scenes.ENTRY:
            return g(P.V1.Scenes.IDLE);
          case P.V1.Scenes.IDLE:
            return g(P.V1.Scenes.SUCCESS);
          case P.V1.Scenes.SUCCESS:
            return y(true), g(P.V1.Scenes.IDLE)
        }
      },
      pauseWhileUnfocused: false
    }) : null, (0, r.jsx)(x.Ay, {
      className: en.E,
      theme: h,
      premiumType: $.PremiumTypes.TIER_2,
      type: ee.Nc.has(null != u ? u : ee.he.UNKNOWN) ? x.Ay.Types.PREMIUM_PAYMENT_STARTED : x.Ay.Types.GUILD_BOOST_APPLIED
    }), (0, r.jsx)("div", {
      className: en.xR,
      children: n
    }), (0, r.jsx)(p.Button, {
      variant: "primary",
      text: _ === J.uH.APPLE_PAYMENT_LINK ? et.intl.string(et.t.qXV2XU) : et.intl.string(et.t["/iTxgz"]),
      onClick: a
    })]
  })
}
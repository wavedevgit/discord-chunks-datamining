/** Chunk was on 62733 **/
/** chunk id: 879100, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  As: () => el,
  WE: () => es,
  Xp: () => ea
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
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

function ei(e) {
  let {
    endDate: n,
    className: t
  } = e;
  return (0, i.jsxs)("div", {
    className: t,
    children: [(0, i.jsx)("div", {
      className: et.bU
    }), (0, i.jsx)(p.Text, {
      variant: "text-sm/normal",
      className: et.b7,
      children: en.intl.format(en.t.IeaYqg, {
        endDate: n
      })
    }), (0, i.jsx)("div", {
      className: et.bU
    })]
  })
}

function el(e) {
  var n, t;
  let {
    premiumSubscriptionPlan: r,
    numGuildBoosts: s,
    setNumGuildBoosts: o,
    setForceDisableSubmitButton: y,
    premiumSubscription: x,
    onClickPremiumSubscriptionLink: g,
    existingAvailableSlots: P = [],
    priceOptions: j
  } = e, {
    setInvoicePreview: E
  } = (0, b.P5)(), O = (0, _.A)(), R = r.interval, L = r.intervalCount, C = (0, u.bG)([W.A], () => W.A.getForSkuAndInterval((0, $.mH)(Q.pe.GUILD), R, L)), w = (0, u.bG)([Y.default], () => Y.default.getCurrentUser()), V = (0, S.A)({
    forceFetch: false
  });
  c()(null != C, "Missing guildBoostingSubscriptionPlan");
  let k = [{
      planId: C.id,
      quantity: 1
    }],
    B = null == x ? true : x.items.find(e => e.planId === Q.gD.PREMIUM_MONTH_TIER_2 || e.planId === Q.gD.PREMIUM_YEAR_TIER_2);
  null != B && k.push(B);
  let X = null == x ? true : x.items.find(e => e.planId === Q.gD.PREMIUM_MONTH_GUILD || e.planId === Q.gD.PREMIUM_YEAR_GUILD),
    {
      enabled: el
    } = Z.A.useExperiment({
      location: "32b64a_1"
    }),
    er = !el || null == O || !Q.uJ.has(O) || null == X,
    {
      analyticsLocations: ea
    } = (0, f.Ay)(),
    [es, ec] = (0, h.Kq)({
      subscriptionId: null == x ? true : x.id,
      items: k,
      renewal: true,
      paymentSourceId: null == x ? true : x.paymentSourceId,
      currency: j.currency,
      preventFetch: er,
      analyticsLocations: ea,
      analyticsLocation: I.A.GUILD_BOOSTING_PLAN_SELECT
    });
  l.useEffect(() => {
    E(es)
  }, [E, es]);
  let eo = !er && null == es && null == ec,
    eu = (null == (t = (0, N.V)()) || null == (n = t.subscription_trial) ? true : n.sku_id) === Q.pe.TIER_2,
    ed = $.Ay.hasBoostDiscount(w),
    em = null == es ? true : es.findInvoiceItemByPlanId(C.id),
    ep = null != em ? {
      amount: em.amount,
      tax: 0,
      taxInclusive: true,
      currency: j.currency
    } : $.Ay.getPrice(C.id, ed, false, j),
    ey = s * ep.amount,
    ev = (0, u.bG)([q.A], () => q.A.inReverseTrial() && $.Ay.hasBoostDiscount(w) && null != x),
    ex = $.Ay.hasBoostDiscount(w) && null != x && $.Ay.isPremiumAtLeast($.Ay.getPremiumType(x.planId), Q.PremiumTypes.TIER_1) ? en.intl.format(en.t.hf6YOY, {
      planName: $.Ay.getTierDisplayNameByPlanId(x.planId)
    }) : en.intl.format(eu ? en.t.ba1L74 : en.t.fkffDT, {
      onPremiumSubscriptionClick: g,
      discountPercentage: (0, K.l9)(G.default.locale, Q.oX / 100),
      freeSubscriptionCount: Q.M4
    }),
    eg = P.filter(e => (0, F.I5)(e)).length,
    eP = (0, $.J$)(j.paymentSourceId),
    {
      ipCountryCode: eI
    } = (0, T.A)(),
    ef = "HR" === eI && ep.currency === ee.Yr.EUR,
    eS = V.fractionalState === Q.xc.FP_SUB_PAUSED;
  return y(eo), (0, i.jsxs)("div", {
    children: [eS && (0, i.jsx)(U.v, {
      fractionalPremiumInfo: V
    }), ev && null != x ? (0, i.jsx)(ei, {
      endDate: x.currentPeriodEnd
    }) : (0, i.jsx)("div", {
      className: a()(et.hA, et.G3),
      children: en.intl.string(en.t.jNY1FO)
    }), P.length > 0 ? (0, i.jsxs)("div", {
      className: et.Mv,
      children: [(0, i.jsx)(p._Jp, {
        className: et.T5,
        color: d.A.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, i.jsxs)("div", {
        children: [en.intl.format(en.t.F8xlhr, {
          slotCount: P.length
        }), eg > 0 && null != x ? (0, i.jsx)(m.m, {
          text: en.intl.formatToPlainString(en.t.SFpsCH, {
            canceledCount: eg,
            date: x.currentPeriodEnd
          }),
          children: (0, i.jsx)(p.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: et.Y5,
            color: d.A.unsafe_rawColors.YELLOW_300.css
          })
        }) : null]
      })]
    }) : null, (0, i.jsxs)("div", {
      className: et.mP,
      children: [(0, i.jsxs)("div", {
        className: et.E6,
        children: [(0, i.jsx)(p.lw3, {
          value: s,
          onChange: e => o(e),
          className: et.__invalid_planSelector,
          minValue: 1,
          maxValue: 30
        }), (0, i.jsx)("div", {
          className: et.$0,
          children: eP ? function(e) {
            let {
              intervalType: n,
              intervalCount: t = 1
            } = e;
            return n === Q.WT.YEAR ? en.intl.string(en.t.YDpAzZ) : n === Q.WT.MONTH && 1 === t ? en.intl.string(en.t["6ZR3By"]) : null
          }({
            intervalType: R,
            intervalCount: L
          }) : en.intl.string(en.t.K9Bmze)
        })]
      }), (0, i.jsx)("div", {
        className: a()(et.QK, {
          [et.S]: eo
        }),
        children: eo ? (0, i.jsx)(p.y$y, {}) : eP ? (0, J.$g)(ep.amount, ep.currency) : function(e) {
          let {
            amount: n,
            currency: t,
            intervalType: i,
            intervalCount: l = 1
          } = e, r = (0, J.$g)(n, t);
          return i === Q.WT.YEAR ? en.intl.formatToPlainString(en.t["8M04YJ"], {
            price: r
          }) : i === Q.WT.MONTH && 1 === l ? en.intl.formatToPlainString(en.t.VStWCR, {
            price: r
          }) : i === Q.WT.MONTH && l > 1 ? en.intl.formatToPlainString(en.t.xJvAFU, {
            price: r
          }) : null
        }({
          intervalType: R,
          intervalCount: L,
          amount: ep.amount,
          currency: ep.currency
        })
      })]
    }), (0, i.jsx)("div", {
      className: et.J3
    }), (0, i.jsxs)("div", {
      className: et.mP,
      children: [(0, i.jsx)("div", {
        className: et.xp,
        children: en.intl.string(en.t.RtA7nR)
      }), (0, i.jsx)("div", {
        className: a()(et.__invalid_planSelectorSubtotalPrice, {
          [et.S]: eo
        }),
        children: eo ? (0, i.jsx)(p.y$y, {}) : (0, i.jsx)(D.A, {
          price: ey,
          currency: ep.currency,
          intervalType: R,
          intervalCount: L,
          isPrepaidPaymentSource: eP
        })
      })]
    }), ef && (0, i.jsx)(v.A, {
      message: en.intl.formatToPlainString(en.t["9hnZoK"], {
        kunaPriceWithCurrency: (0, J.$g)(7.5345 * ey, ee.Yr.HRK)
      })
    }), (0, i.jsx)(v.A, {
      message: en.intl.format(en.t.Om31w8, {
        documentationLink: H.A.getArticleURL(z.MVz.LOCALIZED_PRICING)
      })
    }), ev ? (0, i.jsx)(M.G, {}) : (0, i.jsx)(M.A, {
      text: ex,
      color: A.k0.PREMIUM_TIER_2
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
  } = e, s = t.interval, o = t.intervalCount, d = (0, u.bG)([W.A], () => W.A.getForSkuAndInterval((0, $.mH)(Q.pe.GUILD), s, o));
  c()(null != d, "Missing guildBoostingSubscriptionPlan");
  let m = e => (0, E.Z)(l.invoiceItems).find(n => Q.pW.has(n.subscriptionPlanId) && e(n)),
    p = m(e => e.amount >= 0);
  c()(null != p, "Missing guild boosting invoice item");
  let y = m(e => e.amount < 0),
    v = null != y ? p.quantity - y.quantity : p.quantity,
    x = l.invoiceItems.filter(e => (0, $.xq)(e.subscriptionPlanId)),
    g = x.reduce((e, n) => e + n.amount, 0),
    I = (0, h.sL)(p) * v,
    f = (0, J.$g)(I, l.currency),
    S = (0, J.CE)(f, s, o),
    A = (0, J.$g)(l.total, l.currency) + (l.currency !== ee.Yr.USD ? "*" : ""),
    b = l.total - I - g,
    j = p.discounts.map(e => {
      var n, t;
      let i = e.amount / p.quantity;
      return n = function(e) {
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
      }({}, e), t = t = {
        amount: i * v
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t.push.apply(t, i)
        }
        return t
      })(Object(t)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
      }), n
    }),
    {
      subscriptionDiscount: T,
      entitlementDiscount: N
    } = {
      subscriptionDiscount: j.find(e => e.type === P.iS.SUBSCRIPTION_PLAN),
      entitlementDiscount: j.find(e => e.type === P.iS.ENTITLEMENT)
    },
    _ = (0, $.J$)(a.paymentSourceId),
    R = (0, u.bG)([q.A], () => q.A.inReverseTrial());
  return (0, i.jsxs)(i.Fragment, {
    children: [_ ? null : R && null != n ? (0, i.jsx)(ei, {
      endDate: n.currentPeriodEnd,
      className: et.jk
    }) : (0, i.jsx)(w.wP, {
      proratedInvoice: l,
      renewalInvoice: r
    }), (0, i.jsxs)(O.Yx, {
      children: [(0, i.jsx)(O.Xd, {
        children: en.intl.string(en.t.CWIwms)
      }), (0, i.jsx)(O.f0, {
        label: en.intl.formatToPlainString(en.t.a3cAOg, {
          numGuildSubscriptions: v,
          planName: (0, $.Mn)(d.id, false, _)
        }),
        value: _ ? f : S,
        subscriptionDiscount: T,
        entitlementDiscount: N,
        originalAmount: p.subscriptionPlanPrice * v,
        currency: l.currency,
        interval: d.interval,
        intervalCount: d.intervalCount
      }), 0 !== g ? (0, i.jsx)(O.oR, {
        label: (0, i.jsx)(w.sw, {
          label: en.intl.formatToPlainString(en.t.ZSVged, {
            planName: (0, $.RH)(x[0].subscriptionPlanId)
          }),
          tooltipText: en.intl.string(en.t.JmwQJM)
        }),
        value: (0, J.$g)(g, l.currency)
      }) : null, 0 !== b ? (0, i.jsx)(O.oR, {
        label: (0, i.jsx)(w.sw, {
          label: en.intl.string(en.t["+as5ZZ"]),
          tooltipText: en.intl.string(en.t.JmwQJM)
        }),
        value: (0, J.$g)(b, l.currency)
      }) : null, (0, i.jsx)(O.pK, {}), (0, i.jsx)(O.Sd, {
        label: en.intl.format(l.taxInclusive ? _ ? en.t.BqdxQt : en.t.XH4raN : en.t.RUI48E, {}),
        value: A
      }), null != n ? (0, i.jsx)(w.m0, {
        premiumSubscription: n,
        proratedInvoice: l,
        renewalInvoice: r,
        isUpdate: true,
        isPrepaidPaymentSource: _,
        isTrial: R
      }) : (0, i.jsx)(w.m0, {
        renewalInvoice: r,
        priceOptions: a,
        isPrepaidPaymentSource: _
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
      premiumSubscriptionPlan: v,
      newAdditionalPlans: P,
      onPaymentSourceChange: S,
      onPaymentSourceAdd: A,
      onPurchaseTermsChange: E,
      legalTermsNodeRef: T,
      hasLegalTermsFlash: N
    } = e,
    {
      setInvoicePreview: _
    } = (0, b.P5)(),
    O = s.paymentSourceId,
    R = (0, j.g)(a, O),
    D = (0, u.bG)([B.A], () => null != d ? B.A.getPaymentSource(d) : null),
    L = (0, u.bG)([V.A], () => V.A.hidePersonalInformation);
  t = null != c ? (0, $.Om)(c, P[0].quantity, P[0].planId) : P;
  let {
    analyticsLocations: U
  } = (0, f.Ay)(), [w] = (0, h.Kq)({
    subscriptionId: null == c ? true : c.id,
    items: t,
    renewal: false,
    applyEntitlements: true,
    paymentSourceId: O,
    currency: s.currency,
    analyticsLocations: U,
    analyticsLocation: I.A.GUILD_BOOSTING_REVIEW_PRORATED
  }), [M] = (0, h.Kq)({
    subscriptionId: null == c ? true : c.id,
    items: t,
    renewal: true,
    paymentSourceId: O,
    currency: s.currency,
    analyticsLocations: U,
    analyticsLocation: I.A.GUILD_BOOSTING_REVIEW_RENEWAL
  });
  null != M && (r = {
    amount: M.subtotal,
    currency: M.currency,
    tax: M.tax,
    taxInclusive: false
  });
  let G = o.M.EEA_COUNTRIES.has(k.A.ipCountryCodeWithFallback);
  return l.useEffect(() => {
    _(w)
  }, [_, w]), (0, i.jsxs)("div", {
    children: [null != w && null != M ? (0, i.jsx)(er, {
      premiumSubscription: c,
      premiumSubscriptionPlan: v,
      proratedInvoicePreview: w,
      renewalInvoicePreview: M,
      priceOptions: s
    }) : null, (0, i.jsx)("div", {
      className: et.LC,
      children: null != d ? null != D ? (0, i.jsx)(m.m, {
        asContainer: true,
        text: en.intl.string(en.t.XiuuV9),
        children: (0, i.jsx)(x.A, {
          label: en.intl.string(en.t["mmDvV+"]),
          paymentSources: [D],
          selectedPaymentSourceId: D.id,
          hidePersonalInformation: L,
          disabled: true
        })
      }) : (0, i.jsx)("div", {
        children: (0, i.jsx)(p.y$y, {})
      }) : (0, i.jsx)(x.A, {
        label: en.intl.string(en.t["mmDvV+"]),
        paymentSources: Object.values(a),
        selectedPaymentSourceId: O,
        onChange: S,
        onPaymentSourceAdd: A,
        hidePersonalInformation: L
      })
    }), (0, i.jsx)(C.A, {
      isActive: N,
      ref: T,
      children: null != r && (0, i.jsx)(g.A, {
        onChange: E,
        forceShow: true,
        finePrint: (0, i.jsx)(y.A, {
          subscriptionPlan: v,
          paymentSourceType: R,
          proratedAmount: null != w ? w.total : true,
          basePrice: r,
          productLine: z.EZt.BOOST
        }),
        showPricingLink: (null != (n = null == w ? true : w.currency) ? n : ee.Yr.USD) !== ee.Yr.USD,
        showWithdrawalWaiver: G,
        subscriptionPlan: v
      })
    })]
  })
}

function es(e) {
  var n;
  let t, {
      onClose: r,
      guild: a,
      guildBoostQuantity: s,
      isTransfer: c = false,
      withAnimation: o = true,
      paymentSourceType: u,
      didPurchaseOnFractionalPremium: d = false,
      fallbackGuildName: m,
      customCheckoutFlow: y
    } = e,
    {
      theme: v
    } = (0, p.wRf)(),
    [x, g] = l.useState(R.V1.Scenes.ENTRY),
    [P, I] = l.useState(false),
    f = null != (n = null == a ? true : a.name) ? n : m;
  return t = c ? null == f ? en.intl.format(en.t.P52e1r, {}) : en.intl.format(en.t["4UnIk9"], {
    guildName: f
  }) : d ? en.intl.format(en.t.gFaKd1, {
    helpCenterLink: H.A.getArticleURL(z.MVz.FRACTIONAL_PREMIUM_ABOUT)
  }) : null == f ? en.intl.format(en.t.SZ5ohR, {
    guildSubscriptionQuantity: s
  }) : en.intl.format(en.t.GxK3Mv, {
    guildName: f,
    guildSubscriptionQuantity: s
  }), (0, i.jsxs)("div", {
    className: et.RP,
    children: [o ? (0, i.jsx)(R.V1, {
      className: et.ud,
      nextScene: x,
      onScenePlay: e => {
        if (!P) switch (e) {
          case R.V1.Scenes.ENTRY:
            return g(R.V1.Scenes.IDLE);
          case R.V1.Scenes.IDLE:
            return g(R.V1.Scenes.SUCCESS);
          case R.V1.Scenes.SUCCESS:
            return I(true), g(R.V1.Scenes.IDLE)
        }
      },
      pauseWhileUnfocused: false
    }) : null, (0, i.jsx)(L.Ay, {
      className: et.E,
      theme: v,
      premiumType: Q.PremiumTypes.TIER_2,
      type: ee.Nc.has(null != u ? u : ee.he.UNKNOWN) ? L.Ay.Types.PREMIUM_PAYMENT_STARTED : L.Ay.Types.GUILD_BOOST_APPLIED
    }), (0, i.jsx)("div", {
      className: et.xR,
      children: t
    }), (0, i.jsx)(p.Button, {
      variant: "primary",
      text: y === X.uH.APPLE_PAYMENT_LINK ? en.intl.string(en.t.qXV2XU) : en.intl.string(en.t["/iTxgz"]),
      onClick: r
    })]
  })
}
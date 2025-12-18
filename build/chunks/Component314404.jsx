/** Chunk was on web.js **/
/** chunk id: 314404, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => J,
  y: () => $
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk490504 = require("./490504.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk975298 = require("./975298.js"),
  Chunk940824 = require("./940824.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk602733 = require("./602733.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk669079 = require("./669079.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk296848 = require("./296848.js"),
  Chunk711459 = require("./711459.js"),
  Chunk367074 = require("./367074.js"),
  Chunk717401 = require("./717401.js"),
  Chunk847903 = require("./847903.js"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk811334 = require("./811334.jsx"),
  Chunk553797 = require("./553797.jsx"),
  Chunk346071 = require("./346071.jsx"),
  Chunk927699 = require("./927699.jsx"),
  Chunk987716 = require("./987716.jsx"),
  Chunk311821 = require("./311821.jsx"),
  Chunk459965 = require("./459965.js"),
  Chunk971616 = require("./971616.jsx"),
  Chunk251660 = require("./251660.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk214674 = require("./214674.js");

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Y(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : K(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function q(e, t) {
  if (null == e) return {};
  var n, r, i = Q(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function Q(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function X(e, t) {
  let n = V.intl.string(V.t.BYa62u),
    r = V.intl.string(V.t.CDa6Dq),
    i = (() => {
      switch (e.interval) {
        case Z.rV.YEAR:
          return n;
        case Z.rV.MONTH:
        default:
          return r
      }
    })(),
    a = e.skuId;
  switch (t) {
    case Z.Si.TIER_0:
      switch (a) {
        case Z.Si.TIER_1:
          return V.intl.string(V.t.q6mxDS);
        case Z.Si.TIER_2:
          return V.intl.string(V.t.seZVS0);
        default:
          return i
      }
    case Z.Si.TIER_1:
      switch (a) {
        case Z.Si.TIER_0:
          return V.intl.string(V.t["7+u2zg"]);
        case Z.Si.TIER_2:
          return V.intl.string(V.t.NG2qcc);
        default:
          return i
      }
    case Z.Si.TIER_2:
      switch (a) {
        case Z.Si.TIER_0:
        case Z.Si.TIER_1:
          return V.intl.string(V.t["eB0/w9"]);
        case Z.Si.TIER_2:
          return e.interval === Z.rV.MONTH ? V.intl.formatToPlainString(V.t.RqUv86, {
            numFreeGuildSubscriptions: Z.cb
          }) : i;
        default:
          return i
      }
    default:
      return i
  }
}

function J(e) {
  var t, n, a, h;
  let {
    premiumSubscription: b,
    skuId: M,
    selectedPlanId: k,
    setSelectedPlanId: Y,
    planGroup: K,
    priceOptions: Q,
    planOptions: J,
    eligibleForMultiMonthPlans: $,
    referralTrialOfferId: ee,
    subscriptionPeriodEnd: et,
    showTotal: en = true,
    discountInvoiceItems: er,
    useCompactGiftComponents: ei,
    handleClose: ea
  } = e, {
    activeSubscription: eo,
    setSelectedPlanId: es,
    selectedSkuId: el,
    selectedPlan: ec,
    priceOptions: eu,
    enablePremiumBrandRefresh: ed
  } = (0, m.JL)(), {
    isGift: ef,
    giftRecipient: ep,
    selectedGiftStyle: e_,
    customGiftMessage: em,
    setCustomGiftMessage: eh,
    claimableRewards: eg,
    setSelectedGiftingPromotionReward: eE
  } = (0, _.wD)(), eb = (0, A.cF)(ec, ef && (0, y.pO)(ep), eg), ey = (0, g.ao)({
    location: "PremiumPlanSelectStep",
    giftRecipient: ep,
    isGift: ef
  });
  M = null != M ? M : el, b = null != b ? b : eo, o()(true !== b, "should not be undefined");
  let [eO, ev] = (0, s.Wu)([E.Z], () => [null != b ? E.Z.get(b.planId) : null, null != k ? E.Z.get(k) : null]), eS = (0, R.N)(ee), eI = null == eS ? true : eS.subscription_trial, eT = (0, P.N)(), eC = (0, C.Vi)(), eA = null == eT || null == (t = eT.discount) ? true : t.plan_ids, eN = null != ev ? ev : ec, eP = i.useCallback(e => {
    null != Y ? Y(e) : es(e)
  }, [Y, es]), eR = null != Q ? Q : eu;
  o()(null != eR, "Price option has to be set");
  let ew = (0, f.Z)({
      forceFetch: false,
      excludeReverseTrial: false,
      excludeReverseTrialFromCountdown: true
    }),
    eD = null != eS && Z.nG[eS.trial_id].skus.includes(M),
    ex = null != eT && J.some(e => null == eA ? true : eA.includes(e)) && null != eT.discount,
    eL = (0, v.aS)(Z.Xh.PREMIUM_MONTH_TIER_2, false, ef, eR);
  i.useEffect(() => {
    $ && T.ZP.trackExposure({
      location: "5f89bb_1"
    })
  }, [$]);
  let ej = (null == eN ? true : eN.id) != null && J.includes(eN.id);
  i.useEffect(() => {
    if (!ej) {
      if (null == eO || ef) eP(J[0]);
      else if (null != eO) {
        let e = J.find(e => e !== eO.id);
        null != e && eP(e)
      }
    }
  }, [ej, ef, J, eO, eP]), i.useEffect(() => {
    eb && null != eg && eg.length > 0 && eE(eg[0])
  }, [eg, eE, eb]);
  let eM = (0, l.Jb)(),
    {
      ref: ek
    } = eM,
    eU = q(eM, ["ref"]),
    eG = (null == eN ? true : eN.id) != null ? (0, v.aS)(eN.id, false, ef, eR) : true,
    {
      ipCountryCode: eZ
    } = (0, N.Z)(),
    eF = "HR" === eZ && null != eG && eG.currency === B.pK.EUR,
    eB = (0, v.Ap)(eR.paymentSourceId),
    eV = i.useMemo(() => (null == eI ? true : eI.interval) === Z.rV.DAY ? (null == eI ? true : eI.interval_count) > 7 ? V.intl.string(V.t.Z1V2cs) : V.intl.string(V.t.MI1rHs) : V.intl.string(V.t["+S5lrV"]), [eI]),
    eH = !ef && (ex || null != eI && eD && null != et),
    eY = null == er || null == (h = er.find(e => e.subscriptionPlanId === Z.Xh.PREMIUM_MONTH_TIER_2)) || null == (a = h.discounts) || null == (n = a.find(e => e.type === d.eW.SUBSCRIPTION_PLAN)) ? true : n.amount,
    eW = (e, t, n) => {
      if (!eH) return (0, r.jsx)("div", {
        className: H.selectPlanChooseTitle,
        children: V.intl.string(V.t.a19jpU)
      });
      if (t) {
        let t = (null == e ? true : e.trial_id) === Z.a7;
        return (0, r.jsxs)("div", {
          children: [(0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            className: H.trialPlanSelectHeader,
            children: t ? V.intl.format(V.t.nG95hA, {
              endDate: et
            }) : V.intl.format(V.t.s4E7kb, {
              trialEnd: et,
              trialPeriod: eV
            })
          }), (0, r.jsx)("hr", {
            className: H.planSelectSeparator
          })]
        })
      }
      if (n && null != eY && null != eL && k === Z.Xh.PREMIUM_MONTH_TIER_2) {
        var i;
        return (0, r.jsxs)("div", {
          children: [(0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            className: H.trialPlanSelectHeader,
            children: V.intl.format(V.t["nG7g/E"], {
              numMonths: null != (i = null == eT ? true : eT.discount.user_usage_limit) ? i : "",
              discountedPrice: (0, S.T4)(eL.amount - eY, eL.currency),
              regularPrice: (0, S.T4)(eL.amount, eL.currency)
            })
          }), (0, r.jsx)("hr", {
            className: H.planSelectSeparator
          })]
        })
      }
    },
    eK = (e, t, n) => (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: H.selectPlanDivider
      }), (0, r.jsx)(w.az, {
        label: V.intl.string(V.t.txajQG),
        value: (0, r.jsx)(D.Z, {
          price: t.amount,
          currency: t.currency,
          intervalType: n,
          intervalCount: e.intervalCount,
          isPrepaidPaymentSource: eB
        }),
        className: H.selectPlanTotalRow
      })]
    }),
    ez = () => (0, r.jsx)("div", z(W({
      ref: ek
    }, eU), {
      children: J.map(e => (0, r.jsx)(U.Z, {
        planId: e,
        premiumSubscription: ef ? null : null != b ? b : null,
        selectPlan: eP,
        selected: (null == eN ? true : eN.id) === e,
        priceOptions: eR,
        shouldShowUpdatedPaymentModal: eH,
        isEligibleForDiscount: ex,
        discountAmountOff: eY,
        isEligibleForTrial: eD
      }, e))
    })),
    eq = () => eF ? (0, r.jsx)(u.Z, {
      message: V.intl.formatToPlainString(V.t["9hnZoK"], {
        kunaPriceWithCurrency: (0, S.T4)(7.5345 * eG.amount, B.pK.HRK)
      })
    }) : null,
    eQ = null != b && null != k && (0, I.R4)(b, k, K),
    eX = ew.isFractionalPremiumActive && (null == b || eQ) && !ef && null != k && Z.dJ.has(k);
  if (ef) {
    let e = () => {
        if ((0, y.MY)(ep) === y.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != eh) return (0, r.jsx)(L.Z, {
          className: H.customGiftMessageWrapper,
          innerClassName: H.customGiftMessage,
          onTextChange: e => eh(e),
          pendingText: em,
          currentText: em
        })
      },
      t = e => (0, r.jsx)(c.gNt, {
        label: V.intl.string(V.t["3E5hXj"]),
        children: e
      });
    if ((0, y.pO)(ep)) return (0, r.jsxs)("div", {
      className: H.stepBodyCustomGift,
      children: [(0, r.jsx)("div", {
        className: ed ? H.bodyColumnMiddleCentered : H.bodyColumnMiddle,
        children: null != e_ && (0, r.jsx)(j.q, {})
      }), (0, r.jsxs)("div", {
        className: H.bodyColumnRight,
        children: [(0, r.jsx)(G.s, {
          className: ei ? H.compactSendGiftToUser : true,
          giftRecipient: ep
        }), e(), t(ez()), eq(), !ey && (0, r.jsx)(p.Z, {
          onClose: ea
        })]
      })]
    });
    let n = ej && en;
    return (0, r.jsxs)("div", {
      className: H.stepBody,
      children: [(0, r.jsx)(G.s, {
        className: ei ? H.compactSendGiftToUser : true,
        giftRecipient: ep
      }), t(ez()), n && null != eN && null != eG && eK(eN, eG, null), eq(), !ey && (0, r.jsx)(p.Z, {
        onClose: ea
      })]
    })
  }
  let eJ = !eD && !ex && ej && en;
  return (0, r.jsxs)("div", {
    className: H.stepBody,
    children: [eX && (0, r.jsx)(x.n, {
      fractionalPremiumInfo: ew,
      enablePremiumBrandRefresh: ed
    }), null != eO && !eX && !eC && (0, r.jsx)("div", {
      className: H.bodyText,
      children: X(eO, M)
    }), eW(eS, eD, ex), ez(), eJ && null != eN && null != eG && eK(eN, eG, eN.interval), eq(), !eH && en && (0, r.jsx)(u.Z, {
      message: V.intl.format(V.t.Om31w8, {
        documentationLink: O.Z.getArticleURL(F.BhN.LOCALIZED_PRICING)
      })
    })]
  })
}

function $(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    paymentSources: i,
    onBackClick: a,
    showBackButton: o,
    planOptions: s,
    shouldRenderUpdatedPaymentModal: l = false,
    isTrial: u,
    isNextDisabled: d = false
  } = e, {
    paymentSources: f,
    selectedPlan: p
  } = (0, m.JL)(), {
    isGift: h,
    giftRecipient: g,
    claimableRewards: E
  } = (0, _.wD)(), b = (0, y.pO)(g);
  return i = null != i ? i : f, n = null != n ? n : null == p ? true : p.id, (0, r.jsxs)(r.Fragment, {
    children: [null != n && s.includes(n) ? (0, r.jsx)(ee, {
      paymentSources: i,
      onStepChange: t,
      selectedPlanId: n,
      isGift: h,
      claimableRewards: E,
      shouldRenderUpdatedPaymentModal: l,
      isTrial: u,
      isNextDisabled: d
    }) : (0, r.jsx)(c.Button, {
      variant: "primary",
      text: V.intl.string(V.t.XqMe3N),
      disabled: true
    }), o ? (0, r.jsx)(M.Z, {
      className: h && b ? H.equalDistantBackButton : true,
      onClick: a
    }) : null]
  })
}

function ee(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    isGift: i,
    claimableRewards: a,
    paymentSources: o,
    shouldRenderUpdatedPaymentModal: l,
    isTrial: u,
    isNextDisabled: d = false
  } = e, f = (0, s.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()), {
    step: p,
    selectedPlan: _
  } = (0, m.JL)(), {
    hasEntitlements: g
  } = (0, k.H)(n, i), E = null != f && null != f.paymentSourceId || Object.keys(o).length > 0 || g && !u;
  var y = l ? V.intl.string(V.t.PDTjLN) : V.intl.string(V.t.XqMe3N),
    O = h.h8.ADD_PAYMENT_STEPS;
  return E && (O = h.h8.REVIEW), (0, A.id)(_, i, a) && p !== h.h8.SELECT_FREE_SKU && (O = h.h8.SELECT_FREE_SKU), (0, r.jsx)(c.Button, {
    variant: "primary",
    text: y,
    onClick: () => t(O),
    disabled: d
  })
}
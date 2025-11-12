/** Chunk was on web.js **/
/** chunk id: 314404, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => J,
  y: () => $
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk811616 = require("./811616.jsx"),
  Chunk251660 = require("./251660.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk624379 = require("./624379.js");

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
  var n, r, i = X(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function X(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function Q(e, t) {
  let n = V.intl.string(V.t.BYa62u),
    r = V.intl.string(V.t.CDa6Dq),
    i = (() => {
      switch (e.interval) {
        case B.rV.YEAR:
          return n;
        case B.rV.MONTH:
        default:
          return r
      }
    })(),
    a = e.skuId;
  switch (t) {
    case B.Si.TIER_0:
      switch (a) {
        case B.Si.TIER_1:
          return V.intl.string(V.t.q6mxDS);
        case B.Si.TIER_2:
          return V.intl.string(V.t.seZVS0);
        default:
          return i
      }
    case B.Si.TIER_1:
      switch (a) {
        case B.Si.TIER_0:
          return V.intl.string(V.t["7+u2zg"]);
        case B.Si.TIER_2:
          return V.intl.string(V.t.NG2qcc);
        default:
          return i
      }
    case B.Si.TIER_2:
      switch (a) {
        case B.Si.TIER_0:
        case B.Si.TIER_1:
          return V.intl.string(V.t["eB0/w9"]);
        case B.Si.TIER_2:
          return e.interval === B.rV.MONTH ? V.intl.formatToPlainString(V.t.RqUv86, {
            numFreeGuildSubscriptions: B.cb
          }) : i;
        default:
          return i
      }
    default:
      return i
  }
}

function J(e) {
  var t, n, a, m;
  let {
    premiumSubscription: b,
    skuId: j,
    selectedPlanId: k,
    setSelectedPlanId: Y,
    planGroup: K,
    priceOptions: X,
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
  } = (0, h.JL)(), {
    isGift: ef,
    giftRecipient: e_,
    selectedGiftStyle: ep,
    customGiftMessage: eh,
    setCustomGiftMessage: em,
    claimableRewards: eg,
    setSelectedGiftingPromotionReward: eE
  } = (0, p.wD)(), eb = (0, C.cF)(ec, ef && (0, y.pO)(e_), eg), ey = (0, g.ao)({
    location: "PremiumPlanSelectStep",
    giftRecipient: e_,
    isGift: ef
  });
  j = null != j ? j : el, b = null != b ? b : eo, o()(true !== b, "should not be undefined");
  let [eO, ev] = (0, s.Wu)([E.Z], () => [null != b ? E.Z.get(b.planId) : null, null != k ? E.Z.get(k) : null]), eI = (0, P.N)(ee), eT = null == eI ? true : eI.subscription_trial, eS = (0, R.N)(), eA = (0, A.Vi)(), eC = null == eS || null == (t = eS.discount) ? true : t.plan_ids, eN = null != ev ? ev : ec, eR = i.useCallback(e => {
    null != Y ? Y(e) : es(e)
  }, [Y, es]), eP = null != X ? X : eu;
  o()(null != eP, "Price option has to be set");
  let eD = (0, f.Z)({
      forceFetch: false,
      excludeReverseTrial: false,
      excludeReverseTrialFromCountdown: true
    }),
    ew = null != eI && B.nG[eI.trial_id].skus.includes(j),
    ex = null != eS && J.some(e => null == eC ? true : eC.includes(e)) && null != eS.discount,
    eL = (0, v.aS)(B.Xh.PREMIUM_MONTH_TIER_2, false, ef, eP);
  i.useEffect(() => {
    $ && S.ZP.trackExposure({
      location: "5f89bb_1"
    })
  }, [$]);
  let eM = (null == eN ? true : eN.id) != null && J.includes(eN.id);
  i.useEffect(() => {
    if (!eM) {
      if (null == eO || ef) eR(J[0]);
      else if (null != eO) {
        let e = J.find(e => e !== eO.id);
        null != e && eR(e)
      }
    }
  }, [eM, ef, J, eO, eR]), i.useEffect(() => {
    eb && null != eg && eg.length > 0 && eE(eg[0])
  }, [eg, eE, eb]);
  let ej = (0, l.Jb)(),
    {
      ref: ek
    } = ej,
    eU = q(ej, ["ref"]),
    eG = (null == eN ? true : eN.id) != null ? (0, v.aS)(eN.id, false, ef, eP) : true,
    {
      ipCountryCode: eB
    } = (0, N.Z)(),
    eZ = "HR" === eB && null != eG && eG.currency === F.pK.EUR,
    eF = (0, v.Ap)(eP.paymentSourceId),
    eV = i.useMemo(() => (null == eT ? true : eT.interval) === B.rV.DAY ? (null == eT ? true : eT.interval_count) > 7 ? V.intl.string(V.t.Z1V2cs) : V.intl.string(V.t.MI1rHs) : V.intl.string(V.t["+S5lrV"]), [eT]),
    eH = !ef && (ex || null != eT && ew && null != et),
    eY = null == er || null == (m = er.find(e => e.subscriptionPlanId === B.Xh.PREMIUM_MONTH_TIER_2)) || null == (a = m.discounts) || null == (n = a.find(e => e.type === d.eW.SUBSCRIPTION_PLAN)) ? true : n.amount,
    eW = (e, t, n) => {
      if (!eH) return (0, r.jsx)("div", {
        className: H.selectPlanChooseTitle,
        children: V.intl.string(V.t.a19jpU)
      });
      if (t) {
        let t = (null == e ? true : e.trial_id) === B.a7;
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
      if (n && null != eY && null != eL && k === B.Xh.PREMIUM_MONTH_TIER_2) {
        var i;
        return (0, r.jsxs)("div", {
          children: [(0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            className: H.trialPlanSelectHeader,
            children: V.intl.format(V.t["nG7g/E"], {
              numMonths: null != (i = null == eS ? true : eS.discount.user_usage_limit) ? i : "",
              discountedPrice: (0, I.T4)(eL.amount - eY, eL.currency),
              regularPrice: (0, I.T4)(eL.amount, eL.currency)
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
      }), (0, r.jsx)(D.az, {
        label: V.intl.string(V.t.txajQG),
        value: (0, r.jsx)(w.Z, {
          price: t.amount,
          currency: t.currency,
          intervalType: n,
          intervalCount: e.intervalCount,
          isPrepaidPaymentSource: eF
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
        selectPlan: eR,
        selected: (null == eN ? true : eN.id) === e,
        priceOptions: eP,
        shouldShowUpdatedPaymentModal: eH,
        isEligibleForDiscount: ex,
        discountAmountOff: eY,
        isEligibleForTrial: ew
      }, e))
    })),
    eq = () => eZ ? (0, r.jsx)(u.Z, {
      message: V.intl.formatToPlainString(V.t["9hnZoK"], {
        kunaPriceWithCurrency: (0, I.T4)(7.5345 * eG.amount, F.pK.HRK)
      })
    }) : null,
    eX = null != b && null != k && (0, T.R4)(b, k, K),
    eQ = eD.isFractionalPremiumActive && (null == b || eX) && !ef && null != k && B.dJ.has(k);
  if (ef) {
    let e = () => {
        if ((0, y.MY)(e_) === y.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != em) return (0, r.jsx)(L.Z, {
          sectionTitle: V.intl.string(V.t.B3miE8),
          className: H.customGiftMessageWrapper,
          innerClassName: H.customGiftMessage,
          onTextChange: e => em(e),
          pendingText: eh,
          currentText: eh
        })
      },
      t = e => (0, r.jsx)(c.gNt, {
        label: V.intl.string(V.t["3E5hXj"]),
        children: e
      });
    if ((0, y.pO)(e_)) return (0, r.jsxs)("div", {
      className: H.stepBodyCustomGift,
      children: [(0, r.jsx)("div", {
        className: ed ? H.bodyColumnMiddleCentered : H.bodyColumnMiddle,
        children: null != ep && (0, r.jsx)(M.q, {})
      }), (0, r.jsxs)("div", {
        className: H.bodyColumnRight,
        children: [(0, r.jsx)(G.s, {
          className: ei ? H.compactSendGiftToUser : true,
          giftRecipient: e_
        }), e(), t(ez()), eq(), !ey && (0, r.jsx)(_.Z, {
          onClose: ea
        })]
      })]
    });
    let n = eM && en;
    return (0, r.jsxs)("div", {
      className: H.stepBody,
      children: [(0, r.jsx)(G.s, {
        className: ei ? H.compactSendGiftToUser : true,
        giftRecipient: e_
      }), t(ez()), n && null != eN && null != eG && eK(eN, eG, null), eq(), !ey && (0, r.jsx)(_.Z, {
        onClose: ea
      })]
    })
  }
  let eJ = !ew && !ex && eM && en;
  return (0, r.jsxs)("div", {
    className: H.stepBody,
    children: [eQ && (0, r.jsx)(x.n, {
      fractionalPremiumInfo: eD,
      enablePremiumBrandRefresh: ed
    }), null != eO && !eQ && !eA && (0, r.jsx)("div", {
      className: H.bodyText,
      children: Q(eO, j)
    }), eW(eI, ew, ex), ez(), eJ && null != eN && null != eG && eK(eN, eG, eN.interval), eq(), !eH && en && (0, r.jsx)(u.Z, {
      message: V.intl.format(V.t.Om31w8, {
        documentationLink: O.Z.getArticleURL(Z.BhN.LOCALIZED_PRICING)
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
    selectedPlan: _
  } = (0, h.JL)(), {
    isGift: m,
    giftRecipient: g,
    claimableRewards: E
  } = (0, p.wD)(), b = (0, y.pO)(g);
  return i = null != i ? i : f, n = null != n ? n : null == _ ? true : _.id, (0, r.jsxs)(r.Fragment, {
    children: [null != n && s.includes(n) ? (0, r.jsx)(ee, {
      paymentSources: i,
      onStepChange: t,
      selectedPlanId: n,
      isGift: m,
      claimableRewards: E,
      shouldRenderUpdatedPaymentModal: l,
      isTrial: u,
      isNextDisabled: d
    }) : (0, r.jsx)(c.Button, {
      variant: "primary",
      text: V.intl.string(V.t.XqMe3N),
      disabled: true
    }), o ? (0, r.jsx)(j.Z, {
      className: m && b ? H.equalDistantBackButton : true,
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
    step: _,
    selectedPlan: p
  } = (0, h.JL)(), {
    hasEntitlements: g
  } = (0, k.H)(n, i), E = null != f && null != f.paymentSourceId || Object.keys(o).length > 0 || g && !u;
  var y = l ? V.intl.string(V.t.PDTjLN) : V.intl.string(V.t.XqMe3N),
    O = m.h8.ADD_PAYMENT_STEPS;
  return E && (O = m.h8.REVIEW), (0, C.id)(p, i, a) && _ !== m.h8.SELECT_FREE_SKU && (O = m.h8.SELECT_FREE_SKU), (0, r.jsx)(c.Button, {
    variant: "primary",
    text: y,
    onClick: () => t(O),
    disabled: d
  })
}
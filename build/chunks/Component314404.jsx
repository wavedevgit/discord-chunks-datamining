/** Chunk was on web.js **/
/** chunk id: 314404, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => $,
  y: () => ee
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
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
  Chunk104494 = require("./104494.js"),
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

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      W(e, t, n[t])
    })
  }
  return e
}

function z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function X(e, t) {
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

function J(e, t) {
  let n = H.intl.string(H.t.BYa62t),
    r = H.intl.string(H.t.CDa6Dg),
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
          return H.intl.string(H.t.q6mxDQ);
        case Z.Si.TIER_2:
          return H.intl.string(H.t.seZVS0);
        default:
          return i
      }
    case Z.Si.TIER_1:
      switch (a) {
        case Z.Si.TIER_0:
          return H.intl.string(H.t["7+u2zs"]);
        case Z.Si.TIER_2:
          return H.intl.string(H.t.NG2qcX);
        default:
          return i
      }
    case Z.Si.TIER_2:
      switch (a) {
        case Z.Si.TIER_0:
        case Z.Si.TIER_1:
          return H.intl.string(H.t["eB0/w8"]);
        case Z.Si.TIER_2:
          return e.interval === Z.rV.MONTH ? H.intl.formatToPlainString(H.t["RqUv8/"], {
            numFreeGuildSubscriptions: Z.cb
          }) : i;
        default:
          return i
      }
    default:
      return i
  }
}

function $(e) {
  var t, n, a, s;
  let {
    premiumSubscription: E,
    skuId: y,
    selectedPlanId: k,
    setSelectedPlanId: U,
    planGroup: W,
    priceOptions: z,
    planOptions: Q,
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
  } = (0, g.JL)(), {
    isGift: ef,
    giftRecipient: e_,
    selectedGiftStyle: ep,
    customGiftMessage: eh,
    setCustomGiftMessage: em,
    claimableRewards: eg,
    setSelectedGiftingPromotionReward: eE
  } = (0, m.wD)(), eb = (0, N.cF)(ec, ef && (0, O.pO)(e_), eg);
  y = null != y ? y : el, E = null != E ? E : eo, l()(true !== E, "should not be undefined");
  let [ey, eO] = (0, c.Wu)([b.Z], () => [null != E ? b.Z.get(E.planId) : null, null != k ? b.Z.get(k) : null]), ev = (0, w.N)(ee), eI = null == ev ? true : ev.subscription_trial, eT = (0, P.Ng)(), eS = (0, C.Vi)(), eA = null == eT || null == (t = eT.discount) ? true : t.plan_ids, eC = null != eO ? eO : ec, eN = i.useCallback(e => {
    null != U ? U(e) : es(e)
  }, [U, es]), eR = null != z ? z : eu;
  l()(null != eR, "Price option has to be set");
  let eP = (0, p.Z)({
      forceFetch: false,
      excludeReverseTrial: false,
      excludeReverseTrialFromCountdown: true
    }),
    ew = null != ev && Z.nG[ev.trial_id].skus.includes(y),
    eD = null != eT && Q.some(e => null == eA ? true : eA.includes(e)) && null != eT.discount,
    eL = (0, I.aS)(Z.Xh.PREMIUM_MONTH_TIER_2, false, ef, eR);
  i.useEffect(() => {
    $ && A.ZP.trackExposure({
      location: "5f89bb_1"
    })
  }, [$]);
  let ex = (null == eC ? true : eC.id) != null && Q.includes(eC.id);
  i.useEffect(() => {
    if (!ex) {
      if (null == ey || ef) eN(Q[0]);
      else if (null != ey) {
        let e = Q.find(e => e !== ey.id);
        null != e && eN(e)
      }
    }
  }, [ex, ef, Q, ey, eN]), i.useEffect(() => {
    eb && null != eg && eg.length > 0 && eE(eg[0])
  }, [eg, eE, eb]);
  let ej = (0, u.Jb)(),
    {
      ref: eM
    } = ej,
    ek = X(ej, ["ref"]),
    eU = (null == eC ? true : eC.id) != null ? (0, I.aS)(eC.id, false, ef, eR) : true,
    {
      ipCountryCode: eG
    } = (0, R.Z)(),
    eB = "HR" === eG && null != eU && eU.currency === V.pK.EUR,
    eZ = (0, I.Ap)(eR.paymentSourceId),
    eF = i.useMemo(() => (null == eI ? true : eI.interval) === Z.rV.DAY ? (null == eI ? true : eI.interval_count) > 7 ? H.intl.string(H.t.Z1V2cn) : H.intl.string(H.t.MI1rHh) : H.intl.string(H.t["+S5lra"]), [eI]),
    eV = !ef && (eD || null != eI && ew && null != et),
    eH = null == er || null == (s = er.find(e => e.subscriptionPlanId === Z.Xh.PREMIUM_MONTH_TIER_2)) || null == (a = s.discounts) || null == (n = a.find(e => e.type === _.eW.SUBSCRIPTION_PLAN)) ? true : n.amount,
    eY = (e, t, n) => {
      if (!eV) return (0, r.jsx)("div", {
        className: Y.selectPlanChooseTitle,
        children: H.intl.string(H.t.a19jpa)
      });
      if (t) {
        let t = (null == e ? true : e.trial_id) === Z.a7;
        return (0, r.jsxs)("div", {
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            className: Y.trialPlanSelectHeader,
            children: t ? H.intl.format(H.t.nG95hI, {
              endDate: et
            }) : H.intl.format(H.t.s4E7kZ, {
              trialEnd: et,
              trialPeriod: eF
            })
          }), (0, r.jsx)("hr", {
            className: Y.planSelectSeparator
          })]
        })
      }
      if (n && null != eH && null != eL && k === Z.Xh.PREMIUM_MONTH_TIER_2) return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          className: Y.trialPlanSelectHeader,
          children: H.intl.format(H.t["nG7g/P"], {
            numMonths: null == eT ? true : eT.discount.user_usage_limit,
            discountedPrice: (0, T.T4)(eL.amount - eH, eL.currency),
            regularPrice: (0, T.T4)(eL.amount, eL.currency)
          })
        }), (0, r.jsx)("hr", {
          className: Y.planSelectSeparator
        })]
      })
    },
    eW = (e, t, n) => (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: Y.selectPlanDivider
      }), (0, r.jsx)(D.az, {
        label: H.intl.string(H.t.txajQE),
        value: (0, r.jsx)(L.Z, {
          price: t.amount,
          currency: t.currency,
          intervalType: n,
          intervalCount: e.intervalCount,
          isPrepaidPaymentSource: eZ
        }),
        className: Y.selectPlanTotalRow
      })]
    }),
    eK = () => (0, r.jsx)("div", q(K({
      ref: eM
    }, ek), {
      children: Q.map(e => (0, r.jsx)(G.Z, {
        planId: e,
        premiumSubscription: ef ? null : null != E ? E : null,
        selectPlan: eN,
        selected: (null == eC ? true : eC.id) === e,
        priceOptions: eR,
        shouldShowUpdatedPaymentModal: eV,
        isEligibleForDiscount: eD,
        discountAmountOff: eH,
        isEligibleForTrial: ew
      }, e))
    })),
    ez = () => eB ? (0, r.jsx)(f.Z, {
      message: H.intl.formatToPlainString(H.t["9hnZoK"], {
        kunaPriceWithCurrency: (0, T.T4)(7.5345 * eU.amount, V.pK.HRK)
      })
    }) : null,
    eq = null != E && null != k && (0, S.R4)(E, k, W),
    eX = eP.isFractionalPremiumActive && (null == E || eq) && !ef && null != k && Z.dJ.has(k);
  if (ef) {
    let e = () => {
        if ((0, O.MY)(e_) === O.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != em) return (0, r.jsx)(j.Z, {
          sectionTitle: H.intl.string(H.t.B3miEx),
          className: Y.customGiftMessageWrapper,
          innerClassName: Y.customGiftMessage,
          onTextChange: e => em(e),
          pendingText: eh,
          currentText: eh
        })
      },
      t = () => (0, r.jsx)(d.vwX, {
        className: o()(Y.selectGiftTitle, {
          [Y.compactSelectGiftTitle]: ei
        }),
        children: H.intl.string(H.t["3E5hXl"])
      });
    if ((0, O.pO)(e_)) return (0, r.jsxs)("div", {
      className: Y.stepBodyCustomGift,
      children: [(0, r.jsx)("div", {
        className: ed ? Y.bodyColumnMiddleCentered : Y.bodyColumnMiddle,
        children: null != ep && (0, r.jsx)(M.q, {})
      }), (0, r.jsxs)("div", {
        className: Y.bodyColumnRight,
        children: [(0, r.jsx)(B.s, {
          className: ei ? Y.compactSendGiftToUser : true,
          giftRecipient: e_
        }), e(), t(), eK(), ez(), (0, r.jsx)(h.Z, {
          onClose: ea
        })]
      })]
    });
    let n = ex && en;
    return (0, r.jsxs)("div", {
      className: Y.stepBody,
      children: [(0, r.jsx)(B.s, {
        className: ei ? Y.compactSendGiftToUser : true,
        giftRecipient: e_
      }), t(), eK(), n && null != eC && null != eU && eW(eC, eU, null), ez(), (0, r.jsx)(h.Z, {
        onClose: ea
      })]
    })
  }
  let eQ = !ew && !eD && ex && en;
  return (0, r.jsxs)("div", {
    className: Y.stepBody,
    children: [eX && (0, r.jsx)(x.n, {
      fractionalPremiumInfo: eP,
      enablePremiumBrandRefresh: ed
    }), null != ey && !eX && !eS && (0, r.jsx)("div", {
      className: Y.bodyText,
      children: J(ey, y)
    }), eY(ev, ew, eD), eK(), eQ && null != eC && null != eU && eW(eC, eU, eC.interval), ez(), !eV && en && (0, r.jsx)(f.Z, {
      message: H.intl.format(H.t.Om31w8, {
        documentationLink: v.Z.getArticleURL(F.BhN.LOCALIZED_PRICING)
      })
    })]
  })
}

function ee(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    paymentSources: i,
    onBackClick: a,
    showBackButton: o,
    planOptions: s,
    shouldRenderUpdatedPaymentModal: l = false,
    isTrial: c,
    isNextDisabled: u = false
  } = e, {
    paymentSources: f,
    selectedPlan: _
  } = (0, g.JL)(), {
    isGift: p,
    giftRecipient: h,
    claimableRewards: E
  } = (0, m.wD)(), b = (0, O.pO)(h);
  return i = null != i ? i : f, n = null != n ? n : null == _ ? true : _.id, (0, r.jsxs)(r.Fragment, {
    children: [null != n && s.includes(n) ? (0, r.jsx)(et, {
      paymentSources: i,
      onStepChange: t,
      selectedPlanId: n,
      isGift: p,
      claimableRewards: E,
      shouldRenderUpdatedPaymentModal: l,
      isTrial: c,
      isNextDisabled: u
    }) : (0, r.jsx)(d.zxk, {
      variant: "primary",
      text: H.intl.string(H.t.XqMe3N),
      disabled: true
    }), o ? (0, r.jsx)(k.Z, {
      className: p && b ? Y.equalDistantBackButton : true,
      onClick: a
    }) : null]
  })
}

function et(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    isGift: i,
    claimableRewards: a,
    paymentSources: o,
    shouldRenderUpdatedPaymentModal: s,
    isTrial: l,
    isNextDisabled: u = false
  } = e, f = (0, c.e7)([y.Z], () => y.Z.getPremiumTypeSubscription()), {
    step: _,
    selectedPlan: p
  } = (0, g.JL)(), {
    hasEntitlements: h
  } = (0, U.H)(n, i), m = null != f && null != f.paymentSourceId || Object.keys(o).length > 0 || h && !l;
  var b = s ? H.intl.string(H.t.PDTjLC) : H.intl.string(H.t.XqMe3N),
    O = E.h8.ADD_PAYMENT_STEPS;
  return m && (O = E.h8.REVIEW), (0, N.id)(p, i, a) && _ !== E.h8.SELECT_FREE_SKU && (O = E.h8.SELECT_FREE_SKU), (0, r.jsx)(d.zxk, {
    variant: "primary",
    text: b,
    onClick: () => t(O),
    disabled: u
  })
}
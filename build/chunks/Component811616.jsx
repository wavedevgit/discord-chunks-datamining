/** Chunk was on web.js **/
/** chunk id: 811616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk509545 = require("./509545.js"),
  Chunk669079 = require("./669079.js"),
  Chunk930153 = require("./930153.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk367074 = require("./367074.js"),
  Chunk621651 = require("./621651.js"),
  Chunk104494 = require("./104494.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk399377 = require("./399377.js");

function T(e) {
  let {
    premiumSubscription: t,
    planId: n,
    selectPlan: i,
    selected: o,
    priceOptions: T,
    shouldShowUpdatedPaymentModal: A,
    isEligibleForDiscount: C,
    discountAmountOff: N,
    isEligibleForTrial: R
  } = e, P = (0, l.e7)([_.default], () => _.default.locale), w = (0, l.e7)([p.Z], () => p.Z.get(n)), {
    isGift: D,
    giftRecipient: x
  } = (0, f.wD)(), L = D && (0, h.pO)(x);
  s()(null != w, "Missing subscriptionPlan");
  let j = null != t && t.planId === n,
    M = j || n === v.Xh.PREMIUM_MONTH_TIER_2 && null != t && [v.Xh.PREMIUM_YEAR_TIER_0, v.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId),
    k = v.nH[n],
    {
      enabled: U
    } = y.Z.getCurrentConfig({
      location: "PremiumSwitchPlanSelectOption"
    }, {
      autoTrackExposure: false
    });
  U && (k = (0, g.UV)(w, D, T));
  let G = (0, g.aS)(n, false, D, T),
    B = (0, g.Ap)(T.paymentSourceId),
    Z = null != k && !A,
    F = (0, O.Ng)(),
    V = (0, b.Vi)(),
    H = w.interval === v.rV.YEAR ? I.t.ECT4Aw : I.t.v9QeOD,
    Y = () => V && !D && n === v.Xh.PREMIUM_MONTH_TIER_2 ? (0, r.jsx)(d.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: S.planOptionDiscount,
      children: I.intl.string(I.t.iQTfW1)
    }) : null,
    W = () => null != k && !V && (0, r.jsx)(d.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: S.planOptionDiscount,
      children: I.intl.format(I.t.IAybsL, {
        discount: (0, m.T3)(P, k / 100)
      })
    }),
    K = () => V ? Y() : w.interval === v.rV.YEAR && null != t || Z && !j ? w.interval === v.rV.YEAR && null != t ? (0, r.jsxs)("span", {
      className: S.planOptionMonthsFree,
      children: ["(", I.intl.string(I.t["122kWF"]), ")"]
    }) : Z && !j ? W() : true : null,
    z = () => (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: a()(S.planOptionInterval, {
          [S.optionSelected]: o || L,
          [S.updatedOptionSelected]: A && (o || L)
        }),
        children: [(0, g.L7)(w.interval, D, B, w.intervalCount, L, (0, g.Rd)(w.id)), L && K()]
      }), L && (0, r.jsx)("div", {
        className: S.planOneTimeCost,
        children: I.intl.format(I.t.ori2Ji, {
          currencyAmount: (0, E.T4)(G.amount, G.currency)
        })
      })]
    }),
    q = () => C && null != N && w.interval === v.rV.MONTH ? (0, E.T4)(G.amount - N, G.currency) : R ? (0, E.T4)(0, G.currency, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) : (0, E.T4)(G.amount, G.currency),
    X = () => {
      if (C && null != N && w.interval === v.rV.MONTH) {
        var e;
        return I.intl.format(I.t["VeE/4O"], {
          numMonths: null != (e = null == F ? true : F.discount.user_usage_limit) ? e : v.rt,
          discountedPrice: (0, E.T4)(G.amount - N, G.currency),
          regularPrice: (0, E.T4)(G.amount, G.currency)
        })
      }
      return R ? I.intl.format(H, {
        price: (0, E.T4)(G.amount, G.currency)
      }) : w.interval === v.rV.YEAR ? I.intl.formatToPlainString(I.t.rtLTJC, {
        percent: k
      }) : null
    };
  return (0, r.jsxs)(d.P3F, {
    role: L ? "menuitem" : "radio",
    "aria-checked": o,
    tabIndex: o ? 0 : false,
    focusProps: {
      offset: {
        left: false,
        right: false,
        top: 0,
        bottom: 0
      }
    },
    onClick: M ? true : () => i(n),
    className: a()(S.planOptionClickableContainer, {
      [S.selectedPlan]: L && o,
      [S.selectionBox]: L
    }),
    children: [(0, r.jsxs)("div", {
      className: a()(S.planOption, {
        [S.planOptionDisabled]: M
      }),
      children: [(0, r.jsxs)("div", {
        className: S.planOptionClickable,
        children: [!L && (0, r.jsx)(u.$q, {
          readOnly: true,
          displayOnly: true,
          value: o,
          shape: u.zV.ROUND,
          color: c.Z.unsafe_rawColors.BRAND_500.css,
          type: u.M0.INVERTED,
          className: S.planOptionCheckbox
        }), z(), j && (0, r.jsxs)("span", {
          className: S.planOptionCurrentPlan,
          children: ["(", I.intl.string(I.t.ymSxh4), ")"]
        }), !L && K()]
      }), A ? (0, r.jsx)("div", {
        className: a()({
          [S.optionPriceSelected]: o
        }),
        children: I.intl.format(I.t.hXcaLS, {
          price: q()
        })
      }) : (0, r.jsx)("div", {
        className: a()({
          [S.optionSelected]: o || L
        }),
        children: (0, E.T4)(G.amount, G.currency)
      })]
    }), A && (0, r.jsx)("div", {
      className: S.planOptionSubtextContainer,
      children: (0, r.jsx)(d.Text, {
        variant: "text-md/normal",
        color: o ? "text-default" : "interactive-normal",
        className: a()(S.planOptionSubtext, {
          [S.discountPlanOptionSubtext]: C
        }),
        children: X()
      })
    })]
  })
}
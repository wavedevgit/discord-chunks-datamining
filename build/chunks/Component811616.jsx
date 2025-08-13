/** Chunk was on web.js **/
/** chunk id: 811616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
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
  Chunk674777 = require("./674777.js");

function T(e) {
  let {
    premiumSubscription: t,
    planId: n,
    selectPlan: i,
    selected: a,
    priceOptions: T,
    shouldShowUpdatedPaymentModal: S,
    isEligibleForDiscount: A,
    discountAmountOff: N,
    isEligibleForTrial: C
  } = e, R = (0, l.e7)([f.default], () => f.default.locale), P = (0, l.e7)([_.Z], () => _.Z.get(n)), {
    isGift: w,
    giftRecipient: D
  } = (0, d.wD)(), L = w && (0, p.pO)(D);
  s()(null != P, "Missing subscriptionPlan");
  let x = null != t && t.planId === n,
    M = x || n === O.Xh.PREMIUM_MONTH_TIER_2 && null != t && [O.Xh.PREMIUM_YEAR_TIER_0, O.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId),
    k = O.nH[n],
    {
      enabled: j
    } = b.Z.getCurrentConfig({
      location: "PremiumSwitchPlanSelectOption"
    }, {
      autoTrackExposure: false
    });
  j && (k = (0, m.UV)(P, w, T));
  let U = (0, m.aS)(n, false, w, T),
    G = (0, m.Ap)(T.paymentSourceId),
    B = null != k && !S,
    Z = (0, y.Ng)(),
    F = (0, E.Vi)(),
    V = P.interval === O.rV.YEAR ? v.t.ECT4Aw : v.t.v9QeOD,
    H = () => F && !w && n === O.Xh.PREMIUM_MONTH_TIER_2 ? (0, r.jsx)(u.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: I.planOptionDiscount,
      children: v.intl.string(v.t.iQTfW1)
    }) : null,
    Y = () => null != k && !F && (0, r.jsx)(u.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: I.planOptionDiscount,
      children: v.intl.format(v.t.IAybsL, {
        discount: (0, h.T3)(R, k / 100)
      })
    }),
    W = () => F ? H() : P.interval === O.rV.YEAR && null != t || B && !x ? P.interval === O.rV.YEAR && null != t ? (0, r.jsxs)("span", {
      className: I.planOptionMonthsFree,
      children: ["(", v.intl.string(v.t["122kWF"]), ")"]
    }) : B && !x ? Y() : true : null,
    K = () => (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: o()(I.planOptionInterval, {
          [I.optionSelected]: a || L,
          [I.updatedOptionSelected]: S && (a || L)
        }),
        children: [(0, m.L7)(P.interval, w, G, P.intervalCount, L, (0, m.Rd)(P.id)), L && W()]
      }), L && (0, r.jsx)("div", {
        className: I.planOneTimeCost,
        children: v.intl.format(v.t.ori2Ji, {
          currencyAmount: (0, g.T4)(U.amount, U.currency)
        })
      })]
    }),
    z = () => A && null != N && P.interval === O.rV.MONTH ? (0, g.T4)(U.amount - N, U.currency) : C ? (0, g.T4)(0, U.currency, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) : (0, g.T4)(U.amount, U.currency),
    q = () => {
      if (A && null != N && P.interval === O.rV.MONTH) {
        var e;
        return v.intl.format(v.t["VeE/4O"], {
          numMonths: null != (e = null == Z ? true : Z.discount.user_usage_limit) ? e : O.rt,
          discountedPrice: (0, g.T4)(U.amount - N, U.currency),
          regularPrice: (0, g.T4)(U.amount, U.currency)
        })
      }
      return C ? v.intl.format(V, {
        price: (0, g.T4)(U.amount, U.currency)
      }) : P.interval === O.rV.YEAR ? v.intl.formatToPlainString(v.t.rtLTJC, {
        percent: k
      }) : null
    };
  return (0, r.jsxs)(u.P3F, {
    role: L ? "menuitem" : "radio",
    "aria-checked": a,
    tabIndex: a ? 0 : false,
    focusProps: {
      offset: {
        left: false,
        right: false,
        top: 0,
        bottom: 0
      }
    },
    onClick: M ? true : () => i(n),
    className: o()(I.planOptionClickableContainer, {
      [I.selectedPlan]: L && a,
      [I.selectionBox]: L
    }),
    children: [(0, r.jsxs)("div", {
      className: o()(I.planOption, {
        [I.planOptionDisabled]: M
      }),
      children: [(0, r.jsxs)("div", {
        className: I.planOptionClickable,
        children: [!L && (0, r.jsx)(u.XZJ, {
          readOnly: true,
          displayOnly: true,
          value: a,
          shape: u.XZJ.Shapes.ROUND,
          color: c.Z.unsafe_rawColors.BRAND_500.css,
          type: u.XZJ.Types.INVERTED,
          className: I.planOptionCheckbox
        }), K(), x && (0, r.jsxs)("span", {
          className: I.planOptionCurrentPlan,
          children: ["(", v.intl.string(v.t.ymSxh4), ")"]
        }), !L && W()]
      }), S ? (0, r.jsx)("div", {
        className: o()({
          [I.optionPriceSelected]: a
        }),
        children: v.intl.format(v.t.hXcaLS, {
          price: z()
        })
      }) : (0, r.jsx)("div", {
        className: o()({
          [I.optionSelected]: a || L
        }),
        children: (0, g.T4)(U.amount, U.currency)
      })]
    }), S && (0, r.jsx)("div", {
      className: I.planOptionSubtextContainer,
      children: (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        color: a ? "text-default" : "interactive-normal",
        className: o()(I.planOptionSubtext, {
          [I.discountPlanOptionSubtext]: A
        }),
        children: q()
      })
    })]
  })
}
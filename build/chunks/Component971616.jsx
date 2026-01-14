/** Chunk was on web.js **/
/** chunk id: 971616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk509545 = require("./509545.js"),
  Chunk930153 = require("./930153.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk815610 = require("./815610.js");

function E(e) {
  let {
    userLocale: t,
    premiumSubscription: n,
    planId: i,
    selectPlan: o,
    selected: E,
    priceOptions: b,
    isPrepaid: y,
    isCustomGift: O,
    shouldUseCalculatedDiscount: v,
    shouldShowUpdatedPaymentModal: S,
    discountOffer: I,
    discountAmountOff: T,
    isEligibleForDiscount: C,
    isEligibleForBOGOPromotion: A,
    isEligibleForTrial: N
  } = e, {
    isGift: P
  } = (0, u.wD)(), R = (0, l.e7)([d.Z], () => d.Z.get(i));
  s()(null != R, "Missing subscriptionPlan");
  let w = null != n && n.planId === i,
    D = w || i === m.Xh.PREMIUM_MONTH_TIER_2 && null != n && [m.Xh.PREMIUM_YEAR_TIER_0, m.Xh.PREMIUM_YEAR_TIER_1].includes(n.planId),
    x = m.nH[i];
  v && (x = (0, p.UV)(R, P, b));
  let L = (0, p.aS)(i, false, P, b),
    j = null != x && !S,
    M = R.interval === m.rV.YEAR ? h.t.ECT4A5 : h.t.v9QeON,
    k = () => A && !P && i === m.Xh.PREMIUM_MONTH_TIER_2 ? (0, r.jsx)(c.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: g.planOptionDiscount,
      children: h.intl.string(h.t.iQTfWx)
    }) : null,
    U = () => null != x && !A && (0, r.jsx)(c.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: g.planOptionDiscount,
      children: h.intl.format(h.t.IAybsG, {
        discount: (0, f.T3)(t, x / 100)
      })
    }),
    G = () => A ? k() : R.interval === m.rV.YEAR && null != n || j && !w ? R.interval === m.rV.YEAR && null != n ? (0, r.jsxs)("span", {
      className: g.planOptionMonthsFree,
      children: ["(", h.intl.string(h.t["122kWB"]), ")"]
    }) : j && !w ? U() : true : null,
    Z = () => (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: a()(g.planOptionInterval, {
          [g.optionSelected]: E || O,
          [g.updatedOptionSelected]: S && (E || O)
        }),
        children: [(0, p.L7)(R.interval, P, y, R.intervalCount, O, (0, p.Rd)(R.id)), O && G()]
      }), O && (0, r.jsx)("div", {
        className: g.planOneTimeCost,
        children: h.intl.format(h.t.ori2Jm, {
          currencyAmount: (0, _.T4)(L.amount, L.currency)
        })
      })]
    }),
    F = () => C && null != T && R.interval === m.rV.MONTH ? (0, _.T4)(L.amount - T, L.currency) : N ? (0, _.T4)(0, L.currency, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) : (0, _.T4)(L.amount, L.currency),
    B = () => {
      if (C && null != T && R.interval === m.rV.MONTH) {
        var e;
        return h.intl.format(h.t["VeE/4E"], {
          numMonths: null != (e = null == I ? true : I.discount.user_usage_limit) ? e : m.rt,
          discountedPrice: (0, _.T4)(L.amount - T, L.currency),
          regularPrice: (0, _.T4)(L.amount, L.currency)
        })
      }
      return N ? h.intl.format(M, {
        price: (0, _.T4)(L.amount, L.currency)
      }) : R.interval === m.rV.YEAR ? h.intl.formatToPlainString(h.t.rtLTJP, {
        percent: x
      }) : null
    };
  return (0, r.jsxs)(c.P3F, {
    role: O ? "menuitem" : "radio",
    "aria-checked": E,
    tabIndex: E ? 0 : false,
    focusProps: {
      offset: {
        left: false,
        right: false,
        top: 0,
        bottom: 0
      }
    },
    onClick: D ? true : () => o(i),
    className: a()(g.planOptionClickableContainer, {
      [g.selectedPlan]: O && E,
      [g.selectionBox]: O
    }),
    children: [(0, r.jsxs)("div", {
      className: a()(g.planOption, {
        [g.planOptionDisabled]: D
      }),
      children: [(0, r.jsxs)("div", {
        className: g.planOptionClickable,
        children: [!O && (0, r.jsx)("div", {
          className: g.planOptionCheckbox,
          children: (0, r.jsx)(c.Checkbox, {
            checked: E,
            value: E,
            label: "",
            description: ""
          })
        }), Z(), w && (0, r.jsxs)("span", {
          className: g.planOptionCurrentPlan,
          children: ["(", h.intl.string(h.t.ymSxhy), ")"]
        }), !O && G()]
      }), S ? (0, r.jsx)("div", {
        className: a()({
          [g.optionPriceSelected]: E
        }),
        children: h.intl.format(h.t.hXcaLT, {
          price: F()
        })
      }) : (0, r.jsx)("div", {
        className: a()({
          [g.optionSelected]: E || O
        }),
        children: (0, _.T4)(L.amount, L.currency)
      })]
    }), S && (0, r.jsx)("div", {
      className: g.planOptionSubtextContainer,
      children: (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        color: E ? "text-default" : "interactive-text-default",
        className: a()(g.planOptionSubtext, {
          [g.discountPlanOptionSubtext]: C
        }),
        children: B()
      })
    })]
  })
}
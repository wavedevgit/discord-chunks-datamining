/** Chunk was on web.js **/
/** chunk id: 811616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
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

function I(e) {
  let {
    premiumSubscription: t,
    planId: n,
    selectPlan: i,
    selected: o,
    priceOptions: I,
    shouldShowUpdatedPaymentModal: T,
    isEligibleForDiscount: S,
    discountAmountOff: A,
    isEligibleForTrial: C
  } = e, N = (0, l.e7)([d.default], () => d.default.locale), R = (0, l.e7)([f.Z], () => f.Z.get(n)), {
    isGift: P,
    giftRecipient: w
  } = (0, u.wD)(), D = P && (0, _.pO)(w);
  s()(null != R, "Missing subscriptionPlan");
  let x = null != t && t.planId === n,
    L = x || n === y.Xh.PREMIUM_MONTH_TIER_2 && null != t && [y.Xh.PREMIUM_YEAR_TIER_0, y.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId),
    M = y.nH[n],
    {
      enabled: k
    } = E.Z.getCurrentConfig({
      location: "PremiumSwitchPlanSelectOption"
    }, {
      autoTrackExposure: false
    });
  k && (M = (0, h.UV)(R, P, I));
  let j = (0, h.aS)(n, false, P, I),
    U = (0, h.Ap)(I.paymentSourceId),
    G = null != M && !T,
    B = (0, b.Ng)(),
    Z = (0, g.Vi)(),
    F = R.interval === y.rV.YEAR ? O.t.ECT4A5 : O.t.v9QeON,
    V = () => Z && !P && n === y.Xh.PREMIUM_MONTH_TIER_2 ? (0, r.jsx)(c.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: v.planOptionDiscount,
      children: O.intl.string(O.t.iQTfWx)
    }) : null,
    H = () => null != M && !Z && (0, r.jsx)(c.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: v.planOptionDiscount,
      children: O.intl.format(O.t.IAybsG, {
        discount: (0, p.T3)(N, M / 100)
      })
    }),
    Y = () => Z ? V() : R.interval === y.rV.YEAR && null != t || G && !x ? R.interval === y.rV.YEAR && null != t ? (0, r.jsxs)("span", {
      className: v.planOptionMonthsFree,
      children: ["(", O.intl.string(O.t["122kWB"]), ")"]
    }) : G && !x ? H() : true : null,
    W = () => (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: a()(v.planOptionInterval, {
          [v.optionSelected]: o || D,
          [v.updatedOptionSelected]: T && (o || D)
        }),
        children: [(0, h.L7)(R.interval, P, U, R.intervalCount, D, (0, h.Rd)(R.id)), D && Y()]
      }), D && (0, r.jsx)("div", {
        className: v.planOneTimeCost,
        children: O.intl.format(O.t.ori2Jm, {
          currencyAmount: (0, m.T4)(j.amount, j.currency)
        })
      })]
    }),
    K = () => S && null != A && R.interval === y.rV.MONTH ? (0, m.T4)(j.amount - A, j.currency) : C ? (0, m.T4)(0, j.currency, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) : (0, m.T4)(j.amount, j.currency),
    z = () => {
      if (S && null != A && R.interval === y.rV.MONTH) {
        var e;
        return O.intl.format(O.t["VeE/4E"], {
          numMonths: null != (e = null == B ? true : B.discount.user_usage_limit) ? e : y.rt,
          discountedPrice: (0, m.T4)(j.amount - A, j.currency),
          regularPrice: (0, m.T4)(j.amount, j.currency)
        })
      }
      return C ? O.intl.format(F, {
        price: (0, m.T4)(j.amount, j.currency)
      }) : R.interval === y.rV.YEAR ? O.intl.formatToPlainString(O.t.rtLTJP, {
        percent: M
      }) : null
    };
  return (0, r.jsxs)(c.P3F, {
    role: D ? "menuitem" : "radio",
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
    onClick: L ? true : () => i(n),
    className: a()(v.planOptionClickableContainer, {
      [v.selectedPlan]: D && o,
      [v.selectionBox]: D
    }),
    children: [(0, r.jsxs)("div", {
      className: a()(v.planOption, {
        [v.planOptionDisabled]: L
      }),
      children: [(0, r.jsxs)("div", {
        className: v.planOptionClickable,
        children: [!D && (0, r.jsx)("div", {
          className: v.planOptionCheckbox,
          children: (0, r.jsx)(c.Checkbox, {
            checked: o,
            value: o,
            label: "",
            description: ""
          })
        }), W(), x && (0, r.jsxs)("span", {
          className: v.planOptionCurrentPlan,
          children: ["(", O.intl.string(O.t.ymSxhy), ")"]
        }), !D && Y()]
      }), T ? (0, r.jsx)("div", {
        className: a()({
          [v.optionPriceSelected]: o
        }),
        children: O.intl.format(O.t.hXcaLT, {
          price: K()
        })
      }) : (0, r.jsx)("div", {
        className: a()({
          [v.optionSelected]: o || D
        }),
        children: (0, m.T4)(j.amount, j.currency)
      })]
    }), T && (0, r.jsx)("div", {
      className: v.planOptionSubtextContainer,
      children: (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        color: o ? "text-default" : "interactive-normal",
        className: a()(v.planOptionSubtext, {
          [v.discountPlanOptionSubtext]: S
        }),
        children: z()
      })
    })]
  })
}
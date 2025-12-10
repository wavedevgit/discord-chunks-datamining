/** Chunk was on web.js **/
/** chunk id: 811616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
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
  Chunk706454 = require("./706454.js"),
  Chunk509545 = require("./509545.js"),
  Chunk669079 = require("./669079.js"),
  Chunk930153 = require("./930153.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk367074 = require("./367074.js"),
  Chunk621651 = require("./621651.js"),
  Chunk622909 = require("./622909.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk399377 = require("./399377.js");

function S(e) {
  let {
    premiumSubscription: t,
    planId: n,
    selectPlan: i,
    selected: o,
    priceOptions: S,
    shouldShowUpdatedPaymentModal: I,
    isEligibleForDiscount: T,
    discountAmountOff: C,
    isEligibleForTrial: A
  } = e, N = (0, l.e7)([d.default], () => d.default.locale), P = (0, l.e7)([f.Z], () => f.Z.get(n)), {
    isGift: R,
    giftRecipient: D
  } = (0, u.wD)(), w = R && (0, p.pO)(D);
  s()(null != P, "Missing subscriptionPlan");
  let x = null != t && t.planId === n,
    L = x || n === y.Xh.PREMIUM_MONTH_TIER_2 && null != t && [y.Xh.PREMIUM_YEAR_TIER_0, y.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId),
    j = y.nH[n],
    {
      enabled: M
    } = E.Z.getCurrentConfig({
      location: "PremiumSwitchPlanSelectOption"
    }, {
      autoTrackExposure: false
    });
  M && (j = (0, m.UV)(P, R, S));
  let k = (0, m.aS)(n, false, R, S),
    U = (0, m.Ap)(S.paymentSourceId),
    G = null != j && !I,
    Z = (0, b.N)(),
    B = (0, g.Vi)(),
    F = P.interval === y.rV.YEAR ? O.t.ECT4A5 : O.t.v9QeON,
    V = () => B && !R && n === y.Xh.PREMIUM_MONTH_TIER_2 ? (0, r.jsx)(c.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: v.planOptionDiscount,
      children: O.intl.string(O.t.iQTfWx)
    }) : null,
    H = () => null != j && !B && (0, r.jsx)(c.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: v.planOptionDiscount,
      children: O.intl.format(O.t.IAybsG, {
        discount: (0, _.T3)(N, j / 100)
      })
    }),
    Y = () => B ? V() : P.interval === y.rV.YEAR && null != t || G && !x ? P.interval === y.rV.YEAR && null != t ? (0, r.jsxs)("span", {
      className: v.planOptionMonthsFree,
      children: ["(", O.intl.string(O.t["122kWB"]), ")"]
    }) : G && !x ? H() : true : null,
    W = () => (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: a()(v.planOptionInterval, {
          [v.optionSelected]: o || w,
          [v.updatedOptionSelected]: I && (o || w)
        }),
        children: [(0, m.L7)(P.interval, R, U, P.intervalCount, w, (0, m.Rd)(P.id)), w && Y()]
      }), w && (0, r.jsx)("div", {
        className: v.planOneTimeCost,
        children: O.intl.format(O.t.ori2Jm, {
          currencyAmount: (0, h.T4)(k.amount, k.currency)
        })
      })]
    }),
    K = () => T && null != C && P.interval === y.rV.MONTH ? (0, h.T4)(k.amount - C, k.currency) : A ? (0, h.T4)(0, k.currency, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) : (0, h.T4)(k.amount, k.currency),
    z = () => {
      if (T && null != C && P.interval === y.rV.MONTH) {
        var e;
        return O.intl.format(O.t["VeE/4E"], {
          numMonths: null != (e = null == Z ? true : Z.discount.user_usage_limit) ? e : y.rt,
          discountedPrice: (0, h.T4)(k.amount - C, k.currency),
          regularPrice: (0, h.T4)(k.amount, k.currency)
        })
      }
      return A ? O.intl.format(F, {
        price: (0, h.T4)(k.amount, k.currency)
      }) : P.interval === y.rV.YEAR ? O.intl.formatToPlainString(O.t.rtLTJP, {
        percent: j
      }) : null
    };
  return (0, r.jsxs)(c.P3F, {
    role: w ? "menuitem" : "radio",
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
      [v.selectedPlan]: w && o,
      [v.selectionBox]: w
    }),
    children: [(0, r.jsxs)("div", {
      className: a()(v.planOption, {
        [v.planOptionDisabled]: L
      }),
      children: [(0, r.jsxs)("div", {
        className: v.planOptionClickable,
        children: [!w && (0, r.jsx)("div", {
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
        }), !w && Y()]
      }), I ? (0, r.jsx)("div", {
        className: a()({
          [v.optionPriceSelected]: o
        }),
        children: O.intl.format(O.t.hXcaLT, {
          price: K()
        })
      }) : (0, r.jsx)("div", {
        className: a()({
          [v.optionSelected]: o || w
        }),
        children: (0, h.T4)(k.amount, k.currency)
      })]
    }), I && (0, r.jsx)("div", {
      className: v.planOptionSubtextContainer,
      children: (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        color: o ? "text-default" : "interactive-text-default",
        className: a()(v.planOptionSubtext, {
          [v.discountPlanOptionSubtext]: T
        }),
        children: z()
      })
    })]
  })
}
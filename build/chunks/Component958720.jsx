/** Chunk was on web.js **/
/** chunk id: 958720, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk93159 = require("./93159.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk97352 = require("./97352.js"),
  Chunk252424 = require("./252424.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk371894 = require("./371894.js");

function b(e) {
  let {
    userLocale: t,
    premiumSubscription: n,
    planId: a,
    selectPlan: s,
    selected: b,
    priceOptions: O,
    isPrepaid: v,
    isCustomGift: A,
    shouldUseUnifiedCheckoutUI: I,
    shouldUseCalculatedDiscount: S,
    shouldShowUpdatedPaymentModal: T,
    discountOffer: C,
    discountAmountOff: N,
    isEligibleForDiscount: w,
    isEligibleForBOGOPromotion: R,
    isEligibleForTrial: P,
    isCurrentPlan: D,
    disabled: L
  } = e, {
    isGift: x
  } = (0, f.Pv)(), M = (0, c.bG)([p.A], () => p.A.get(a));
  l()(null != M, "Missing subscriptionPlan");
  let j = g.XE[a];
  S && (j = (0, h.k8)(M, x, O));
  let k = (0, h.y8)(a, false, x, O),
    U = (0, h.VA)({
      subscriptionPlan: M,
      isGift: x,
      priceOptions: O
    }),
    G = null != j && !T,
    F = M.interval === g.WT.YEAR ? E.t.ECT4A5 : E.t.v9QeON,
    V = () => R && !x && a === g.gD.PREMIUM_MONTH_TIER_2 ? (0, r.jsx)(u.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: y.kP,
      children: E.intl.string(E.t.iQTfWx)
    }) : null,
    B = () => null != j && !R && (0, r.jsx)(u.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: y.kP,
      children: E.intl.format(E.t.IAybsG, {
        discount: (0, _.l9)(t, j / 100)
      })
    }),
    H = () => R ? V() : M.interval === g.WT.YEAR && null != n || G && !D ? M.interval === g.WT.YEAR && null != n ? (0, r.jsxs)("span", {
      className: y.IS,
      children: ["(", E.intl.string(E.t["122kWB"]), ")"]
    }) : G && !D ? B() : true : null,
    Y = (0, h.m6)(M.id),
    W = i.useMemo(() => (0, h.D8)(M.interval, x, v, M.intervalCount, A, Y), [M.interval, M.intervalCount, x, v, A, Y]),
    K = () => (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: o()(y.Gl, {
          [y.h4]: b || A,
          [y.ox]: T && (b || A)
        }),
        children: [W, A && H()]
      }), A && (0, r.jsx)("div", {
        className: y._R,
        children: E.intl.format(E.t.ori2Jm, {
          currencyAmount: (0, m.$g)(k.amount, k.currency)
        })
      })]
    }),
    z = () => w && null != N && M.interval === g.WT.MONTH ? (0, m.$g)(k.amount - N, k.currency) : P ? (0, m.$g)(0, k.currency, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) : (0, m.$g)(k.amount, k.currency),
    q = () => {
      if (w && null != N && M.interval === g.WT.MONTH) {
        var e;
        return E.intl.format(E.t["VeE/4E"], {
          numMonths: null != (e = null == C ? true : C.discount.user_usage_limit) ? e : g.OJ,
          discountedPrice: (0, m.$g)(k.amount - N, k.currency),
          regularPrice: (0, m.$g)(k.amount, k.currency)
        })
      }
      return P ? E.intl.format(F, {
        price: (0, m.$g)(k.amount, k.currency)
      }) : M.interval === g.WT.YEAR ? E.intl.formatToPlainString(E.t.rtLTJP, {
        percent: j
      }) : null
    },
    Z = () => {
      L || s(a)
    },
    Q = T ? E.intl.format(E.t.hXcaLT, {
      price: z()
    }) : (0, m.$g)(k.amount, k.currency);
  return I ? (0, r.jsx)(d.ZA, {
    id: a,
    title: null,
    titleDescriber: (0, h.YR)(M.interval, M.intervalCount),
    primaryText: Q,
    subtext: null != U ? (0, r.jsx)(d.Lo, {
      strikethrough: true,
      price: (0, m.$g)(U, k.currency)
    }) : true,
    isDisabled: L
  }) : (0, r.jsxs)(u.DUT, {
    role: A ? "menuitem" : "radio",
    "aria-checked": b,
    tabIndex: b ? 0 : false,
    focusProps: {
      offset: {
        left: false,
        right: false,
        top: 0,
        bottom: 0
      }
    },
    onClick: Z,
    className: o()(y.G_, {
      [y.vW]: A && b,
      [y.Gb]: A
    }),
    children: [(0, r.jsxs)("div", {
      className: o()(y.XM, {
        [y.PA]: L
      }),
      children: [(0, r.jsxs)("div", {
        className: y.l,
        children: [!A && (0, r.jsx)("div", {
          className: y.E2,
          children: (0, r.jsx)(u.Checkbox, {
            checked: b,
            value: b,
            label: "",
            description: "",
            onChange: Z
          })
        }), K(), D && (0, r.jsxs)("span", {
          className: y.bq,
          children: ["(", E.intl.string(E.t.ymSxhy), ")"]
        }), !A && H()]
      }), T ? (0, r.jsx)("div", {
        className: o()({
          [y.kb]: b
        }),
        children: Q
      }) : (0, r.jsx)("div", {
        className: o()({
          [y.h4]: b || A
        }),
        children: Q
      })]
    }), T && (0, r.jsx)("div", {
      className: y.hB,
      children: (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        color: b ? "text-default" : "interactive-text-default",
        className: o()(y.Ub, {
          [y.sw]: w || P
        }),
        children: q()
      })
    })]
  })
}
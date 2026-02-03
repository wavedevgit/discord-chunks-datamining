/** Chunk was on web.js **/
/** chunk id: 958720, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854354 = require("./854354.js"),
  Chunk93159 = require("./93159.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk97352 = require("./97352.js"),
  Chunk252424 = require("./252424.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk371894 = require("./371894.js");

function O(e) {
  let {
    userLocale: t,
    premiumSubscription: n,
    planId: a,
    selectPlan: s,
    selected: O,
    priceOptions: v,
    isPrepaid: A,
    isCustomGift: I,
    shouldUseUnifiedCheckoutUI: S,
    shouldUseCalculatedDiscount: T,
    shouldShowUpdatedPaymentModal: C,
    discountOffer: N,
    discountAmountOff: w,
    isEligibleForDiscount: R,
    isEligibleForBOGOPromotion: P,
    isEligibleForTrial: D,
    isCurrentPlan: L,
    disabled: x
  } = e, {
    isGift: M
  } = (0, p.Pv)(), j = (0, c.bG)([_.A], () => _.A.get(a));
  l()(null != j, "Missing subscriptionPlan");
  let k = E.XE[a];
  T && (k = (0, m.k8)(j, M, v));
  let U = (0, m.y8)(a, false, M, v),
    G = null != k && !C,
    F = j.interval === E.WT.YEAR ? y.t.ECT4A5 : y.t.v9QeON,
    V = () => P && !M && a === E.gD.PREMIUM_MONTH_TIER_2 ? (0, r.jsx)(u.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: b.kP,
      children: y.intl.string(y.t.iQTfWx)
    }) : null,
    B = () => null != k && !P && (0, r.jsx)(u.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: b.kP,
      children: y.intl.format(y.t.IAybsG, {
        discount: (0, h.l9)(t, k / 100)
      })
    }),
    H = () => P ? V() : j.interval === E.WT.YEAR && null != n || G && !L ? j.interval === E.WT.YEAR && null != n ? (0, r.jsxs)("span", {
      className: b.IS,
      children: ["(", y.intl.string(y.t["122kWB"]), ")"]
    }) : G && !L ? B() : true : null,
    Y = (0, m.m6)(j.id),
    W = i.useMemo(() => (0, m.D8)(j.interval, M, A, j.intervalCount, I, Y), [j.interval, j.intervalCount, M, A, I, Y]),
    K = () => (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: o()(b.Gl, {
          [b.h4]: O || I,
          [b.ox]: C && (O || I)
        }),
        children: [W, I && H()]
      }), I && (0, r.jsx)("div", {
        className: b._R,
        children: y.intl.format(y.t.ori2Jm, {
          currencyAmount: (0, g.$g)(U.amount, U.currency)
        })
      })]
    }),
    z = () => R && null != w && j.interval === E.WT.MONTH ? (0, g.$g)(U.amount - w, U.currency) : D ? (0, g.$g)(0, U.currency, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) : (0, g.$g)(U.amount, U.currency),
    q = () => {
      if (R && null != w && j.interval === E.WT.MONTH) {
        var e;
        return y.intl.format(y.t["VeE/4E"], {
          numMonths: null != (e = null == N ? true : N.discount.user_usage_limit) ? e : E.OJ,
          discountedPrice: (0, g.$g)(U.amount - w, U.currency),
          regularPrice: (0, g.$g)(U.amount, U.currency)
        })
      }
      return D ? y.intl.format(F, {
        price: (0, g.$g)(U.amount, U.currency)
      }) : j.interval === E.WT.YEAR ? y.intl.formatToPlainString(y.t.rtLTJP, {
        percent: k
      }) : null
    },
    Z = () => {
      x || s(a)
    },
    Q = C ? y.intl.format(y.t.hXcaLT, {
      price: z()
    }) : (0, g.$g)(U.amount, U.currency);
  if (S) {
    let e = (0, d.Cq)({
      subscriptionPlan: j,
      userLocale: t,
      discountOffer: N,
      yearlyPercentSavings: k
    });
    return (0, r.jsx)(f.ZA, {
      id: a,
      title: null,
      titleDescriber: (0, d.YR)(j.interval, j.intervalCount),
      primaryText: (0, g.$g)(U.amount, U.currency),
      subtext: null != e ? (0, r.jsx)(f.Lo, {
        price: e
      }) : null,
      isDisabled: x
    })
  }
  return (0, r.jsxs)(u.DUT, {
    role: I ? "menuitem" : "radio",
    "aria-checked": O,
    tabIndex: O ? 0 : false,
    focusProps: {
      offset: {
        left: false,
        right: false,
        top: 0,
        bottom: 0
      }
    },
    onClick: Z,
    className: o()(b.G_, {
      [b.vW]: I && O,
      [b.Gb]: I
    }),
    children: [(0, r.jsxs)("div", {
      className: o()(b.XM, {
        [b.PA]: x
      }),
      children: [(0, r.jsxs)("div", {
        className: b.l,
        children: [!I && (0, r.jsx)("div", {
          className: b.E2,
          children: (0, r.jsx)(u.Checkbox, {
            checked: O,
            value: O,
            label: "",
            description: "",
            onChange: Z
          })
        }), K(), L && (0, r.jsxs)("span", {
          className: b.bq,
          children: ["(", y.intl.string(y.t.ymSxhy), ")"]
        }), !I && H()]
      }), C ? (0, r.jsx)("div", {
        className: o()({
          [b.kb]: O
        }),
        children: Q
      }) : (0, r.jsx)("div", {
        className: o()({
          [b.h4]: O || I
        }),
        children: Q
      })]
    }), C && (0, r.jsx)("div", {
      className: b.hB,
      children: (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        color: O ? "text-default" : "interactive-text-default",
        className: o()(b.Ub, {
          [b.sw]: R || D
        }),
        children: q()
      })
    })]
  })
}
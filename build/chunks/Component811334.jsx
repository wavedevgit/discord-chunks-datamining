/** Chunk was on web.js **/
/** chunk id: 811334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B1: () => m,
  P7: () => y,
  UN: () => E,
  Z9: () => h,
  aO: () => p,
  az: () => b,
  i$: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk937615 = require("./937615.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704442 = require("./704442.js");
let f = Chunk647438.createContext({
    isPremiumRebrand: false
  }),
  _ = () => Chunk647438.useContext(f).isPremiumRebrand;

function p(e) {
  let {
    children: t,
    className: n,
    isPremiumRebrand: i = false
  } = e;
  return (0, r.jsx)(f.Provider, {
    value: {
      isPremiumRebrand: i
    },
    children: (0, r.jsx)("div", {
      className: o()(d.table, {
        [d.premiumRebrand]: i
      }, n),
      children: t
    })
  })
}

function h(e) {
  let {
    children: t
  } = e;
  return _() ? (0, r.jsx)(s.Heading, {
    variant: "heading-md/semibold",
    color: "text-primary",
    className: o()(d.header, d.premiumRebrand),
    children: t
  }) : (0, r.jsx)("div", {
    className: d.header,
    children: t
  })
}

function m(e) {
  let {
    label: t,
    value: n,
    className: i
  } = e;
  return _() ? (0, r.jsxs)("div", {
    className: o()(d.row, i),
    children: [(0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      children: t
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      className: d.flex,
      children: n
    })]
  }) : (0, r.jsxs)("div", {
    className: o()(d.row, i),
    children: [(0, r.jsx)("div", {
      className: d.rowLabel,
      children: t
    }), (0, r.jsx)("div", {
      className: d.rowAmount,
      children: n
    })]
  })
}

function g(e) {
  let {
    label: t,
    value: n,
    discounts: i,
    originalAmount: a,
    interval: o,
    currency: f,
    className: _,
    intervalCount: p,
    inTrialPeriod: h
  } = e, g = e => null != i ? i.find(t => t.type === e) : null, E = g(l.eW.SUBSCRIPTION_PLAN), b = g(l.eW.ENTITLEMENT), y = null != E ? Math.floor(E.amount / a * 100) : null, O = (0, c.T4)(a, f);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m, {
      label: t,
      value: (0, r.jsxs)(r.Fragment, {
        children: [h ? u.intl.formatToPlainString(u.t.hXcaLT, {
          price: (0, c.T4)(0, f)
        }) : n, null != y ? (0, r.jsxs)("div", {
          className: d.rowPercentDiscount,
          children: ["-", y, "%"]
        }) : null]
      }),
      className: _
    }), h && (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      className: d.trialEndPrice,
      children: u.intl.format(u.t.v9QeON, {
        price: O
      })
    }), null != y ? (0, r.jsxs)("div", {
      className: d.rowDiscountOriginalPrice,
      children: ["(", null != o && null != p ? (0, c.og)(O, o, p) : O, ")"]
    }) : null, null != b ? (0, r.jsx)("div", {
      className: d.entitlementDiscountRow,
      children: u.intl.string(u.t.A7Hpfs)
    }) : null]
  })
}

function E(e) {
  let {
    extended: t = false,
    negativeMarginTop: n = false,
    negativeMarginBottom: i = false
  } = e;
  return (0, r.jsx)("div", {
    className: o()(d.divider, {
      [d.dividerExtended]: t,
      [d.negativeMarginTop]: n,
      [d.negativeMarginBottom]: i
    })
  })
}

function b(e) {
  let {
    label: t,
    value: n,
    className: i
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(d.totalRow, i),
    children: [(0, r.jsx)("div", {
      className: d.totalLabel,
      children: t
    }), (0, r.jsx)("div", {
      className: d.totalAmount,
      children: n
    })]
  })
}

function y(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, r.jsx)("div", {
    className: o()(d.finePrint, n),
    children: t
  })
}
/** Chunk was on web.js **/
/** chunk id: 735164, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Sd: () => E,
  X0: () => y,
  Xd: () => _,
  Yx: () => p,
  f0: () => m,
  oR: () => h,
  pK: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk580630 = require("./580630.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk600834 = require("./600834.js");
let d = Chunk64700.createContext({
    isPremiumRebrand: false
  }),
  f = () => i.useContext(d).isPremiumRebrand;

function p(e) {
  let {
    children: t,
    className: n,
    isPremiumRebrand: i = false
  } = e;
  return (0, r.jsx)(d.Provider, {
    value: {
      isPremiumRebrand: i
    },
    children: (0, r.jsx)("div", {
      className: o()(u.tp, {
        [u.u0]: i
      }, n),
      children: t
    })
  })
}

function _(e) {
  let {
    children: t
  } = e;
  return f() ? (0, r.jsx)(s.Heading, {
    variant: "heading-md/semibold",
    color: "text-strong",
    className: o()(u.wx, u.u0),
    children: t
  }) : (0, r.jsx)("div", {
    className: u.wx,
    children: t
  })
}

function h(e) {
  let {
    label: t,
    value: n,
    className: i
  } = e;
  return f() ? (0, r.jsxs)("div", {
    className: o()(u.nM, i),
    children: [(0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      children: t
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      className: u.Uu,
      children: n
    })]
  }) : (0, r.jsxs)("div", {
    className: o()(u.nM, i),
    children: [(0, r.jsx)("div", {
      className: u.xZ,
      children: t
    }), (0, r.jsx)("div", {
      className: u.X6,
      children: n
    })]
  })
}

function m(e) {
  let {
    label: t,
    value: n,
    subscriptionDiscount: i,
    entitlementDiscount: a,
    originalAmount: o,
    interval: d,
    currency: f,
    className: p,
    intervalCount: _,
    inTrialPeriod: m
  } = e, g = null != i ? Math.floor(i.amount / o * 100) : null, E = (0, l.$g)(o, f);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(h, {
      label: t,
      value: (0, r.jsxs)(r.Fragment, {
        children: [m ? c.intl.formatToPlainString(c.t.hXcaLT, {
          price: (0, l.$g)(0, f)
        }) : n, null != g ? (0, r.jsxs)("div", {
          className: u.ns,
          children: ["-", g, "%"]
        }) : null]
      }),
      className: p
    }), m && (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      className: u.lk,
      children: c.intl.format(c.t.v9QeON, {
        price: E
      })
    }), null != g ? (0, r.jsxs)("div", {
      className: u.gX,
      children: ["(", null != d && null != _ ? (0, l.CE)(E, d, _) : E, ")"]
    }) : null, null != a ? (0, r.jsx)("div", {
      className: u.Ht,
      children: c.intl.string(c.t.A7Hpfs)
    }) : null]
  })
}

function g(e) {
  let {
    extended: t = false,
    negativeMarginTop: n = false,
    negativeMarginBottom: i = false
  } = e;
  return (0, r.jsx)("div", {
    className: o()(u.yF, {
      [u.hF]: t,
      [u.P_]: n,
      [u.vy]: i
    })
  })
}

function E(e) {
  let {
    label: t,
    value: n,
    className: i
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(u.V$, i),
    children: [(0, r.jsx)("div", {
      className: u.j5,
      children: t
    }), (0, r.jsx)("div", {
      className: u.HR,
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
    className: o()(u.aO, n),
    children: t
  })
}
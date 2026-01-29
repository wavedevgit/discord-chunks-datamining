/** Chunk was on 3911 **/
/** chunk id: 105390, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ag: () => v,
  MA: () => b,
  fY: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk496431 = require("./496431.js"),
  Chunk405269 = require("./405269.js"),
  Chunk927578 = require("./927578.js"),
  Chunk234419 = require("./234419.js"),
  Chunk915516 = require("./915516.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk271300 = require("./271300.js");

function C(e) {
  let {
    isTabSelected: t,
    expiresAt: n,
    badgeCopy: r,
    className: c,
    tooltipTextOverride: h,
    tooltipPosition: g
  } = e, C = s.useMemo(() => Date.parse(n), [n]), v = (0, d.A)(C, 6e4);
  return Object.values(v).every(e => 0 === e) ? null : (0, i.jsx)(o.m, {
    text: null != h ? h : (0, u.uN)(v, {
      days: p.t.qVGNkU,
      hours: p.t.wyg9a9,
      minutes: p.t.IzmIlV
    }),
    position: null != g ? g : "top",
    children: (0, i.jsxs)("div", {
      className: l()(f.Fg, f.C8, c, {
        [f.WO]: t
      }),
      children: [(0, i.jsx)(a.O4, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: f._q
      }), (0, i.jsx)(a.Text, {
        variant: "eyebrow",
        color: "text-strong",
        children: r
      })]
    })
  })
}

function v(e) {
  var t;
  let {
    isTabSelected: n,
    trialOffer: s
  } = e, r = null == (t = (0, h.V)()) ? true : t.subscription_trial, l = (0, c.tS)({
    intervalType: null == r ? true : r.interval,
    intervalCount: null == r ? true : r.interval_count
  }), o = (0, g.Fu)(s);
  return (0, i.jsx)(b, {
    isTabSelected: n,
    badgeCopy: l,
    offerExpiresAt: s.expires_at,
    tooltipTextOverride: o,
    tooltipPosition: "right"
  })
}

function y(e) {
  let {
    isTabSelected: t,
    userDiscount: n,
    includesAmountOff: s
  } = e, r = p.intl.formatToPlainString(p.t.iiLbvu, {
    percent: n.discount.amount
  }), l = (0, g.__)(n);
  return (0, i.jsx)(b, {
    isTabSelected: t,
    badgeCopy: s ? r : p.intl.string(p.t["/DTtr6"]),
    offerExpiresAt: n.expires_at,
    tooltipTextOverride: l,
    tooltipPosition: "right"
  })
}

function b(e) {
  let {
    isTabSelected: t,
    badgeCopy: n,
    offerExpiresAt: s,
    tooltipTextOverride: r,
    tooltipPosition: o
  } = e;
  return null != s ? (0, i.jsx)(C, {
    expiresAt: s,
    isTabSelected: t,
    badgeCopy: n,
    tooltipTextOverride: r,
    tooltipPosition: o
  }) : (0, i.jsx)("div", {
    className: l()(f.Fg, f.AT),
    children: (0, i.jsx)(a.Text, {
      variant: "eyebrow",
      className: f.md,
      children: n
    })
  })
}
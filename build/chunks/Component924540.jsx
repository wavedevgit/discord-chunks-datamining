/** Chunk was on web.js **/
/** chunk id: 924540, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $H: () => y,
  GN: () => O,
  _y: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk55935 = require("./55935.js"),
  Chunk74538 = require("./74538.js"),
  Chunk639119 = require("./639119.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk788963 = require("./788963.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = 6e4;

function b(e) {
  let {
    isTabSelected: t,
    expiresAt: n,
    trialDuration: a,
    className: u
  } = e, d = i.useMemo(() => Date.parse(n), [n]), p = (0, l.Z)(d, E);
  return Object.values(p).every(e => 0 === e) ? null : (0, r.jsx)(s.ua7, {
    text: (0, c.QX)(p, {
      days: f.t.qVGNkZ,
      hours: f.t.wyg9a2,
      minutes: f.t.IzmIlZ
    }),
    children: e => (0, r.jsxs)("div", g(h({}, e), {
      className: o()(_.premiumTrialBadge, _.premiumTrialAcknowledgedBadge, u, {
        [_.premiumTrialBadgeSelected]: t
      }),
      children: [(0, r.jsx)(s.T39, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: _.premiumTrialBadgeIcon
      }), (0, r.jsxs)(s.Text, {
        variant: "eyebrow",
        children: [" ", a, " "]
      })]
    }))
  })
}

function y(e) {
  var t;
  let {
    isTabSelected: n,
    trialOffer: i
  } = e, a = null == (t = (0, d.N)()) ? true : t.subscription_trial, o = (0, u.a5)({
    intervalType: null == a ? true : a.interval,
    intervalCount: null == a ? true : a.interval_count
  });
  return (0, r.jsx)(v, {
    isTabSelected: n,
    badgeCopy: o,
    offerExpiresAt: i.expires_at
  })
}

function O(e) {
  let {
    isTabSelected: t,
    userDiscount: n,
    includesAmountOff: i
  } = e, a = f.intl.formatToPlainString(f.t.iiLbvr, {
    percent: n.discount.amount
  });
  return (0, r.jsx)(v, {
    isTabSelected: t,
    badgeCopy: i ? a : f.intl.string(f.t["/DTtr6"]),
    offerExpiresAt: n.expires_at
  })
}

function v(e) {
  let {
    isTabSelected: t,
    badgeCopy: n,
    offerExpiresAt: i
  } = e;
  return null != i ? (0, r.jsx)(b, {
    expiresAt: i,
    isTabSelected: t,
    trialDuration: n
  }) : (0, r.jsx)("div", {
    className: o()(_.premiumTrialBadge, _.premiumOfferUnackedBadge),
    children: (0, r.jsx)(s.Text, {
      variant: "eyebrow",
      className: _.premiumOfferBadgeCopy,
      children: n
    })
  })
}
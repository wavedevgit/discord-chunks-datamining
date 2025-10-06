/** Chunk was on web.js **/
/** chunk id: 924540, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $H: () => g,
  GN: () => E,
  _y: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk55935 = require("./55935.js"),
  Chunk74538 = require("./74538.js"),
  Chunk639119 = require("./639119.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk639762 = require("./639762.js");
let h = 6e4;

function m(e) {
  let {
    isTabSelected: t,
    expiresAt: n,
    trialDuration: a,
    className: d
  } = e, f = i.useMemo(() => Date.parse(n), [n]), m = (0, c.Z)(f, h);
  return Object.values(m).every(e => 0 === e) ? null : (0, r.jsx)(s.u, {
    text: (0, u.QX)(m, {
      days: _.t.qVGNkZ,
      hours: _.t.wyg9a2,
      minutes: _.t.IzmIlZ
    }),
    children: (0, r.jsxs)("div", {
      className: o()(p.premiumTrialBadge, p.premiumTrialAcknowledgedBadge, d, {
        [p.premiumTrialBadgeSelected]: t
      }),
      children: [(0, r.jsx)(l.T39, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: p.premiumTrialBadgeIcon
      }), (0, r.jsxs)(l.Text, {
        variant: "eyebrow",
        children: [" ", a, " "]
      })]
    })
  })
}

function g(e) {
  var t;
  let {
    isTabSelected: n,
    trialOffer: i
  } = e, a = null == (t = (0, f.N)()) ? true : t.subscription_trial, o = (0, d.a5)({
    intervalType: null == a ? true : a.interval,
    intervalCount: null == a ? true : a.interval_count
  });
  return (0, r.jsx)(b, {
    isTabSelected: n,
    badgeCopy: o,
    offerExpiresAt: i.expires_at
  })
}

function E(e) {
  let {
    isTabSelected: t,
    userDiscount: n,
    includesAmountOff: i
  } = e, a = _.intl.formatToPlainString(_.t.iiLbvr, {
    percent: n.discount.amount
  });
  return (0, r.jsx)(b, {
    isTabSelected: t,
    badgeCopy: i ? a : _.intl.string(_.t["/DTtr6"]),
    offerExpiresAt: n.expires_at
  })
}

function b(e) {
  let {
    isTabSelected: t,
    badgeCopy: n,
    offerExpiresAt: i
  } = e;
  return null != i ? (0, r.jsx)(m, {
    expiresAt: i,
    isTabSelected: t,
    trialDuration: n
  }) : (0, r.jsx)("div", {
    className: o()(p.premiumTrialBadge, p.premiumOfferUnackedBadge),
    children: (0, r.jsx)(l.Text, {
      variant: "eyebrow",
      className: p.premiumOfferBadgeCopy,
      children: n
    })
  })
}
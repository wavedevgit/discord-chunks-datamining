/** Chunk was on 72762 **/
/** chunk id: 924540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $H: () => O,
  GN: () => h,
  _y: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk55935 = require("./55935.js"),
  Chunk74538 = require("./74538.js"),
  Chunk639119 = require("./639119.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk159670 = require("./159670.js");

function b(e) {
  let {
    isTabSelected: t,
    expiresAt: n,
    trialDuration: l,
    className: u
  } = e, d = i.useMemo(() => Date.parse(n), [n]), b = (0, a.Z)(d, 6e4);
  return Object.values(b).every(e => 0 === e) ? null : (0, r.jsx)(o.ua7, {
    text: (0, c.QX)(b, {
      days: f.t.qVGNkZ,
      hours: f.t.wyg9a2,
      minutes: f.t.IzmIlZ
    }),
    children: e => {
      var n, i;
      return (0, r.jsxs)("div", (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, e), i = i = {
        className: s()(p.premiumTrialBadge, p.premiumTrialAcknowledgedBadge, u, {
          [p.premiumTrialBadgeSelected]: t
        }),
        children: [(0, r.jsx)(o.T39, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          className: p.premiumTrialBadgeIcon
        }), (0, r.jsxs)(o.Text, {
          variant: "eyebrow",
          children: [" ", l, " "]
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  })
}

function O(e) {
  var t;
  let {
    isTabSelected: n,
    trialOffer: i
  } = e, l = null == (t = (0, d.N)()) ? true : t.subscription_trial, s = (0, u.a5)({
    intervalType: null == l ? true : l.interval,
    intervalCount: null == l ? true : l.interval_count
  });
  return (0, r.jsx)(m, {
    isTabSelected: n,
    badgeCopy: s,
    offerExpiresAt: i.expires_at
  })
}

function h(e) {
  let {
    isTabSelected: t,
    userDiscount: n,
    includesAmountOff: i
  } = e, l = f.intl.formatToPlainString(f.t.iiLbvr, {
    percent: n.discount.amount
  });
  return (0, r.jsx)(m, {
    isTabSelected: t,
    badgeCopy: i ? l : f.intl.string(f.t["/DTtr6"]),
    offerExpiresAt: n.expires_at
  })
}

function m(e) {
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
    className: s()(p.premiumTrialBadge, p.premiumOfferUnackedBadge),
    children: (0, r.jsx)(o.Text, {
      variant: "eyebrow",
      className: p.premiumOfferBadgeCopy,
      children: n
    })
  })
}
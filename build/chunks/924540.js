/** Chunk was on 40580 (29804edbfa36af1f.js) **/
"use strict";
r.d(t, {
  $H: () => h,
  GN: () => m
});
var n = r(200651),
  s = r(192379),
  i = r(120356),
  o = r.n(i),
  l = r(481060),
  a = r(774078),
  c = r(55935),
  u = r(74538),
  d = r(278605),
  p = r(639119),
  f = r(474936),
  b = r(388032),
  g = r(246290);

function O(e) {
  let {
    isTabSelected: t,
    expiresAt: r,
    trialDuration: i,
    className: u
  } = e, d = s.useMemo(() => Date.parse(r), [r]), p = (0, a.Z)(d, 6e4);
  return Object.values(p).every(e => 0 === e) ? null : (0, n.jsx)(l.ua7, {
    text: (0, c.QX)(p, {
      days: b.t.qVGNkZ,
      hours: b.t.wyg9a2,
      minutes: b.t.IzmIlZ
    }),
    children: e => {
      var r, s;
      return (0, n.jsxs)("div", (r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n
          })
        }
        return e
      }({}, e), s = s = {
        className: o()(g.premiumTrialBadge, g.premiumTrialAcknowledgedBadge, u, {
          [g.premiumTrialBadgeSelected]: t
        }),
        children: [(0, n.jsx)(l.T39, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          className: g.premiumTrialBadgeIcon
        }), (0, n.jsxs)(l.Text, {
          variant: "eyebrow",
          children: [" ", i, " "]
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e))
      }), r))
    }
  })
}

function h(e) {
  var t, r;
  let {
    isTabSelected: s,
    trialOffer: i
  } = e, o = null === (t = (0, p.N)()) || void 0 === t ? void 0 : t.subscription_trial, l = (0, d.xP)("OfferTabBadge"), a = (0, u.a5)({
    intervalType: null == o ? void 0 : o.interval,
    intervalCount: null == o ? void 0 : o.interval_count
  });
  return (0, n.jsx)(x, {
    isTabSelected: s,
    badgeCopy: a,
    offerExpiresAt: i.expires_at,
    className: (r = null == o ? void 0 : o.sku_id, l ? g.premiumTrialBadgeV2 : r === f.Si.TIER_2 ? g.premiumTrialTier2UnacknowledgedBadge : g.premiumTrialTier0UnacknowledgedBadge)
  })
}

function m(e) {
  let {
    isTabSelected: t,
    userDiscount: r,
    includesAmountOff: s
  } = e, i = b.NW.formatToPlainString(b.t.iiLbvr, {
    percent: r.discount.amount
  }), o = (0, d.xP)("OfferTabBadge");
  return (0, n.jsx)(x, {
    isTabSelected: t,
    badgeCopy: s ? i : b.NW.string(b.t["/DTtr6"]),
    offerExpiresAt: r.expires_at,
    className: o ? g.premiumTrialBadgeV2 : g.premiumDiscountUnacknowledgedBadge
  })
}

function x(e) {
  let {
    isTabSelected: t,
    badgeCopy: r,
    offerExpiresAt: s,
    className: i,
    ackedClassName: a
  } = e;
  return null != s ? (0, n.jsx)(O, {
    className: a,
    expiresAt: s,
    isTabSelected: t,
    trialDuration: r
  }) : (0, n.jsx)("div", {
    className: o()(g.premiumTrialBadge, i),
    children: (0, n.jsx)(l.Text, {
      variant: "eyebrow",
      className: g.premiumOfferBadgeCopy,
      children: r
    })
  })
}
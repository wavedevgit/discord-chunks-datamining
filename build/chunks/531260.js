/** Chunk was on web.js **/
/** chunk id: 531260, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./638769.js"), require("./264879.js"), require("./896048.js"), require("./65821.js");
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk339048 = require("./339048.js"),
  Chunk964486 = require("./964486.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk469778 = require("./469778.js"),
  Chunk739508 = require("./739508.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = e => {
  var t;
  let {
    isFetching: n = false,
    entitlements: r,
    unactivatedFractionalPremiumUnits: i,
    currentUser: s,
    premiumSubscription: o,
    fetchedAllEntitlements: c,
    excludeReverseTrialFromCountdown: u
  } = e, d = {
    isFractionalPremiumActive: false,
    fractionalState: E.xc.NONE,
    startsAt: l()(0),
    endsAt: l()(0),
    currentEntitlementId: "",
    unactivatedUnits: [],
    fetched: c
  };
  if (n) return v(b({}, d), {
    fetched: false
  });
  if (null == s || 0 === r.length && 0 === i.length) return d;
  let f = r.filter(e => null != e.endsAt && null != e.startsAt).sort((e, t) => (a()(null != e.endsAt && null != t.endsAt, "endsAt should not be null"), e.endsAt < t.endsAt) ? false : +(e.endsAt > t.endsAt));
  if (f.reverse(), f.length > 0 && (f.length !== r.length || null == f[0].startsAt || null == f[0].endsAt)) {
    let e = Array.from(r.values()).map(e => e.id),
      t = "fractional redemption entitlements should have startsAt/endsAt";
    throw (0, h.hD)(t, {
      extra: {
        entitlementIds: e
      }
    }), Error(t)
  }
  let p = null != (t = f[0]) ? t : null,
    _ = E.xc.NONE;
  null != p && (_ = null != o && o.status === g.Dmq.PAUSED ? E.xc.FP_SUB_PAUSED : E.xc.FP_ONLY);
  let y = u && (null == p ? true : p.sourceType) === g.GD.REVERSE_TRIAL;
  return {
    isFractionalPremiumActive: null != p,
    fractionalState: _,
    startsAt: null != p ? l()(p.startsAt) : l()(0),
    endsAt: null != p ? l()((0, m._e)(p.endsAt, i, true, y)) : l()(0),
    currentEntitlementId: null != p ? p.id : "",
    unactivatedUnits: i,
    fetched: c
  }
};

function I(e, t) {
  return null != t && !_.A.fetchingAllEntitlements && (!_.A.fetchedAllEntitlements || e)
}

function S() {
  let {
    forceFetch: e,
    excludeReverseTrial: t,
    excludeReverseTrialFromCountdown: n
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {
    forceFetch: false,
    excludeReverseTrial: false,
    excludeReverseTrialFromCountdown: false
  }, i = (0, c.bG)([f.default], () => f.default.getCurrentUser()), a = (0, c.yK)([_.A], () => _.A.getFractionalPremium({
    excludeReverseTrial: t
  })), o = (0, c.bG)([_.A], () => _.A.fetchedAllEntitlements), l = (0, c.yK)([_.A], () => _.A.getUnactivatedFractionalPremiumUnits()), h = (0, c.bG)([p.A], () => p.A.getPremiumTypeSubscription()), [m, E] = r.useState(A({
    isFetching: I(e, i) || _.A.fetchingAllEntitlements,
    entitlements: a,
    unactivatedFractionalPremiumUnits: l,
    currentUser: i,
    premiumSubscription: h,
    fetchedAllEntitlements: o,
    excludeReverseTrialFromCountdown: n
  }));
  return (0, d.Ay)(() => {
    I(e, i) && (0, u.qw)({
      entitlementType: g.zF_.FRACTIONAL_REDEMPTION
    })
  }), r.useEffect(() => {
    let e = A({
      entitlements: a,
      unactivatedFractionalPremiumUnits: l,
      currentUser: i,
      premiumSubscription: h,
      fetchedAllEntitlements: o,
      excludeReverseTrialFromCountdown: n
    });
    E(t => (0, s.isEqual)(t, e) ? t : e)
  }, [i, a, h, l, o, n]), m
}
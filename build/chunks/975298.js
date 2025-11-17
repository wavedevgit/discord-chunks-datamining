/** Chunk was on web.js **/
/** chunk id: 975298, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./642613.js"), require("./583741.js"), require("./388685.js"), require("./415506.js");
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk496929 = require("./496929.js"),
  Chunk493773 = require("./493773.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk580130 = require("./580130.js"),
  Chunk122289 = require("./122289.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
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
let I = e => {
  var t;
  let {
    isFetching: n = false,
    entitlements: r,
    unactivatedFractionalPremiumUnits: i,
    currentUser: o,
    premiumSubscription: s,
    fetchedAllEntitlements: c,
    excludeReverseTrialFromCountdown: u
  } = e, d = {
    isFractionalPremiumActive: false,
    fractionalState: E.a$.NONE,
    startsAt: l()(0),
    endsAt: l()(0),
    currentEntitlementId: "",
    unactivatedUnits: [],
    fetched: c
  };
  if (n) return v(y({}, d), {
    fetched: false
  });
  if (null == o || 0 === r.length && 0 === i.length) return d;
  let f = r.filter(e => null != e.endsAt && null != e.startsAt).sort((e, t) => (a()(null != e.endsAt && null != t.endsAt, "endsAt should not be null"), e.endsAt < t.endsAt) ? false : +(e.endsAt > t.endsAt));
  if (f.reverse(), f.length > 0 && (f.length !== r.length || null == f[0].startsAt || null == f[0].endsAt)) {
    let e = Array.from(r.values()).map(e => e.id),
      t = "fractional redemption entitlements should have startsAt/endsAt";
    throw (0, h.g9)(t, {
      extra: {
        entitlementIds: e
      }
    }), Error(t)
  }
  let _ = null != (t = f[0]) ? t : null,
    p = E.a$.NONE;
  null != _ && (p = null != s && s.status === g.O0b.PAUSED ? E.a$.FP_SUB_PAUSED : E.a$.FP_ONLY);
  let b = u && (null == _ ? true : _.sourceType) === g.kNB.REVERSE_TRIAL;
  return {
    isFractionalPremiumActive: null != _,
    fractionalState: p,
    startsAt: null != _ ? l()(_.startsAt) : l()(0),
    endsAt: null != _ ? l()((0, m.N1)(_.endsAt, i, true, b)) : l()(0),
    currentEntitlementId: null != _ ? _.id : "",
    unactivatedUnits: i,
    fetched: c
  }
};

function T(e, t) {
  return null != t && !p.Z.fetchingAllEntitlements && (!p.Z.fetchedAllEntitlements || e)
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
  }, i = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), a = (0, Chunk442837.Wu)([Chunk580130.Z], () => Chunk580130.Z.getFractionalPremium({
    excludeReverseTrial: exports
  })), s = (0, Chunk442837.e7)([Chunk580130.Z], () => Chunk580130.Z.fetchedAllEntitlements), l = (0, Chunk442837.Wu)([Chunk580130.Z], () => Chunk580130.Z.getUnactivatedFractionalPremiumUnits()), h = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()), [m, E] = Chunk473749.useState(I({
    isFetching: T(module, Chunk512722) || Chunk580130.Z.fetchingAllEntitlements,
    entitlements: a,
    unactivatedFractionalPremiumUnits: l,
    currentUser: Chunk512722,
    premiumSubscription: Chunk122289,
    fetchedAllEntitlements: Chunk913527,
    excludeReverseTrialFromCountdown: require
  }));
  return (0, Chunk493773.ZP)(() => {
    T(module, Chunk512722) && (0, Chunk496929.p0)({
      entitlementType: Chunk981631.qc2.FRACTIONAL_REDEMPTION
    })
  }), Chunk473749.useEffect(() => {
    let e = I({
      entitlements: a,
      unactivatedFractionalPremiumUnits: l,
      currentUser: Chunk512722,
      premiumSubscription: Chunk122289,
      fetchedAllEntitlements: Chunk913527,
      excludeReverseTrialFromCountdown: require
    });
    Chunk474936(t => (0, o.isEqual)(t, e) ? t : e)
  }, [Chunk512722, a, Chunk122289, l, Chunk913527, require]), Chunk74538
}
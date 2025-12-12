/** Chunk was on web.js **/
/** chunk id: 975298, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./642613.js"), require("./583741.js"), require("./388685.js"), require("./415506.js");
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
let S = e => {
  var t;
  let {
    isFetching: n = false,
    entitlements: r,
    unactivatedFractionalPremiumUnits: i,
    currentUser: a,
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
  if (null == a || 0 === r.length && 0 === i.length) return d;
  let f = r.filter(e => null != e.endsAt && null != e.startsAt).sort((e, t) => (o()(null != e.endsAt && null != t.endsAt, "endsAt should not be null"), e.endsAt < t.endsAt) ? false : +(e.endsAt > t.endsAt));
  if (f.reverse(), f.length > 0 && (f.length !== r.length || null == f[0].startsAt || null == f[0].endsAt)) {
    let e = Array.from(r.values()).map(e => e.id),
      t = "fractional redemption entitlements should have startsAt/endsAt";
    throw (0, m.g9)(t, {
      extra: {
        entitlementIds: e
      }
    }), Error(t)
  }
  let p = null != (t = f[0]) ? t : null,
    _ = E.a$.NONE;
  null != p && (_ = null != s && s.status === g.O0b.PAUSED ? E.a$.FP_SUB_PAUSED : E.a$.FP_ONLY);
  let b = u && (null == p ? true : p.sourceType) === g.kNB.REVERSE_TRIAL;
  return {
    isFractionalPremiumActive: null != p,
    fractionalState: _,
    startsAt: null != p ? l()(p.startsAt) : l()(0),
    endsAt: null != p ? l()((0, h.N1)(p.endsAt, i, true, b)) : l()(0),
    currentEntitlementId: null != p ? p.id : "",
    unactivatedUnits: i,
    fetched: c
  }
};

function I(e, t) {
  return null != t && !_.Z.fetchingAllEntitlements && (!_.Z.fetchedAllEntitlements || e)
}

function T() {
  let {
    forceFetch: e,
    excludeReverseTrial: t,
    excludeReverseTrialFromCountdown: n
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {
    forceFetch: false,
    excludeReverseTrial: false,
    excludeReverseTrialFromCountdown: false
  }, i = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), o = (0, Chunk442837.Wu)([Chunk580130.Z], () => Chunk580130.Z.getFractionalPremium({
    excludeReverseTrial: exports
  })), s = (0, Chunk442837.e7)([Chunk580130.Z], () => Chunk580130.Z.fetchedAllEntitlements), l = (0, Chunk442837.Wu)([Chunk580130.Z], () => Chunk580130.Z.getUnactivatedFractionalPremiumUnits()), m = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()), [h, E] = Chunk473749.useState(S({
    isFetching: I(module, Chunk512722) || Chunk580130.Z.fetchingAllEntitlements,
    entitlements: o,
    unactivatedFractionalPremiumUnits: l,
    currentUser: Chunk512722,
    premiumSubscription: Chunk122289,
    fetchedAllEntitlements: Chunk913527,
    excludeReverseTrialFromCountdown: require
  }));
  return (0, Chunk493773.ZP)(() => {
    I(module, Chunk512722) && (0, Chunk496929.p0)({
      entitlementType: Chunk981631.qc2.FRACTIONAL_REDEMPTION
    })
  }), Chunk473749.useEffect(() => {
    let e = S({
      entitlements: o,
      unactivatedFractionalPremiumUnits: l,
      currentUser: Chunk512722,
      premiumSubscription: Chunk122289,
      fetchedAllEntitlements: Chunk913527,
      excludeReverseTrialFromCountdown: require
    });
    Chunk474936(t => (0, a.isEqual)(t, e) ? t : e)
  }, [Chunk512722, o, Chunk122289, l, Chunk913527, require]), Chunk74538
}
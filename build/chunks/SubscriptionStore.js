/** Chunk was on web.js **/
/** chunk id: 78839, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./539854.js"), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk301766 = require("./301766.js"),
  Chunk255078 = require("./255078.js"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = null,
  h = null,
  g = null,
  E = null,
  b = null,
  y = false,
  O = null,
  v = false,
  S = false,
  I = null,
  T = false,
  C = null;

function A(e) {
  let {
    subscriptions: t,
    lastLazyPerkSync: n
  } = e, r = {}, i = {}, a = [], o = [], u = l.default.getId();
  t.forEach(e => {
    if (e.user_id !== u) return;
    let t = s.Q.createFromServer(e);
    r[t.id] = t, U(t) && (i[t.id] = t, t.type === c.NYc.GUILD && t.status !== c.O0b.ENDED && a.push(t), t.type === c.NYc.APPLICATION && t.status !== c.O0b.ENDED && o.push(t))
  }), m = r, h = i, E = a, b = o, C = n
}

function N(e) {
  let {
    activeSubscriptions: t,
    record: n
  } = e, r = t.findIndex(e => e.id === n.id);
  if (false === r) return [n, ...t];
  {
    let e = [...t];
    return U(n) && n.status !== c.O0b.ENDED ? e[r] = n : e.splice(r, 1), e
  }
}

function P(e) {
  let {
    subscription: t
  } = e;
  if (t.user_id !== l.default.getId()) return;
  let n = s.Q.createFromServer(t);
  m = _(f({}, m), {
    [n.id]: n
  }), U(n) && (h = _(f({}, h), {
    [n.id]: n
  })), null != E && n.type === c.NYc.GUILD && (E = N({
    activeSubscriptions: E,
    record: n
  })), null != b && n.type === c.NYc.APPLICATION && (E = N({
    activeSubscriptions: b,
    record: n
  }))
}

function R(e) {
  let {
    subscription: t
  } = e;
  if (y = true, T = false, null != t) {
    if (t.user_id !== l.default.getId()) {
      y = false;
      return
    }
    g = s.Q.createFromServer(t)
  }
}

function D() {
  T = false
}

function w(e) {
  let {
    subscription: t
  } = e;
  if (v = true, null != t) {
    if (t.user_id !== l.default.getId()) {
      v = false;
      return
    }
    O = s.Q.createFromServer(t)
  }
}

function x() {
  S = true
}

function L() {
  T = true
}

function j(e) {
  let {
    eligible: t
  } = e;
  I = t, S = false
}

function M(e) {
  let {} = e;
  I = false, S = false
}

function k() {
  m = null, h = null, g = null, E = null, b = null, y = false, O = null, v = false, S = false, T = false, C = null
}

function U(e) {
  return e.status !== c.O0b.UNPAID
}

function G(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = n ? h : m;
  if (null == r) return null;
  for (let n in r) {
    let i = r[n];
    if (i.userId !== l.default.getId()) break;
    if (i.type === e && (null == t || t(i))) return i
  }
  return null
}
class Z extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default)
  }
  hasFetchedSubscriptions() {
    return null != m
  }
  hasFetchedMostRecentPremiumTypeSubscription() {
    return y
  }
  hasFetchedPreviousPremiumTypeSubscription() {
    return v
  }
  getPremiumSubscription() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    return G(Chunk981631.NYc.PREMIUM, e => !(0, o.Q0)(e.planId), module)
  }
  getPremiumTypeSubscription() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    return G(Chunk981631.NYc.PREMIUM, true, module)
  }
  inReverseTrial() {
    let e = G(Chunk981631.NYc.PREMIUM, true, true);
    return null != module && null != module.trialId && !!Chunk474936.h8.includes(module.trialId) && null == module.paymentSourceId
  }
  getSubscriptions() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    return module ? h : m
  }
  getSubscriptionById(e) {
    var t;
    return null != (t = null == m ? true : m[e]) ? t : true
  }
  getActiveGuildSubscriptions() {
    return E
  }
  getActiveApplicationSubscriptions() {
    return b
  }
  getSubscriptionForPlanIds(e) {
    var t;
    let n = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      r = new Set(e),
      i = n ? h : m;
    return null == i ? null : null != (t = Object.values(i).find(e => e.items.some(e => r.has(e.planId)))) ? t : null
  }
  getMostRecentPremiumTypeSubscription() {
    return g
  }
  getPreviousPremiumTypeSubscription() {
    return O
  }
  getIsSubscriptionEligibleForReward() {
    return I
  }
  getIsFetchingSubscriptionRewardEligibility() {
    return S
  }
  getIsFetchingMostRecentSubscription() {
    return T
  }
  getLastLazyPerkSync() {
    return C
  }
  getPremiumGroupSubscription() {
    return G(Chunk981631.NYc.PREMIUM, e => e.hasAnyPremiumGroup, true)
  }
}
d(Z, "displayName", "SubscriptionStore");
let B = new Z(Chunk570140.Z, {
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: A,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: P,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START: L,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: R,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL: D,
  BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: w,
  BILLING_SUBSCRIPTION_RESET: k,
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: x,
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: j,
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: M,
  LOGOUT: k
})
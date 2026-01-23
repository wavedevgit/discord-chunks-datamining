/** Chunk was on web.js **/
/** chunk id: 166403, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => F
}), require("./321073.js"), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk832946 = require("./832946.js"),
  Chunk272207 = require("./272207.js"),
  Chunk961350 = require("./961350.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

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
let h = null,
  m = null,
  g = null,
  E = null,
  y = null,
  b = false,
  O = null,
  v = false,
  A = false,
  I = null,
  S = false,
  T = null;

function C(e) {
  let {
    subscriptions: t,
    lastLazyPerkSync: n
  } = e, r = {}, i = {}, a = [], s = [], u = l.default.getId();
  t.forEach(e => {
    if (e.user_id !== u) return;
    let t = o.h.createFromServer(e);
    r[t.id] = t, U(t) && (i[t.id] = t, t.type === c.rzx.GUILD && t.status !== c.Dmq.ENDED && a.push(t), t.type === c.rzx.APPLICATION && t.status !== c.Dmq.ENDED && s.push(t))
  }), h = r, m = i, E = a, y = s, T = n
}

function N(e) {
  let {
    activeSubscriptions: t,
    record: n
  } = e, r = t.findIndex(e => e.id === n.id);
  if (false === r) return [n, ...t];
  {
    let e = [...t];
    return U(n) && n.status !== c.Dmq.ENDED ? e[r] = n : e.splice(r, 1), e
  }
}

function R(e) {
  let {
    subscription: t
  } = e;
  if (t.user_id !== l.default.getId()) return;
  let n = o.h.createFromServer(t);
  h = _(f({}, h), {
    [n.id]: n
  }), U(n) && (m = _(f({}, m), {
    [n.id]: n
  })), null != E && n.type === c.rzx.GUILD && (E = N({
    activeSubscriptions: E,
    record: n
  })), null != y && n.type === c.rzx.APPLICATION && (E = N({
    activeSubscriptions: y,
    record: n
  }))
}

function w(e) {
  let {
    subscription: t
  } = e;
  if (b = true, S = false, null != t) {
    if (t.user_id !== l.default.getId()) {
      b = false;
      return
    }
    g = o.h.createFromServer(t)
  }
}

function P() {
  S = false
}

function D(e) {
  let {
    subscription: t
  } = e;
  if (v = true, null != t) {
    if (t.user_id !== l.default.getId()) {
      v = false;
      return
    }
    O = o.h.createFromServer(t)
  }
}

function x() {
  A = true
}

function L() {
  S = true
}

function j(e) {
  let {
    eligible: t
  } = e;
  I = t, A = false
}

function M(e) {
  let {} = e;
  I = false, A = false
}

function k() {
  h = null, m = null, g = null, E = null, y = null, b = false, O = null, v = false, A = false, S = false, T = null
}

function U(e) {
  return e.status !== c.Dmq.UNPAID
}

function G(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = n ? m : h;
  if (null == r) return null;
  for (let n in r) {
    let i = r[n];
    if (i.userId !== l.default.getId()) break;
    if (i.type === e && (null == t || t(i))) return i
  }
  return null
}
class V extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(l.default)
  }
  hasFetchedSubscriptions() {
    return null != h
  }
  hasFetchedMostRecentPremiumTypeSubscription() {
    return b
  }
  hasFetchedPreviousPremiumTypeSubscription() {
    return v
  }
  getPremiumSubscription() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    return G(c.rzx.PREMIUM, e => !(0, s.m1)(e.planId), e)
  }
  getPremiumTypeSubscription() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    return G(c.rzx.PREMIUM, true, e)
  }
  inReverseTrial() {
    let e = G(c.rzx.PREMIUM, true, true);
    return null != e && null != e.trialId && !!u.BT.includes(e.trialId) && null == e.paymentSourceId
  }
  getSubscriptions() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    return e ? m : h
  }
  getSubscriptionById(e) {
    var t;
    return null != (t = null == h ? true : h[e]) ? t : true
  }
  getActiveGuildSubscriptions() {
    return E
  }
  getActiveApplicationSubscriptions() {
    return y
  }
  getSubscriptionForPlanIds(e) {
    var t;
    let n = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      r = new Set(e),
      i = n ? m : h;
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
    return A
  }
  getIsFetchingMostRecentSubscription() {
    return S
  }
  getLastLazyPerkSync() {
    return T
  }
  getPremiumGroupSubscription() {
    return G(c.rzx.PREMIUM, e => e.hasAnyPremiumGroup, true)
  }
}
d(V, "displayName", "SubscriptionStore");
let F = new V(Chunk73153.h, {
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: C,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: R,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START: L,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: w,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL: P,
  BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: D,
  BILLING_SUBSCRIPTION_RESET: k,
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: x,
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: j,
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: M,
  LOGOUT: k
})
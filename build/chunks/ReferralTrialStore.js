/** Chunk was on web.js **/
/** chunk id: 276444, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Y
}), require("./388685.js");
var r, Chunk275726 = require("./275726.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk281494 = require("./281494.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = 5,
  f = null,
  p = new Set,
  _ = new Map,
  m = false,
  h = new Set,
  g = new Set,
  E = new Map,
  b = 0,
  y = null,
  O = [],
  v = false,
  S = 0,
  I = false,
  T = false,
  C = null;

function A() {
  f = null, p = new Set, m = false, h = new Set, g = new Set, E = new Map, b = 0, y = null, O = [], v = false, S = 0, I = false, T = false, C = null, _ = new Map
}
let N = () => true;

function P(e) {
  let {} = e;
  C = null, m = true
}

function R(e) {
  let {
    referrals_remaining: t,
    sent_user_ids: n,
    refresh_at: r,
    recipient_status: i,
    has_eligible_friends: a
  } = e;
  I = true, T = a, m = false, f = t, p = new Set(n), C = r, _ = i
}

function w(e) {
  let {} = e;
  I = false, T = false, C = null, m = false, b += 1, y = Date.now() + 1e3 * Math.pow(2, b)
}

function D(e) {
  let {
    userTrialOffer: t
  } = e;
  (0, l.C$)(), E.set(t.id, t), p.add(t.user_id)
}

function x(e) {
  let {
    userTrialOffers: t
  } = e;
  for (let e of ((0, l.C$)(), t)) E.set(e.id, e), p.add(e.user_id)
}

function L(e) {
  h.add(e)
}

function j(e) {
  let {
    userTrialOffer: t
  } = e;
  null != t && (h.delete(t.id), g.add(t.id), E.set(t.id, t))
}

function M(e) {
  let {
    userTrialOfferId: t
  } = e;
  h.delete(t), g.add(t)
}

function k(e) {
  let {
    message: t
  } = e;
  Z(t)
}

function U(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => Z(e))
}

function G(e) {
  let {
    userTrialOfferId: t
  } = e;
  m || (0, l.C$)(), h.has(t) || (L(t), o.Z.wait(() => (0, l.IB)(t).catch(c.VqG)))
}

function Z(e) {
  let t = e.type === i.u.PREMIUM_REFERRAL ? e.content : null;
  if (null == t) returnfalse;
  g.has(t) || h.has(t) || (L(t), o.Z.wait(() => (0, l.IB)(t).catch(c.VqG)))
}

function B() {
  v = true
}

function F(e) {
  let {
    users: t,
    nextIndex: n
  } = e;
  v = false, O = t, S = n
}

function V() {
  v = false
}
class H extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default), this.syncWith([Chunk594174.default], N)
  }
  checkAndFetchReferralsRemaining() {
    null == f && !m && b < d && (null == y || y < Date.now()) && (0, Chunk281494.C$)()
  }
  getReferralsRemaining() {
    return this.checkAndFetchReferralsRemaining(), f
  }
  getSentUserIds() {
    return this.checkAndFetchReferralsRemaining(), Array.from(p.values())
  }
  isFetchingReferralsRemaining() {
    return m
  }
  getRelevantUserTrialOffer(e) {
    return E.get(e)
  }
  isResolving(e) {
    return h.has(e)
  }
  getEligibleUsers() {
    return O
  }
  getFetchingEligibleUsers() {
    return v
  }
  getNextIndexOfEligibleUsers() {
    return S
  }
  getIsEligibleToSendReferrals() {
    return I
  }
  getHasEligibleFriends() {
    return T
  }
  getRefreshAt() {
    return C
  }
  getAllRelevantReferralTrialOffers() {
    return Array.from(E.values())
  }
  getRecipientStatus() {
    return _
  }
}
u(H, "displayName", "ReferralTrialStore");
let Y = new H(Chunk570140.Z, {
  BILLING_REFERRAL_TRIAL_OFFER_UPDATE: G,
  BILLING_REFERRALS_REMAINING_FETCH_START: P,
  BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: R,
  BILLING_REFERRALS_REMAINING_FETCH_FAIL: w,
  BILLING_CREATE_REFERRAL_SUCCESS: D,
  CREATE_REFERRALS_SUCCESS: x,
  BILLING_REFERRAL_RESOLVE_SUCCESS: j,
  BILLING_REFERRAL_RESOLVE_FAIL: M,
  REFERRALS_FETCH_ELIGIBLE_USER_START: B,
  REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: F,
  REFERRALS_FETCH_ELIGIBLE_USER_FAIL: V,
  LOAD_MESSAGES_SUCCESS: U,
  MESSAGE_CREATE: k,
  LOAD_MESSAGES_AROUND_SUCCESS: U,
  LOGOUT: A
})
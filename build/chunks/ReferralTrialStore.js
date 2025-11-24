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
  _ = new Set,
  p = new Map,
  h = false,
  m = new Set,
  g = new Set,
  E = new Map,
  b = 0,
  y = null,
  O = [],
  v = false,
  I = 0,
  T = false,
  S = false,
  A = null;

function C() {
  f = null, _ = new Set, h = false, m = new Set, g = new Set, E = new Map, b = 0, y = null, O = [], v = false, I = 0, T = false, S = false, A = null, p = new Map
}
let N = () => true;

function R(e) {
  let {} = e;
  A = null, h = true
}

function P(e) {
  let {
    referrals_remaining: t,
    sent_user_ids: n,
    refresh_at: r,
    recipient_status: i,
    has_eligible_friends: a
  } = e;
  T = true, S = a, h = false, f = t, _ = new Set(n), A = r, p = i
}

function D(e) {
  let {} = e;
  T = false, S = false, A = null, h = false, b += 1, y = Date.now() + 1e3 * Math.pow(2, b)
}

function w(e) {
  let {
    userTrialOffer: t
  } = e;
  (0, l.C$)(), E.set(t.id, t), _.add(t.user_id)
}

function L(e) {
  let {
    userTrialOffers: t
  } = e;
  for (let e of ((0, l.C$)(), t)) E.set(e.id, e), _.add(e.user_id)
}

function x(e) {
  m.add(e)
}

function M(e) {
  let {
    userTrialOffer: t
  } = e;
  null != t && (m.delete(t.id), g.add(t.id), E.set(t.id, t))
}

function j(e) {
  let {
    userTrialOfferId: t
  } = e;
  m.delete(t), g.add(t)
}

function k(e) {
  let {
    message: t
  } = e;
  B(t)
}

function U(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => B(e))
}

function G(e) {
  let {
    userTrialOfferId: t
  } = e;
  h || (0, l.C$)(), m.has(t) || (x(t), o.Z.wait(() => (0, l.IB)(t).catch(c.VqG)))
}

function B(e) {
  let t = e.type === i.u.PREMIUM_REFERRAL ? e.content : null;
  if (null == t) returnfalse;
  g.has(t) || m.has(t) || (x(t), o.Z.wait(() => (0, l.IB)(t).catch(c.VqG)))
}

function Z() {
  v = true
}

function F(e) {
  let {
    users: t,
    nextIndex: n
  } = e;
  v = false, O = t, I = n
}

function V() {
  v = false
}
class H extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default), this.syncWith([Chunk594174.default], N)
  }
  checkAndFetchReferralsRemaining() {
    null == f && !h && b < d && (null == y || y < Date.now()) && (0, Chunk281494.C$)()
  }
  getReferralsRemaining() {
    return this.checkAndFetchReferralsRemaining(), f
  }
  getSentUserIds() {
    return this.checkAndFetchReferralsRemaining(), Array.from(_.values())
  }
  isFetchingReferralsRemaining() {
    return h
  }
  getRelevantUserTrialOffer(e) {
    return E.get(e)
  }
  isResolving(e) {
    return m.has(e)
  }
  getEligibleUsers() {
    return O
  }
  getFetchingEligibleUsers() {
    return v
  }
  getNextIndexOfEligibleUsers() {
    return I
  }
  getIsEligibleToSendReferrals() {
    return T
  }
  getHasEligibleFriends() {
    return S
  }
  getRefreshAt() {
    return A
  }
  getAllRelevantReferralTrialOffers() {
    return Array.from(E.values())
  }
  getRecipientStatus() {
    return p
  }
}
u(H, "displayName", "ReferralTrialStore");
let Y = new H(Chunk570140.Z, {
  BILLING_REFERRAL_TRIAL_OFFER_UPDATE: G,
  BILLING_REFERRALS_REMAINING_FETCH_START: R,
  BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: P,
  BILLING_REFERRALS_REMAINING_FETCH_FAIL: D,
  BILLING_CREATE_REFERRAL_SUCCESS: w,
  CREATE_REFERRALS_SUCCESS: L,
  BILLING_REFERRAL_RESOLVE_SUCCESS: M,
  BILLING_REFERRAL_RESOLVE_FAIL: j,
  REFERRALS_FETCH_ELIGIBLE_USER_START: Z,
  REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: F,
  REFERRALS_FETCH_ELIGIBLE_USER_FAIL: V,
  LOAD_MESSAGES_SUCCESS: U,
  MESSAGE_CREATE: k,
  LOAD_MESSAGES_AROUND_SUCCESS: U,
  LOGOUT: C
})
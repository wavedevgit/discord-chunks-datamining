/** Chunk was on web.js **/
/** chunk id: 276444, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => W
}), require("./388685.js");
var r, Chunk275726 = require("./275726.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk281494 = require("./281494.js"),
  Chunk885145 = require("./885145.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = 5,
  _ = null,
  p = new Set,
  h = new Map,
  m = false,
  g = new Set,
  E = new Set,
  b = new Map,
  y = 0,
  O = null,
  v = [],
  I = false,
  T = 0,
  S = false,
  A = false,
  C = null;

function N() {
  _ = null, p = new Set, m = false, g = new Set, E = new Set, b = new Map, y = 0, O = null, v = [], I = false, T = 0, S = false, A = false, C = null, h = new Map
}
let R = () => true;

function P(e) {
  let {} = e;
  C = null, m = true
}

function D(e) {
  let {
    referrals_remaining: t,
    sent_user_ids: n,
    refresh_at: r,
    recipient_status: i,
    has_eligible_friends: a
  } = e;
  S = true === c.Z.getCurrentConfig({
    location: "handleReferralsRemainingFetchSuccess"
  }).enabled || null == r && a, A = a, m = false, _ = t, p = new Set(n), C = r, h = i
}

function w(e) {
  let {} = e;
  S = false, A = false, C = null, m = false, y += 1, O = Date.now() + 1e3 * Math.pow(2, y)
}

function x(e) {
  let {
    userTrialOffer: t
  } = e;
  (0, l.C$)(), b.set(t.id, t), p.add(t.user_id)
}

function L(e) {
  let {
    userTrialOffers: t
  } = e;
  for (let e of ((0, l.C$)(), t)) b.set(e.id, e), p.add(e.user_id)
}

function M(e) {
  g.add(e)
}

function k(e) {
  let {
    userTrialOffer: t
  } = e;
  null != t && (g.delete(t.id), E.add(t.id), b.set(t.id, t))
}

function j(e) {
  let {
    userTrialOfferId: t
  } = e;
  g.delete(t), E.add(t)
}

function U(e) {
  let {
    message: t
  } = e;
  Z(t)
}

function G(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => Z(e))
}

function B(e) {
  let {
    userTrialOfferId: t
  } = e;
  m || (0, l.C$)(), g.has(t) || (M(t), o.Z.wait(() => (0, l.IB)(t).catch(u.VqG)))
}

function Z(e) {
  let t = e.type === i.u.PREMIUM_REFERRAL ? e.content : null;
  if (null == t) returnfalse;
  E.has(t) || g.has(t) || (M(t), o.Z.wait(() => (0, l.IB)(t).catch(u.VqG)))
}

function F() {
  I = true
}

function V(e) {
  let {
    users: t,
    nextIndex: n
  } = e;
  I = false, v = t, T = n
}

function H() {
  I = false
}
class Y extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default), this.syncWith([Chunk594174.default], R)
  }
  checkAndFetchReferralsRemaining() {
    null == _ && !m && y < f && (null == O || O < Date.now()) && (0, Chunk281494.C$)()
  }
  getReferralsRemaining() {
    return this.checkAndFetchReferralsRemaining(), _
  }
  getSentUserIds() {
    return this.checkAndFetchReferralsRemaining(), Array.from(p.values())
  }
  isFetchingReferralsRemaining() {
    return m
  }
  getRelevantUserTrialOffer(e) {
    return b.get(e)
  }
  isResolving(e) {
    return g.has(e)
  }
  getEligibleUsers() {
    return v
  }
  getFetchingEligibleUsers() {
    return I
  }
  getNextIndexOfEligibleUsers() {
    return T
  }
  getIsEligibleToSendReferrals() {
    return S
  }
  getHasEligibleFriends() {
    return A
  }
  getRefreshAt() {
    return C
  }
  getAllRelevantReferralTrialOffers() {
    return Array.from(b.values())
  }
  getRecipientStatus() {
    return h
  }
}
d(Y, "displayName", "ReferralTrialStore");
let W = new Y(Chunk570140.Z, {
  BILLING_REFERRAL_TRIAL_OFFER_UPDATE: B,
  BILLING_REFERRALS_REMAINING_FETCH_START: P,
  BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: D,
  BILLING_REFERRALS_REMAINING_FETCH_FAIL: w,
  BILLING_CREATE_REFERRAL_SUCCESS: x,
  CREATE_REFERRALS_SUCCESS: L,
  BILLING_REFERRAL_RESOLVE_SUCCESS: k,
  BILLING_REFERRAL_RESOLVE_FAIL: j,
  REFERRALS_FETCH_ELIGIBLE_USER_START: F,
  REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: V,
  REFERRALS_FETCH_ELIGIBLE_USER_FAIL: H,
  LOAD_MESSAGES_SUCCESS: G,
  MESSAGE_CREATE: U,
  LOAD_MESSAGES_AROUND_SUCCESS: G,
  LOGOUT: N
})
/** Chunk was on web.js **/
/** chunk id: 851746, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => W
}), require("./896048.js");
var r, Chunk448761 = require("./448761.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk287809 = require("./287809.js"),
  Chunk326084 = require("./326084.js"),
  Chunk652215 = require("./652215.js");

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
  h = false,
  m = new Set,
  g = new Set,
  E = new Map,
  b = 0,
  y = null,
  O = [],
  A = false,
  v = 0,
  S = false,
  I = false,
  T = null;

function C() {
  f = null, p = new Set, h = false, m = new Set, g = new Set, E = new Map, b = 0, y = null, O = [], A = false, v = 0, S = false, I = false, T = null, _ = new Map
}
let N = () => true;

function R(e) {
  let {} = e;
  T = null, h = true
}

function w(e) {
  let {
    referrals_remaining: t,
    sent_user_ids: n,
    refresh_at: r,
    recipient_status: i,
    has_eligible_friends: a
  } = e;
  S = true, I = a, h = false, f = t, p = new Set(n), T = r, _ = i
}

function P(e) {
  let {} = e;
  S = false, I = false, T = null, h = false, b += 1, y = Date.now() + 1e3 * Math.pow(2, b)
}

function D(e) {
  let {
    userTrialOffer: t
  } = e;
  (0, l.xM)(), E.set(t.id, t), p.add(t.user_id)
}

function x(e) {
  let {
    userTrialOffers: t
  } = e;
  for (let e of ((0, l.xM)(), t)) E.set(e.id, e), p.add(e.user_id)
}

function L(e) {
  m.add(e)
}

function j(e) {
  let {
    userTrialOffer: t
  } = e;
  null != t && (m.delete(t.id), g.add(t.id), E.set(t.id, t))
}

function M(e) {
  let {
    userTrialOfferId: t
  } = e;
  m.delete(t), g.add(t)
}

function k(e) {
  let {
    message: t
  } = e;
  V(t)
}

function U(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => V(e))
}

function G(e) {
  let {
    userTrialOfferId: t
  } = e;
  h || (0, l.xM)(), m.has(t) || (L(t), s.h.wait(() => (0, l.kZ)(t).catch(c.FXj)))
}

function V(e) {
  let t = e.type === i.l.PREMIUM_REFERRAL ? e.content : null;
  if (null == t) returnfalse;
  g.has(t) || m.has(t) || (L(t), s.h.wait(() => (0, l.kZ)(t).catch(c.FXj)))
}

function F() {
  A = true
}

function B(e) {
  let {
    users: t,
    nextIndex: n
  } = e;
  A = false, O = t, v = n
}

function H() {
  A = false
}
class Y extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.default), this.syncWith([o.default], N)
  }
  checkAndFetchReferralsRemaining() {
    null == f && !h && b < d && (null == y || y < Date.now()) && (0, l.xM)()
  }
  getReferralsRemaining() {
    return this.checkAndFetchReferralsRemaining(), f
  }
  getSentUserIds() {
    return this.checkAndFetchReferralsRemaining(), Array.from(p.values())
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
    return A
  }
  getNextIndexOfEligibleUsers() {
    return v
  }
  getIsEligibleToSendReferrals() {
    return S
  }
  getHasEligibleFriends() {
    return I
  }
  getRefreshAt() {
    return T
  }
  getAllRelevantReferralTrialOffers() {
    return Array.from(E.values())
  }
  getRecipientStatus() {
    return _
  }
}
u(Y, "displayName", "ReferralTrialStore");
let W = new Y(Chunk73153.h, {
  BILLING_REFERRAL_TRIAL_OFFER_UPDATE: G,
  BILLING_REFERRALS_REMAINING_FETCH_START: R,
  BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: w,
  BILLING_REFERRALS_REMAINING_FETCH_FAIL: P,
  BILLING_CREATE_REFERRAL_SUCCESS: D,
  CREATE_REFERRALS_SUCCESS: x,
  BILLING_REFERRAL_RESOLVE_SUCCESS: j,
  BILLING_REFERRAL_RESOLVE_FAIL: M,
  REFERRALS_FETCH_ELIGIBLE_USER_START: F,
  REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: B,
  REFERRALS_FETCH_ELIGIBLE_USER_FAIL: H,
  LOAD_MESSAGES_SUCCESS: U,
  MESSAGE_CREATE: k,
  LOAD_MESSAGES_AROUND_SUCCESS: U,
  LOGOUT: C
})
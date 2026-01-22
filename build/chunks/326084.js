/** Chunk was on web.js **/
/** chunk id: 326084, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P7: () => h,
  aK: () => d,
  kZ: () => E,
  o: () => f,
  xM: () => m,
  xm: () => g
}), require("./896048.js"), require("./457529.js"), require("./321073.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js");
require("./843472.js");
var Chunk427157 = require("./427157.js");
require("./309010.js");
var Chunk728458 = require("./728458.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = 10,
  u = 6e5;
var d = function(e) {
    return e[e.REDEEMED = 1] = "REDEEMED", e[e.PENDING = 2] = "PENDING", e[e.CONVERTED = 3] = "CONVERTED", e
  }({}),
  f = function(e) {
    return e[e.SUCCESS = 1] = "SUCCESS", e[e.FAIL = 2] = "FAIL", e
  }({});
class p {
  set(e, t) {
    this.cache.set(e, t)
  }
  get(e) {
    return this._checkExpiration(), this.cache.get(e)
  }
  has(e) {
    return this._checkExpiration(), this.cache.has(e)
  }
  _checkExpiration() {
    this.expiration < Date.now() && this.cache.clear()
  }
  constructor() {
    l(this, "cache", true), l(this, "expiration", true), this.cache = new Map, this.expiration = Date.now() + u
  }
}
let _ = new p;
async function h(e, t, n) {
  let i = JSON.stringify({
    index: e,
    searchQuery: t
  });
  if (_.has(i)) return _.get(i);
  let {
    users: s,
    next_index: l
  } = (await r.Bo.post({
    url: o.Rsh.GET_REFERRAL_ELIGIBLE_USERS,
    body: {
      index: e,
      limit: null != n ? n : c,
      search_query: t
    },
    oldFormErrors: true,
    rejectWithError: false
  })).body, u = {
    users: s.map(e => new a.A(e)),
    nextIndex: l
  };
  return _.set(i, u), u
}
let m = () => (i.h.dispatch({
  type: "BILLING_REFERRALS_REMAINING_FETCH_START"
}), r.Bo.get({
  url: o.Rsh.GET_REFERRALS_REMAINING,
  oldFormErrors: true,
  rejectWithError: false
}).then(e => {
  var t, n, r, a;
  let s = new Map;
  if (null != e.body && null != e.body.recipient_status)
    for (let t in e.body.recipient_status) {
      let n = e.body.recipient_status[t];
      s.set(t, n)
    }
  i.h.dispatch({
    type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
    referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
    sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : [],
    refresh_at: null != (t = null == (r = e.body) ? true : r.refresh_at) ? t : null,
    recipient_status: s,
    has_eligible_friends: null != (n = null == (a = e.body) ? true : a.has_eligible_friends) && n
  })
}, e => {
  (null == e ? true : e.status) !== 404 && i.h.dispatch({
    type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
  })
}));
async function g(e) {
  let t = [],
    n = new Map;
  for (let i of e) try {
    var a;
    let e = null != (a = (await r.Bo.post({
      url: o.Rsh.CREATE_REFERRAL(i),
      oldFormErrors: true,
      rejectWithError: true
    })).body) ? a : null;
    null != e && t.push(e), n.set(i, 1)
  } catch (e) {
    s.A.captureException(e), n.set(i, 2)
  }
  return i.h.dispatch({
    type: "CREATE_REFERRALS_SUCCESS",
    userTrialOffers: t
  }), n
}
async function E(e) {
  try {
    var t;
    let n = null != (t = (await r.Bo.get({
      url: o.Rsh.REFERRAL_OFFER_ID_RESOLVE(e),
      oldFormErrors: true,
      rejectWithError: false
    })).body) ? t : null;
    return i.h.dispatch({
      type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
      userTrialOffer: n
    }), {
      userTrialOffer: n
    }
  } catch (t) {
    i.h.dispatch({
      type: "BILLING_REFERRAL_RESOLVE_FAIL",
      userTrialOfferId: e
    })
  }
}
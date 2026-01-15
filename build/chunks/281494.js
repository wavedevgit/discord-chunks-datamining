/** Chunk was on web.js **/
/** chunk id: 281494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C$: () => m,
  Fe: () => d,
  Fz: () => f,
  IB: () => E,
  iF: () => h,
  jy: () => g
}), require("./388685.js"), require("./49124.js"), require("./539854.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js");
require("./904245.js");
var Chunk598077 = require("./598077.js");
require("./944486.js");
var Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");

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
    users: o,
    next_index: l
  } = (await r.tn.post({
    url: s.ANM.GET_REFERRAL_ELIGIBLE_USERS,
    body: {
      index: e,
      limit: null != n ? n : c,
      search_query: t
    },
    oldFormErrors: true,
    rejectWithError: false
  })).body, u = {
    users: o.map(e => new a.Z(e)),
    nextIndex: l
  };
  return _.set(i, u), u
}
let m = () => (i.Z.dispatch({
  type: "BILLING_REFERRALS_REMAINING_FETCH_START"
}), r.tn.get({
  url: s.ANM.GET_REFERRALS_REMAINING,
  oldFormErrors: true,
  rejectWithError: false
}).then(e => {
  var t, n, r, a;
  let o = new Map;
  if (null != e.body && null != e.body.recipient_status)
    for (let t in e.body.recipient_status) {
      let n = e.body.recipient_status[t];
      o.set(t, n)
    }
  i.Z.dispatch({
    type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
    referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
    sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : [],
    refresh_at: null != (r = null == (t = e.body) ? true : t.refresh_at) ? r : null,
    recipient_status: o,
    has_eligible_friends: null != (a = null == (n = e.body) ? true : n.has_eligible_friends) && a
  })
}, e => {
  (null == e ? true : e.status) !== 404 && i.Z.dispatch({
    type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
  })
}));
async function g(e) {
  let t = [],
    n = new Map;
  for (let i of e) try {
    var a;
    let e = null != (a = (await r.tn.post({
      url: s.ANM.CREATE_REFERRAL(i),
      oldFormErrors: true,
      rejectWithError: true
    })).body) ? a : null;
    null != e && t.push(e), n.set(i, 1)
  } catch (e) {
    o.Z.captureException(e), n.set(i, 2)
  }
  return i.Z.dispatch({
    type: "CREATE_REFERRALS_SUCCESS",
    userTrialOffers: t
  }), n
}
async function E(e) {
  try {
    var t;
    let n = null != (t = (await r.tn.get({
      url: s.ANM.REFERRAL_OFFER_ID_RESOLVE(e),
      oldFormErrors: true,
      rejectWithError: false
    })).body) ? t : null;
    return i.Z.dispatch({
      type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
      userTrialOffer: n
    }), {
      userTrialOffer: n
    }
  } catch (t) {
    i.Z.dispatch({
      type: "BILLING_REFERRAL_RESOLVE_FAIL",
      userTrialOfferId: e
    })
  }
}
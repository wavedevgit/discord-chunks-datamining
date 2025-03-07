/** Chunk was on web.js **/
"use strict";
n.d(t, {
  C$: () => g,
  Fe: () => d,
  Fz: () => f,
  IB: () => b,
  Ve: () => E,
  bq: () => h,
  iF: () => m,
  jy: () => v
}), n(47120), n(26686), n(653041);
var r = n(544891),
  i = n(570140);
n(904245);
var o = n(598077);
n(944486);
var a = n(960048),
  s = n(981631);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
class _ {
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
    l(this, "cache", void 0), l(this, "expiration", void 0), this.cache = new Map, this.expiration = Date.now() + u
  }
}
let p = new _,
  h = () => (i.Z.dispatch({
    type: "BILLING_GET_REFERRAL_INCENTIVE_STATUS_START"
  }), r.tn.get({
    url: s.ANM.GET_REFERRAL_INCENTIVE_ELIGIBILITY,
    oldFormErrors: !0,
    rejectWithError: !1
  }).then(e => {
    i.Z.dispatch({
      type: "BILLING_GET_REFERRAL_INCENTIVE_STATUS_SUCCESS",
      isUserEligibleForIncentive: null != e.body ? e.body.is_eligible_for_incentive : null
    })
  }, () => {
    i.Z.dispatch({
      type: "BILLING_GET_REFERRAL_INCENTIVE_STATUS_FAIL"
    })
  }));
async function m(e, t, n) {
  let i = JSON.stringify({
    index: e,
    searchQuery: t
  });
  if (p.has(i)) return p.get(i);
  let {
    users: a,
    next_index: l
  } = (await r.tn.post({
    url: s.ANM.GET_REFERRAL_ELIGIBLE_USERS,
    body: {
      index: e,
      limit: null != n ? n : c,
      search_query: t
    },
    oldFormErrors: !0,
    rejectWithError: !1
  })).body, u = {
    users: a.map(e => new o.Z(e)),
    nextIndex: l
  };
  return p.set(i, u), u
}
let g = () => (i.Z.dispatch({
    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
  }), r.tn.get({
    url: s.ANM.GET_REFERRALS_REMAINING,
    oldFormErrors: !0,
    rejectWithError: !1
  }).then(e => {
    var t, n, r;
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
      refresh_at: null !== (r = null === (t = e.body) || void 0 === t ? void 0 : t.refresh_at) && void 0 !== r ? r : null,
      recipient_status: o,
      has_eligible_friends: e.body.has_eligible_friends,
      isUserEligibleForIncentive: e.body.is_eligible_for_incentive,
      isUserQualifiedForIncentive: e.body.is_qualified_for_incentive,
      userReferralIncentiveState: null === (n = e.body) || void 0 === n ? void 0 : n.referral_incentive_status
    })
  }, () => {
    i.Z.dispatch({
      type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
    })
  })),
  E = e => (i.Z.dispatch({
    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
    recipientId: e
  }), r.tn.post({
    url: s.ANM.CREATE_REFERRAL_PREVIEW(e),
    oldFormErrors: !0,
    rejectWithError: !1
  }).then(t => {
    i.Z.dispatch({
      type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
      recipientId: e,
      is_eligible: null != t.body && t.body.is_eligible
    })
  }, () => {
    i.Z.dispatch({
      type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
      recipientId: e
    })
  }));
async function v(e) {
  let t = [],
    n = new Map;
  for (let i of e) try {
    var o;
    let e = await r.tn.post({
        url: s.ANM.CREATE_REFERRAL(i),
        oldFormErrors: !0,
        rejectWithError: !0
      }),
      a = null !== (o = e.body) && void 0 !== o ? o : null;
    null != a && t.push(a), n.set(i, 1)
  } catch (e) {
    a.Z.captureException(e), n.set(i, 2)
  }
  return i.Z.dispatch({
    type: "CREATE_REFERRALS_SUCCESS",
    userTrialOffers: t
  }), n
}
async function b(e) {
  try {
    var t;
    let n = await r.tn.get({
        url: s.ANM.REFERRAL_OFFER_ID_RESOLVE(e),
        oldFormErrors: !0,
        rejectWithError: !1
      }),
      o = null !== (t = n.body) && void 0 !== t ? t : null;
    return i.Z.dispatch({
      type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
      userTrialOffer: o
    }), {
      userTrialOffer: o
    }
  } catch (t) {
    i.Z.dispatch({
      type: "BILLING_REFERRAL_RESOLVE_FAIL",
      userTrialOfferId: e
    })
  }
}
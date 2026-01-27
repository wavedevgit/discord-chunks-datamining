/** Chunk was on 92917 **/
/** chunk id: 677185, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EQ: () => d,
  JV: () => u,
  el: () => _,
  kE: () => h,
  mm: () => f,
  n2: () => p,
  oO: () => m,
  wc: () => g
}), require("./896048.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk427157 = require("./427157.js"),
  Chunk825772 = require("./825772.js"),
  Chunk652215 = require("./652215.js");
async function u() {
  a.h.dispatch({
    type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_START"
  });
  try {
    let e = (await l.Bo.get({
      url: c.Rsh.PREMIUM_GROUP_MEMBERSHIP,
      rejectWithError: true
    })).body;
    return null != e ? a.h.dispatch({
      type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS",
      membership: {
        subscriptionId: e.subscription_id,
        memberType: e.member_type,
        subscriptionStatus: e.subscription_status,
        currentPeriodEnd: new Date(e.current_period_end)
      }
    }) : a.h.dispatch({
      type: "PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND"
    }), e
  } catch (e) {
    return a.h.dispatch({
      type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE"
    }), null
  }
}
async function d(e, t, n, r) {
  let {
    users: i,
    next_index: a,
    ineligible_users: o
  } = (await l.Bo.get({
    url: c.Rsh.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(e),
    query: {
      index: t,
      limit: null != r ? r : 10,
      search_query: n,
      include_ineligible: true
    },
    rejectWithError: true
  })).body;
  return {
    users: [...i.map(e => Object.assign(new s.A(e), {
      eligible: true
    })), ...(null != o ? o : []).map(e => Object.assign(new s.A(e), {
      eligible: false
    }))],
    nextIndex: a
  }
}
async function p(e, t) {
  a.h.dispatch({
    type: "PREMIUM_GROUP_INVITE_USERS_START"
  });
  try {
    let n = await l.Bo.post({
      url: c.Rsh.BILLING_SUBSCRIPTION_INVITES(e),
      body: {
        user_ids: t
      },
      rejectWithError: true
    });
    return a.h.dispatch({
      type: "PREMIUM_GROUP_INVITE_USERS_SUCCESS",
      subscriptionId: e
    }), {
      invitedUsers: n.body.invited_users,
      ineligibleUsers: n.body.ineligible_users
    }
  } catch (e) {
    return a.h.dispatch({
      type: "PREMIUM_GROUP_INVITE_USERS_FAILURE"
    }), null
  }
}
async function m(e, t) {
  a.h.dispatch({
    type: "PREMIUM_GROUP_REMOVE_MEMBER_START"
  });
  try {
    let n = await l.Bo.del({
      url: c.Rsh.BILLING_SUBSCRIPTION_REMOVE_USER(e, t),
      rejectWithError: true
    });
    return a.h.dispatch({
      type: "PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS",
      subscriptionId: e
    }), n
  } catch (e) {
    return a.h.dispatch({
      type: "PREMIUM_GROUP_REMOVE_MEMBER_FAILURE"
    }), e
  }
}
async function f(e) {
  a.h.dispatch({
    type: "PREMIUM_GROUP_MEMBERS_FETCH_START"
  });
  try {
    let t = (await l.Bo.get({
        url: c.Rsh.BILLING_SUBSCRIPTION_MEMBERS(e),
        rejectWithError: true
      })).body.map(o.A.createFromServer),
      n = t.find(e => e.isPrimary());
    return i()(null != n, "Primary member not found in premium group"), a.h.dispatch({
      type: "PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS",
      members: {
        primary: n.user,
        members: t.filter(e => e.isMember()).map(e => e.user),
        invitedUsers: t.filter(e => e.isInvited()).map(e => e.user)
      }
    }), t
  } catch (e) {
    return a.h.dispatch({
      type: "PREMIUM_GROUP_MEMBERS_FETCH_FAILURE"
    }), []
  }
}
async function g(e, t, n) {
  a.h.dispatch({
    type: "PREMIUM_GROUP_ACCEPT_INVITE_START",
    subscriptionGroupMemberId: n
  });
  try {
    let r = await l.Bo.patch({
      url: c.Rsh.BILLING_SUBSCRIPTION_INVITE(e, t),
      rejectWithError: true
    });
    return a.h.dispatch({
      type: "PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS",
      subscriptionGroupMemberId: n
    }), r
  } catch (e) {
    return a.h.dispatch({
      type: "PREMIUM_GROUP_ACCEPT_INVITE_FAIL",
      subscriptionGroupMemberId: n
    }), e
  }
}
async function h(e, t, n) {
  a.h.dispatch({
    type: "PREMIUM_GROUP_REMOVE_INVITE_START",
    subscriptionGroupMemberId: n
  });
  try {
    let r = await l.Bo.del({
      url: c.Rsh.BILLING_SUBSCRIPTION_INVITE(e, t),
      rejectWithError: true
    });
    return a.h.dispatch({
      type: "PREMIUM_GROUP_REMOVE_INVITE_SUCCESS",
      subscriptionId: e,
      subscriptionGroupMemberId: n
    }), r
  } catch (t) {
    var r;
    return a.h.dispatch({
      type: "PREMIUM_GROUP_REMOVE_INVITE_FAILURE",
      subscriptionGroupMemberId: n,
      errorCode: null == (r = t.body) ? true : r.code,
      subscriptionId: e
    }), t
  }
}
async function _(e) {
  a.h.dispatch({
    type: "PREMIUM_GROUP_INVITE_FETCH_START",
    subscriptionGroupMemberId: e
  });
  try {
    let t = (await l.Bo.get({
      url: c.Rsh.PREMIUM_GROUP_INVITE(e),
      rejectWithError: true
    })).body;
    a.h.dispatch({
      type: "PREMIUM_GROUP_INVITE_FETCH_SUCCESS",
      subscriptionGroupMemberId: e,
      invite: t
    })
  } catch (n) {
    var t;
    a.h.dispatch({
      type: "PREMIUM_GROUP_INVITE_FETCH_FAIL",
      subscriptionGroupMemberId: e,
      status: null != (t = null == n ? true : n.status) ? t : 0
    })
  }
}
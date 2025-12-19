/** Chunk was on web.js **/
/** chunk id: 643281, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk78839 = require("./78839.js"),
  Chunk80721 = require("./80721.js"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = {
  membersData: {
    data: null,
    isFetching: false,
    isUpdating: false
  },
  membershipData: {
    data: null,
    isFetching: false,
    hasFetched: false
  }
};

function f() {
  d.membersData.isFetching = true
}

function p(e) {
  let {
    members: t
  } = e;
  d.membersData.data = t, d.membersData.isFetching = false
}

function _() {
  d.membersData.isFetching = false
}

function m() {
  d.membershipData.isFetching = true
}

function h(e) {
  let {
    membership: t
  } = e;
  d.membershipData.data = t, d.membershipData.isFetching = false, d.membershipData.hasFetched = true
}

function g() {
  d.membershipData.isFetching = false, d.membershipData.hasFetched = true
}

function E() {
  d.membershipData.isFetching = false, d.membershipData.hasFetched = true
}

function b() {
  return !d.membershipData.isFetching && !d.membershipData.hasFetched && (Chunk570140.Z.wait(() => (0, Chunk80721.WH)().catch(Chunk981631.VqG)), true)
}

function y() {
  d.membersData.isUpdating = true
}

function O(e) {
  let {
    subscriptionId: t
  } = e;
  a.Z.wait(() => (0, s.i1)(t).catch(c.VqG)), d.membersData.isUpdating = false
}

function v(e) {
  let {
    errorCode: t,
    subscriptionId: n
  } = e;
  if (t === l.YW.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED) return a.Z.wait(() => (0, s.i1)(n).catch(c.VqG)), d.membersData.isUpdating = false, true;
  S()
}

function S() {
  d.membersData.isUpdating = false
}

function I(e) {
  let {
    subscriptionId: t
  } = e;
  return !d.membersData.isFetching && (a.Z.wait(() => (0, s.i1)(t).catch(c.VqG)), true)
}

function T() {
  d = {
    membersData: {
      data: null,
      isFetching: false,
      isUpdating: false
    },
    membershipData: {
      data: null,
      isFetching: false,
      hasFetched: false
    }
  }
}
class C extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk78839.Z)
  }
  getMembers() {
    return d.membersData.data
  }
  isFetchingMembers() {
    return d.membersData.isFetching
  }
  isUpdatingMembers() {
    return d.membersData.isUpdating
  }
  hasFetchedMembers() {
    return null !== d.membersData.data
  }
  getMembership() {
    return d.membershipData.data
  }
  isFetchingMembership() {
    return d.membershipData.isFetching
  }
  hasFetchedMembership() {
    return null !== d.membershipData.data
  }
  getPremiumGroupSubscriptionId() {
    var e, t, n;
    let r = null == (e = Chunk78839.Z.getPremiumGroupSubscription()) ? true : module.id;
    return null != r ? r : null != (n = null == (t = d.membershipData.data) ? true : exports.subscriptionId) ? require : null
  }
  getPremiumGroupSubscriptionStatus() {
    var e, t, n;
    let r = null == (e = Chunk78839.Z.getPremiumGroupSubscription()) ? true : module.status;
    return null != r ? r : null != (n = null == (t = d.membershipData.data) ? true : exports.subscriptionStatus) ? require : null
  }
  getPremiumGroupCurrentPeriodEnd() {
    var e, t;
    let n = null == (e = Chunk78839.Z.getPremiumGroupSubscription()) ? true : module.currentPeriodEnd;
    if (null != require) return require;
    let r = null == (t = d.membershipData.data) ? true : exports.currentPeriodEnd;
    return null != r && "" !== r ? new Date(r) : null
  }
  getNumUsedSeats() {
    return null == d.membersData.data ? 0 : d.membersData.data.members.length
  }
  getNumAvailableInvites() {
    if (null == d.membersData.data) return Chunk282793.v$;
    let e = d.membersData.data.members.length + d.membersData.data.invitedUsers.length;
    return Math.max(0, Chunk282793.v$ - module)
  }
  getNumTotalSeats() {
    return Chunk282793.v$
  }
}
u(C, "displayName", "PremiumGroupStore");
let A = new C(Chunk570140.Z, {
  PREMIUM_GROUP_MEMBERS_REQUEST: I,
  PREMIUM_GROUP_MEMBERS_FETCH_START: f,
  PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: p,
  PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: _,
  PREMIUM_GROUP_MEMBERSHIP_REQUEST: b,
  PREMIUM_GROUP_MEMBERSHIP_FETCH_START: m,
  PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: h,
  PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: g,
  PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: E,
  PREMIUM_GROUP_INVITE_USERS_START: y,
  PREMIUM_GROUP_INVITE_USERS_SUCCESS: O,
  PREMIUM_GROUP_INVITE_USERS_FAILURE: S,
  PREMIUM_GROUP_REMOVE_MEMBER_START: y,
  PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: O,
  PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: S,
  PREMIUM_GROUP_REMOVE_INVITE_START: y,
  PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: O,
  PREMIUM_GROUP_REMOVE_INVITE_FAILURE: v,
  LOGOUT: T
})
/** Chunk was on web.js **/
/** chunk id: 233317, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk166403 = require("./166403.js"),
  Chunk677185 = require("./677185.js"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js");

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

function h() {
  d.membershipData.isFetching = true
}

function m(e) {
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

function y() {
  return !d.membershipData.isFetching && (a.h.wait(() => (0, o.JV)().catch(c.FXj)), true)
}

function b() {
  d.membersData.isUpdating = true
}

function O(e) {
  let {
    subscriptionId: t
  } = e;
  a.h.wait(() => (0, o.mm)(t).catch(c.FXj)), d.membersData.isUpdating = false
}

function v(e) {
  let {
    errorCode: t,
    subscriptionId: n
  } = e;
  if (t === l.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED) return a.h.wait(() => (0, o.mm)(n).catch(c.FXj)), d.membersData.isUpdating = false, true;
  A()
}

function A() {
  d.membersData.isUpdating = false
}

function I(e) {
  let {
    subscriptionId: t
  } = e;
  return !d.membersData.isFetching && (a.h.wait(() => (0, o.mm)(t).catch(c.FXj)), true)
}

function S() {
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
class T extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(s.A)
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
  getNumUsedSeats() {
    return null == d.membersData.data ? 0 : d.membersData.data.members.length
  }
  getNumAvailableInvites() {
    if (null == d.membersData.data) return l.LM;
    let e = d.membersData.data.members.length + d.membersData.data.invitedUsers.length;
    return Math.max(0, l.LM - e)
  }
  getNumTotalSeats() {
    return l.LM
  }
}
u(T, "displayName", "PremiumGroupStore");
let C = new T(Chunk73153.h, {
  PREMIUM_GROUP_MEMBERS_REQUEST: I,
  PREMIUM_GROUP_MEMBERS_FETCH_START: f,
  PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: p,
  PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: _,
  PREMIUM_GROUP_MEMBERSHIP_REQUEST: y,
  PREMIUM_GROUP_MEMBERSHIP_FETCH_START: h,
  PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: m,
  PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: g,
  PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: E,
  PREMIUM_GROUP_INVITE_USERS_START: b,
  PREMIUM_GROUP_INVITE_USERS_SUCCESS: O,
  PREMIUM_GROUP_INVITE_USERS_FAILURE: A,
  PREMIUM_GROUP_REMOVE_MEMBER_START: b,
  PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: O,
  PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: A,
  PREMIUM_GROUP_REMOVE_INVITE_START: b,
  PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: O,
  PREMIUM_GROUP_REMOVE_INVITE_FAILURE: v,
  LOGOUT: S
})
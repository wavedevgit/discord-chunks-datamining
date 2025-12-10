/** Chunk was on web.js **/
/** chunk id: 643281, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk78839 = require("./78839.js"),
  Chunk80721 = require("./80721.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = {
  membersData: {
    data: null,
    isFetching: false
  },
  membershipData: {
    data: null,
    isFetching: false,
    hasFetched: false
  }
};

function d() {
  u.membersData.isFetching = true
}

function f(e) {
  let {
    members: t
  } = e;
  u.membersData.data = t, u.membersData.isFetching = false
}

function p() {
  u.membersData.isFetching = false
}

function _() {
  u.membershipData.isFetching = true
}

function m(e) {
  let {
    membership: t
  } = e;
  u.membershipData.data = t, u.membershipData.isFetching = false, u.membershipData.hasFetched = true
}

function h() {
  u.membershipData.isFetching = false, u.membershipData.hasFetched = true
}

function g() {
  u.membershipData.isFetching = false, u.membershipData.hasFetched = true
}

function E() {
  return !u.membershipData.isFetching && !u.membershipData.hasFetched && (Chunk570140.Z.wait(() => (0, Chunk80721.WH)().catch(Chunk981631.VqG)), true)
}

function b() {
  var e, t, n;
  let r = null == (e = Chunk78839.Z.getPremiumGroupSubscription()) ? true : module.id;
  return null != r ? r : null != (n = null == (t = u.membershipData.data) ? true : exports.subscriptionId) ? require : null
}

function y(e) {
  let {
    subscriptionId: t
  } = e;
  return null != t && !u.membersData.isFetching && (a.Z.wait(() => (0, s.i1)(t).catch(l.VqG)), true)
}

function O() {
  u = {
    membersData: {
      data: null,
      isFetching: false
    },
    membershipData: {
      data: null,
      isFetching: false,
      hasFetched: false
    }
  }
}
class v extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk78839.Z)
  }
  getMembers() {
    return u.membersData.data
  }
  isFetchingMembers() {
    return u.membersData.isFetching
  }
  hasFetchedMembers() {
    return null !== u.membersData.data
  }
  getMembership() {
    return u.membershipData.data
  }
  isFetchingMembership() {
    return u.membershipData.isFetching
  }
  hasFetchedMembership() {
    return u.membershipData.hasFetched
  }
  getPremiumGroupSubscriptionId() {
    return b()
  }
}
c(v, "displayName", "PremiumGroupStore");
let S = new v(Chunk570140.Z, {
  PREMIUM_GROUP_MEMBERS_REQUEST: y,
  PREMIUM_GROUP_MEMBERS_FETCH_START: d,
  PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: f,
  PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: p,
  PREMIUM_GROUP_MEMBERSHIP_REQUEST: E,
  PREMIUM_GROUP_MEMBERSHIP_FETCH_START: _,
  PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: m,
  PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: h,
  PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: g,
  LOGOUT: O
})
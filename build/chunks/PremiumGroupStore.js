/** Chunk was on 6593 **/
/** chunk id: 233317, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var a, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk166403 = require("./166403.js"),
  Chunk677185 = require("./677185.js"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js");
let u = {
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

function h() {
  u.membersData.isUpdating = true
}

function R(e) {
  let {
    subscriptionId: t
  } = e;
  n.h.wait(() => (0, c.mm)(t).catch(l.FXj)), u.membersData.isUpdating = false
}

function m() {
  u.membersData.isUpdating = false
}
class M extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(_.A)
  }
  getMembers() {
    return u.membersData.data
  }
  isFetchingMembers() {
    return u.membersData.isFetching
  }
  isUpdatingMembers() {
    return u.membersData.isUpdating
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
    return null !== u.membershipData.data
  }
  getNumUsedSeats() {
    return null == u.membersData.data ? 0 : u.membersData.data.members.length
  }
  getNumAvailableInvites() {
    if (null == u.membersData.data) return E.LM;
    let e = u.membersData.data.members.length + u.membersData.data.invitedUsers.length;
    return Math.max(0, E.LM - e)
  }
  getNumTotalSeats() {
    return E.LM
  }
}(a = "displayName") in M ? Object.defineProperty(M, a, {
  value: "PremiumGroupStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : M[a] = "PremiumGroupStore";
let d = new M(Chunk73153.h, {
  PREMIUM_GROUP_MEMBERS_REQUEST: function(e) {
    let {
      subscriptionId: t
    } = e;
    return !u.membersData.isFetching && (n.h.wait(() => (0, c.mm)(t).catch(l.FXj)), true)
  },
  PREMIUM_GROUP_MEMBERS_FETCH_START: function() {
    u.membersData.isFetching = true
  },
  PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: function(e) {
    let {
      members: t
    } = e;
    u.membersData.data = t, u.membersData.isFetching = false
  },
  PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: function() {
    u.membersData.isFetching = false
  },
  PREMIUM_GROUP_MEMBERSHIP_REQUEST: function() {
    return !u.membershipData.isFetching && (n.h.wait(() => (0, c.JV)().catch(l.FXj)), true)
  },
  PREMIUM_GROUP_MEMBERSHIP_FETCH_START: function() {
    u.membershipData.isFetching = true
  },
  PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: function(e) {
    let {
      membership: t
    } = e;
    u.membershipData.data = t, u.membershipData.isFetching = false, u.membershipData.hasFetched = true
  },
  PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: function() {
    u.membershipData.isFetching = false, u.membershipData.hasFetched = true
  },
  PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: function() {
    u.membershipData.isFetching = false, u.membershipData.hasFetched = true
  },
  PREMIUM_GROUP_INVITE_USERS_START: h,
  PREMIUM_GROUP_INVITE_USERS_SUCCESS: R,
  PREMIUM_GROUP_INVITE_USERS_FAILURE: m,
  PREMIUM_GROUP_REMOVE_MEMBER_START: h,
  PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: R,
  PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: m,
  PREMIUM_GROUP_REMOVE_INVITE_START: h,
  PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: R,
  PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function(e) {
    let {
      errorCode: t,
      subscriptionId: r
    } = e;
    if (t === E.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED) return n.h.wait(() => (0, c.mm)(r).catch(l.FXj)), u.membersData.isUpdating = false, true;
    m()
  },
  LOGOUT: function() {
    u = {
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
})
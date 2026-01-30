/** Chunk was on 78376 **/
/** chunk id: 233317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var r, i, Chunk311907 = require("./311907.js"),
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

function _() {
  u.membersData.isUpdating = true
}

function p(e) {
  let {
    subscriptionId: t
  } = e;
  s.h.wait(() => (0, o.mm)(t).catch(d.FXj)), u.membersData.isUpdating = false
}

function m() {
  u.membersData.isUpdating = false
}
class g extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(a.A)
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
    if (null == u.membersData.data) return c.LM;
    let e = u.membersData.data.members.length + u.membersData.data.invitedUsers.length;
    return Math.max(0, c.LM - e)
  }
  getNumTotalSeats() {
    return c.LM
  }
}(r = "displayName") in g ? Object.defineProperty(g, r, {
  value: "PremiumGroupStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : g[r] = "PremiumGroupStore";
let A = new g(Chunk73153.h, {
  PREMIUM_GROUP_MEMBERS_REQUEST: function(e) {
    let {
      subscriptionId: t
    } = e;
    return !u.membersData.isFetching && (s.h.wait(() => (0, o.mm)(t).catch(d.FXj)), true)
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
    return !u.membershipData.isFetching && (s.h.wait(() => (0, o.JV)().catch(d.FXj)), true)
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
  PREMIUM_GROUP_INVITE_USERS_START: _,
  PREMIUM_GROUP_INVITE_USERS_SUCCESS: p,
  PREMIUM_GROUP_INVITE_USERS_FAILURE: m,
  PREMIUM_GROUP_REMOVE_MEMBER_START: _,
  PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: p,
  PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: m,
  PREMIUM_GROUP_REMOVE_INVITE_START: _,
  PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: p,
  PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function(e) {
    let {
      errorCode: t,
      subscriptionId: n
    } = e;
    if (t === c.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED) return s.h.wait(() => (0, o.mm)(n).catch(d.FXj)), u.membersData.isUpdating = false, true;
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
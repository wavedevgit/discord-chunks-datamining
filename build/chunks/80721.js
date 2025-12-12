/** Chunk was on web.js **/
/** chunk id: 80721, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jn: () => _,
  MT: () => f,
  WH: () => d,
  cD: () => p,
  hH: () => E,
  i1: () => m,
  if: () => g,
  r7: () => h
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk598077 = require("./598077.js"),
  Chunk504518 = require("./504518.js"),
  Chunk981631 = require("./981631.js");
let u = 10;
async function d() {
  Chunk570140.Z.dispatch({
    type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_START"
  });
  try {
    let e = (await Chunk544891.tn.get({
      url: Chunk981631.ANM.PREMIUM_GROUP_MEMBERSHIP,
      rejectWithError: true
    })).body;
    return null != module ? Chunk570140.Z.dispatch({
      type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS",
      membership: {
        subscriptionId: module.subscription_id,
        memberType: module.member_type
      }
    }) : Chunk570140.Z.dispatch({
      type: "PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND"
    }), module
  } catch (e) {
    return Chunk570140.Z.dispatch({
      type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE"
    }), null
  }
}
async function f(e, t, n, r) {
  let {
    users: i,
    next_index: a
  } = (await o.tn.get({
    url: c.ANM.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(e),
    query: {
      index: t,
      limit: null != r ? r : u,
      search_query: n
    },
    rejectWithError: true
  })).body;
  return {
    users: i.map(e => new s.Z(e)),
    nextIndex: a
  }
}
async function p(e, t) {
  a.Z.dispatch({
    type: "PREMIUM_GROUP_INVITE_USERS_START"
  });
  try {
    let n = await o.tn.post({
      url: c.ANM.BILLING_SUBSCRIPTION_INVITES(e),
      body: {
        user_ids: t
      },
      rejectWithError: true
    });
    return a.Z.dispatch({
      type: "PREMIUM_GROUP_INVITE_USERS_SUCCESS",
      subscriptionId: e
    }), {
      invitedUsers: n.body.invited_users,
      ineligibleUsers: n.body.ineligible_users
    }
  } catch (e) {
    return a.Z.dispatch({
      type: "PREMIUM_GROUP_INVITE_USERS_FAILURE"
    }), null
  }
}
async function _(e, t) {
  a.Z.dispatch({
    type: "PREMIUM_GROUP_REMOVE_MEMBER_START"
  });
  try {
    let n = await o.tn.del({
      url: c.ANM.BILLING_SUBSCRIPTION_REMOVE_USER(e, t),
      rejectWithError: true
    });
    return a.Z.dispatch({
      type: "PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS",
      subscriptionId: e
    }), n
  } catch (e) {
    return a.Z.dispatch({
      type: "PREMIUM_GROUP_REMOVE_MEMBER_FAILURE"
    }), null
  }
}
async function m(e) {
  a.Z.dispatch({
    type: "PREMIUM_GROUP_MEMBERS_FETCH_START"
  });
  try {
    let t = (await o.tn.get({
        url: c.ANM.BILLING_SUBSCRIPTION_MEMBERS(e),
        rejectWithError: true
      })).body.map(l.Z.createFromServer),
      n = t.find(e => e.isPrimary());
    return i()(null != n, "Primary member not found in premium group"), a.Z.dispatch({
      type: "PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS",
      members: {
        primary: n.user,
        members: t.filter(e => e.isMember()).map(e => e.user),
        invitedUsers: t.filter(e => e.isInvited()).map(e => e.user)
      }
    }), t
  } catch (e) {
    return a.Z.dispatch({
      type: "PREMIUM_GROUP_MEMBERS_FETCH_FAILURE"
    }), []
  }
}
async function h(e, t) {
  await o.tn.patch({
    url: c.ANM.BILLING_SUBSCRIPTION_INVITE(e, t),
    rejectWithError: true
  })
}
async function g(e, t) {
  a.Z.dispatch({
    type: "PREMIUM_GROUP_REMOVE_INVITE_START"
  });
  try {
    let n = await o.tn.del({
      url: c.ANM.BILLING_SUBSCRIPTION_INVITE(e, t),
      rejectWithError: true
    });
    return a.Z.dispatch({
      type: "PREMIUM_GROUP_REMOVE_INVITE_SUCCESS",
      subscriptionId: e
    }), n
  } catch (e) {
    return a.Z.dispatch({
      type: "PREMIUM_GROUP_REMOVE_INVITE_FAILURE"
    }), null
  }
}
async function E(e) {
  a.Z.dispatch({
    type: "PREMIUM_GROUP_INVITE_FETCH_START",
    inviteId: e
  });
  try {
    let t = (await o.tn.get({
      url: c.ANM.PREMIUM_GROUP_INVITE(e),
      rejectWithError: true
    })).body;
    a.Z.dispatch({
      type: "PREMIUM_GROUP_INVITE_FETCH_SUCCESS",
      inviteId: e,
      invite: t
    })
  } catch (n) {
    var t;
    a.Z.dispatch({
      type: "PREMIUM_GROUP_INVITE_FETCH_FAIL",
      inviteId: e,
      status: null != (t = null == n ? true : n.status) ? t : 0
    })
  }
}
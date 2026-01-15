/** Chunk was on web.js **/
/** chunk id: 232567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $k: () => b,
  In: () => y,
  Lr: () => m,
  PR: () => E,
  Sr: () => O,
  k: () => h,
  mB: () => g
}), require("./997841.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk525769 = require("./525769.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk710845 = require("./710845.js"),
  Chunk598077 = require("./598077.js"),
  Chunk594174 = require("./594174.js"),
  Chunk573261 = require("./573261.js"),
  Chunk981631 = require("./981631.js");
let _ = new Chunk710845.Z("UserProfileModalActionCreators");

function h() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      withAnalyticsToken: t = false
    } = e;
  return o.tn.get({
    url: p.ANM.ME,
    query: {
      with_analytics_token: t
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => (s.Z.dispatch({
    type: "CURRENT_USER_UPDATE",
    user: e.body,
    analyticsToken: t ? e.body.analytics_token : true
  }), new u.Z(e.body)))
}

function m() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return f.Z.patch({
    url: p.ANM.USER_AGREEMENTS,
    trackedActionData: {
      event: a.a.USER_ACCEPT_AGREEMENTS
    },
    body: {
      terms: e,
      privacy: t
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(() => true, () => false)
}

function g(e, t) {
  let n = d.default.getCurrentUser();
  i()(null != n, "setFlag: user cannot be undefined");
  let r = t ? n.flags | e : n.flags & ~e;
  return o.tn.patch({
    url: p.ANM.ME,
    oldFormErrors: true,
    body: {
      flags: r
    },
    rejectWithError: false
  })
}

function E(e) {
  let t = d.default.getUser(e);
  return null != t ? Promise.resolve(t) : o.tn.get({
    url: p.ANM.USER(e),
    oldFormErrors: true,
    rejectWithError: false
  }).then(t => (s.Z.dispatch({
    type: "USER_UPDATE",
    user: t.body
  }), d.default.getUser(e)))
}

function b(e) {
  return s.Z.dispatch({
    type: "USER_UPDATE",
    user: e
  }), d.default.getUser(e.id)
}
async function y(e) {
  let {
    type: t,
    withMutualGuilds: n,
    withMutualFriendsCount: r,
    withMutualFriends: i,
    guildId: a,
    connectionsRoleId: c,
    joinRequestId: u,
    abortSignal: d
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, f = arguments.length > 2 ? arguments[2] : true, h = Date.now();
  s.Z.dispatch({
    type: "USER_PROFILE_FETCH_START",
    userId: e,
    guildId: a,
    withMutualFriends: i
  });
  try {
    let l = await o.tn.get({
      url: p.ANM.USER_PROFILE(e),
      query: {
        type: t,
        with_mutual_guilds: n,
        with_mutual_friends: i,
        with_mutual_friends_count: r && (null == i || !i),
        guild_id: a,
        connections_role_id: c,
        join_request_id: u
      },
      signal: d,
      rejectWithError: true
    });
    null == f || f(l.body, a), s.Z.dispatch({
      type: "USER_UPDATE",
      user: l.body.user
    }), s.Z.dispatch({
      type: "USER_PROFILE_FETCH_SUCCESS",
      userProfile: l.body,
      fetchStartedAt: h
    }), null != a && null != l.body.guild_member && s.Z.dispatch({
      type: "GUILD_MEMBER_PROFILE_UPDATE",
      guildId: a,
      guildMember: l.body.guild_member
    })
  } catch (t) {
    throw null != t && (null == t ? true : t.body) != null && _.warn("fetchProfile error: ".concat(t.body.code, " - ").concat(t.body.message)), s.Z.dispatch({
      type: "USER_PROFILE_FETCH_FAILURE",
      apiError: new l.Hx(t),
      fetchStartedAt: h,
      userId: e,
      guildId: a
    }), t
  }
}
async function O(e, t) {
  s.Z.dispatch({
    type: "MUTUAL_FRIENDS_FETCH_START",
    userId: e
  });
  try {
    let n = await o.tn.get({
      url: p.ANM.USER_RELATIONSHIPS(e),
      oldFormErrors: true,
      signal: t,
      rejectWithError: false
    });
    s.Z.dispatch({
      type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
      userId: e,
      mutualFriends: n.body
    })
  } catch (t) {
    throw (null == t ? true : t.body) != null && _.warn("fetchMutualFriends error: ".concat(t.body.code, " - ").concat(t.body.message)), s.Z.dispatch({
      type: "MUTUAL_FRIENDS_FETCH_FAILURE",
      userId: e
    }), t
  }
}
/** Chunk was on web.js **/
/** chunk id: 803306, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q9: () => m,
  eO: () => b,
  lA: () => g,
  nj: () => y,
  q0: () => O,
  rQ: () => h,
  wz: () => E
}), require("./938796.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk239947 = require("./239947.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk626584 = require("./626584.js"),
  Chunk427157 = require("./427157.js"),
  Chunk287809 = require("./287809.js"),
  Chunk499785 = require("./499785.js"),
  Chunk652215 = require("./652215.js");
let _ = new Chunk626584.A("UserProfileModalActionCreators");

function h() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      withAnalyticsToken: t = false
    } = e;
  return o.Bo.get({
    url: p.Rsh.ME,
    query: {
      with_analytics_token: t
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => (s.h.dispatch({
    type: "CURRENT_USER_UPDATE",
    user: e.body,
    analyticsToken: t ? e.body.analytics_token : true
  }), new u.A(e.body)))
}

function m() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return f.A.patch({
    url: p.Rsh.USER_AGREEMENTS,
    trackedActionData: {
      event: a.D.USER_ACCEPT_AGREEMENTS
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
  return o.Bo.patch({
    url: p.Rsh.ME,
    oldFormErrors: true,
    body: {
      flags: r
    },
    rejectWithError: false
  })
}

function E(e) {
  let t = d.default.getUser(e);
  return null != t ? Promise.resolve(t) : o.Bo.get({
    url: p.Rsh.USER(e),
    oldFormErrors: true,
    rejectWithError: false
  }).then(t => (s.h.dispatch({
    type: "USER_UPDATE",
    user: t.body
  }), d.default.getUser(e)))
}

function y(e) {
  return s.h.dispatch({
    type: "USER_UPDATE",
    user: e
  }), d.default.getUser(e.id)
}
async function b(e) {
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
  s.h.dispatch({
    type: "USER_PROFILE_FETCH_START",
    userId: e,
    guildId: a,
    withMutualFriends: i
  });
  try {
    let l = await o.Bo.get({
      url: p.Rsh.USER_PROFILE(e),
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
    null == f || f(l.body, a), s.h.dispatch({
      type: "USER_UPDATE",
      user: l.body.user
    }), s.h.dispatch({
      type: "USER_PROFILE_FETCH_SUCCESS",
      userProfile: l.body,
      fetchStartedAt: h
    }), null != a && null != l.body.guild_member && s.h.dispatch({
      type: "GUILD_MEMBER_PROFILE_UPDATE",
      guildId: a,
      guildMember: l.body.guild_member
    })
  } catch (t) {
    throw null != t && (null == t ? true : t.body) != null && _.warn("fetchProfile error: ".concat(t.body.code, " - ").concat(t.body.message)), s.h.dispatch({
      type: "USER_PROFILE_FETCH_FAILURE",
      apiError: new l.LG(t),
      fetchStartedAt: h,
      userId: e,
      guildId: a
    }), t
  }
}
async function O(e, t) {
  s.h.dispatch({
    type: "MUTUAL_FRIENDS_FETCH_START",
    userId: e
  });
  try {
    let n = await o.Bo.get({
      url: p.Rsh.USER_RELATIONSHIPS(e),
      oldFormErrors: true,
      signal: t,
      rejectWithError: false
    });
    s.h.dispatch({
      type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
      userId: e,
      mutualFriends: n.body
    })
  } catch (t) {
    throw (null == t ? true : t.body) != null && _.warn("fetchMutualFriends error: ".concat(t.body.code, " - ").concat(t.body.message)), s.h.dispatch({
      type: "MUTUAL_FRIENDS_FETCH_FAILURE",
      userId: e
    }), t
  }
}
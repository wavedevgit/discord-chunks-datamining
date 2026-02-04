/** Chunk was on 7685 **/
/** chunk id: 185657, original params: e,t,n (module,exports,require) **/
let l;
require.d(exports, {
  A: () => G,
  j: () => b
}), require("./321073.js"), require("./896048.js");
var r, i, s, Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk870391 = require("./870391.js"),
  Chunk21119 = require("./21119.js"),
  Chunk734057 = require("./734057.js"),
  Chunk290863 = require("./290863.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk461213 = require("./461213.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk562153 = require("./562153.js"),
  Chunk914853 = require("./914853.js"),
  Chunk956753 = require("./956753.js"),
  Chunk406595 = require("./406595.js"),
  Chunk652215 = require("./652215.js"),
  b = ((i = {}).FRIEND_REQUESTS = "FRIEND_REQUESTS", i.SUGGESTIONS = "SUGGESTIONS", i.SAME_ACTIVITY = "SAME_ACTIVITY", i.ACTIVITIES = "ACTIVITIES", i.IN_GAME = "IN_GAME", i.ONLINE = "ONLINE", i.OFFLINE = "OFFLINE", i);
let N = new Chunk713402.J(function(e) {
  if ("FRIEND_REQUEST" === e.category) return ["FRIEND_REQUESTS"];
  if ("SUGGESTION" === e.category) return ["SUGGESTIONS"];
  let t = [];
  for (let n of (null != e.activityCategory && t.push(e.activityCategory), e.groupIds)) t.push("GROUP:".concat(n));
  return t
}, function(e) {
  return e.sortKey
});

function T(e, t) {
  return String(Math.floor(Math.max(0, Math.min(e, Number("9".repeat(t)))))).padStart(t, "0")
}

function _(e) {
  return T(1e6 - Math.max(0, Math.min(1e6, Math.round(1e6 * e))), 7)
}
let C = new Map;

function x() {
  let e = new Map;
  for (let t of c.A.getGroups())
    for (let n of t.userIds) {
      let l = e.get(n);
      null == l && (l = [], e.set(n, l)), l.push(t.id)
    }
  C = e
}

function D() {
  let e = I.A.getPrimaryActivity();
  l = null == e ? true : e.application_id
}

function M(e) {
  return e.type === O.$pd.PLAYING || e.type === O.$pd.COMPETING || e.type === O.$pd.WATCHING || e.type === O.$pd.STREAMING
}

function j(e) {
  return (e.type === O.$pd.PLAYING || e.type === O.$pd.COMPETING) && null != e.application_id
}

function w(e) {
  let t = function(e) {
    var t, n;
    let r = m.default.getUser(e);
    if (null == r) return null;
    let i = f.A.getRelationshipType(e),
      s = i === O.eA$.PENDING_INCOMING || i === O.eA$.PENDING_OUTGOING,
      a = f.A.isFriend(e),
      o = g.A.getActivities(e),
      u = f.A.getNickname(e),
      c = null != (t = null == (n = d.A.getUserAffinity(e)) ? true : n.communicationProbability) ? t : 0;
    return s ? function(e) {
      var t, n;
      let {
        userId: l,
        user: r,
        activities: i,
        nickname: s,
        relationshipType: a
      } = e, o = f.A.getSince(l), u = null != o ? new Date(o).getTime() : 0;
      return {
        id: l,
        userId: l,
        user: r,
        activities: i,
        nickname: s,
        relationshipType: a,
        category: "FRIEND_REQUEST",
        activityCategory: null,
        groupIds: [],
        sortKey: (t = Number.isFinite(u) ? u : 0, n = l, "REQ\0".concat(T(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(t))), 13), "\0").concat(n))
      }
    }({
      userId: e,
      user: r,
      activities: o,
      nickname: u,
      relationshipType: i
    }) : a ? function(e) {
      var t, n, r;
      let i, s, a, o, u, c, d, f, m, {
          userId: S,
          user: b,
          activities: N,
          nickname: T,
          affinity: x
        } = e,
        {
          category: D,
          displayActivities: w
        } = (i = I.A.getPrimaryActivity(), s = l, a = (null == i ? true : i.name) != null && null != s, o = g.A.getStatus(S), c = (null == (u = E.A.getVoiceStateForUser(S)) ? true : u.channelId) != null, f = (d = N.filter(M)).filter(j), m = d.filter(e => e.application_id === s), a && m.length > 0 ? {
          category: "SAME_ACTIVITY",
          displayActivities: m
        } : f.length > 0 ? {
          category: "IN_GAME",
          displayActivities: f
        } : c ? {
          category: "ACTIVITIES",
          displayActivities: N
        } : o === O.clD.ONLINE || o === O.clD.IDLE || o === O.clD.DND ? {
          category: "ONLINE",
          displayActivities: d
        } : {
          category: "OFFLINE",
          displayActivities: d
        }),
        P = null != (t = C.get(S)) ? t : [],
        [R] = v.A.isFavorite(y.x.FRIENDS, S),
        U = null != (n = p.A.getVoiceChannelId()) ? n : p.A.getChannelId(),
        G = null != U ? null == (r = h.A.getChannel(U)) ? true : r.guild_id : null,
        L = g.A.getStatus(S),
        k = L === O.clD.ONLINE,
        F = w.some(M),
        V = L === O.clD.DND || L === O.clD.IDLE,
        H = A.Ay.getName(G, U, b);
      return {
        id: S,
        userId: S,
        user: b,
        activities: w,
        nickname: T,
        category: "FRIEND",
        activityCategory: R ? null : D,
        groupIds: P,
        sortKey: function(e) {
          let {
            isOnline: t,
            hasDisplayableActivity: n,
            isDndOrIdle: l,
            affinity: r,
            displayName: i,
            userId: s
          } = e;
          return "FRD\0".concat(t ? "0" : "1", "\0").concat(n ? "0" : "1", "\0").concat(l ? "0" : "1", "\0").concat(_(r), "\0").concat(i.toLowerCase(), "\0").concat(s)
        }({
          isOnline: k,
          hasDisplayableActivity: F,
          isDndOrIdle: V,
          affinity: x,
          displayName: H,
          userId: S
        })
      }
    }({
      userId: e,
      user: r,
      activities: o,
      nickname: u,
      affinity: c
    }) : function(e) {
      var t;
      let {
        userId: n,
        user: l,
        activities: r,
        nickname: i,
        affinity: s
      } = e;
      if (!(s > .1634)) return null;
      let a = E.A.getVoiceStateForUser(n),
        o = null == a ? true : a.channelId,
        u = null != o ? null == (t = h.A.getChannel(o)) ? true : t.guild_id : null,
        c = r.length > 0 || null != o,
        d = A.Ay.getName(u, o, l);
      return {
        id: n,
        userId: n,
        user: l,
        activities: r,
        nickname: i,
        category: "SUGGESTION",
        activityCategory: null,
        groupIds: [],
        sortKey: "SUG\0".concat(c ? "0" : "1", "\0").concat(_(s), "\0").concat(d.toLowerCase(), "\0").concat(n)
      }
    }({
      userId: e,
      user: r,
      activities: o,
      nickname: u,
      affinity: c
    })
  }(e);
  return null == t ? N.delete(e) : N.set(e, t)
}

function P() {
  N.clear(), x(), D();
  let e = false;
  for (let [t, n] of f.A.getMutableRelationships().entries())(n === O.eA$.PENDING_INCOMING || n === O.eA$.PENDING_OUTGOING) && (e = w(t) || e);
  for (let t of d.A.getUserAffinitiesMap().keys()) f.A.isFriend(t) || (e = w(t) || e);
  for (let t of f.A.getFriendIDs()) e = w(t) || e;
  return e
}
class R extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(h.A, c.A, v.A, g.A, f.A, p.A, I.A, d.A, m.default, E.A), P()
  }
  getRows(e) {
    return [N.values(e), N.version]
  }
  getFriend(e) {
    return N.get(e)
  }
}(s = "displayName") in R ? Object.defineProperty(R, s, {
  value: "FriendsWidgetFriendsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : R[s] = "FriendsWidgetFriendsStore";
let U = e => (0, S.v$)(e, "FriendsWidgetFriendsStore"),
  G = new R(Chunk73153.h, __OVERLAY__ ? {} : {
    POST_CONNECTION_OPEN: U(P),
    OVERLAY_INITIALIZE: U(P),
    CACHE_LOADED: U(P),
    CACHE_LOADED_LAZY: U(P),
    FRIENDS_LIST_POPOUT_MOUNTED: U(P),
    OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: U(function(e) {
      return e.tab === y.x.FRIENDS && w(e.targetId)
    }),
    PRESENCE_UPDATES: U(function(e) {
      let t = false;
      for (let l of e.updates) {
        var n;
        let e = null == (n = l.user) ? true : n.id;
        null != e && (t = w(e) || t)
      }
      return t
    }),
    PRESENCES_REPLACE: U(function(e) {
      let t = false;
      for (let l of e.presences) {
        var n;
        let e = null == (n = l.user) ? true : n.id;
        null != e && (t = w(e) || t)
      }
      return t
    }),
    ACTIVITY_METADATA_UPDATE: U(function(e) {
      return w(e.userId)
    }),
    VOICE_STATE_UPDATES: U(function(e) {
      let t = false;
      for (let n of e.voiceStates) t = w(n.userId) || t;
      return t
    }),
    VOICE_CHANNEL_SELECT: U(function(e) {
      D();
      let t = false;
      for (let e of f.A.getFriendIDs()) t = w(e) || t;
      return t
    }),
    RELATIONSHIP_ADD: U(function(e) {
      return w(e.relationship.id)
    }),
    RELATIONSHIP_REMOVE: U(function(e) {
      return w(e.relationship.id)
    }),
    RELATIONSHIP_UPDATE: U(function(e) {
      return w(e.relationship.id)
    }),
    RELATIONSHIP_PENDING_INCOMING_REMOVED: U(function(e) {
      let t = false;
      for (let e of N.values("FRIEND_REQUESTS", true)) e.relationshipType === O.eA$.PENDING_INCOMING && (t = w(e.userId) || t);
      return t
    }),
    CREATE_FRIEND_GROUP: U(function(e) {
      return x(), false
    }),
    DELETE_FRIEND_GROUP: U(function(e) {
      x();
      let t = false;
      for (let e of f.A.getFriendIDs()) t = w(e) || t;
      return t
    }),
    ADD_USERS_TO_GROUP: U(function(e) {
      x();
      let t = false;
      for (let n of e.userIds) t = w(n) || t;
      return t
    }),
    REMOVE_USERS_FROM_GROUP: U(function(e) {
      x();
      let t = false;
      for (let n of e.userIds) t = w(n) || t;
      return t
    }),
    LOAD_USER_AFFINITIES_V2_SUCCESS: U(function(e) {
      let t = false;
      for (let e of d.A.getUserAffinitiesMap().keys()) t = w(e) || t;
      return t
    }),
    USER_UPDATE: U(function(e) {
      return w(e.user.id)
    }),
    CURRENT_USER_UPDATE: U(function(e) {
      D();
      let t = false;
      for (let e of f.A.getFriendIDs()) t = w(e) || t;
      return t
    }),
    LOGOUT: U(function() {
      let e = N.size() > 0;
      return N.clear(), l = true, C = new Map, e
    })
  })
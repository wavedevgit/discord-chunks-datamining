/** Chunk was on web.js **/
/** chunk id: 893966, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => J
}), require("./388685.js"), require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk752560 = require("./752560.js"),
  Chunk588215 = require("./588215.js"),
  Chunk44715 = require("./44715.js"),
  Chunk327999 = require("./327999.js"),
  Chunk981631 = require("./981631.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = false,
  b = {};

function y(e) {
  return null == b[e] && (b[e] = new f.P(e)), b[e]
}

function O(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  y(e).reset(t)
}

function v() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  for (let t in b) O(exports, module)
}

function I(e) {
  let {
    guild: t
  } = e, n = y(t.id);
  O(t.id, n.isInitialized)
}

function T(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  O(t)
}

function S() {
  returnfalse
}

function A(e) {
  let {
    guildId: t,
    userIds: n
  } = e;
  return y(t).updateMembersByMemberIds(n)
}

function C(e) {
  let {
    chunks: t
  } = e, n = false;
  for (let e of t) n = y(e.guildId).updateServerMembers(e.members) || n;
  return n
}

function N(e) {
  let {
    guildId: t
  } = e, n = o.default.getId();
  return y(t).updateMembersByMemberIds([n])
}

function R(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return y(t).removeMember(n.id)
}

function P(e) {
  let t = false,
    n = y(e.guildId);
  return "GUILD_ROLE_DELETE" === e.type && (t = n.removeRoleFromSearchState(e.roleId)), n.rebuildAllMembers() || t
}

function D(e) {
  let {
    guildId: t,
    userId: n
  } = e;
  return y(t).updateMembersByMemberIds([n])
}

function w(e) {
  let {
    guildId: t,
    members: n
  } = e;
  if (null == n || 0 === n.length) returnfalse;
  let r = y(t),
    i = n.reduce((e, t) => {
      if (null != t.member) {
        let n = t.member.user.id;
        e.push(n)
      }
      return e
    }, []);
  return r.updateMembersByMemberIds(i)
}

function x(e) {
  let {
    guildId: t,
    addedMembers: n
  } = e;
  if (null == n || 0 === n.length) returnfalse;
  let r = y(t),
    i = n.reduce((e, t) => {
      let n = t.userId;
      return e.push(n), e
    }, []);
  return r.updateMembersByMemberIds(i)
}

function L(e) {
  let {
    guildId: t,
    members: n
  } = e;
  if (null == n || 0 === n.length) returnfalse;
  let r = y(t),
    i = n.reduce((e, t) => {
      let n = t.userId;
      return e.push(n), e
    }, []);
  return r.updateMembersByMemberIds(i)
}

function M(e) {
  let {
    guildId: t,
    threads: n
  } = e, r = Object.values(n);
  if (0 === r.length) returnfalse;
  let i = y(t),
    a = r.reduce((e, t) => {
      if (null != t.owner) {
        let n = t.owner.user.id;
        e.push(n)
      }
      return e
    }, []);
  return i.updateMembersByMemberIds(a)
}

function k(e) {
  let {
    guildId: t,
    guildMember: n
  } = e;
  return y(t).updateMembersByMemberIds([n.user.id])
}

function j(e) {
  let t = false;
  return e.guilds.forEach(e => {
    let {
      id: n,
      members: r
    } = e;
    t = y(n).updateServerMembers(r) || t
  }), t
}

function U(e) {
  let t = false;
  return e.guilds.forEach(e => {
    let {
      id: n,
      activity_instances: r
    } = e, i = y(n), a = [];
    null == r || r.forEach(e => {
      var t;
      null == (t = e.participants) || t.forEach(e => {
        (0, u.lm)(e.member) && a.push(e.member)
      })
    }), t = i.updateServerMembers(a) || t
  }), t
}

function G(e) {
  return E ? E = false : v(true), j(e)
}

function B(e) {
  return U(e)
}

function Z(e) {
  let {
    guildMembers: t
  } = e, n = false;
  return E = true, d.default.entries(t).forEach(e => {
    let [t, r] = e;
    n = y(t).updateClientMembers(Object.values(r)) || n
  }), n
}

function F(e) {
  let {
    guildId: t,
    members: n
  } = e;
  if (null == t || null == l.Z.getGuild(t)) returnfalse;
  E = true;
  let r = y(t),
    i = [];
  for (let e of n) null == r.getMember(e.userId) && i.push(e);
  return i.length > 0 && r.updateClientMembers(i)
}

function V(e) {
  let {
    members: t,
    guildId: n
  } = e;
  return t.length > 0 && y(n).updateServerMembers(t)
}

function H(e) {
  let {
    guildId: t
  } = e;
  return y(t).initialize()
}

function Y(e) {
  let {
    guildId: t
  } = e;
  return y(t).refreshNewMembersAndSearchResults()
}

function W(e) {
  let {
    guildId: t,
    pagination: n
  } = e, [r] = y(t).updatePaginationState(n);
  return r
}

function K(e) {
  let {
    guildId: t,
    continuationToken: n
  } = e;
  return y(t).updatePaginationToken(n)
}

function z(e) {
  let {
    guildId: t,
    searchState: n
  } = e;
  return y(t).updateSearchState(n)
}

function q(e) {
  let {
    guildId: t,
    memberSupplementals: n
  } = e, r = (0, p.Qu)(t, n);
  return r && y(t).updateMembersByMemberIds(n.map(e => e.userId)), r
}

function X(e) {
  var t, n, r, i, a, o;
  let s, l, {
      guildId: c,
      members: u,
      total_result_count: d
    } = e,
    f = y(c),
    {
      memberIds: g,
      memberSupplementals: E
    } = u.reduce((e, t) => {
      let {
        member: n,
        source_invite_code: r,
        join_source_type: i,
        join_source_application_id: a,
        join_source_channel_id: o,
        inviter_id: s
      } = t, l = n.user;
      return e.memberIds.push(l.id), e.memberSupplementals.push({
        userId: l.id,
        sourceInviteCode: r,
        joinSourceType: i,
        joinSourceApplicationId: a,
        joinSourceChannelId: o,
        inviterId: s
      }), e
    }, {
      memberIds: [],
      memberSupplementals: []
    }),
    b = (0, p.Qu)(c, E);
  (0, h.nf)(c, g);
  let O = f.updateSearchedMembersByMemberIds(g);
  u.length > 0 && (s = u[0], l = u[u.length - 1]);
  let [v] = f.updatePaginationState({
    totalResultsCount: d,
    elasticSearchCursor: {
      before: (0, _.si)({
        joinedAt: null == s || null == (t = s.member) ? true : t.joined_at,
        userId: null != (a = null == s || null == (n = s.member) ? true : n.user.id) ? a : m.lds
      }),
      after: (0, _.si)({
        joinedAt: null == l || null == (r = l.member) ? true : r.joined_at,
        userId: null != (o = null == l || null == (i = l.member) ? true : i.user.id) ? o : m.lds
      })
    }
  }, false);
  return b || O || v
}
class Q extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk271383.ZP, Chunk430824.Z, Chunk594174.default)
  }
  isInitialized(e) {
    return y(e).isInitialized
  }
  getMembersByGuildId(e, t) {
    return y(e).getMembersByIndex(t)
  }
  getMembersCountByGuildId(e, t) {
    return y(e).countMembersByIndex(t)
  }
  getEstimatedMemberSearchCountByGuildId(e) {
    let t = y(e),
      n = t.searchChunkSize,
      r = t.countMembersByIndex(t.getSearchIndex()),
      i = t.getTotalResultsCount();
    return null == i || i < n ? r : i
  }
  getKnownMemberSearchCountByGuildId(e) {
    let t = y(e);
    return t.countMembersByIndex(t.getSearchIndex())
  }
  getCurrentMemberSearchResultsByGuildId(e) {
    let t = y(e);
    return t.getMembersByIndex(t.getSearchIndex())
  }
  getSearchStateByGuildId(e) {
    return y(e).getSearchState()
  }
  hasDefaultSearchStateByGuildId(e) {
    return y(e).hasDefaultSearchState()
  }
  getPagedMembersByGuildId(e) {
    return y(e).getPaginatedMembers()
  }
  getPaginationStateByGuildId(e) {
    return y(e).getPaginationState()
  }
  getElasticSearchPaginationByGuildId(e) {
    return y(e).getElasticSearchPagination()
  }
  getEnhancedMember(e, t) {
    return y(e).getMember(t)
  }
  getNewMemberTimestamp(e) {
    return y(e).getNewMemberTimestamp()
  }
  getLastRefreshTimestamp(e) {
    return y(e).lastRefreshTimestamp
  }
  getLastCursorTimestamp(e) {
    return y(e).lastCursorTimestamp
  }
}
g(Q, "displayName", "MemberSafetyStore");
let J = new Q(Chunk570140.Z, {
  CONNECTION_OPEN: G,
  CONNECTION_OPEN_SUPPLEMENTAL: B,
  LOCAL_MESSAGES_LOADED: F,
  CACHE_LOADED: Z,
  PASSIVE_UPDATE_V2: V,
  GUILD_CREATE: I,
  GUILD_DELETE: T,
  GUILD_MEMBERS_CHUNK_BATCH: C,
  GUILD_MEMBER_ADD: S,
  GUILD_MEMBER_UPDATE: S,
  GUILD_MEMBER_UPDATE_LOCAL: N,
  GUILD_MEMBER_REMOVE: R,
  GUILD_ROLE_UPDATE: P,
  GUILD_ROLE_DELETE: P,
  GUILD_MEMBER_PROFILE_UPDATE: k,
  GUILD_ROLE_MEMBER_REMOVE: D,
  GUILD_ROLE_MEMBER_ADD: D,
  THREAD_MEMBER_LIST_UPDATE: w,
  THREAD_MEMBERS_UPDATE: x,
  LOAD_ARCHIVED_THREADS_SUCCESS: L,
  LOAD_FORUM_POSTS: M,
  INITIALIZE_MEMBER_SAFETY_STORE: H,
  MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: Y,
  MEMBER_SAFETY_PAGINATION_UPDATE: W,
  MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: K,
  MEMBER_SAFETY_SEARCH_STATE_UPDATE: z,
  FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: q,
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: X,
  MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: A
})
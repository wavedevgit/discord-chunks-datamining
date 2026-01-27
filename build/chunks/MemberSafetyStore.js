/** Chunk was on web.js **/
/** chunk id: 266047, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => J
}), require("./896048.js"), require("./321073.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk486005 = require("./486005.js"),
  Chunk70738 = require("./70738.js"),
  Chunk166233 = require("./166233.js"),
  Chunk11541 = require("./11541.js"),
  Chunk652215 = require("./652215.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = false,
  y = {};

function b(e) {
  return null == y[e] && (y[e] = new f.e(e)), y[e]
}

function O(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  b(e).reset(t)
}

function v() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  for (let t in y) O(t, e)
}

function A(e) {
  let {
    guild: t
  } = e, n = b(t.id);
  O(t.id, n.isInitialized)
}

function I(e) {
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

function T(e) {
  let {
    guildId: t,
    userIds: n
  } = e;
  return b(t).updateMembersByMemberIds(n)
}

function C(e) {
  let {
    chunks: t
  } = e, n = false;
  for (let e of t) n = b(e.guildId).updateServerMembers(e.members) || n;
  return n
}

function N(e) {
  let {
    guildId: t
  } = e, n = o.default.getId();
  return b(t).updateMembersByMemberIds([n])
}

function w(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return b(t).removeMember(n.id)
}

function R(e) {
  let t = false,
    n = b(e.guildId);
  return "GUILD_ROLE_DELETE" === e.type && (t = n.removeRoleFromSearchState(e.roleId)), n.rebuildAllMembers() || t
}

function P(e) {
  let {
    guildId: t,
    userId: n
  } = e;
  return b(t).updateMembersByMemberIds([n])
}

function D(e) {
  let {
    guildId: t,
    members: n
  } = e;
  if (null == n || 0 === n.length) returnfalse;
  let r = b(t),
    i = n.reduce((e, t) => {
      if (null != t.member) {
        let n = t.member.user.id;
        e.push(n)
      }
      return e
    }, []);
  return r.updateMembersByMemberIds(i)
}

function L(e) {
  let {
    guildId: t,
    addedMembers: n
  } = e;
  if (null == n || 0 === n.length) returnfalse;
  let r = b(t),
    i = n.reduce((e, t) => {
      let n = t.userId;
      return e.push(n), e
    }, []);
  return r.updateMembersByMemberIds(i)
}

function x(e) {
  let {
    guildId: t,
    members: n
  } = e;
  if (null == n || 0 === n.length) returnfalse;
  let r = b(t),
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
  let i = b(t),
    a = r.reduce((e, t) => {
      if (null != t.owner) {
        let n = t.owner.user.id;
        e.push(n)
      }
      return e
    }, []);
  return i.updateMembersByMemberIds(a)
}

function j(e) {
  let {
    guildId: t,
    guildMember: n
  } = e;
  return b(t).updateMembersByMemberIds([n.user.id])
}

function k(e) {
  let t = false;
  return e.guilds.forEach(e => {
    let {
      id: n,
      members: r
    } = e;
    t = b(n).updateServerMembers(r) || t
  }), t
}

function U(e) {
  let t = false;
  return e.guilds.forEach(e => {
    let {
      id: n,
      activity_instances: r
    } = e, i = b(n), a = [];
    null == r || r.forEach(e => {
      var t;
      null == (t = e.participants) || t.forEach(e => {
        (0, u.Vq)(e.member) && a.push(e.member)
      })
    }), t = i.updateServerMembers(a) || t
  }), t
}

function G(e) {
  return E ? E = false : v(true), k(e)
}

function F(e) {
  return U(e)
}

function V(e) {
  let {
    guildMembers: t
  } = e, n = false;
  return E = true, d.default.entries(t).forEach(e => {
    let [t, r] = e;
    n = b(t).updateClientMembers(Object.values(r)) || n
  }), n
}

function B(e) {
  let {
    guildId: t,
    members: n
  } = e;
  if (null == t || null == l.A.getGuild(t)) returnfalse;
  E = true;
  let r = b(t),
    i = [];
  for (let e of n) null == r.getMember(e.userId) && i.push(e);
  return i.length > 0 && r.updateClientMembers(i)
}

function H(e) {
  let {
    members: t,
    guildId: n
  } = e;
  return t.length > 0 && b(n).updateServerMembers(t)
}

function Y(e) {
  let {
    guildId: t
  } = e;
  return b(t).initialize()
}

function W(e) {
  let {
    guildId: t
  } = e;
  return b(t).refreshNewMembersAndSearchResults()
}

function K(e) {
  let {
    guildId: t,
    pagination: n
  } = e, [r] = b(t).updatePaginationState(n);
  return r
}

function z(e) {
  let {
    guildId: t,
    continuationToken: n
  } = e;
  return b(t).updatePaginationToken(n)
}

function q(e) {
  let {
    guildId: t,
    searchState: n
  } = e;
  return b(t).updateSearchState(n)
}

function Z(e) {
  let {
    guildId: t,
    memberSupplementals: n
  } = e, r = (0, _.Ob)(t, n);
  return r && b(t).updateMembersByMemberIds(n.map(e => e.userId)), r
}

function Q(e) {
  var t, n, r, i, a, o;
  let s, l, {
      guildId: c,
      members: u,
      total_result_count: d
    } = e,
    f = b(c),
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
    y = (0, _.Ob)(c, E);
  (0, h.uY)(c, g);
  let O = f.updateSearchedMembersByMemberIds(g);
  u.length > 0 && (s = u[0], l = u[u.length - 1]);
  let [v] = f.updatePaginationState({
    totalResultsCount: d,
    elasticSearchCursor: {
      before: (0, p.vf)({
        joinedAt: null == s || null == (r = s.member) ? true : r.joined_at,
        userId: null != (t = null == s || null == (i = s.member) ? true : i.user.id) ? t : m.dJq
      }),
      after: (0, p.vf)({
        joinedAt: null == l || null == (a = l.member) ? true : a.joined_at,
        userId: null != (n = null == l || null == (o = l.member) ? true : o.user.id) ? n : m.dJq
      })
    }
  }, false);
  return y || O || v
}
class X extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.default, s.Ay, l.A, c.default)
  }
  isInitialized(e) {
    return b(e).isInitialized
  }
  getMembersByGuildId(e, t) {
    return b(e).getMembersByIndex(t)
  }
  getMembersCountByGuildId(e, t) {
    return b(e).countMembersByIndex(t)
  }
  getEstimatedMemberSearchCountByGuildId(e) {
    let t = b(e),
      n = t.searchChunkSize,
      r = t.countMembersByIndex(t.getSearchIndex()),
      i = t.getTotalResultsCount();
    return null == i || i < n ? r : i
  }
  getKnownMemberSearchCountByGuildId(e) {
    let t = b(e);
    return t.countMembersByIndex(t.getSearchIndex())
  }
  getCurrentMemberSearchResultsByGuildId(e) {
    let t = b(e);
    return t.getMembersByIndex(t.getSearchIndex())
  }
  getSearchStateByGuildId(e) {
    return b(e).getSearchState()
  }
  hasDefaultSearchStateByGuildId(e) {
    return b(e).hasDefaultSearchState()
  }
  getPagedMembersByGuildId(e) {
    return b(e).getPaginatedMembers()
  }
  getPaginationStateByGuildId(e) {
    return b(e).getPaginationState()
  }
  getElasticSearchPaginationByGuildId(e) {
    return b(e).getElasticSearchPagination()
  }
  getEnhancedMember(e, t) {
    return b(e).getMember(t)
  }
  getNewMemberTimestamp(e) {
    return b(e).getNewMemberTimestamp()
  }
  getLastRefreshTimestamp(e) {
    return b(e).lastRefreshTimestamp
  }
  getLastCursorTimestamp(e) {
    return b(e).lastCursorTimestamp
  }
}
g(X, "displayName", "MemberSafetyStore");
let J = new X(Chunk73153.h, {
  CONNECTION_OPEN: G,
  CONNECTION_OPEN_SUPPLEMENTAL: F,
  LOCAL_MESSAGES_LOADED: B,
  CACHE_LOADED: V,
  PASSIVE_UPDATE_V2: H,
  GUILD_CREATE: A,
  GUILD_DELETE: I,
  GUILD_MEMBERS_CHUNK_BATCH: C,
  GUILD_MEMBER_ADD: S,
  GUILD_MEMBER_UPDATE: S,
  GUILD_MEMBER_UPDATE_LOCAL: N,
  GUILD_MEMBER_REMOVE: w,
  GUILD_ROLE_UPDATE: R,
  GUILD_ROLE_DELETE: R,
  GUILD_MEMBER_PROFILE_UPDATE: j,
  GUILD_ROLE_MEMBER_REMOVE: P,
  GUILD_ROLE_MEMBER_ADD: P,
  THREAD_MEMBER_LIST_UPDATE: D,
  THREAD_MEMBERS_UPDATE: L,
  LOAD_ARCHIVED_THREADS_SUCCESS: x,
  LOAD_FORUM_POSTS: M,
  INITIALIZE_MEMBER_SAFETY_STORE: Y,
  MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: W,
  MEMBER_SAFETY_PAGINATION_UPDATE: K,
  MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: z,
  MEMBER_SAFETY_SEARCH_STATE_UPDATE: q,
  FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: Z,
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: Q,
  MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: T
})
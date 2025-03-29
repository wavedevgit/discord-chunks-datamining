/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => J
}), n(47120), n(653041);
var r, i = n(442837),
  o = n(570140),
  a = n(314897),
  s = n(271383),
  l = n(430824),
  c = n(594174),
  u = n(823379),
  d = n(709054),
  f = n(752560),
  _ = n(588215),
  p = n(44715),
  h = n(327999),
  m = n(981631);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = !1,
  b = {};

function v(e) {
  return null == b[e] && (b[e] = new f.P(e)), b[e]
}

function y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  v(e).reset(t)
}

function O() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  for (let t in b) y(t, e)
}

function I(e) {
  let {
    guild: t
  } = e, n = v(t.id);
  y(t.id, n.isInitialized)
}

function S(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  y(t)
}

function T() {
  return !1
}

function A(e) {
  let {
    guildId: t,
    userIds: n
  } = e;
  return v(t).updateMembersByMemberIds(n)
}

function N(e) {
  let {
    chunks: t
  } = e, n = !1;
  for (let e of t) n = v(e.guildId).updateServerMembers(e.members) || n;
  return n
}

function C(e) {
  let {
    guildId: t
  } = e, n = a.default.getId();
  return v(t).updateMembersByMemberIds([n])
}

function R(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return v(t).removeMember(n.id)
}

function P(e) {
  let t = !1,
    n = v(e.guildId);
  return "GUILD_ROLE_DELETE" === e.type && (t = n.removeRoleFromSearchState(e.roleId)), n.rebuildAllMembers() || t
}

function w(e) {
  let {
    guildId: t,
    userId: n
  } = e;
  return v(t).updateMembersByMemberIds([n])
}

function D(e) {
  let {
    guildId: t,
    members: n
  } = e;
  if (null == n || 0 === n.length) return !1;
  let r = v(t),
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
  if (null == n || 0 === n.length) return !1;
  let r = v(t),
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
  if (null == n || 0 === n.length) return !1;
  let r = v(t),
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
  if (0 === r.length) return !1;
  let i = v(t),
    o = r.reduce((e, t) => {
      if (null != t.owner) {
        let n = t.owner.user.id;
        e.push(n)
      }
      return e
    }, []);
  return i.updateMembersByMemberIds(o)
}

function k(e) {
  let {
    guildId: t,
    guildMember: n
  } = e;
  return v(t).updateMembersByMemberIds([n.user.id])
}

function j(e) {
  let t = !1;
  return e.guilds.forEach(e => {
    let {
      id: n,
      members: r
    } = e;
    t = v(n).updateServerMembers(r) || t
  }), t
}

function U(e) {
  let t = !1;
  return e.guilds.forEach(e => {
    let {
      id: n,
      activity_instances: r
    } = e, i = v(n), o = [];
    null == r || r.forEach(e => {
      var t;
      null === (t = e.participants) || void 0 === t || t.forEach(e => {
        (0, u.lm)(e.member) && o.push(e.member)
      })
    }), t = i.updateServerMembers(o) || t
  }), t
}

function G(e) {
  return E ? E = !1 : O(!0), j(e)
}

function B(e) {
  return U(e)
}

function F(e) {
  let {
    guildMembers: t
  } = e, n = !1;
  return E = !0, d.default.entries(t).forEach(e => {
    let [t, r] = e;
    n = v(t).updateClientMembers(Object.values(r)) || n
  }), n
}

function V(e) {
  let {
    guildId: t,
    members: n
  } = e;
  if (null == t || null == l.Z.getGuild(t)) return !1;
  E = !0;
  let r = v(t),
    i = [];
  for (let e of n) null == r.getMember(e.userId) && i.push(e);
  return i.length > 0 && r.updateClientMembers(i)
}

function Z(e) {
  let {
    members: t,
    guildId: n
  } = e;
  return t.length > 0 && v(n).updateServerMembers(t)
}

function H(e) {
  let {
    guildId: t
  } = e;
  return v(t).initialize()
}

function W(e) {
  let {
    guildId: t
  } = e;
  return v(t).refreshNewMembersAndSearchResults()
}

function Y(e) {
  let {
    guildId: t,
    pagination: n
  } = e, [r] = v(t).updatePaginationState(n);
  return r
}

function K(e) {
  let {
    guildId: t,
    continuationToken: n
  } = e;
  return v(t).updatePaginationToken(n)
}

function z(e) {
  let {
    guildId: t,
    searchState: n
  } = e;
  return v(t).updateSearchState(n)
}

function q(e) {
  let {
    guildId: t,
    memberSupplementals: n
  } = e, r = (0, p.Qu)(t, n);
  return r && v(t).updateMembersByMemberIds(n.map(e => e.userId)), r
}

function Q(e) {
  var t, n, r, i, o, a;
  let s, l;
  let {
    guildId: c,
    members: u,
    total_result_count: d
  } = e, f = v(c), {
    memberIds: g,
    memberSupplementals: E
  } = u.reduce((e, t) => {
    let {
      member: n,
      source_invite_code: r,
      join_source_type: i,
      inviter_id: o
    } = t, a = n.user;
    return e.memberIds.push(a.id), e.memberSupplementals.push({
      userId: a.id,
      sourceInviteCode: r,
      joinSourceType: i,
      inviterId: o
    }), e
  }, {
    memberIds: [],
    memberSupplementals: []
  }), b = (0, p.Qu)(c, E);
  (0, h.nf)(c, g);
  let y = f.updateSearchedMembersByMemberIds(g);
  u.length > 0 && (s = u[0], l = u[u.length - 1]);
  let [O] = f.updatePaginationState({
    totalResultsCount: d,
    elasticSearchCursor: {
      before: (0, _.si)({
        joinedAt: null == s ? void 0 : null === (t = s.member) || void 0 === t ? void 0 : t.joined_at,
        userId: null !== (o = null == s ? void 0 : null === (n = s.member) || void 0 === n ? void 0 : n.user.id) && void 0 !== o ? o : m.lds
      }),
      after: (0, _.si)({
        joinedAt: null == l ? void 0 : null === (r = l.member) || void 0 === r ? void 0 : r.joined_at,
        userId: null !== (a = null == l ? void 0 : null === (i = l.member) || void 0 === i ? void 0 : i.user.id) && void 0 !== a ? a : m.lds
      })
    }
  }, !1);
  return b || y || O
}
class X extends(r = i.ZP.Store) {
  initialize() {
    this.waitFor(a.default, s.ZP, c.default)
  }
  isInitialized(e) {
    return v(e).isInitialized
  }
  getMembersByGuildId(e, t) {
    return v(e).getMembersByIndex(t)
  }
  getMembersCountByGuildId(e, t) {
    return v(e).countMembersByIndex(t)
  }
  getEstimatedMemberSearchCountByGuildId(e) {
    let t = v(e),
      n = t.searchChunkSize,
      r = t.countMembersByIndex(t.getSearchIndex()),
      i = t.getTotalResultsCount();
    return null == i || i < n ? r : i
  }
  getKnownMemberSearchCountByGuildId(e) {
    let t = v(e);
    return t.countMembersByIndex(t.getSearchIndex())
  }
  getCurrentMemberSearchResultsByGuildId(e) {
    let t = v(e);
    return t.getMembersByIndex(t.getSearchIndex())
  }
  getSearchStateByGuildId(e) {
    return v(e).getSearchState()
  }
  hasDefaultSearchStateByGuildId(e) {
    return v(e).hasDefaultSearchState()
  }
  getPagedMembersByGuildId(e) {
    return v(e).getPaginatedMembers()
  }
  getPaginationStateByGuildId(e) {
    return v(e).getPaginationState()
  }
  getElasticSearchPaginationByGuildId(e) {
    return v(e).getElasticSearchPagination()
  }
  getEnhancedMember(e, t) {
    return v(e).getMember(t)
  }
  getNewMemberTimestamp(e) {
    return v(e).getNewMemberTimestamp()
  }
  getLastRefreshTimestamp(e) {
    return v(e).lastRefreshTimestamp
  }
  getLastCursorTimestamp(e) {
    return v(e).lastCursorTimestamp
  }
}
g(X, "displayName", "MemberSafetyStore");
let J = new X(o.Z, {
  CONNECTION_OPEN: G,
  CONNECTION_OPEN_SUPPLEMENTAL: B,
  LOCAL_MESSAGES_LOADED: V,
  CACHE_LOADED: F,
  PASSIVE_UPDATE_V2: Z,
  GUILD_CREATE: I,
  GUILD_DELETE: S,
  GUILD_MEMBERS_CHUNK_BATCH: N,
  GUILD_MEMBER_ADD: T,
  GUILD_MEMBER_UPDATE: T,
  GUILD_MEMBER_UPDATE_LOCAL: C,
  GUILD_MEMBER_REMOVE: R,
  GUILD_ROLE_UPDATE: P,
  GUILD_ROLE_DELETE: P,
  GUILD_MEMBER_PROFILE_UPDATE: k,
  GUILD_ROLE_MEMBER_REMOVE: w,
  GUILD_ROLE_MEMBER_ADD: w,
  THREAD_MEMBER_LIST_UPDATE: D,
  THREAD_MEMBERS_UPDATE: L,
  LOAD_ARCHIVED_THREADS_SUCCESS: x,
  LOAD_FORUM_POSTS: M,
  INITIALIZE_MEMBER_SAFETY_STORE: H,
  MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: W,
  MEMBER_SAFETY_PAGINATION_UPDATE: Y,
  MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: K,
  MEMBER_SAFETY_SEARCH_STATE_UPDATE: z,
  FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: q,
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: Q,
  MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: A
})
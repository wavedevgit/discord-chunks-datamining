/** Chunk was on web.js **/
/** chunk id: 343969, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => q,
  Ms: () => W,
  Wl: () => K
}), require("./896048.js"), require("./638769.js"), require("./65821.js");
var Chunk812729 = require("./812729.js"),
  i = require.n(Chunk812729),
  Chunk735438 = require("./735438.js"),
  Chunk353640 = require("./353640.js"),
  Chunk121894 = require("./121894.js"),
  Chunk499979 = require("./499979.js"),
  Chunk439372 = require("./439372.js"),
  Chunk626584 = require("./626584.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk233693 = require("./233693.js"),
  Chunk859126 = require("./859126.js"),
  Chunk70738 = require("./70738.js"),
  Chunk902822 = require("./902822.js"),
  Chunk266047 = require("./266047.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = false,
  A = new Chunk626584.A("MemberSafetySearchManager");

function I(e) {
  return "guild_".concat(e)
}

function S(e) {
  return {
    requestState: e,
    abortController: null,
    lastUpdated: Date.now(),
    query: null,
    cursor: null,
    previousPagination: null,
    sort: null,
    elasticSearchCursor: null
  }
}
let T = (0, Chunk353640.v)(e => ({}));

function C(e, t) {
  let n = T.getState()[e];
  return null == n && (n = S(1)), n = y({}, n, t), (0, s.r)(() => {
    T.setState(t => O(y({}, t), {
      [e]: n
    }))
  }), n
}

function N(e) {
  return T.getState()[e]
}

function w(e) {
  let t = N(e);
  return null == t && C(e, t = S(1)), t
}

function R(e) {
  (0, s.r)(() => {
    T.setState(t => {
      let n = y({}, t);
      return delete n[e], n
    })
  })
}

function P(e, t, n, r, i) {
  let a = N(e);
  if ((null == a ? true : a.requestState) === 2) {
    var o;
    null == (o = a.abortController) || o.abort()
  }
  return C(e, {
    requestState: 2,
    abortController: new AbortController,
    lastUpdated: Date.now(),
    query: t,
    cursor: n,
    previousPagination: r,
    sort: i
  })
}

function D(e) {
  null != N(e) && C(e, {
    requestState: 0,
    abortController: null,
    lastUpdated: Date.now()
  })
}
async function L(e) {
  await (0, l.yy)(200), null != N(e) && C(e, {
    requestState: 3,
    abortController: null,
    lastUpdated: Date.now()
  })
}

function x(e) {
  C(e, {
    requestState: 4,
    abortController: null,
    lastUpdated: Date.now()
  })
}

function M(e) {
  R(I(e))
}

function j(e) {
  return null != e && e.length > 1
}

function k(e) {
  let t = {},
    n = {},
    {
      query: r
    } = e;
  if (j(r)) {
    let [e, n] = (0, _.H)(r);
    e.length > 0 && (t.usernames = {
      or_query: e
    }), n.length > 0 && (t.user_id = {
      or_query: n
    })
  }
  let {
    requireUnusualDmActivity: i,
    requireCommunicationDisabled: a,
    requireUnusualAccountActivity: o,
    requireUsernameQuarantined: s
  } = e, l = {};
  i && (l.unusual_dm_activity_until = {
    range: {
      gte: Date.now() - h.tX
    }
  }), a && (l.communication_disabled_until = {
    range: {
      gte: Date.now()
    }
  }), o && (l.unusual_account_activity = o), s && (l.automod_quarantined_username = s), Object.keys(l).length > 0 && (n.safety_signals = l);
  let {
    selectedRoleIds: c
  } = e;
  c.size > 0 && (t.role_ids = {
    and_query: Array.from(c)
  });
  let {
    selectedJoinDateOption: u
  } = e;
  if (null != u.afterDate) {
    var d;
    t.guild_joined_at = {
      range: {
        gte: u.afterDate,
        lte: null != (d = u.beforeDate) ? d : true
      }
    }
  }
  let {
    selectedAccountAgeOption: p
  } = e;
  if (null != p.afterDate) {
    let e = t.user_id;
    t.user_id = O(y({}, e), {
      range: {
        gte: f.default.fromTimestamp(p.afterDate),
        lte: null != p.beforeDate ? f.default.fromTimestamp(p.beforeDate) : true
      }
    })
  }
  let {
    selectedSourceInviteCode: m
  } = e;
  null != m && (t.source_invite_code = {
    or_query: [m]
  });
  let {
    selectedJoinSourceType: g
  } = e;
  null != g && (t.join_source_type = {
    or_query: [g]
  });
  let E = {
      or_query: n,
      and_query: t
    },
    {
      selectedSort: b
    } = e;
  return null != b && (E.sort = b), E
}

function U(e, t) {
  return null == t ? e : y({}, e, t)
}

function G(e, t) {
  return Math.floor(Math.max(e - 1, 0) / t)
}

function V(e) {
  let t = (0, p.n4)(e),
    n = e.pageSize * (e.currentPage - 1),
    r = e.pageSize * e.currentPage,
    i = e.pageSize * (e.currentPage + 1);
  return {
    previousPageChunkNumber: G(n, t),
    currentPageChunkNumber: G(r, t),
    nextPageChunkNumber: G(i, t)
  }
}

function F(e, t) {
  var n;
  let {
    currentPageChunkNumber: r,
    previousPageChunkNumber: i,
    nextPageChunkNumber: a
  } = V(t), {
    previousPagination: o
  } = w(I(e)), s = t.currentPage, l = null != (n = null == o ? true : o.currentPage) ? n : 0, c = g.A.getElasticSearchPaginationByGuildId(e);
  switch (true) {
    case null == c:
    case r === a && 0 === r:
      return 0;
    case r === a && r === i:
      return 1;
    case l < s && r < a:
      return 2;
    case l > s && r >= i:
      if (0 < r) return 3;
      return 0;
    default:
      return 1
  }
}

function B(e, t, n) {
  var r, i, a, o, s, l;
  let c = F(e, n),
    u = g.A.getElasticSearchPaginationByGuildId(e),
    f = (0, p.n4)(n);
  switch (c) {
    case 0:
      return [null, {
        limit: f
      }];
    case 1:
      return [null != (r = t.cursor) ? r : null, {
        limit: f,
        after: null != (i = t.cursor) ? i : true
      }];
    case 2:
      return [null != (a = null == u ? true : u.after) ? a : null, {
        limit: f,
        after: null != (o = null == u ? true : u.after) ? o : true
      }];
    case 3:
      return [null != (s = null == u ? true : u.before) ? s : null, {
        limit: f,
        before: null != (l = null == u ? true : u.before) ? l : true
      }];
    default:
      (0, d.xb)(c)
  }
}

function H(e, t) {
  let n = w(e);
  return i()(n.query, t)
}
async function Y(e) {
  var t, n, r;
  let i = g.A.getSearchStateByGuildId(e),
    o = g.A.getPaginationStateByGuildId(e),
    s = I(e),
    l = w(s),
    [c, u] = B(e, l, o),
    d = U(k(i), u),
    f = null != (t = i.selectedSort) ? t : h.mF.ORDER_BY_GUILD_JOINED_AT_DESC;
  if (H(s, d) && (0, a.isEqual)(c, l.cursor)) return;
  let p = P(s, d, c, o, f);
  try {
    if (A.info("Making member search request", {
        query: p.query,
        guildId: e
      }), null == p.query) throw Error("Query is null");
    await (0, m.N)(e, p.query, {
      signal: null != (n = null == (r = p.abortController) ? true : r.signal) ? n : true
    })
  } catch (e) {
    if (v === e.code) return;
    D(s);
    return
  }
  await L(s)
}

function W(e) {
  return T(t => {
    var n;
    return (null == (n = t[I(e)]) ? true : n.requestState) === 2
  })
}

function K(e) {
  return T(t => {
    var n;
    return (null == (n = t[I(e)]) ? true : n.requestState) === 4
  })
}
class z extends Chunk439372.A {
  handleInitialize(e) {
    let {
      guildId: t
    } = e;
    return M(t), Y(t)
  }
  handleGuildDelete(e) {
    let {
      guild: t
    } = e;
    return M(t.id)
  }
  handleSearchStateUpdate(e) {
    let {
      guildId: t
    } = e;
    return Y(t)
  }
  handlePaginationUpdate(e) {
    let {
      guildId: t
    } = e;
    return Y(t)
  }
  handleGuildMemberSearchSuccess(e) {
    let {
      guildId: t
    } = e;
    return L(I(t))
  }
  handleGuildMemberSearchStillIndexing(e) {
    let {
      guildId: t
    } = e;
    return x(I(t))
  }
  handleNewMemberTimestampRefresh(e) {
    let {
      guildId: t
    } = e;
    return Y(t)
  }
  constructor(...e) {
    super(...e), E(this, "actions", {
      INITIALIZE_MEMBER_SAFETY_STORE: e => this.handleInitialize(e),
      GUILD_DELETE: e => this.handleGuildDelete(e),
      MEMBER_SAFETY_SEARCH_STATE_UPDATE: e => this.handleSearchStateUpdate(e),
      MEMBER_SAFETY_PAGINATION_UPDATE: e => this.handlePaginationUpdate(e),
      MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: e => this.handleGuildMemberSearchSuccess(e),
      MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING: e => this.handleGuildMemberSearchStillIndexing(e),
      MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: e => this.handleNewMemberTimestampRefresh(e)
    })
  }
}
let q = new z
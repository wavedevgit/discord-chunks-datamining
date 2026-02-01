/** Chunk was on web.js **/
/** chunk id: 187508, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => eo,
  pK: () => F
}), require("./667532.js"), require("./321073.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk499979 = require("./499979.js"),
  Chunk73153 = require("./73153.js"),
  Chunk323073 = require("./323073.js"),
  Chunk141468 = require("./141468.js"),
  Chunk451919 = require("./451919.js"),
  Chunk143413 = require("./143413.js"),
  Chunk204162 = require("./204162.js"),
  Chunk383233 = require("./383233.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk222823 = require("./222823.js"),
  Chunk994500 = require("./994500.js"),
  Chunk967198 = require("./967198.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}
let C = "recentMentionFilterSettings",
  N = [],
  w = {},
  R = {},
  P = false,
  D = true,
  L = Chunk506774.w.get(C, {
    guildFilter: Chunk652215.KE7.ALL_SERVERS,
    everyoneFilter: true,
    roleFilter: true
  }),
  x = false,
  M = 0,
  j = false;

function k(e) {
  w = {}, e.forEach(e => {
    null == w[e.getChannelId()] && (w[e.getChannelId()] = 0), w[e.getChannelId()]++
  })
}

function U(e) {
  let {
    addedMessages: t,
    deletedMessages: n
  } = e;
  null != t && t.forEach(e => {
    null == w[e.getChannelId()] && (w[e.getChannelId()] = 0), w[e.getChannelId()]++
  }), null != n && n.forEach(e => {
    null != w[e.getChannelId()] && (w[e.getChannelId()] = Math.max(0, w[e.getChannelId()] - 1))
  })
}

function G(e) {
  let {
    guildId: t
  } = e;
  P = true, null == t && L.guildFilter === I.KE7.THIS_SERVER && Q({
    guildFilter: I.KE7.ALL_SERVERS
  })
}

function V(e) {
  if (e instanceof h.Ay) return e;
  let t = E.A.getMessage(e.channel_id, e.id);
  return null != t ? t : (0, d.rh)(e)
}

function F(e) {
  let t = g.A.getBasicChannel(e.channel_id);
  if (null == t || !I.kvI.GUILD_TEXTUAL.has(t.type) || v.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) || (0, u.UK)(t.id)) returnfalse;
  switch (v.Ay.resolvedMessageNotifications(t)) {
    case I.orn.ALL_MESSAGES:
      returntrue;
    case I.orn.ONLY_MENTIONS:
      let n = v.Ay.isSuppressEveryoneEnabled(t.guild_id),
        r = v.Ay.isSuppressRolesEnabled(t.guild_id),
        i = A.default.getCurrentUser();
      if (null == i) returnfalse;
      return (0, f.Ay)({
        message: e,
        userId: i.id,
        suppressEveryone: n,
        suppressRoles: r
      });
    case I.orn.NO_MESSAGES:
    default:
      returnfalse
  }
}

function B(e) {
  let {
    hasMoreAfter: t,
    messages: n,
    isAfter: r
  } = e, i = a().map(n, V);
  U({
    addedMessages: i
  }), r ? N = N.concat(i) : (N = i, R = {}), a().forEach(i, e => {
    R[e.id] = true
  }), P = false, D = t, M = (0, l.tB)(), x = true
}

function H() {
  P = false
}

function Y(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
  if ((0, p.A)(e) && !I.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
  null == t && (t = e.channel_id);
  let n = g.A.getChannel(t);
  if (null == n || n.type === I.rbe.DM || L.guildFilter === I.KE7.THIS_SERVER && n.getGuildId() !== O.A.getGuildId()) return null;
  let r = m.default.getId();
  if (b.A.isBlockedOrIgnoredForMessage(e) || (0, _.A)(e, r)) return null;
  e = V(e);
  let i = !L.everyoneFilter,
    a = !L.roleFilter;
  return (0, f.Ay)({
    message: e,
    userId: r,
    suppressEveryone: i,
    suppressRoles: a
  }) ? (j && y.Ay.ackMessageId(n.id) !== e.id && (0, f.Ay)({
    message: e,
    userId: r,
    suppressEveryone: v.Ay.isSuppressEveryoneEnabled(n.getGuildId()),
    suppressRoles: v.Ay.isSuppressRolesEnabled(n.getGuildId())
  }) && (j = false), e) : null
}

function W(e) {
  let {
    channelId: t,
    message: n
  } = e, r = A.default.getCurrentUser();
  if (null == r || !(0, f.bG)({
      rawMessage: n,
      userId: r.id,
      suppressRoles: false,
      suppressEveryone: false
    })) returnfalse;
  let i = Y(n, t);
  if (null == i) returnfalse;
  (N = N.slice()).unshift(i), R[i.id] = true, U({
    addedMessages: [i]
  })
}

function K(e) {
  let t = e.message.id;
  if (null == t || null == R[t]) returnfalse;
  let n = a().findIndex(N, e => {
      let {
        id: n
      } = e;
      return n === t
    }),
    r = (N = N.slice())[n];
  null != r && (N[n] = (0, d.IU)(r, e.message))
}

function z(e) {
  if (null == R[e]) returnfalse;
  delete R[e], U({
    deletedMessages: a().filter(N, t => {
      let {
        id: n
      } = t;
      return n === e
    })
  }), N = a().filter(N, t => {
    let {
      id: n
    } = t;
    return n !== e
  })
}

function q(e) {
  let {
    id: t
  } = e;
  return z(t)
}

function Z(e) {
  let {
    ids: t
  } = e;
  a().forEach(t, z)
}

function Q(e) {
  let t = T({}, L);
  L = a().defaults(a().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), L), s.w.set(C, L);
  let n = (e, n) => t[e] !== L[e] && L[e] === n,
    r = n("guildFilter", I.KE7.THIS_SERVER) || n("everyoneFilter", false) || n("roleFilter", false);
  R = {};
  let i = [];
  r && N.forEach(e => {
    let t = Y(e);
    null != t && (i.push(t), R[t.id] = true)
  }), k(N = i), 0 === N.length && (x = false)
}

function X() {
  if (L.guildFilter !== I.KE7.THIS_SERVER) returnfalse;
  x = false
}

function J() {
  N = [], R = {}, x = false, j = false, w = {}
}

function $(e) {
  let {
    guild: t
  } = e, n = [];
  N = a().filter(N, e => {
    let r = g.A.getChannel(e.channel_id);
    return null != r && r.getGuildId() !== t.id || (delete R[e.id], n.push(e), false)
  }), U({
    deletedMessages: n
  })
}

function ee() {
  U({
    deletedMessages: a().filter(N, e => b.A.isBlockedOrIgnoredForMessage(e))
  }), N = N.filter(e => !b.A.isBlockedOrIgnoredForMessage(e))
}

function et(e) {
  let {
    channel: t
  } = e, n = [];
  N = a().filter(N, e => e.channel_id !== t.id || (delete R[e.id], n.push(e), false)), U({
    deletedMessages: n
  })
}

function en(e) {
  J()
}

function er(e) {
  let {
    size: t
  } = e;
  U({
    deletedMessages: N.slice(t)
  });
  for (let e = t; e < N.length; ++e) delete R[N[e].id];
  N.length > (N = N.slice(0, t)).length && (D = true)
}

function ei(e) {
  j = true
}
class ea extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(m.default, g.A, E.A, y.Ay, b.A, O.A, v.Ay, A.default)
  }
  get hasLoadedEver() {
    return x
  }
  get lastLoaded() {
    return M
  }
  getMentions() {
    return x || N.length > 0 ? N : null
  }
  getSettingsFilteredMentions() {
    return x || N.length > 0 ? N.filter(F) : null
  }
  hasMention(e) {
    return R[e]
  }
  get loading() {
    return P
  }
  get hasMore() {
    return D
  }
  get guildFilter() {
    return L.guildFilter
  }
  get everyoneFilter() {
    return L.everyoneFilter
  }
  get roleFilter() {
    return L.roleFilter
  }
  get mentionsAreStale() {
    return j
  }
  get mentionCountByChannel() {
    return w
  }
  getMentionCountForChannel(e) {
    var t;
    return null != (t = w[e]) ? t : 0
  }
}
S(ea, "displayName", "RecentMentionsStore");
let eo = new ea(Chunk73153.h, {
  LOAD_RECENT_MENTIONS: G,
  LOAD_RECENT_MENTIONS_SUCCESS: B,
  LOAD_RECENT_MENTIONS_FAILURE: H,
  SET_RECENT_MENTIONS_FILTER: Q,
  CLEAR_MENTIONS: en,
  TRUNCATE_MENTIONS: er,
  CHANNEL_SELECT: X,
  CONNECTION_OPEN: J,
  GUILD_DELETE: $,
  MESSAGE_CREATE: W,
  MESSAGE_UPDATE: K,
  MESSAGE_DELETE: q,
  RECENT_MENTION_DELETE: q,
  MESSAGE_DELETE_BULK: Z,
  CHANNEL_DELETE: et,
  THREAD_DELETE: et,
  RELATIONSHIP_ADD: ee,
  RELATIONSHIP_REMOVE: ee,
  RELATIONSHIP_UPDATE: ee,
  SET_RECENT_MENTIONS_STALE: ei
})
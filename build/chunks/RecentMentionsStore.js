/** Chunk was on web.js **/
/** chunk id: 455199, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => eo,
  ln: () => F
}), require("./290780.js"), require("./539854.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk379649 = require("./379649.js"),
  Chunk570140 = require("./570140.js"),
  Chunk622822 = require("./622822.js"),
  Chunk786761 = require("./786761.js"),
  Chunk572804 = require("./572804.js"),
  Chunk901461 = require("./901461.js"),
  Chunk814082 = require("./814082.js"),
  Chunk23750 = require("./23750.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk306680 = require("./306680.js"),
  Chunk699516 = require("./699516.js"),
  Chunk914010 = require("./914010.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}
let A = "recentMentionFilterSettings",
  N = [],
  P = {},
  R = {},
  w = false,
  D = true,
  x = Chunk433517.K.get(A, {
    guildFilter: Chunk981631.NgX.ALL_SERVERS,
    everyoneFilter: true,
    roleFilter: true
  }),
  L = false,
  j = 0,
  M = false;

function k(e) {
  P = {}, e.forEach(e => {
    null == P[e.getChannelId()] && (P[e.getChannelId()] = 0), P[e.getChannelId()]++
  })
}

function U(e) {
  let {
    addedMessages: t,
    deletedMessages: n
  } = e;
  null != t && t.forEach(e => {
    null == P[e.getChannelId()] && (P[e.getChannelId()] = 0), P[e.getChannelId()]++
  }), null != n && n.forEach(e => {
    null != P[e.getChannelId()] && (P[e.getChannelId()] = Math.max(0, P[e.getChannelId()] - 1))
  })
}

function G(e) {
  let {
    guildId: t
  } = e;
  w = true, null == t && x.guildFilter === I.NgX.THIS_SERVER && Q({
    guildFilter: I.NgX.ALL_SERVERS
  })
}

function Z(e) {
  if (e instanceof m.ZP) return e;
  let t = E.Z.getMessage(e.channel_id, e.id);
  return null != t ? t : (0, d.e5)(e)
}

function F(e) {
  let t = g.Z.getBasicChannel(e.channel_id);
  if (null == t || !I.TPd.GUILD_TEXTUAL.has(t.type) || v.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) || (0, u.zd)(t.id)) returnfalse;
  switch (v.ZP.resolvedMessageNotifications(t)) {
    case I.bL.ALL_MESSAGES:
      returntrue;
    case I.bL.ONLY_MENTIONS:
      let n = v.ZP.isSuppressEveryoneEnabled(t.guild_id),
        r = v.ZP.isSuppressRolesEnabled(t.guild_id),
        i = S.default.getCurrentUser();
      if (null == i) returnfalse;
      return (0, f.ZP)({
        message: e,
        userId: i.id,
        suppressEveryone: n,
        suppressRoles: r
      });
    case I.bL.NO_MESSAGES:
    default:
      returnfalse
  }
}

function B(e) {
  let {
    hasMoreAfter: t,
    messages: n,
    isAfter: r
  } = e, i = a().map(n, Z);
  U({
    addedMessages: i
  }), r ? N = N.concat(i) : (N = i, R = {}), a().forEach(i, e => {
    R[e.id] = true
  }), w = false, D = t, j = (0, l.zO)(), L = true
}

function V() {
  w = false
}

function H(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
  if ((0, p.Z)(e) && !I.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
  null == t && (t = e.channel_id);
  let n = g.Z.getChannel(t);
  if (null == n || n.type === I.d4z.DM || x.guildFilter === I.NgX.THIS_SERVER && n.getGuildId() !== O.Z.getGuildId()) return null;
  let r = h.default.getId();
  if (y.Z.isBlockedOrIgnoredForMessage(e) || (0, _.Z)(e, r)) return null;
  e = Z(e);
  let i = !x.everyoneFilter,
    a = !x.roleFilter;
  return (0, f.ZP)({
    message: e,
    userId: r,
    suppressEveryone: i,
    suppressRoles: a
  }) ? (M && b.ZP.ackMessageId(n.id) !== e.id && (0, f.ZP)({
    message: e,
    userId: r,
    suppressEveryone: v.ZP.isSuppressEveryoneEnabled(n.getGuildId()),
    suppressRoles: v.ZP.isSuppressRolesEnabled(n.getGuildId())
  }) && (M = false), e) : null
}

function Y(e) {
  let {
    channelId: t,
    message: n
  } = e, r = S.default.getCurrentUser();
  if (null == r || !(0, f.Hl)({
      rawMessage: n,
      userId: r.id,
      suppressRoles: false,
      suppressEveryone: false
    })) returnfalse;
  let i = H(n, t);
  if (null == i) returnfalse;
  (N = N.slice()).unshift(i), R[i.id] = true, U({
    addedMessages: [i]
  })
}

function W(e) {
  let t = e.message.id;
  if (null == t || null == R[t]) returnfalse;
  let n = a().findIndex(N, e => {
      let {
        id: n
      } = e;
      return n === t
    }),
    r = (N = N.slice())[n];
  null != r && (N[n] = (0, d.wi)(r, e.message))
}

function K(e) {
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

function z(e) {
  let {
    id: t
  } = e;
  return K(t)
}

function q(e) {
  let {
    ids: t
  } = e;
  a().forEach(t, K)
}

function Q(e) {
  let t = C({}, x);
  x = a().defaults(a().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), x), s.K.set(A, x);
  let n = (e, n) => t[e] !== x[e] && x[e] === n,
    r = n("guildFilter", I.NgX.THIS_SERVER) || n("everyoneFilter", false) || n("roleFilter", false);
  R = {};
  let i = [];
  r && N.forEach(e => {
    let t = H(e);
    null != t && (i.push(t), R[t.id] = true)
  }), k(N = i), 0 === N.length && (L = false)
}

function X() {
  if (x.guildFilter !== Chunk981631.NgX.THIS_SERVER) returnfalse;
  L = false
}

function J() {
  N = [], R = {}, L = false, M = false, P = {}
}

function $(e) {
  let {
    guild: t
  } = e, n = [];
  N = a().filter(N, e => {
    let r = g.Z.getChannel(e.channel_id);
    return null != r && r.getGuildId() !== t.id || (delete R[e.id], n.push(e), false)
  }), U({
    deletedMessages: n
  })
}

function ee() {
  U({
    deletedMessages: a().filter(N, e => y.Z.isBlockedOrIgnoredForMessage(e))
  }), N = N.filter(e => !y.Z.isBlockedOrIgnoredForMessage(e))
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
  M = true
}
class ea extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk592125.Z, Chunk375954.Z, Chunk306680.ZP, Chunk699516.Z, Chunk914010.Z, Chunk9156.ZP, Chunk594174.default)
  }
  get hasLoadedEver() {
    return L
  }
  get lastLoaded() {
    return j
  }
  getMentions() {
    return L || N.length > 0 ? N : null
  }
  getSettingsFilteredMentions() {
    return L || N.length > 0 ? N.filter(F) : null
  }
  hasMention(e) {
    return R[e]
  }
  get loading() {
    return w
  }
  get hasMore() {
    return D
  }
  get guildFilter() {
    return x.guildFilter
  }
  get everyoneFilter() {
    return x.everyoneFilter
  }
  get roleFilter() {
    return x.roleFilter
  }
  get mentionsAreStale() {
    return M
  }
  get mentionCountByChannel() {
    return P
  }
  getMentionCountForChannel(e) {
    var t;
    return null != (t = P[e]) ? t : 0
  }
}
T(ea, "displayName", "RecentMentionsStore");
let eo = new ea(Chunk570140.Z, {
  LOAD_RECENT_MENTIONS: G,
  LOAD_RECENT_MENTIONS_SUCCESS: B,
  LOAD_RECENT_MENTIONS_FAILURE: V,
  SET_RECENT_MENTIONS_FILTER: Q,
  CLEAR_MENTIONS: en,
  TRUNCATE_MENTIONS: er,
  CHANNEL_SELECT: X,
  CONNECTION_OPEN: J,
  GUILD_DELETE: $,
  MESSAGE_CREATE: Y,
  MESSAGE_UPDATE: W,
  MESSAGE_DELETE: z,
  RECENT_MENTION_DELETE: z,
  MESSAGE_DELETE_BULK: q,
  CHANNEL_DELETE: et,
  THREAD_DELETE: et,
  RELATIONSHIP_ADD: ee,
  RELATIONSHIP_REMOVE: ee,
  RELATIONSHIP_UPDATE: ee,
  SET_RECENT_MENTIONS_STALE: ei
})
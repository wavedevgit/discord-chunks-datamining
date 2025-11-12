/** Chunk was on web.js **/
/** chunk id: 455199, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => eo,
  ln: () => Z
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

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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
  R = {},
  P = {},
  D = false,
  w = true,
  x = Chunk433517.K.get(C, {
    guildFilter: Chunk981631.NgX.ALL_SERVERS,
    everyoneFilter: true,
    roleFilter: true
  }),
  L = false,
  M = 0,
  j = false;

function k(e) {
  R = {}, e.forEach(e => {
    null == R[e.getChannelId()] && (R[e.getChannelId()] = 0), R[e.getChannelId()]++
  })
}

function U(e) {
  let {
    addedMessages: t,
    deletedMessages: n
  } = e;
  null != t && t.forEach(e => {
    null == R[e.getChannelId()] && (R[e.getChannelId()] = 0), R[e.getChannelId()]++
  }), null != n && n.forEach(e => {
    null != R[e.getChannelId()] && (R[e.getChannelId()] = Math.max(0, R[e.getChannelId()] - 1))
  })
}

function G(e) {
  let {
    guildId: t
  } = e;
  D = true, null == t && x.guildFilter === T.NgX.THIS_SERVER && X({
    guildFilter: T.NgX.ALL_SERVERS
  })
}

function B(e) {
  if (e instanceof h.ZP) return e;
  let t = E.Z.getMessage(e.channel_id, e.id);
  return null != t ? t : (0, d.e5)(e)
}

function Z(e) {
  let t = g.Z.getBasicChannel(e.channel_id);
  if (null == t || !T.TPd.GUILD_TEXTUAL.has(t.type) || v.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) || (0, u.zd)(t.id)) returnfalse;
  switch (v.ZP.resolvedMessageNotifications(t)) {
    case T.bL.ALL_MESSAGES:
      returntrue;
    case T.bL.ONLY_MENTIONS:
      let n = v.ZP.isSuppressEveryoneEnabled(t.guild_id),
        r = v.ZP.isSuppressRolesEnabled(t.guild_id),
        i = I.default.getCurrentUser();
      if (null == i) returnfalse;
      return (0, f.ZP)({
        message: e,
        userId: i.id,
        suppressEveryone: n,
        suppressRoles: r
      });
    case T.bL.NO_MESSAGES:
    default:
      returnfalse
  }
}

function F(e) {
  let {
    hasMoreAfter: t,
    messages: n,
    isAfter: r
  } = e, i = a().map(n, B);
  U({
    addedMessages: i
  }), r ? N = N.concat(i) : (N = i, P = {}), a().forEach(i, e => {
    P[e.id] = true
  }), D = false, w = t, M = (0, l.zO)(), L = true
}

function V() {
  D = false
}

function H(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
  if ((0, _.Z)(e) && !T.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
  null == t && (t = e.channel_id);
  let n = g.Z.getChannel(t);
  if (null == n || n.type === T.d4z.DM || x.guildFilter === T.NgX.THIS_SERVER && n.getGuildId() !== O.Z.getGuildId()) return null;
  let r = m.default.getId();
  if (y.Z.isBlockedOrIgnoredForMessage(e) || (0, p.Z)(e, r)) return null;
  e = B(e);
  let i = !x.everyoneFilter,
    a = !x.roleFilter;
  return (0, f.ZP)({
    message: e,
    userId: r,
    suppressEveryone: i,
    suppressRoles: a
  }) ? (j && b.ZP.ackMessageId(n.id) !== e.id && (0, f.ZP)({
    message: e,
    userId: r,
    suppressEveryone: v.ZP.isSuppressEveryoneEnabled(n.getGuildId()),
    suppressRoles: v.ZP.isSuppressRolesEnabled(n.getGuildId())
  }) && (j = false), e) : null
}

function Y(e) {
  let {
    channelId: t,
    message: n
  } = e, r = I.default.getCurrentUser();
  if (null == r || !(0, f.Hl)({
      rawMessage: n,
      userId: r.id,
      suppressRoles: false,
      suppressEveryone: false
    })) returnfalse;
  let i = H(n, t);
  if (null == i) returnfalse;
  (N = N.slice()).unshift(i), P[i.id] = true, U({
    addedMessages: [i]
  })
}

function W(e) {
  let t = e.message.id;
  if (null == t || null == P[t]) returnfalse;
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
  if (null == P[e]) returnfalse;
  delete P[e], U({
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

function X(e) {
  let t = A({}, x);
  x = a().defaults(a().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), x), s.K.set(C, x);
  let n = (e, n) => t[e] !== x[e] && x[e] === n,
    r = n("guildFilter", T.NgX.THIS_SERVER) || n("everyoneFilter", false) || n("roleFilter", false);
  P = {};
  let i = [];
  r && N.forEach(e => {
    let t = H(e);
    null != t && (i.push(t), P[t.id] = true)
  }), k(N = i), 0 === N.length && (L = false)
}

function Q() {
  if (x.guildFilter !== Chunk981631.NgX.THIS_SERVER) returnfalse;
  L = false
}

function J() {
  N = [], P = {}, L = false, j = false, R = {}
}

function $(e) {
  let {
    guild: t
  } = e, n = [];
  N = a().filter(N, e => {
    let r = g.Z.getChannel(e.channel_id);
    return null != r && r.getGuildId() !== t.id || (delete P[e.id], n.push(e), false)
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
  N = a().filter(N, e => e.channel_id !== t.id || (delete P[e.id], n.push(e), false)), U({
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
  for (let e = t; e < N.length; ++e) delete P[N[e].id];
  N.length > (N = N.slice(0, t)).length && (w = true)
}

function ei(e) {
  j = true
}
class ea extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk592125.Z, Chunk375954.Z, Chunk306680.ZP, Chunk699516.Z, Chunk914010.Z, Chunk9156.ZP, Chunk594174.default)
  }
  get hasLoadedEver() {
    return L
  }
  get lastLoaded() {
    return M
  }
  getMentions() {
    return L || N.length > 0 ? N : null
  }
  getSettingsFilteredMentions() {
    return L || N.length > 0 ? N.filter(Z) : null
  }
  hasMention(e) {
    return P[e]
  }
  get loading() {
    return D
  }
  get hasMore() {
    return w
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
    return j
  }
  get mentionCountByChannel() {
    return R
  }
  getMentionCountForChannel(e) {
    var t;
    return null != (t = R[e]) ? t : 0
  }
}
S(ea, "displayName", "RecentMentionsStore");
let eo = new ea(Chunk570140.Z, {
  LOAD_RECENT_MENTIONS: G,
  LOAD_RECENT_MENTIONS_SUCCESS: F,
  LOAD_RECENT_MENTIONS_FAILURE: V,
  SET_RECENT_MENTIONS_FILTER: X,
  CLEAR_MENTIONS: en,
  TRUNCATE_MENTIONS: er,
  CHANNEL_SELECT: Q,
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
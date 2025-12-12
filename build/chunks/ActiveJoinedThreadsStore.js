/** Chunk was on web.js **/
/** chunk id: 601070, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eu
}), require("./388685.js"), require("./539854.js");
var r, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk622822 = require("./622822.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk709054 = require("./709054.js"),
  Chunk344185 = require("./344185.js"),
  Chunk569471 = require("./569471.js"),
  Chunk819168 = require("./819168.js"),
  Chunk176505 = require("./176505.js");

function b(e, t, n) {
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
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = {},
  I = {},
  T = {},
  C = {},
  A = {},
  N = {},
  P = null,
  R = {};

function w() {
  for (let e in S = {}, A = {}, I = {}, T = {}, C = {}, P = Chunk944486.Z.getChannelId(), R) clearTimeout(R[module]);
  R = {}, Chunk344185.Z.forEachGuild(e => {
    x(e)
  }), L()
}

function D(e) {
  for (let t in delete S[e], delete A[e], delete I[e], delete T[e], delete C[e], x(e), T[e]) M(e, t)
}

function x(e) {
  let t = m.Z.getThreadsForGuild(e);
  for (let e in t)
    for (let n in t[e]) {
      $(n);
      let e = u.Z.getChannel(n);
      if (null == e) continue;
      let t = h.Z.joinTimestamp(n);
      if (null != t) {
        let n = {
            channel: e,
            joinTimestamp: t.getTime()
          },
          {
            isUnread: r,
            isRelevant: i,
            isTimedRelevant: o
          } = Q(e);
        ee(S, e, n, false), ee(A, e, i ? n : null, false), ee(I, e, r ? n : null, false), o && X(e, true)
      } else {
        ee(T, e, e, false);
        let t = f.ZP.isForumPostUnread(e.id);
        ee(C, e, t ? e : null, false)
      }
    }
}

function L() {
  for (let e in N = {}, T)
    for (let t in T[module]) M(module, exports)
}

function j(e) {
  let t = u.Z.getBasicChannel(e);
  null != t && c.uC.has(t.type) && M(t.guild_id, t.id)
}

function M(e, t) {
  let n = u.Z.getChannel(t);
  if (null == n || !n.isForumLikeChannel() || (null == N[e] && (N[e] = {}), N[e][t] = 0, null == T[e] || null == T[e][t])) return;
  let r = d.Z.getGuild(e);
  if (null == r) return;
  let i = f.ZP.getTrackedAckMessageId(t);
  if (null == i) {
    let e = Date.now();
    null != r.joinedAt && (r.joinedAt instanceof Date ? e = r.joinedAt.getTime() : "string" == typeof r.joinedAt && (e = new Date(r.joinedAt).getTime())), i = _.default.fromTimestamp(e)
  }
  for (let n in T[e][t]) t === P ? f.ZP.isNewForumThread(n, t, r) && N[e][t]++ : _.default.compare(n, i) > 0 && !f.ZP.hasOpenedThread(n) && N[e][t]++
}

function k(e, t, n) {
  if (null == t) returnfalse;
  let r = u.Z.getChannel(n),
    i = h.Z.joinTimestamp(n);
  if (null != r && m.Z.isActive(e, t, n)) {
    if (null != i) {
      let e = {
          channel: r,
          joinTimestamp: i.getTime()
        },
        {
          isUnread: t,
          isRelevant: n,
          isTimedRelevant: o
        } = Q(r);
      ee(S, r, e, true), ee(A, r, n ? e : null, true), ee(I, r, t ? e : null, true), ee(T, r, null, true), ee(C, r, null, true), X(r, o)
    } else {
      let e = f.ZP.isForumPostUnread(r.id);
      ee(S, r, null, true), ee(I, r, null, true), ee(A, r, null, true), ee(T, r, r, true), ee(C, r, e ? r : null, true), $(r.id)
    }
    M(e, t)
  } else et(S, e, t, n), et(A, e, t, n), et(I, e, t, n), et(T, e, t, n), et(C, e, t, n), $(n), M(e, t)
}

function U(e) {
  return k(e.channel.guild_id, e.channel.parent_id, e.channel.id)
}

function G(e) {
  let {
    channels: t
  } = e;
  for (let e of t)
    if ((0, l.Y3)(e) !== Z(e.guild_id, e.parent_id)) return void w();
  returnfalse
}

function Z(e, t) {
  if (null == t) returnfalse;
  let n = S[e],
    r = null == n ? null : n[t];
  if (null != r) {
    for (let e in r)
      if ((0, l.Y3)(r[e].channel)) returntrue
  }
  let i = T[e],
    o = null == i ? null : i[t];
  if (null != o) {
    for (let e in o)
      if ((0, l.Y3)(o[e])) returntrue
  }
  returnfalse
}

function F(e) {
  let {
    channel: t
  } = e, n = false;
  return null != t.guild_id && null != t.parent_id && (t.guild_id in S && t.parent_id in S[t.guild_id] && (delete S[t.guild_id][t.parent_id], n = true), t.guild_id in I && t.parent_id in I[t.guild_id] && (delete I[t.guild_id][t.parent_id], n = true), t.guild_id in A && t.parent_id in A[t.guild_id] && (_.default.keys(A[t.guild_id][t.parent_id]).forEach($), delete A[t.guild_id][t.parent_id], n = true), t.guild_id in T && t.parent_id in T[t.guild_id] && (delete T[t.guild_id][t.parent_id], n = true), t.guild_id in C && t.parent_id in C[t.guild_id] && (delete C[t.guild_id][t.parent_id], n = true), n && M(t.guild_id, t.parent_id)), n
}

function B(e) {
  let t = u.Z.getChannel(e.id);
  return null != t && !!m.Z.isActive(e.guildId, t.parent_id, e.id) && k(t.guild_id, t.parent_id, t.id)
}

function V(e) {
  let t = u.Z.getChannel(e.channelId);
  if (null == t) H();
  else {
    let {
      guild_id: e,
      parent_id: r
    } = t;
    if (!c.Ec.has(t.type)) {
      var n;
      return Number(null == (n = N[e]) ? true : n[t.id]) > 0 && (M(e, t.id), true)
    }
    if (null == r) returnfalse;
    if (en(S, t)) {
      let {
        isUnread: n,
        isRelevant: i,
        isTimedRelevant: o
      } = Q(t);
      X(t, o);
      let a = en(I, t),
        s = en(A, t);
      if (n === a && i === s) returnfalse;
      let l = S[e][r][t.id],
        c = n ? l : null,
        u = i ? l : null;
      ee(I, t, c, true), ee(A, t, u, true), M(e, r)
    } else {
      let e = en(C, t),
        n = f.ZP.isForumPostUnread(t.id);
      if (n === e) returnfalse;
      ee(C, t, n ? t : null, true)
    }
  }
}

function H() {
  for (let e in I = {}, A = {}, S)
    for (let t in S[module])
      for (let n in S[module][exports]) {
        let r = S[module][exports][require],
          {
            isUnread: i,
            isRelevant: o,
            isTimedRelevant: a
          } = Q(r.channel);
        Chunk392711 && ee(I, r.channel, r, false), o && ee(A, r.channel, r, false), X(r.channel, Chunk442837)
      }
  for (let e in C = {}, T)
    for (let t in T[module])
      for (let n in T[module][exports]) {
        let r = T[module][exports][require];
        Chunk306680.ZP.isForumPostUnread(require) && ee(C, r, r, false)
      }
  L()
}

function Y(e) {
  if (e.channels.length > 0) return D(e.guildId)
}

function W(e) {
  let {
    guild: t
  } = e;
  return D(t.id)
}

function K(e) {
  let {
    guildId: t
  } = e;
  return D(t)
}

function z(e) {
  V(e), q()
}

function q() {
  let e = P;
  if ((P = Chunk944486.Z.getChannelId()) === module) returnfalse;
  j(module), j(P)
}

function Q(e) {
  let t = f.ZP.getMentionCount(e.id) > 0,
    n = f.ZP.hasUnread(e.id) && !h.Z.isMuted(e.id),
    r = e.hasFlag(E.zZ.PINNED),
    i = e.isActiveThread(),
    o = i && (0, g.Z)(e) > Date.now();
  return {
    isUnread: (i || r) && n || t,
    isRelevant: o || r || n || t,
    isTimedRelevant: o
  }
}

function X(e, t) {
  $(e.id), t && J(e)
}

function J(e) {
  R[e.id] = setTimeout(() => {
    let t = u.Z.getChannel(e.id);
    null != t && s.Z.dispatch({
      type: "THREAD_UPDATE",
      channel: t
    })
  }, (0, g.Z)(e) - Date.now() + 1)
}

function $(e) {
  e in R && (clearTimeout(R[e]), delete R[e])
}

function ee(e, t, n, r) {
  let {
    guild_id: i,
    parent_id: a,
    id: s
  } = t;
  null != i && null != a && null != s && (i in e || (e[i] = {}), a in e[i] || (e[i][a] = {}), r && (e[i] = v(y({}, e[i]), {
    [a]: y({}, e[i][a])
  })), null === n ? (delete e[i][a][s], o().isEmpty(e[i][a]) && delete e[i][a]) : e[i][a][s] = n)
}

function et(e, t, n, r) {
  null != t && null != n && null != r && er(e, t, n, r) && (e[t] = v(y({}, e[t]), {
    [n]: y({}, e[t][n])
  }), delete e[t][n][r], o().isEmpty(e[t][n]) && delete e[t][n])
}

function en(e, t) {
  return er(e, t.guild_id, t.parent_id, t.id)
}

function er(e, t, n, r) {
  return t in e && n in e[t] && r in e[t][n]
}
let ei = {},
  eo = {},
  ea = {},
  es = {},
  el = {};
class ec extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk344185.Z, Chunk592125.Z, Chunk430824.Z, Chunk569471.Z, Chunk306680.ZP, Chunk944486.Z), this.syncWith([Chunk944486.Z], q)
  }
  hasActiveJoinedUnreadThreads(e, t) {
    return e in I && t in I[e]
  }
  getActiveUnjoinedThreadsForParent(e, t) {
    var n;
    return e in T && null != (n = T[e][t]) ? n : es
  }
  getActiveJoinedThreadsForParent(e, t) {
    var n;
    return e in S && null != (n = S[e][t]) ? n : ea
  }
  getAllActiveJoinedThreads() {
    return S
  }
  getActiveJoinedThreadsForGuild(e) {
    var t;
    return null != (t = S[e]) ? t : ei
  }
  getActiveJoinedUnreadThreadsForGuild(e) {
    var t;
    return null != (t = I[e]) ? t : ei
  }
  getActiveJoinedUnreadThreadsForParent(e, t) {
    var n;
    return null != (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) ? n : ea
  }
  getActiveJoinedRelevantThreadsForGuild(e) {
    var t;
    return null != (t = A[e]) ? t : ei
  }
  getActiveJoinedRelevantThreadsForParent(e, t) {
    var n;
    return null != (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) ? n : ea
  }
  getActiveUnjoinedThreadsForGuild(e) {
    var t;
    return null != (t = T[e]) ? t : eo
  }
  getActiveUnjoinedUnreadThreadsForGuild(e) {
    var t;
    return null != (t = C[e]) ? t : ei
  }
  getActiveUnjoinedUnreadThreadsForParent(e, t) {
    var n;
    return null != (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) ? n : ea
  }
  getNewThreadCountsForGuild(e) {
    var t;
    return null != (t = N[e]) ? t : el
  }
  computeAllActiveJoinedThreads(e) {
    let t = [];
    for (let n in S)
      if (n === e || null == e)
        for (let e in S[n])
          for (let r in S[n][e]) t.push(S[n][e][r].channel);
    return t
  }
  getNewThreadCount(e, t) {
    var n, r;
    return null != (r = null == (n = N[e]) ? true : n[t]) ? r : 0
  }
  getActiveThreadCount(e, t) {
    var n, r, i, a;
    return o().size(null != (i = null == (n = S[e]) ? true : n[t]) ? i : {}) + o().size(null != (a = null == (r = T[e]) ? true : r[t]) ? a : {})
  }
}
b(ec, "displayName", "ActiveJoinedThreadsStore");
let eu = new ec(Chunk570140.Z, {
  CONNECTION_OPEN: w,
  OVERLAY_INITIALIZE: w,
  THREAD_LIST_SYNC: K,
  LOAD_THREADS_SUCCESS: w,
  LOAD_ARCHIVED_THREADS_SUCCESS: w,
  SEARCH_MESSAGES_SUCCESS: w,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: w,
  GUILD_CREATE: W,
  GUILD_DELETE: w,
  CURRENT_USER_UPDATE: w,
  THREAD_CREATE: U,
  THREAD_UPDATE: U,
  THREAD_DELETE: U,
  CHANNEL_UPDATES: G,
  CHANNEL_DELETE: F,
  THREAD_MEMBER_UPDATE: B,
  THREAD_MEMBERS_UPDATE: B,
  LOAD_MESSAGES_SUCCESS: V,
  MESSAGE_CREATE: V,
  MESSAGE_DELETE: V,
  MESSAGE_DELETE_BULK: V,
  MESSAGE_ACK: V,
  CHANNEL_ACK: V,
  CHANNEL_LOCAL_ACK: V,
  CHANNEL_SELECT: z,
  PASSIVE_UPDATE_V2: Y,
  WINDOW_FOCUS: H,
  UPDATE_CHANNEL_DIMENSIONS: H,
  TRY_ACK: H,
  BULK_ACK: H
})
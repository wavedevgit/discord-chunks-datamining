/** Chunk was on web.js **/
/** chunk id: 863005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => ed
}), require("./896048.js"), require("./321073.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk323073 = require("./323073.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk661191 = require("./661191.js"),
  Chunk970278 = require("./970278.js"),
  Chunk152007 = require("./152007.js"),
  Chunk826767 = require("./826767.js"),
  Chunk746080 = require("./746080.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
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
let A = {},
  I = {},
  S = {},
  T = {},
  C = {},
  N = {},
  w = null,
  R = {};

function P() {
  for (let e in A = {}, C = {}, I = {}, S = {}, T = {}, w = p.A.getChannelId(), R) clearTimeout(R[e]);
  R = {}, h.A.forEachGuild(e => {
    L(e)
  }), x()
}

function D(e) {
  for (let t in delete A[e], delete C[e], delete I[e], delete S[e], delete T[e], L(e), S[e]) j(e, t)
}

function L(e) {
  let t = h.A.getThreadsForGuild(e);
  for (let e in t)
    for (let n in t[e]) {
      ee(n);
      let e = u.A.getChannel(n);
      if (null == e) continue;
      let t = m.A.joinTimestamp(n);
      if (null != t) {
        let n = {
            channel: e,
            joinTimestamp: t.getTime()
          },
          {
            isUnread: r,
            isRelevant: i,
            isTimedRelevant: a
          } = X(e);
        et(A, e, n, false), et(C, e, i ? n : null, false), et(I, e, r ? n : null, false), a && J(e, true)
      } else {
        et(S, e, e, false);
        let t = f.Ay.isForumPostUnread(e.id);
        et(T, e, t ? e : null, false)
      }
    }
}

function x() {
  for (let e in N = {}, S)
    for (let t in S[e]) j(e, t)
}

function M(e) {
  let t = u.A.getBasicChannel(e);
  null != t && c.wE.has(t.type) && j(t.guild_id, t.id)
}

function j(e, t) {
  let n = u.A.getChannel(t);
  if (null == n || !n.isForumLikeChannel() || (null == N[e] && (N[e] = {}), N[e][t] = 0, null == S[e] || null == S[e][t])) return;
  let r = d.A.getGuild(e);
  if (null == r) return;
  let i = f.Ay.getTrackedAckMessageId(t);
  if (null == i) {
    let e = Date.now();
    null != r.joinedAt && (r.joinedAt instanceof Date ? e = r.joinedAt.getTime() : "string" == typeof r.joinedAt && (e = new Date(r.joinedAt).getTime())), i = _.default.fromTimestamp(e)
  }
  for (let n in S[e][t]) t === w ? f.Ay.isNewForumThread(n, t, r) && N[e][t]++ : _.default.compare(n, i) > 0 && !f.Ay.hasOpenedThread(n) && N[e][t]++
}

function k(e, t, n) {
  if (null == t) returnfalse;
  let r = u.A.getChannel(n),
    i = m.A.joinTimestamp(n);
  if (null != r && h.A.isActive(e, t, n)) {
    if (null != i) {
      let e = {
          channel: r,
          joinTimestamp: i.getTime()
        },
        {
          isUnread: t,
          isRelevant: n,
          isTimedRelevant: a
        } = X(r);
      et(A, r, e, true), et(C, r, n ? e : null, true), et(I, r, t ? e : null, true), et(S, r, null, true), et(T, r, null, true), J(r, a)
    } else {
      let e = f.Ay.isForumPostUnread(r.id);
      et(A, r, null, true), et(I, r, null, true), et(C, r, null, true), et(S, r, r, true), et(T, r, e ? r : null, true), ee(r.id)
    }
    j(e, t)
  } else en(A, e, t, n), en(C, e, t, n), en(I, e, t, n), en(S, e, t, n), en(T, e, t, n), ee(n), j(e, t)
}

function U(e) {
  return k(e.channel.guild_id, e.channel.parent_id, e.channel.id)
}

function G(e) {
  let {
    channels: t
  } = e;
  for (let e of t)
    if ((0, l.qR)(e) !== F(e.guild_id, e.parent_id)) return void P();
  returnfalse
}

function V(e) {
  let {
    channelId: t
  } = e, n = u.A.getChannel(t);
  return !!(null != n && n.isThread()) && k(n.guild_id, n.parent_id, n.id)
}

function F(e, t) {
  if (null == t) returnfalse;
  let n = A[e],
    r = null == n ? null : n[t];
  if (null != r) {
    for (let e in r)
      if ((0, l.qR)(r[e].channel)) returntrue
  }
  let i = S[e],
    a = null == i ? null : i[t];
  if (null != a) {
    for (let e in a)
      if ((0, l.qR)(a[e])) returntrue
  }
  returnfalse
}

function B(e) {
  let {
    channel: t
  } = e, n = false;
  return null != t.guild_id && null != t.parent_id && (t.guild_id in A && t.parent_id in A[t.guild_id] && (delete A[t.guild_id][t.parent_id], n = true), t.guild_id in I && t.parent_id in I[t.guild_id] && (delete I[t.guild_id][t.parent_id], n = true), t.guild_id in C && t.parent_id in C[t.guild_id] && (_.default.keys(C[t.guild_id][t.parent_id]).forEach(ee), delete C[t.guild_id][t.parent_id], n = true), t.guild_id in S && t.parent_id in S[t.guild_id] && (delete S[t.guild_id][t.parent_id], n = true), t.guild_id in T && t.parent_id in T[t.guild_id] && (delete T[t.guild_id][t.parent_id], n = true), n && j(t.guild_id, t.parent_id)), n
}

function H(e) {
  let t = u.A.getChannel(e.id);
  return null != t && !!h.A.isActive(e.guildId, t.parent_id, e.id) && k(t.guild_id, t.parent_id, t.id)
}

function Y(e) {
  let t = u.A.getChannel(e.channelId);
  if (null == t) W();
  else {
    let {
      guild_id: e,
      parent_id: r
    } = t;
    if (!c.Le.has(t.type)) {
      var n;
      return Number(null == (n = N[e]) ? true : n[t.id]) > 0 && (j(e, t.id), true)
    }
    if (null == r) returnfalse;
    if (er(A, t)) {
      let {
        isUnread: n,
        isRelevant: i,
        isTimedRelevant: a
      } = X(t);
      J(t, a);
      let o = er(I, t),
        s = er(C, t);
      if (n === o && i === s) returnfalse;
      let l = A[e][r][t.id],
        c = n ? l : null,
        u = i ? l : null;
      et(I, t, c, true), et(C, t, u, true), j(e, r)
    } else {
      let e = er(T, t),
        n = f.Ay.isForumPostUnread(t.id);
      if (n === e) returnfalse;
      et(T, t, n ? t : null, true)
    }
  }
}

function W() {
  for (let e in I = {}, C = {}, A)
    for (let t in A[e])
      for (let n in A[e][t]) {
        let r = A[e][t][n],
          {
            isUnread: i,
            isRelevant: a,
            isTimedRelevant: o
          } = X(r.channel);
        i && et(I, r.channel, r, false), a && et(C, r.channel, r, false), J(r.channel, o)
      }
  for (let e in T = {}, S)
    for (let t in S[e])
      for (let n in S[e][t]) {
        let r = S[e][t][n];
        f.Ay.isForumPostUnread(n) && et(T, r, r, false)
      }
  x()
}

function K(e) {
  if (e.channels.length > 0) return D(e.guildId)
}

function z(e) {
  let {
    guild: t
  } = e;
  return D(t.id)
}

function q(e) {
  let {
    guildId: t
  } = e;
  return D(t)
}

function Z(e) {
  Y(e), Q()
}

function Q() {
  let e = w;
  if ((w = p.A.getChannelId()) === e) returnfalse;
  M(e), M(w)
}

function X(e) {
  let t = f.Ay.getMentionCount(e.id) > 0,
    n = f.Ay.hasUnread(e.id) && !m.A.isMuted(e.id),
    r = e.hasFlag(E.lx.PINNED),
    i = e.isActiveThread(),
    a = i && (0, g.A)(e) > Date.now();
  return {
    isUnread: (i || r) && n || t,
    isRelevant: a || r || n || t,
    isTimedRelevant: a
  }
}

function J(e, t) {
  ee(e.id), t && $(e)
}

function $(e) {
  R[e.id] = setTimeout(() => {
    let t = u.A.getChannel(e.id);
    null != t && s.h.dispatch({
      type: "THREAD_UPDATE",
      channel: t
    })
  }, (0, g.A)(e) - Date.now() + 1)
}

function ee(e) {
  e in R && (clearTimeout(R[e]), delete R[e])
}

function et(e, t, n, r) {
  let {
    guild_id: i,
    parent_id: o,
    id: s
  } = t;
  null != i && null != o && null != s && (i in e || (e[i] = {}), o in e[i] || (e[i][o] = {}), r && (e[i] = v(b({}, e[i]), {
    [o]: b({}, e[i][o])
  })), null === n ? (delete e[i][o][s], a().isEmpty(e[i][o]) && delete e[i][o]) : e[i][o][s] = n)
}

function en(e, t, n, r) {
  null == t || null == n || null == r || ei(e, t, n, r) && (e[t] = v(b({}, e[t]), {
    [n]: b({}, e[t][n])
  }), delete e[t][n][r], a().isEmpty(e[t][n]) && delete e[t][n])
}

function er(e, t) {
  return ei(e, t.guild_id, t.parent_id, t.id)
}

function ei(e, t, n, r) {
  return t in e && n in e[t] && r in e[t][n]
}
let ea = {},
  eo = {},
  es = {},
  el = {},
  ec = {};
class eu extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(h.A, u.A, d.A, m.A, f.Ay, p.A), this.syncWith([p.A], Q)
  }
  hasActiveJoinedUnreadThreads(e, t) {
    return e in I && t in I[e]
  }
  getActiveUnjoinedThreadsForParent(e, t) {
    var n;
    return e in S && null != (n = S[e][t]) ? n : el
  }
  getActiveJoinedThreadsForParent(e, t) {
    var n;
    return e in A && null != (n = A[e][t]) ? n : es
  }
  getAllActiveJoinedThreads() {
    return A
  }
  getActiveJoinedThreadsForGuild(e) {
    var t;
    return null != (t = A[e]) ? t : ea
  }
  getActiveJoinedUnreadThreadsForGuild(e) {
    var t;
    return null != (t = I[e]) ? t : ea
  }
  getActiveJoinedUnreadThreadsForParent(e, t) {
    var n;
    return null != (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) ? n : es
  }
  getActiveJoinedRelevantThreadsForGuild(e) {
    var t;
    return null != (t = C[e]) ? t : ea
  }
  getActiveJoinedRelevantThreadsForParent(e, t) {
    var n;
    return null != (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) ? n : es
  }
  getActiveUnjoinedThreadsForGuild(e) {
    var t;
    return null != (t = S[e]) ? t : eo
  }
  getActiveUnjoinedUnreadThreadsForGuild(e) {
    var t;
    return null != (t = T[e]) ? t : ea
  }
  getActiveUnjoinedUnreadThreadsForParent(e, t) {
    var n;
    return null != (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) ? n : es
  }
  getNewThreadCountsForGuild(e) {
    var t;
    return null != (t = N[e]) ? t : ec
  }
  computeAllActiveJoinedThreads(e) {
    let t = [];
    for (let n in A)
      if (n === e || null == e)
        for (let e in A[n])
          for (let r in A[n][e]) t.push(A[n][e][r].channel);
    return t
  }
  getNewThreadCount(e, t) {
    var n, r;
    return null != (n = null == (r = N[e]) ? true : r[t]) ? n : 0
  }
  getActiveThreadCount(e, t) {
    var n, r, i, o;
    return a().size(null != (n = null == (i = A[e]) ? true : i[t]) ? n : {}) + a().size(null != (r = null == (o = S[e]) ? true : o[t]) ? r : {})
  }
}
y(eu, "displayName", "ActiveJoinedThreadsStore");
let ed = new eu(Chunk73153.h, {
  CONNECTION_OPEN: P,
  OVERLAY_INITIALIZE: P,
  THREAD_LIST_SYNC: q,
  LOAD_THREADS_SUCCESS: P,
  LOAD_ARCHIVED_THREADS_SUCCESS: P,
  SEARCH_MESSAGES_SUCCESS: P,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: P,
  GUILD_CREATE: z,
  GUILD_DELETE: P,
  CURRENT_USER_UPDATE: P,
  THREAD_CREATE: U,
  THREAD_UPDATE: U,
  THREAD_DELETE: U,
  CHANNEL_UPDATES: G,
  CHANNEL_DELETE: B,
  THREAD_MEMBER_UPDATE: H,
  THREAD_MEMBERS_UPDATE: H,
  LOAD_MESSAGES_SUCCESS: Y,
  MESSAGE_CREATE: Y,
  MESSAGE_DELETE: Y,
  MESSAGE_DELETE_BULK: Y,
  MESSAGE_ACK: Y,
  CHANNEL_ACK: Y,
  CHANNEL_LOCAL_ACK: Y,
  CHANNEL_SELECT: Z,
  PASSIVE_UPDATE_V2: K,
  WINDOW_FOCUS: W,
  UPDATE_CHANNEL_DIMENSIONS: V,
  TRY_ACK: W,
  BULK_ACK: W
})
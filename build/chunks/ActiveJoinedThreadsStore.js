/** Chunk was on web.js **/
/** chunk id: 863005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eu
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
    x(e)
  }), L()
}

function D(e) {
  for (let t in delete A[e], delete C[e], delete I[e], delete S[e], delete T[e], x(e), S[e]) M(e, t)
}

function x(e) {
  let t = h.A.getThreadsForGuild(e);
  for (let e in t)
    for (let n in t[e]) {
      $(n);
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
        ee(A, e, n, false), ee(C, e, i ? n : null, false), ee(I, e, r ? n : null, false), a && Q(e, true)
      } else {
        ee(S, e, e, false);
        let t = f.Ay.isForumPostUnread(e.id);
        ee(T, e, t ? e : null, false)
      }
    }
}

function L() {
  for (let e in N = {}, S)
    for (let t in S[e]) M(e, t)
}

function j(e) {
  let t = u.A.getBasicChannel(e);
  null != t && c.wE.has(t.type) && M(t.guild_id, t.id)
}

function M(e, t) {
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
      ee(A, r, e, true), ee(C, r, n ? e : null, true), ee(I, r, t ? e : null, true), ee(S, r, null, true), ee(T, r, null, true), Q(r, a)
    } else {
      let e = f.Ay.isForumPostUnread(r.id);
      ee(A, r, null, true), ee(I, r, null, true), ee(C, r, null, true), ee(S, r, r, true), ee(T, r, e ? r : null, true), $(r.id)
    }
    M(e, t)
  } else et(A, e, t, n), et(C, e, t, n), et(I, e, t, n), et(S, e, t, n), et(T, e, t, n), $(n), M(e, t)
}

function U(e) {
  return k(e.channel.guild_id, e.channel.parent_id, e.channel.id)
}

function G(e) {
  let {
    channels: t
  } = e;
  for (let e of t)
    if ((0, l.qR)(e) !== V(e.guild_id, e.parent_id)) return void P();
  returnfalse
}

function V(e, t) {
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

function F(e) {
  let {
    channel: t
  } = e, n = false;
  return null != t.guild_id && null != t.parent_id && (t.guild_id in A && t.parent_id in A[t.guild_id] && (delete A[t.guild_id][t.parent_id], n = true), t.guild_id in I && t.parent_id in I[t.guild_id] && (delete I[t.guild_id][t.parent_id], n = true), t.guild_id in C && t.parent_id in C[t.guild_id] && (_.default.keys(C[t.guild_id][t.parent_id]).forEach($), delete C[t.guild_id][t.parent_id], n = true), t.guild_id in S && t.parent_id in S[t.guild_id] && (delete S[t.guild_id][t.parent_id], n = true), t.guild_id in T && t.parent_id in T[t.guild_id] && (delete T[t.guild_id][t.parent_id], n = true), n && M(t.guild_id, t.parent_id)), n
}

function B(e) {
  let t = u.A.getChannel(e.id);
  return null != t && !!h.A.isActive(e.guildId, t.parent_id, e.id) && k(t.guild_id, t.parent_id, t.id)
}

function H(e) {
  let t = u.A.getChannel(e.channelId);
  if (null == t) Y();
  else {
    let {
      guild_id: e,
      parent_id: r
    } = t;
    if (!c.Le.has(t.type)) {
      var n;
      return Number(null == (n = N[e]) ? true : n[t.id]) > 0 && (M(e, t.id), true)
    }
    if (null == r) returnfalse;
    if (en(A, t)) {
      let {
        isUnread: n,
        isRelevant: i,
        isTimedRelevant: a
      } = X(t);
      Q(t, a);
      let s = en(I, t),
        o = en(C, t);
      if (n === s && i === o) returnfalse;
      let l = A[e][r][t.id],
        c = n ? l : null,
        u = i ? l : null;
      ee(I, t, c, true), ee(C, t, u, true), M(e, r)
    } else {
      let e = en(T, t),
        n = f.Ay.isForumPostUnread(t.id);
      if (n === e) returnfalse;
      ee(T, t, n ? t : null, true)
    }
  }
}

function Y() {
  for (let e in I = {}, C = {}, A)
    for (let t in A[e])
      for (let n in A[e][t]) {
        let r = A[e][t][n],
          {
            isUnread: i,
            isRelevant: a,
            isTimedRelevant: s
          } = X(r.channel);
        i && ee(I, r.channel, r, false), a && ee(C, r.channel, r, false), Q(r.channel, s)
      }
  for (let e in T = {}, S)
    for (let t in S[e])
      for (let n in S[e][t]) {
        let r = S[e][t][n];
        f.Ay.isForumPostUnread(n) && ee(T, r, r, false)
      }
  L()
}

function W(e) {
  if (e.channels.length > 0) return D(e.guildId)
}

function K(e) {
  let {
    guild: t
  } = e;
  return D(t.id)
}

function z(e) {
  let {
    guildId: t
  } = e;
  return D(t)
}

function q(e) {
  H(e), Z()
}

function Z() {
  let e = w;
  if ((w = p.A.getChannelId()) === e) returnfalse;
  j(e), j(w)
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

function Q(e, t) {
  $(e.id), t && J(e)
}

function J(e) {
  R[e.id] = setTimeout(() => {
    let t = u.A.getChannel(e.id);
    null != t && o.h.dispatch({
      type: "THREAD_UPDATE",
      channel: t
    })
  }, (0, g.A)(e) - Date.now() + 1)
}

function $(e) {
  e in R && (clearTimeout(R[e]), delete R[e])
}

function ee(e, t, n, r) {
  let {
    guild_id: i,
    parent_id: s,
    id: o
  } = t;
  null != i && null != s && null != o && (i in e || (e[i] = {}), s in e[i] || (e[i][s] = {}), r && (e[i] = v(b({}, e[i]), {
    [s]: b({}, e[i][s])
  })), null === n ? (delete e[i][s][o], a().isEmpty(e[i][s]) && delete e[i][s]) : e[i][s][o] = n)
}

function et(e, t, n, r) {
  null == t || null == n || null == r || er(e, t, n, r) && (e[t] = v(b({}, e[t]), {
    [n]: b({}, e[t][n])
  }), delete e[t][n][r], a().isEmpty(e[t][n]) && delete e[t][n])
}

function en(e, t) {
  return er(e, t.guild_id, t.parent_id, t.id)
}

function er(e, t, n, r) {
  return t in e && n in e[t] && r in e[t][n]
}
let ei = {},
  ea = {},
  es = {},
  eo = {},
  el = {};
class ec extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(h.A, u.A, d.A, m.A, f.Ay, p.A), this.syncWith([p.A], Z)
  }
  hasActiveJoinedUnreadThreads(e, t) {
    return e in I && t in I[e]
  }
  getActiveUnjoinedThreadsForParent(e, t) {
    var n;
    return e in S && null != (n = S[e][t]) ? n : eo
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
    return null != (t = A[e]) ? t : ei
  }
  getActiveJoinedUnreadThreadsForGuild(e) {
    var t;
    return null != (t = I[e]) ? t : ei
  }
  getActiveJoinedUnreadThreadsForParent(e, t) {
    var n;
    return null != (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) ? n : es
  }
  getActiveJoinedRelevantThreadsForGuild(e) {
    var t;
    return null != (t = C[e]) ? t : ei
  }
  getActiveJoinedRelevantThreadsForParent(e, t) {
    var n;
    return null != (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) ? n : es
  }
  getActiveUnjoinedThreadsForGuild(e) {
    var t;
    return null != (t = S[e]) ? t : ea
  }
  getActiveUnjoinedUnreadThreadsForGuild(e) {
    var t;
    return null != (t = T[e]) ? t : ei
  }
  getActiveUnjoinedUnreadThreadsForParent(e, t) {
    var n;
    return null != (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) ? n : es
  }
  getNewThreadCountsForGuild(e) {
    var t;
    return null != (t = N[e]) ? t : el
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
    var n, r, i, s;
    return a().size(null != (n = null == (i = A[e]) ? true : i[t]) ? n : {}) + a().size(null != (r = null == (s = S[e]) ? true : s[t]) ? r : {})
  }
}
y(ec, "displayName", "ActiveJoinedThreadsStore");
let eu = new ec(Chunk73153.h, {
  CONNECTION_OPEN: P,
  OVERLAY_INITIALIZE: P,
  THREAD_LIST_SYNC: z,
  LOAD_THREADS_SUCCESS: P,
  LOAD_ARCHIVED_THREADS_SUCCESS: P,
  SEARCH_MESSAGES_SUCCESS: P,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: P,
  GUILD_CREATE: K,
  GUILD_DELETE: P,
  CURRENT_USER_UPDATE: P,
  THREAD_CREATE: U,
  THREAD_UPDATE: U,
  THREAD_DELETE: U,
  CHANNEL_UPDATES: G,
  CHANNEL_DELETE: F,
  THREAD_MEMBER_UPDATE: B,
  THREAD_MEMBERS_UPDATE: B,
  LOAD_MESSAGES_SUCCESS: H,
  MESSAGE_CREATE: H,
  MESSAGE_DELETE: H,
  MESSAGE_DELETE_BULK: H,
  MESSAGE_ACK: H,
  CHANNEL_ACK: H,
  CHANNEL_LOCAL_ACK: H,
  CHANNEL_SELECT: q,
  PASSIVE_UPDATE_V2: W,
  WINDOW_FOCUS: Y,
  UPDATE_CHANNEL_DIMENSIONS: Y,
  TRY_ACK: Y,
  BULK_ACK: Y
})
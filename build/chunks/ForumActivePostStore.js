/** Chunk was on web.js **/
/** chunk id: 238349, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  U: () => Z,
  Z: () => Q
}), require("./388685.js"), require("./642613.js");
var i, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk697988 = require("./697988.js"),
  Chunk683860 = require("./683860.js"),
  Chunk843991 = require("./843991.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk344185 = require("./344185.js"),
  Chunk144140 = require("./144140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk709054 = require("./709054.js"),
  Chunk882252 = require("./882252.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let O = [],
  v = null,
  I = null,
  T = new Set,
  S = Chunk683860.z.LATEST_ACTIVITY,
  A = Chunk697988.z.MATCH_SOME,
  C = 0,
  N = [],
  R = false,
  P = [],
  D = o().chain(O),
  w = o().chain(O),
  x = new Set,
  L = new Set;

function M(e) {
  var t;
  return null != (t = m.ZP.lastMessageId(e)) ? t : e
}

function j(e) {
  let t = _.Z.getCount(e);
  return null === t || 0 === t
}

function k(e) {
  return function(t, n) {
    return (0, b.yv)(t) ? false : (0, b.yv)(n) ? 1 : e === l.z.LATEST_ACTIVITY ? E.default.compare(M(n), M(t)) : E.default.compare(n, t)
  }
}

function U(e, t) {
  return function(n) {
    var r;
    let i = null == (r = h.Z.getChannel(n)) ? true : r.appliedTags;
    if (null == i || 0 === i.length) returnfalse;
    if (t === s.z.MATCH_SOME) return i.some(t => e.has(t));
    for (let t of e.values())
      if (!i.includes(t)) returnfalse;
    returntrue
  }
}

function G() {
  N = [], r = null, I = null, T = new Set, S = Chunk683860.z.LATEST_ACTIVITY, A = Chunk697988.z.MATCH_SOME, C = 0, P = [], D = o().chain(O), w = o().chain(O), L.clear(), x.clear()
}

function B() {
  var e;
  let t = Chunk944486.Z.getChannelId();
  if (null == exports || !(null == (e = Chunk592125.Z.getChannel(exports)) ? true : module.isForumLikeChannel())) return G(), false;
  F({
    refreshThreadIds: true
  })
}

function Z(e) {
  let t = h.Z.getChannel(e);
  return null == t ? [] : Object.values(f.Z.getThreadsForParent(t.guild_id, t.id)).map(e => {
    let {
      id: t
    } = e;
    return t
  }).sort(k(S))
}

function F(e) {
  let t = h.Z.getChannel(I);
  if (null == t) return;
  (null == e ? true : e.refreshThreadIds) && (P = Object.values(f.Z.getThreadsForParent(t.guild_id, t.id)).map(e => {
    let {
      id: t
    } = e;
    return t
  }), C = 0, R = true), 0 !== x.size && (P = P.filter(e => !x.has(e)), x.clear()), 0 !== L.size && (P = Array.from(new Set([...P, ...L])), L.clear()), ((null == e ? true : e.refreshThreadIds) || (null == e ? true : e.sortThreadIds)) && (w = o().chain(P).sort(k(l.z.LATEST_ACTIVITY)), D = o().chain(P).sort(k(l.z.CREATION_DATE)));
  let n = (S === l.z.LATEST_ACTIVITY ? w : D).value(),
    i = (N = 0 === T.size ? n : n.filter(U(T, A))).find(e => j(e));
  r = null == i ? null : i
}

function V(e) {
  var t;
  let {
    guildId: n
  } = e;
  if (null == I || n !== (null == (t = h.Z.getChannel(I)) ? true : t.guild_id)) returnfalse;
  F({
    refreshThreadIds: true
  })
}

function H(e) {
  let {
    channel: t
  } = e;
  if (null == t.parent_id || t.parent_id !== I) returnfalse;
  let n = (0, b.yv)(t.id),
    r = L.has(t.id);
  if (n && !r) L.add(t.id), F({
    sortThreadIds: true
  });
  else {
    if (n || !r) returnfalse;
    L.delete(t.id), F({
      sortThreadIds: true
    })
  }
}

function Y(e) {
  let {
    channel: t,
    isNewlyCreated: n
  } = e;
  if (null == t.parent_id || t.parent_id !== I || !n) returnfalse;
  t.ownerId !== p.default.getId() ? C++ : v = t.id
}

function W(e) {
  let {
    channel: t
  } = e;
  if (null == t.parent_id || t.parent_id !== I) returnfalse;
  x.add(t.id), F({
    sortThreadIds: true
  })
}

function K(e) {
  let {
    channel: t
  } = e;
  if (null == t.parent_id || t.parent_id !== I) returnfalse;
  G()
}

function z(e) {
  let {
    channelId: t
  } = e;
  if (null == t || t !== I) returnfalse;
  F({
    refreshThreadIds: true
  })
}

function q(e) {
  let {
    channelId: t
  } = e;
  if (null == t || t !== I) returnfalse;
  R = false
}
class X extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk344185.Z, Chunk314897.default, Chunk592125.Z, Chunk306680.ZP, Chunk944486.Z, Chunk144140.Z)
  }
  getNewThreadCount() {
    return C
  }
  getCanAckThreads() {
    return R
  }
  getThreadIds(e, t, n, r) {
    let i = e !== I,
      a = !(0, c.O)(n, T),
      o = t !== S,
      s = r !== A;
    return I = e, T = n, S = t, A = r, i ? F({
      refreshThreadIds: true
    }) : o ? F({
      sortThreadIds: true
    }) : (a || s) && F(), N
  }
  getCurrentThreadIds() {
    return N
  }
  getAndDeleteMostRecentUserCreatedThreadId() {
    let e = v;
    return v = null, module
  }
  getFirstNoReplyThreadId() {
    return r
  }
}
y(X, "displayName", "ForumActivePostStore");
let Q = new X(Chunk570140.Z, {
  CONNECTION_OPEN: B,
  OVERLAY_INITIALIZE: B,
  GUILD_CREATE: B,
  CHANNEL_SELECT: B,
  CHANNEL_DELETE: K,
  THREAD_LIST_SYNC: V,
  THREAD_CREATE: Y,
  THREAD_UPDATE: H,
  THREAD_DELETE: W,
  RESORT_THREADS: z,
  CHANNEL_ACK: q
})
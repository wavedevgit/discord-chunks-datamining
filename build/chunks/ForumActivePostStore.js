/** Chunk was on web.js **/
/** chunk id: 207777, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => X,
  S: () => V
}), require("./896048.js"), require("./638769.js");
var i, Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk392421 = require("./392421.js"),
  Chunk602137 = require("./602137.js"),
  Chunk357758 = require("./357758.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk970278 = require("./970278.js"),
  Chunk456874 = require("./456874.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk661191 = require("./661191.js"),
  Chunk767581 = require("./767581.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let O = [],
  v = null,
  A = null,
  I = new Set,
  S = Chunk602137.T.LATEST_ACTIVITY,
  T = Chunk392421.n.MATCH_SOME,
  C = 0,
  N = [],
  w = false,
  R = [],
  P = o().chain(O),
  D = o().chain(O),
  L = new Set,
  x = new Set;

function M(e) {
  var t;
  return null != (t = m.Ay.lastMessageId(e)) ? t : e
}

function j(e) {
  let t = p.A.getCount(e);
  return null === t || 0 === t
}

function k(e) {
  return function(t, n) {
    return (0, y.yr)(t) ? false : (0, y.yr)(n) ? 1 : e === l.T.LATEST_ACTIVITY ? E.default.compare(M(n), M(t)) : E.default.compare(n, t)
  }
}

function U(e, t) {
  return function(n) {
    var r;
    let i = null == (r = h.A.getChannel(n)) ? true : r.appliedTags;
    if (null == i || 0 === i.length) returnfalse;
    if (t === s.n.MATCH_SOME) return i.some(t => e.has(t));
    for (let t of e.values())
      if (!i.includes(t)) returnfalse;
    returntrue
  }
}

function G() {
  N = [], r = null, A = null, I = new Set, S = l.T.LATEST_ACTIVITY, T = s.n.MATCH_SOME, C = 0, R = [], P = o().chain(O), D = o().chain(O), x.clear(), L.clear()
}

function F() {
  var e;
  let t = g.A.getChannelId();
  if (null == t || !(null == (e = h.A.getChannel(t)) ? true : e.isForumLikeChannel())) return G(), false;
  B({
    refreshThreadIds: true
  })
}

function V(e) {
  let t = h.A.getChannel(e);
  return null == t ? [] : Object.values(f.A.getThreadsForParent(t.guild_id, t.id)).map(e => {
    let {
      id: t
    } = e;
    return t
  }).sort(k(S))
}

function B(e) {
  let t = h.A.getChannel(A);
  if (null == t) return;
  (null == e ? true : e.refreshThreadIds) && (R = Object.values(f.A.getThreadsForParent(t.guild_id, t.id)).map(e => {
    let {
      id: t
    } = e;
    return t
  }), C = 0, w = true), 0 !== L.size && (R = R.filter(e => !L.has(e)), L.clear()), 0 !== x.size && (R = Array.from(new Set([...R, ...x])), x.clear()), ((null == e ? true : e.refreshThreadIds) || (null == e ? true : e.sortThreadIds)) && (D = o().chain(R).sort(k(l.T.LATEST_ACTIVITY)), P = o().chain(R).sort(k(l.T.CREATION_DATE)));
  let n = (S === l.T.LATEST_ACTIVITY ? D : P).value(),
    i = (N = 0 === I.size ? n : n.filter(U(I, T))).find(e => j(e));
  r = null == i ? null : i
}

function H(e) {
  var t;
  let {
    guildId: n
  } = e;
  if (null == A || n !== (null == (t = h.A.getChannel(A)) ? true : t.guild_id)) returnfalse;
  B({
    refreshThreadIds: true
  })
}

function Y(e) {
  let {
    channel: t
  } = e;
  if (null == t.parent_id || t.parent_id !== A) returnfalse;
  let n = (0, y.yr)(t.id),
    r = x.has(t.id);
  if (n && !r) x.add(t.id), B({
    sortThreadIds: true
  });
  else {
    if (n || !r) returnfalse;
    x.delete(t.id), B({
      sortThreadIds: true
    })
  }
}

function W(e) {
  let {
    channel: t,
    isNewlyCreated: n
  } = e;
  if (null == t.parent_id || t.parent_id !== A || !n) returnfalse;
  t.ownerId !== _.default.getId() ? C++ : v = t.id
}

function K(e) {
  let {
    channel: t
  } = e;
  if (null == t.parent_id || t.parent_id !== A) returnfalse;
  L.add(t.id), B({
    sortThreadIds: true
  })
}

function z(e) {
  let {
    channel: t
  } = e;
  if (null == t.parent_id || t.parent_id !== A) returnfalse;
  G()
}

function q(e) {
  let {
    channelId: t
  } = e;
  if (null == t || t !== A) returnfalse;
  B({
    refreshThreadIds: true
  })
}

function Z(e) {
  let {
    channelId: t
  } = e;
  if (null == t || t !== A) returnfalse;
  w = false
}
class Q extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(f.A, _.default, h.A, m.Ay, g.A, p.A)
  }
  getNewThreadCount() {
    return C
  }
  getCanAckThreads() {
    return w
  }
  getThreadIds(e, t, n, r) {
    let i = e !== A,
      a = !(0, c._)(n, I),
      o = t !== S,
      s = r !== T;
    return A = e, I = n, S = t, T = r, i ? B({
      refreshThreadIds: true
    }) : o ? B({
      sortThreadIds: true
    }) : (a || s) && B(), N
  }
  getCurrentThreadIds() {
    return N
  }
  getAndDeleteMostRecentUserCreatedThreadId() {
    let e = v;
    return v = null, e
  }
  getFirstNoReplyThreadId() {
    return r
  }
}
b(Q, "displayName", "ForumActivePostStore");
let X = new Q(Chunk73153.h, {
  CONNECTION_OPEN: F,
  OVERLAY_INITIALIZE: F,
  GUILD_CREATE: F,
  CHANNEL_SELECT: F,
  CHANNEL_DELETE: z,
  THREAD_LIST_SYNC: H,
  THREAD_CREATE: W,
  THREAD_UPDATE: Y,
  THREAD_DELETE: K,
  RESORT_THREADS: q,
  CHANNEL_ACK: Z
})
/** Chunk was on web.js **/
/** chunk id: 207777, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => Q,
  S: () => F
}), require("./896048.js"), require("./638769.js");
var i, Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
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

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let O = [],
  A = null,
  v = null,
  S = new Set,
  I = Chunk602137.T.LATEST_ACTIVITY,
  T = Chunk392421.n.MATCH_SOME,
  C = 0,
  N = [],
  R = false,
  w = [],
  P = s().chain(O),
  D = s().chain(O),
  x = new Set,
  L = new Set;

function j(e) {
  var t;
  return null != (t = m.Ay.lastMessageId(e)) ? t : e
}

function M(e) {
  let t = p.A.getCount(e);
  return null === t || 0 === t
}

function k(e) {
  return function(t, n) {
    return (0, b.yr)(t) ? false : (0, b.yr)(n) ? 1 : e === l.T.LATEST_ACTIVITY ? E.default.compare(j(n), j(t)) : E.default.compare(n, t)
  }
}

function U(e, t) {
  return function(n) {
    var r;
    let i = null == (r = h.A.getChannel(n)) ? true : r.appliedTags;
    if (null == i || 0 === i.length) returnfalse;
    if (t === o.n.MATCH_SOME) return i.some(t => e.has(t));
    for (let t of e.values())
      if (!i.includes(t)) returnfalse;
    returntrue
  }
}

function G() {
  N = [], r = null, v = null, S = new Set, I = l.T.LATEST_ACTIVITY, T = o.n.MATCH_SOME, C = 0, w = [], P = s().chain(O), D = s().chain(O), L.clear(), x.clear()
}

function V() {
  var e;
  let t = g.A.getChannelId();
  if (null == t || !(null == (e = h.A.getChannel(t)) ? true : e.isForumLikeChannel())) return G(), false;
  B({
    refreshThreadIds: true
  })
}

function F(e) {
  let t = h.A.getChannel(e);
  return null == t ? [] : Object.values(f.A.getThreadsForParent(t.guild_id, t.id)).map(e => {
    let {
      id: t
    } = e;
    return t
  }).sort(k(I))
}

function B(e) {
  let t = h.A.getChannel(v);
  if (null == t) return;
  (null == e ? true : e.refreshThreadIds) && (w = Object.values(f.A.getThreadsForParent(t.guild_id, t.id)).map(e => {
    let {
      id: t
    } = e;
    return t
  }), C = 0, R = true), 0 !== x.size && (w = w.filter(e => !x.has(e)), x.clear()), 0 !== L.size && (w = Array.from(new Set([...w, ...L])), L.clear()), ((null == e ? true : e.refreshThreadIds) || (null == e ? true : e.sortThreadIds)) && (D = s().chain(w).sort(k(l.T.LATEST_ACTIVITY)), P = s().chain(w).sort(k(l.T.CREATION_DATE)));
  let n = (I === l.T.LATEST_ACTIVITY ? D : P).value(),
    i = (N = 0 === S.size ? n : n.filter(U(S, T))).find(e => M(e));
  r = null == i ? null : i
}

function H(e) {
  var t;
  let {
    guildId: n
  } = e;
  if (null == v || n !== (null == (t = h.A.getChannel(v)) ? true : t.guild_id)) returnfalse;
  B({
    refreshThreadIds: true
  })
}

function Y(e) {
  let {
    channel: t
  } = e;
  if (null == t.parent_id || t.parent_id !== v) returnfalse;
  let n = (0, b.yr)(t.id),
    r = L.has(t.id);
  if (n && !r) L.add(t.id), B({
    sortThreadIds: true
  });
  else {
    if (n || !r) returnfalse;
    L.delete(t.id), B({
      sortThreadIds: true
    })
  }
}

function W(e) {
  let {
    channel: t,
    isNewlyCreated: n
  } = e;
  if (null == t.parent_id || t.parent_id !== v || !n) returnfalse;
  t.ownerId !== _.default.getId() ? C++ : A = t.id
}

function K(e) {
  let {
    channel: t
  } = e;
  if (null == t.parent_id || t.parent_id !== v) returnfalse;
  x.add(t.id), B({
    sortThreadIds: true
  })
}

function z(e) {
  let {
    channel: t
  } = e;
  if (null == t.parent_id || t.parent_id !== v) returnfalse;
  G()
}

function q(e) {
  let {
    channelId: t
  } = e;
  if (null == t || t !== v) returnfalse;
  B({
    refreshThreadIds: true
  })
}

function X(e) {
  let {
    channelId: t
  } = e;
  if (null == t || t !== v) returnfalse;
  R = false
}
class Z extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(f.A, _.default, h.A, m.Ay, g.A, p.A)
  }
  getNewThreadCount() {
    return C
  }
  getCanAckThreads() {
    return R
  }
  getThreadIds(e, t, n, r) {
    let i = e !== v,
      a = !(0, c._)(n, S),
      s = t !== I,
      o = r !== T;
    return v = e, S = n, I = t, T = r, i ? B({
      refreshThreadIds: true
    }) : s ? B({
      sortThreadIds: true
    }) : (a || o) && B(), N
  }
  getCurrentThreadIds() {
    return N
  }
  getAndDeleteMostRecentUserCreatedThreadId() {
    let e = A;
    return A = null, e
  }
  getFirstNoReplyThreadId() {
    return r
  }
}
y(Z, "displayName", "ForumActivePostStore");
let Q = new Z(Chunk73153.h, {
  CONNECTION_OPEN: V,
  OVERLAY_INITIALIZE: V,
  GUILD_CREATE: V,
  CHANNEL_SELECT: V,
  CHANNEL_DELETE: z,
  THREAD_LIST_SYNC: H,
  THREAD_CREATE: W,
  THREAD_UPDATE: Y,
  THREAD_DELETE: K,
  RESORT_THREADS: q,
  CHANNEL_ACK: X
})
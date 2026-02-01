/** Chunk was on web.js **/
/** chunk id: 45494, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => H,
  m: () => b
}), require("./896048.js"), require("./638769.js"), require("./264879.js");
var i, Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk392421 = require("./392421.js"),
  Chunk602137 = require("./602137.js"),
  Chunk357758 = require("./357758.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk767581 = require("./767581.js"),
  Chunk853742 = require("./853742.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk222823 = require("./222823.js"),
  Chunk661191 = require("./661191.js"),
  Chunk152007 = require("./152007.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = 25,
  O = false,
  v = true,
  A = false,
  I = false,
  S = null,
  T = Chunk602137.T.LATEST_ACTIVITY,
  C = [],
  N = 0,
  w = Chunk392421.n.MATCH_SOME;

function R() {
  O = false, v = true, A = false, I = false, S = null, T = l.T.LATEST_ACTIVITY, r = new Set, N = 0, C = [], w = s.n.MATCH_SOME
}

function P(e, t) {
  return t === l.T.LATEST_ACTIVITY ? m.Ay.lastMessageId(e.id) : e.id
}

function D(e) {
  e.channelId === S && e.sortOrder === T && (0, c._)(e.tagFilter, r) && e.tagSetting === w || R(), S = e.channelId, T = e.sortOrder, r = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), w = e.tagSetting, O = true, v = false
}

function L(e) {
  if (e.channelId !== S || e.sortOrder !== T || !(0, c._)(e.tagFilter, r) || e.tagSetting !== w) returnfalse;
  let t = e.threads.filter(e => _.A_.has(e.type)).map(e => e.id);
  C = C.concat(t);
  let n = h.A.getChannel(S);
  null != n && n.isForumLikeChannel() && (0, p._Z)({
    guildId: n.guild_id,
    channelId: n.id,
    numArchivedThreads: C.length,
    hasMoreThreads: e.hasMore,
    filterTagIds: Array.from(e.tagFilter),
    sortOrder: e.sortOrder
  }), M(), A = e.hasMore, N = e.offset + b, O = false, v = false
}

function x(e) {
  return (null == S || null == e.channelId || S === e.channelId) && M()
}

function M() {
  if (null == S) returnfalse;
  let e = !A,
    t = h.A.getChannel(C[C.length - 1]),
    n = null == t ? null : P(t, T);
  C = o()(h.A.getAllThreadsForParent(S)).filter(e => e.isArchivedThread()).filter(t => {
    if (0 !== r.size) {
      var i, a;
      if (w === s.n.MATCH_SOME) {
        if ((null == (i = t.appliedTags) ? true : i.some(e => r.has(e))) !== true) returnfalse
      } else if (w === s.n.MATCH_ALL) {
        for (let e of r.values())
          if ((null == (a = t.appliedTags) ? true : a.includes(e)) !== true) returnfalse
      }
    }
    if (e || null == n) returntrue;
    {
      let e = null == t ? null : P(t, T);
      return null != e && g.default.compare(e, n) >= 0
    }
  }).sort((e, t) => g.default.compare(P(e, T), P(t, T))).map(e => e.id).reverse().value()
}

function j(e) {
  if (e.channelId !== S || e.sortOrder !== T || !(0, c._)(e.tagFilter, r) || e.tagSetting !== w) returnfalse;
  O = false, I = true, v = false
}

function k(e) {
  if (e.channel.id !== S) returnfalse;
  R()
}

function U(e) {
  if (!(C.indexOf(e) >= 0)) returnfalse;
  C = C.filter(t => t !== e)
}

function G(e) {
  let {
    channel: t
  } = e;
  return U(t.id)
}

function V(e) {
  let {
    channel: t
  } = e;
  return S === t.parent_id && !!(0, f.yr)(t.id) && void U(t.id)
}
let F = [];
class B extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(h.A, E.A, m.Ay)
  }
  get canLoadMore() {
    return A && !O && !I
  }
  get nextOffset() {
    return N
  }
  get isInitialLoad() {
    return v
  }
  isLoading(e, t, n, i) {
    return S === e && T === t && (0, c._)(r, n) && w === i ? O : (R(), false)
  }
  getThreads(e, t, n, i) {
    return S === e && T === t && (0, c._)(r, n) && w === i ? C : F
  }
}
y(B, "displayName", "ArchivedThreadsStore");
let H = new B(Chunk73153.h, {
  CONNECTION_OPEN: R,
  THREAD_DELETE: G,
  THREAD_UPDATE: V,
  CHANNEL_DELETE: k,
  LOAD_ARCHIVED_THREADS: D,
  LOAD_ARCHIVED_THREADS_SUCCESS: L,
  LOAD_ARCHIVED_THREADS_FAIL: j,
  RESORT_THREADS: x
})
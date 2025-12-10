/** Chunk was on web.js **/
/** chunk id: 920303, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  I: () => y,
  Z: () => V
}), require("./388685.js"), require("./642613.js"), require("./583741.js");
var i, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk697988 = require("./697988.js"),
  Chunk683860 = require("./683860.js"),
  Chunk843991 = require("./843991.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk882252 = require("./882252.js"),
  Chunk228392 = require("./228392.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk306680 = require("./306680.js"),
  Chunk709054 = require("./709054.js"),
  Chunk569471 = require("./569471.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = 25,
  O = false,
  v = true,
  S = false,
  I = false,
  T = null,
  C = Chunk683860.z.LATEST_ACTIVITY,
  A = [],
  N = 0,
  P = Chunk697988.z.MATCH_SOME;

function R() {
  O = false, v = true, S = false, I = false, T = null, C = Chunk683860.z.LATEST_ACTIVITY, r = new Set, N = 0, A = [], P = Chunk697988.z.MATCH_SOME
}

function w(e, t) {
  return t === l.z.LATEST_ACTIVITY ? h.ZP.lastMessageId(e.id) : e.id
}

function D(e) {
  e.channelId === T && e.sortOrder === C && (0, c.O)(e.tagFilter, r) && e.tagSetting === P || R(), T = e.channelId, C = e.sortOrder, r = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), P = e.tagSetting, O = true, v = false
}

function x(e) {
  if (e.channelId !== T || e.sortOrder !== C || !(0, c.O)(e.tagFilter, r) || e.tagSetting !== P) returnfalse;
  let t = e.threads.filter(e => _.AW.has(e.type)).map(e => e.id);
  A = A.concat(t);
  let n = m.Z.getChannel(T);
  null != n && n.isForumLikeChannel() && (0, p.Hr)({
    guildId: n.guild_id,
    channelId: n.id,
    numArchivedThreads: A.length,
    hasMoreThreads: e.hasMore,
    filterTagIds: Array.from(e.tagFilter),
    sortOrder: e.sortOrder
  }), j(), S = e.hasMore, N = e.offset + y, O = false, v = false
}

function L(e) {
  return (null == T || null == e.channelId || T === e.channelId) && j()
}

function j() {
  if (null == T) returnfalse;
  let e = !S,
    t = Chunk592125.Z.getChannel(A[A.length - 1]),
    n = null == exports ? null : w(exports, C);
  A = o()(Chunk592125.Z.getAllThreadsForParent(T)).filter(e => e.isArchivedThread()).filter(t => {
    if (0 !== r.size) {
      var i, a;
      if (P === s.z.MATCH_SOME) {
        if ((null == (i = t.appliedTags) ? true : i.some(e => r.has(e))) !== true) returnfalse
      } else if (P === s.z.MATCH_ALL) {
        for (let e of r.values())
          if ((null == (a = t.appliedTags) ? true : a.includes(e)) !== true) returnfalse
      }
    }
    if (e || null == n) returntrue;
    {
      let e = null == t ? null : w(t, C);
      return null != e && g.default.compare(e, n) >= 0
    }
  }).sort((e, t) => g.default.compare(w(e, C), w(t, C))).map(e => e.id).reverse().value()
}

function M(e) {
  if (e.channelId !== T || e.sortOrder !== C || !(0, c.O)(e.tagFilter, r) || e.tagSetting !== P) returnfalse;
  O = false, I = true, v = false
}

function k(e) {
  if (e.channel.id !== T) returnfalse;
  R()
}

function U(e) {
  if (!(A.indexOf(e) >= 0)) returnfalse;
  A = A.filter(t => t !== e)
}

function G(e) {
  let {
    channel: t
  } = e;
  return U(t.id)
}

function Z(e) {
  let {
    channel: t
  } = e;
  return T === t.parent_id && !!(0, f.yv)(t.id) && void U(t.id)
}
let B = [];
class F extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk569471.Z, Chunk306680.ZP)
  }
  get canLoadMore() {
    return S && !O && !I
  }
  get nextOffset() {
    return N
  }
  get isInitialLoad() {
    return v
  }
  isLoading(e, t, n, i) {
    return T === e && C === t && (0, c.O)(r, n) && P === i ? O : (R(), false)
  }
  getThreads(e, t, n, i) {
    return T === e && C === t && (0, c.O)(r, n) && P === i ? A : B
  }
}
b(F, "displayName", "ArchivedThreadsStore");
let V = new F(Chunk570140.Z, {
  CONNECTION_OPEN: R,
  THREAD_DELETE: G,
  THREAD_UPDATE: Z,
  CHANNEL_DELETE: k,
  LOAD_ARCHIVED_THREADS: D,
  LOAD_ARCHIVED_THREADS_SUCCESS: x,
  LOAD_ARCHIVED_THREADS_FAIL: M,
  RESORT_THREADS: L
})
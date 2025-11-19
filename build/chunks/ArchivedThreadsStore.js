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
  I = false,
  T = false,
  S = null,
  A = Chunk683860.z.LATEST_ACTIVITY,
  C = [],
  N = 0,
  R = Chunk697988.z.MATCH_SOME;

function P() {
  O = false, v = true, I = false, T = false, S = null, A = Chunk683860.z.LATEST_ACTIVITY, r = new Set, N = 0, C = [], R = Chunk697988.z.MATCH_SOME
}

function D(e, t) {
  return t === l.z.LATEST_ACTIVITY ? m.ZP.lastMessageId(e.id) : e.id
}

function w(e) {
  e.channelId === S && e.sortOrder === A && (0, c.O)(e.tagFilter, r) && e.tagSetting === R || P(), S = e.channelId, A = e.sortOrder, r = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), R = e.tagSetting, O = true, v = false
}

function L(e) {
  if (e.channelId !== S || e.sortOrder !== A || !(0, c.O)(e.tagFilter, r) || e.tagSetting !== R) returnfalse;
  let t = e.threads.filter(e => p.AW.has(e.type)).map(e => e.id);
  C = C.concat(t);
  let n = h.Z.getChannel(S);
  null != n && n.isForumLikeChannel() && (0, _.Hr)({
    guildId: n.guild_id,
    channelId: n.id,
    numArchivedThreads: C.length,
    hasMoreThreads: e.hasMore,
    filterTagIds: Array.from(e.tagFilter),
    sortOrder: e.sortOrder
  }), M(), I = e.hasMore, N = e.offset + y, O = false, v = false
}

function x(e) {
  return (null == S || null == e.channelId || S === e.channelId) && M()
}

function M() {
  if (null == S) returnfalse;
  let e = !I,
    t = Chunk592125.Z.getChannel(C[C.length - 1]),
    n = null == exports ? null : D(exports, A);
  C = o()(Chunk592125.Z.getAllThreadsForParent(S)).filter(e => e.isArchivedThread()).filter(t => {
    if (0 !== r.size) {
      var i, a;
      if (R === s.z.MATCH_SOME) {
        if ((null == (i = t.appliedTags) ? true : i.some(e => r.has(e))) !== true) returnfalse
      } else if (R === s.z.MATCH_ALL) {
        for (let e of r.values())
          if ((null == (a = t.appliedTags) ? true : a.includes(e)) !== true) returnfalse
      }
    }
    if (e || null == n) returntrue;
    {
      let e = null == t ? null : D(t, A);
      return null != e && g.default.compare(e, n) >= 0
    }
  }).sort((e, t) => g.default.compare(D(e, A), D(t, A))).map(e => e.id).reverse().value()
}

function j(e) {
  if (e.channelId !== S || e.sortOrder !== A || !(0, c.O)(e.tagFilter, r) || e.tagSetting !== R) returnfalse;
  O = false, T = true, v = false
}

function k(e) {
  if (e.channel.id !== S) returnfalse;
  P()
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

function B(e) {
  let {
    channel: t
  } = e;
  return S === t.parent_id && !!(0, f.yv)(t.id) && void U(t.id)
}
let Z = [];
class F extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk569471.Z, Chunk306680.ZP)
  }
  get canLoadMore() {
    return I && !O && !T
  }
  get nextOffset() {
    return N
  }
  get isInitialLoad() {
    return v
  }
  isLoading(e, t, n, i) {
    return S === e && A === t && (0, c.O)(r, n) && R === i ? O : (P(), false)
  }
  getThreads(e, t, n, i) {
    return S === e && A === t && (0, c.O)(r, n) && R === i ? C : Z
  }
}
b(F, "displayName", "ArchivedThreadsStore");
let V = new F(Chunk570140.Z, {
  CONNECTION_OPEN: P,
  THREAD_DELETE: G,
  THREAD_UPDATE: B,
  CHANNEL_DELETE: k,
  LOAD_ARCHIVED_THREADS: w,
  LOAD_ARCHIVED_THREADS_SUCCESS: L,
  LOAD_ARCHIVED_THREADS_FAIL: j,
  RESORT_THREADS: x
})
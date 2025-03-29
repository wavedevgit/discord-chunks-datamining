/** Chunk was on web.js **/
"use strict";
let r;
n.d(t, {
  I: () => b,
  Z: () => F
}), n(47120), n(230036), n(978209);
var i, o = n(392711),
  a = n.n(o),
  s = n(683860),
  l = n(442837),
  c = n(570140),
  u = n(882252),
  d = n(228392),
  f = n(131704),
  _ = n(592125),
  p = n(306680),
  h = n(823379),
  m = n(709054),
  g = n(569471);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let b = 25,
  v = !1,
  y = !0,
  O = !1,
  I = !1,
  S = null,
  T = s.z.LATEST_ACTIVITY,
  A = [],
  N = 0;

function C() {
  v = !1, y = !0, O = !1, I = !1, S = null, T = s.z.LATEST_ACTIVITY, r = new Set, N = 0, A = []
}

function R(e, t) {
  return t === s.z.LATEST_ACTIVITY ? p.ZP.lastMessageId(e.id) : e.id
}

function P(e) {
  e.channelId === S && e.sortOrder === T && (0, h.OL)(e.tagFilter, r) || C(), S = e.channelId, T = e.sortOrder, r = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), v = !0, y = !1
}

function w(e) {
  if (e.channelId !== S || e.sortOrder !== T || !(0, h.OL)(e.tagFilter, r)) return !1;
  let t = e.threads.filter(e => f.AW.has(e.type)).map(e => e.id);
  A = A.concat(t);
  let n = _.Z.getChannel(S);
  null != n && n.isForumLikeChannel() && (0, d.Hr)({
    guildId: n.guild_id,
    channelId: n.id,
    numArchivedThreads: A.length,
    hasMoreThreads: e.hasMore,
    filterTagIds: Array.from(e.tagFilter),
    sortOrder: e.sortOrder
  }), L(), O = e.hasMore, N = e.offset + b, v = !1, y = !1
}

function D(e) {
  return (null == S || null == e.channelId || S === e.channelId) && L()
}

function L() {
  if (null == S) return !1;
  let e = !O,
    t = _.Z.getChannel(A[A.length - 1]),
    n = null == t ? null : R(t, T);
  A = a()(_.Z.getAllThreadsForParent(S)).filter(e => e.isArchivedThread()).filter(t => {
    var i;
    if (0 !== r.size && (null === (i = t.appliedTags) || void 0 === i ? void 0 : i.some(e => r.has(e))) !== !0) return !1;
    if (e || null == n) return !0;
    {
      let e = null == t ? null : R(t, T);
      return null != e && m.default.compare(e, n) >= 0
    }
  }).sort((e, t) => m.default.compare(R(e, T), R(t, T))).map(e => e.id).reverse().value()
}

function x(e) {
  if (e.channelId !== S || e.sortOrder !== T || !(0, h.OL)(e.tagFilter, r)) return !1;
  v = !1, I = !0, y = !1
}

function M(e) {
  if (e.channel.id !== S) return !1;
  C()
}

function k(e) {
  if (!(A.indexOf(e) >= 0)) return !1;
  A = A.filter(t => t !== e)
}

function j(e) {
  let {
    channel: t
  } = e;
  return k(t.id)
}

function U(e) {
  let {
    channel: t
  } = e;
  return S === t.parent_id && !!(0, u.yv)(t.id) && void k(t.id)
}
let G = [];
class B extends(i = l.ZP.Store) {
  initialize() {
    this.waitFor(_.Z, g.Z, p.ZP)
  }
  get canLoadMore() {
    return O && !v && !I
  }
  get nextOffset() {
    return N
  }
  get isInitialLoad() {
    return y
  }
  isLoading(e, t, n) {
    return S === e && T === t && (0, h.OL)(r, n) ? v : (C(), !1)
  }
  getThreads(e, t, n) {
    return S === e && T === t && (0, h.OL)(r, n) ? A : G
  }
}
E(B, "displayName", "ArchivedThreadsStore");
let F = new B(c.Z, {
  CONNECTION_OPEN: C,
  THREAD_DELETE: j,
  THREAD_UPDATE: U,
  CHANNEL_DELETE: M,
  LOAD_ARCHIVED_THREADS: P,
  LOAD_ARCHIVED_THREADS_SUCCESS: w,
  LOAD_ARCHIVED_THREADS_FAIL: x,
  RESORT_THREADS: D
})
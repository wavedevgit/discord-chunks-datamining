/** Chunk was on 90508 **/
t.d(n, {
  Z: () => m
}), t(47120);
var r, l, u, i = t(512722),
  o = t.n(i),
  a = t(442837),
  d = t(570140),
  s = t(344185),
  c = t(592125),
  f = t(306680);
let g = {},
  v = new Set;
class Z extends(r = a.ZP.Store) {
  initialize() {
    this.waitFor(s.Z, c.Z, f.ZP)
  }
  getCount(e) {
    return g[e]
  }
  getThreadIdsMissingCounts(e, n) {
    return o()(s.Z.hasLoaded(e), "must wait for THREAD_LIST_SYNC before calling this"), n.filter(e => !(e in g) && !v.has(e))
  }
}
u = "ForumPostUnreadCountStore", (l = "displayName") in Z ? Object.defineProperty(Z, l, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : Z[l] = u;
let m = new Z(d.Z, {
  CONNECTION_OPEN: function() {
    g = {}, v = new Set
  },
  THREAD_CREATE: function(e) {
    let {
      channel: n,
      isNewlyCreated: t
    } = e;
    if (!t || !s.Z.hasLoaded(n.guild_id)) return !1;
    g[n.id] = 0
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: n,
      optimistic: t,
      isPushNotification: r
    } = e;
    if (t || r || !(n in g)) return !1;
    g[n]++
  },
  FORUM_UNREADS: function(e) {
    let {
      threads: n
    } = e;
    n.forEach(e => {
      null != e.count && (g[e.threadId] = e.count)
    })
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: n
    } = e;
    if (!(n in g)) {
      let e = c.Z.getChannel(n),
        t = c.Z.getChannel(null == e ? void 0 : e.parent_id);
      if (!(null == t ? void 0 : t.isForumLikeChannel())) return !1
    }
    g[n] = f.ZP.getUnreadCount(n)
  },
  REQUEST_FORUM_UNREADS: function(e) {
    let {
      threads: n
    } = e;
    n.forEach(e => {
      let {
        threadId: n
      } = e;
      return v.add(n)
    })
  }
})
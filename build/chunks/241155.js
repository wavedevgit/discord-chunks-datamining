/** Chunk was on 89783 **/
e.d(n, {
  Z: () => D
}), e(388685);
var i, l, r, d = e(392711),
  a = e.n(d),
  s = e(442837),
  _ = e(570140),
  u = e(924301),
  o = e(601964),
  p = e(75666);
let E = !1,
  g = {},
  c = {},
  I = {},
  T = t => (I[t.guild_scheduled_event.id] = new o.ZP(t.guild_scheduled_event.guild), c[t.guild_scheduled_event.id] = t.guild_scheduled_event, {
    channelId: t.directory_channel_id,
    scheduledEventId: t.entity_id,
    type: p.C2.GUILD_SCHEDULED_EVENT,
    authorId: t.author_id,
    createdAt: t.created_at
  });
class O extends(i = s.ZP.Store) {
  isFetching() {
    return E
  }
  getEventDirectoryEntries(t) {
    if (null != t) return g[t]
  }
  getCachedGuildByEventId(t) {
    var n;
    return null != (n = I[t]) ? n : void 0
  }
  getCachedGuildScheduledEventById(t) {
    var n;
    return null != (n = c[t]) ? n : void 0
  }
}
r = "EventDirectoryStore", (l = "displayName") in O ? Object.defineProperty(O, l, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : O[l] = r;
let D = new O(_.Z, {
  EVENT_DIRECTORY_FETCH_START: function() {
    E = !0
  },
  EVENT_DIRECTORY_FETCH_SUCCESS: function(t) {
    let {
      channelId: n,
      entries: e
    } = t;
    E = !1;
    let i = a().sortBy([...e], [function(t) {
        return (0, u.CQ)(t.guild_scheduled_event)
      }]),
      l = a().map(i, T);
    g[n] = l
  },
  EVENT_DIRECTORY_FETCH_FAILURE: function() {
    E = !1
  }
})
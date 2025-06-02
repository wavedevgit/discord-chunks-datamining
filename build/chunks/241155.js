/** Chunk was on 89783 **/
e.d(n, {
  Z: () => m
}), e(388685);
var i, l, r, d = e(392711),
  a = e.n(d),
  _ = e(442837),
  s = e(570140),
  u = e(924301),
  p = e(601964),
  o = e(75666);
let g = !1,
  I = {},
  c = {},
  T = {},
  E = t => (T[t.guild_scheduled_event.id] = new p.ZP(t.guild_scheduled_event.guild), c[t.guild_scheduled_event.id] = t.guild_scheduled_event, {
    channelId: t.directory_channel_id,
    scheduledEventId: t.entity_id,
    type: o.C2.GUILD_SCHEDULED_EVENT,
    authorId: t.author_id,
    createdAt: t.created_at
  });
class U extends(i = _.ZP.Store) {
  isFetching() {
    return g
  }
  getEventDirectoryEntries(t) {
    if (null != t) return I[t]
  }
  getCachedGuildByEventId(t) {
    var n;
    return null != (n = T[t]) ? n : void 0
  }
  getCachedGuildScheduledEventById(t) {
    var n;
    return null != (n = c[t]) ? n : void 0
  }
}
r = "EventDirectoryStore", (l = "displayName") in U ? Object.defineProperty(U, l, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : U[l] = r;
let m = new U(s.Z, {
  EVENT_DIRECTORY_FETCH_START: function() {
    g = !0
  },
  EVENT_DIRECTORY_FETCH_SUCCESS: function(t) {
    let {
      channelId: n,
      entries: e
    } = t;
    g = !1;
    let i = a().sortBy([...e], [function(t) {
        return (0, u.CQ)(t.guild_scheduled_event)
      }]),
      l = a().map(i, E);
    I[n] = l
  },
  EVENT_DIRECTORY_FETCH_FAILURE: function() {
    g = !1
  }
})
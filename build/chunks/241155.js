/** Chunk was on 84181 **/
n.d(t, {
  Z: () => U
}), n(47120);
var i, r, d, a = n(392711),
  l = n.n(a),
  _ = n(442837),
  s = n(570140),
  p = n(924301),
  u = n(601964),
  o = n(75666);
let I = !1,
  g = {},
  N = {},
  E = {},
  c = e => (E[e.guild_scheduled_event.id] = new u.ZP(e.guild_scheduled_event.guild), N[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
    channelId: e.directory_channel_id,
    scheduledEventId: e.entity_id,
    type: o.C2.GUILD_SCHEDULED_EVENT,
    authorId: e.author_id,
    createdAt: e.created_at
  });
class T extends(i = _.ZP.Store) {
  isFetching() {
    return I
  }
  getEventDirectoryEntries(e) {
    if (null != e) return g[e]
  }
  getCachedGuildByEventId(e) {
    var t;
    return null !== (t = E[e]) && void 0 !== t ? t : void 0
  }
  getCachedGuildScheduledEventById(e) {
    var t;
    return null !== (t = N[e]) && void 0 !== t ? t : void 0
  }
}
d = "EventDirectoryStore", (r = "displayName") in T ? Object.defineProperty(T, r, {
  value: d,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : T[r] = d;
let U = new T(s.Z, {
  EVENT_DIRECTORY_FETCH_START: function() {
    I = !0
  },
  EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      entries: n
    } = e;
    I = !1;
    let i = l().sortBy([...n], [function(e) {
        return (0, p.CQ)(e.guild_scheduled_event)
      }]),
      r = l().map(i, c);
    g[t] = r
  },
  EVENT_DIRECTORY_FETCH_FAILURE: function() {
    I = !1
  }
})
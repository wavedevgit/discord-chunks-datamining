/** Chunk was on 64099 **/
/** chunk id: 241155, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var i, d, Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk924301 = require("./924301.js"),
  Chunk411198 = require("./411198.js"),
  Chunk75666 = require("./75666.js");
let p = false,
  E = {},
  I = {},
  u = {},
  T = t => (u[t.guild_scheduled_event.id] = (0, o.Q0)(t.guild_scheduled_event.guild), I[t.guild_scheduled_event.id] = t.guild_scheduled_event, {
    channelId: t.directory_channel_id,
    scheduledEventId: t.entity_id,
    type: c.C2.GUILD_SCHEDULED_EVENT,
    authorId: t.author_id,
    createdAt: t.created_at
  });
class g extends(i = Chunk442837.ZP.Store) {
  isFetching() {
    return p
  }
  getEventDirectoryEntries(t) {
    if (null != t) return E[t]
  }
  getCachedGuildByEventId(t) {
    var n;
    return null != (n = u[t]) ? n : true
  }
  getCachedGuildScheduledEventById(t) {
    var n;
    return null != (n = I[t]) ? n : true
  }
}(d = "displayName") in g ? Object.defineProperty(g, d, {
  value: "EventDirectoryStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : g[d] = "EventDirectoryStore";
let U = new g(Chunk570140.Z, {
  EVENT_DIRECTORY_FETCH_START: function() {
    p = true
  },
  EVENT_DIRECTORY_FETCH_SUCCESS: function(t) {
    let {
      channelId: n,
      entries: e
    } = t;
    p = false;
    let i = l().sortBy([...e], [function(t) {
        return (0, s.CQ)(t.guild_scheduled_event)
      }]),
      d = l().map(i, T);
    E[n] = d
  },
  EVENT_DIRECTORY_FETCH_FAILURE: function() {
    p = false
  }
})
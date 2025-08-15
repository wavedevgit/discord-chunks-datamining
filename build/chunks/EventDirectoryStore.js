/** Chunk was on 98464 **/
/** chunk id: 241155, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var i, l, Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk924301 = require("./924301.js"),
  Chunk411198 = require("./411198.js"),
  Chunk75666 = require("./75666.js");
let _ = false,
  g = {},
  p = {},
  m = {},
  f = e => (m[e.guild_scheduled_event.id] = (0, c.Q0)(e.guild_scheduled_event.guild), p[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
    channelId: e.directory_channel_id,
    scheduledEventId: e.entity_id,
    type: u.C2.GUILD_SCHEDULED_EVENT,
    authorId: e.author_id,
    createdAt: e.created_at
  });
class I extends(i = Chunk442837.ZP.Store) {
  isFetching() {
    return _
  }
  getEventDirectoryEntries(e) {
    if (null != e) return g[e]
  }
  getCachedGuildByEventId(e) {
    var n;
    return null != (n = m[e]) ? n : true
  }
  getCachedGuildScheduledEventById(e) {
    var n;
    return null != (n = p[e]) ? n : true
  }
}(l = "displayName") in I ? Object.defineProperty(I, l, {
  value: "EventDirectoryStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : I[l] = "EventDirectoryStore";
let v = new I(Chunk570140.Z, {
  EVENT_DIRECTORY_FETCH_START: function() {
    _ = true
  },
  EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
    let {
      channelId: n,
      entries: t
    } = e;
    _ = false;
    let i = d().sortBy([...t], [function(e) {
        return (0, s.CQ)(e.guild_scheduled_event)
      }]),
      l = d().map(i, f);
    g[n] = l
  },
  EVENT_DIRECTORY_FETCH_FAILURE: function() {
    _ = false
  }
})
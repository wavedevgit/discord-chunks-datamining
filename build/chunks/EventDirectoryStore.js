/** Chunk was on web.js **/
/** chunk id: 241155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk924301 = require("./924301.js"),
  Chunk411198 = require("./411198.js"),
  Chunk75666 = require("./75666.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = false,
  _ = {},
  p = {},
  h = {},
  m = e => (h[e.guild_scheduled_event.id] = (0, c.Q0)(e.guild_scheduled_event.guild), p[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
    channelId: e.directory_channel_id,
    scheduledEventId: e.entity_id,
    type: u.C2.GUILD_SCHEDULED_EVENT,
    authorId: e.author_id,
    createdAt: e.created_at
  });

function g() {
  f = true
}

function E(e) {
  let {
    channelId: t,
    entries: n
  } = e;
  f = false;
  let r = o().sortBy([...n], [function(e) {
      return (0, l.CQ)(e.guild_scheduled_event)
    }]),
    i = o().map(r, m);
  _[t] = i
}

function b() {
  f = false
}
class y extends(r = Chunk442837.ZP.Store) {
  isFetching() {
    return f
  }
  getEventDirectoryEntries(e) {
    if (null != e) return _[e]
  }
  getCachedGuildByEventId(e) {
    var t;
    return null != (t = h[e]) ? t : true
  }
  getCachedGuildScheduledEventById(e) {
    var t;
    return null != (t = p[e]) ? t : true
  }
}
d(y, "displayName", "EventDirectoryStore");
let O = new y(Chunk570140.Z, {
  EVENT_DIRECTORY_FETCH_START: g,
  EVENT_DIRECTORY_FETCH_SUCCESS: E,
  EVENT_DIRECTORY_FETCH_FAILURE: b
})
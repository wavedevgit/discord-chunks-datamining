/** Chunk was on 90508 **/
/** chunk id: 581036, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, l, Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk344185 = require("./344185.js"),
  Chunk592125 = require("./592125.js"),
  Chunk306680 = require("./306680.js");
let f = {},
  g = new Set;
class Z extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(d.Z, s.Z, c.ZP)
  }
  getCount(e) {
    return f[e]
  }
  getThreadIdsMissingCounts(e, t) {
    return i()(d.Z.hasLoaded(e), "must wait for THREAD_LIST_SYNC before calling this"), t.filter(e => !(e in f) && !g.has(e))
  }
}(l = "displayName") in Z ? Object.defineProperty(Z, l, {
  value: "ForumPostUnreadCountStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : Z[l] = "ForumPostUnreadCountStore";
let m = new Z(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    f = {}, g = new Set
  },
  THREAD_CREATE: function(e) {
    let {
      channel: t,
      isNewlyCreated: n
    } = e;
    if (!n || !d.Z.hasLoaded(t.guild_id)) returnfalse;
    f[t.id] = 0
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      optimistic: n,
      isPushNotification: r
    } = e;
    if (n || r || !(t in f)) returnfalse;
    f[t]++
  },
  FORUM_UNREADS: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      null != e.count && (f[e.threadId] = e.count)
    })
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    if (!(t in f)) {
      let e = s.Z.getChannel(t),
        n = s.Z.getChannel(null == e ? true : e.parent_id);
      if (!(null == n ? true : n.isForumLikeChannel())) returnfalse
    }
    f[t] = c.ZP.getUnreadCount(t)
  },
  REQUEST_FORUM_UNREADS: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      let {
        threadId: t
      } = e;
      return g.add(t)
    })
  }
})
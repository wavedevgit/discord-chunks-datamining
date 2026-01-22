/** Chunk was on 99011 **/
/** chunk id: 474399, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var r, l, Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk970278 = require("./970278.js"),
  Chunk734057 = require("./734057.js"),
  Chunk222823 = require("./222823.js");
let A = {},
  f = new Set;
class g extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(d.A, s.A, c.Ay)
  }
  getCount(e) {
    return A[e]
  }
  getThreadIdsMissingCounts(e, t) {
    return i()(d.A.hasLoaded(e), "must wait for THREAD_LIST_SYNC before calling this"), t.filter(e => !(e in A) && !f.has(e))
  }
}(l = "displayName") in g ? Object.defineProperty(g, l, {
  value: "ForumPostUnreadCountStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : g[l] = "ForumPostUnreadCountStore";
let h = new g(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    A = {}, f = new Set
  },
  THREAD_CREATE: function(e) {
    let {
      channel: t,
      isNewlyCreated: n
    } = e;
    if (!n || !d.A.hasLoaded(t.guild_id)) returnfalse;
    A[t.id] = 0
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      optimistic: n,
      isPushNotification: r
    } = e;
    if (n || r || !(t in A)) returnfalse;
    A[t]++
  },
  FORUM_UNREADS: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      null != e.count && (A[e.threadId] = e.count)
    })
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    if (!(t in A)) {
      let e = s.A.getChannel(t),
        n = s.A.getChannel(null == e ? true : e.parent_id);
      if (!(null == n ? true : n.isForumLikeChannel())) returnfalse
    }
    A[t] = c.Ay.getUnreadCount(t)
  },
  REQUEST_FORUM_UNREADS: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      let {
        threadId: t
      } = e;
      return f.add(t)
    })
  }
})
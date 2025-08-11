/** Chunk was on web.js **/
/** chunk id: 581036, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var r, Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk344185 = require("./344185.js"),
  Chunk592125 = require("./592125.js"),
  Chunk306680 = require("./306680.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = {},
  _ = new Set;

function p() {
  f = {}, _ = new Set
}

function h(e) {
  let {
    channel: t,
    isNewlyCreated: n
  } = e;
  if (!n || !l.Z.hasLoaded(t.guild_id)) returnfalse;
  f[t.id] = 0
}

function m(e) {
  let {
    channelId: t,
    optimistic: n,
    isPushNotification: r
  } = e;
  if (n || r || !(t in f)) returnfalse;
  f[t]++
}

function g(e) {
  let {
    threads: t
  } = e;
  t.forEach(e => {
    null != e.count && (f[e.threadId] = e.count)
  })
}

function E(e) {
  let {
    channelId: t
  } = e;
  if (!(t in f)) {
    let e = c.Z.getChannel(t),
      n = c.Z.getChannel(null == e ? true : e.parent_id);
    if (!(null == n ? true : n.isForumLikeChannel())) returnfalse
  }
  f[t] = u.ZP.getUnreadCount(t)
}

function b(e) {
  let {
    threads: t
  } = e;
  t.forEach(e => {
    let {
      threadId: t
    } = e;
    return _.add(t)
  })
}
class y extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk344185.Z, Chunk592125.Z, Chunk306680.ZP)
  }
  getCount(e) {
    return f[e]
  }
  getThreadIdsMissingCounts(e, t) {
    return o()(l.Z.hasLoaded(e), "must wait for THREAD_LIST_SYNC before calling this"), t.filter(e => !(e in f) && !_.has(e))
  }
}
d(y, "displayName", "ForumPostUnreadCountStore");
let O = new y(Chunk570140.Z, {
  CONNECTION_OPEN: p,
  THREAD_CREATE: h,
  MESSAGE_CREATE: m,
  FORUM_UNREADS: g,
  MESSAGE_ACK: E,
  REQUEST_FORUM_UNREADS: b
})
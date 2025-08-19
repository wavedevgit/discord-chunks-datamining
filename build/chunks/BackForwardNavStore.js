/** Chunk was on web.js **/
/** chunk id: 365355, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./290780.js");
var r, Chunk843611 = require("./843611.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk893607 = require("./893607.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = 20,
  d = [Chunk981631.Z5c.CHANNEL_THREAD_VIEW(Chunk893607.Hw.guildId(), Chunk893607.Hw.channelId({
    optional: true
  }), ":threadId", ":messageId?"), Chunk981631.Z5c.CHANNEL(Chunk893607.Hw.guildId(), Chunk893607.Hw.channelId({
    optional: true
  }), ":messageId?"), Chunk981631.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(Chunk893607.Hw.guildId(), Chunk893607.Hw.channelId({
    optional: true
  }), ":messageId?"), Chunk981631.Z5c.NOTIFICATIONS, Chunk981631.Z5c.FRIENDS, Chunk981631.Z5c.ME, Chunk981631.Z5c.MESSAGE_REQUESTS, Chunk981631.Z5c.GUILD_DISCOVERY, Chunk981631.Z5c.APPLICATION_STORE, Chunk981631.Z5c.COLLECTIBLES_SHOP],
  f = [],
  _ = 0;

function p(e) {
  let {
    path: t
  } = e;
  if (f.length > 0) {
    if (t === f[_].path) returnfalse;
    let e = f.findIndex(e => e.path === t);
    false !== e && f.splice(e, 1)
  }
  _ = 0, f.length > u && (f = f.slice(0, u));
  let n = (0, i.LX)(t, d);
  null != n && f.unshift({
    path: t,
    params: n.params
  })
}

function h(e) {
  _ < f.length - 1 && _++
}

function m(e) {
  _ > 0 && _--
}
class g extends(r = Chunk442837.ZP.Store) {
  initialize() {
    f = [], _ = 0
  }
  get recentPlaces() {
    return f.slice(1)
  }
  get canGoBack() {
    return _ < f.length - 1
  }
  get canGoForward() {
    return _ > 0
  }
  get backDestination() {
    return this.canGoBack ? f[_ + 1] : null
  }
  get forwardDestination() {
    return this.canGoForward ? f[_ - 1] : null
  }
}
c(g, "displayName", "BackForwardNavStore");
let E = new g(Chunk570140.Z, {
  ROUTE_CHANGED: p,
  GO_BACK: h,
  GO_FORWARD: m
})
/** Chunk was on web.js **/
/** chunk id: 365355, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./415506.js"), require("./388685.js"), require("./290780.js");
var r, Chunk828700 = require("./828700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk893607 = require("./893607.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Chunk710845.Z("BackForwardNavStore"),
  f = 20,
  p = [Chunk981631.Z5c.CHANNEL_THREAD_VIEW(Chunk893607.Hw.guildId(), Chunk893607.Hw.channelId({
    optional: true
  }), ":threadId", ":messageId?"), Chunk981631.Z5c.CHANNEL(Chunk893607.Hw.guildId(), Chunk893607.Hw.channelId({
    optional: true
  }), ":messageId?"), Chunk981631.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(Chunk893607.Hw.guildId(), Chunk893607.Hw.channelId({
    optional: true
  }), ":messageId?"), Chunk981631.Z5c.NOTIFICATIONS, Chunk981631.Z5c.FRIENDS, Chunk981631.Z5c.ME, Chunk981631.Z5c.MESSAGE_REQUESTS, Chunk981631.Z5c.GUILD_DISCOVERY, Chunk981631.Z5c.APPLICATION_STORE, Chunk981631.Z5c.COLLECTIBLES_SHOP, Chunk981631.Z5c.USERS(":userId"), Chunk981631.Z5c.GUILD_DISCOVERY, Chunk981631.Z5c.GLOBAL_DISCOVERY, Chunk981631.Z5c.QUEST_HOME, Chunk981631.Z5c.GLOBAL_DISCOVERY_SERVERS, Chunk981631.Z5c.GLOBAL_DISCOVERY_APPS],
  _ = [],
  m = 0;

function h(e, t) {
  if (t < 0 || t >= e.length) throw RangeError("index out of bounds");
  let n = 0,
    r = t;
  for (; n < r;)[e[n], e[r]] = [e[r], e[n]], n++, r--;
  return e
}

function g(e) {
  let {
    path: t
  } = e, n = (0, i.LX)(t, p);
  if (null == n) returnfalse;
  if (n.params.guildId === c.STv && true === n.params.messageId) return d.verbose("Ignoring weird notification sidebar route lacking messageId"), false;
  if (_.length > 0) {
    if (t === _[m].path) returnfalse;
    let e = _.findIndex(e => e.path === t);
    false !== e && (m >= e && (m -= 1), _.splice(e, 1))
  }
  for (n.params.guildId !== c.STv && (m > 0 && h(_, m), m = 0); _.length > f;) _.pop();
  _.unshift({
    path: t,
    params: n.params
  })
}

function E(e) {
  m < _.length - 1 && m++
}

function b(e) {
  m > 0 && m--
}
class y extends(r = Chunk442837.ZP.Store) {
  initialize() {
    _ = [], m = 0
  }
  get pastPlaces() {
    return _
  }
  get canGoBack() {
    return m < _.length - 1
  }
  get canGoForward() {
    return m > 0
  }
  get backDestination() {
    return this.canGoBack ? _[m + 1] : null
  }
  get forwardDestination() {
    return this.canGoForward ? _[m - 1] : null
  }
}
u(y, "displayName", "BackForwardNavStore");
let O = new y(Chunk570140.Z, {
  ROUTE_CHANGED: g,
  GO_BACK: E,
  GO_FORWARD: b
})
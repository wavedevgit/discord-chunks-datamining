/** Chunk was on web.js **/
/** chunk id: 729904, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./65821.js"), require("./896048.js"), require("./667532.js");
var r, Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk463347 = require("./463347.js"),
  Chunk652215 = require("./652215.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Chunk626584.A("BackForwardNavStore"),
  f = 20,
  p = [Chunk652215.BVt.CHANNEL_THREAD_VIEW(Chunk463347.pv.guildId(), Chunk463347.pv.channelId({
    optional: true
  }), ":threadId", ":messageId?"), Chunk652215.BVt.CHANNEL(Chunk463347.pv.guildId(), Chunk463347.pv.channelId({
    optional: true
  }), ":messageId?"), Chunk652215.BVt.VOICE_CHAT_CHANNEL_PARTIAL(Chunk463347.pv.guildId(), Chunk463347.pv.channelId({
    optional: true
  }), ":messageId?"), Chunk652215.BVt.CHANNELS_GAME_SHOP(Chunk463347.pv.guildId(), ":pageIndex", ":skuId?", ":slug?"), Chunk652215.BVt.NOTIFICATIONS, Chunk652215.BVt.FRIENDS, Chunk652215.BVt.ME, Chunk652215.BVt.MESSAGE_REQUESTS, Chunk652215.BVt.GUILD_DISCOVERY, Chunk652215.BVt.APPLICATION_STORE, Chunk652215.BVt.COLLECTIBLES_SHOP, Chunk652215.BVt.USERS(":userId"), Chunk652215.BVt.GUILD_DISCOVERY, Chunk652215.BVt.GLOBAL_DISCOVERY, Chunk652215.BVt.QUEST_HOME, Chunk652215.BVt.GLOBAL_DISCOVERY_SERVERS, Chunk652215.BVt.GLOBAL_DISCOVERY_APPS],
  _ = [],
  h = 0;

function m(e, t) {
  if (t < 0 || t >= e.length) throw RangeError("index out of bounds");
  let n = 0,
    r = t;
  for (; n < r;)[e[n], e[r]] = [e[r], e[n]], n++, r--;
  return e
}

function g(e) {
  let {
    path: t,
    isReplace: n
  } = e, r = (0, i.B6)(t, p);
  if (null == r) returnfalse;
  if (r.params.guildId === c.gNP && true === r.params.messageId) return d.verbose("Ignoring weird notification sidebar route lacking messageId"), false;
  if (n && _.length > 0) return _[h] = {
    path: t,
    params: r.params
  }, true;
  if (_.length > 0) {
    if (t === _[h].path) returnfalse;
    let e = _.findIndex(e => e.path === t);
    false !== e && (h >= e && (h -= 1), _.splice(e, 1))
  }
  for (r.params.guildId !== c.gNP && (h > 0 && m(_, h), h = 0); _.length > f;) _.pop();
  _.unshift({
    path: t,
    params: r.params
  })
}

function E(e) {
  h < _.length - 1 && h++
}

function b(e) {
  h > 0 && h--
}
class y extends(r = Chunk311907.Ay.Store) {
  initialize() {
    _ = [], h = 0
  }
  get pastPlaces() {
    return _
  }
  get canGoBack() {
    return h < _.length - 1
  }
  get canGoForward() {
    return h > 0
  }
  get backDestination() {
    return this.canGoBack ? _[h + 1] : null
  }
  get forwardDestination() {
    return this.canGoForward ? _[h - 1] : null
  }
}
u(y, "displayName", "BackForwardNavStore");
let O = new y(Chunk73153.h, {
  ROUTE_CHANGED: g,
  GO_BACK: E,
  GO_FORWARD: b
})
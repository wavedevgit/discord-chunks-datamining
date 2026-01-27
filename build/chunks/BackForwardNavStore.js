/** Chunk was on web.js **/
/** chunk id: 729904, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./65821.js"), require("./896048.js"), require("./667532.js");
var r, Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk463347 = require("./463347.js"),
  Chunk824865 = require("./824865.js"),
  Chunk652215 = require("./652215.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = 20,
  f = [Chunk652215.BVt.CHANNEL_THREAD_VIEW(Chunk463347.pv.guildId(), Chunk463347.pv.channelId({
    optional: true
  }), ":threadId", ":messageId?"), Chunk652215.BVt.CHANNEL(Chunk463347.pv.guildId(), Chunk463347.pv.channelId({
    optional: true
  }), ":messageId?"), Chunk652215.BVt.VOICE_CHAT_CHANNEL_PARTIAL(Chunk463347.pv.guildId(), Chunk463347.pv.channelId({
    optional: true
  }), ":messageId?"), Chunk652215.BVt.CHANNELS_GAME_SHOP(Chunk463347.pv.guildId(), ":pageIndex", ":skuId?", ":slug?"), Chunk652215.BVt.NOTIFICATIONS, Chunk652215.BVt.FRIENDS, Chunk652215.BVt.ME, Chunk652215.BVt.MESSAGE_REQUESTS, Chunk652215.BVt.GUILD_DISCOVERY, Chunk652215.BVt.APPLICATION_STORE, Chunk652215.BVt.COLLECTIBLES_SHOP, Chunk652215.BVt.USERS(":userId"), Chunk652215.BVt.GUILD_DISCOVERY, Chunk652215.BVt.GLOBAL_DISCOVERY, Chunk652215.BVt.QUEST_HOME, Chunk652215.BVt.GLOBAL_DISCOVERY_SERVERS, Chunk652215.BVt.GLOBAL_DISCOVERY_APPS],
  p = [],
  _ = 0;

function h(e, t) {
  if (t < 0 || t >= e.length) throw RangeError("index out of bounds");
  let n = 0,
    r = t;
  for (; n < r;)[e[n], e[r]] = [e[r], e[n]], n++, r--;
  return e
}

function m(e) {
  let {
    location: t,
    action: n
  } = e;
  if ("POP" === n) {
    let e = p.findIndex(e => e.path === t.pathname);
    if (false !== e) return _ = e, true
  }
  if (t.source === l.A.USER_NAVIGATED_BACK) {
    _ < p.length - 1 && _++;
    return
  }
  if (t.source === l.A.USER_NAVIGATED_FORWARD) {
    _ > 0 && _--;
    return
  }
  let {
    pathname: r
  } = t, a = "REPLACE" === n, o = (0, i.B6)(r, f);
  if (null == o) returnfalse;
  if (a && p.length > 0) return p[_] = {
    path: r,
    params: o.params
  }, true;
  if (p.length > 0) {
    if (r === p[_].path) returnfalse;
    let e = p.findIndex(e => e.path === r);
    false !== e && (p.splice(e, 1), _ >= e && (_ -= 1))
  }
  for (_ > 0 && h(p, _), _ = 0; p.length > d;) p.pop();
  p.unshift({
    path: r,
    params: o.params
  })
}
class g extends(r = Chunk311907.Ay.Store) {
  initialize() {
    p = [], _ = 0
  }
  get pastPlaces() {
    return p
  }
  get canGoBack() {
    return _ < p.length - 1
  }
  get canGoForward() {
    return _ > 0
  }
  get backDestination() {
    return this.canGoBack ? p[_ + 1] : null
  }
  get forwardDestination() {
    return this.canGoForward ? p[_ - 1] : null
  }
}
u(g, "displayName", "BackForwardNavStore");
let E = new g(Chunk73153.h, {
  ROUTE_CHANGED: m
})
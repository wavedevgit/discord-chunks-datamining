/** Chunk was on web.js **/
/** chunk id: 518944, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk353926 = require("./353926.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk945577 = require("./945577.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = false,
  _ = null;

function p(e) {
  if (null == e);
  else if (e === u.aib.DMS) return u.aib.DMS;
  else if (e === u.I_8) return u.aib.FAVORITES;
  else if (null != l.Z.getGuild(e)) return u.aib.GUILD;
  else if (null != s.Z.getChannel(e)) return u.aib.CHANNEL;
  return null
}

function h(e) {
  if (e === _) returnfalse;
  _ = e
}

function m() {
  f = true, null != _ && p(_) === Chunk981631.aib.CHANNEL && (0, Chunk945577.ad)({
    location: "SearchStore_handleConnectionOpen"
  }) && h(Chunk981631.aib.DMS)
}

function g(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  null != t ? h(t) : (0, c.ad)({
    location: "SearchStore_handleChannelSelect",
    autoTrackExposure: f
  }) ? h(u.aib.DMS) : h(n)
}

function E(e) {
  let {
    id: t
  } = e;
  h(t)
}
class b extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z, Chunk592125.Z, Chunk353926.Z)
  }
  getSelectedSearchContextId() {
    return _
  }
}
d(b, "displayName", "SearchStore");
let y = new b(Chunk570140.Z, {
  CONNECTION_OPEN: m,
  SEARCH_SCREEN_OPEN: E,
  CHANNEL_SELECT: g
})
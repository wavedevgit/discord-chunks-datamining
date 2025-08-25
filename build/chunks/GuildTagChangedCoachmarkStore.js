/** Chunk was on web.js **/
/** chunk id: 864133, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {
    lastSeenInfos: {}
  },
  l = s;

function c(e) {
  let {
    guildId: t,
    lastSeenInfo: n
  } = e;
  l.lastSeenInfos[t] = n
}

function u() {
  l = s
}
class d extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    l = null != e ? e : s
  }
  getState() {
    return l
  }
  getGuildLastSeenInfo(e) {
    var t;
    return null != (t = l.lastSeenInfos[e]) ? t : null
  }
}
a(d, "displayName", "GuildTagChangedCoachmarkStore"), a(d, "persistKey", "GuildTagChangedCoachmarkStore");
let f = new d(Chunk570140.Z, {
  GUILD_TAG_CHANGED_COACHMARK_SEEN: c,
  LOGOUT: u
})
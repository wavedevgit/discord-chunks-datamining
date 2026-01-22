/** Chunk was on web.js **/
/** chunk id: 309698, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var r, Chunk478437 = require("./478437.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk142120 = require("./142120.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = new Set,
  u = {};

function d() {
  c.clear()
}

function f(e) {
  c.delete(e.guild.id)
}

function p(e) {
  null == u[e.guildId] && (u[e.guildId] = {}), u[e.guildId][e.id] = e.status
}

function _(e) {
  for (let {
      id: t,
      status: n
    }
    of(u[e.guildId] = {}, e.channels)) u[e.guildId][t] = n
}
class h extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.A)
  }
  getChannelStatus(e) {
    var t;
    if (null != e && null != e.guild_id && e.type === i.r.GUILD_VOICE) return c.has(e.guild_id) || (c.add(e.guild_id), o.A.getSocket().requestChannelStatuses(e.guild_id)), null == (t = u[e.guild_id]) ? true : t[e.id]
  }
}
l(h, "displayName", "ChannelStatusStore");
let m = new h(Chunk73153.h, {
  GUILD_CREATE: f,
  GUILD_DELETE: f,
  CONNECTION_RESUMED: d,
  CONNECTION_OPEN: d,
  VOICE_CHANNEL_STATUS_UPDATE: p,
  CHANNEL_STATUSES: _
})
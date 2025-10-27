/** Chunk was on web.js **/
/** chunk id: 12498, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk38618 = require("./38618.js");

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

function _(e) {
  null == u[e.guildId] && (u[e.guildId] = {}), u[e.guildId][e.id] = e.status
}

function p(e) {
  for (let {
      id: t,
      status: n
    }
    of(u[e.guildId] = {}, e.channels)) u[e.guildId][t] = n
}
class h extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk38618.Z)
  }
  getChannelStatus(e) {
    var t;
    if (null != e && null != e.guild_id && e.type === i.d.GUILD_VOICE) return c.has(e.guild_id) || (c.add(e.guild_id), s.Z.getSocket().requestChannelStatuses(e.guild_id)), null == (t = u[e.guild_id]) ? true : t[e.id]
  }
}
l(h, "displayName", "ChannelStatusStore");
let m = new h(Chunk570140.Z, {
  GUILD_CREATE: f,
  GUILD_DELETE: f,
  CONNECTION_RESUMED: d,
  CONNECTION_OPEN: d,
  VOICE_CHANNEL_STATUS_UPDATE: _,
  CHANNEL_STATUSES: p
})
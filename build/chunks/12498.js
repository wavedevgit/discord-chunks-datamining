/** Chunk was on 62117 **/
n.d(t, {
  Z: () => p
}), n(47120);
var i, s, l, r = n(106351),
  a = n(442837),
  d = n(570140),
  o = n(38618);
let h = new Set,
  u = {};

function c() {
  h.clear()
}

function g(e) {
  h.delete(e.guild.id)
}
class C extends(i = a.ZP.Store) {
  getChannelStatus(e) {
    var t;
    if (null != e && null != e.guild_id && e.type === r.d.GUILD_VOICE) return h.has(e.guild_id) || (h.add(e.guild_id), o.Z.getSocket().requestChannelStatuses(e.guild_id)), null === (t = u[e.guild_id]) || void 0 === t ? void 0 : t[e.id]
  }
}
l = "ChannelStatusStore", (s = "displayName") in C ? Object.defineProperty(C, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : C[s] = l;
let p = new C(d.Z, {
  GUILD_CREATE: g,
  GUILD_DELETE: g,
  CONNECTION_RESUMED: c,
  CONNECTION_OPEN: c,
  VOICE_CHANNEL_STATUS_UPDATE: function(e) {
    null == u[e.guildId] && (u[e.guildId] = {}), u[e.guildId][e.id] = e.status
  },
  CHANNEL_STATUSES: function(e) {
    for (let {
        id: t,
        status: n
      }
      of(u[e.guildId] = {}, e.channels)) u[e.guildId][t] = n
  }
})
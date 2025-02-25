/** Chunk was on 67830 **/
n.d(t, {
  Z: () => g
}), n(47120);
var i, r, l, o = n(106351),
  s = n(442837),
  a = n(570140),
  u = n(38618);
let d = new Set,
  c = {};

function h() {
  d.clear()
}

function p(e) {
  d.delete(e.guild.id)
}
class f extends(i = s.ZP.Store) {
  getChannelStatus(e) {
    var t;
    if (null != e && null != e.guild_id && e.type === o.d.GUILD_VOICE) return d.has(e.guild_id) || (d.add(e.guild_id), u.Z.getSocket().requestChannelStatuses(e.guild_id)), null === (t = c[e.guild_id]) || void 0 === t ? void 0 : t[e.id]
  }
}
l = "ChannelStatusStore", (r = "displayName") in f ? Object.defineProperty(f, r, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : f[r] = l;
let g = new f(a.Z, {
  GUILD_CREATE: p,
  GUILD_DELETE: p,
  CONNECTION_RESUMED: h,
  CONNECTION_OPEN: h,
  VOICE_CHANNEL_STATUS_UPDATE: function(e) {
    null == c[e.guildId] && (c[e.guildId] = {}), c[e.guildId][e.id] = e.status
  },
  CHANNEL_STATUSES: function(e) {
    for (let {
        id: t,
        status: n
      }
      of(c[e.guildId] = {}, e.channels)) c[e.guildId][t] = n
  }
})
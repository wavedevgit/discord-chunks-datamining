/** Chunk was on 53494 **/
n.d(t, {
  Z: () => c
});
var r = n(192379),
  i = n(442837),
  o = n(623633),
  l = n(199902),
  a = n(19780),
  s = n(979651);

function c(e) {
  var t;
  let n = (0, i.e7)([a.Z], () => a.Z.getGuildId()),
    c = e.children.map(e => e.id),
    u = null != n && c.includes(n),
    d = !1,
    p = !1,
    h = !1,
    f = (0, i.e7)([a.Z], () => a.Z.getChannelId()),
    g = null === (t = (0, o.Z)()) || void 0 === t ? void 0 : t.guild_id,
    m = null != g && c.includes(g),
    b = (0, i.e7)([s.Z], () => null != f && s.Z.hasVideo(f), [f]),
    v = (0, i.e7)([l.Z], () => l.Z.getCurrentUserActiveStream());
  return u && (d = !b, p = b, h = null != v && null != v.guildId && c.includes(v.guildId)), r.useMemo(() => ({
    audio: d,
    video: p,
    screenshare: h,
    liveStage: m,
    isCurrentUserConnected: u
  }), [d, p, h, m, u])
}
/** Chunk was on 50751 **/
n.d(t, {
  Z: () => h
}), n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
  o = n(352527),
  l = n(183584),
  a = n(487029),
  s = n(592125),
  u = n(944486),
  c = n(554174),
  d = n(710111),
  p = n(702414);

function h() {
  let [e, t] = (0, r.Wu)([o.Z], () => [o.Z.enabled, o.Z.keepOpen]), n = (0, r.e7)([u.Z], () => u.Z.getVoiceChannelId()), h = (0, r.e7)([s.Z], () => s.Z.getChannel(n), [n]), f = null == h ? void 0 : h.getGuildId();
  return e && null != h ? (0, i.jsx)("div", {
    className: p.container,
    children: (0, i.jsx)(a.Z, {
      width: d.FW.width,
      height: d.FW.height,
      guildId: f,
      channel: h,
      keepOpen: t,
      onClose: function() {
        let e = (0, c.Z)();
        null != e && (0, l.oZ)(e)
      },
      analyticsSource: "overlay"
    })
  }) : null
}
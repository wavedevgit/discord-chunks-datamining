/** Chunk was on 63141 **/
"use strict";
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
  c = n(944486),
  d = n(554174),
  u = n(710111),
  p = n(713087);

function h() {
  let [e, t] = (0, r.Wu)([o.Z], () => [o.Z.enabled, o.Z.keepOpen]), n = (0, r.e7)([c.Z], () => c.Z.getVoiceChannelId()), h = (0, r.e7)([s.Z], () => s.Z.getChannel(n), [n]), f = null == h ? void 0 : h.getGuildId();
  return e && null != h ? (0, i.jsx)("div", {
    className: p.widget,
    children: (0, i.jsx)(a.Z, {
      width: u.FW.width,
      height: u.FW.height,
      guildId: f,
      channel: h,
      keepOpen: t,
      onClose: function() {
        let e = (0, d.Z)();
        null != e && (0, l.oZ)(e)
      },
      analyticsSource: "overlay"
    })
  }) : null
}
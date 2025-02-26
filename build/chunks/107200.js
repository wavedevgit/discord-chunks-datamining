/** Chunk was on 63141 **/
"use strict";
n.d(t, {
  Z: () => p
}), n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
  o = n(352527),
  a = n(183584),
  l = n(487029),
  s = n(592125),
  c = n(944486),
  d = n(554174),
  u = n(710111),
  f = n(551756);

function p() {
  let [e, t] = (0, r.Wu)([o.Z], () => [o.Z.enabled, o.Z.keepOpen]), n = (0, r.e7)([c.Z], () => c.Z.getVoiceChannelId()), p = (0, r.e7)([s.Z], () => s.Z.getChannel(n), [n]), h = null == p ? void 0 : p.getGuildId();
  return e && null != p ? (0, i.jsx)("div", {
    className: f.widget,
    children: (0, i.jsx)(l.Z, {
      width: u.FW.width,
      height: u.FW.height,
      guildId: h,
      channel: p,
      keepOpen: t,
      onClose: function() {
        let e = (0, d.Z)();
        null != e && (0, a.oZ)(e)
      },
      analyticsSource: "overlay"
    })
  }) : null
}
/** Chunk was on 1272 (4b1b41bf0e3472e1.js) **/
n.d(t, {
  Z: () => g
});
var r = n(200651);
n(192379);
var i = n(642128),
  l = n(442837),
  o = n(481060),
  a = n(536442),
  s = n(984933),
  c = n(496675),
  u = n(51382),
  d = n(91326),
  p = n(503856),
  h = n(981631);

function f(e) {
  let {
    channel: t,
    guild: n
  } = e, s = (0, l.e7)([a.qc], () => a.qc.hasHotspot(a.v6.HUB_STUDY_ROOM_NOTICE)), c = (0, p.r)(t.guild_id), h = (0, o.q_F)({
    maxHeight: 300 * !c,
    overflow: "hidden",
    delay: 400
  });
  return (0, r.jsx)(i.animated.div, {
    style: h,
    children: s ? (0, r.jsx)(u.Z, {
      channel: t,
      guild: n
    }) : (0, r.jsx)(d.Z, {
      name: "\uD83D\uDCDA☕ ".concat(t.name),
      channel: t
    })
  })
}
let g = function(e) {
  let {
    guild: t
  } = e, n = (0, l.e7)([s.ZP], () => s.ZP.getChannels(t.id)[s.Zb][0]), i = (0, l.e7)([c.Z], () => null != n && c.Z.can(h.Plq.CONNECT, n.channel));
  return t.hasFeature(h.oNc.HUB) && null != n && i ? (0, r.jsx)(f, {
    channel: n.channel,
    guild: t
  }) : null
}
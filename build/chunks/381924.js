/** Chunk was on 83331 (d831b4426e7aa700.js) **/
n.d(t, {
  Z: () => Z
});
var r = n(200651);
n(192379);
var i = n(442837),
  l = n(828214),
  o = n(287734),
  c = n(208049),
  a = n(893663),
  s = n(496675),
  u = n(944486),
  d = n(981631),
  f = n(388032);

function Z(e, t) {
  let n = (0, i.e7)([s.Z], () => s.Z.can(d.Plq.CONNECT, e), [e]),
    Z = (0, i.e7)([u.Z], () => u.Z.getVoiceChannelId()),
    b = (0, a.tT)(t),
    O = Z === e.id;
  return e.isGuildVocal() && n && null != b && !O ? (0, r.jsx)(l.sN, {
    id: "join-muted-custom-join-sound",
    label: f.NW.string(f.t.saLMWV),
    action: () => {
      (0, c.Db)(e.id), o.default.selectVoiceChannel(e.id)
    }
  }) : null
}
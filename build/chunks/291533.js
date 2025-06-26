/** Chunk was on 99014 **/
n.d(t, {
  G: () => h
});
var i = n(442837),
  r = n(704215),
  l = n(243778),
  o = n(999382),
  s = n(667105),
  a = n(819640),
  c = n(562511),
  u = n(46140);
let d = 12633 == n.j ? 18e4 : null;

function h(e) {
  let t = (0, c.A2)(e),
    n = (0, i.e7)([o.Z], () => o.Z.isOpen()),
    h = (0, i.e7)([a.Z], () => a.Z.hasLayers()),
    g = (0, s.Ws)({
      location: u.dr.QUESTS_BAR
    });
  return (0, l.bf)(t && !n && !h && g ? r.z.GUILD_TAG_AVAILABLE_COACHMARK : null, {
    cooldownDurationMs: d
  })
}
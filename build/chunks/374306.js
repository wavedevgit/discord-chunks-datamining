/** Chunk was on 71611 (6f02c158d7813e32.js) **/
n.d(t, {
  Z: () => m
});
var r = n(200651);
n(192379);
var i = n(442837),
  l = n(481060),
  o = n(961675),
  a = n(883429),
  s = n(238349),
  c = n(109434),
  u = n(456269),
  d = n(432771),
  p = n(920303),
  h = n(665149),
  f = n(388032);

function m(e) {
  let {
    channel: t
  } = e, n = (0, u.r_)(t), m = (0, i.e7)([o.Z], () => o.Z.hasHidden(t.id)), g = (0, d.c)(t.id), {
    sortOrder: b,
    tagFilter: _
  } = (0, c.H)(t.id), C = (0, i.e7)([s.Z, p.Z], () => !!(s.Z.getThreadIds(t.id, b, _).length > 0) || !!(p.Z.getThreads(t.id, b, _).length > 0), [t.id, b, _]), v = t.isMediaChannel();
  if (!n || g || v && C) return null;
  let y = m ? v ? f.NW.string(f.t["WP/IEx"]) : f.NW.string(f.t.zfq9V1) : v ? f.NW.string(f.t.p60yFx) : f.NW.string(f.t.SNOqYG);
  return (0, r.jsx)(h.JO, {
    tooltip: y,
    icon: l.d3s,
    onClick: () => a.Z.hideAdminOnboarding(t.id, !m),
    selected: !m
  })
}
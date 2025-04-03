/** Chunk was on 10451 **/
n.d(t, {
  Z: () => g
});
var r = n(200651);
n(192379);
var i = n(512722),
  s = n.n(i),
  a = n(442837),
  o = n(481060),
  l = n(716364),
  c = n(474873),
  d = n(197344),
  u = n(871465),
  m = n(388032);

function g() {
  let e = (0, a.e7)([c.Z], () => c.Z.getSoundpack()),
    t = d.Z.useHolidaySoundpack();
  s()(null != t, "should not render this without a holiday soundpack");
  let n = [{
    value: u.YC.CLASSIC,
    label: m.NW.string(m.t.p3Hg5e)
  }, {
    value: t.soundpack,
    label: m.NW.string(t.soundpackLabel)
  }];
  return (0, r.jsx)(o.q4e, {
    onChange: l.c,
    value: e,
    options: n,
    maxVisibleItems: n.length
  })
}
/** Chunk was on 99786 (4abb3ceacd323920.js) **/
n.d(e, {
  Z: () => l
});
var o = n(200651);
n(192379);
var i = n(180781),
  r = n(321867),
  a = n(486324);

function l(t) {
  let {
    type: e,
    analyticsPage: n,
    analyticsSection: l,
    isGIF: c,
    banner: s
  } = t;
  return [a.pC.BANNER, a.pC.AVATAR].includes(e) && c ? (0, o.jsx)(r.Z, {
    analyticsSection: l,
    type: e
  }) : e === a.pC.GUILD_BANNER ? (0, o.jsx)(i.Z, {
    analyticsSection: l,
    analyticsPage: n,
    isGIF: c,
    banner: s
  }) : null
}
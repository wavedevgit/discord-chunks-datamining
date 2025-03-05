/** Chunk was on 81288 **/
n.d(t, {
  Z: () => l
});
var o = n(200651);
n(192379);
var i = n(180781),
  r = n(321867),
  a = n(486324);

function l(e) {
  let {
    type: t,
    analyticsPage: n,
    analyticsSection: l,
    isGIF: c,
    banner: s
  } = e;
  return [a.pC.BANNER, a.pC.AVATAR].includes(t) && c ? (0, o.jsx)(r.Z, {
    analyticsSection: l,
    type: t
  }) : t === a.pC.GUILD_BANNER ? (0, o.jsx)(i.Z, {
    analyticsSection: l,
    analyticsPage: n,
    isGIF: c,
    banner: s
  }) : null
}
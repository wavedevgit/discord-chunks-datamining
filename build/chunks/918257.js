/** Chunk was on 20447 **/
n.d(t, {
  Z: () => u
});
var r = n(200651);
n(192379);
var i = n(208049),
  s = n(242291),
  a = n(63063),
  o = n(36703),
  l = n(674343),
  c = n(981631),
  d = n(388032);

function u(e) {
  let {
    refreshStyles: t = !1
  } = e, n = (0, s.pI)();
  return (0, r.jsx)(l.Z, {
    title: d.NW.string(d.t.xbMc8v),
    description: d.NW.format(d.t.BPbGq6, {
      helpCenterArticle: a.Z.getArticleURL(c.BhN.SOUNDBOARD)
    }),
    label: d.NW.string(d.t.kbFsAA),
    volume: n,
    onVolumeChange: function(e) {
      n = (0, o.A)(e), (0, i.xz)(n)
    },
    refreshStyles: t
  })
}
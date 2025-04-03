/** Chunk was on 10451 **/
n.d(t, {
  Z: () => m
});
var r = n(200651),
  i = n(905405),
  s = n(63063),
  a = n(695346),
  o = n(838436),
  l = n(51331),
  c = n(726985),
  d = n(981631),
  u = n(388032);

function m() {
  let e = (0, i.p)();
  return (0, r.jsx)(o.U, {
    setting: c.s6.PRIVACY_KEYWORD_FILTER_V2,
    children: (0, r.jsx)(l.Z, {
      value: e,
      onChange: e => a.gw.updateSetting({
        profanity: e,
        slurs: e,
        sexualContent: e
      }),
      title: u.NW.string(u.t.CB5reH),
      note: u.NW.format(u.t.kAyJIS, {
        learnMoreLink: s.Z.getArticleURL(d.BhN.KEYWORD_FILTERS)
      })
    })
  })
}
/** Chunk was on 1815 **/
n.d(t, {
  Z: () => h
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(924628),
  l = n(480294),
  o = n(63063),
  c = n(838436),
  d = n(51331),
  u = n(922628),
  m = n(726985),
  p = n(981631),
  g = n(388032);

function h() {
  let e = (0, s.cj)([l.Z], () => l.Z.hasConsented(p.pjP.PERSONALIZATION)),
    [t, n] = i.useState(e);
  return (0, r.jsx)(c.U, {
    setting: m.s6.PRIVACY_DATA_PERSONALIZE_V2,
    children: (0, r.jsx)(d.Z, {
      title: g.NW.string(g.t.MNKzys),
      note: g.NW.format(g.t["eQL/Mj"], {
        helpdeskArticle: o.Z.getArticleURL(p.BhN.DATA_USED_FOR_RECOMMENDED)
      }),
      value: t,
      onChange: e => {
        e ? (0, a.g)([p.pjP.PERSONALIZATION], []).catch(u.S).then(() => n(!0)) : (0, u.V)({
          header: g.NW.string(g.t["9SNpzs"]),
          confirmText: g.NW.string(g.t["9g5UGx"]),
          cancelText: g.NW.string(g.t["+ZLPw8"]),
          onConfirm: () => {
            (0, a.g)([], [p.pjP.PERSONALIZATION]).catch(u.S).then(() => n(!1))
          },
          body: g.NW.string(g.t.gJvDDg)
        })
      }
    })
  })
}
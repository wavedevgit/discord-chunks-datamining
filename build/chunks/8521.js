/** Chunk was on 1272 (2c78ad33b01d1e4b.js) **/
n.d(t, {
  Z: () => d
});
var r = n(200651),
  i = n(192379),
  l = n(949389),
  o = n(63063),
  a = n(324262),
  s = n(981631),
  c = n(388032),
  u = n(511189);
let d = e => {
  let {
    guild: t
  } = e, n = i.useCallback(() => {
    (0, l.xm)(t.id)
  }, [t.id]);
  return (0, r.jsx)(a.Z, {
    guild: t,
    onDismissed: n,
    message: c.NW.format(c.t["+QqO3d"], {
      maxMemberCount: t.maxMembers,
      maxMembersUrl: o.Z.getArticleURL(s.BhN.MAX_MEMBERS)
    }),
    type: s.vID.MAX_MEMBER_COUNT,
    image: u,
    imageMarginX: 61
  })
}
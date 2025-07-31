/** Chunk was on 96887 **/
r.d(t, {
  d: () => m
});
var a = r(255367);
r(73800);
var n = r(120356),
  i = r.n(n),
  s = r(780384),
  o = r(481060),
  l = r(410030),
  c = r(876917),
  d = r(328456),
  u = r(619899),
  f = r(616066),
  v = r(912397),
  p = r(63243),
  h = r(244488);
let m = e => {
  let {
    product: t,
    isPurchased: r,
    isHighlighted: n,
    user: m,
    forCollectedModal: g,
    containerClassName: y,
    profileEffectClassName: P,
    avatarDecorationClassName: b
  } = e, {
    firstProfileEffect: w,
    firstAvatarDecoration: O
  } = (0, d.Rj)(t), j = (0, u.O1)(O), _ = (0, l.ZP)(), E = (0, s.ap)(_);
  return (0, a.jsxs)("div", {
    className: i()(v.container, y),
    children: [null != w ? (0, a.jsx)("div", {
      className: i()(v.profileEffectShopPreview, P),
      children: (0, a.jsx)(c.Z, {
        isHovering: n,
        profileEffectId: w.id,
        isPurchased: r,
        forCollectedModal: g,
        removeSetHeight: !0
      })
    }) : null, null != j ? (0, a.jsx)("div", {
      className: i()(v.avatarDecorationPreview, b),
      children: (0, a.jsx)(f.R, {
        item: j,
        user: m,
        avatarSize: o.EFr.SIZE_120,
        isPurchased: r,
        isHighlighted: n,
        avatarPlaceholderSrc: E ? h : p
      })
    }) : null]
  })
}
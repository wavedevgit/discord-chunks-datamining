/** Chunk was on 88235 **/
n.d(t, {
  Z: () => O
});
var r = n(200651),
  l = n(192379),
  i = n(120356),
  o = n.n(i),
  s = n(100527),
  a = n(906732),
  c = n(26033),
  d = n(960870),
  u = n(510659),
  f = n(287954),
  p = n(660579),
  h = n(652853),
  j = n(64621),
  g = n(382405),
  m = n(386019),
  v = n(228168),
  b = n(227832);

function O(e) {
  let {
    user: t,
    entry: n,
    profileGuildId: i,
    className: O,
    onClose: x,
    hideContextMenu: Z = !1
  } = e, y = l.useRef(null), {
    analyticsLocations: I
  } = (0, a.ZP)(s.Z.USER_PROFILE_RECENT_ACTIVITY_CARD), {
    themeType: P
  } = (0, h.z)(), {
    interactionSource: E,
    interactionSourceId: T
  } = (0, u.Xo)(), N = (0, d.Z)({
    display: "recent",
    user: t,
    entry: n,
    analyticsLocations: I
  });
  return null != P && (0, c.Rh)(n) ? (0, r.jsx)(a.Gt, {
    value: I,
    children: (0, r.jsx)(j.Z, {
      targetElementRef: y,
      sourceType: v.n_.ACTIVITY,
      user: t,
      children: (0, r.jsx)(f.Z, {
        user: t,
        guildId: i,
        themeType: P,
        sourceId: n.id,
        entry: n,
        onAction: N,
        sourceType: v.n_.ACTIVITY,
        children: () => (0, r.jsx)(p.Z, {
          ref: y,
          user: t,
          className: b.toolbarContainer,
          interactionSourceId: n.id,
          sourceType: v.n_.ACTIVITY,
          onAction: N,
          onShowToolbar: () => N({
            action: "HOVER_ACTIVITY_CARD"
          }),
          renderMoreButtonPopout: Z ? void 0 : e => (0, r.jsx)(m.Z, {
            display: "recent",
            entry: n,
            user: t,
            onClose: x,
            children: e
          }),
          children: (0, r.jsx)(g.Z, {
            entry: n,
            user: t,
            onClose: x,
            className: o()(O, {
              [b.hoisted]: E === v.n_.ACTIVITY && T === n.id
            })
          })
        })
      })
    })
  }) : null
}
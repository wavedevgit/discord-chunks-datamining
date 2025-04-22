/** Chunk was on 54636 **/
t.d(n, {
  Z: () => x
});
var r = t(200651),
  o = t(192379),
  i = t(120356),
  l = t.n(i),
  s = t(100527),
  c = t(906732),
  a = t(26033),
  d = t(960870),
  u = t(510659),
  f = t(287954),
  p = t(660579),
  m = t(652853),
  b = t(64621),
  h = t(382405),
  g = t(386019),
  j = t(228168),
  v = t(227832);

function x(e) {
  let {
    user: n,
    entry: t,
    profileGuildId: i,
    className: x,
    onClose: y,
    hideContextMenu: O = !1
  } = e, I = o.useRef(null), {
    analyticsLocations: _
  } = (0, c.ZP)(s.Z.USER_PROFILE_RECENT_ACTIVITY_CARD), {
    themeType: Z
  } = (0, m.z)(), {
    interactionSource: P,
    interactionSourceId: A
  } = (0, u.Xo)(), E = (0, d.Z)({
    display: "recent",
    user: n,
    entry: t,
    analyticsLocations: _
  });
  return null != Z && (0, a.Rh)(t) ? (0, r.jsx)(c.Gt, {
    value: _,
    children: (0, r.jsx)(b.Z, {
      targetElementRef: I,
      sourceType: j.n_.ACTIVITY,
      user: n,
      children: (0, r.jsx)(f.Z, {
        user: n,
        guildId: i,
        themeType: Z,
        sourceId: t.id,
        entry: t,
        onAction: E,
        sourceType: j.n_.ACTIVITY,
        children: () => (0, r.jsx)(p.Z, {
          ref: I,
          user: n,
          className: v.toolbarContainer,
          interactionSourceId: t.id,
          sourceType: j.n_.ACTIVITY,
          onAction: E,
          onShowToolbar: () => E({
            action: "HOVER_ACTIVITY_CARD"
          }),
          renderMoreButtonPopout: O ? void 0 : e => (0, r.jsx)(g.Z, {
            display: "recent",
            entry: t,
            user: n,
            onClose: y,
            children: e
          }),
          children: (0, r.jsx)(h.Z, {
            entry: t,
            user: n,
            onClose: y,
            className: l()(x, {
              [v.hoisted]: P === j.n_.ACTIVITY && A === t.id
            })
          })
        })
      })
    })
  }) : null
}
/** Chunk was on 81818 **/
t.d(n, {
  Z: () => I
});
var r = t(200651);
t(192379);
var o = t(120356),
  i = t.n(o),
  l = t(100527),
  s = t(906732),
  c = t(26033),
  a = t(960870),
  d = t(510659),
  u = t(287954),
  f = t(660579),
  p = t(652853),
  b = t(64621),
  y = t(382405),
  v = t(386019),
  m = t(228168),
  g = t(203396);

function I(e) {
  let {
    user: n,
    entry: t,
    profileGuildId: o,
    className: I,
    onClose: j,
    hideContextMenu: h = !1
  } = e, {
    analyticsLocations: _
  } = (0, s.ZP)(l.Z.USER_PROFILE_RECENT_ACTIVITY_CARD), {
    profileType: x
  } = (0, p.z)(), {
    interactionSource: O,
    interactionSourceId: Z
  } = (0, d.Xo)(), P = (0, a.Z)({
    display: "recent",
    user: n,
    entry: t,
    analyticsLocations: _
  });
  return null != x && (0, c.Rh)(t) ? (0, r.jsx)(s.Gt, {
    value: _,
    children: (0, r.jsx)(b.Z, {
      sourceType: m.n_.ACTIVITY,
      user: n,
      children: (0, r.jsx)(u.Z, {
        user: n,
        guildId: o,
        profileType: x,
        sourceId: t.id,
        entry: t,
        onAction: P,
        sourceType: m.n_.ACTIVITY,
        children: () => (0, r.jsx)(f.Z, {
          user: n,
          className: g.toolbarContainer,
          interactionSourceId: t.id,
          sourceType: m.n_.ACTIVITY,
          onAction: P,
          onShowToolbar: () => P({
            action: "HOVER_ACTIVITY_CARD"
          }),
          renderMoreButtonPopout: h ? void 0 : e => (0, r.jsx)(v.Z, {
            display: "recent",
            entry: t,
            user: n,
            onClose: j,
            children: e
          }),
          children: (0, r.jsx)(y.Z, {
            entry: t,
            user: n,
            onClose: j,
            className: i()(I, {
              [g.hoisted]: O === m.n_.ACTIVITY && Z === t.id
            })
          })
        })
      })
    })
  }) : null
}
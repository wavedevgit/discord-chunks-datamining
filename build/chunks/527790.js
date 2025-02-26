/** Chunk was on 62880 **/
t.d(n, {
  Z: () => o
});
var l = t(200651);
t(192379);
var i = t(100527),
  a = t(906732),
  s = t(26033),
  r = t(194811),
  c = t(382405),
  d = t(670451);

function o(e) {
  let {
    user: n,
    entry: t,
    className: o,
    onClose: u,
    hideContextMenu: x = !1,
    appContext: m
  } = e, {
    analyticsLocations: h
  } = (0, a.ZP)(i.Z.USER_PROFILE_RECENT_ACTIVITY_CARD);
  return (0, s.Rh)(t) ? (0, l.jsx)(a.Gt, {
    value: h,
    children: (0, l.jsx)(c.Z, {
      entry: t,
      user: n,
      className: o,
      onClose: u,
      header: (0, l.jsx)(r.Z, {
        contextMenu: x ? null : (0, l.jsx)(d.Z, {
          display: "recent",
          entry: t,
          user: n,
          onClose: u,
          appContext: m
        })
      })
    })
  }) : null
}
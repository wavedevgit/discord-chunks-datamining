/** Chunk was on 72593 **/
n.d(t, {
  Z: () => m
});
var r = n(200651);
n(192379);
var i = n(120356),
  l = n.n(i),
  o = n(442837),
  a = n(846027),
  s = n(522651),
  c = n(793148),
  u = n(131951),
  d = n(36703),
  p = n(358085),
  h = n(618158),
  f = n(35245);

function m(e) {
  let {
    className: t,
    iconClassName: n,
    sliderClassName: i,
    userId: m,
    context: g,
    currentWindow: b = window,
    location: _
  } = e, {
    currentVolume: C,
    muted: v
  } = (0, o.cj)([u.Z], () => ({
    currentVolume: u.Z.getLocalVolume(m, g),
    muted: u.Z.isLocalMute(m, g)
  }));
  return (0, r.jsx)(h.Z, {
    children: (0, r.jsx)(c.Z, {
      currentWindow: b,
      iconClassName: l()(n, f.controlIconColor),
      sliderClassName: i,
      className: t,
      value: (0, d.P)(C),
      muted: v,
      maxValue: p.isPlatformEmbedded ? 200 : 100,
      onValueChange: e => {
        e > 0 && v && a.Z.toggleLocalMute(m, g), a.Z.setLocalVolume(m, (0, d.A)(e), g)
      },
      onToggleMute: () => {
        null != _ && (0, s.v)(_, s.d.VOLUME, v), a.Z.toggleLocalMute(m, g)
      }
    })
  })
}
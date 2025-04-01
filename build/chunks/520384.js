/** Chunk was on 13323 **/
n.d(t, {
  Z: () => g
});
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(906732),
  o = n(921801),
  l = n(695346),
  c = n(569550),
  d = n(726985),
  u = n(388032),
  m = n(685786);

function g(e) {
  let {
    refreshStyles: t = !1
  } = e, n = l.I0.useSetting(), {
    analyticsLocations: g
  } = (0, a.ZP)(), p = i.useCallback(e => {
    (0, c.Z)("stream_previews_disabled", e, l.I0.getSetting(), g), l.I0.updateSetting(e)
  }, [g]), h = (0, r.jsx)(s.j7V, {
    value: n,
    onChange: p,
    note: u.NW.string(u.t.jTNPHB),
    hideBorder: t,
    children: u.NW.string(u.t["1CzWUF"])
  });
  return (0, r.jsx)(o.F, {
    setting: d.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS,
    children: t ? h : (0, r.jsx)(s.hjN, {
      className: m.marginBottom20,
      title: u.NW.string(u.t.OBwCXF),
      children: h
    })
  })
}
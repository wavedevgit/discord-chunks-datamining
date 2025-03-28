/** Chunk was on 20447 **/
n.d(t, {
  Z: () => p
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(442837),
  o = n(481060),
  l = n(846027),
  c = n(921801),
  d = n(131951),
  u = n(726985),
  m = n(388032),
  g = n(802138);

function p(e) {
  let {
    refreshStyles: t = !1
  } = e, {
    sidechainEnabled: n,
    sidechainStrength: i
  } = (0, a.cj)([d.Z], () => ({
    sidechainEnabled: d.Z.getSidechainCompression(),
    sidechainStrength: d.Z.getSidechainCompressionStrength()
  })), p = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.j7V, {
      className: t ? null : s()(g.marginTop8, g.marginBottom20),
      value: n,
      onChange: e => l.Z.setSidechainCompression(e),
      note: m.NW.string(m.t.zlA23N),
      hideBorder: t,
      children: m.NW.string(m.t["/jwMtr"])
    }), (0, r.jsx)(o.xJW, {
      title: m.NW.string(m.t.fhEzfn),
      children: (0, r.jsx)(o.iRW, {
        initialValue: i,
        minValue: 1,
        onValueChange: e => l.Z.setSidechainCompressionStrength(e)
      })
    })]
  });
  return (0, r.jsx)(c.F, {
    setting: u.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
    children: t ? p : (0, r.jsx)(o.hjN, {
      className: g.marginBottom20,
      children: p
    })
  })
}
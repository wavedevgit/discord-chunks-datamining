/** Chunk was on 51724 **/
n.d(t, {
  Z: () => g
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(442837),
  l = n(481060),
  o = n(846027),
  c = n(921801),
  d = n(131951),
  u = n(726985),
  m = n(388032),
  p = n(802138);

function g(e) {
  let {
    refreshStyles: t = !1
  } = e, {
    sidechainEnabled: n,
    sidechainStrength: i
  } = (0, a.cj)([d.Z], () => ({
    sidechainEnabled: d.Z.getSidechainCompression(),
    sidechainStrength: d.Z.getSidechainCompressionStrength()
  })), g = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.j7V, {
      className: t ? null : s()(p.marginTop8, p.marginBottom20),
      value: n,
      onChange: e => o.Z.setSidechainCompression(e),
      note: m.NW.string(m.t.zlA23N),
      hideBorder: t,
      children: m.NW.string(m.t["/jwMtr"])
    }), (0, r.jsx)(l.xJW, {
      title: m.NW.string(m.t.fhEzfn),
      children: (0, r.jsx)(l.iRW, {
        initialValue: i,
        minValue: 1,
        onValueChange: e => o.Z.setSidechainCompressionStrength(e)
      })
    })]
  });
  return (0, r.jsx)(c.F, {
    setting: u.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
    children: t ? g : (0, r.jsx)(l.hjN, {
      className: p.marginBottom20,
      children: g
    })
  })
}
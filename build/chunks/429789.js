/** Chunk was on 10451 **/
n.d(t, {
  Z: () => f
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(442837),
  o = n(481060),
  l = n(846027),
  c = n(313201),
  d = n(921801),
  u = n(131951),
  m = n(726985),
  g = n(388032),
  p = n(685786);
let h = (0, c.hQ)();

function f(e) {
  let {
    refreshStyles: t
  } = e, {
    attenuation: n,
    attenuateWhileSpeakingSelf: i,
    attenuateWhileSpeakingOthers: c
  } = (0, a.cj)([u.Z], () => ({
    attenuation: u.Z.getAttenuation(),
    attenuateWhileSpeakingSelf: u.Z.getAttenuateWhileSpeakingSelf(),
    attenuateWhileSpeakingOthers: u.Z.getAttenuateWhileSpeakingOthers()
  })), f = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.vwX, {
      id: h,
      tag: o.RB0.H5,
      className: p.marginBottom8,
      children: g.NW.string(g.t.oSdBvb)
    }), (0, r.jsx)(o.iRW, {
      initialValue: n,
      onValueChange: e => {
        l.Z.setAttenuation(e, i, c)
      },
      "aria-labelledby": h
    }), (0, r.jsx)(o.R94, {
      className: s()({
        [p.marginBottom20]: !t
      }),
      type: o.R94.Types.DESCRIPTION,
      children: g.NW.string(g.t["0A/8Rk"])
    }), !t && (0, r.jsx)(o.$i$, {
      className: p.marginBottom20
    }), (0, r.jsx)(o.j7V, {
      value: i,
      onChange: e => l.Z.setAttenuation(n, e, c),
      hideBorder: t,
      children: g.NW.string(g.t["9dHxRU"])
    }), (0, r.jsx)(o.j7V, {
      value: c,
      onChange: e => l.Z.setAttenuation(n, i, e),
      hideBorder: t,
      children: g.NW.string(g.t.SMt0Gh)
    })]
  });
  return (0, r.jsx)(d.F, {
    setting: m.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
    children: t ? f : (0, r.jsx)(o.hjN, {
      className: p.marginBottom20,
      children: f
    })
  })
}
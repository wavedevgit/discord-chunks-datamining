/** Chunk was on 79120 **/
n.d(t, {
  default: () => P
});
var r = n(200651);
n(192379);
var l = n(990547),
  i = n(442837),
  o = n(46973),
  a = n(481060),
  s = n(846027),
  c = n(410575),
  u = n(906732),
  d = n(213609),
  f = n(821564),
  p = n(453925),
  m = n(632304),
  g = n(131951),
  b = n(358085),
  y = n(947150),
  O = n(488021),
  h = n(822556),
  v = n(981631),
  j = n(388032),
  S = n(694189);

function P(e) {
  let {
    onClose: t,
    renderOutputDevices: n = !1,
    renderInputDevices: P = !1,
    renderInputModes: N = !1,
    renderInputVolume: x = !1,
    renderOutputVolume: I = !1,
    renderDeafen: E = !1,
    simplified: Z = !1,
    onSelect: w,
    appContext: T,
    onInteraction: C
  } = e, {
    analyticsLocations: A
  } = (0, u.ZP)();
  (0, d.Z)({
    type: l.ImpressionTypes.MENU,
    name: l.ImpressionNames.AUDIO_DEVICE_MENU,
    properties: {
      location_stack: A
    }
  });
  let D = (0, h.Z)(T),
    _ = (0, y.Z)(A, Z),
    k = (0, O.Z)(A, Z),
    W = (0, f.Z)(A),
    M = (0, p.Z)(A),
    L = (0, m.Z)(A),
    U = o.Yn.DEFAULT,
    R = g.Z.isSelfDeaf(U),
    V = (0, i.e7)([g.Z], () => g.Z.getMode()),
    B = V === v.pM4.VOICE_ACTIVITY ? v.pM4.PUSH_TO_TALK : v.pM4.VOICE_ACTIVITY;
  return (0, r.jsx)(c.Z, {
    object: v.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(a.v2r, {
      onSelect: w,
      onInteraction: C,
      className: S.menu,
      onClose: t,
      navId: "audio-device-context",
      "aria-label": j.NW.string(j.t.ZR1Ss7),
      children: [P ? _ : null, n ? k : null, !Z && N ? (0, r.jsx)(a.kSQ, {
        label: j.NW.string(j.t["pS+K2N"]),
        children: W
      }) : null, (0, r.jsxs)(a.kSQ, {
        children: [x ? M : null, I ? L : null, Z ? (0, r.jsx)(a.Clw, {}) : null, Z && E ? (0, r.jsx)(a.S89, {
          id: "deafen",
          label: j.NW.string(j.t.wjcRFR),
          action: () => s.Z.toggleSelfDeaf({
            context: U,
            location: "AudioDeviceMenu"
          }),
          checked: R
        }, "self-deafen") : null, Z && P && b.isPlatformEmbedded ? (0, r.jsx)(a.S89, {
          checked: V === v.pM4.PUSH_TO_TALK,
          id: "input-mode",
          label: j.NW.string(j.t.Q8gkVF),
          action: () => s.Z.setMode(B, void 0, void 0, {
            analyticsLocations: A
          })
        }) : null, D]
      })]
    })
  })
}
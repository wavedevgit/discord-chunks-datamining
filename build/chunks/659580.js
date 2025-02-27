/** Chunk was on 70045 **/
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
  y = n(358085),
  b = n(947150),
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
    renderInputVolume: I = !1,
    renderOutputVolume: E = !1,
    renderDeafen: x = !1,
    simplified: A = !1,
    onSelect: Z,
    appContext: T,
    onInteraction: w
  } = e, {
    analyticsLocations: C
  } = (0, u.ZP)();
  (0, d.Z)({
    type: l.ImpressionTypes.MENU,
    name: l.ImpressionNames.AUDIO_DEVICE_MENU,
    properties: {
      location_stack: C
    }
  });
  let _ = (0, h.Z)(T),
    D = (0, b.Z)(C, A),
    L = (0, O.Z)(C, A),
    k = (0, f.Z)(C),
    W = (0, p.Z)(C),
    M = (0, m.Z)(C),
    U = o.Yn.DEFAULT,
    R = g.Z.isSelfDeaf(U),
    G = (0, i.e7)([g.Z], () => g.Z.getMode()),
    F = G === v.pM4.VOICE_ACTIVITY ? v.pM4.PUSH_TO_TALK : v.pM4.VOICE_ACTIVITY;
  return (0, r.jsx)(c.Z, {
    object: v.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(a.v2r, {
      onSelect: Z,
      onInteraction: w,
      className: S.menu,
      onClose: t,
      navId: "audio-device-context",
      "aria-label": j.NW.string(j.t.ZR1Ss7),
      children: [P ? D : null, n ? L : null, !A && N ? (0, r.jsx)(a.kSQ, {
        label: j.NW.string(j.t["pS+K2N"]),
        children: k
      }) : null, (0, r.jsxs)(a.kSQ, {
        children: [I ? W : null, E ? M : null, A ? (0, r.jsx)(a.Clw, {}) : null, A && x ? (0, r.jsx)(a.S89, {
          id: "deafen",
          label: j.NW.string(j.t.wjcRFR),
          action: () => s.Z.toggleSelfDeaf({
            context: U,
            location: "AudioDeviceMenu"
          }),
          checked: R
        }, "self-deafen") : null, A && P && y.isPlatformEmbedded ? (0, r.jsx)(a.S89, {
          checked: G === v.pM4.PUSH_TO_TALK,
          id: "input-mode",
          label: j.NW.string(j.t.Q8gkVF),
          action: () => s.Z.setMode(F, void 0, void 0, {
            analyticsLocations: C
          })
        }) : null, _]
      })]
    })
  })
}
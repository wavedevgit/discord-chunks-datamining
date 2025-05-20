/** Chunk was on 80125 **/
n.d(t, {
  Z: () => f
});
var r = n(255367);
n(73800);
var i = n(481060),
  o = n(230711),
  l = n(40851),
  c = n(906732),
  a = n(174609),
  u = n(358085),
  s = n(981631),
  d = n(388032);

function f() {
  let e = (0, l.bp)(),
    {
      analyticsLocations: t
    } = (0, c.ZP)();
  return e === s.IlC.APP || u.isPlatformEmbedded ? (0, r.jsx)(i.sNh, {
    id: "voice-and-video-settings",
    label: d.intl.string(d.t.dsXapK),
    action: () => {
      (0, a.Z)(), o.Z.open(s.oAB.VOICE, null, {
        analyticsLocations: t
      })
    },
    icon: i.ewm
  }) : null
}
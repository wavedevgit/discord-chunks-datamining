/** Chunk was on 94470 **/
n.d(t, {
  Z: () => c
});
var r = n(255367);
n(73800);
var i = n(442837),
  l = n(481060),
  o = n(475179),
  u = n(358221),
  a = n(388032);

function c(e) {
  let t = (0, i.e7)([u.Z], () => u.Z.getVoiceParticipantsHidden(e));
  return (0, r.jsx)(l.S89, {
    id: "no-video-hide",
    label: a.intl.string(a.t.BL8ss7),
    checked: !t,
    action: () => o.Z.toggleVoiceParticipantsHidden(e, !t)
  })
}
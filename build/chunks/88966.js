/** Chunk was on 99476 **/
n.d(r, {
  Z: () => u
});
var t = n(200651);
n(192379);
var i = n(442837),
  o = n(481060),
  s = n(493683),
  a = n(40851),
  d = n(314897),
  l = n(981631),
  c = n(388032);

function u(e, r, n) {
  let u = (0, a.Aq)();
  return (0, i.e7)([d.default], () => d.default.getId() === e) || r === l.IlC.POPOUT ? null : (0, t.jsx)(o.sNh, {
    id: "message-user",
    label: c.NW.string(c.t.OAJQlJ),
    action: () => {
      s.Z.openPrivateChannel(e), u.dispatch(l.CkL.POPOUT_CLOSE), (0, o.pTH)()
    },
    icon: n
  })
}
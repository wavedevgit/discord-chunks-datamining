/** Chunk was on 78650 **/
n.d(t, {
  Z: () => d
});
var i = n(255367);
n(73800);
var r = n(481060),
  l = n(346479),
  a = n(665906),
  o = n(981631),
  s = n(388032);

function d(e) {
  var t, n;
  if (!(0, a.Xb)(e) || e.type !== o.d4z.PRIVATE_THREAD) return null;
  let d = null == (n = null == (t = e.threadMetadata) ? void 0 : t.invitable) || n;
  return (0, i.jsx)(r.S89, {
    id: "toggle-thread-invitable",
    label: s.intl.string(s.t.s2rpNT),
    checked: d,
    action: () => l.Z.setInvitable(e, !d)
  })
}
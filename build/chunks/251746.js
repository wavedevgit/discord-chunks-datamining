/** Chunk was on 78650 **/
n.d(t, {
  Z: () => g
});
var i = n(255367),
  r = n(73800),
  l = n(392711),
  a = n.n(l),
  o = n(442837),
  s = n(481060),
  d = n(66999),
  u = n(665906),
  c = n(979651),
  f = n(557135),
  h = n(388032);

function g(e) {
  let t = (0, u.Y)(e),
    n = (0, o.e7)([c.Z], () => c.Z.isInChannel(e.id)),
    l = (0, o.e7)([c.Z], () => !a().isEmpty(c.Z.getVoiceStatesForChannel(e.id))),
    {
      needSubscriptionToAccess: g
    } = (0, d.Z)(e.id),
    v = r.useCallback(() => {
      f.Z.handleVoiceConnect({
        channel: e,
        connected: n,
        needSubscriptionToAccess: g,
        locked: !1
      })
    }, [e, n, g]);
  return n || !t ? null : (0, i.jsx)(s.sNh, {
    id: "join-thread-voice",
    label: l ? h.intl.string(h.t["0D/6R0"]) : h.intl.string(h.t.My50nZ),
    action: v
  })
}
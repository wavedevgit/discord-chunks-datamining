/** Chunk was on 70675 **/
n.d(t, {
  Z: () => P
});
var l = n(200651);
n(192379);
var r = n(442837),
  i = n(481060),
  a = n(749210),
  o = n(287734),
  u = n(933557),
  s = n(314897),
  c = n(592125),
  d = n(984933),
  g = n(271383),
  Z = n(430824),
  b = n(496675),
  f = n(699516),
  p = n(594174),
  O = n(979651),
  m = n(934415),
  N = n(700785),
  h = n(981631),
  j = n(388032);

function P(e, t) {
  let n = (0, r.e7)([d.ZP], () => d.ZP.getChannels(t)[d.Zb], [t]),
    P = (0, r.e7)([O.Z, c.Z], () => {
      let n = O.Z.getUserVoiceChannelId(t, e.id);
      return c.Z.getChannel(n)
    }, [t, e.id]);
  if ((0, r.e7)([g.ZP], () => g.ZP.isGuestOrLurker(t, e.id), [t, e.id]) || null == P) return null;
  let x = e.id === s.default.getId();
  if (!x && !b.Z.can(h.Plq.MOVE_MEMBERS, P)) return null;
  let v = n.filter(t => {
    let {
      channel: n
    } = t;
    return n.id !== P.id && (x ? b.Z.can(h.Plq.CONNECT, n) && !(0, m.rY)(n, O.Z, Z.Z) : b.Z.can(h.Plq.MOVE_MEMBERS, n) && (b.Z.can(h.Plq.CONNECT, n) || N.BT({
      permission: h.Plq.CONNECT,
      user: e,
      context: n
    })) && !(0, m.rY)(n, O.Z, Z.Z))
  });
  return 0 === v.length ? null : (0, l.jsx)(i.sNh, {
    id: "voice-move",
    label: j.NW.string(j.t.FAplmp),
    children: v.map(n => {
      let {
        channel: r
      } = n;
      return (0, l.jsx)(i.sNh, {
        id: r.id,
        action: () => {
          e.id === s.default.getId() ? o.default.selectVoiceChannel(r.id) : a.Z.setChannel(t, e.id, r.id)
        },
        label: (0, u.F6)(r, p.default, f.Z)
      }, r.id)
    })
  })
}
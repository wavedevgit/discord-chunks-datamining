/** Chunk was on 87918 **/
n.d(t, {
  Z: () => d
}), n(388685);
var i = n(442837),
  l = n(357156),
  a = n(984933),
  r = n(430824),
  o = n(496675),
  u = n(981631);

function d(e, t) {
  return (0, i.e7)([r.Z, a.ZP, o.Z], () => {
    let n = r.Z.getGuild(e);
    if (o.Z.can(u.Plq.ADMINISTRATOR, n) || o.Z.can(u.Plq.CREATE_EVENTS, n)) return !0;
    for (let {
        channel: n
      }
      of a.ZP.getChannels(e)[a.Zb])
      if (null == t || n.type === t) {
        let [e] = (0, l.Ob)(n);
        if (o.Z.can(e, n)) return !0
      } return !1
  }, [e, t])
}
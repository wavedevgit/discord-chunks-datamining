/** Chunk was on 78625 **/
n.d(t, {
  Z: () => s
}), n(47120);
var o = n(442837),
  i = n(357156),
  a = n(984933),
  r = n(430824),
  l = n(496675),
  c = n(981631);

function s(e, t) {
  return (0, o.e7)([r.Z, a.ZP, l.Z], () => {
    let n = r.Z.getGuild(e);
    if (l.Z.can(c.Plq.ADMINISTRATOR, n) || l.Z.can(c.Plq.CREATE_EVENTS, n)) return !0;
    for (let {
        channel: n
      }
      of a.ZP.getChannels(e)[a.Zb])
      if (null == t || n.type === t) {
        let [e] = (0, i.Ob)(n);
        if (l.Z.can(e, n)) return !0
      } return !1
  }, [e, t])
}
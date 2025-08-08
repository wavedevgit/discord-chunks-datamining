/** Chunk was on 82875 **/
t.d(n, {
  Z: () => s
}), t(388685);
var r = t(442837),
  o = t(357156),
  i = t(984933),
  a = t(430824),
  l = t(496675),
  c = t(981631);

function s(e, n) {
  return (0, r.e7)([a.Z, i.ZP, l.Z], () => {
    let t = a.Z.getGuild(e);
    if (l.Z.can(c.Plq.ADMINISTRATOR, t) || l.Z.can(c.Plq.CREATE_EVENTS, t)) return !0;
    for (let {
        channel: t
      }
      of i.ZP.getChannels(e)[i.Zb])
      if (null == n || t.type === n) {
        let [e] = (0, o.Ob)(t);
        if (l.Z.can(e, t)) return !0
      } return !1
  }, [e, n])
}
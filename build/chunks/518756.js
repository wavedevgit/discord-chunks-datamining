/** Chunk was on 86029 **/
n.d(t, {
  Z: () => c
}), n(47120);
var r = n(442837),
  i = n(357156),
  l = n(984933),
  o = n(430824),
  a = n(496675),
  s = n(981631);

function c(e, t) {
  return (0, r.e7)([o.Z, l.ZP, a.Z], () => {
    let n = o.Z.getGuild(e);
    if (a.Z.can(s.Plq.ADMINISTRATOR, n) || a.Z.can(s.Plq.CREATE_EVENTS, n)) return !0;
    for (let {
        channel: n
      }
      of l.ZP.getChannels(e)[l.Zb])
      if (null == t || n.type === t) {
        let [e] = (0, i.Ob)(n);
        if (a.Z.can(e, n)) return !0
      } return !1
  }, [e, t])
}
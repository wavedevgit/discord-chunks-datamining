/** Chunk was on 83098 **/
n.d(t, {
  _: () => u
});
var r = n(192379),
  l = n(442837),
  s = n(594174),
  a = n(823379),
  i = n(51144),
  o = n(388032);

function u(e) {
  let t = (0, l.Wu)([s.default], () => e.recipients.map(e => s.default.getUser(e)).filter(a.lm).map(e => i.ZP.getName(e)));
  return r.useMemo(() => "" === e.name ? null : function(e) {
    if (0 === e.length) return null;
    if (1 === e.length) return o.NW.formatToPlainString(o.t["J+Wpsr"], {
      first: e[0]
    });
    if (2 === e.length) return o.NW.formatToPlainString(o.t.gwRP0d, {
      first: e[0],
      second: e[1]
    });
    if (3 === e.length) return o.NW.formatToPlainString(o.t.QDB5en, {
      first: e[0],
      second: e[1],
      third: e[2]
    });
    let t = e.length - 3;
    return o.NW.formatToPlainString(o.t.VYfueX, {
      first: e[0],
      second: e[1],
      third: e[2],
      count: t
    })
  }(t), [e, t])
}
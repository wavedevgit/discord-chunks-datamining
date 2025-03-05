/** Chunk was on 75101 **/
n.d(t, {
  Z: () => u
}), n(47120), n(653041);
var i = n(192379),
  r = n(442837),
  l = n(115130),
  o = n(694312),
  a = n(405625),
  c = n(664097);

function u(e) {
  let {
    guildId: t,
    enableFilter: n = !1
  } = e, {
    filter: u
  } = (0, r.cj)([l.Z], () => ({
    filter: l.Z.getFilter()
  })), d = (0, o.E)(t), s = (0, a.Z)(d), p = (0, c.o)();
  return i.useMemo(() => {
    function e(e) {
      return !!(!n || "" === u || e.application.name.toLowerCase().includes(u.toLowerCase()))
    }
    let t = [...p].filter(e),
      i = new Set(t.map(e => e.application.id));
    for (let n of s) !i.has(n.application.id) && e(n) && t.push(n);
    return t
  }, [p, n, u, s])
}
/** Chunk was on 35755 **/
n.d(t, {
  Z: () => c
}), n(47120), n(653041);
var i = n(192379),
  l = n(442837),
  r = n(115130),
  o = n(694312),
  a = n(405625),
  s = n(664097);

function c(e) {
  let {
    guildId: t,
    enableFilter: n = !1,
    context: c
  } = e, {
    filter: u
  } = (0, l.cj)([r.Z], () => ({
    filter: r.Z.getFilter()
  })), d = (0, o.E)(t, c), p = (0, a.Z)(d), m = (0, s.o)();
  return i.useMemo(() => {
    function e(e) {
      return !!(!n || "" === u || e.application.name.toLowerCase().includes(u.toLowerCase()))
    }
    let t = [...m].filter(e),
      i = new Set(t.map(e => e.application.id));
    for (let n of p) !i.has(n.application.id) && e(n) && t.push(n);
    return t
  }, [m, n, u, p])
}
/** Chunk was on 30806 **/
n.d(t, {
  Z: () => s
}), n(47120);
var i = n(192379),
  r = n(479531),
  l = n(388032);

function s(e) {
  let [t, n] = i.useState(!1), [s, o] = i.useState(null);
  return [i.useCallback(async function() {
    for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
    try {
      return o(null), n(!0), await e(...i)
    } catch (e) {
      e.message !== l.NW.string(l.t.N2yb9f) && o(e instanceof r.Z ? e : new r.Z(e))
    } finally {
      n(!1)
    }
  }, [e]), {
    loading: t,
    error: s
  }]
}
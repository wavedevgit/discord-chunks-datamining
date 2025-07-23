/** Chunk was on 25526 **/
r.d(t, {
  Z: () => s
}), r(388685);
var n = r(73800),
  i = r(479531),
  a = r(388032);

function s(e) {
  let [t, r] = n.useState(!1), [s, o] = n.useState(null);
  return [n.useCallback(async function() {
    for (var t = arguments.length, n = Array(t), s = 0; s < t; s++) n[s] = arguments[s];
    try {
      return o(null), r(!0), await e(...n)
    } catch (e) {
      e.message !== a.intl.string(a.t.N2yb9f) && o(e instanceof i.Z ? e : new i.Z(e))
    } finally {
      r(!1)
    }
  }, [e]), {
    loading: t,
    error: s
  }]
}
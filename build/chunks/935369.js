/** Chunk was on 89444 (61a9107cfbb37ce6.js) **/
n.d(t, {
  Z: () => o
}), n(47120);
var i = n(192379),
  r = n(479531),
  l = n(388032);

function o(e) {
  let [t, n] = i.useState(!1), [o, s] = i.useState(null);
  return [i.useCallback(async function() {
    for (var t = arguments.length, i = Array(t), o = 0; o < t; o++) i[o] = arguments[o];
    try {
      return s(null), n(!0), await e(...i)
    } catch (e) {
      e.message !== l.NW.string(l.t.N2yb9f) && s(e instanceof r.Z ? e : new r.Z(e))
    } finally {
      n(!1)
    }
  }, [e]), {
    loading: t,
    error: o
  }]
}
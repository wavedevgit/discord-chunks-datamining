/** Chunk was on 13323 **/
n.d(t, {
  Z: () => o
}), n(47120), n(566702), n(301563);
var r = n(192379),
  i = n(304445),
  s = n(997383);
let a = [];

function o(e) {
  let {
    visible: t,
    autocompleterResultTypes: n,
    autocompleterOptions: o,
    autocompleterBeforeCreateSearchContext: l
  } = e, [c, d] = r.useState(""), [u, m] = r.useState(a), g = r.useCallback((e, t) => {
    "" === (t = t.trim()).trim() ? m(a) : m(e)
  }, []);
  r.useEffect(() => i.Z.addRouteChangeListener(() => {
    d("")
  }), []);
  let [p] = r.useState(() => new s.Z(g, n, void 0, o));
  return r.useEffect(() => {
    t ? (null == l || l(p), p.createSearchContext()) : (p.clean(), d(""))
  }, [t, p, l]), {
    queryResults: u,
    query: c,
    updateQuery: r.useCallback(e => {
      d(e), p.search(e)
    }, [p])
  }
}
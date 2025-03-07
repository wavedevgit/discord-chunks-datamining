/** Chunk was on 1815 **/
n.d(t, {
  Z: () => l
}), n(47120), n(566702), n(301563);
var r = n(192379),
  i = n(304445),
  s = n(997383);
let a = [];

function l(e) {
  let {
    visible: t,
    autocompleterResultTypes: n,
    autocompleterOptions: l,
    autocompleterBeforeCreateSearchContext: o
  } = e, [c, d] = r.useState(""), [u, m] = r.useState(a), p = r.useCallback((e, t) => {
    "" === (t = t.trim()).trim() ? m(a) : m(e)
  }, []);
  r.useEffect(() => i.Z.addRouteChangeListener(() => {
    d("")
  }), []);
  let [g] = r.useState(() => new s.Z(p, n, void 0, l));
  return r.useEffect(() => {
    t ? (null == o || o(g), g.createSearchContext()) : (g.clean(), d(""))
  }, [t, g, o]), {
    queryResults: u,
    query: c,
    updateQuery: r.useCallback(e => {
      d(e), g.search(e)
    }, [g])
  }
}
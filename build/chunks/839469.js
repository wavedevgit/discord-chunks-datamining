/** Chunk was on 20447 **/
n.d(t, {
  E: () => l
}), n(47120), n(301563), n(566702);
var r = n(192379),
  i = n(170401),
  s = n(996733),
  a = n(991346),
  o = n(726985);

function l() {
  let e = (0, s.Z7)(),
    t = (0, a.Pt)(),
    n = r.useRef(new i.Z((0, a.ji)(t))),
    [l, c] = r.useState(!1),
    [d, u] = r.useState(o.QF),
    m = r.useCallback(async e => {
      u(await n.current.search(e.trim())), c(!0)
    }, []);
  return r.useEffect(() => {
    "" === e || e.length < 2 ? (u(o.QF), c(!1)) : m(e)
  }, [e, m]), {
    hasSearchResults: l,
    searchResults: d
  }
}
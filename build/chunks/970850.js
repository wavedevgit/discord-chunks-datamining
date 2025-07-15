/** Chunk was on 51164 **/
r.d(t, {
  Z: () => c
}), r(388685), r(49124);
var n = r(73800),
  l = r(442837),
  i = r(603263),
  a = r(768119),
  o = r(981631);

function c(e) {
  let {
    searchId: t
  } = e, [r, c] = n.useState(o.QIO.NEWEST), s = (0, l.e7)([a.Z], () => a.Z.getQuery(t)), u = n.useRef(null);
  return n.useEffect(() => {
    JSON.stringify(u.current) !== JSON.stringify(s) && (c(i.Vj({
      sort_by: null == s ? void 0 : s.sort_by,
      sort_order: null == s ? void 0 : s.sort_order
    })), u.current = s)
  }, [s]), {
    searchMode: r,
    setSearchMode: c
  }
}
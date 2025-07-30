/** Chunk was on 12769 **/
r.d(t, {
  Z: () => c
}), r(388685), r(49124);
var n = r(73800),
  i = r(442837),
  a = r(518944),
  s = r(607802),
  l = r(981631);

function c(e) {
  let {
    searchId: t
  } = e, [r, c] = n.useState(l.QIO.NEWEST), o = (0, i.e7)([a.Z], () => a.Z.getSearchResultsQuery(t)), u = n.useRef(null);
  return n.useEffect(() => {
    JSON.stringify(u.current) !== JSON.stringify(o) && (c((0, s.Vj)({
      sort_by: null == o ? void 0 : o.sort_by,
      sort_order: null == o ? void 0 : o.sort_order
    })), u.current = o)
  }, [o]), {
    searchMode: r,
    setSearchMode: c
  }
}
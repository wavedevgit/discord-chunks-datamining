/** Chunk was on 12769 **/
r.d(t, {
  Z: () => l
}), r(388685), r(49124);
var n = r(73800),
  i = r(442837),
  s = r(518944),
  a = r(607802),
  c = r(981631);

function l(e) {
  let {
    searchId: t
  } = e, [r, l] = n.useState(c.QIO.NEWEST), o = (0, i.e7)([s.Z], () => s.Z.getSearchResultsQuery(t)), u = n.useRef(null);
  return n.useEffect(() => {
    JSON.stringify(u.current) !== JSON.stringify(o) && (l((0, a.Vj)({
      sort_by: null == o ? void 0 : o.sort_by,
      sort_order: null == o ? void 0 : o.sort_order
    })), u.current = o)
  }, [o]), {
    searchMode: r,
    setSearchMode: l
  }
}
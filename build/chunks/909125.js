/** Chunk was on 12769 **/
r.d(t, {
  M: () => o
}), r(388685);
var n = r(73800),
  i = r(619864),
  a = r(672041),
  s = r(981631);
let l = i.v + s.vpv,
  c = i.v / s.vpv;

function o(e) {
  let {
    totalResults: t,
    isSearching: r
  } = e, [o, u] = n.useState(t);
  n.useEffect(() => {
    r || u(t)
  }, [t, r]);
  let d = o > i.v + s.vpv,
    _ = (0, a.t)({
      location: "useSearchResultsPagination"
    });
  return {
    isPaginationTotalCountLimited: d && _,
    paginationTotalCount: Math.min(o, l),
    paginationMaxIndex: c
  }
}
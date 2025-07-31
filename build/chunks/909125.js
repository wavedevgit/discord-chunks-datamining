/** Chunk was on 12769 **/
r.d(t, {
  M: () => o
}), r(388685);
var n = r(73800),
  i = r(619864),
  s = r(672041),
  a = r(981631);
let c = i.v + a.vpv,
  l = i.v / a.vpv;

function o(e) {
  let {
    totalResults: t,
    isSearching: r
  } = e, [o, u] = n.useState(t);
  n.useEffect(() => {
    r || u(t)
  }, [t, r]);
  let d = o > i.v + a.vpv,
    _ = (0, s.t)({
      location: "useSearchResultsPagination"
    });
  return {
    isPaginationTotalCountLimited: d && _,
    paginationTotalCount: Math.min(o, c),
    paginationMaxIndex: l
  }
}
/** Chunk was on 51164 **/
r.d(t, {
  Z: () => s
});
var n = r(603263),
  l = r(977885),
  i = r(416638),
  a = r(652399),
  o = r(981631),
  c = r(862825);
let s = {
  fetchCrossDMMessages: function(e) {
    let {
      searchContext: t,
      selectedPageIndex: r,
      queryString: s,
      searchMode: u
    } = e, b = (0, i.WJ)(t);
    n.Gn(b), n.QY(b, !1), n.h7(b, s), l.Z.clearSearchState(b), l.Z.fetchMessages({
      searchContext: t,
      searchTabs: [c.sR.MESSAGES],
      searchQueryString: s,
      searchMode: u,
      getId: () => b,
      getLimit: () => o.vpv,
      onFetchStart: e => {
        let {
          searchQueryString: l,
          searchQuery: i
        } = e;
        n.Vs(b, l, i, r * o.vpv), (0, a.tI)({
          searchType: t.type,
          searchId: b,
          query: i,
          queryString: l
        })
      },
      pagination: {
        offset: r * o.vpv
      },
      trackExactTotalHits: !0
    })
  }
}
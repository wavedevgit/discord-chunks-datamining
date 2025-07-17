/** Chunk was on 51164 **/
r.d(t, {
  Z: () => o
});
var n = r(603263),
  l = r(977885),
  a = r(416638),
  i = r(981631),
  c = r(862825);
let o = {
  fetchCrossDMMessages: function(e) {
    let {
      searchContext: t,
      selectedPageIndex: r,
      queryString: o,
      searchMode: s
    } = e, u = (0, a.WJ)(t);
    n.Gn(u), n.QY(u, !1), n.h7(u, o), l.Z.clearSearchState(u), l.Z.fetchMessages({
      searchContext: t,
      searchTabs: [c.sR.MESSAGES],
      searchQueryString: o,
      searchMode: s,
      getId: () => u,
      getLimit: () => i.vpv,
      onFetchStart: e => {
        let {
          searchQueryString: t,
          searchQuery: l
        } = e;
        n.Vs(u, t, l, r * i.vpv)
      },
      pagination: {
        offset: r * i.vpv
      },
      trackExactTotalHits: !0
    })
  }
}
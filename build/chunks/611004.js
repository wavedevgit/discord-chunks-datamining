/** Chunk was on 12769 **/
r.d(t, {
  Z: () => u
});
var n = r(748610),
  i = r(607802),
  a = r(187462),
  s = r(532496),
  l = r(723642),
  c = r(981631);

function o(e) {
  let {
    searchId: t,
    searchQueryString: r,
    searchQuery: i,
    offset: a
  } = e;
  n.Z.clearSearchMessages(t), n.Z.setShowNoResultsAlt(t), n.Z.setShowBlockedResults(t, !1), n.Z.updateSearchResultsQuery(t, r, i, a), n.Z.addWebSearchHistoryItem(t, r)
}
let u = {
  fetchCrossDMMessages: function(e) {
    let {
      searchContext: t,
      selectedPageIndex: r,
      queryString: a,
      searchMode: s
    } = e, u = (0, i.WJ)(t);
    n.Z.fetchTabMessages({
      searchContext: t,
      searchTabs: [l.sR.MESSAGES],
      searchQueryString: a,
      searchMode: s,
      getId: () => u,
      getLimit: () => c.vpv,
      onFetchStart: e => {
        let {
          searchQueryString: t,
          searchQuery: n
        } = e;
        o({
          searchId: u,
          searchQueryString: t,
          searchQuery: n,
          offset: r * c.vpv
        })
      },
      pagination: {
        offset: r * c.vpv
      },
      trackExactTotalHits: !0
    })
  },
  cleanUpSearchState: function(e) {
    n.Z.clearSearchState(e), n.Z.clearSearchMessages(e), a.Z.cleanUp(e), s.Z.cleanUp(e)
  },
  fetchMessages: function(e) {
    var t, r;
    let {
      searchId: a,
      searchQuery: s,
      queryString: l,
      searchEverywhere: c,
      offset: u,
      searchMode: d
    } = e, _ = (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n
        })
      }
      return e
    }({}, s, null != d ? (0, i.zH)(d) : {}), r = r = {
      offset: u
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t);
    o({
      searchId: a,
      searchQueryString: l,
      searchQuery: _,
      offset: u
    }), n.Z.fetchMessages({
      searchId: a,
      query: _,
      searchEverywhere: c
    })
  }
}
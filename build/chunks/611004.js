/** Chunk was on 12769 **/
r.d(t, {
  Z: () => u
});
var n = r(748610),
  i = r(607802),
  s = r(187462),
  a = r(532496),
  c = r(723642),
  l = r(981631);

function o(e) {
  let {
    searchContext: t,
    searchQueryString: r,
    searchQuery: s,
    offset: a
  } = e, c = (0, i.WJ)(t);
  n.Z.clearSearchMessages(c), n.Z.setShowNoResultsAlt(c), n.Z.setShowBlockedResults(c, !1), n.Z.updateSearchResultsQuery(c, r, s, a), n.Z.addWebSearchHistoryItem(c, r)
}
let u = {
  fetchCrossDMMessages: function(e) {
    let {
      searchContext: t,
      selectedPageIndex: r,
      queryString: s,
      searchMode: a
    } = e, u = (0, i.WJ)(t);
    n.Z.fetchTabMessages({
      searchContext: t,
      searchTabs: [c.sR.MESSAGES],
      searchQueryString: s,
      searchMode: a,
      getId: () => u,
      getLimit: () => l.vpv,
      onFetchStart: e => {
        let {
          searchQueryString: n,
          searchQuery: i
        } = e;
        o({
          searchContext: t,
          searchQueryString: n,
          searchQuery: i,
          offset: r * l.vpv
        })
      },
      pagination: {
        offset: r * l.vpv
      },
      trackExactTotalHits: !0
    })
  },
  cleanUpSearchState: function(e) {
    let t = (0, i.WJ)(e);
    n.Z.clearSearchState(t), n.Z.clearSearchMessages(t), s.Z.cleanUp(t), a.Z.cleanUp(t)
  },
  fetchMessages: function(e) {
    var t, r;
    let {
      searchContext: s,
      searchQuery: a,
      queryString: c,
      searchEverywhere: l,
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
    }({}, a, null != d ? (0, i.zH)(d) : {}), r = r = {
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
      searchContext: s,
      searchQueryString: c,
      searchQuery: _,
      offset: u
    }), n.Z.fetchMessages({
      searchContext: s,
      query: _,
      searchEverywhere: l
    })
  }
}
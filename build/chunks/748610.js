/** Chunk was on 93239 **/
r.d(t, {
  Z: () => _
}), r(388685), r(415506);
var n = r(392711),
  i = r.n(n),
  s = r(570140),
  a = r(952537),
  c = r(607802),
  l = r(187462),
  o = r(532496),
  u = r(981631);

function d() {
  return !1
}
let _ = {
  fetchTabMessages: function(e) {
    let {
      searchContext: t,
      searchTabs: r,
      searchQueryString: n,
      pagination: l,
      trackExactTotalHits: d,
      getId: _,
      getLimit: p,
      onFetchStart: h,
      onFetchSuccess: y,
      searchMode: f = u.QIO.NEWEST
    } = e, S = (0, c.kG)(n), b = (0, c.$G)(S);
    ! function(e) {
      if (!Array.isArray(e.pinned)) return;
      let t = e.pinned.some(e => !0 === e);
      e.pinned = t
    }(b);
    let E = function(e) {
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
      }({}, b, (0, c.zH)(f)),
      g = (0, c.s5)(t);
    null != g && (0, c.jW)(E, g);
    let O = o.Z.create({
      id: (0, c.Tm)(t),
      searchContext: t,
      searchQuery: E,
      searchTabs: r,
      getLimit: p,
      pagination: l,
      trackExactTotalHits: d
    });
    null == h || h({
      searchContext: t,
      searchQueryString: n,
      searchQuery: E
    });
    let m = r.map(e => _(e));
    return s.Z.dispatch({
      type: "SEARCH_MESSAGES_START",
      ids: m
    }), O.fetch(e => {
      let {
        body: r
      } = e, n = Object.entries(r.tabs);
      s.Z.dispatch({
        type: "SEARCH_MESSAGES_SUCCESS",
        guildId: g,
        data: n.map(e => {
          var t, n, s;
          let [c, l] = e, o = _(c), u = l.cursor;
          return {
            id: o,
            analyticsId: r.analytics_id,
            totalResults: l.total_results,
            cursor: null != u && i().isEmpty(u) ? null : u,
            messages: l.messages,
            channels: null != (t = l.channels) ? t : [],
            threads: null != (n = l.threads) ? n : [],
            members: (null != (s = l.members) ? s : []).map(e => (0, a.Z)(e)),
            doingHistoricalIndex: r.doing_deep_historical_index,
            documentsIndexed: r.documents_indexed
          }
        })
      }), null == y || y({
        searchContext: t,
        tabEntries: n
      })
    }, () => {
      s.Z.dispatch({
        type: "SEARCH_MESSAGES_INDEXING",
        ids: m
      })
    }, e => {
      s.Z.dispatch({
        type: "SEARCH_MESSAGES_FAILURE",
        ids: m,
        error: e
      })
    }), !0
  },
  fetchMessages: function(e) {
    let {
      searchContext: t,
      query: r,
      searchEverywhere: n
    } = e, i = (0, c.s5)(t);
    null != i && (0, c.jW)(r, i), n && (r.search_everywhere = !0);
    let o = (0, c.WJ)(t),
      u = l.Z.create({
        id: o,
        searchType: t.type,
        searchQuery: r
      });
    s.Z.dispatch({
      type: "SEARCH_MESSAGES_START",
      ids: [o]
    }), u.fetch(e => {
      var t, r, n;
      s.Z.dispatch({
        type: "SEARCH_MESSAGES_SUCCESS",
        guildId: i,
        data: [{
          id: o,
          analyticsId: e.body.analytics_id,
          totalResults: e.body.total_results,
          messages: e.body.messages,
          threads: null != (t = e.body.threads) ? t : [],
          members: (null != (r = e.body.members) ? r : []).map(e => (0, a.Z)(e)),
          doingHistoricalIndex: e.body.doing_deep_historical_index,
          documentsIndexed: e.body.documents_indexed,
          channels: null != (n = e.body.channels) ? n : [],
          cursor: null
        }]
      })
    }, () => {
      s.Z.dispatch({
        type: "SEARCH_MESSAGES_INDEXING",
        ids: [o]
      })
    }, e => {
      s.Z.dispatch({
        type: "SEARCH_MESSAGES_FAILURE",
        ids: [o],
        error: e
      })
    })
  },
  clearSearchRecentMessages: function() {
    s.Z.dispatch({
      type: "SEARCH_RECENT_MESSAGES_CLEAR"
    })
  },
  clearAllSearchMesssages: function() {
    s.Z.dispatch({
      type: "SEARCH_MESSAGES_CLEAR_ALL"
    })
  },
  clearSearchMessages: function(e) {
    s.Z.dispatch({
      type: "SEARCH_MESSAGES_CLEAR",
      id: e
    })
  },
  addNativeSearchHistoryItem: function(e, t) {
    1
  },
  removeNativeSearchHistoryItem: function(e, t) {
    1
  },
  clearNativeSearchHistory: function(e) {
    1
  },
  addWebSearchHistoryItem: function(e, t) {
    s.Z.dispatch({
      type: "SEARCH_HISTORY_WEB_ADD_ITEM",
      searchId: e,
      query: t
    })
  },
  removeWebSearchHistoryItem: function(e, t) {
    s.Z.dispatch({
      type: "SEARCH_HISTORY_WEB_REMOVE_ITEM",
      searchId: e,
      query: t
    })
  },
  clearWebSearchHistory: function(e) {
    s.Z.dispatch({
      type: "SEARCH_HISTORY_WEB_CLEAR_ITEMS",
      searchId: e
    })
  },
  openSearchScreen: function(e) {
    s.Z.dispatch({
      type: "SEARCH_SCREEN_OPEN",
      searchContext: e,
      searchId: (0, c.WJ)(e)
    })
  },
  setShowBlockedResults: function(e, t) {
    s.Z.dispatch({
      type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
      searchId: e,
      showBlocked: t
    })
  },
  setShowNoResultsAlt: function(e) {
    s.Z.dispatch({
      type: "SEARCH_SET_SHOW_NO_RESULTS_ALT",
      searchId: e
    })
  },
  updateSearchResultsQuery: function(e, t, r, n) {
    s.Z.dispatch({
      type: "SEARCH_RESULTS_QUERY_UPDATE",
      searchId: e,
      queryString: t,
      query: r,
      offset: n
    })
  },
  ensureSearchState: function(e) {
    s.Z.wait(() => s.Z.dispatch({
      type: "SEARCH_ENSURE_SEARCH_STATE",
      searchId: e
    }))
  },
  setSearchState: function(e, t) {
    null != e && s.Z.dispatch({
      type: "SEARCH_EDITOR_STATE_CHANGE",
      searchId: e,
      editorState: t
    })
  },
  clearSearchState: function(e) {
    s.Z.wait(() => s.Z.dispatch({
      type: "SEARCH_EDITOR_STATE_CLEAR",
      searchId: e
    }))
  },
  updateAutocompleteQuery: function(e, t, r) {
    s.Z.dispatch({
      type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
      searchContext: e,
      tokens: t,
      cursorScope: r
    })
  }
}
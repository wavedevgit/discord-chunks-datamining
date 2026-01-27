/** Chunk was on 52199 **/
/** chunk id: 65600, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var n, l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk921242 = require("./921242.js");
let o = new Map,
  c = false;

function u(e) {
  var t;
  let r = null != (t = o.get(e)) ? t : {
    editorState: null,
    showBlockedResults: false,
    showNoResultsAlt: false,
    searchResultsQueryString: null,
    searchResultsQuery: null,
    searchResultsOffset: null,
    searchMode: i.z
  };
  return o.set(e, r), r
}

function d(e, t) {
  let r = o.get(e);
  return null == r ? null : t(r)
}
class h extends(n = Chunk311907.Ay.Store) {
  getEditorState(e) {
    return d(e, e => e.editorState)
  }
  shouldShowBlockedResults(e) {
    var t;
    return null != (t = d(e, e => e.showBlockedResults)) && t
  }
  shouldShowNoResultsAlt(e) {
    var t;
    return null != (t = d(e, e => e.showNoResultsAlt)) && t
  }
  getSearchResultsQueryString(e) {
    return d(e, e => e.searchResultsQueryString)
  }
  getSearchResultsQuery(e) {
    return d(e, e => e.searchResultsQuery)
  }
  getSearchMode(e) {
    return d(e, e => e.searchMode)
  }
  getSearchResultsOffset(e) {
    return d(e, e => e.searchResultsOffset)
  }
  getIsSearchTokensInitialized() {
    return c
  }
  getSearchStateIds() {
    return Array.from(o.keys())
  }
}(l = "displayName") in h ? Object.defineProperty(h, l, {
  value: "SearchQueryStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[l] = "SearchQueryStore";
let p = new h(Chunk73153.h, {
  SEARCH_RESULTS_QUERY_UPDATE: function(e) {
    let {
      id: t,
      queryString: r,
      query: n,
      offset: l
    } = e, s = u(t);
    s.searchResultsQueryString = r, s.searchResultsQuery = n, s.searchResultsOffset = null != l ? l : 0
  },
  SEARCH_EDITOR_STATE_CLEAR: function(e) {
    let {
      id: t
    } = e;
    return o.delete(t)
  },
  SEARCH_ENSURE_SEARCH_STATE: function(e) {
    let {
      id: t
    } = e;
    u(t)
  },
  SEARCH_EDITOR_STATE_CHANGE: function(e) {
    let {
      id: t,
      editorState: r
    } = e;
    u(t).editorState = r
  },
  SEARCH_SET_SHOW_BLOCKED_RESULTS: function(e) {
    let {
      id: t,
      showBlocked: r
    } = e;
    u(t).showBlockedResults = r
  },
  SEARCH_SET_SHOW_NO_RESULTS_ALT: function(e) {
    let {
      id: t
    } = e;
    u(t).showNoResultsAlt = .05 > Math.random()
  },
  SEARCH_SEARCH_MODE_UPDATE: function(e) {
    let {
      id: t,
      searchMode: r
    } = e;
    u(t).searchMode = r
  },
  SEARCH_TOKENS_REFRESHED: function() {
    c = true
  }
})
/** Chunk was on 54157 **/
/** chunk id: 817190, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var r, s, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let i = new Map;

function o(e) {
  var t;
  let n = null != (t = i.get(e)) ? t : {
    editorState: null,
    showBlockedResults: false,
    showNoResultsAlt: false,
    searchResultsQueryString: null,
    searchResultsQuery: null,
    searchResultsOffset: null
  };
  return i.set(e, n), n
}

function c(e, t) {
  let n = i.get(e);
  return null == n ? null : t(n)
}
class u extends(r = Chunk442837.ZP.Store) {
  getEditorState(e) {
    return c(e, e => e.editorState)
  }
  shouldShowBlockedResults(e) {
    var t;
    return null != (t = c(e, e => e.showBlockedResults)) && t
  }
  shouldShowNoResultsAlt(e) {
    var t;
    return null != (t = c(e, e => e.showNoResultsAlt)) && t
  }
  getSearchResultsQueryString(e) {
    return c(e, e => e.searchResultsQueryString)
  }
  getSearchResultsQuery(e) {
    return c(e, e => e.searchResultsQuery)
  }
  getSearchResultsOffset(e) {
    return c(e, e => e.searchResultsOffset)
  }
}(s = "displayName") in u ? Object.defineProperty(u, s, {
  value: "SearchQueryStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : u[s] = "SearchQueryStore";
let d = new u(Chunk570140.Z, {
  SEARCH_RESULTS_QUERY_UPDATE: function(e) {
    let {
      id: t,
      queryString: n,
      query: r,
      offset: s
    } = e, l = o(t);
    l.searchResultsQueryString = n, l.searchResultsQuery = r, l.searchResultsOffset = null != s ? s : 0
  },
  SEARCH_EDITOR_STATE_CLEAR: function(e) {
    let {
      id: t
    } = e;
    return i.delete(t)
  },
  SEARCH_ENSURE_SEARCH_STATE: function(e) {
    let {
      id: t
    } = e;
    o(t)
  },
  SEARCH_EDITOR_STATE_CHANGE: function(e) {
    let {
      id: t,
      editorState: n
    } = e;
    o(t).editorState = n
  },
  SEARCH_SET_SHOW_BLOCKED_RESULTS: function(e) {
    let {
      id: t,
      showBlocked: n
    } = e;
    o(t).showBlockedResults = n
  },
  SEARCH_SET_SHOW_NO_RESULTS_ALT: function(e) {
    let {
      id: t
    } = e;
    o(t).showNoResultsAlt = .05 > Math.random()
  }
})
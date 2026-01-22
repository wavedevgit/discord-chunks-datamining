/** Chunk was on web.js **/
/** chunk id: 65600, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk921242 = require("./921242.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = .05,
  c = new Map,
  u = false;

function d(e) {
  var t;
  let n = null != (t = c.get(e)) ? t : {
    editorState: null,
    showBlockedResults: false,
    showNoResultsAlt: false,
    searchResultsQueryString: null,
    searchResultsQuery: null,
    searchResultsOffset: null,
    searchMode: s.z
  };
  return c.set(e, n), n
}

function f(e, t) {
  let n = c.get(e);
  return null == n ? null : t(n)
}

function p(e) {
  let {
    id: t,
    editorState: n
  } = e;
  d(t).editorState = n
}

function _(e) {
  let {
    id: t
  } = e;
  d(t)
}

function h(e) {
  let {
    id: t
  } = e;
  return c.delete(t)
}

function m(e) {
  let {
    id: t,
    showBlocked: n
  } = e;
  d(t).showBlockedResults = n
}

function g(e) {
  let {
    id: t
  } = e;
  d(t).showNoResultsAlt = Math.random() < l
}

function E(e) {
  let {
    id: t,
    queryString: n,
    query: r,
    offset: i
  } = e, a = d(t);
  a.searchResultsQueryString = n, a.searchResultsQuery = r, a.searchResultsOffset = null != i ? i : 0
}

function b(e) {
  let {
    id: t,
    searchMode: n
  } = e;
  d(t).searchMode = n
}

function y() {
  u = true
}
class O extends(r = Chunk311907.Ay.Store) {
  getEditorState(e) {
    return f(e, e => e.editorState)
  }
  shouldShowBlockedResults(e) {
    var t;
    return null != (t = f(e, e => e.showBlockedResults)) && t
  }
  shouldShowNoResultsAlt(e) {
    var t;
    return null != (t = f(e, e => e.showNoResultsAlt)) && t
  }
  getSearchResultsQueryString(e) {
    return f(e, e => e.searchResultsQueryString)
  }
  getSearchResultsQuery(e) {
    return f(e, e => e.searchResultsQuery)
  }
  getSearchMode(e) {
    return f(e, e => e.searchMode)
  }
  getSearchResultsOffset(e) {
    return f(e, e => e.searchResultsOffset)
  }
  getIsSearchTokensInitialized() {
    return u
  }
  getSearchStateIds() {
    return Array.from(c.keys())
  }
}
o(O, "displayName", "SearchQueryStore");
let A = new O(Chunk73153.h, {
  SEARCH_RESULTS_QUERY_UPDATE: E,
  SEARCH_EDITOR_STATE_CLEAR: h,
  SEARCH_ENSURE_SEARCH_STATE: _,
  SEARCH_EDITOR_STATE_CHANGE: p,
  SEARCH_SET_SHOW_BLOCKED_RESULTS: m,
  SEARCH_SET_SHOW_NO_RESULTS_ALT: g,
  SEARCH_SEARCH_MODE_UPDATE: b,
  SEARCH_TOKENS_REFRESHED: y
})
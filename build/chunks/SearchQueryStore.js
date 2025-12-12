/** Chunk was on web.js **/
/** chunk id: 817190, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk125085 = require("./125085.js");

function s(e, t, n) {
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
    searchMode: a.o
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

function m(e) {
  let {
    id: t
  } = e;
  return c.delete(t)
}

function h(e) {
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
  } = e, o = d(t);
  o.searchResultsQueryString = n, o.searchResultsQuery = r, o.searchResultsOffset = null != i ? i : 0
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
class O extends(r = Chunk442837.ZP.Store) {
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
s(O, "displayName", "SearchQueryStore");
let v = new O(Chunk570140.Z, {
  SEARCH_RESULTS_QUERY_UPDATE: E,
  SEARCH_EDITOR_STATE_CLEAR: m,
  SEARCH_ENSURE_SEARCH_STATE: _,
  SEARCH_EDITOR_STATE_CHANGE: p,
  SEARCH_SET_SHOW_BLOCKED_RESULTS: h,
  SEARCH_SET_SHOW_NO_RESULTS_ALT: g,
  SEARCH_SEARCH_MODE_UPDATE: b,
  SEARCH_TOKENS_REFRESHED: y
})
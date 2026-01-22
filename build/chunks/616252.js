/** Chunk was on web.js **/
/** chunk id: 616252, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk73153 = require("./73153.js"),
  Chunk822382 = require("./822382.js");
let a = {
  addSearchHistoryItem: function(e, t) {
    let n = (0, i.Jl)(e);
    null != n && r.h.dispatch({
      type: "SEARCH_HISTORY_WEB_ADD_ITEM",
      id: n,
      query: t
    })
  },
  removeSearchHistoryItem: function(e, t) {
    let n = (0, i.Jl)(e);
    null != n && r.h.dispatch({
      type: "SEARCH_HISTORY_WEB_REMOVE_ITEM",
      id: n,
      query: t
    })
  },
  clearSearchHistory: function(e) {
    let t = (0, i.Jl)(e);
    null != t && r.h.dispatch({
      type: "SEARCH_HISTORY_WEB_CLEAR_ITEMS",
      id: t,
      autocompleteStateId: (0, i.bS)(e)
    })
  },
  updateSearchEditorState: function(e, t) {
    let n = (0, i.bS)(e);
    r.h.dispatch({
      type: "SEARCH_EDITOR_STATE_CHANGE",
      id: n,
      editorState: t
    })
  },
  clearSearchEditorState: function(e) {
    let t = (0, i.bS)(e);
    r.h.wait(() => r.h.dispatch({
      type: "SEARCH_EDITOR_STATE_CLEAR",
      id: t
    }))
  },
  setShowBlockedResults: function(e, t) {
    let n = (0, i.bS)(e);
    r.h.dispatch({
      type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
      id: n,
      showBlocked: t
    })
  },
  setShowNoResultsAlt: function(e) {
    let t = (0, i.bS)(e);
    r.h.dispatch({
      type: "SEARCH_SET_SHOW_NO_RESULTS_ALT",
      id: t
    })
  },
  updateSearchResultsQuery: function(e, t, n, a) {
    let s = (0, i.bS)(e);
    r.h.dispatch({
      type: "SEARCH_RESULTS_QUERY_UPDATE",
      id: s,
      queryString: t,
      query: n,
      offset: a
    })
  },
  updateSearchMode: function(e, t) {
    let n = (0, i.bS)(e);
    r.h.dispatch({
      type: "SEARCH_SEARCH_MODE_UPDATE",
      id: n,
      searchMode: t
    })
  }
}
/** Chunk was on 52199 **/
/** chunk id: 616252, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk73153 = require("./73153.js"),
  Chunk822382 = require("./822382.js");
let s = {
  addSearchHistoryItem: function(e, t) {
    let r = (0, l.Jl)(e);
    null != r && n.h.dispatch({
      type: "SEARCH_HISTORY_WEB_ADD_ITEM",
      id: r,
      query: t
    })
  },
  removeSearchHistoryItem: function(e, t) {
    let r = (0, l.Jl)(e);
    null != r && n.h.dispatch({
      type: "SEARCH_HISTORY_WEB_REMOVE_ITEM",
      id: r,
      query: t
    })
  },
  clearSearchHistory: function(e) {
    let t = (0, l.Jl)(e);
    null != t && n.h.dispatch({
      type: "SEARCH_HISTORY_WEB_CLEAR_ITEMS",
      id: t,
      autocompleteStateId: (0, l.bS)(e)
    })
  },
  updateSearchEditorState: function(e, t) {
    let r = (0, l.bS)(e);
    n.h.dispatch({
      type: "SEARCH_EDITOR_STATE_CHANGE",
      id: r,
      editorState: t
    })
  },
  clearSearchEditorState: function(e) {
    let t = (0, l.bS)(e);
    n.h.wait(() => n.h.dispatch({
      type: "SEARCH_EDITOR_STATE_CLEAR",
      id: t
    }))
  },
  setShowBlockedResults: function(e, t) {
    let r = (0, l.bS)(e);
    n.h.dispatch({
      type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
      id: r,
      showBlocked: t
    })
  },
  setShowNoResultsAlt: function(e) {
    let t = (0, l.bS)(e);
    n.h.dispatch({
      type: "SEARCH_SET_SHOW_NO_RESULTS_ALT",
      id: t
    })
  },
  updateSearchResultsQuery: function(e, t, r, s) {
    let a = (0, l.bS)(e);
    n.h.dispatch({
      type: "SEARCH_RESULTS_QUERY_UPDATE",
      id: a,
      queryString: t,
      query: r,
      offset: s
    })
  },
  updateSearchMode: function(e, t) {
    let r = (0, l.bS)(e);
    n.h.dispatch({
      type: "SEARCH_SEARCH_MODE_UPDATE",
      id: r,
      searchMode: t
    })
  }
}
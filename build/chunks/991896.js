/** Chunk was on web.js **/
/** chunk id: 991896, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk570140 = require("./570140.js"),
  Chunk607802 = require("./607802.js");
let o = {
  addSearchHistoryItem: function(e, t) {
    let n = (0, i.BX)(e);
    null != n && r.Z.dispatch({
      type: "SEARCH_HISTORY_WEB_ADD_ITEM",
      id: n,
      query: t
    })
  },
  removeSearchHistoryItem: function(e, t) {
    let n = (0, i.BX)(e);
    null != n && r.Z.dispatch({
      type: "SEARCH_HISTORY_WEB_REMOVE_ITEM",
      id: n,
      query: t
    })
  },
  clearSearchHistory: function(e) {
    let t = (0, i.BX)(e);
    null != t && r.Z.dispatch({
      type: "SEARCH_HISTORY_WEB_CLEAR_ITEMS",
      id: t,
      autocompleteStateId: (0, i.Tm)(e)
    })
  },
  updateSearchEditorState: function(e, t) {
    let n = (0, i.Tm)(e);
    r.Z.dispatch({
      type: "SEARCH_EDITOR_STATE_CHANGE",
      id: n,
      editorState: t
    })
  },
  clearSearchEditorState: function(e) {
    let t = (0, i.Tm)(e);
    r.Z.wait(() => r.Z.dispatch({
      type: "SEARCH_EDITOR_STATE_CLEAR",
      id: t
    }))
  },
  setShowBlockedResults: function(e, t) {
    let n = (0, i.Tm)(e);
    r.Z.dispatch({
      type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
      id: n,
      showBlocked: t
    })
  },
  setShowNoResultsAlt: function(e) {
    let t = (0, i.Tm)(e);
    r.Z.dispatch({
      type: "SEARCH_SET_SHOW_NO_RESULTS_ALT",
      id: t
    })
  },
  updateSearchResultsQuery: function(e, t, n, o) {
    let a = (0, i.Tm)(e);
    r.Z.dispatch({
      type: "SEARCH_RESULTS_QUERY_UPDATE",
      id: a,
      queryString: t,
      query: n,
      offset: o
    })
  },
  updateSearchMode: function(e, t) {
    let n = (0, i.Tm)(e);
    r.Z.dispatch({
      type: "SEARCH_SEARCH_MODE_UPDATE",
      id: n,
      searchMode: t
    })
  }
}
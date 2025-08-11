/** Chunk was on web.js **/
/** chunk id: 518944, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk353926 = require("./353926.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk945577 = require("./945577.js"),
  Chunk861262 = require("./861262.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = .05,
  p = {};

function h(e) {
  return null == p[e] && (p[e] = {
    searchId: e,
    editorState: null,
    showBlockedResults: false,
    showNoResultsAlt: false,
    searchResultsQueryString: null,
    searchResultsQuery: null,
    searchResultsOffset: null
  }), p[e]
}

function m(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
  if (null == e) return n;
  let r = p[e];
  return null == r ? n : t(r)
}
let g = false,
  E = null;

function b(e) {
  let {
    id: t,
    editorState: n
  } = e;
  h(t).editorState = n
}

function y(e) {
  let {
    id: t
  } = e;
  h(t)
}

function O(e) {
  let {
    id: t
  } = e;
  if (null == p[t]) returnfalse;
  delete p[t]
}

function v(e) {
  if (e === E) returnfalse;
  null != e && null == p[e] && h(e), E = e
}

function I() {
  g = true, null != E && (0, Chunk861262.g)(E) === Chunk981631.aib.CHANNEL && (0, Chunk945577.ad)({
    location: "SearchStore_handleConnectionOpen"
  }) && v(Chunk981631.aib.DMS)
}

function T(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  null != t ? v(t) : (0, c.ad)({
    location: "SearchStore_handleChannelSelect",
    autoTrackExposure: g
  }) ? v(d.aib.DMS) : v(n)
}

function S(e) {
  let {
    id: t
  } = e;
  v(t)
}

function A(e) {
  let {
    id: t,
    showBlocked: n
  } = e;
  h(t).showBlockedResults = n
}

function N(e) {
  let {
    id: t
  } = e;
  h(t).showNoResultsAlt = Math.random() < _
}

function C(e) {
  let {
    id: t,
    queryString: n,
    query: r,
    offset: i
  } = e, o = h(t);
  o.searchResultsQueryString = n, o.searchResultsQuery = r, o.searchResultsOffset = null != i ? i : 0
}
class R extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z, Chunk592125.Z, Chunk353926.Z)
  }
  getCurrentSearchId() {
    return E
  }
  getEditorState(e) {
    return m(e, e => e.editorState)
  }
  shouldShowBlockedResults(e) {
    var t;
    return null != (t = m(e, e => e.showBlockedResults, false)) && t
  }
  shouldShowNoResultsAlt(e) {
    var t;
    return null != (t = m(e, e => e.showNoResultsAlt, false)) && t
  }
  getSearchResultsQueryString(e) {
    return m(e, e => e.searchResultsQueryString)
  }
  getSearchResultsQuery(e) {
    return m(e, e => e.searchResultsQuery)
  }
  getSearchResultsOffset(e) {
    return m(e, e => e.searchResultsOffset)
  }
  hasSearchState(e) {
    return null != e && null != p[e]
  }
}
f(R, "displayName", "SearchStore");
let P = new R(Chunk570140.Z, {
  CONNECTION_OPEN: I,
  SEARCH_RESULTS_QUERY_UPDATE: C,
  SEARCH_EDITOR_STATE_CLEAR: O,
  SEARCH_ENSURE_SEARCH_STATE: y,
  SEARCH_EDITOR_STATE_CHANGE: b,
  SEARCH_SET_SHOW_BLOCKED_RESULTS: A,
  SEARCH_SET_SHOW_NO_RESULTS_ALT: N,
  SEARCH_SCREEN_OPEN: S,
  CHANNEL_SELECT: T
})
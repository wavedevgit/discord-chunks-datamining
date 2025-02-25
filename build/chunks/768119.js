/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => Z
}), n(566702), n(733860);
var r, i = n(392711),
  o = n.n(i),
  a = n(442837),
  s = n(433517),
  l = n(570140),
  c = n(840877),
  u = n(952537),
  d = n(592125),
  f = n(430824),
  _ = n(981631);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = .05,
  g = {};

function m(e) {
  return null == g[e] && (g[e] = {
    searchId: e,
    searchType: E(e),
    isIndexing: !1,
    isHistoricalIndexing: !1,
    isSearching: !1,
    analyticsId: null,
    editorState: null,
    offset: 0,
    query: null,
    hasError: !1,
    searchFetcher: null,
    rawResults: null,
    totalResults: 0,
    documentsIndexed: 0,
    resultsBlocked: 0,
    showBlockedResults: !1,
    showNoResultsAlt: !1
  }), g[e]
}

function E(e) {
  return e === _.aib.DMS ? _.aib.DMS : e === _.I_8 ? _.aib.FAVORITES : null != f.Z.getGuild(e) ? _.aib.GUILD : null != d.Z.getChannel(e) ? _.aib.CHANNEL : null
}

function v(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  if (null == e) return n;
  let r = g[e];
  return null == r ? n : t(r)
}
let b = "SearchStore",
  y = "tokenized",
  O = !1,
  S = {},
  I = null;

function T(e) {
  let {
    searchId: t,
    editorState: n
  } = e;
  m(t).editorState = n
}

function N(e) {
  let {
    searchId: t
  } = e;
  null != t && m(t)
}

function A(e) {
  var t, n;
  let {
    queryString: r,
    searchId: i,
    query: a
  } = e, s = m(i);
  null != s.searchFetcher && (s.searchFetcher.cancel(), s.searchFetcher = null);
  let f = i,
    p = s.searchType,
    h = new c.ZP(f, p, a);
  s.searchFetcher = h, s.isSearching = !0, s.rawResults = null, s.analyticsId = null, s.query = o().omit(a, "type"), s.offset = null !== (n = a.offset) && void 0 !== n ? n : 0, s.showBlockedResults = !1, C({
    type: "SEARCH_ADD_HISTORY",
    searchId: i,
    query: r
  });
  let g = i === _.I_8 ? null === (t = d.Z.getChannel(f)) || void 0 === t ? void 0 : t.guild_id : p === _.aib.GUILD ? i : null;
  h.fetch(e => {
    var t, n;
    l.Z.dispatch({
      type: "SEARCH_FINISH",
      searchId: i,
      guildId: g,
      analyticsId: e.body.analytics_id,
      totalResults: e.body.total_results,
      messages: e.body.messages,
      threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
      members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map(e => (0, u.Z)(e)),
      hasError: !1,
      doingHistoricalIndex: e.body.doing_deep_historical_index,
      documentsIndexed: e.body.documents_indexed
    })
  }, () => {
    l.Z.dispatch({
      type: "SEARCH_INDEXING",
      searchId: i
    })
  }, () => {
    l.Z.dispatch({
      type: "SEARCH_FINISH",
      searchId: i,
      guildId: g,
      messages: [],
      threads: [],
      members: [],
      totalResults: 0,
      analyticsId: null,
      hasError: !0,
      doingHistoricalIndex: !1,
      documentsIndexed: 0
    })
  })
}

function C(e) {
  var t;
  let {
    searchId: n,
    query: r
  } = e;
  if ("string" != typeof r || "" === (r = r.trim())) return;
  let i = S[n] = null !== (t = S[n]) && void 0 !== t ? t : [],
    o = i.indexOf(r); - 1 !== o ? (i.splice(o, 1), i.unshift(r)) : null != i[0] && "" !== i[0] && r.startsWith(i[0]) ? i[0] = r : o < 0 && i.unshift(r), i.length > 5 && i.splice(5, i.length), s.K.set(b, {
    history: S
  })
}

function R(e) {
  let {
    searchId: t
  } = e, n = m(t);
  n.isIndexing = !0, n.isHistoricalIndexing = !0, n.isSearching = !1
}

function P(e) {
  let {
    searchId: t
  } = e, n = m(t);
  n.isSearching = !1, n.isIndexing = !1, n.isHistoricalIndexing = e.doingHistoricalIndex || !1, n.searchFetcher = null, n.totalResults = e.totalResults, n.hasError = e.hasError, n.analyticsId = e.analyticsId, n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0, n.showNoResultsAlt = Math.random() < h, n.rawResults = e.messages, null == n.query && (n.hasError = !0)
}

function D(e) {
  let {
    searchId: t
  } = e, n = g[t];
  if (null == n) return !1;
  null != n.searchFetcher && n.searchFetcher.cancel(), delete g[t]
}

function w(e) {
  if (e === I) return !1;
  null != e && null == g[e] && m(e), I = e
}

function L(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  w(null != t ? t : n)
}

function x(e) {
  let {
    searchId: t
  } = e;
  w(t)
}

function M(e) {
  let {
    searchId: t
  } = e;
  null == t ? (s.K.remove(b), S = {}) : (delete S[t], s.K.set(b, {
    history: S
  }))
}

function j(e) {
  let {
    searchId: t,
    query: n
  } = e;
  null != S[t] && (S[t] = S[t].filter(e => e !== n), s.K.set(b, {
    history: S
  }))
}

function k(e) {
  return Object.keys(e).forEach(t => {
    Array.isArray(e[t]) && (e[t] = e[t].filter(e => "string" == typeof e && e.trim())), Array.isArray(e[t]) && 0 !== e[t].length || delete e[t]
  }), e
}

function U(e) {
  let {
    searchId: t,
    showBlocked: n
  } = e;
  m(t).showBlockedResults = n
}

function G() {
  Object.keys(g).forEach(e => {
    null != g[e] && (g[e].searchType = E(e))
  })
}

function B() {
  s.K.remove(b), S = {}
}

function F() {
  return null != I && D({
    searchId: I
  })
}
class V extends(r = a.ZP.Store) {
  initialize() {
    this.waitFor(f.Z, d.Z);
    let e = s.K.get(b);
    (null == e ? void 0 : e.history) != null && (S = k(e.history)), O = !!s.K.get(y)
  }
  getCurrentSearchId() {
    return I
  }
  isActive() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I;
    return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e))
  }
  isTokenized() {
    return O
  }
  getSearchType(e) {
    return v(null != e ? e : I, e => e.searchType)
  }
  getRawResults(e) {
    return v(e, e => e.rawResults)
  }
  hasResults(e) {
    return null != v(e, e => e.rawResults)
  }
  isIndexing(e) {
    return v(e, e => e.isIndexing) || !1
  }
  isHistoricalIndexing(e) {
    return v(e, e => e.isHistoricalIndexing) || !1
  }
  isSearching(e) {
    return v(e, e => e.isSearching) || !1
  }
  getAnalyticsId(e) {
    return v(e, e => e.analyticsId)
  }
  getResultsBlocked(e) {
    return v(e, e => e.resultsBlocked)
  }
  getDocumentsIndexedCount(e) {
    return v(e, e => e.documentsIndexed)
  }
  getSearchFetcher(e) {
    return v(e, e => e.searchFetcher)
  }
  getTotalResults(e) {
    var t;
    return null !== (t = v(e, e => e.totalResults)) && void 0 !== t ? t : 0
  }
  getEditorState(e) {
    return v(e, e => e.editorState)
  }
  getHistory(e) {
    return S[e]
  }
  getOffset(e) {
    var t;
    return null !== (t = v(e, e => e.offset)) && void 0 !== t ? t : 0
  }
  getQuery(e) {
    return v(e, e => e.query)
  }
  hasError(e) {
    var t;
    return null !== (t = v(e, e => e.hasError)) && void 0 !== t && t
  }
  shouldShowBlockedResults(e) {
    var t;
    return null !== (t = v(e, e => e.showBlockedResults, !1)) && void 0 !== t && t
  }
  shouldShowNoResultsAlt(e) {
    var t;
    return null !== (t = v(e, e => e.showNoResultsAlt, !1)) && void 0 !== t && t
  }
  getResultsState(e) {
    return {
      isSearching: this.isSearching(e),
      isIndexing: this.isIndexing(e),
      isHistoricalIndexing: this.isHistoricalIndexing(e),
      documentsIndexed: this.getDocumentsIndexedCount(e),
      offset: this.getOffset(e),
      totalResults: this.getTotalResults(e),
      hasError: this.hasError(e),
      showBlockedResults: this.shouldShowBlockedResults(e),
      showNoResultsAlt: this.shouldShowNoResultsAlt(e)
    }
  }
}
p(V, "displayName", "SearchStore");
let Z = new V(l.Z, {
  SEARCH_START: A,
  SEARCH_INDEXING: R,
  SEARCH_FINISH: P,
  SEARCH_EDITOR_STATE_CLEAR: D,
  SEARCH_ENSURE_SEARCH_STATE: N,
  SEARCH_EDITOR_STATE_CHANGE: T,
  SEARCH_SET_SHOW_BLOCKED_RESULTS: U,
  SEARCH_SCREEN_OPEN: x,
  CHANNEL_SELECT: L,
  CHANNEL_TOGGLE_MEMBERS_SECTION: F,
  SEARCH_CLEAR_HISTORY: M,
  SEARCH_REMOVE_HISTORY: j,
  SEARCH_ADD_HISTORY: C,
  LOGOUT: B,
  CONNECTION_OPEN: G
})
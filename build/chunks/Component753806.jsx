/** Chunk was on web.js **/
/** chunk id: 753806, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./747238.js"), require("./812715.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk271830 = require("./271830.js"),
  Chunk192308 = require("./192308.js"),
  Chunk988665 = require("./988665.js"),
  Chunk138298 = require("./138298.js"),
  Chunk734057 = require("./734057.js"),
  Chunk203982 = require("./203982.js"),
  Chunk504531 = require("./504531.js"),
  Chunk614690 = require("./614690.js"),
  Chunk256796 = require("./256796.js"),
  Chunk822382 = require("./822382.js"),
  Chunk23667 = require("./23667.js"),
  Chunk956467 = require("./956467.js"),
  Chunk408730 = require("./408730.js"),
  Chunk771650 = require("./771650.js"),
  Chunk616252 = require("./616252.js"),
  Chunk65600 = require("./65600.js"),
  Chunk145331 = require("./145331.js"),
  Chunk768570 = require("./768570.js"),
  Chunk921242 = require("./921242.js"),
  Chunk652215 = require("./652215.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e) {
  let t = (0, p.bS)(e);
  E.A.clearSearchEditorState(e), f.A.clearSearchMessages(t), _.A.cleanUp(t), h.A.cleanUp(t)
}

function R(e) {
  let {
    searchContext: t,
    searchQueryString: n,
    searchQuery: r,
    offset: i
  } = e, a = (0, p.bS)(t);
  f.A.clearSearchMessages(a), E.A.setShowNoResultsAlt(t), E.A.setShowBlockedResults(t, false), E.A.updateSearchResultsQuery(t, n, r, i), E.A.addSearchHistoryItem(t, n)
}

function w(e) {
  var t;
  let {
    searchContext: n,
    searchQueryString: r,
    searchEverywhere: i,
    offset: a
  } = e, s = (0, p.bS)(n), o = null != (t = y.A.getSearchMode(s)) ? t : v.z, l = {
    offset: a
  };
  n.type === A.I4_.DMS ? f.A.fetchTabMessages({
    searchContext: n,
    searchTabs: [O.$H.MESSAGES],
    searchQueryString: r,
    searchMode: o,
    getId: () => s,
    getLimit: () => A.T_y,
    pagination: l,
    trackExactTotalHits: true,
    onFetchStart: e => {
      let {
        searchQueryString: t,
        searchQuery: r
      } = e;
      R({
        searchContext: n,
        searchQueryString: t,
        searchQuery: r,
        offset: a
      })
    }
  }) : f.A.fetchMessages({
    searchContext: n,
    searchQueryString: r,
    pagination: l,
    searchMode: o,
    searchEverywhere: i,
    onFetchStart: e => {
      let {
        searchQueryString: t,
        searchQuery: r
      } = e;
      R({
        searchContext: n,
        searchQueryString: t,
        searchQuery: r,
        offset: a
      })
    }
  })
}

function P(e) {
  let t = (0, p.bS)(e),
    n = y.A.getEditorState(t);
  return null != n ? u.pe(n) : null
}

function D(e, t) {
  var n;
  let r = (0, p.bS)(e),
    i = null != (n = y.A.getEditorState(r)) ? n : u.e_(d.ys(g.Ay)),
    a = u.t7(t, i);
  a = u.a4(a, 512);
  let o = (0, p._o)(t).filter(e => e.type !== s.Ay.NON_TOKEN_TYPE);
  a = u.uD(o, a, g.Ay), a = u.UO(0 + t.length, a), E.A.updateSearchEditorState(e, a)
}

function x(e, t) {
  let n = P(e);
  if (null == n) return;
  let r = n.endsWith(" ") ? n + t : n + " " + t;
  D(e, r), w({
    searchContext: e,
    searchQueryString: r,
    offset: 0
  })
}

function L(e) {
  c._.dispatch(A.jej.SET_SEARCH_QUERY, e)
}

function j(e, t, n) {
  let r = (0, p.bS)(e),
    i = y.A.getEditorState(r);
  if (null == i) return;
  let a = u.pe(i),
    s = t.type === A.I4_.CHANNEL ? (0, p.EH)(a) : a;
  D(t, s = s.trim());
  let l = y.A.getSearchMode(r);
  E.A.updateSearchMode(t, null != l ? l : v.z), m.A.transferSession(e, t);
  let c = (0, p._o)(s),
    d = (0, p.Zf)(c);
  m.A.refreshQueryId(t), (0, b.fd)({
    searchContext: t,
    query: d,
    queryString: s,
    searchQuerySource: O.Q_.SEARCH_XDM_SETTINGS
  }), w({
    searchContext: t,
    searchQueryString: s,
    offset: 0
  });
  let _ = (0, p.bS)(t);
  o.A.setSelectedSearchContext(_), E.A.clearSearchEditorState(e), f.A.clearSearchMessages(r), null == n || n()
}

function M() {
  y.A.getSearchStateIds().forEach(e => {
    let t = l.A.getChannel(e);
    null != t && t.isPrivate() && N({
      type: A.I4_.CHANNEL,
      channelId: t.id
    })
  })
}
let k = {
  cleanUpSearchState: N,
  fetchMessages: w,
  setSearchInputText: D,
  appendToSearchInputText: x,
  getSearchInputText: P,
  ensureSearchInputDecorators: function(e) {
    let t, n = (0, p.bS)(e),
      r = y.A.getEditorState(n),
      a = null == r ? true : r.getCurrentContent(),
      s = null == r ? true : r.getSelection();
    null != a && null != s ? (t = u.Rg(d.ys(g.Ay), a), t = i.EditorState.forceSelection(t, s)) : t = u.e_(d.ys(g.Ay)), E.A.updateSearchEditorState(e, t)
  },
  setSearchQuery: function(e) {
    let {
      query: t,
      performSearch: n,
      replace: r,
      resultsState: i,
      searchQuerySource: a
    } = e, {
      mode: s,
      cursorScope: o
    } = i, l = 0;
    null != s.token ? l = s.token.start : (null == o ? true : o.currentToken) != null && (l = o.currentToken.end);
    let c = null != s.token ? s.token.end : l;
    L({
      query: t,
      anchor: l,
      focus: c,
      performSearch: n,
      replace: r,
      searchQuerySource: a
    })
  },
  dispatchSetSearchQuery: L,
  transitionStateToSearchContext: j,
  cleanUpPrivateChannelSearchState: M,
  openSearchFiltersModal: function(e) {
    (0, b.TJ)({
      searchContext: e
    }), (0, a.openModalLazy)(async () => {
      let {
        default: t
      } = await n.e("47230").then(n.bind(n, 561965));
      return n => (0, r.jsx)(t, C(S({}, n), {
        searchContext: e
      }))
    }, {
      modalKey: v.b
    })
  }
}
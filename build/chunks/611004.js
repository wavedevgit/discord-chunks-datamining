/** Chunk was on web.js **/
/** chunk id: 611004, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./704826.js"), require("./35282.js");
var Chunk258863 = require("./258863.js"),
  Chunk349033 = require("./349033.js"),
  Chunk585483 = require("./585483.js"),
  Chunk72006 = require("./72006.js"),
  Chunk181389 = require("./181389.js"),
  Chunk748610 = require("./748610.js"),
  Chunk171900 = require("./171900.js"),
  Chunk607802 = require("./607802.js"),
  Chunk187462 = require("./187462.js"),
  Chunk532496 = require("./532496.js"),
  Chunk532428 = require("./532428.js"),
  Chunk817190 = require("./817190.js"),
  Chunk723642 = require("./723642.js"),
  Chunk981631 = require("./981631.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  let {
    searchContext: t,
    searchQueryString: n,
    searchQuery: r,
    offset: i
  } = e, a = (0, u.Tm)(t);
  l.Z.clearSearchMessages(a), l.Z.setShowNoResultsAlt(t), l.Z.setShowBlockedResults(t, false), l.Z.updateSearchResultsQuery(t, n, r, i), l.Z.addWebSearchHistoryItem(t, n)
}

function v(e) {
  let {
    searchContext: t,
    selectedPageIndex: n,
    queryString: r,
    searchMode: i
  } = e, a = (0, u.Tm)(t);
  l.Z.fetchTabMessages({
    searchContext: t,
    searchTabs: [h.sR.MESSAGES],
    searchQueryString: r,
    searchMode: i,
    getId: () => a,
    getLimit: () => m.vpv,
    onFetchStart: e => {
      let {
        searchQueryString: r,
        searchQuery: i
      } = e;
      O({
        searchContext: t,
        searchQueryString: r,
        searchQuery: i,
        offset: n * m.vpv
      })
    },
    pagination: {
      offset: n * m.vpv
    },
    trackExactTotalHits: true
  })
}

function I(e) {
  let {
    searchContext: t,
    searchQuery: n,
    queryString: r,
    searchEverywhere: i,
    offset: a,
    searchMode: o
  } = e, s = y(E({}, n, null != o ? (0, u.zH)(o) : {}), {
    offset: a
  });
  O({
    searchContext: t,
    searchQueryString: r,
    searchQuery: s,
    offset: a
  }), l.Z.fetchMessages({
    searchContext: t,
    query: s,
    searchEverywhere: i
  })
}

function T(e, t) {
  let n = (0, u.Tm)(e),
    r = p.Z.getEditorState(n),
    a = p.Z.getSearchResultsQueryString(n),
    s = c.Z.getIsFetching(n);
  if (null == r || null == a || s) return;
  let d = a.endsWith(" ") ? a + t : a + " " + t,
    f = o.c2(d, r);
  f = o.Hl(f, 512);
  let h = (0, u.kG)(d),
    g = h.filter(e => e.type !== i.ZP.NON_TOKEN_TYPE);
  f = o.lv(g, f, _.ZP), f = o.iK(0 + d.length, f), l.Z.setSearchState(e, f);
  let E = (0, u.$G)(h);
  e.type === m.aib.DMS ? v({
    searchContext: e,
    selectedPageIndex: 0,
    queryString: d
  }) : I({
    searchContext: e,
    queryString: d,
    searchQuery: E,
    offset: 0
  })
}
let S = {
  fetchCrossDMMessages: v,
  cleanUpSearchState: function(e) {
    let t = (0, u.Tm)(e);
    l.Z.clearSearchState(e), l.Z.clearSearchMessages(t), d.Z.cleanUp(t), f.Z.cleanUp(t)
  },
  fetchMessages: I,
  appendTextToSearchInput: T,
  getSearchInputText: function(e) {
    let t = (0, u.Tm)(e),
      n = null != t ? p.Z.getEditorState(t) : null;
    return null != n ? o.Sq(n) : null
  },
  ensureSearchInputDecorators: function(e) {
    let t, n = (0, u.Tm)(e),
      i = p.Z.getEditorState(n),
      a = null == i ? true : i.getCurrentContent(),
      c = null == i ? true : i.getSelection();
    null != a && null != c ? (t = o.l8(s.Jl(_.ZP), a), t = r.EditorState.forceSelection(t, c)) : t = o.nR(s.Jl(_.ZP)), l.Z.setSearchState(e, t)
  },
  setSearchQuery: function(e) {
    let {
      query: t,
      performSearch: n,
      replace: r,
      resultsState: i
    } = e, {
      mode: o,
      cursorScope: s
    } = i, l = 0;
    null != o.token ? l = o.token.start : (null == s ? true : s.currentToken) != null && (l = s.currentToken.end);
    let c = null != o.token ? o.token.end : l;
    a.S.dispatch(m.CkL.SET_SEARCH_QUERY, {
      query: t,
      anchor: l,
      focus: c,
      performSearch: n,
      replace: r
    })
  }
}
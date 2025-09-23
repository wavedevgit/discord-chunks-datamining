/** Chunk was on web.js **/
/** chunk id: 611004, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
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
  Chunk991896 = require("./991896.js"),
  Chunk817190 = require("./817190.js"),
  Chunk723642 = require("./723642.js"),
  Chunk981631 = require("./981631.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    searchContext: t,
    searchQueryString: n,
    searchQuery: r,
    offset: i
  } = e, a = (0, u.Tm)(t);
  l.Z.clearSearchMessages(a), p.Z.setShowNoResultsAlt(t), p.Z.setShowBlockedResults(t, false), p.Z.updateSearchResultsQuery(t, n, r, i), p.Z.addSearchHistoryItem(t, n)
}

function I(e) {
  let {
    searchContext: t,
    selectedPageIndex: n,
    queryString: r,
    searchMode: i
  } = e, a = (0, u.Tm)(t);
  l.Z.fetchTabMessages({
    searchContext: t,
    searchTabs: [m.sR.MESSAGES],
    searchQueryString: r,
    searchMode: i,
    getId: () => a,
    getLimit: () => g.vpv,
    onFetchStart: e => {
      let {
        searchQueryString: r,
        searchQuery: i
      } = e;
      v({
        searchContext: t,
        searchQueryString: r,
        searchQuery: i,
        offset: n * g.vpv
      })
    },
    pagination: {
      offset: n * g.vpv
    },
    trackExactTotalHits: true
  })
}

function T(e) {
  let {
    searchContext: t,
    searchQuery: n,
    queryString: r,
    searchEverywhere: i,
    offset: a,
    searchMode: o
  } = e, s = O(b({}, n, null != o ? (0, u.zH)(o) : {}), {
    offset: a
  });
  v({
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

function S(e, t) {
  let n = (0, u.Tm)(e),
    r = h.Z.getEditorState(n),
    a = h.Z.getSearchResultsQueryString(n),
    s = c.Z.getIsFetching(n);
  if (null == r || null == a || s) return;
  let l = a.endsWith(" ") ? a + t : a + " " + t,
    d = o.c2(l, r);
  d = o.Hl(d, 512);
  let f = (0, u.kG)(l),
    m = f.filter(e => e.type !== i.ZP.NON_TOKEN_TYPE);
  d = o.lv(m, d, _.ZP), d = o.iK(0 + l.length, d), p.Z.updateSearchEditorState(e, d);
  let E = (0, u.$G)(f);
  e.type === g.aib.DMS ? I({
    searchContext: e,
    selectedPageIndex: 0,
    queryString: l
  }) : T({
    searchContext: e,
    queryString: l,
    searchQuery: E,
    offset: 0
  })
}
let A = {
  fetchCrossDMMessages: I,
  cleanUpSearchState: function(e) {
    let t = (0, u.Tm)(e);
    p.Z.clearSearchEditorState(e), l.Z.clearSearchMessages(t), d.Z.cleanUp(t), f.Z.cleanUp(t)
  },
  fetchMessages: T,
  appendTextToSearchInput: S,
  getSearchInputText: function(e) {
    let t = (0, u.Tm)(e),
      n = null != t ? h.Z.getEditorState(t) : null;
    return null != n ? o.Sq(n) : null
  },
  ensureSearchInputDecorators: function(e) {
    let t, n = (0, u.Tm)(e),
      i = h.Z.getEditorState(n),
      a = null == i ? true : i.getCurrentContent(),
      l = null == i ? true : i.getSelection();
    null != a && null != l ? (t = o.l8(s.Jl(_.ZP), a), t = r.EditorState.forceSelection(t, l)) : t = o.nR(s.Jl(_.ZP)), p.Z.updateSearchEditorState(e, t)
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
    a.S.dispatch(g.CkL.SET_SEARCH_QUERY, {
      query: t,
      anchor: l,
      focus: c,
      performSearch: n,
      replace: r
    })
  }
}
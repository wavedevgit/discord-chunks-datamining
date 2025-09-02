/** Chunk was on web.js **/
/** chunk id: 611004, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk258863 = require("./258863.js"),
  Chunk349033 = require("./349033.js"),
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

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    searchContext: t,
    searchQueryString: n,
    searchQuery: r,
    offset: i
  } = e, a = (0, c.Tm)(t);
  s.Z.clearSearchMessages(a), s.Z.setShowNoResultsAlt(t), s.Z.setShowBlockedResults(t, false), s.Z.updateSearchResultsQuery(t, n, r, i), s.Z.addWebSearchHistoryItem(t, n)
}

function O(e) {
  let {
    searchContext: t,
    selectedPageIndex: n,
    queryString: r,
    searchMode: i
  } = e, a = (0, c.Tm)(t);
  s.Z.fetchTabMessages({
    searchContext: t,
    searchTabs: [p.sR.MESSAGES],
    searchQueryString: r,
    searchMode: i,
    getId: () => a,
    getLimit: () => h.vpv,
    onFetchStart: e => {
      let {
        searchQueryString: r,
        searchQuery: i
      } = e;
      y({
        searchContext: t,
        searchQueryString: r,
        searchQuery: i,
        offset: n * h.vpv
      })
    },
    pagination: {
      offset: n * h.vpv
    },
    trackExactTotalHits: true
  })
}

function v(e) {
  let {
    searchContext: t,
    searchQuery: n,
    queryString: r,
    searchEverywhere: i,
    offset: a,
    searchMode: o
  } = e, l = b(g({}, n, null != o ? (0, c.zH)(o) : {}), {
    offset: a
  });
  y({
    searchContext: t,
    searchQueryString: r,
    searchQuery: l,
    offset: a
  }), s.Z.fetchMessages({
    searchContext: t,
    query: l,
    searchEverywhere: i
  })
}

function I(e, t) {
  let n = (0, c.Tm)(e),
    r = _.Z.getEditorState(n),
    o = _.Z.getSearchResultsQueryString(n),
    u = l.Z.getIsFetching(n);
  if (null == r || null == o || u) return;
  let d = o.endsWith(" ") ? o + t : o + " " + t,
    p = a.c2(d, r);
  p = a.Hl(p, 512);
  let m = (0, c.kG)(d),
    g = m.filter(e => e.type !== i.ZP.NON_TOKEN_TYPE);
  p = a.lv(g, p, f.ZP), p = a.iK(0 + d.length, p), s.Z.setSearchState(e, p);
  let E = (0, c.$G)(m);
  e.type === h.aib.DMS ? O({
    searchContext: e,
    selectedPageIndex: 0,
    queryString: d
  }) : v({
    searchContext: e,
    queryString: d,
    searchQuery: E,
    offset: 0
  })
}
let S = {
  fetchCrossDMMessages: O,
  cleanUpSearchState: function(e) {
    let t = (0, c.Tm)(e);
    s.Z.clearSearchState(e), s.Z.clearSearchMessages(t), u.Z.cleanUp(t), d.Z.cleanUp(t)
  },
  fetchMessages: v,
  appendTextToSearchInput: I,
  getSearchInputText: function(e) {
    let t = (0, c.Tm)(e),
      n = null != t ? _.Z.getEditorState(t) : null;
    return null != n ? a.Sq(n) : null
  },
  ensureSearchInputDecorators: function(e) {
    let t, n = (0, c.Tm)(e),
      i = _.Z.getEditorState(n),
      l = null == i ? true : i.getCurrentContent(),
      u = null == i ? true : i.getSelection();
    null != l && null != u ? (t = a.l8(o.Jl(f.ZP), l), t = r.EditorState.forceSelection(t, u)) : t = a.nR(o.Jl(f.ZP)), s.Z.setSearchState(e, t)
  }
}
/** Chunk was on web.js **/
/** chunk id: 611004, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk349033 = require("./349033.js"),
  Chunk72006 = require("./72006.js"),
  Chunk748610 = require("./748610.js"),
  Chunk171900 = require("./171900.js"),
  Chunk607802 = require("./607802.js"),
  Chunk187462 = require("./187462.js"),
  Chunk532496 = require("./532496.js"),
  Chunk532428 = require("./532428.js"),
  Chunk817190 = require("./817190.js"),
  Chunk723642 = require("./723642.js"),
  Chunk981631 = require("./981631.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let {
    searchContext: t,
    searchQueryString: n,
    searchQuery: r,
    offset: i
  } = e, a = (0, s.Tm)(t);
  o.Z.clearSearchMessages(a), o.Z.setShowNoResultsAlt(t), o.Z.setShowBlockedResults(t, false), o.Z.updateSearchResultsQuery(t, n, r, i), o.Z.addWebSearchHistoryItem(t, n)
}

function b(e) {
  let {
    searchContext: t,
    selectedPageIndex: n,
    queryString: r,
    searchMode: i
  } = e, a = (0, s.Tm)(t);
  o.Z.fetchTabMessages({
    searchContext: t,
    searchTabs: [f.sR.MESSAGES],
    searchQueryString: r,
    searchMode: i,
    getId: () => a,
    getLimit: () => _.vpv,
    onFetchStart: e => {
      let {
        searchQueryString: r,
        searchQuery: i
      } = e;
      E({
        searchContext: t,
        searchQueryString: r,
        searchQuery: i,
        offset: n * _.vpv
      })
    },
    pagination: {
      offset: n * _.vpv
    },
    trackExactTotalHits: true
  })
}

function y(e) {
  let {
    searchContext: t,
    searchQuery: n,
    queryString: r,
    searchEverywhere: i,
    offset: a,
    searchMode: l
  } = e, c = g(h({}, n, null != l ? (0, s.zH)(l) : {}), {
    offset: a
  });
  E({
    searchContext: t,
    searchQueryString: r,
    searchQuery: c,
    offset: a
  }), o.Z.fetchMessages({
    searchContext: t,
    query: c,
    searchEverywhere: i
  })
}

function O(e, t) {
  let n = (0, s.Tm)(e),
    l = d.Z.getEditorState(n),
    c = d.Z.getSearchResultsQueryString(n),
    f = a.Z.getIsFetching(n);
  if (null == l || null == c || f) return;
  let p = c.endsWith(" ") ? c + t : c + " " + t,
    h = i.c2(p, l);
  h = i.Hl(h, 512);
  let m = (0, s.kG)(p),
    g = m.filter(e => e.type !== r.ZP.NON_TOKEN_TYPE);
  h = i.lv(g, h, u.ZP), h = i.iK(0 + p.length, h), o.Z.setSearchState(e, h);
  let E = (0, s.$G)(m);
  e.type === _.aib.DMS ? b({
    searchContext: e,
    selectedPageIndex: 0,
    queryString: p
  }) : y({
    searchContext: e,
    queryString: p,
    searchQuery: E,
    offset: 0
  })
}
let v = {
  fetchCrossDMMessages: b,
  cleanUpSearchState: function(e) {
    let t = (0, s.Tm)(e);
    o.Z.clearSearchState(e), o.Z.clearSearchMessages(t), l.Z.cleanUp(t), c.Z.cleanUp(t)
  },
  fetchMessages: y,
  appendTextToSearchInput: O,
  getSearchInputText: function(e) {
    let t = (0, s.Tm)(e),
      n = null != t ? d.Z.getEditorState(t) : null;
    return null != n ? i.Sq(n) : null
  }
}
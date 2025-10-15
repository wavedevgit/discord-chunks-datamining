/** Chunk was on web.js **/
/** chunk id: 611004, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./704826.js"), require("./35282.js"), require("./539854.js"), require("./781311.js");
var Chunk258863 = require("./258863.js"),
  Chunk349033 = require("./349033.js"),
  Chunk592125 = require("./592125.js"),
  Chunk585483 = require("./585483.js"),
  Chunk72006 = require("./72006.js"),
  Chunk181389 = require("./181389.js"),
  Chunk748610 = require("./748610.js"),
  Chunk607802 = require("./607802.js"),
  Chunk187462 = require("./187462.js"),
  Chunk532496 = require("./532496.js"),
  Chunk532428 = require("./532428.js"),
  Chunk991896 = require("./991896.js"),
  Chunk817190 = require("./817190.js"),
  Chunk723642 = require("./723642.js"),
  Chunk125085 = require("./125085.js"),
  Chunk981631 = require("./981631.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  let t = (0, u.Tm)(e);
  p.Z.clearSearchEditorState(e), c.Z.clearSearchMessages(t), d.Z.cleanUp(t), f.Z.cleanUp(t)
}

function T(e) {
  let {
    searchContext: t,
    searchQueryString: n,
    searchQuery: r,
    offset: i
  } = e, a = (0, u.Tm)(t);
  c.Z.clearSearchMessages(a), p.Z.setShowNoResultsAlt(t), p.Z.setShowBlockedResults(t, false), p.Z.updateSearchResultsQuery(t, n, r, i), p.Z.addSearchHistoryItem(t, n)
}

function S(e) {
  var t;
  let {
    searchContext: n,
    selectedPageIndex: r,
    queryString: i
  } = e, a = (0, u.Tm)(n), o = null != (t = h.Z.getSearchMode(a)) ? t : g.o;
  c.Z.fetchTabMessages({
    searchContext: n,
    searchTabs: [m.sR.MESSAGES],
    searchQueryString: i,
    searchMode: o,
    getId: () => a,
    getLimit: () => E.vpv,
    onFetchStart: e => {
      let {
        searchQueryString: t,
        searchQuery: i
      } = e;
      T({
        searchContext: n,
        searchQueryString: t,
        searchQuery: i,
        offset: r * E.vpv
      })
    },
    pagination: {
      offset: r * E.vpv
    },
    trackExactTotalHits: true
  })
}

function A(e) {
  var t;
  let {
    searchContext: n,
    searchQuery: r,
    queryString: i,
    searchEverywhere: a,
    offset: o
  } = e, s = (0, u.Tm)(n), l = null != (t = h.Z.getSearchMode(s)) ? t : g.o, d = v(y({}, r, (0, u.zH)(l)), {
    offset: o
  });
  T({
    searchContext: n,
    searchQueryString: i,
    searchQuery: d,
    offset: o
  }), c.Z.fetchMessages({
    searchContext: n,
    query: d,
    searchEverywhere: a
  })
}

function C(e) {
  let t = (0, u.Tm)(e),
    n = h.Z.getEditorState(t);
  return null != n ? s.Sq(n) : null
}

function N(e, t) {
  var n;
  let r = (0, u.Tm)(e),
    a = null != (n = h.Z.getEditorState(r)) ? n : s.nR(l.Jl(_.ZP)),
    o = s.c2(t, a);
  o = s.Hl(o, 512);
  let c = (0, u.kG)(t).filter(e => e.type !== i.ZP.NON_TOKEN_TYPE);
  o = s.lv(c, o, _.ZP), o = s.iK(0 + t.length, o), p.Z.updateSearchEditorState(e, o)
}

function R(e, t) {
  let n = C(e);
  if (null == n) return;
  let r = n.endsWith(" ") ? n + t : n + " " + t;
  N(e, r);
  let i = (0, u.kG)(r),
    a = (0, u.$G)(i);
  e.type === E.aib.DMS ? S({
    searchContext: e,
    selectedPageIndex: 0,
    queryString: r
  }) : A({
    searchContext: e,
    queryString: r,
    searchQuery: a,
    offset: 0
  })
}

function P(e, t) {
  let n = (0, u.kG)(t),
    r = [];
  n.forEach(t => {
    let n = t.type === E.dCx.FILTER_IN || t.type === E.dCx.ANSWER_IN;
    ((0, u.R6)(e) || !n) && r.push(t)
  });
  let i = "";
  return r.forEach(e => {
    i += e.getFullMatch()
  }), i
}

function w(e, t, n) {
  let r = (0, u.Tm)(e),
    i = h.Z.getEditorState(r);
  if (null == i) return;
  let a = P(t, s.Sq(i));
  N(t, a = a.trim());
  let o = h.Z.getSearchMode(r);
  p.Z.updateSearchMode(t, null != o ? o : g.o), c.Z.clearSearchMessages(r), p.Z.clearSearchEditorState(e), n(a)
}

function D() {
  Chunk817190.Z.getSearchStateIds().forEach(e => {
    let t = a.Z.getChannel(e);
    null != t && t.isPrivate() && I({
      type: E.aib.CHANNEL,
      channelId: t.id
    })
  })
}
let L = {
  fetchCrossDMMessages: S,
  cleanUpSearchState: I,
  fetchMessages: A,
  setSearchInputText: N,
  appendToSearchInputText: R,
  getSearchInputText: C,
  ensureSearchInputDecorators: function(e) {
    let t, n = (0, u.Tm)(e),
      i = h.Z.getEditorState(n),
      a = null == i ? true : i.getCurrentContent(),
      o = null == i ? true : i.getSelection();
    null != a && null != o ? (t = s.l8(l.Jl(_.ZP), a), t = r.EditorState.forceSelection(t, o)) : t = s.nR(l.Jl(_.ZP)), p.Z.updateSearchEditorState(e, t)
  },
  setSearchQuery: function(e) {
    let {
      query: t,
      performSearch: n,
      replace: r,
      resultsState: i
    } = e, {
      mode: a,
      cursorScope: s
    } = i, l = 0;
    null != a.token ? l = a.token.start : (null == s ? true : s.currentToken) != null && (l = s.currentToken.end);
    let c = null != a.token ? a.token.end : l;
    o.S.dispatch(E.CkL.SET_SEARCH_QUERY, {
      query: t,
      anchor: l,
      focus: c,
      performSearch: n,
      replace: r
    })
  },
  transitionQueryStateToSearchContext: w,
  cleanUpPrivateChannelSearchState: D
}
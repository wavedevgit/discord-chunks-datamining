/** Chunk was on web.js **/
/** chunk id: 611004, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
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

function b(e) {
  let t = (0, u.Tm)(e);
  p.Z.clearSearchEditorState(e), c.Z.clearSearchMessages(t), d.Z.cleanUp(t), f.Z.cleanUp(t)
}

function y(e) {
  let {
    searchContext: t,
    searchQueryString: n,
    searchQuery: r,
    offset: i
  } = e, a = (0, u.Tm)(t);
  c.Z.clearSearchMessages(a), p.Z.setShowNoResultsAlt(t), p.Z.setShowBlockedResults(t, false), p.Z.updateSearchResultsQuery(t, n, r, i), p.Z.addSearchHistoryItem(t, n)
}

function O(e) {
  var t;
  let {
    searchContext: n,
    searchQueryString: r,
    searchEverywhere: i,
    offset: a
  } = e, o = (0, u.Tm)(n), s = null != (t = h.Z.getSearchMode(o)) ? t : g.o, l = {
    offset: a
  };
  n.type === E.aib.DMS ? c.Z.fetchTabMessages({
    searchContext: n,
    searchTabs: [m.sR.MESSAGES],
    searchQueryString: r,
    searchMode: s,
    getId: () => o,
    getLimit: () => E.vpv,
    pagination: l,
    trackExactTotalHits: true,
    onFetchStart: e => {
      let {
        searchQueryString: t,
        searchQuery: r
      } = e;
      y({
        searchContext: n,
        searchQueryString: t,
        searchQuery: r,
        offset: a
      })
    }
  }) : c.Z.fetchMessages({
    searchContext: n,
    searchQueryString: r,
    pagination: l,
    searchMode: s,
    searchEverywhere: i,
    onFetchStart: e => {
      let {
        searchQueryString: t,
        searchQuery: r
      } = e;
      y({
        searchContext: n,
        searchQueryString: t,
        searchQuery: r,
        offset: a
      })
    }
  })
}

function v(e) {
  let t = (0, u.Tm)(e),
    n = h.Z.getEditorState(t);
  return null != n ? s.Sq(n) : null
}

function I(e, t) {
  var n;
  let r = (0, u.Tm)(e),
    a = null != (n = h.Z.getEditorState(r)) ? n : s.nR(l.Jl(_.ZP)),
    o = s.c2(t, a);
  o = s.Hl(o, 512);
  let c = (0, u.kG)(t).filter(e => e.type !== i.ZP.NON_TOKEN_TYPE);
  o = s.lv(c, o, _.ZP), o = s.iK(0 + t.length, o), p.Z.updateSearchEditorState(e, o)
}

function T(e, t) {
  let n = v(e);
  if (null == n) return;
  let r = n.endsWith(" ") ? n + t : n + " " + t;
  I(e, r), O({
    searchContext: e,
    searchQueryString: r,
    offset: 0
  })
}

function S(e, t) {
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

function A(e, t, n) {
  let r = (0, u.Tm)(e),
    i = h.Z.getEditorState(r);
  if (null == i) return;
  let a = S(t, s.Sq(i));
  I(t, a = a.trim());
  let o = h.Z.getSearchMode(r);
  p.Z.updateSearchMode(t, null != o ? o : g.o), c.Z.clearSearchMessages(r), p.Z.clearSearchEditorState(e), n(a)
}

function C() {
  Chunk817190.Z.getSearchStateIds().forEach(e => {
    let t = a.Z.getChannel(e);
    null != t && t.isPrivate() && b({
      type: E.aib.CHANNEL,
      channelId: t.id
    })
  })
}
let N = {
  cleanUpSearchState: b,
  fetchMessages: O,
  setSearchInputText: I,
  appendToSearchInputText: T,
  getSearchInputText: v,
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
  transitionQueryStateToSearchContext: A,
  cleanUpPrivateChannelSearchState: C
}
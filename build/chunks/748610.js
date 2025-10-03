/** Chunk was on web.js **/
/** chunk id: 748610, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./781311.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk570140 = require("./570140.js"),
  Chunk952537 = require("./952537.js"),
  Chunk675478 = require("./675478.js"),
  Chunk607802 = require("./607802.js"),
  Chunk187462 = require("./187462.js"),
  Chunk532496 = require("./532496.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e) {
  if (!Array.isArray(e.pinned)) return;
  let t = e.pinned.some(e => true === e);
  e.pinned = t
}

function h(e) {
  return e === d.I_8 ? null : e
}
let m = {
  fetchTabMessages: function(e) {
    let {
      searchContext: t,
      searchTabs: n,
      searchQueryString: r,
      pagination: s,
      trackExactTotalHits: c,
      getId: f,
      getLimit: m,
      onFetchStart: g,
      onFetchSuccess: E,
      searchMode: b = d.QIO.NEWEST
    } = e, y = (0, l.kG)(r), O = (0, l.$G)(y);
    p(O);
    let v = _({}, O, (0, l.zH)(b)),
      I = (0, l.s5)(t);
    null != I && (0, l.jW)(v, I);
    let T = u.Z.create({
      id: (0, l.Tm)(t),
      searchContext: t,
      searchQuery: v,
      searchTabs: n,
      getLimit: m,
      pagination: s,
      trackExactTotalHits: c
    });
    null == g || g({
      searchContext: t,
      searchQueryString: r,
      searchQuery: v
    });
    let S = n.map(e => f(e));
    return a.Z.dispatch({
      type: "SEARCH_MESSAGES_START",
      ids: S
    }), T.fetch(e => {
      let {
        body: n
      } = e, r = Object.entries(n.tabs);
      a.Z.dispatch({
        type: "SEARCH_MESSAGES_SUCCESS",
        guildId: h(I),
        data: r.map(e => {
          var t, r, a;
          let [s, l] = e, c = f(s), u = l.cursor;
          return {
            id: c,
            analyticsId: n.analytics_id,
            totalResults: l.total_results,
            cursor: null != u && i().isEmpty(u) ? null : u,
            messages: l.messages,
            channels: null != (t = l.channels) ? t : [],
            threads: null != (r = l.threads) ? r : [],
            members: (null != (a = l.members) ? a : []).map(e => (0, o.Z)(e)),
            doingHistoricalIndex: n.doing_deep_historical_index,
            documentsIndexed: n.documents_indexed
          }
        })
      }), null == E || E({
        searchContext: t,
        tabEntries: r
      })
    }, () => {
      a.Z.dispatch({
        type: "SEARCH_MESSAGES_INDEXING",
        ids: S
      })
    }, e => {
      a.Z.dispatch({
        type: "SEARCH_MESSAGES_FAILURE",
        ids: S,
        error: e
      })
    }), true
  },
  fetchMessages: function(e) {
    let {
      searchContext: t,
      query: n,
      searchEverywhere: r
    } = e, i = (0, l.s5)(t);
    null != i && (0, l.jW)(n, i), r && (n.search_everywhere = true);
    let s = (0, l.Tm)(t),
      u = c.Z.create({
        id: s,
        searchType: t.type,
        searchQuery: n
      });
    a.Z.dispatch({
      type: "SEARCH_MESSAGES_START",
      ids: [s]
    }), u.fetch(e => {
      var t, n, r;
      a.Z.dispatch({
        type: "SEARCH_MESSAGES_SUCCESS",
        guildId: h(i),
        data: [{
          id: s,
          analyticsId: e.body.analytics_id,
          totalResults: e.body.total_results,
          messages: e.body.messages,
          threads: null != (t = e.body.threads) ? t : [],
          members: (null != (n = e.body.members) ? n : []).map(e => (0, o.Z)(e)),
          doingHistoricalIndex: e.body.doing_deep_historical_index,
          documentsIndexed: e.body.documents_indexed,
          channels: null != (r = e.body.channels) ? r : [],
          cursor: null
        }]
      })
    }, () => {
      a.Z.dispatch({
        type: "SEARCH_MESSAGES_INDEXING",
        ids: [s]
      })
    }, e => {
      a.Z.dispatch({
        type: "SEARCH_MESSAGES_FAILURE",
        ids: [s],
        error: e
      })
    })
  },
  clearSearchRecentMessages: function() {
    Chunk570140.Z.dispatch({
      type: "SEARCH_RECENT_MESSAGES_CLEAR"
    })
  },
  clearAllSearchMesssages: function() {
    Chunk570140.Z.dispatch({
      type: "SEARCH_MESSAGES_CLEAR_ALL"
    })
  },
  clearSearchMessages: function(e) {
    a.Z.dispatch({
      type: "SEARCH_MESSAGES_CLEAR",
      id: e
    })
  },
  initializeAutocomplete: function(e) {
    a.Z.dispatch({
      type: "SEARCH_AUTOCOMPLETE_INITIALIZE",
      searchContext: e
    })
  },
  updateAutocompleteQuery: function(e) {
    let {
      searchContext: t,
      tokens: n,
      queryString: r,
      cursorScope: i
    } = e;
    r.trim().length > 0 && s.DZ.loadIfNecessary(), a.Z.dispatch({
      type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
      searchContext: t,
      tokens: n,
      cursorScope: i
    })
  },
  markSearchTokensRefreshed: function() {
    Chunk570140.Z.dispatch({
      type: "SEARCH_TOKENS_REFRESHED"
    })
  }
}
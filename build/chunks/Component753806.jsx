/** Chunk was on 52199 **/
/** chunk id: 753806, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => L
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

function I(e) {
  let t = (0, p.bS)(e);
  A.A.clearSearchEditorState(e), h.A.clearSearchMessages(t), f.A.cleanUp(t), g.A.cleanUp(t)
}

function R(e) {
  let {
    searchContext: t,
    searchQueryString: r,
    searchQuery: n,
    offset: l
  } = e, s = (0, p.bS)(t);
  h.A.clearSearchMessages(s), A.A.setShowNoResultsAlt(t), A.A.setShowBlockedResults(t, false), A.A.updateSearchResultsQuery(t, r, n, l), A.A.addSearchHistoryItem(t, r)
}

function v(e) {
  var t;
  let {
    searchContext: r,
    searchQueryString: n,
    searchEverywhere: l,
    offset: s
  } = e, a = (0, p.bS)(r), i = null != (t = y.A.getSearchMode(a)) ? t : m.z, o = {
    offset: s
  };
  r.type === O.I4_.DMS ? h.A.fetchTabMessages({
    searchContext: r,
    searchTabs: [b.$H.MESSAGES],
    searchQueryString: n,
    searchMode: i,
    getId: () => a,
    getLimit: () => O.T_y,
    pagination: o,
    trackExactTotalHits: true,
    onFetchStart: e => {
      let {
        searchQueryString: t,
        searchQuery: n
      } = e;
      R({
        searchContext: r,
        searchQueryString: t,
        searchQuery: n,
        offset: s
      })
    }
  }) : h.A.fetchMessages({
    searchContext: r,
    searchQueryString: n,
    pagination: o,
    searchMode: i,
    searchEverywhere: l,
    onFetchStart: e => {
      let {
        searchQueryString: t,
        searchQuery: n
      } = e;
      R({
        searchContext: r,
        searchQueryString: t,
        searchQuery: n,
        offset: s
      })
    }
  })
}

function T(e) {
  let t = (0, p.bS)(e),
    r = y.A.getEditorState(t);
  return null != r ? u.pe(r) : null
}

function x(e, t) {
  var r;
  let n = (0, p.bS)(e),
    l = null != (r = y.A.getEditorState(n)) ? r : u.e_(d.ys(E.Ay)),
    s = u.t7(t, l);
  s = u.a4(s, 512);
  let i = (0, p._o)(t).filter(e => e.type !== a.Ay.NON_TOKEN_TYPE);
  s = u.uD(i, s, E.Ay), s = u.UO(0 + t.length, s), A.A.updateSearchEditorState(e, s)
}

function j(e) {
  c._.dispatch(O.jej.SET_SEARCH_QUERY, e)
}
let L = {
  cleanUpSearchState: I,
  fetchMessages: v,
  setSearchInputText: x,
  appendToSearchInputText: function(e, t) {
    let r = T(e);
    if (null == r) return;
    let n = r.endsWith(" ") ? r + t : r + " " + t;
    x(e, n), v({
      searchContext: e,
      searchQueryString: n,
      offset: 0
    })
  },
  getSearchInputText: T,
  ensureSearchInputDecorators: function(e) {
    let t, r = (0, p.bS)(e),
      n = y.A.getEditorState(r),
      s = null == n ? true : n.getCurrentContent(),
      a = null == n ? true : n.getSelection();
    null != s && null != a ? (t = u.Rg(d.ys(E.Ay), s), t = l.EditorState.forceSelection(t, a)) : t = u.e_(d.ys(E.Ay)), A.A.updateSearchEditorState(e, t)
  },
  setSearchQuery: function(e) {
    let {
      query: t,
      performSearch: r,
      replace: n,
      resultsState: l,
      searchQuerySource: s
    } = e, {
      mode: a,
      cursorScope: i
    } = l, o = 0;
    null != a.token ? o = a.token.start : (null == i ? true : i.currentToken) != null && (o = i.currentToken.end);
    let c = null != a.token ? a.token.end : o;
    j({
      query: t,
      anchor: o,
      focus: c,
      performSearch: r,
      replace: n,
      searchQuerySource: s
    })
  },
  dispatchSetSearchQuery: j,
  transitionStateToSearchContext: function(e, t, r) {
    let n = (0, p.bS)(e),
      l = y.A.getEditorState(n);
    if (null == l) return;
    let s = u.pe(l),
      a = t.type === O.I4_.CHANNEL ? (0, p.EH)(s) : s;
    x(t, a = a.trim());
    let o = y.A.getSearchMode(n);
    A.A.updateSearchMode(t, null != o ? o : m.z), _.A.transferSession(e, t);
    let c = (0, p._o)(a),
      d = (0, p.Zf)(c);
    _.A.refreshQueryId(t), (0, S.fd)({
      searchContext: t,
      query: d,
      queryString: a,
      searchQuerySource: b.Q_.SEARCH_XDM_SETTINGS
    }), v({
      searchContext: t,
      searchQueryString: a,
      offset: 0
    });
    let f = (0, p.bS)(t);
    i.A.setSelectedSearchContext(f), A.A.clearSearchEditorState(e), h.A.clearSearchMessages(n), null == r || r()
  },
  cleanUpPrivateChannelSearchState: function() {
    y.A.getSearchStateIds().forEach(e => {
      let t = o.A.getChannel(e);
      null != t && t.isPrivate() && I({
        type: O.I4_.CHANNEL,
        channelId: t.id
      })
    })
  },
  openSearchFiltersModal: function(e) {
    (0, S.TJ)({
      searchContext: e
    }), (0, s.openModalLazy)(async () => {
      let {
        default: t
      } = await r.e("47230").then(r.bind(r, 561965));
      return r => {
        var l, s;
        return (0, n.jsx)(t, (l = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, r), s = s = {
          searchContext: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
        }), l))
      }
    }, {
      modalKey: m.b
    })
  }
}
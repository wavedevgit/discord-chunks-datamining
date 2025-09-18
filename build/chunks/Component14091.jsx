/** Chunk was on 62987 **/
/** chunk id: 14091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => q
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk169223 = require("./169223.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk585483 = require("./585483.js"),
  Chunk748610 = require("./748610.js"),
  Chunk171900 = require("./171900.js"),
  Chunk607802 = require("./607802.js"),
  Chunk375123 = require("./375123.js"),
  Chunk945577 = require("./945577.js"),
  Chunk56522 = require("./56522.js"),
  Chunk759209 = require("./759209.js"),
  Chunk532428 = require("./532428.js"),
  Chunk406326 = require("./406326.jsx"),
  Chunk994463 = require("./994463.jsx"),
  Chunk611004 = require("./611004.js"),
  Chunk619753 = require("./619753.jsx"),
  Chunk902733 = require("./902733.jsx"),
  Chunk165017 = require("./165017.js"),
  Chunk737 = require("./737.js"),
  Chunk967974 = require("./967974.js"),
  Chunk909125 = require("./909125.js"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk669922 = require("./669922.js");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class B extends Chunk647438.Component {
  componentDidMount() {
    this.autoAnalytics()
  }
  componentDidUpdate(e) {
    (this.props.searchRequestAnalyticsId !== e.searchRequestAnalyticsId || this.props.searchOffset !== e.searchOffset) && this.autoAnalytics(e.searchRequestAnalyticsId)
  }
  render() {
    return null
  }
  constructor(...e) {
    var t;
    super(...e), t = this, U(this, "autoAnalytics", function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null;
      if (null == t.props.searchRequestAnalyticsId || t.props.isSearching) return;
      let n = 0,
        r = 0,
        i = 0,
        l = 0;
      t.props.messages.forEach(e => {
        null != e.content && "" !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && i++, null != e.attachments && e.attachments.length > 0 && r++
      });
      let a = (0, y.Tm)(t.props.searchContext);
      0 === n ? (0, R.Qb)({
        searchContext: t.props.searchContext,
        searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
        searchQueryString: S.Z.getSearchInputText(t.props.searchContext),
        searchQuery: w.Z.getSearchResultsQuery(a)
      }) : (0, R.hM)({
        searchContext: t.props.searchContext,
        searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
        prevSearchRequestAnalyticsId: e !== t.props.searchRequestAnalyticsId ? e : null,
        isError: t.props.searchHasError,
        limit: t.props.searchLimit,
        offset: t.props.searchOffset,
        page: Math.floor(t.props.searchOffset / t.props.searchLimit) + 1,
        totalResults: t.props.searchTotalResults,
        pageResults: null != t.props.messages ? t.props.messages.length : null,
        isIndexing: t.props.searchIsIndexing,
        pageNumMessages: n,
        pageNumLinks: l,
        pageNumEmbeds: i,
        pageNumAttachments: r,
        searchQueryString: S.Z.getSearchInputText(t.props.searchContext),
        searchQuery: w.Z.getSearchResultsQuery(a)
      })
    })
  }
}

function G(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: L.emptyResultsWrap,
    children: (0, r.jsx)("div", {
      className: L.emptyResultsContent,
      children: t
    })
  })
}

function H(e) {
  let {
    searchContext: t,
    isFeedbackVisible: n,
    dismissFeedbackEntrypoint: i
  } = e;
  return n ? (0, r.jsx)(P.Z, {
    searchContext: t,
    dismissFeedbackEntrypoint: i
  }) : null
}

function F(e) {
  let {
    messages: t,
    blockCount: n,
    ignoreCount: i,
    search: l,
    searchContext: o,
    renderEmbeds: s,
    onClick: c,
    onScrollTo: u,
    onPageChange: d,
    paginationTotalCount: p,
    renderPageWrapper: h,
    onBlockedResultsClick: f,
    searchRequestAnalyticsId: m,
    searchResultsQuery: g,
    isFavoritesSearch: b
  } = e, {
    totalResults: y,
    isSearching: _,
    isIndexing: C,
    hasError: v
  } = l;
  if (v) return (0, r.jsxs)(G, {
    children: [(0, r.jsx)("div", {
      className: L.errorImage
    }), (0, r.jsx)("div", {
      className: a()(L.emptyResultsText, L.errorMessage),
      children: k.intl.string(k.t.uvDZBQ)
    })]
  });
  if (C) {
    let e = o.type === M.aib.GUILD ? k.intl.string(k.t.AXPbZm) : k.intl.string(k.t.Q0JJjo);
    return (0, r.jsxs)(G, {
      children: [(0, r.jsx)(E.Z, {}), (0, r.jsx)("div", {
        className: (L.emptyResultsText, L.stillIndexing),
        children: e
      })]
    })
  }
  if (_) return null;
  if (y > 0) return (0, r.jsx)(I.Z, {
    search: l,
    messages: t,
    onClick: c,
    blockCount: n,
    ignoreCount: i,
    renderEmbeds: s,
    scrollTo: u,
    onPageChange: d,
    paginationTotalCount: p,
    renderPageWrapper: h,
    onBlockedResultsClick: f,
    searchRequestAnalyticsId: m,
    searchResultsQuery: g,
    isFavoritesSearch: b
  });
  let {
    showNoResultsAlt: x
  } = l, O = x ? k.intl.string(k.t["VrK/2d"]) : k.intl.string(k.t.V6nAfH);
  return (0, r.jsxs)(G, {
    children: [(0, r.jsx)("div", {
      className: a()(L.noResultsImage, {
        [L.alt]: x
      })
    }), (0, r.jsx)("div", {
      className: a()(L.emptyResultsText, L.noResults, {
        [L.alt]: x
      }),
      children: O
    })]
  })
}
let V = [],
  z = Chunk647438.memo(function(e) {
    let {
      searchContext: t,
      search: n,
      renderEmbeds: l,
      searchRequestAnalyticsId: a,
      messages: u,
      blockCount: p,
      ignoreCount: h,
      isFeedbackVisible: g,
      dismissFeedbackEntrypoint: b,
      onSearchModeChange: C,
      onPageChange: v,
      searchMode: x,
      onBlockedResultsClick: E,
      searchResultsQuery: I,
      isFavoritesSearch: P
    } = e, Z = i.useRef(null), T = i.useCallback(() => {
      S.Z.cleanUpSearchState(t)
    }, [t]);
    i.useEffect(() => (m.S.subscribe(M.CkL.SEARCH_RESULTS_CLOSE, T), () => {
      m.S.unsubscribe(M.CkL.SEARCH_RESULTS_CLOSE, T)
    }), [T]);
    let N = i.useRef(n.showBlockedResults);
    i.useEffect(() => {
      if (N.current !== n.showBlockedResults) {
        N.current = n.showBlockedResults;
        let e = Z.current;
        null != e && e.scrollToBottom()
      }
    }, [n.showBlockedResults]);
    let D = i.useCallback((e, t, n) => {
        let r = Z.current;
        if (null == r) return;
        let i = r.getScrollerState().scrollTop - e;
        r.scrollTo({
          to: i,
          animate: t,
          callback: n
        })
      }, []),
      {
        paginationTotalCount: B,
        paginationMaxIndex: G,
        isPaginationTotalCountLimited: z
      } = (0, A.M)({
        totalResults: n.totalResults,
        isSearching: n.isSearching
      }),
      W = i.useCallback((e, t) => {
        let n = G + 1;
        if (!z || e.targetPage !== n) return t;
        {
          let e = k.intl.formatToPlainString(k.t["E+2azc"], {
            maxPages: n
          });
          return (0, r.jsx)(c.ua7, {
            tooltipClassName: L.paginationLimitTooltip,
            tooltipContentClassName: L.paginationLimitTooltipText,
            text: (0, r.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "text-primary",
              children: e
            }),
            "aria-label": e,
            children: e => {
              var n, i;
              return (0, r.jsx)("div", (n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), r.forEach(function(t) {
                    U(e, t, n[t])
                  })
                }
                return e
              }({}, e), i = i = {
                children: t
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(i)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
              }), n))
            }
          })
        }
      }, [z, G]),
      q = i.useCallback(e => {
        e === x || n.isSearching || ((0, R.zW)({
          searchContext: t,
          searchRequestAnalyticsId: a,
          mode: e
        }), C(e))
      }, [C, n.isSearching, t, x, a]),
      Y = i.useCallback((e, r) => {
        let i = f.Z.getChannel(e.channel_id),
          l = null != i ? i.getGuildId() : null,
          o = (0, y.Tm)(t),
          {
            offset: s,
            totalResults: c
          } = n;
        (0, R.sL)({
          searchContext: t,
          searchRequestAnalyticsId: a,
          guildId: l,
          channelId: e.channel_id,
          messageId: e.id,
          pageResults: null != u ? u.length : null,
          totalResults: c,
          limit: M.vpv,
          page: Math.floor(s / M.vpv) + 1,
          offset: s,
          index: r,
          searchQueryString: S.Z.getSearchInputText(t),
          searchQuery: w.Z.getSearchResultsQuery(o)
        })
      }, [n, t, a, u]),
      K = i.useCallback(e => {
        (0, R.t6)({
          searchContext: t,
          searchRequestAnalyticsId: a,
          newPageIndex: e
        }), v(e)
      }, [v, t, a]),
      X = Math.floor(n.offset / M.vpv),
      Q = z && X >= G,
      J = G + 1,
      $ = (0, _.C)({
        location: "SearchResults"
      }),
      ee = (0, o.Wu)([w.Z], () => {
        if (0 !== n.offset || !$) return V;
        let e = u.length;
        if (e < 10) return V;
        let r = 0;
        if (u.forEach(e => {
            (e.author.bot || null != e.webhookId) && r++
          }), r / e < .75) return V;
        let i = (0, y.Tm)(t),
          l = w.Z.getSearchResultsQueryString(i);
        return (0, y.kG)(null != l ? l : "").some(e => e.type === M.dCx.FILTER_AUTHOR_TYPE) ? V : [s.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT]
      }),
      [et, en] = (0, d.US)(ee),
      er = et === s.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
      ei = i.useCallback(() => {
        let e = "".concat(O.ZP[M.dCx.FILTER_AUTHOR_TYPE].key, " user") + " ";
        S.Z.appendTextToSearchInput(t, e)
      }, [t]);
    return (0, r.jsxs)("section", {
      className: L.searchResultsWrap,
      "aria-label": k.intl.string(k.t.zkoeq6),
      children: [(0, r.jsx)(j.Z, {
        searchContext: t,
        searchMode: x,
        onSearchModeChange: q,
        totalResults: n.totalResults,
        isSearching: n.isSearching,
        isIndexing: n.isHistoricalIndexing,
        documentsIndexed: n.documentsIndexed
      }), (0, r.jsxs)(c.Den, {
        ref: Z,
        className: L.scroller,
        children: [Q && !n.isSearching && (0, r.jsx)(c.Wn, {
          className: L.paginationLimitHeader,
          messageType: c.QYI.WARNING,
          children: k.intl.formatToPlainString(k.t["E+2azc"], {
            maxPages: J
          })
        }), er && (0, r.jsx)(c.Wn, {
          className: L.helpMessageContainer,
          messageType: c.QYI.INFO,
          children: k.intl.format(k.t["gQeg/f"], {
            handleClick: ei
          })
        }), (0, r.jsx)(F, {
          messages: u,
          blockCount: p,
          ignoreCount: h,
          search: n,
          searchContext: t,
          renderEmbeds: l,
          onClick: Y,
          onScrollTo: D,
          onPageChange: K,
          paginationTotalCount: z ? B : true,
          renderPageWrapper: W,
          onBlockedResultsClick: E,
          searchRequestAnalyticsId: a,
          searchResultsQuery: I,
          isFavoritesSearch: P
        })]
      }), (0, r.jsx)(H, {
        searchContext: t,
        isFeedbackVisible: g,
        dismissFeedbackEntrypoint: b
      })]
    })
  });

function W(e) {
  let {
    searchContext: t
  } = e, n = (0, C.UX)({
    location: "SearchResults"
  }), {
    isFeedbackVisible: l,
    dismissFeedbackEntrypoint: a
  } = function(e) {
    let [t, n] = i.useState(false), r = (0, v.M)({
      location: "SearchResults"
    }), {
      enabled: l,
      force: a
    } = (0, x.f)({
      location: "SearchResults"
    }), o = e.type === M.aib.DMS || e.type === M.aib.CHANNEL, s = r && o || l;
    return i.useEffect(() => {
      s && a && n(true)
    }, [a, s, l]), (0, u.ZP)(() => {
      s && (a || p.Z.possiblyShowFeedbackModal(D.nw.SEARCH_RESULTS, () => n(true), () => n(false)))
    }), {
      dismissFeedbackEntrypoint: i.useCallback(() => {
        n(false)
      }, []),
      isFeedbackVisible: t
    }
  }(t), s = (0, y.Tm)(t), c = (0, o.cj)([b.Z, w.Z], () => {
    var e, t, n, r, i;
    return {
      isSearching: null != (e = b.Z.getIsFetching(s)) && e,
      isIndexing: null != (t = b.Z.getIsIndexing(s)) && t,
      isHistoricalIndexing: null != (n = b.Z.getIsHistoricalIndexing(s)) && n,
      documentsIndexed: b.Z.getDocumentsIndexed(s),
      offset: null != (r = w.Z.getSearchResultsOffset(s)) ? r : 0,
      totalResults: null != (i = b.Z.getTotalCount(s)) ? i : 0,
      hasError: null != b.Z.getError(s),
      showBlockedResults: w.Z.shouldShowBlockedResults(s),
      showNoResultsAlt: w.Z.shouldShowNoResultsAlt(s)
    }
  }), d = (0, o.e7)([b.Z], () => b.Z.getAnalyticsId(s)), {
    renderedMessages: f,
    ignoreCount: m,
    blockCount: _
  } = (0, T.Z)({
    searchContext: t
  }), {
    searchMode: O,
    setSearchMode: j
  } = (0, N.Z)({
    searchContext: t
  }), E = i.useCallback(e => {
    if (c.isSearching) return;
    j(e);
    let r = S.Z.getSearchInputText(t),
      i = (0, y.Tm)(t),
      l = w.Z.getSearchResultsQuery(i);
    null != r && null != l && (n && t.type === M.aib.DMS ? S.Z.fetchCrossDMMessages({
      searchContext: t,
      selectedPageIndex: 0,
      queryString: r,
      searchMode: e
    }) : S.Z.fetchMessages({
      searchContext: t,
      queryString: r,
      searchQuery: l,
      searchMode: e,
      offset: 0
    }))
  }, [n, c.isSearching, t, j]), I = i.useCallback(e => {
    if (c.isSearching) return;
    let r = S.Z.getSearchInputText(t),
      i = (0, y.Tm)(t),
      l = w.Z.getSearchResultsQuery(i);
    null != r && null != l && (n && t.type === M.aib.DMS ? S.Z.fetchCrossDMMessages({
      searchContext: t,
      queryString: r,
      selectedPageIndex: e,
      searchMode: O
    }) : S.Z.fetchMessages({
      searchContext: t,
      queryString: r,
      searchQuery: l,
      offset: e * M.vpv
    }))
  }, [n, c.isSearching, t, O]), P = (0, o.e7)([w.Z], () => {
    let e = (0, y.Tm)(t);
    return w.Z.getSearchResultsQuery(e)
  }), Z = t.type === M.aib.FAVORITES, A = i.useCallback(e => g.Z.setShowBlockedResults(t, e), [t]), R = i.useDeferredValue(f), k = i.useDeferredValue(c), L = i.useDeferredValue(d);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(z, {
      searchContext: t,
      search: k,
      searchRequestAnalyticsId: L,
      messages: R,
      ignoreCount: m,
      blockCount: _,
      renderEmbeds: h.NA.useSetting(),
      isFeedbackVisible: l,
      dismissFeedbackEntrypoint: a,
      onPageChange: I,
      onSearchModeChange: E,
      searchMode: O,
      onBlockedResultsClick: A,
      searchResultsQuery: P,
      isFavoritesSearch: Z
    }), (0, r.jsx)(B, {
      searchContext: t,
      searchRequestAnalyticsId: L,
      messages: R,
      searchOffset: k.offset,
      searchLimit: M.vpv,
      searchHasError: k.hasError,
      searchTotalResults: k.totalResults,
      searchIsIndexing: k.isHistoricalIndexing,
      isSearching: k.isSearching
    })]
  })
}

function q(e) {
  let {
    guildId: t,
    channelId: n
  } = e, i = (0, Z.H)({
    guildId: t,
    channelId: n
  });
  return null == i ? null : (0, r.jsx)(W, {
    searchContext: i
  })
}
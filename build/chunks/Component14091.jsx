/** Chunk was on 91053 **/
/** chunk id: 14091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => V
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk169223 = require("./169223.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk585483 = require("./585483.js"),
  Chunk171900 = require("./171900.js"),
  Chunk607802 = require("./607802.js"),
  Chunk28964 = require("./28964.js"),
  Chunk759209 = require("./759209.js"),
  Chunk532428 = require("./532428.js"),
  Chunk406326 = require("./406326.jsx"),
  Chunk994463 = require("./994463.jsx"),
  Chunk991896 = require("./991896.js"),
  Chunk611004 = require("./611004.jsx"),
  Chunk619753 = require("./619753.jsx"),
  Chunk902733 = require("./902733.jsx"),
  Chunk165017 = require("./165017.js"),
  Chunk737 = require("./737.js"),
  Chunk909125 = require("./909125.js"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk669922 = require("./669922.js");
class M extends Chunk473749.Component {
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
    super(...e), t = this,
      function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      }(this, "autoAnalytics", function() {
        let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null;
        if (null == t.props.searchRequestAnalyticsId || t.props.isSearching) return;
        let n = 0,
          r = 0,
          i = 0,
          l = 0;
        t.props.messages.forEach(e => {
          null != e.content && "" !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && i++, null != e.attachments && e.attachments.length > 0 && r++
        });
        let a = (0, _.Tm)(t.props.searchContext);
        0 === n ? (0, R.Qb)({
          searchContext: t.props.searchContext,
          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
          searchQueryString: I.Z.getSearchInputText(t.props.searchContext),
          searchQuery: N.Z.getSearchResultsQuery(a)
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
          searchQueryString: I.Z.getSearchInputText(t.props.searchContext),
          searchQuery: N.Z.getSearchResultsQuery(a)
        })
      })
  }
}

function k(e) {
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

function U(e) {
  let {
    searchContext: t,
    isFeedbackVisible: n,
    dismissFeedbackEntrypoint: i
  } = e;
  return n ? (0, r.jsx)(E.Z, {
    searchContext: t,
    dismissFeedbackEntrypoint: i
  }) : null
}

function G(e) {
  let {
    messages: t,
    blockCount: n,
    ignoreCount: i,
    search: l,
    searchContext: s,
    renderEmbeds: o,
    onClick: c,
    onScrollTo: d,
    onPageChange: u,
    paginationTotalCount: p,
    renderPageWrapper: h,
    onBlockedResultsClick: f,
    searchRequestAnalyticsId: g,
    searchResultsQuery: m,
    isFavoritesSearch: b
  } = e, {
    totalResults: _,
    isSearching: y,
    isIndexing: O,
    hasError: x
  } = l;
  if (x) return (0, r.jsxs)(k, {
    children: [(0, r.jsx)("div", {
      className: L.errorImage
    }), (0, r.jsx)("div", {
      className: a()(L.emptyResultsText, L.errorMessage),
      children: D.intl.string(D.t.uvDZBZ)
    })]
  });
  if (O) {
    let e = s.type === w.aib.GUILD ? D.intl.string(D.t.AXPbZr) : D.intl.string(D.t.Q0JJjv);
    return (0, r.jsxs)(k, {
      children: [(0, r.jsx)(v.Z, {}), (0, r.jsx)("div", {
        className: (L.emptyResultsText, L.stillIndexing),
        children: e
      })]
    })
  }
  if (y) return null;
  if (_ > 0) return (0, r.jsx)(S.Z, {
    search: l,
    messages: t,
    onClick: c,
    blockCount: n,
    ignoreCount: i,
    renderEmbeds: o,
    scrollTo: d,
    onPageChange: u,
    paginationTotalCount: p,
    renderPageWrapper: h,
    onBlockedResultsClick: f,
    searchRequestAnalyticsId: g,
    searchResultsQuery: m,
    isFavoritesSearch: b
  });
  let {
    showNoResultsAlt: j
  } = l, C = j ? D.intl.string(D.t["VrK/2R"]) : D.intl.string(D.t.V6nAfF);
  return (0, r.jsxs)(k, {
    children: [(0, r.jsx)("div", {
      className: a()(L.noResultsImage, {
        [L.alt]: j
      })
    }), (0, r.jsx)("div", {
      className: a()(L.emptyResultsText, L.noResults, {
        [L.alt]: j
      }),
      children: C
    })]
  })
}
let H = [],
  F = Chunk473749.memo(function(e) {
    let {
      searchContext: t,
      search: n,
      renderEmbeds: l,
      searchRequestAnalyticsId: a,
      messages: u,
      blockCount: h,
      ignoreCount: f,
      isFeedbackVisible: b,
      dismissFeedbackEntrypoint: y,
      onSearchModeChange: O,
      onPageChange: v,
      searchMode: C,
      onBlockedResultsClick: S,
      searchResultsQuery: E,
      isFavoritesSearch: Z,
      selectedChannelId: P
    } = e, A = i.useRef(null), M = i.useCallback(() => {
      I.Z.cleanUpSearchState(t)
    }, [t]);
    i.useEffect(() => (m.S.subscribe(w.CkL.SEARCH_RESULTS_CLOSE, M), () => {
      m.S.unsubscribe(w.CkL.SEARCH_RESULTS_CLOSE, M)
    }), [M]);
    let k = i.useRef(n.showBlockedResults);
    i.useEffect(() => {
      if (k.current !== n.showBlockedResults) {
        k.current = n.showBlockedResults;
        let e = A.current;
        null != e && e.scrollToBottom()
      }
    }, [n.showBlockedResults]);
    let F = i.useCallback((e, t, n) => {
        let r = A.current;
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
        paginationMaxIndex: V,
        isPaginationTotalCountLimited: z
      } = (0, T.M)({
        totalResults: n.totalResults,
        isSearching: n.isSearching
      }),
      W = i.useCallback((e, t) => {
        let n = V + 1;
        if (!z || e.targetPage !== n) return t;
        {
          let e = D.intl.formatToPlainString(D.t["E+2azY"], {
            maxPages: n
          });
          return (0, r.jsx)(c.u, {
            asContainer: true,
            text: e,
            children: t
          })
        }
      }, [z, V]),
      Y = i.useCallback(e => {
        e === C || n.isSearching || ((0, R.zW)({
          searchContext: t,
          searchRequestAnalyticsId: a,
          mode: e
        }), O(e))
      }, [O, n.isSearching, t, C, a]),
      q = i.useCallback((e, r) => {
        let i = g.Z.getChannel(e.channel_id),
          l = null != i ? i.getGuildId() : null,
          s = (0, _.Tm)(t),
          {
            offset: o,
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
          limit: w.vpv,
          page: Math.floor(o / w.vpv) + 1,
          offset: o,
          index: r,
          searchQueryString: I.Z.getSearchInputText(t),
          searchQuery: N.Z.getSearchResultsQuery(s)
        })
      }, [n, t, a, u]),
      K = i.useCallback(e => {
        (0, R.t6)({
          searchContext: t,
          searchRequestAnalyticsId: a,
          newPageIndex: e
        }), v(e)
      }, [v, t, a]),
      Q = Math.floor(n.offset / w.vpv),
      X = z && Q >= V,
      J = V + 1,
      $ = (0, s.Wu)([N.Z], () => {
        if (0 !== n.offset) return H;
        let e = u.length;
        if (e < 10) return H;
        let r = 0;
        if (u.forEach(e => {
            (e.author.bot || null != e.webhookId) && r++
          }), r / e < .75) return H;
        let i = (0, _.Tm)(t),
          l = N.Z.getSearchResultsQueryString(i);
        return (0, _.kG)(null != l ? l : "").some(e => e.type === w.dCx.FILTER_AUTHOR_TYPE) ? H : [o.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT]
      }),
      [ee, et] = (0, p.US)($),
      en = ee === o.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
      er = i.useCallback(() => {
        if (n.isSearching) return;
        let e = "".concat(x.ZP[w.dCx.FILTER_AUTHOR_TYPE].key, " ").concat(D.intl.string(D.t.tPZo4p)) + " ";
        I.Z.appendToSearchInputText(t, e)
      }, [t, n.isSearching]);
    return (0, r.jsxs)("section", {
      className: L.searchResultsWrap,
      "aria-label": D.intl.string(D.t["zkoeq/"]),
      children: [(0, r.jsx)(j.Z, {
        searchContext: t,
        searchMode: C,
        onSearchModeChange: Y,
        totalResults: n.totalResults,
        isSearching: n.isSearching,
        isIndexing: n.isHistoricalIndexing,
        documentsIndexed: n.documentsIndexed,
        selectedChannelId: P
      }), (0, r.jsxs)(d.Den, {
        ref: A,
        className: L.scroller,
        children: [X && !n.isSearching && (0, r.jsx)(d.Wn, {
          className: L.paginationLimitHeader,
          messageType: d.QYI.WARNING,
          children: D.intl.formatToPlainString(D.t["E+2azY"], {
            maxPages: J
          })
        }), en && (0, r.jsx)(d.Wn, {
          className: L.helpMessageContainer,
          messageType: d.QYI.INFO,
          children: D.intl.format(D.t["gQeg/R"], {
            handleClick: er
          })
        }), (0, r.jsx)(G, {
          messages: u,
          blockCount: h,
          ignoreCount: f,
          search: n,
          searchContext: t,
          renderEmbeds: l,
          onClick: q,
          onScrollTo: F,
          onPageChange: K,
          paginationTotalCount: z ? B : true,
          renderPageWrapper: W,
          onBlockedResultsClick: S,
          searchRequestAnalyticsId: a,
          searchResultsQuery: E,
          isFavoritesSearch: Z
        })]
      }), (0, r.jsx)(U, {
        searchContext: t,
        isFeedbackVisible: b,
        dismissFeedbackEntrypoint: y
      })]
    })
  });

function B(e) {
  let {
    searchContext: t,
    selectedChannelId: n
  } = e, {
    isFeedbackVisible: l,
    dismissFeedbackEntrypoint: a
  } = function() {
    let [e, t] = i.useState(false), n = (0, y.M_)({
      location: "SearchResults"
    }), r = (0, O.f)({
      location: "SearchResults"
    }) && n;
    return (0, u.ZP)(() => {
      r && h.Z.possiblyShowFeedbackModal(A.nw.SEARCH_RESULTS, () => t(true), () => t(false))
    }), {
      dismissFeedbackEntrypoint: i.useCallback(() => {
        t(false)
      }, []),
      isFeedbackVisible: e
    }
  }(), o = (0, _.Tm)(t), c = (0, s.cj)([b.Z, N.Z], () => {
    var e, t, n, r, i;
    return {
      isSearching: null != (e = b.Z.getIsFetching(o)) && e,
      isIndexing: null != (t = b.Z.getIsIndexing(o)) && t,
      isHistoricalIndexing: null != (n = b.Z.getIsHistoricalIndexing(o)) && n,
      documentsIndexed: b.Z.getDocumentsIndexed(o),
      offset: null != (r = N.Z.getSearchResultsOffset(o)) ? r : 0,
      totalResults: null != (i = b.Z.getTotalCount(o)) ? i : 0,
      hasError: null != b.Z.getError(o),
      showBlockedResults: N.Z.shouldShowBlockedResults(o),
      showNoResultsAlt: N.Z.shouldShowNoResultsAlt(o)
    }
  }), d = (0, s.e7)([b.Z], () => b.Z.getAnalyticsId(o)), {
    renderedMessages: p,
    ignoreCount: g,
    blockCount: m
  } = (0, P.Z)({
    searchContext: t
  }), x = (0, s.e7)([N.Z], () => {
    var e;
    return null != (e = N.Z.getSearchMode(o)) ? e : w.QIO.NEWEST
  }), j = i.useCallback(e => {
    if (c.isSearching) return;
    C.Z.updateSearchMode(t, e);
    let n = I.Z.getSearchInputText(t);
    null != n && I.Z.fetchMessages({
      searchContext: t,
      searchQueryString: n,
      offset: 0
    })
  }, [c.isSearching, t]), v = i.useCallback(e => {
    if (c.isSearching) return;
    let n = I.Z.getSearchInputText(t);
    null != n && I.Z.fetchMessages({
      searchContext: t,
      searchQueryString: n,
      offset: e * w.vpv
    })
  }, [c.isSearching, t]), S = (0, s.e7)([N.Z], () => {
    let e = (0, _.Tm)(t);
    return N.Z.getSearchResultsQuery(e)
  }), E = t.type === w.aib.FAVORITES, Z = i.useCallback(e => C.Z.setShowBlockedResults(t, e), [t]), T = i.useDeferredValue(p), R = i.useDeferredValue(c), D = i.useDeferredValue(d);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(F, {
      searchContext: t,
      search: R,
      searchRequestAnalyticsId: D,
      messages: T,
      ignoreCount: g,
      blockCount: m,
      renderEmbeds: f.NA.useSetting(),
      isFeedbackVisible: l,
      dismissFeedbackEntrypoint: a,
      onPageChange: v,
      onSearchModeChange: j,
      searchMode: x,
      onBlockedResultsClick: Z,
      searchResultsQuery: S,
      isFavoritesSearch: E,
      selectedChannelId: n
    }), (0, r.jsx)(M, {
      searchContext: t,
      searchRequestAnalyticsId: D,
      messages: T,
      searchOffset: R.offset,
      searchLimit: w.vpv,
      searchHasError: R.hasError,
      searchTotalResults: R.totalResults,
      searchIsIndexing: R.isHistoricalIndexing,
      isSearching: R.isSearching
    })]
  })
}

function V(e) {
  let {
    guildId: t,
    channelId: n
  } = e, i = (0, Z.H)({
    guildId: t,
    channelId: n
  });
  return null == i ? null : (0, r.jsx)(B, {
    searchContext: i,
    selectedChannelId: n
  })
}
/** Chunk was on 81985 **/
/** chunk id: 673676, original params: e,t,n (module,exports,require) **/
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
  Chunk991896 = require("./991896.js"),
  Chunk611004 = require("./611004.jsx"),
  Chunk165017 = require("./165017.js"),
  Chunk737 = require("./737.js"),
  Chunk909125 = require("./909125.js"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk656396 = require("./656396.jsx"),
  Chunk737014 = require("./737014.jsx"),
  Chunk90956 = require("./90956.jsx"),
  Chunk991263 = require("./991263.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk253792 = require("./253792.js");
class k extends Chunk473749.Component {
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
        let a = (0, y.Tm)(t.props.searchContext);
        0 === n ? (0, P.Qb)({
          searchContext: t.props.searchContext,
          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
          searchQueryString: C.Z.getSearchInputText(t.props.searchContext),
          searchQuery: I.Z.getSearchResultsQuery(a)
        }) : (0, P.hM)({
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
          searchQueryString: C.Z.getSearchInputText(t.props.searchContext),
          searchQuery: I.Z.getSearchResultsQuery(a)
        })
      })
  }
}

function L(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: M.emptyResultsWrap,
    children: (0, r.jsx)("div", {
      className: M.emptyResultsContent,
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
  return n ? (0, r.jsx)(A.Z, {
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
    searchContext: o,
    renderEmbeds: s,
    onClick: c,
    onScrollTo: u,
    onPageChange: d,
    paginationTotalCount: p,
    renderPageWrapper: f,
    onBlockedResultsClick: h,
    searchRequestAnalyticsId: g,
    searchResultsQuery: m,
    isFavoritesSearch: b
  } = e, {
    totalResults: y,
    isSearching: v,
    isIndexing: O,
    hasError: j
  } = l;
  if (j) return (0, r.jsxs)(L, {
    children: [(0, r.jsx)("div", {
      className: M.errorImage
    }), (0, r.jsx)("div", {
      className: a()(M.emptyResultsText, M.errorMessage),
      children: D.intl.string(D.t.uvDZBZ)
    })]
  });
  if (O) {
    let e = o.type === w.aib.GUILD ? D.intl.string(D.t.AXPbZr) : D.intl.string(D.t.Q0JJjv);
    return (0, r.jsxs)(L, {
      children: [(0, r.jsx)(N.Z, {}), (0, r.jsx)("div", {
        className: (M.emptyResultsText, M.stillIndexing),
        children: e
      })]
    })
  }
  if (v) return null;
  if (y > 0) return (0, r.jsx)(T.Z, {
    search: l,
    messages: t,
    onClick: c,
    blockCount: n,
    ignoreCount: i,
    renderEmbeds: s,
    scrollTo: u,
    onPageChange: d,
    paginationTotalCount: p,
    renderPageWrapper: f,
    onBlockedResultsClick: h,
    searchRequestAnalyticsId: g,
    searchResultsQuery: m,
    isFavoritesSearch: b
  });
  let {
    showNoResultsAlt: x
  } = l, C = x ? D.intl.string(D.t["VrK/2R"]) : D.intl.string(D.t.V6nAfF);
  return (0, r.jsxs)(L, {
    children: [(0, r.jsx)("div", {
      className: a()(M.noResultsImage, {
        [M.alt]: x
      })
    }), (0, r.jsx)("div", {
      className: a()(M.emptyResultsText, M.noResults, {
        [M.alt]: x
      }),
      children: C
    })]
  })
}
let B = [],
  F = Chunk473749.memo(function(e) {
    let {
      searchContext: t,
      search: n,
      renderEmbeds: l,
      searchRequestAnalyticsId: a,
      messages: d,
      blockCount: f,
      ignoreCount: h,
      isFeedbackVisible: b,
      dismissFeedbackEntrypoint: v,
      onSearchModeChange: O,
      onPageChange: x,
      searchMode: E,
      onBlockedResultsClick: S,
      searchResultsQuery: N,
      isFavoritesSearch: T,
      selectedChannelId: A
    } = e, R = i.useRef(null), k = i.useCallback(() => {
      C.Z.cleanUpSearchState(t)
    }, [t]);
    i.useEffect(() => (m.S.subscribe(w.CkL.SEARCH_RESULTS_CLOSE, k), () => {
      m.S.unsubscribe(w.CkL.SEARCH_RESULTS_CLOSE, k)
    }), [k]);
    let L = i.useRef(n.showBlockedResults);
    i.useEffect(() => {
      if (L.current !== n.showBlockedResults) {
        L.current = n.showBlockedResults;
        let e = R.current;
        null != e && e.scrollToBottom()
      }
    }, [n.showBlockedResults]);
    let F = i.useCallback((e, t, n) => {
        let r = R.current;
        if (null == r) return;
        let i = r.getScrollerState().scrollTop - e;
        r.scrollTo({
          to: i,
          animate: t,
          callback: n
        })
      }, []),
      {
        paginationTotalCount: H,
        paginationMaxIndex: V,
        isPaginationTotalCountLimited: z
      } = (0, _.M)({
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
      K = i.useCallback(e => {
        e === E || n.isSearching || ((0, P.zW)({
          searchContext: t,
          searchRequestAnalyticsId: a,
          mode: e
        }), O(e))
      }, [O, n.isSearching, t, E, a]),
      Y = i.useCallback((e, r) => {
        let i = g.Z.getChannel(e.channel_id),
          l = null != i ? i.getGuildId() : null,
          o = (0, y.Tm)(t),
          {
            offset: s,
            totalResults: c
          } = n;
        (0, P.sL)({
          searchContext: t,
          searchRequestAnalyticsId: a,
          guildId: l,
          channelId: e.channel_id,
          messageId: e.id,
          pageResults: null != d ? d.length : null,
          totalResults: c,
          limit: w.vpv,
          page: Math.floor(s / w.vpv) + 1,
          offset: s,
          index: r,
          searchQueryString: C.Z.getSearchInputText(t),
          searchQuery: I.Z.getSearchResultsQuery(o)
        })
      }, [n, t, a, d]),
      q = i.useCallback(e => {
        (0, P.t6)({
          searchContext: t,
          searchRequestAnalyticsId: a,
          newPageIndex: e
        }), x(e)
      }, [x, t, a]),
      X = Math.floor(n.offset / w.vpv),
      Q = z && X >= V,
      J = V + 1,
      $ = (0, o.Wu)([I.Z], () => {
        if (0 !== n.offset) return B;
        let e = d.length;
        if (e < 10) return B;
        let r = 0;
        if (d.forEach(e => {
            (e.author.bot || null != e.webhookId) && r++
          }), r / e < .75) return B;
        let i = (0, y.Tm)(t),
          l = I.Z.getSearchResultsQueryString(i);
        return (0, y.kG)(null != l ? l : "").some(e => e.type === w.dCx.FILTER_AUTHOR_TYPE) ? B : [s.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT]
      }),
      [ee, et] = (0, p.US)($),
      en = ee === s.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
      er = i.useCallback(() => {
        if (n.isSearching) return;
        let e = "".concat(j.ZP[w.dCx.FILTER_AUTHOR_TYPE].key, " ").concat(D.intl.string(D.t.tPZo4p)) + " ";
        C.Z.appendToSearchInputText(t, e)
      }, [t, n.isSearching]);
    return (0, r.jsxs)("section", {
      className: M.searchResultsWrap,
      "aria-label": D.intl.string(D.t["zkoeq/"]),
      children: [(0, r.jsx)(Z.Z, {
        searchContext: t,
        searchMode: E,
        onSearchModeChange: K,
        totalResults: n.totalResults,
        isSearching: n.isSearching,
        isIndexing: n.isHistoricalIndexing,
        documentsIndexed: n.documentsIndexed,
        selectedChannelId: A
      }), (0, r.jsxs)(u.Den, {
        ref: R,
        className: M.scroller,
        children: [Q && !n.isSearching && (0, r.jsx)(u.Wn, {
          className: M.paginationLimitHeader,
          messageType: u.QYI.WARNING,
          children: D.intl.formatToPlainString(D.t["E+2azY"], {
            maxPages: J
          })
        }), en && (0, r.jsx)(u.Wn, {
          className: M.helpMessageContainer,
          messageType: u.QYI.INFO,
          children: D.intl.format(D.t["gQeg/R"], {
            handleClick: er
          })
        }), (0, r.jsx)(G, {
          messages: d,
          blockCount: f,
          ignoreCount: h,
          search: n,
          searchContext: t,
          renderEmbeds: l,
          onClick: Y,
          onScrollTo: F,
          onPageChange: q,
          paginationTotalCount: z ? H : true,
          renderPageWrapper: W,
          onBlockedResultsClick: S,
          searchRequestAnalyticsId: a,
          searchResultsQuery: N,
          isFavoritesSearch: T
        })]
      }), (0, r.jsx)(U, {
        searchContext: t,
        isFeedbackVisible: b,
        dismissFeedbackEntrypoint: v
      })]
    })
  });

function H(e) {
  let {
    searchContext: t,
    selectedChannelId: n
  } = e, {
    isFeedbackVisible: l,
    dismissFeedbackEntrypoint: a
  } = function() {
    let [e, t] = i.useState(false), n = (0, v.M_)({
      location: "SearchResults"
    }), r = (0, O.f)({
      location: "SearchResults"
    }) && n;
    return (0, d.ZP)(() => {
      r && f.Z.possiblyShowFeedbackModal(R.nw.SEARCH_RESULTS, () => t(true), () => t(false))
    }), {
      dismissFeedbackEntrypoint: i.useCallback(() => {
        t(false)
      }, []),
      isFeedbackVisible: e
    }
  }(), s = (0, y.Tm)(t), c = (0, o.cj)([b.Z, I.Z], () => {
    var e, t, n, r, i;
    return {
      isSearching: null != (e = b.Z.getIsFetching(s)) && e,
      isIndexing: null != (t = b.Z.getIsIndexing(s)) && t,
      isHistoricalIndexing: null != (n = b.Z.getIsHistoricalIndexing(s)) && n,
      documentsIndexed: b.Z.getDocumentsIndexed(s),
      offset: null != (r = I.Z.getSearchResultsOffset(s)) ? r : 0,
      totalResults: null != (i = b.Z.getTotalCount(s)) ? i : 0,
      hasError: null != b.Z.getError(s),
      showBlockedResults: I.Z.shouldShowBlockedResults(s),
      showNoResultsAlt: I.Z.shouldShowNoResultsAlt(s)
    }
  }), u = (0, o.e7)([b.Z], () => b.Z.getAnalyticsId(s)), {
    renderedMessages: p,
    ignoreCount: g,
    blockCount: m
  } = (0, S.Z)({
    searchContext: t
  }), j = (0, o.e7)([I.Z], () => {
    var e;
    return null != (e = I.Z.getSearchMode(s)) ? e : w.QIO.NEWEST
  }), E = i.useCallback(e => {
    if (c.isSearching) return;
    x.Z.updateSearchMode(t, e);
    let n = C.Z.getSearchInputText(t);
    null != n && C.Z.fetchMessages({
      searchContext: t,
      searchQueryString: n,
      offset: 0
    })
  }, [c.isSearching, t]), _ = i.useCallback(e => {
    if (c.isSearching) return;
    let n = C.Z.getSearchInputText(t);
    null != n && C.Z.fetchMessages({
      searchContext: t,
      searchQueryString: n,
      offset: e * w.vpv
    })
  }, [c.isSearching, t]), P = (0, o.e7)([I.Z], () => {
    let e = (0, y.Tm)(t);
    return I.Z.getSearchResultsQuery(e)
  }), Z = t.type === w.aib.FAVORITES, N = i.useCallback(e => x.Z.setShowBlockedResults(t, e), [t]), T = i.useDeferredValue(p), A = i.useDeferredValue(c), D = i.useDeferredValue(u);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(F, {
      searchContext: t,
      search: A,
      searchRequestAnalyticsId: D,
      messages: T,
      ignoreCount: g,
      blockCount: m,
      renderEmbeds: h.NA.useSetting(),
      isFeedbackVisible: l,
      dismissFeedbackEntrypoint: a,
      onPageChange: _,
      onSearchModeChange: E,
      searchMode: j,
      onBlockedResultsClick: N,
      searchResultsQuery: P,
      isFavoritesSearch: Z,
      selectedChannelId: n
    }), (0, r.jsx)(k, {
      searchContext: t,
      searchRequestAnalyticsId: D,
      messages: T,
      searchOffset: A.offset,
      searchLimit: w.vpv,
      searchHasError: A.hasError,
      searchTotalResults: A.totalResults,
      searchIsIndexing: A.isHistoricalIndexing,
      isSearching: A.isSearching
    })]
  })
}

function V(e) {
  let {
    guildId: t,
    channelId: n
  } = e, i = (0, E.H)({
    guildId: t,
    channelId: n
  });
  return null == i ? null : (0, r.jsx)(H, {
    searchContext: i,
    selectedChannelId: n
  })
}
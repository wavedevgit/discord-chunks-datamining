/** Chunk was on 5665 **/
/** chunk id: 14091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => K
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
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

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class H extends Chunk647438.Component {
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
    super(...e), t = this, F(this, "autoAnalytics", function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null;
      if (null == t.props.searchRequestAnalyticsId || t.props.isSearching) return;
      let n = 0,
        r = 0,
        i = 0,
        l = 0;
      null != t.props.searchResults && s()(t.props.searchResults).flatten().filter(e => e.isSearchHit).forEach(e => {
        null != e.content && "" !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && i++, null != e.attachments && e.attachments.length > 0 && r++
      });
      let a = (0, C.Tm)(t.props.searchContext);
      0 === n ? (0, k.Qb)({
        searchContext: t.props.searchContext,
        searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
        searchQueryString: I.Z.getSearchInputText(t.props.searchContext),
        searchQuery: M.Z.getSearchResultsQuery(a)
      }) : (0, k.hM)({
        searchContext: t.props.searchContext,
        searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
        prevSearchRequestAnalyticsId: e !== t.props.searchRequestAnalyticsId ? e : null,
        isError: t.props.searchHasError,
        limit: t.props.searchLimit,
        offset: t.props.searchOffset,
        page: Math.floor(t.props.searchOffset / t.props.searchLimit) + 1,
        totalResults: t.props.searchTotalResults,
        pageResults: null != t.props.searchResults ? t.props.searchResults.length : null,
        isIndexing: t.props.searchIsIndexing,
        pageNumMessages: n,
        pageNumLinks: l,
        pageNumEmbeds: i,
        pageNumAttachments: r,
        searchQueryString: I.Z.getSearchInputText(t.props.searchContext),
        searchQuery: M.Z.getSearchResultsQuery(a)
      })
    })
  }
}

function G(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: B.emptyResultsWrap,
    children: (0, r.jsx)("div", {
      className: B.emptyResultsContent,
      children: t
    })
  })
}

function V(e) {
  let {
    searchContext: t,
    isFeedbackVisible: n,
    dismissFeedbackEntrypoint: i
  } = e;
  return n ? (0, r.jsx)(T.Z, {
    searchContext: t,
    dismissFeedbackEntrypoint: i
  }) : null
}

function z(e) {
  let {
    searchResults: t,
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
    hasError: x
  } = l;
  if (x) return (0, r.jsxs)(G, {
    children: [(0, r.jsx)("div", {
      className: B.errorImage
    }), (0, r.jsx)("div", {
      className: a()(B.emptyResultsText, B.errorMessage),
      children: U.intl.string(U.t.uvDZBQ)
    })]
  });
  if (C) {
    let e = o.type === D.aib.GUILD ? U.intl.string(U.t.AXPbZm) : U.intl.string(U.t.Q0JJjo);
    return (0, r.jsxs)(G, {
      children: [(0, r.jsx)(P.Z, {}), (0, r.jsx)("div", {
        className: (B.emptyResultsText, B.stillIndexing),
        children: e
      })]
    })
  }
  if (_) return null;
  if (y > 0) return (0, r.jsx)(Z.Z, {
    search: l,
    searchResults: t,
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
    showNoResultsAlt: v
  } = l, O = v ? U.intl.string(U.t["VrK/2d"]) : U.intl.string(U.t.V6nAfH);
  return (0, r.jsxs)(G, {
    children: [(0, r.jsx)("div", {
      className: a()(B.noResultsImage, {
        [B.alt]: v
      })
    }), (0, r.jsx)("div", {
      className: a()(B.emptyResultsText, B.noResults, {
        [B.alt]: v
      }),
      children: O
    })]
  })
}
let W = [],
  q = Chunk647438.memo(function(e) {
    let {
      searchContext: t,
      search: n,
      renderEmbeds: l,
      searchRequestAnalyticsId: a,
      searchResults: o,
      blockCount: s,
      ignoreCount: p,
      isFeedbackVisible: f,
      dismissFeedbackEntrypoint: m,
      onSearchModeChange: y,
      onPageChange: _,
      searchMode: v,
      onBlockedResultsClick: O,
      searchResultsQuery: j,
      isFavoritesSearch: P
    } = e, Z = i.useRef(null), T = i.useCallback(() => {
      I.Z.cleanUpSearchState(t)
    }, [t]);
    i.useEffect(() => (b.S.subscribe(D.CkL.SEARCH_RESULTS_CLOSE, T), () => {
      b.S.unsubscribe(D.CkL.SEARCH_RESULTS_CLOSE, T)
    }), [T]);
    let N = i.useRef(n.showBlockedResults);
    i.useEffect(() => {
      if (N.current !== n.showBlockedResults) {
        N.current = n.showBlockedResults;
        let e = Z.current;
        null != e && e.scrollToBottom()
      }
    }, [n.showBlockedResults]);
    let A = i.useCallback((e, t, n) => {
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
        paginationTotalCount: w,
        paginationMaxIndex: L,
        isPaginationTotalCountLimited: H
      } = (0, R.M)({
        totalResults: n.totalResults,
        isSearching: n.isSearching
      }),
      G = i.useCallback((e, t) => {
        let n = L + 1;
        if (!H || e.targetPage !== n) return t;
        {
          let e = U.intl.formatToPlainString(U.t["E+2azc"], {
            maxPages: n
          });
          return (0, r.jsx)(d.ua7, {
            tooltipClassName: B.paginationLimitTooltip,
            tooltipContentClassName: B.paginationLimitTooltipText,
            text: (0, r.jsx)(d.Text, {
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
                    F(e, t, n[t])
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
      }, [H, L]),
      q = i.useCallback(e => {
        e === v || n.isSearching || ((0, k.zW)({
          searchContext: t,
          searchRequestAnalyticsId: a,
          mode: e
        }), y(e))
      }, [y, n.isSearching, t, v, a]),
      Y = i.useCallback((e, r) => {
        let i = g.Z.getChannel(e.channel_id),
          l = null != i ? i.getGuildId() : null,
          s = (0, C.Tm)(t),
          {
            offset: c,
            totalResults: u
          } = n;
        (0, k.sL)({
          searchContext: t,
          searchRequestAnalyticsId: a,
          guildId: l,
          channelId: e.channel_id,
          messageId: e.id,
          pageResults: null != o ? o.length : null,
          totalResults: u,
          limit: D.vpv,
          page: Math.floor(c / D.vpv) + 1,
          offset: c,
          index: r,
          searchQueryString: I.Z.getSearchInputText(t),
          searchQuery: M.Z.getSearchResultsQuery(s)
        })
      }, [n, t, a, o]),
      K = i.useCallback(e => {
        (0, k.t6)({
          searchContext: t,
          searchRequestAnalyticsId: a,
          newPageIndex: e
        }), _(e)
      }, [_, t, a]),
      X = Math.floor(n.offset / D.vpv),
      Q = H && X >= L,
      J = L + 1,
      $ = (0, x.C)({
        location: "SearchResults"
      }),
      ee = (0, c.Wu)([M.Z], () => {
        if (0 !== n.offset || !$) return W;
        let e = o.length;
        if (e < 10) return W;
        let r = 0;
        if (o.forEach(e => {
            e.forEach(e => {
              (e.author.bot || null != e.webhookId) && r++
            })
          }), r / e < .75) return W;
        let i = (0, C.Tm)(t),
          l = M.Z.getSearchResultsQueryString(i);
        return (0, C.kG)(null != l ? l : "").some(e => e.type === D.dCx.FILTER_AUTHOR_TYPE) ? W : [u.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT]
      }),
      [et, en] = (0, h.US)(ee),
      er = et === u.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
      ei = i.useCallback(() => {
        let e = "".concat(E.ZP[D.dCx.FILTER_AUTHOR_TYPE].key, " user") + " ";
        I.Z.appendTextToSearchInput(t, e)
      }, [t]);
    return (0, r.jsxs)("section", {
      className: B.searchResultsWrap,
      "aria-label": U.intl.string(U.t.zkoeq6),
      children: [(0, r.jsx)(S.Z, {
        searchContext: t,
        searchMode: v,
        onSearchModeChange: q,
        totalResults: n.totalResults,
        isSearching: n.isSearching,
        isIndexing: n.isHistoricalIndexing,
        documentsIndexed: n.documentsIndexed
      }), (0, r.jsxs)(d.Den, {
        ref: Z,
        className: B.scroller,
        children: [Q && !n.isSearching && (0, r.jsx)(d.Wn, {
          className: B.paginationLimitHeader,
          messageType: d.QYI.WARNING,
          children: U.intl.formatToPlainString(U.t["E+2azc"], {
            maxPages: J
          })
        }), er && (0, r.jsx)(d.Wn, {
          className: B.helpMessageContainer,
          messageType: d.QYI.INFO,
          children: U.intl.format(U.t["gQeg/f"], {
            handleClick: ei
          })
        }), (0, r.jsx)(z, {
          searchResults: o,
          blockCount: s,
          ignoreCount: p,
          search: n,
          searchContext: t,
          renderEmbeds: l,
          onClick: Y,
          onScrollTo: A,
          onPageChange: K,
          paginationTotalCount: H ? w : true,
          renderPageWrapper: G,
          onBlockedResultsClick: O,
          searchRequestAnalyticsId: a,
          searchResultsQuery: j,
          isFavoritesSearch: P
        })]
      }), (0, r.jsx)(V, {
        searchContext: t,
        isFeedbackVisible: f,
        dismissFeedbackEntrypoint: m
      })]
    })
  });

function Y(e) {
  let {
    searchContext: t
  } = e, n = (0, v.UX)({
    location: "SearchResults"
  }), {
    isFeedbackVisible: l,
    dismissFeedbackEntrypoint: a
  } = function(e) {
    let [t, n] = i.useState(false), r = (0, O.M)({
      location: "SearchResults"
    }), {
      enabled: l,
      force: a
    } = (0, j.f)({
      location: "SearchResults"
    }), o = e.type === D.aib.DMS || e.type === D.aib.CHANNEL, s = r && o || l;
    return i.useEffect(() => {
      s && a && n(true)
    }, [a, s, l]), (0, p.ZP)(() => {
      s && (a || f.Z.possiblyShowFeedbackModal(L.nw.SEARCH_RESULTS, () => n(true), () => n(false)))
    }), {
      dismissFeedbackEntrypoint: i.useCallback(() => {
        n(false)
      }, []),
      isFeedbackVisible: t
    }
  }(t), o = (0, C.Tm)(t), s = (0, c.cj)([_.Z, M.Z], () => {
    var e, t, n, r, i;
    return {
      isSearching: null != (e = _.Z.getIsFetching(o)) && e,
      isIndexing: null != (t = _.Z.getIsIndexing(o)) && t,
      isHistoricalIndexing: null != (n = _.Z.getIsHistoricalIndexing(o)) && n,
      documentsIndexed: _.Z.getDocumentsIndexed(o),
      offset: null != (r = M.Z.getSearchResultsOffset(o)) ? r : 0,
      totalResults: null != (i = _.Z.getTotalCount(o)) ? i : 0,
      hasError: null != _.Z.getError(o),
      showBlockedResults: M.Z.shouldShowBlockedResults(o),
      showNoResultsAlt: M.Z.shouldShowNoResultsAlt(o)
    }
  }), u = (0, c.e7)([_.Z], () => _.Z.getAnalyticsId(o)), {
    searchResults: d,
    ignoreCount: h,
    blockCount: g
  } = (0, A.Z)({
    searchContext: t
  }), {
    searchMode: b,
    setSearchMode: x
  } = (0, w.Z)({
    searchContext: t
  }), E = i.useCallback(e => {
    if (s.isSearching) return;
    x(e);
    let r = I.Z.getSearchInputText(t),
      i = (0, C.Tm)(t),
      l = M.Z.getSearchResultsQuery(i);
    null != r && null != l && (n && t.type === D.aib.DMS ? I.Z.fetchCrossDMMessages({
      searchContext: t,
      selectedPageIndex: 0,
      queryString: r,
      searchMode: e
    }) : I.Z.fetchMessages({
      searchContext: t,
      queryString: r,
      searchQuery: l,
      searchMode: e,
      offset: 0
    }))
  }, [n, s.isSearching, t, x]), S = i.useCallback(e => {
    if (s.isSearching) return;
    let r = I.Z.getSearchInputText(t),
      i = (0, C.Tm)(t),
      l = M.Z.getSearchResultsQuery(i);
    null != r && null != l && (n && t.type === D.aib.DMS ? I.Z.fetchCrossDMMessages({
      searchContext: t,
      queryString: r,
      selectedPageIndex: e,
      searchMode: b
    }) : I.Z.fetchMessages({
      searchContext: t,
      queryString: r,
      searchQuery: l,
      offset: e * D.vpv
    }))
  }, [n, s.isSearching, t, b]), P = (0, c.e7)([M.Z], () => {
    let e = (0, C.Tm)(t);
    return M.Z.getSearchResultsQuery(e)
  }), Z = t.type === D.aib.FAVORITES, T = i.useCallback(e => y.Z.setShowBlockedResults(t, e), [t]), N = i.useDeferredValue(d), R = i.useDeferredValue(s), k = i.useDeferredValue(u);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(q, {
      searchContext: t,
      search: R,
      searchRequestAnalyticsId: k,
      searchResults: N,
      ignoreCount: h,
      blockCount: g,
      renderEmbeds: m.NA.useSetting(),
      isFeedbackVisible: l,
      dismissFeedbackEntrypoint: a,
      onPageChange: S,
      onSearchModeChange: E,
      searchMode: b,
      onBlockedResultsClick: T,
      searchResultsQuery: P,
      isFavoritesSearch: Z
    }), (0, r.jsx)(H, {
      searchContext: t,
      searchRequestAnalyticsId: k,
      searchResults: N,
      searchOffset: R.offset,
      searchLimit: D.vpv,
      searchHasError: R.hasError,
      searchTotalResults: R.totalResults,
      searchIsIndexing: R.isHistoricalIndexing,
      isSearching: R.isSearching
    })]
  })
}

function K(e) {
  let {
    guildId: t,
    channelId: n
  } = e, i = (0, N.H)({
    guildId: t,
    channelId: n
  });
  return null == i ? null : (0, r.jsx)(Y, {
    searchContext: i
  })
}
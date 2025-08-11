/** Chunk was on 49152 **/
/** chunk id: 14091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => q
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.js"),
  Chunk169223 = require("./169223.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk585483 = require("./585483.js"),
  Chunk748610 = require("./748610.js"),
  Chunk171900 = require("./171900.js"),
  Chunk518944 = require("./518944.js"),
  Chunk607802 = require("./607802.js"),
  Chunk375123 = require("./375123.js"),
  Chunk945577 = require("./945577.js"),
  Chunk56522 = require("./56522.js"),
  Chunk759209 = require("./759209.js"),
  Chunk970850 = require("./970850.js"),
  Chunk532428 = require("./532428.js"),
  Chunk406326 = require("./406326.js"),
  Chunk994463 = require("./994463.js"),
  Chunk611004 = require("./611004.js"),
  Chunk619753 = require("./619753.js"),
  Chunk902733 = require("./902733.js"),
  Chunk165017 = require("./165017.js"),
  Chunk737 = require("./737.js"),
  Chunk909125 = require("./909125.js"),
  Chunk315322 = require("./315322.js"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.js"),
  Chunk682065 = require("./682065.js");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class H extends Chunk73800.Component {
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
      null != t.props.searchResults && o()(t.props.searchResults).flatten().filter(e => e.isSearchHit).forEach(e => {
        null != e.content && "" !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && i++, null != e.attachments && e.attachments.length > 0 && r++
      });
      let a = (0, _.Tm)(t.props.searchContext);
      0 === n ? (0, D.Qb)({
        searchContext: t.props.searchContext,
        searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
        searchQueryString: P.Z.getSearchInputText(t.props.searchContext),
        searchQuery: x.Z.getSearchResultsQuery(a)
      }) : (0, D.hM)({
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
        searchQueryString: P.Z.getSearchInputText(t.props.searchContext),
        searchQuery: x.Z.getSearchResultsQuery(a)
      })
    })
  }
}

function G(e) {
  let {
    children: t
  } = e;
  return <div className={U.emptyResultsWrap}><div className={U.emptyResultsContent}>{t}</div></div>
}

function B(e) {
  let {
    searchContext: t,
    isFeedbackVisible: n,
    dismissFeedbackEntrypoint: i
  } = e;
  return n ? <N.Z searchContext={t} dismissFeedbackEntrypoint={i} /> : null
}

function W(e) {
  let {
    searchResults: t,
    blockCount: n,
    ignoreCount: i,
    search: l,
    searchContext: s,
    renderEmbeds: o,
    onClick: c,
    onScrollTo: u,
    onPageChange: d,
    paginationTotalCount: h,
    renderPageWrapper: p,
    onBlockedResultsClick: f,
    searchRequestAnalyticsId: g,
    searchResultsQuery: m,
    isFavoritesSearch: b
  } = e, {
    totalResults: y,
    isSearching: x,
    isIndexing: _,
    hasError: j
  } = l;
  if (j) return <G>{<div className={U.errorImage} />}{<div className={a()(U.emptyResultsText, U.errorMessage)}>{M.intl.string(M.t.uvDZBQ)}</div>}</G>;
  if (_) {
    let e = s.type === k.aib.GUILD ? M.intl.string(M.t.AXPbZm) : M.intl.string(M.t.Q0JJjo);
    return <G>{<Z.Z />}{<div className={U.emptyResultsText, U.stillIndexing}>{e}</div>}</G>
  }
  if (x) return null;
  if (y > 0) return <T.Z search={l} searchResults={t} onClick={c} blockCount={n} ignoreCount={i} renderEmbeds={o} scrollTo={u} onPageChange={d} paginationTotalCount={h} renderPageWrapper={p} onBlockedResultsClick={f} searchRequestAnalyticsId={g} searchResultsQuery={m} isFavoritesSearch={b} />;
  let {
    showNoResultsAlt: O
  } = l, v = O ? M.intl.string(M.t["VrK/2d"]) : M.intl.string(M.t.V6nAfH);
  return <G>{<div className={a()(U.noResultsImage, {
        [U.alt]: O
      })} />}{<div className={a()(U.emptyResultsText, U.noResults, {
        [U.alt]: O
      })}>{v}</div>}</G>
}
let V = [],
  z = Chunk73800.memo(function(e) {
    let {
      searchContext: t,
      search: n,
      renderEmbeds: l,
      searchRequestAnalyticsId: a,
      searchResults: s,
      blockCount: o,
      ignoreCount: p,
      isFeedbackVisible: f,
      dismissFeedbackEntrypoint: b,
      onSearchModeChange: y,
      onPageChange: O,
      searchMode: v,
      onBlockedResultsClick: C,
      searchResultsQuery: E,
      isFavoritesSearch: Z
    } = e, T = i.useRef(null), N = i.useCallback(() => {
      P.Z.cleanUpSearchState(t)
    }, [t]);
    i.useEffect(() => (m.S.subscribe(k.CkL.SEARCH_RESULTS_CLOSE, N), () => {
      m.S.unsubscribe(k.CkL.SEARCH_RESULTS_CLOSE, N)
    }), [N]);
    let R = i.useRef(n.showBlockedResults);
    i.useEffect(() => {
      if (R.current !== n.showBlockedResults) {
        R.current = n.showBlockedResults;
        let e = T.current;
        null != e && e.scrollToBottom()
      }
    }, [n.showBlockedResults]);
    let w = i.useCallback((e, t, n) => {
        let r = T.current;
        if (null == r) return;
        let i = r.getScrollerState().scrollTop - e;
        r.scrollTo({
          to: i,
          animate: t,
          callback: n
        })
      }, []),
      {
        paginationTotalCount: L,
        paginationMaxIndex: H,
        isPaginationTotalCountLimited: G
      } = (0, A.M)({
        totalResults: n.totalResults,
        isSearching: n.isSearching
      }),
      z = i.useCallback((e, t) => {
        let n = H + 1;
        if (!G || e.targetPage !== n) return t;
        {
          let e = M.intl.formatToPlainString(M.t["E+2azc"], {
            maxPages: n
          });
          return <d.ua7 tooltipClassName={U.paginationLimitTooltip} tooltipContentClassName={U.paginationLimitTooltipText} text={(0, r.jsx)(d.Text, {
              variant: "text-sm/medium",
              color: "text-primary",
              children: e
            })} aria-label={e}>{e => {
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
            }}</d.ua7>
        }
      }, [G, H]),
      Y = i.useCallback(e => {
        e === v || n.isSearching || ((0, D.zW)({
          searchContext: t,
          searchRequestAnalyticsId: a,
          mode: e
        }), y(e))
      }, [y, n.isSearching, t, v, a]),
      q = i.useCallback((e, r) => {
        let i = g.Z.getChannel(e.channel_id),
          l = null != i ? i.getGuildId() : null,
          o = (0, _.Tm)(t),
          {
            offset: c,
            totalResults: u
          } = n;
        (0, D.sL)({
          searchContext: t,
          searchRequestAnalyticsId: a,
          guildId: l,
          channelId: e.channel_id,
          messageId: e.id,
          pageResults: null != s ? s.length : null,
          totalResults: u,
          limit: k.vpv,
          page: Math.floor(c / k.vpv) + 1,
          offset: c,
          index: r,
          searchQueryString: P.Z.getSearchInputText(t),
          searchQuery: x.Z.getSearchResultsQuery(o)
        })
      }, [n, t, a, s]),
      K = i.useCallback(e => {
        (0, D.t6)({
          searchContext: t,
          searchRequestAnalyticsId: a,
          newPageIndex: e
        }), O(e)
      }, [O, t, a]),
      Q = Math.floor(n.offset / k.vpv),
      X = G && Q >= H,
      J = H + 1,
      $ = (0, j.C)({
        location: "SearchResults"
      }),
      ee = (0, c.Wu)([x.Z], () => {
        if (0 !== n.offset || !$) return V;
        let e = s.length;
        if (e < 10) return V;
        let r = 0;
        if (s.forEach(e => {
            e.forEach(e => {
              (e.author.bot || null != e.webhookId) && r++
            })
          }), r / e < .75) return V;
        let i = (0, _.Tm)(t),
          l = x.Z.getSearchResultsQueryString(i);
        return (0, _.kG)(null != l ? l : "").some(e => e.type === k.dCx.FILTER_AUTHOR_TYPE) ? V : [u.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT]
      }),
      [et, en] = (0, h.US)(ee),
      er = et === u.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
      ei = i.useCallback(() => {
        let e = "".concat(S.ZP[k.dCx.FILTER_AUTHOR_TYPE].key, " user") + " ";
        P.Z.appendTextToSearchInput(t, e)
      }, [t]);
    return <section className={U.searchResultsWrap} aria-label={M.intl.string(M.t.zkoeq6)}>{<I.Z searchContext={t} searchMode={v} onSearchModeChange={Y} totalResults={n.totalResults} isSearching={n.isSearching} isIndexing={n.isHistoricalIndexing} documentsIndexed={n.documentsIndexed} />}{<d.Den ref={T} className={U.scroller}>{X && !n.isSearching && <d.Wn className={U.paginationLimitHeader} messageType={d.QYI.WARNING}>{M.intl.formatToPlainString(M.t["E+2azc"], {
            maxPages: J
          })}</d.Wn>}{er && <d.Wn className={U.helpMessageContainer} messageType={d.QYI.INFO}>{M.intl.format(M.t["gQeg/f"], {
            handleClick: ei
          })}</d.Wn>}{<W searchResults={s} blockCount={o} ignoreCount={p} search={n} searchContext={t} renderEmbeds={l} onClick={q} onScrollTo={w} onPageChange={K} paginationTotalCount={G ? L : true} renderPageWrapper={z} onBlockedResultsClick={C} searchRequestAnalyticsId={a} searchResultsQuery={E} isFavoritesSearch={Z} />}</d.Den>}{<B searchContext={t} isFeedbackVisible={f} dismissFeedbackEntrypoint={b} />}</section>
  });

function Y(e) {
  let {
    searchContext: t
  } = e, n = (0, O.UX)({
    location: "SearchResults"
  }), {
    isFeedbackVisible: l,
    dismissFeedbackEntrypoint: a
  } = function(e) {
    let t = i.useRef(e),
      [n, r] = i.useState(false),
      l = (0, v.M)({
        location: "SearchResults"
      }),
      {
        enabled: a,
        force: s
      } = (0, C.f)({
        location: "SearchResults"
      }),
      o = l || a;
    return i.useEffect(() => {
      o && s && r(true)
    }, [s, o, a]), i.useEffect(() => {
      o && (s || e !== t.current && (t.current = e, p.Z.possiblyShowFeedbackModal(L.nw.SEARCH_RESULTS, () => r(true), () => r(false))))
    }, [a, s, e, o]), {
      dismissFeedbackEntrypoint: i.useCallback(() => {
        r(false)
      }, []),
      isFeedbackVisible: n
    }
  }(t), s = (0, _.Tm)(t), o = (0, c.cj)([y.Z, x.Z], () => {
    var e, t, n, r, i;
    return {
      isSearching: null != (e = y.Z.getIsFetching(s)) && e,
      isIndexing: null != (t = y.Z.getIsIndexing(s)) && t,
      isHistoricalIndexing: null != (n = y.Z.getIsHistoricalIndexing(s)) && n,
      documentsIndexed: y.Z.getDocumentsIndexed(s),
      offset: null != (r = x.Z.getSearchResultsOffset(s)) ? r : 0,
      totalResults: null != (i = y.Z.getTotalCount(s)) ? i : 0,
      hasError: null != y.Z.getError(s),
      showBlockedResults: x.Z.shouldShowBlockedResults(s),
      showNoResultsAlt: x.Z.shouldShowNoResultsAlt(s)
    }
  }), u = (0, c.e7)([y.Z], () => y.Z.getAnalyticsId(s)), {
    searchResults: d,
    ignoreCount: h,
    blockCount: g
  } = (0, w.Z)({
    searchContext: t
  }), {
    searchMode: m,
    setSearchMode: j
  } = (0, E.Z)({
    searchContext: t
  }), S = i.useCallback(e => {
    if (o.isSearching) return;
    j(e);
    let r = P.Z.getSearchInputText(t),
      i = (0, _.Tm)(t),
      l = x.Z.getSearchResultsQuery(i);
    null != r && null != l && (n && t.type === k.aib.DMS ? P.Z.fetchCrossDMMessages({
      searchContext: t,
      selectedPageIndex: 0,
      queryString: r,
      searchMode: e
    }) : P.Z.fetchMessages({
      searchContext: t,
      queryString: r,
      searchQuery: l,
      searchMode: e,
      offset: 0
    }))
  }, [n, o.isSearching, t, j]), I = i.useCallback(e => {
    if (o.isSearching) return;
    let r = P.Z.getSearchInputText(t),
      i = (0, _.Tm)(t),
      l = x.Z.getSearchResultsQuery(i);
    null != r && null != l && (n && t.type === k.aib.DMS ? P.Z.fetchCrossDMMessages({
      searchContext: t,
      queryString: r,
      selectedPageIndex: e,
      searchMode: m
    }) : P.Z.fetchMessages({
      searchContext: t,
      queryString: r,
      searchQuery: l,
      offset: e * k.vpv
    }))
  }, [n, o.isSearching, t, m]), Z = (0, c.e7)([x.Z], () => {
    let e = (0, _.Tm)(t);
    return x.Z.getSearchResultsQuery(e)
  }), T = t.type === k.aib.FAVORITES, N = i.useCallback(e => b.Z.setShowBlockedResults(t, e), [t]), R = i.useDeferredValue(d), A = i.useDeferredValue(o), D = i.useDeferredValue(u);
  return <r.Fragment>{<z searchContext={t} search={A} searchRequestAnalyticsId={D} searchResults={R} ignoreCount={h} blockCount={g} renderEmbeds={f.NA.useSetting()} isFeedbackVisible={l} dismissFeedbackEntrypoint={a} onPageChange={I} onSearchModeChange={S} searchMode={m} onBlockedResultsClick={N} searchResultsQuery={Z} isFavoritesSearch={T} />}{<H searchContext={t} searchRequestAnalyticsId={D} searchResults={R} searchOffset={A.offset} searchLimit={k.vpv} searchHasError={A.hasError} searchTotalResults={A.totalResults} searchIsIndexing={A.isHistoricalIndexing} isSearching={A.isSearching} />}</r.Fragment>
}

function q(e) {
  let {
    guildId: t,
    channelId: n
  } = e, i = (0, R.H)({
    guildId: t,
    channelId: n
  });
  return null == i ? null : <Y searchContext={i} />
}
/** Chunk was on 12097 **/
/** chunk id: 313692, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk963374 = require("./963374.js"),
  Chunk735020 = require("./735020.js"),
  Chunk786761 = require("./786761.js"),
  Chunk937889 = require("./937889.js"),
  Chunk619753 = require("./619753.jsx"),
  Chunk433355 = require("./433355.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk189432 = require("./189432.js"),
  Chunk356778 = require("./356778.js"),
  Chunk370595 = require("./370595.jsx"),
  Chunk50493 = require("./50493.js"),
  Chunk981631 = require("./981631.js"),
  Chunk12740 = require("./12740.js"),
  Chunk450355 = require("./450355.js");

function C(e) {
  var t, n;
  let {
    userId: s,
    guildId: C,
    location: v,
    className: D,
    onNavigate: b
  } = e, L = l.useRef(null), x = (0, o.e7)([m.ZP], () => m.ZP.getGuildSidebarState(C), [C]), U = l.useRef(0), [M, P] = l.useState(null != (t = null == x ? true : x.details.additionalSearchQuery) ? t : {}), j = (0, N.z0)(s, C, {
    addtionalQuery: M,
    shouldDispatch: true
  }), y = (0, o.e7)([g.default], () => g.default.getUser(s), [s]), w = (0, o.e7)([I.ZP], () => I.ZP.getMember(C, s), [C, s]);
  (0, c.Ng)(() => {
    let e = null == x ? true : x.details.scrollOffset;
    if (null != e) {
      var t;
      null == (t = L.current) || t.scrollTo({
        to: e,
        animate: false
      })
    }
  });
  let G = l.useCallback(e => {
      null != x && (U.current = e.target.scrollTop, (0, f.r)(C, s, x.baseChannelId, {
        modViewPanel: O.k.MESSAGE_HISTORY,
        additionalSearchQuery: M,
        scrollOffset: U.current
      }))
    }, [C, s, x, M]),
    k = (0, a.throttle)(G, 300),
    F = l.useCallback(e => {
      var t, n;
      if (null == x) return;
      let r = (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, M), n = n = {
        offset: 25 * e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t);
      P(r), (0, f.r)(C, s, x.baseChannelId, {
        modViewPanel: O.k.MESSAGE_HISTORY,
        additionalSearchQuery: r,
        scrollOffset: U.current
      })
    }, [C, s, x, M]),
    z = null != (n = null == M ? true : M.offset) ? n : 0,
    Z = (0, o.e7)([d.Z], () => {
      if (null == j.result) return [];
      let e = j.result.messages,
        t = (0, E.nC)("");
      return e.map(e => e.map(e => {
        let n = d.Z.getMessage(e.id, e.channel_id),
          r = (0, _.e5)(e);
        return null != n && (r = r.merge({
          attachments: n.attachments,
          embeds: n.embeds
        })), r.isSearchHit ? r.set("customRenderedContent", (0, A.ZP)(r, {
          postProcessor: t,
          allowHeading: true,
          allowList: true
        })) : r
      }))
    }, [j.result]),
    B = l.useMemo(() => {
      var e, t, n, r;
      return null == j.result ? {
        documentsIndexed: 0,
        isSearching: true,
        isIndexing: false,
        isHistoricalIndexing: false,
        offset: z,
        totalResults: 0,
        hasError: false,
        showBlockedResults: false,
        showNoResultsAlt: false
      } : {
        documentsIndexed: null != (e = j.result.documents_indexed) ? e : 0,
        isSearching: false,
        isIndexing: null != (t = j.result.doing_deep_historical_index) && t,
        isHistoricalIndexing: null != (n = j.result.doing_deep_historical_index) && n,
        offset: z,
        totalResults: null != (r = j.result.total_results) ? r : 0,
        hasError: false,
        showBlockedResults: false,
        showNoResultsAlt: false
      }
    }, [j.result, z]);
  return null == y || null == w || null == B ? null : (0, r.jsxs)("div", {
    className: i()(R.container, D),
    children: [(0, r.jsx)(h.Z, {
      guildId: C,
      userId: s,
      onNavigate: b
    }), (0, r.jsx)(u.Den, {
      className: S.innerContainer,
      ref: L,
      onScroll: k,
      children: (0, r.jsx)(T.Z, {
        searchResults: Z,
        search: B,
        renderEmbeds: true,
        blockCount: 0,
        ignoreCount: 0,
        scrollTo: p.dG4,
        onPageChange: F,
        onBlockedResultsClick: p.dG4
      })
    })]
  })
}
/** Chunk was on 78079 **/
/** chunk id: 313692, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => b
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
  Chunk87819 = require("./87819.js"),
  Chunk125134 = require("./125134.js");

function b(A) {
  var e, t;
  let {
    userId: l,
    guildId: b,
    location: O,
    className: Q,
    onNavigate: P
  } = A, j = r.useRef(null), V = (0, s.e7)([d.ZP], () => d.ZP.getGuildSidebarState(b), [b]), m = r.useRef(0), [T, y] = r.useState(null != (e = null == V ? true : V.details.additionalSearchQuery) ? e : {}), L = (0, w.z0)(l, b, {
    addtionalQuery: T,
    shouldDispatch: true
  }), x = (0, s.e7)([C.default], () => C.default.getUser(l), [l]), N = (0, s.e7)([E.ZP], () => E.ZP.getMember(b, l), [b, l]);
  (0, g.Ng)(() => {
    let A = null == V ? true : V.details.scrollOffset;
    if (null != A) {
      var e;
      null == (e = j.current) || e.scrollTo({
        to: A,
        animate: false
      })
    }
  });
  let Z = r.useCallback(A => {
      null != V && (m.current = A.target.scrollTop, (0, B.r)(b, l, V.baseChannelId, {
        modViewPanel: M.k.MESSAGE_HISTORY,
        additionalSearchQuery: T,
        scrollOffset: m.current
      }))
    }, [b, l, V, T]),
    S = (0, a.throttle)(Z, 300),
    R = r.useCallback(A => {
      var e, t;
      if (null == V) return;
      let n = (e = function(A) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
            return Object.getOwnPropertyDescriptor(t, A).enumerable
          }))), n.forEach(function(e) {
            var n;
            n = t[e], e in A ? Object.defineProperty(A, e, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : A[e] = n
          })
        }
        return A
      }({}, T), t = t = {
        offset: 25 * A
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(A, e) {
        var t = Object.keys(A);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(A);
          t.push.apply(t, n)
        }
        return t
      })(Object(t)).forEach(function(A) {
        Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A))
      }), e);
      y(n), (0, B.r)(b, l, V.baseChannelId, {
        modViewPanel: M.k.MESSAGE_HISTORY,
        additionalSearchQuery: n,
        scrollOffset: m.current
      })
    }, [b, l, V, T]),
    G = null != (t = null == T ? true : T.offset) ? t : 0,
    U = (0, s.e7)([f.Z], () => {
      if (null == L.result) return [];
      let A = L.result.messages,
        e = (0, c.nC)("");
      return A.map(A => A.map(A => {
        let t = f.Z.getMessage(A.id, A.channel_id),
          n = (0, v.e5)(A);
        return null != t && (n = n.merge({
          attachments: t.attachments,
          embeds: t.embeds
        })), n.isSearchHit ? n.set("customRenderedContent", (0, u.ZP)(n, {
          postProcessor: e,
          allowHeading: true,
          allowList: true
        })) : n
      }))
    }, [L.result]),
    F = r.useMemo(() => {
      var A, e, t, n;
      return null == L.result ? {
        documentsIndexed: 0,
        isSearching: true,
        isIndexing: false,
        isHistoricalIndexing: false,
        offset: G,
        totalResults: 0,
        hasError: false,
        showBlockedResults: false,
        showNoResultsAlt: false
      } : {
        documentsIndexed: null != (A = L.result.documents_indexed) ? A : 0,
        isSearching: false,
        isIndexing: null != (e = L.result.doing_deep_historical_index) && e,
        isHistoricalIndexing: null != (t = L.result.doing_deep_historical_index) && t,
        offset: G,
        totalResults: null != (n = L.result.total_results) ? n : 0,
        hasError: false,
        showBlockedResults: false,
        showNoResultsAlt: false
      }
    }, [L.result, G]);
  return null == x || null == N || null == F ? null : (0, n.jsxs)("div", {
    className: i()(I.container, Q),
    children: [(0, n.jsx)(D.Z, {
      guildId: b,
      userId: l,
      onNavigate: P
    }), (0, n.jsx)(o.Den, {
      className: H.innerContainer,
      ref: j,
      onScroll: S,
      children: (0, n.jsx)(h.Z, {
        searchResults: U,
        search: F,
        renderEmbeds: true,
        blockCount: 0,
        ignoreCount: 0,
        scrollTo: p.dG4,
        onPageChange: R,
        onBlockedResultsClick: p.dG4
      })
    })]
  })
}
/** Chunk was on 74486 **/
/** chunk id: 313692, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function C(e) {
  var t, n;
  let {
    userId: i,
    guildId: C,
    location: D,
    className: L,
    onNavigate: b
  } = e, U = l.useRef(null), v = (0, o.e7)([T.ZP], () => T.ZP.getGuildSidebarState(C), [C]), M = l.useRef(0), [x, P] = l.useState(null != (t = null == v ? true : v.details.additionalSearchQuery) ? t : {}), j = (0, h.z0)(i, C, {
    addtionalQuery: x,
    shouldDispatch: true
  }), y = (0, o.e7)([g.default], () => g.default.getUser(i), [i]), w = (0, o.e7)([I.ZP], () => I.ZP.getMember(C, i), [C, i]);
  (0, c.Ng)(() => {
    let e = null == v ? true : v.details.scrollOffset;
    if (null != e) {
      var t;
      null == (t = U.current) || t.scrollTo({
        to: e,
        animate: false
      })
    }
  });
  let G = l.useCallback(e => {
      null != v && (M.current = e.target.scrollTop, (0, f.r)(C, i, v.baseChannelId, {
        modViewPanel: O.k.MESSAGE_HISTORY,
        additionalSearchQuery: x,
        scrollOffset: M.current
      }))
    }, [C, i, v, x]),
    k = (0, s.throttle)(G, 300),
    F = l.useCallback(e => {
      var t, n;
      if (null == v) return;
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
      }({}, x), n = n = {
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
      P(r), (0, f.r)(C, i, v.baseChannelId, {
        modViewPanel: O.k.MESSAGE_HISTORY,
        additionalSearchQuery: r,
        scrollOffset: M.current
      })
    }, [C, i, v, x]),
    z = null != (n = null == x ? true : x.offset) ? n : 0,
    Z = (0, o.e7)([E.Z], () => {
      if (null == j.result) return [];
      let e = j.result.messages,
        t = (0, d.nC)("");
      return e.map(e => e.map(e => {
        let n = E.Z.getMessage(e.id, e.channel_id),
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
    className: a()(R.container, L),
    children: [(0, r.jsx)(N.Z, {
      guildId: C,
      userId: i,
      onNavigate: b
    }), (0, r.jsx)(u.Den, {
      className: S.innerContainer,
      ref: U,
      onScroll: k,
      children: (0, r.jsx)(m.Z, {
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
/** Chunk was on 94503 **/
/** chunk id: 420775, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk570209 = require("./570209.js"),
  Chunk457699 = require("./457699.js"),
  Chunk141468 = require("./141468.js"),
  Chunk465364 = require("./465364.js"),
  Chunk229374 = require("./229374.jsx"),
  Chunk383233 = require("./383233.js"),
  Chunk761640 = require("./761640.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk706752 = require("./706752.js"),
  Chunk744432 = require("./744432.js"),
  Chunk62697 = require("./62697.jsx"),
  Chunk486974 = require("./486974.js"),
  Chunk652215 = require("./652215.js"),
  Chunk438536 = require("./438536.js"),
  Chunk618695 = require("./618695.js");

function R(e) {
  var t, n;
  let {
    userId: a,
    guildId: R,
    location: D,
    className: L,
    onNavigate: x
  } = e, C = r.useRef(null), M = (0, o.bG)([f.Ay], () => f.Ay.getGuildSidebarState(R), [R]), v = r.useRef(0), [j, U] = r.useState(null != (t = null == M ? true : M.details.additionalSearchQuery) ? t : {}), y = (0, N.KR)(a, R, {
    addtionalQuery: j,
    shouldDispatch: true
  }), P = (0, o.bG)([I.default], () => I.default.getUser(a), [a]), k = (0, o.bG)([h.Ay], () => h.Ay.getMember(R, a), [R, a]);
  (0, u.u5)(() => {
    let e = null == M ? true : M.details.scrollOffset;
    if (null != e) {
      var t;
      null == (t = C.current) || t.scrollTo({
        to: e,
        animate: false
      })
    }
  });
  let F = r.useCallback(e => {
      null == M || (v.current = e.target.scrollTop, (0, O.z)(R, a, M.baseChannelId, {
        modViewPanel: S.g.MESSAGE_HISTORY,
        additionalSearchQuery: j,
        scrollOffset: v.current
      }))
    }, [R, a, M, j]),
    w = (0, s.throttle)(F, 300),
    X = r.useCallback(e => {
      var t, n;
      if (null == M) return;
      let l = (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, j), n = n = {
        offset: 25 * e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t);
      U(l), (0, O.z)(R, a, M.baseChannelId, {
        modViewPanel: S.g.MESSAGE_HISTORY,
        additionalSearchQuery: l,
        scrollOffset: v.current
      })
    }, [R, a, M, j]),
    B = null != (n = null == j ? true : j.offset) ? n : 0,
    V = (0, o.bG)([d.A], () => {
      if (null == y.result) return [];
      let e = (0, E.wG)("");
      return y.result.messages.map(e => {
        let [t] = e;
        return (0, _.rh)(t)
      }).map(t => {
        let n = d.A.getMessage(t.id, t.channel_id),
          l = new T.Ay(t);
        return null != n && (l = l.merge({
          attachments: n.attachments,
          embeds: n.embeds
        })), l = l.set("customRenderedContent", (0, g.Ay)(l, {
          postProcessor: e,
          allowHeading: true,
          allowList: true
        }))
      })
    }, [y.result]),
    H = r.useMemo(() => {
      var e, t, n, l;
      return null == y.result ? {
        documentsIndexed: 0,
        isSearching: true,
        isIndexing: false,
        isHistoricalIndexing: false,
        offset: B,
        totalResults: 0,
        hasError: false,
        showBlockedResults: false,
        showNoResultsAlt: false
      } : {
        documentsIndexed: null != (e = y.result.documents_indexed) ? e : 0,
        isSearching: false,
        isIndexing: null != (t = y.result.doing_deep_historical_index) && t,
        isHistoricalIndexing: null != (n = y.result.doing_deep_historical_index) && n,
        offset: B,
        totalResults: null != (l = y.result.total_results) ? l : 0,
        hasError: false,
        showBlockedResults: false,
        showNoResultsAlt: false
      }
    }, [y.result, B]);
  return null == P || null == k || null == H ? null : (0, l.jsxs)("div", {
    className: i()(b.kL, L),
    children: [(0, l.jsx)(m.A, {
      guildId: R,
      userId: a,
      onNavigate: x
    }), (0, l.jsx)(c.T7Y, {
      className: G.W,
      ref: C,
      onScroll: w,
      children: (0, l.jsx)(A.A, {
        messages: V,
        search: H,
        renderEmbeds: true,
        blockCount: 0,
        ignoreCount: 0,
        scrollTo: p.tEg,
        onPageChange: X,
        onBlockedResultsClick: p.tEg
      })
    })]
  })
}
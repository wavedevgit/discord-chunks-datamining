/** Chunk was on 66201 **/
/** chunk id: 313692, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk963374 = require("./963374.js"),
  Chunk735020 = require("./735020.js"),
  Chunk786761 = require("./786761.js"),
  Chunk937889 = require("./937889.js"),
  Chunk619753 = require("./619753.jsx"),
  Chunk23750 = require("./23750.js"),
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

function D(e) {
  var t, n;
  let {
    userId: i,
    guildId: D,
    location: U,
    className: L,
    onNavigate: M
  } = e, x = l.useRef(null), b = (0, o.e7)([m.ZP], () => m.ZP.getGuildSidebarState(D), [D]), v = l.useRef(0), [P, j] = l.useState(null != (t = null == b ? true : b.details.additionalSearchQuery) ? t : {}), y = (0, O.z0)(i, D, {
    addtionalQuery: P,
    shouldDispatch: true
  }), G = (0, o.e7)([N.default], () => N.default.getUser(i), [i]), k = (0, o.e7)([g.ZP], () => g.ZP.getMember(D, i), [D, i]);
  (0, c.Ng)(() => {
    let e = null == b ? true : b.details.scrollOffset;
    if (null != e) {
      var t;
      null == (t = x.current) || t.scrollTo({
        to: e,
        animate: false
      })
    }
  });
  let F = l.useCallback(e => {
      null != b && (v.current = e.target.scrollTop, (0, h.r)(D, i, b.baseChannelId, {
        modViewPanel: R.k.MESSAGE_HISTORY,
        additionalSearchQuery: P,
        scrollOffset: v.current
      }))
    }, [D, i, b, P]),
    w = (0, a.throttle)(F, 300),
    z = l.useCallback(e => {
      var t, n;
      if (null == b) return;
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
      }({}, P), n = n = {
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
      j(r), (0, h.r)(D, i, b.baseChannelId, {
        modViewPanel: R.k.MESSAGE_HISTORY,
        additionalSearchQuery: r,
        scrollOffset: v.current
      })
    }, [D, i, b, P]),
    V = null != (n = null == P ? true : P.offset) ? n : 0,
    Z = (0, o.e7)([d.Z], () => {
      if (null == y.result) return [];
      let e = (0, E.nC)("");
      return y.result.messages.map(e => {
        let [t] = e;
        return (0, _.e5)(t)
      }).map(t => {
        let n = d.Z.getMessage(t.id, t.channel_id),
          r = new I.ZP(t);
        return null != n && (r = r.merge({
          attachments: n.attachments,
          embeds: n.embeds
        })), r = r.set("customRenderedContent", (0, A.ZP)(r, {
          postProcessor: e,
          allowHeading: true,
          allowList: true
        }))
      })
    }, [y.result]),
    B = l.useMemo(() => {
      var e, t, n, r;
      return null == y.result ? {
        documentsIndexed: 0,
        isSearching: true,
        isIndexing: false,
        isHistoricalIndexing: false,
        offset: V,
        totalResults: 0,
        hasError: false,
        showBlockedResults: false,
        showNoResultsAlt: false
      } : {
        documentsIndexed: null != (e = y.result.documents_indexed) ? e : 0,
        isSearching: false,
        isIndexing: null != (t = y.result.doing_deep_historical_index) && t,
        isHistoricalIndexing: null != (n = y.result.doing_deep_historical_index) && n,
        offset: V,
        totalResults: null != (r = y.result.total_results) ? r : 0,
        hasError: false,
        showBlockedResults: false,
        showNoResultsAlt: false
      }
    }, [y.result, V]);
  return null == G || null == k || null == B ? null : (0, r.jsxs)("div", {
    className: s()(p.container, L),
    children: [(0, r.jsx)(f.Z, {
      guildId: D,
      userId: i,
      onNavigate: M
    }), (0, r.jsx)(u.Den, {
      className: C.innerContainer,
      ref: x,
      onScroll: w,
      children: (0, r.jsx)(T.Z, {
        messages: Z,
        search: B,
        renderEmbeds: true,
        blockCount: 0,
        ignoreCount: 0,
        scrollTo: S.dG4,
        onPageChange: z,
        onBlockedResultsClick: S.dG4
      })
    })]
  })
}
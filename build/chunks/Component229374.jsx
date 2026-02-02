/** Chunk was on 2155 **/
/** chunk id: 229374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k
}), require("./747238.js"), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk416681 = require("./416681.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk570209 = require("./570209.js"),
  Chunk775602 = require("./775602.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk863439 = require("./863439.js"),
  Chunk465364 = require("./465364.js"),
  Chunk81437 = require("./81437.js"),
  Chunk976860 = require("./976860.js"),
  Chunk378570 = require("./378570.js"),
  Chunk302031 = require("./302031.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk822382 = require("./822382.js"),
  Chunk876689 = require("./876689.jsx"),
  Chunk712838 = require("./712838.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk274808 = require("./274808.js");

function j(e) {
  let {
    parentChannel: t,
    onSelectChannel: n
  } = e;
  if ((null == t ? true : t.name) == null) return null;
  let r = null != t ? (0, g.gU)(t) : null;
  if (null == r) return null;
  let a = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(r, {
      className: U.gQ,
      size: "xxs",
      color: "currentColor"
    }), (0, l.jsx)(u.Text, {
      className: U.yK,
      variant: "text-xs/medium",
      color: "text-default",
      children: t.name
    })]
  });
  return (0, f.Z_)(t.type) ? (0, l.jsx)(u.DUT, {
    className: i()(U.rg, U.fj),
    onClick: e => {
      e.stopPropagation(), n(t.id)
    },
    children: a
  }) : (0, l.jsx)("div", {
    className: U.rg,
    children: a
  })
}

function y(e) {
  var t, n, a;
  let {
    channel: i,
    messages: s,
    highlighter: c,
    startIndex: E,
    resultRefs: _,
    totalResults: I,
    scrollTo: O,
    renderEmbeds: f,
    offset: L,
    jumpToMessage: x,
    listNavigator: v,
    favoriteSearch: y
  } = e, k = m.gs.useSetting(), P = r.useCallback(e => {
    if (e === D.A.getChannelId()) return;
    let t = S.A.getChannel(e);
    null == t || (G.A.can(M.xBc.VIEW_CHANNEL, t) || t.isPrivate()) && (0, h.iN)(t.id)
  }, []), F = null != i ? (0, d.m1)(i, C.default, R.A, false) : "???", w = y && null != i.guild_id ? null == (a = p.A.getGuild(i.guild_id)) ? true : a.name : null, X = (null == i ? true : i.parent_id) != null ? S.A.getChannel(i.parent_id) : null, B = null != (t = null == X ? true : X.name) ? t : null, V = null != (n = (0, g.gU)(i)) ? n : u.N$i, H = G.A.can(M.xBc.MANAGE_MESSAGES, i), {
    content: W
  } = (0, T.Ay)({
    content: F,
    embeds: []
  }, {
    postProcessor: c
  }), Y = r.useRef(null), [K, z] = r.useState(false);
  r.useEffect(() => {
    let e = Y.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && z(e.offsetWidth < e.scrollWidth)
  }, []);
  let J = [F, B, w].filter(e => null != e).join(", ");
  return (0, l.jsx)(N.Bs.Provider, {
    value: (0, A.A)(k, H),
    children: (0, l.jsxs)("ul", {
      role: "group",
      className: U.JT,
      "aria-label": J,
      children: [(0, l.jsx)(u.DUT, {
        onClick: () => P(i.id),
        children: (0, l.jsxs)("div", {
          className: U.aT,
          children: [(0, l.jsx)(V, {
            className: U.er,
            size: "xs",
            color: "currentColor"
          }), (0, l.jsx)(o.m_, {
            asContainer: true,
            text: F,
            shouldShow: K,
            children: (0, l.jsxs)("span", {
              ref: Y,
              className: U.Kw,
              children: [y && null !== w && "".concat(w, " : "), W]
            })
          }), (0, l.jsx)(j, {
            parentChannel: X,
            onSelectChannel: P
          })]
        })
      }), s.map((e, t) => {
        let n = E + t;
        return (0, l.jsx)(b.A, {
          ref: e => {
            _.current[n] = e
          },
          totalResults: I,
          scrollTo: O,
          renderEmbeds: f,
          searchOffset: L,
          pageResultsLength: s.length,
          message: e,
          index: n,
          onJump: x,
          listItemProps: v.getItemProps({
            index: n
          })
        }, "search-result-".concat(n))
      })]
    })
  })
}
let k = Chunk64700.memo(function(e) {
  var t, n, a;
  let {
    search: i,
    renderEmbeds: o,
    scrollTo: d,
    messages: g,
    blockCount: A,
    ignoreCount: T,
    onPageChange: h,
    onClick: N,
    paginationTotalCount: m,
    renderPageWrapper: f,
    onBlockedResultsClick: p,
    searchRequestAnalyticsId: G,
    searchResultsQuery: D,
    isFavoritesSearch: C
  } = e, {
    offset: b,
    totalResults: j,
    isSearching: k,
    showBlockedResults: P
  } = i, F = r.useCallback((e, t) => {
    null == N || N(e, t);
    let n = () => {
      let t = S.A.getChannel(e.channel_id),
        n = null != t ? t.getGuildId() : null;
      c.A.trackJump(e.channel_id, e.id, "Search Results", {
        search_id: G
      }), (0, O.pX)(M.BVt.CHANNEL(n, e.channel_id, e.id))
    };
    (0, I.A)(e, n) && n()
  }, [N, G]), w = r.useMemo(() => {
    let e, t = 0;
    return g.reduce((n, l) => {
      if (!P && (R.A.isBlockedForMessage(l) || R.A.isIgnoredForMessage(l))) return n;
      let r = S.A.getChannel(l.channel_id);
      return null == r || ((null == e || e !== r.id) && n.push({
        channel: r,
        messages: [],
        startIndex: t
      }), t += 1, n[n.length - 1].messages.push(l), e = null == r ? true : r.id), n
    }, [])
  }, [g, P]), X = r.useRef([]), B = w.reduce((e, t) => e + 1 + t.messages.length, 0), V = r.useCallback((e, t) => {
    if (!_.A.keyboardModeEnabled) return;
    let n = X.current,
      l = null != t ? n[t] : true;
    if (null == l || null == l.hitRef.current) return;
    let r = l.hitRef.current.getClientRects()[0];
    d(r.top - .5 * r.height, false, () => {
      var t;
      null == (t = document.getElementById(e)) || t.focus()
    })
  }, [d]), H = r.useCallback(e => {
    let t = X.current[e];
    null == t || t.jumpTo()
  }, []), W = (0, s.Ay)({
    navId: "search-results",
    itemCount: B,
    focusedIndex: 0,
    setFocus: V,
    onSelect: H
  }), Y = (0, E.wG)(null != (t = (0, L.dX)(D)) ? t : ""), K = w.map(e => {
    let {
      channel: t,
      messages: n,
      startIndex: r
    } = e;
    return (0, l.jsx)(y, {
      channel: t,
      messages: n,
      highlighter: Y,
      startIndex: r,
      resultRefs: X,
      totalResults: j,
      scrollTo: d,
      renderEmbeds: o,
      offset: b,
      jumpToMessage: F,
      listNavigator: W,
      favoriteSearch: null != C && C
    }, "".concat(t.id, "-").concat(r))
  });
  K.push();
  let z = r.useRef(null);
  r.useLayoutEffect(() => {
    var e;
    null == (e = z.current) || e.focus()
  }, [g]);
  let J = (0, u.R7z)();
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", (n = function(e) {
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
    }({
      ref: z
    }, W.getContainerProps(), J), a = a = {
      "aria-busy": k,
      children: K
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(a)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
    }), n)), A > 0 || T > 0 ? (0, l.jsxs)(u.DUT, {
      tag: "div",
      className: U.P,
      onClick: () => {
        null == p || p(!P)
      },
      children: [(0, l.jsx)("div", {
        className: U.y
      }), (0, l.jsx)("div", {
        className: U.__invalid_resultsBlockedText,
        children: P ? A > 0 && T > 0 ? v.intl.formatToPlainString(v.t.OvJs9w, {
          count: A + T
        }) : A > 0 ? v.intl.formatToPlainString(v.t["n/1QFS"], {
          count: A
        }) : v.intl.formatToPlainString(v.t.ypezTA, {
          count: T
        }) : A > 0 && T > 0 ? v.intl.formatToPlainString(v.t.EJHRcV, {
          count: A + T
        }) : A > 0 ? v.intl.formatToPlainString(v.t.HTE8JP, {
          count: A
        }) : v.intl.formatToPlainString(v.t.e7f8r9, {
          count: T
        })
      })]
    }) : null, !k && !C && (0, l.jsx)(x.A, {
      renderPageWrapper: f,
      onPageChange: h,
      offset: b,
      totalCount: null != m ? m : j,
      pageSize: M.T_y
    })]
  })
})
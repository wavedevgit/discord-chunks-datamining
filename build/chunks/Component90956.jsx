/** Chunk was on 69937 **/
/** chunk id: 90956, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G
}), require("./35282.js"), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk837969 = require("./837969.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk963374 = require("./963374.js"),
  Chunk607070 = require("./607070.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk255269 = require("./255269.js"),
  Chunk937889 = require("./937889.js"),
  Chunk804063 = require("./804063.js"),
  Chunk703656 = require("./703656.js"),
  Chunk359110 = require("./359110.js"),
  Chunk411405 = require("./411405.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk607802 = require("./607802.js"),
  Chunk16846 = require("./16846.jsx"),
  Chunk212549 = require("./212549.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk930091 = require("./930091.js");

function j(e) {
  let {
    parentChannel: t,
    onSelectChannel: n
  } = e;
  if ((null == t ? true : t.name) == null) return null;
  let l = null != t ? (0, A.KS)(t) : null;
  if (null == l) return null;
  let i = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l, {
      className: P.parentChannelNameIcon,
      size: "xxs",
      color: "currentColor"
    }), (0, r.jsx)(c.Text, {
      className: P.parentChannelNameText,
      variant: "text-xs/medium",
      color: "text-default",
      children: t.name
    })]
  });
  return (0, O.Em)(t.type) ? (0, r.jsx)(c.P3F, {
    className: a()(P.parentChannelName, P.parentChannelNameClickable),
    onClick: e => {
      e.stopPropagation(), n(t.id)
    },
    children: i
  }) : (0, r.jsx)("div", {
    className: P.parentChannelName,
    children: i
  })
}

function y(e) {
  var t, n, i;
  let {
    channel: a,
    messages: s,
    highlighter: u,
    startIndex: d,
    resultRefs: E,
    totalResults: g,
    scrollTo: I,
    renderEmbeds: O,
    offset: L,
    jumpToMessage: U,
    listNavigator: x,
    favoriteSearch: y
  } = e, G = N.cC.useSetting(), k = l.useCallback(e => {
    if (e === b.Z.getChannelId()) return;
    let t = p.Z.getChannel(e);
    null != t && (S.Z.can(v.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, m.Kh)(t.id)
  }, []), w = null != a ? (0, _.F6)(a, D.default, C.Z, false) : "???", F = y && null != a.guild_id ? null == (t = R.Z.getGuild(a.guild_id)) ? true : t.name : null, z = (null == a ? true : a.parent_id) != null ? p.Z.getChannel(a.parent_id) : null, Z = null != (n = null == z ? true : z.name) ? n : null, V = null != (i = (0, A.KS)(a)) ? i : c.VL1, B = S.Z.can(v.Plq.MANAGE_MESSAGES, a), {
    content: H
  } = (0, T.ZP)({
    content: w,
    embeds: []
  }, {
    postProcessor: u
  }), K = l.useRef(null), [W, q] = l.useState(false);
  l.useEffect(() => {
    let e = K.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && q(e.offsetWidth < e.scrollWidth)
  }, []);
  let Y = [w, Z, F].filter(e => null != e).join(", ");
  return (0, r.jsx)(h.aQ.Provider, {
    value: (0, f.Z)(G, B),
    children: (0, r.jsxs)("ul", {
      role: "group",
      className: P.searchResultGroup,
      "aria-label": Y,
      children: [(0, r.jsx)(c.P3F, {
        onClick: () => k(a.id),
        children: (0, r.jsxs)("div", {
          className: P.channelNameContainer,
          children: [(0, r.jsx)(V, {
            className: P.channelNameIcon,
            size: "xs",
            color: "currentColor"
          }), (0, r.jsx)(o.u, {
            asContainer: true,
            text: w,
            shouldShow: W,
            children: (0, r.jsxs)("span", {
              ref: K,
              className: P.channelNameText,
              children: [y && null !== F && "".concat(F, " : "), H]
            })
          }), (0, r.jsx)(j, {
            parentChannel: z,
            onSelectChannel: k
          })]
        })
      }), s.map((e, t) => {
        let n = d + t;
        return (0, r.jsx)(M.Z, {
          ref: e => {
            E.current[n] = e
          },
          totalResults: g,
          scrollTo: I,
          renderEmbeds: O,
          searchOffset: L,
          pageResultsLength: s.length,
          message: e,
          index: n,
          onJump: U,
          listItemProps: x.getItemProps({
            index: n
          })
        }, "search-result-".concat(n))
      })]
    })
  })
}
let G = Chunk473749.memo(function(e) {
  var t, n, i;
  let {
    search: a,
    renderEmbeds: o,
    scrollTo: _,
    messages: A,
    blockCount: f,
    ignoreCount: T,
    onPageChange: m,
    onClick: h,
    paginationTotalCount: N,
    renderPageWrapper: O,
    onBlockedResultsClick: R,
    searchRequestAnalyticsId: S,
    searchResultsQuery: b,
    isFavoritesSearch: D
  } = e, {
    offset: M,
    totalResults: j,
    isSearching: G,
    showBlockedResults: k
  } = a, w = l.useCallback((e, t) => {
    null == h || h(e, t);
    let n = () => {
      let t = p.Z.getChannel(e.channel_id),
        n = null != t ? t.getGuildId() : null;
      u.Z.trackJump(e.channel_id, e.id, "Search Results", {
        search_id: S
      }), (0, I.uL)(v.Z5c.CHANNEL(n, e.channel_id, e.id))
    };
    (0, g.Z)(e, n) && n()
  }, [h, S]), F = l.useMemo(() => {
    let e, t = 0;
    return A.reduce((n, r) => {
      if (!k && (C.Z.isBlockedForMessage(r) || C.Z.isIgnoredForMessage(r))) return n;
      let l = p.Z.getChannel(r.channel_id);
      return null == l || ((null == e || e !== l.id) && n.push({
        channel: l,
        messages: [],
        startIndex: t
      }), t += 1, n[n.length - 1].messages.push(r), e = null == l ? true : l.id), n
    }, [])
  }, [A, k]), z = l.useRef([]), Z = F.reduce((e, t) => e + 1 + t.messages.length, 0), V = l.useCallback((e, t) => {
    if (!E.Z.keyboardModeEnabled) return;
    let n = z.current,
      r = null != t ? n[t] : true;
    if (null == r || null == r.hitRef.current) return;
    let l = r.hitRef.current.getClientRects()[0];
    _(l.top - .5 * l.height, false, () => {
      var t;
      null == (t = document.getElementById(e)) || t.focus()
    })
  }, [_]), B = l.useCallback(e => {
    let t = z.current[e];
    null == t || t.jumpTo()
  }, []), H = (0, s.ZP)({
    navId: "search-results",
    itemCount: Z,
    focusedIndex: 0,
    setFocus: V,
    onSelect: B
  }), K = (0, d.nC)(null != (t = (0, L.UP)(b)) ? t : ""), W = F.map(e => {
    let {
      channel: t,
      messages: n,
      startIndex: l
    } = e;
    return (0, r.jsx)(y, {
      channel: t,
      messages: n,
      highlighter: K,
      startIndex: l,
      resultRefs: z,
      totalResults: j,
      scrollTo: _,
      renderEmbeds: o,
      offset: M,
      jumpToMessage: w,
      listNavigator: H,
      favoriteSearch: null != D && D
    }, "".concat(t.id, "-").concat(l))
  });
  W.push();
  let q = l.useRef(null);
  l.useLayoutEffect(() => {
    var e;
    null == (e = q.current) || e.focus()
  }, [A]);
  let Y = (0, c.mFp)();
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", (n = function(e) {
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
    }({
      ref: q
    }, H.getContainerProps(), Y), i = i = {
      "aria-busy": G,
      children: W
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
    }), n)), f > 0 || T > 0 ? (0, r.jsxs)(c.P3F, {
      tag: "div",
      className: P.resultsBlocked,
      onClick: () => {
        null == R || R(!k)
      },
      children: [(0, r.jsx)("div", {
        className: P.resultsBlockedImage
      }), (0, r.jsx)("div", {
        className: P.__invalid_resultsBlockedText,
        children: k ? f > 0 && T > 0 ? x.intl.formatToPlainString(x.t.OvJs9w, {
          count: f + T
        }) : f > 0 ? x.intl.formatToPlainString(x.t["n/1QFS"], {
          count: f
        }) : x.intl.formatToPlainString(x.t.ypezTA, {
          count: T
        }) : f > 0 && T > 0 ? x.intl.formatToPlainString(x.t.EJHRcV, {
          count: f + T
        }) : f > 0 ? x.intl.formatToPlainString(x.t.HTE8JP, {
          count: f
        }) : x.intl.formatToPlainString(x.t.e7f8r9, {
          count: T
        })
      })]
    }) : null, !G && !D && (0, r.jsx)(U.Z, {
      renderPageWrapper: O,
      onPageChange: m,
      offset: M,
      totalCount: null != N ? N : j,
      pageSize: v.vpv
    })]
  })
})
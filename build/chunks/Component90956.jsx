/** Chunk was on 15718 **/
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
    }), (0, r.jsx)(u.Text, {
      className: P.parentChannelNameText,
      variant: "text-xs/medium",
      color: "text-default",
      children: t.name
    })]
  });
  return (0, O.Em)(t.type) ? (0, r.jsx)(u.P3F, {
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
    highlighter: c,
    startIndex: E,
    resultRefs: d,
    totalResults: m,
    scrollTo: f,
    renderEmbeds: O,
    offset: U,
    jumpToMessage: L,
    listNavigator: v,
    favoriteSearch: y
  } = e, G = h.cC.useSetting(), k = l.useCallback(e => {
    if (e === b.Z.getChannelId()) return;
    let t = R.Z.getChannel(e);
    null != t && (p.Z.can(x.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, g.Kh)(t.id)
  }, []), F = null != a ? (0, _.F6)(a, D.default, C.Z, false) : "???", w = y && null != a.guild_id ? null == (t = S.Z.getGuild(a.guild_id)) ? true : t.name : null, z = (null == a ? true : a.parent_id) != null ? R.Z.getChannel(a.parent_id) : null, V = null != (n = null == z ? true : z.name) ? n : null, Z = null != (i = (0, A.KS)(a)) ? i : u.VL1, B = p.Z.can(x.Plq.MANAGE_MESSAGES, a), {
    content: H
  } = (0, I.ZP)({
    content: F,
    embeds: []
  }, {
    postProcessor: c
  }), K = l.useRef(null), [W, q] = l.useState(false);
  l.useEffect(() => {
    let e = K.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && q(e.offsetWidth < e.scrollWidth)
  }, []);
  let Y = [F, V, w].filter(e => null != e).join(", ");
  return (0, r.jsx)(N.aQ.Provider, {
    value: (0, T.Z)(G, B),
    children: (0, r.jsxs)("ul", {
      role: "group",
      className: P.searchResultGroup,
      "aria-label": Y,
      children: [(0, r.jsx)(u.P3F, {
        onClick: () => k(a.id),
        children: (0, r.jsxs)("div", {
          className: P.channelNameContainer,
          children: [(0, r.jsx)(Z, {
            className: P.channelNameIcon,
            size: "xs",
            color: "currentColor"
          }), (0, r.jsx)(o.u, {
            asContainer: true,
            text: F,
            shouldShow: W,
            children: (0, r.jsxs)("span", {
              ref: K,
              className: P.channelNameText,
              children: [y && null !== w && "".concat(w, " : "), H]
            })
          }), (0, r.jsx)(j, {
            parentChannel: z,
            onSelectChannel: k
          })]
        })
      }), s.map((e, t) => {
        let n = E + t;
        return (0, r.jsx)(M.Z, {
          ref: e => {
            d.current[n] = e
          },
          totalResults: m,
          scrollTo: f,
          renderEmbeds: O,
          searchOffset: U,
          pageResultsLength: s.length,
          message: e,
          index: n,
          onJump: L,
          listItemProps: v.getItemProps({
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
    blockCount: T,
    ignoreCount: I,
    onPageChange: g,
    onClick: N,
    paginationTotalCount: h,
    renderPageWrapper: O,
    onBlockedResultsClick: S,
    searchRequestAnalyticsId: p,
    searchResultsQuery: b,
    isFavoritesSearch: D
  } = e, {
    offset: M,
    totalResults: j,
    isSearching: G,
    showBlockedResults: k
  } = a, F = l.useCallback((e, t) => {
    null == N || N(e, t);
    let n = () => {
      let t = R.Z.getChannel(e.channel_id),
        n = null != t ? t.getGuildId() : null;
      c.Z.trackJump(e.channel_id, e.id, "Search Results", {
        search_id: p
      }), (0, f.uL)(x.Z5c.CHANNEL(n, e.channel_id, e.id))
    };
    (0, m.Z)(e, n) && n()
  }, [N, p]), w = l.useMemo(() => {
    let e, t = 0;
    return A.reduce((n, r) => {
      if (!k && (C.Z.isBlockedForMessage(r) || C.Z.isIgnoredForMessage(r))) return n;
      let l = R.Z.getChannel(r.channel_id);
      return null == l || ((null == e || e !== l.id) && n.push({
        channel: l,
        messages: [],
        startIndex: t
      }), t += 1, n[n.length - 1].messages.push(r), e = null == l ? true : l.id), n
    }, [])
  }, [A, k]), z = l.useRef([]), V = w.reduce((e, t) => e + 1 + t.messages.length, 0), Z = l.useCallback((e, t) => {
    if (!d.Z.keyboardModeEnabled) return;
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
    itemCount: V,
    focusedIndex: 0,
    setFocus: Z,
    onSelect: B
  }), K = (0, E.nC)(null != (t = (0, U.UP)(b)) ? t : ""), W = w.map(e => {
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
      jumpToMessage: F,
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
  let Y = (0, u.mFp)();
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
    }), n)), T > 0 || I > 0 ? (0, r.jsxs)(u.P3F, {
      tag: "div",
      className: P.resultsBlocked,
      onClick: () => {
        null == S || S(!k)
      },
      children: [(0, r.jsx)("div", {
        className: P.resultsBlockedImage
      }), (0, r.jsx)("div", {
        className: P.__invalid_resultsBlockedText,
        children: k ? T > 0 && I > 0 ? v.intl.formatToPlainString(v.t.OvJs9w, {
          count: T + I
        }) : T > 0 ? v.intl.formatToPlainString(v.t["n/1QFS"], {
          count: T
        }) : v.intl.formatToPlainString(v.t.ypezTA, {
          count: I
        }) : T > 0 && I > 0 ? v.intl.formatToPlainString(v.t.EJHRcV, {
          count: T + I
        }) : T > 0 ? v.intl.formatToPlainString(v.t.HTE8JP, {
          count: T
        }) : v.intl.formatToPlainString(v.t.e7f8r9, {
          count: I
        })
      })]
    }) : null, !G && !D && (0, r.jsx)(L.Z, {
      renderPageWrapper: O,
      onPageChange: g,
      offset: M,
      totalCount: null != h ? h : j,
      pageSize: x.vpv
    })]
  })
})
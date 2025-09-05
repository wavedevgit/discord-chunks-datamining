/** Chunk was on 20303 **/
/** chunk id: 619753, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./35282.js"), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk837969 = require("./837969.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk963374 = require("./963374.js"),
  Chunk607070 = require("./607070.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk95398 = require("./95398.jsx"),
  Chunk905405 = require("./905405.js"),
  Chunk255269 = require("./255269.js"),
  Chunk937889 = require("./937889.js"),
  Chunk804063 = require("./804063.js"),
  Chunk703656 = require("./703656.js"),
  Chunk359110 = require("./359110.js"),
  Chunk695346 = require("./695346.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk607802 = require("./607802.js"),
  Chunk101695 = require("./101695.jsx"),
  Chunk683101 = require("./683101.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk944106 = require("./944106.js");

function j(e) {
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
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e) {
  let {
    parentChannel: t,
    onSelectChannel: n
  } = e;
  if ((null == t ? true : t.name) == null) return null;
  let l = null != t ? (0, _.KS)(t) : null;
  if (null == l) return null;
  let i = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l, {
      className: P.parentChannelNameIcon,
      size: "xxs",
      color: "currentColor"
    }), (0, r.jsx)(o.Text, {
      className: P.parentChannelNameText,
      variant: "text-xs/medium",
      color: "header-secondary",
      children: t.name
    })]
  });
  return (0, O.Em)(t.type) ? (0, r.jsx)(o.P3F, {
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

function G(e) {
  var t, n, i;
  let {
    channel: a,
    messages: s,
    highlighter: u,
    startIndex: c,
    resultRefs: d,
    totalResults: g,
    scrollTo: f,
    renderEmbeds: O,
    offset: b,
    jumpToMessage: U,
    listNavigator: x,
    favoriteSearch: G
  } = e, k = N.cC.useSetting(), F = (0, m.p)(), Z = l.useCallback(e => {
    if (e === D.Z.getChannelId()) return;
    let t = p.Z.getChannel(e);
    null != t && (S.Z.can(M.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, h.Kh)(t.id)
  }, []), z = null != a ? (0, E.F6)(a, L.default, C.Z, false) : "???", B = G && null != a.guild_id ? null == (t = R.Z.getGuild(a.guild_id)) ? true : t.name : null, V = (null == a ? true : a.parent_id) != null ? p.Z.getChannel(a.parent_id) : null, H = null != (n = null == V ? true : V.name) ? n : null, K = null != (i = (0, _.KS)(a)) ? i : o.VL1, W = S.Z.can(M.Plq.MANAGE_MESSAGES, a), {
    content: q
  } = (0, I.ZP)({
    content: z,
    embeds: []
  }, {
    postProcessor: u,
    shouldFilterKeywords: F
  }), Y = l.useRef(null), [J, X] = l.useState(false);
  l.useEffect(() => {
    let e = Y.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && X(e.offsetWidth < e.scrollWidth)
  }, []);
  let Q = [z, H, B].filter(e => null != e).join(", ");
  return (0, r.jsx)(A.aQ.Provider, {
    value: (0, T.Z)(k, W),
    children: (0, r.jsxs)("ul", {
      role: "group",
      className: P.searchResultGroup,
      "aria-label": Q,
      children: [(0, r.jsx)(o.P3F, {
        onClick: () => Z(a.id),
        children: (0, r.jsxs)("div", {
          className: P.channelNameContainer,
          children: [(0, r.jsx)(K, {
            className: P.channelNameIcon,
            size: "xs",
            color: "currentColor"
          }), (0, r.jsx)(o.ua7, {
            text: z,
            shouldShow: J,
            children: e => (0, r.jsxs)("span", y(j({}, e), {
              ref: Y,
              className: P.channelNameText,
              children: [G && null !== B && "".concat(B, " : "), q]
            }))
          }), (0, r.jsx)(w, {
            parentChannel: V,
            onSelectChannel: Z
          })]
        })
      }), s.map((e, t) => {
        let n = c + t;
        return (0, r.jsx)(v.Z, {
          ref: e => {
            d.current[n] = e
          },
          totalResults: g,
          scrollTo: f,
          renderEmbeds: O,
          searchOffset: b,
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
let k = Chunk647438.memo(function(e) {
  var t;
  let {
    search: n,
    renderEmbeds: i,
    scrollTo: a,
    messages: E,
    blockCount: _,
    ignoreCount: A,
    onPageChange: m,
    onClick: T,
    paginationTotalCount: I,
    renderPageWrapper: h,
    onBlockedResultsClick: N,
    searchRequestAnalyticsId: O,
    searchResultsQuery: R,
    isFavoritesSearch: S
  } = e, {
    offset: D,
    totalResults: L,
    isSearching: v,
    showBlockedResults: w
  } = n, k = l.useCallback((e, t) => {
    if (null == T || T(e, t), (0, g.Z)(e)) {
      let t = p.Z.getChannel(e.channel_id),
        n = null != t ? t.getGuildId() : null;
      u.Z.trackJump(e.channel_id, e.id, "Search Results", {
        search_id: O
      }), (0, f.uL)(M.Z5c.CHANNEL(n, e.channel_id, e.id))
    }
  }, [T, O]), F = l.useMemo(() => {
    let e, t = 0;
    return E.reduce((n, r) => {
      if (!w && (C.Z.isBlockedForMessage(r) || C.Z.isIgnoredForMessage(r))) return n;
      let l = p.Z.getChannel(r.channel_id);
      return null == l || ((null == e || e !== l.id) && n.push({
        channel: l,
        messages: [],
        startIndex: t
      }), t += 1, n[n.length - 1].messages.push(r), e = null == l ? true : l.id), n
    }, [])
  }, [E, w]), Z = l.useRef([]), z = F.reduce((e, t) => e + 1 + t.messages.length, 0), B = l.useCallback((e, t) => {
    if (!d.Z.keyboardModeEnabled) return;
    let n = Z.current,
      r = null != t ? n[t] : true;
    if (null == r || null == r.hitRef.current) return;
    let l = r.hitRef.current.getClientRects()[0];
    a(l.top - .5 * l.height, false, () => {
      var t;
      null == (t = document.getElementById(e)) || t.focus()
    })
  }, [a]), V = l.useCallback(e => {
    let t = Z.current[e];
    null == t || t.jumpTo()
  }, []), H = (0, s.ZP)({
    navId: "search-results",
    itemCount: z,
    focusedIndex: 0,
    setFocus: B,
    onSelect: V
  }), K = (0, c.nC)(null != (t = (0, b.UP)(R)) ? t : ""), W = F.map(e => {
    let {
      channel: t,
      messages: n,
      startIndex: l
    } = e;
    return (0, r.jsx)(G, {
      channel: t,
      messages: n,
      highlighter: K,
      startIndex: l,
      resultRefs: Z,
      totalResults: L,
      scrollTo: a,
      renderEmbeds: i,
      offset: D,
      jumpToMessage: k,
      listNavigator: H,
      favoriteSearch: null != S && S
    }, "".concat(t.id, "-").concat(l))
  });
  W.push();
  let q = l.useRef(null);
  l.useLayoutEffect(() => {
    var e;
    null == (e = q.current) || e.focus()
  }, [E]);
  let Y = (0, o.mFp)();
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", y(j({
      ref: q
    }, H.getContainerProps(), Y), {
      "aria-busy": v,
      children: W
    })), _ > 0 || A > 0 ? (0, r.jsxs)(o.P3F, {
      tag: "div",
      className: P.resultsBlocked,
      onClick: () => {
        null == N || N(!w)
      },
      children: [(0, r.jsx)("div", {
        className: P.resultsBlockedImage
      }), (0, r.jsx)("div", {
        className: P.__invalid_resultsBlockedText,
        children: w ? _ > 0 && A > 0 ? x.intl.formatToPlainString(x.t["OvJs9/"], {
          count: _ + A
        }) : _ > 0 ? x.intl.formatToPlainString(x.t["n/1QFR"], {
          count: _
        }) : x.intl.formatToPlainString(x.t.ypezTE, {
          count: A
        }) : _ > 0 && A > 0 ? x.intl.formatToPlainString(x.t.EJHRcX, {
          count: _ + A
        }) : _ > 0 ? x.intl.formatToPlainString(x.t.HTE8JC, {
          count: _
        }) : x.intl.formatToPlainString(x.t.e7f8r6, {
          count: A
        })
      })]
    }) : null, !v && !S && (0, r.jsx)(U.Z, {
      renderPageWrapper: h,
      onPageChange: m,
      offset: D,
      totalCount: null != I ? I : L,
      pageSize: M.vpv
    })]
  })
})
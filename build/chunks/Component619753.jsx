/** Chunk was on 66201 **/
/** chunk id: 619753, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./35282.js"), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk837969 = require("./837969.js"),
  Chunk681715 = require("./681715.js"),
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
  Chunk858283 = require("./858283.js");

function y(e) {
  let {
    parentChannel: t,
    onSelectChannel: n
  } = e;
  if ((null == t ? true : t.name) == null) return null;
  let l = null != t ? (0, A.KS)(t) : null;
  if (null == l) return null;
  let i = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l, {
      className: j.parentChannelNameIcon,
      size: "xxs",
      color: "currentColor"
    }), (0, r.jsx)(u.Text, {
      className: j.parentChannelNameText,
      variant: "text-xs/medium",
      color: "header-secondary",
      children: t.name
    })]
  });
  return (0, R.Em)(t.type) ? (0, r.jsx)(u.P3F, {
    className: s()(j.parentChannelName, j.parentChannelNameClickable),
    onClick: e => {
      e.stopPropagation(), n(t.id)
    },
    children: i
  }) : (0, r.jsx)("div", {
    className: j.parentChannelName,
    children: i
  })
}

function G(e) {
  var t, n, i;
  let {
    channel: s,
    messages: a,
    highlighter: c,
    startIndex: E,
    resultRefs: d,
    totalResults: N,
    scrollTo: h,
    renderEmbeds: R,
    offset: M,
    jumpToMessage: x,
    listNavigator: P,
    favoriteSearch: G
  } = e, k = f.cC.useSetting(), F = (0, I.p)(), w = l.useCallback(e => {
    if (e === U.Z.getChannelId()) return;
    let t = S.Z.getChannel(e);
    null != t && (C.Z.can(v.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, O.Kh)(t.id)
  }, []), z = null != s ? (0, _.F6)(s, L.default, D.Z, false) : "???", V = G && null != s.guild_id ? null == (t = p.Z.getGuild(s.guild_id)) ? true : t.name : null, Z = (null == s ? true : s.parent_id) != null ? S.Z.getChannel(s.parent_id) : null, B = null != (n = null == Z ? true : Z.name) ? n : null, H = null != (i = (0, A.KS)(s)) ? i : u.VL1, K = C.Z.can(v.Plq.MANAGE_MESSAGES, s), {
    content: W
  } = (0, g.ZP)({
    content: z,
    embeds: []
  }, {
    postProcessor: c,
    shouldFilterKeywords: F
  }), q = l.useRef(null), [Y, X] = l.useState(false);
  l.useEffect(() => {
    let e = q.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && X(e.offsetWidth < e.scrollWidth)
  }, []);
  let J = [z, B, V].filter(e => null != e).join(", ");
  return (0, r.jsx)(T.aQ.Provider, {
    value: (0, m.Z)(k, K),
    children: (0, r.jsxs)("ul", {
      role: "group",
      className: j.searchResultGroup,
      "aria-label": J,
      children: [(0, r.jsx)(u.P3F, {
        onClick: () => w(s.id),
        children: (0, r.jsxs)("div", {
          className: j.channelNameContainer,
          children: [(0, r.jsx)(H, {
            className: j.channelNameIcon,
            size: "xs",
            color: "currentColor"
          }), (0, r.jsx)(o.u, {
            asContainer: true,
            text: z,
            shouldShow: Y,
            children: (0, r.jsxs)("span", {
              ref: q,
              className: j.channelNameText,
              children: [G && null !== V && "".concat(V, " : "), W]
            })
          }), (0, r.jsx)(y, {
            parentChannel: Z,
            onSelectChannel: w
          })]
        })
      }), a.map((e, t) => {
        let n = E + t;
        return (0, r.jsx)(b.Z, {
          ref: e => {
            d.current[n] = e
          },
          totalResults: N,
          scrollTo: h,
          renderEmbeds: R,
          searchOffset: M,
          pageResultsLength: a.length,
          message: e,
          index: n,
          onJump: x,
          listItemProps: P.getItemProps({
            index: n
          })
        }, "search-result-".concat(n))
      })]
    })
  })
}
let k = Chunk647438.memo(function(e) {
  var t, n, i;
  let {
    search: s,
    renderEmbeds: o,
    scrollTo: _,
    messages: A,
    blockCount: T,
    ignoreCount: I,
    onPageChange: m,
    onClick: g,
    paginationTotalCount: O,
    renderPageWrapper: f,
    onBlockedResultsClick: R,
    searchRequestAnalyticsId: p,
    searchResultsQuery: C,
    isFavoritesSearch: U
  } = e, {
    offset: L,
    totalResults: b,
    isSearching: y,
    showBlockedResults: k
  } = s, F = l.useCallback((e, t) => {
    if (null == g || g(e, t), (0, N.Z)(e)) {
      let t = S.Z.getChannel(e.channel_id),
        n = null != t ? t.getGuildId() : null;
      c.Z.trackJump(e.channel_id, e.id, "Search Results", {
        search_id: p
      }), (0, h.uL)(v.Z5c.CHANNEL(n, e.channel_id, e.id))
    }
  }, [g, p]), w = l.useMemo(() => {
    let e, t = 0;
    return A.reduce((n, r) => {
      if (!k && (D.Z.isBlockedForMessage(r) || D.Z.isIgnoredForMessage(r))) return n;
      let l = S.Z.getChannel(r.channel_id);
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
  }, []), H = (0, a.ZP)({
    navId: "search-results",
    itemCount: V,
    focusedIndex: 0,
    setFocus: Z,
    onSelect: B
  }), K = (0, E.nC)(null != (t = (0, M.UP)(C)) ? t : ""), W = w.map(e => {
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
      resultRefs: z,
      totalResults: b,
      scrollTo: _,
      renderEmbeds: o,
      offset: L,
      jumpToMessage: F,
      listNavigator: H,
      favoriteSearch: null != U && U
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
      "aria-busy": y,
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
      className: j.resultsBlocked,
      onClick: () => {
        null == R || R(!k)
      },
      children: [(0, r.jsx)("div", {
        className: j.resultsBlockedImage
      }), (0, r.jsx)("div", {
        className: j.__invalid_resultsBlockedText,
        children: k ? T > 0 && I > 0 ? P.intl.formatToPlainString(P.t.OvJs9w, {
          count: T + I
        }) : T > 0 ? P.intl.formatToPlainString(P.t["n/1QFS"], {
          count: T
        }) : P.intl.formatToPlainString(P.t.ypezTA, {
          count: I
        }) : T > 0 && I > 0 ? P.intl.formatToPlainString(P.t.EJHRcV, {
          count: T + I
        }) : T > 0 ? P.intl.formatToPlainString(P.t.HTE8JP, {
          count: T
        }) : P.intl.formatToPlainString(P.t.e7f8r9, {
          count: I
        })
      })]
    }) : null, !y && !U && (0, r.jsx)(x.Z, {
      renderPageWrapper: f,
      onPageChange: m,
      offset: L,
      totalCount: null != O ? O : b,
      pageSize: v.vpv
    })]
  })
})
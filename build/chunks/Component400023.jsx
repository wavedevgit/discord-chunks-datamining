/** Chunk was on web.js **/
/** chunk id: 400023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eo
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk902840 = require("./902840.js"),
  Chunk448986 = require("./448986.js"),
  Chunk607070 = require("./607070.js"),
  Chunk931056 = require("./931056.js"),
  Chunk835473 = require("./835473.js"),
  Chunk95398 = require("./95398.jsx"),
  Chunk580747 = require("./580747.js"),
  Chunk135938 = require("./135938.js"),
  Chunk160404 = require("./160404.js"),
  Chunk765104 = require("./765104.js"),
  Chunk695346 = require("./695346.js"),
  Chunk314897 = require("./314897.js"),
  Chunk796974 = require("./796974.js"),
  Chunk323873 = require("./323873.js"),
  Chunk607744 = require("./607744.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk306680 = require("./306680.js"),
  Chunk62817 = require("./62817.js"),
  Chunk594174 = require("./594174.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk255269 = require("./255269.js"),
  Chunk47481 = require("./47481.js"),
  Chunk977391 = require("./977391.jsx"),
  Chunk959258 = require("./959258.jsx"),
  Chunk73274 = require("./73274.js"),
  Chunk693676 = require("./693676.js"),
  Chunk406534 = require("./406534.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk77346 = require("./77346.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function K(e, t) {
  if (null == e) return {};
  var n, r, i = z(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function z(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let q = "messagesNavigationDescription",
  X = (0, Chunk717976.animated)(Chunk481060.eTT);

function Q(e) {
  let t = i.useCallback(() => {
      var t;
      return null == (t = e.current) ? true : t.scrollToBottom()
    }, [e]),
    n = i.useCallback(() => {
      var t;
      return null == (t = e.current) ? true : t.scrollPageUp({
        animate: !p.Z.useReducedMotion
      })
    }, [e]),
    r = i.useCallback(() => {
      var t;
      return null == (t = e.current) ? true : t.scrollPageDown({
        animate: !p.Z.useReducedMotion
      })
    }, [e]);
  (0, D.yp)({
    event: B.CkL.SCROLLTO_PRESENT,
    handler: t
  }), (0, D.yp)({
    event: B.CkL.SCROLL_PAGE_UP,
    handler: n
  }), (0, D.yp)({
    event: B.CkL.SCROLL_PAGE_DOWN,
    handler: r
  })
}

function J(e) {
  return (0, c.e7)([y.Z], () => C.Z.can(B.Plq.READ_MESSAGE_HISTORY, e) ? null : y.Z.getViewingRolesTimestamp(e.getGuildId()))
}

function $(e) {
  var t, n;
  let {
    className: o,
    messageGroupSpacing: c,
    scrollerClassName: f,
    channel: h,
    messages: m,
    unreadCount: g,
    showNewMessagesBar: E,
    messageDisplayCompact: b,
    channelStream: y,
    uploads: O,
    hasUnreads: v,
    editingMessageId: I,
    fontSize: S,
    keyboardModeEnabled: A,
    filterAfterTimestamp: N,
    showingQuarantineBanner: C,
    hideSummaries: R = false,
    jumpBarClassName: P,
    typingGradient: w,
    isChatInputBottomAligned: D
  } = e, [L, x] = i.useState(null != (n = T.Z.isAtBottom(h.id)) && n), j = i.useMemo(() => b ? (0, M.aJ)({
    compact: true,
    messageGroups: 30,
    groupRange: 4,
    attachments: 8,
    fontSize: S,
    groupSpacing: c
  }) : (0, M.aJ)({
    compact: false,
    messageGroups: 26,
    groupRange: 4,
    attachments: 8,
    fontSize: S,
    groupSpacing: c
  }), [b, S, c]), V = (0, U.ZP)({
    messages: m,
    channel: h,
    compact: b,
    hasUnreads: v,
    focusId: I,
    placeholderHeight: j.totalHeight,
    canLoadMore: null == N,
    handleScrollToBottom: i.useCallback(() => x(true), [x]),
    handleScrollFromBottom: i.useCallback(() => x(false), [x]),
    additionalMessagePadding: 48 * !!D
  }), Y = (0, k.Z)({
    scrollerRef: V.ref,
    isEditing: null != I,
    keyboardModeEnabled: A,
    hasMoreAfter: m.hasMoreAfter
  }), z = () => {
    if (m.hasPresent()) {
      var e;
      null == (e = V.ref.current) || e.scrollToBottom({
        animate: !p.Z.useReducedMotion
      })
    } else d.Z.jumpToPresent(h.id, B.AQB)
  }, $ = J(h), {
    channelStreamMarkup: ee,
    newMessagesBar: et,
    jumpToPresentBar: en,
    forumPostActionBar: er,
    safetyWarningBanner: ei
  } = (0, G.Z)({
    channel: h,
    messages: m,
    unreadCount: g,
    showNewMessagesBar: E,
    messageDisplayCompact: b,
    channelStream: y,
    uploads: O,
    loadMore: V.loadMore,
    scrollManager: V,
    specs: j,
    filterAfterTimestamp: null != N ? N : $,
    showingQuarantineBanner: C,
    hideSummaries: R,
    jumpToPresent: z,
    jumpBarClassName: P
  });
  Q(V.ref);
  let eo = (0, u.mFp)(),
    ea = (0, l.l2)(Y),
    {
      ref: es
    } = ea,
    el = K(ea, ["ref"]),
    ec = (0, _.Z)(e => {
      var t;
      V.ref.current = e, es.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
    }),
    {
      fadeStart: eu,
      fadeEnd: ed
    } = (0, u.q_F)({
      fadeStart: w && !L ? 96 : w ? 32 : 16,
      fadeEnd: w && !L ? 24 : 24 * !!w,
      config: {
        tension: 150,
        friction: 15,
        clamp: true
      }
    });
  return (0, r.jsxs)(l.bG, {
    navigator: Y,
    children: [null != ei && ei, (0, r.jsxs)("div", {
      className: a()(F.messagesWrapper, o, "group-spacing-".concat(c)),
      children: [null == ei && et, (0, r.jsxs)(X, W(H({
        style: D ? {
          mask: (0, s.to)([eu, ed], (e, t) => "linear-gradient(180deg, black 0%, black calc(100% - ".concat(e, "px), rgba(0,0,0,0) calc(100% - ").concat(t, "px), rgba(0,0,0,0) 100%)"))
        } : true,
        ref: ec,
        customTheme: true,
        className: a()(f, F.scroller),
        contentClassName: F.scrollerContent,
        onResize: V.handleResize,
        onScroll: V.handleScroll,
        onMouseDown: V.handleMouseDown,
        onMouseUp: V.handleMouseUp
      }, eo), {
        tabIndex: false,
        role: "group",
        children: [er, (0, r.jsxs)("ol", W(H({
          className: a()(F.scrollerInner, {
            [F.scrollerAllowSticky]: h.isModeratorReportChannel()
          }),
          "aria-label": Z.intl.formatToPlainString(Z.t.XarRiI, {
            channelName: h.name
          })
        }, el), {
          children: [(0, r.jsx)("span", {
            className: F.navigationDescription,
            id: q,
            "aria-hidden": true,
            children: Z.intl.string(Z.t.Spb3s7)
          }), ee, (0, r.jsx)("div", {
            className: a()({
              [F.scrollerSpacer]: !C,
              [F.empty]: 0 === m.length && !m.loadingMore,
              [F.emptyForum]: 1 === m.length && !m.loadingMore && h.isForumPost() && (null == (t = m.first()) ? true : t.isFirstMessageInForumPost(h))
            })
          })]
        }))]
      })), en]
    })]
  })
}
let ee = Chunk73800.memo($, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden);

function et(e) {
  var t, n;
  let r = (0, c.e7)([N.Z], () => N.Z.getMessages(e.id), [e.id]),
    o = (0, c.e7)([R.ZP], () => {
      var t;
      return null != (t = R.ZP.getOldestUnreadMessageId(e.id)) ? t : null
    }, [e.id]),
    {
      enabled: a
    } = b.Z.useExperiment({
      location: "41de6d_1"
    }, {
      autoTrackExposure: false
    }),
    s = null != (n = null == (t = w.default.getUser(I.default.getId())) ? true : t.hasFlag(B.xW$.SPAMMER)) && n,
    l = (0, f.ts)(e),
    u = (0, E.Z)("use_topic_dividers_in_chat"),
    d = (0, c.Wu)([O.Z], () => {
      var t;
      return l && u && null != (t = O.Z.summaries(e.id)) ? t : []
    }, [l, e.id, u]),
    _ = (0, c.e7)([O.Z], () => l ? O.Z.selectedSummary(e.id) : null, [l, e.id]),
    p = en(r);
  (0, h.Z)(r, e);
  let m = i.useMemo(() => (0, x.Z)({
    channel: e,
    messages: r,
    oldestUnreadMessageId: o,
    treatSpam: a && !s,
    summaries: d,
    selectedSummary: _
  }), [r, e, o, a, d, _, p, s]);
  return {
    messages: r,
    channelStream: m,
    oldestUnreadMessageId: o,
    editingMessageId: (0, c.e7)([S.Z], () => {
      var t;
      return null == (t = S.Z.getEditingMessage(e.id)) ? true : t.id
    })
  }
}

function en(e) {
  let t = i.useMemo(() => {
    let t = new Set;
    return e.forEach(e => {
      null != e.applicationId && null == e.application && t.add(e.applicationId)
    }), Array.from(t)
  }, [e]);
  return (0, m.Z)(t)
}

function er() {
  let e = Chunk695346.jU.useSetting(),
    t = Chunk695346.cC.useSetting(),
    {
      messageGroupSpacing: n,
      fontSize: r,
      keyboardModeEnabled: i
    } = (0, Chunk442837.cj)([Chunk607070.Z], () => {
      let {
        messageGroupSpacing: e,
        fontSize: t,
        keyboardModeEnabled: n
      } = Chunk607070.Z;
      return {
        messageGroupSpacing: module,
        fontSize: exports,
        keyboardModeEnabled: require
      }
    });
  return {
    messageGroupSpacing: require,
    messageDisplayCompact: module,
    renderSpoilers: exports,
    fontSize: Chunk255367,
    keyboardModeEnabled: Chunk73800
  }
}

function ei(e) {
  let t = e.getGuildId(),
    n = (0, c.e7)([A.Z], () => null == t || A.Z.canChatInGuild(t), [t]),
    {
      canManageMessages: r,
      permissionVersion: i
    } = (0, c.cj)([C.Z], () => ({
      canManageMessages: C.Z.can(B.Plq.MANAGE_MESSAGES, e),
      permissionVersion: null != t ? C.Z.getGuildVersion(t) : null
    }), [e, t]);
  return {
    canChat: n,
    permissionVersion: i,
    canManageMessages: r
  }
}
let eo = Chunk73800.memo(function(e) {
  var {
    channel: t,
    showingQuarantineBanner: n,
    hideSummaries: i = false,
    forceCompact: o = false,
    forceCozy: a = false,
    typingGradient: s = false,
    isChatInputBottomAligned: l = false
  } = e, u = K(e, ["channel", "showingQuarantineBanner", "hideSummaries", "forceCompact", "forceCozy", "typingGradient", "isChatInputBottomAligned"]);
  let {
    canManageMessages: d,
    permissionVersion: f,
    canChat: _
  } = ei(t), {
    messageGroupSpacing: p,
    fontSize: h,
    messageDisplayCompact: m,
    renderSpoilers: E,
    keyboardModeEnabled: b
  } = er(), {
    messages: y,
    channelStream: O,
    oldestUnreadMessageId: v,
    editingMessageId: I
  } = et(t);
  return (0, r.jsx)(g.aQ.Provider, {
    value: (0, L.Z)(E, d),
    children: (0, r.jsx)(j.v, {
      children: (0, r.jsx)(ee, W(H({}, u), {
        messageGroupSpacing: p,
        showNewMessagesBar: true,
        channel: t,
        messageDisplayCompact: !a && (o || m),
        messages: y,
        channelStream: O,
        permissionVersion: f,
        uploads: (0, c.e7)([P.Z], () => P.Z.getFiles(t.id), [t]),
        unreadCount: (0, c.e7)([R.ZP], () => R.ZP.getUnreadCount(t.id), [t]),
        hasUnreads: null != v,
        canChat: _,
        editingMessageId: I,
        fontSize: h,
        keyboardModeEnabled: b,
        showingQuarantineBanner: n,
        hideSummaries: i,
        typingGradient: s,
        isChatInputBottomAligned: l
      }))
    })
  })
})
/** Chunk was on 13140 **/
/** chunk id: 400023, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => K
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk509442 = require("./509442.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk902840 = require("./902840.js"),
  Chunk448986 = require("./448986.js"),
  Chunk607070 = require("./607070.js"),
  Chunk931056 = require("./931056.js"),
  Chunk835473 = require("./835473.js"),
  Chunk580747 = require("./580747.js"),
  Chunk135938 = require("./135938.js"),
  Chunk160404 = require("./160404.js"),
  Chunk411405 = require("./411405.jsx"),
  Chunk765104 = require("./765104.js"),
  Chunk695346 = require("./695346.js"),
  Chunk581883 = require("./581883.js"),
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
  Chunk419388 = require("./419388.js"),
  Chunk406534 = require("./406534.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk151227 = require("./151227.js");

function G(e) {
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

function W(e, t) {
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

function z(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let q = (0, Chunk509442.animated)(Chunk481060.eTT),
  Y = Chunk647438.memo(function(e) {
    var t, n;
    let {
      className: l,
      messageGroupSpacing: o,
      scrollerClassName: p,
      channel: m,
      messages: g,
      unreadCount: b,
      showNewMessagesBar: _,
      messageDisplayCompact: C,
      channelStream: v,
      uploads: O,
      hasUnreads: E,
      editingMessageId: S,
      fontSize: P,
      keyboardModeEnabled: I,
      filterAfterTimestamp: T,
      showingQuarantineBanner: N,
      hideSummaries: A = false,
      jumpBarClassName: M,
      typingGradient: R
    } = e, [k, Y] = i.useState(null != (n = j.Z.isAtBottom(m.id)) && n), K = i.useMemo(() => C ? (0, D.aJ)({
      compact: true,
      messageGroups: 30,
      groupRange: 4,
      attachments: 8,
      fontSize: P,
      groupSpacing: o
    }) : (0, D.aJ)({
      compact: false,
      messageGroups: 26,
      groupRange: 4,
      attachments: 8,
      fontSize: P,
      groupSpacing: o
    }), [C, P, o]), X = (0, U.ZP)({
      messages: g,
      channel: m,
      compact: C,
      hasUnreads: E,
      focusId: S,
      placeholderHeight: K.totalHeight,
      canLoadMore: null == T,
      handleScrollToBottom: i.useCallback(() => Y(true), [Y]),
      handleScrollFromBottom: i.useCallback(() => Y(false), [Y]),
      additionalMessagePadding: 48
    }), J = (0, L.Z)({
      scrollerRef: X.ref,
      isEditing: null != S,
      keyboardModeEnabled: I,
      hasMoreAfter: g.hasMoreAfter
    }), Q = (0, c.e7)([y.Z], () => Z.Z.can(F.Plq.READ_MESSAGE_HISTORY, m) ? null : y.Z.getViewingRolesTimestamp(m.getGuildId())), {
      channelStreamMarkup: $,
      newMessagesBar: ee,
      jumpToPresentBar: et,
      forumPostActionBar: en,
      safetyWarningBanner: er
    } = (0, B.Z)({
      channel: m,
      messages: g,
      unreadCount: b,
      showNewMessagesBar: _,
      messageDisplayCompact: C,
      channelStream: v,
      uploads: O,
      loadMore: X.loadMore,
      scrollManager: X,
      specs: K,
      filterAfterTimestamp: null != T ? T : Q,
      showingQuarantineBanner: N,
      hideSummaries: A,
      jumpToPresent: () => {
        if (g.hasPresent()) {
          var e;
          null == (e = X.ref.current) || e.scrollToBottom({
            animate: !h.Z.useReducedMotion
          })
        } else d.Z.jumpToPresent(m.id, F.AQB)
      },
      jumpBarClassName: M
    });
    ! function(e) {
      let t = i.useCallback(() => {
          var t;
          return null == (t = e.current) ? true : t.scrollToBottom()
        }, [e]),
        n = i.useCallback(() => {
          var t;
          return null == (t = e.current) ? true : t.scrollPageUp({
            animate: !h.Z.useReducedMotion
          })
        }, [e]),
        r = i.useCallback(() => {
          var t;
          return null == (t = e.current) ? true : t.scrollPageDown({
            animate: !h.Z.useReducedMotion
          })
        }, [e]);
      (0, w.yp)({
        event: F.CkL.SCROLLTO_PRESENT,
        handler: t
      }), (0, w.yp)({
        event: F.CkL.SCROLL_PAGE_UP,
        handler: n
      }), (0, w.yp)({
        event: F.CkL.SCROLL_PAGE_DOWN,
        handler: r
      })
    }(X.ref);
    let ei = (0, u.mFp)(),
      el = (0, s.l2)(J),
      {
        ref: ea
      } = el,
      eo = z(el, ["ref"]),
      es = (0, f.Z)(e => {
        var t;
        X.ref.current = e, ea.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
      }),
      ec = (0, c.e7)([x.Z], () => {
        var e;
        let t = null == (e = x.Z.settings.appearance) ? true : e.clientThemeSettings;
        return (null == t ? true : t.backgroundGradientPresetId) != null || (null == t ? true : t.customUserThemeSettings) != null
      }),
      eu = i.useMemo(() => R ? k ? H.chatTypingGradientAtBottom : H.chatTypingGradientNotAtBottom : H.chatGradient, [R, k]),
      ed = i.useMemo(() => R ? k ? H.typingGradientAtBottom : H.typingGradientNotAtBottom : H.gradientDefault, [R, k]);
    return (0, r.jsxs)(s.bG, {
      navigator: J,
      children: [null != er && er, (0, r.jsxs)("div", {
        className: a()(H.messagesWrapper, l, "group-spacing-".concat(o)),
        children: [null == er && ee, (0, r.jsxs)(q, W(G({
          ref: es,
          customTheme: true,
          className: a()(p, H.scroller, ec ? ed : true),
          contentClassName: H.scrollerContent,
          onResize: X.handleResize,
          onScroll: X.handleScroll,
          onMouseDown: X.handleMouseDown,
          onMouseUp: X.handleMouseUp
        }, ei), {
          tabIndex: false,
          role: "group",
          children: [en, (0, r.jsxs)("ol", W(G({
            className: a()(H.scrollerInner, {
              [H.scrollerAllowSticky]: m.isModeratorReportChannel()
            }),
            "aria-label": V.intl.formatToPlainString(V.t.XarRiL, {
              channelName: m.name
            })
          }, eo), {
            children: [(0, r.jsx)("span", {
              className: H.navigationDescription,
              id: "messagesNavigationDescription",
              "aria-hidden": true,
              children: V.intl.string(V.t["Spb3s/"])
            }), $, (0, r.jsx)("div", {
              className: a()({
                [H.scrollerSpacer]: !N,
                [H.empty]: 0 === g.length && !g.loadingMore,
                [H.emptyForum]: 1 === g.length && !g.loadingMore && m.isForumPost() && (null == (t = g.first()) ? true : t.isFirstMessageInForumPost(m))
              })
            })]
          }))]
        })), ec ? null : (0, r.jsx)("div", {
          className: eu
        }), et]
      })]
    })
  }, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden),
  K = Chunk647438.memo(function(e) {
    var {
      channel: t,
      showingQuarantineBanner: n,
      hideSummaries: l = false,
      forceCompact: a = false,
      forceCozy: o = false,
      typingGradient: s = false
    } = e, u = z(e, ["channel", "showingQuarantineBanner", "hideSummaries", "forceCompact", "forceCozy", "typingGradient"]);
    let {
      canManageMessages: d,
      permissionVersion: f,
      canChat: y
    } = function(e) {
      let t = e.getGuildId(),
        n = (0, c.e7)([P.Z], () => null == t || P.Z.canChatInGuild(t), [t]),
        {
          canManageMessages: r,
          permissionVersion: i
        } = (0, c.cj)([Z.Z], () => ({
          canManageMessages: Z.Z.can(F.Plq.MANAGE_MESSAGES, e),
          permissionVersion: null != t ? Z.Z.getGuildVersion(t) : null
        }), [e, t]);
      return {
        canChat: n,
        permissionVersion: i,
        canManageMessages: r
      }
    }(t), {
      messageGroupSpacing: x,
      fontSize: j,
      messageDisplayCompact: w,
      renderSpoilers: D,
      keyboardModeEnabled: L
    } = function() {
      let e = O.jU.useSetting(),
        t = O.cC.useSetting(),
        {
          messageGroupSpacing: n,
          fontSize: r,
          keyboardModeEnabled: i
        } = (0, c.cj)([h.Z], () => {
          let {
            messageGroupSpacing: e,
            fontSize: t,
            keyboardModeEnabled: n
          } = h.Z;
          return {
            messageGroupSpacing: e,
            fontSize: t,
            keyboardModeEnabled: n
          }
        });
      return {
        messageGroupSpacing: n,
        messageDisplayCompact: e,
        renderSpoilers: t,
        fontSize: r,
        keyboardModeEnabled: i
      }
    }(), {
      messages: U,
      channelStream: B,
      oldestUnreadMessageId: V,
      editingMessageId: H
    } = function(e) {
      var t, n;
      let r = (0, c.e7)([I.Z], () => I.Z.getMessages(e.id), [e.id]),
        l = (0, c.e7)([T.ZP], () => {
          var t;
          return null != (t = T.ZP.getOldestUnreadMessageId(e.id)) ? t : null
        }, [e.id]),
        {
          enabled: a
        } = _.Z.useExperiment({
          location: "41de6d_1"
        }, {
          autoTrackExposure: false
        }),
        o = null != (n = null == (t = A.default.getUser(E.default.getId())) ? true : t.hasFlag(F.xW$.SPAMMER)) && n,
        s = (0, p.ts)(e),
        u = (0, b.Z)("use_topic_dividers_in_chat"),
        d = (0, c.Wu)([v.Z], () => {
          var t;
          return s && u && null != (t = v.Z.summaries(e.id)) ? t : []
        }, [s, e.id, u]),
        f = (0, c.e7)([v.Z], () => s ? v.Z.selectedSummary(e.id) : null, [s, e.id]),
        h = function(e) {
          let t = i.useMemo(() => {
            let t = new Set;
            return e.forEach(e => {
              null != e.applicationId && null == e.application && t.add(e.applicationId)
            }), Array.from(t)
          }, [e]);
          return (0, g.Z)(t)
        }(r);
      (0, m.Z)(r, e);
      let y = i.useMemo(() => (0, R.Z)({
        channel: e,
        messages: r,
        oldestUnreadMessageId: l,
        treatSpam: a && !o,
        summaries: d,
        selectedSummary: f
      }), [r, e, l, a, d, f, h, o]);
      return {
        messages: r,
        channelStream: y,
        oldestUnreadMessageId: l,
        editingMessageId: (0, c.e7)([S.Z], () => {
          var t;
          return null == (t = S.Z.getEditingMessage(e.id)) ? true : t.id
        })
      }
    }(t);
    return (0, r.jsx)(C.aQ.Provider, {
      value: (0, M.Z)(D, d),
      children: (0, r.jsx)(k.v, {
        children: (0, r.jsx)(Y, W(G({}, u), {
          messageGroupSpacing: x,
          showNewMessagesBar: true,
          channel: t,
          messageDisplayCompact: !o && (a || w),
          messages: U,
          channelStream: B,
          permissionVersion: f,
          uploads: (0, c.e7)([N.Z], () => N.Z.getFiles(t.id), [t]),
          unreadCount: (0, c.e7)([T.ZP], () => T.ZP.getUnreadCount(t.id), [t]),
          hasUnreads: null != V,
          canChat: y,
          editingMessageId: H,
          fontSize: j,
          keyboardModeEnabled: L,
          showingQuarantineBanner: n,
          hideSummaries: l,
          typingGradient: s
        }))
      })
    })
  })
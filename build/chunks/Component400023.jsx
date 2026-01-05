/** Chunk was on 40184 **/
/** chunk id: 400023, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk554916 = require("./554916.js"),
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
  Chunk85321 = require("./85321.js");

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function z(e, t) {
  if (null == e) return {};
  var n, i, r = function(e, t) {
    if (null == e) return {};
    var n, i, r = {},
      l = Object.keys(e);
    for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
let q = (0, Chunk554916.animated)(Chunk481060.eTT),
  K = Chunk473749.memo(function(e) {
    var t, n;
    let {
      className: l,
      messageGroupSpacing: o,
      scrollerClassName: p,
      channel: m,
      messages: g,
      unreadCount: b,
      showNewMessagesBar: C,
      messageDisplayCompact: v,
      channelStream: x,
      uploads: O,
      hasUnreads: j,
      editingMessageId: _,
      fontSize: P,
      keyboardModeEnabled: I,
      filterAfterTimestamp: T,
      showingQuarantineBanner: N,
      hideSummaries: A = false,
      jumpBarClassName: M,
      typingGradient: R
    } = e, [L, K] = r.useState(null != (n = S.Z.isAtBottom(m.id)) && n), Y = r.useMemo(() => v ? (0, D.aJ)({
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
    }), [v, P, o]), X = (0, U.ZP)({
      messages: g,
      channel: m,
      compact: v,
      hasUnreads: j,
      focusId: _,
      placeholderHeight: Y.totalHeight,
      canLoadMore: null == T,
      handleScrollToBottom: r.useCallback(() => K(true), [K]),
      handleScrollFromBottom: r.useCallback(() => K(false), [K]),
      additionalMessagePadding: 48
    }), J = (0, k.Z)({
      scrollerRef: X.ref,
      isEditing: null != _,
      keyboardModeEnabled: I,
      hasMoreAfter: g.hasMoreAfter
    }), Q = (0, c.e7)([y.Z], () => Z.Z.can(F.Plq.READ_MESSAGE_HISTORY, m) ? null : y.Z.getViewingRolesTimestamp(m.getGuildId())), {
      channelStreamMarkup: $,
      newMessagesBar: ee,
      jumpToPresentBar: et,
      forumPostActionBar: en,
      safetyWarningBanner: ei
    } = (0, V.Z)({
      channel: m,
      messages: g,
      unreadCount: b,
      showNewMessagesBar: C,
      messageDisplayCompact: v,
      channelStream: x,
      uploads: O,
      loadMore: X.loadMore,
      scrollManager: X,
      specs: Y,
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
      let t = r.useCallback(() => {
          var t;
          return null == (t = e.current) ? true : t.scrollToBottom()
        }, [e]),
        n = r.useCallback(() => {
          var t;
          return null == (t = e.current) ? true : t.scrollPageUp({
            animate: !h.Z.useReducedMotion
          })
        }, [e]),
        i = r.useCallback(() => {
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
        handler: i
      })
    }(X.ref);
    let er = (0, u.mFp)(),
      el = (0, s.l2)(J),
      {
        ref: ea
      } = el,
      eo = z(el, ["ref"]),
      es = (0, f.Z)(e => {
        var t;
        X.ref.current = e, ea.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
      }),
      ec = (0, c.e7)([E.Z], () => {
        var e;
        let t = null == (e = E.Z.settings.appearance) ? true : e.clientThemeSettings;
        return (null == t ? true : t.backgroundGradientPresetId) != null || (null == t ? true : t.customUserThemeSettings) != null
      }),
      eu = r.useMemo(() => R ? L ? B.chatTypingGradientAtBottom : B.chatTypingGradientNotAtBottom : B.chatGradient, [R, L]),
      ed = r.useMemo(() => R ? L ? B.typingGradientAtBottom : B.typingGradientNotAtBottom : B.gradientDefault, [R, L]);
    return (0, i.jsxs)(s.bG, {
      navigator: J,
      children: [null != ei && ei, (0, i.jsxs)("div", {
        className: a()(B.messagesWrapper, l, "group-spacing-".concat(o)),
        children: [null == ei && ee, (0, i.jsxs)(q, W(G({
          ref: es,
          customTheme: true,
          className: a()(p, B.scroller, ec ? ed : true),
          contentClassName: B.scrollerContent,
          onResize: X.handleResize,
          onScroll: X.handleScroll,
          onMouseDown: X.handleMouseDown,
          onMouseUp: X.handleMouseUp
        }, er), {
          tabIndex: false,
          role: "group",
          children: [en, (0, i.jsxs)("ol", W(G({
            className: a()(B.scrollerInner, {
              [B.scrollerAllowSticky]: m.isModeratorReportChannel()
            }),
            "aria-label": H.intl.formatToPlainString(H.t.XarRiL, {
              channelName: m.name
            })
          }, eo), {
            children: [(0, i.jsx)("span", {
              className: B.navigationDescription,
              id: "messagesNavigationDescription",
              "aria-hidden": true,
              children: H.intl.string(H.t["Spb3s/"])
            }), $, (0, i.jsx)("div", {
              className: a()({
                [B.scrollerSpacer]: !N,
                [B.empty]: 0 === g.length && !g.loadingMore,
                [B.emptyForum]: 1 === g.length && !g.loadingMore && m.isForumPost() && (null == (t = g.first()) ? true : t.isFirstMessageInForumPost(m))
              })
            })]
          }))]
        })), ec ? null : (0, i.jsx)("div", {
          className: eu
        }), et]
      })]
    })
  }, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden),
  Y = Chunk473749.memo(function(e) {
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
          canManageMessages: i,
          permissionVersion: r
        } = (0, c.cj)([Z.Z], () => ({
          canManageMessages: Z.Z.can(F.Plq.MANAGE_MESSAGES, e),
          permissionVersion: null != t ? Z.Z.getGuildVersion(t) : null
        }), [e, t]);
      return {
        canChat: n,
        permissionVersion: r,
        canManageMessages: i
      }
    }(t), {
      messageGroupSpacing: E,
      fontSize: S,
      messageDisplayCompact: w,
      renderSpoilers: D,
      keyboardModeEnabled: k
    } = function() {
      let e = O.jU.useSetting(),
        t = O.cC.useSetting(),
        {
          messageGroupSpacing: n,
          fontSize: i,
          keyboardModeEnabled: r
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
        fontSize: i,
        keyboardModeEnabled: r
      }
    }(), {
      messages: U,
      channelStream: V,
      oldestUnreadMessageId: H,
      editingMessageId: B
    } = function(e) {
      var t, n;
      let i = (0, c.e7)([I.Z], () => I.Z.getMessages(e.id), [e.id]),
        l = (0, c.e7)([T.ZP], () => {
          var t;
          return null != (t = T.ZP.getOldestUnreadMessageId(e.id)) ? t : null
        }, [e.id]),
        {
          enabled: a
        } = C.Z.useExperiment({
          location: "41de6d_1"
        }, {
          autoTrackExposure: false
        }),
        o = null != (n = null == (t = A.default.getUser(j.default.getId())) ? true : t.hasFlag(F.xW$.SPAMMER)) && n,
        s = (0, p.ts)(e),
        u = (0, b.Z)("use_topic_dividers_in_chat"),
        d = (0, c.Wu)([x.Z], () => {
          var t;
          return s && u && null != (t = x.Z.summaries(e.id)) ? t : []
        }, [s, e.id, u]),
        f = (0, c.e7)([x.Z], () => s ? x.Z.selectedSummary(e.id) : null, [s, e.id]),
        h = function(e) {
          let t = r.useMemo(() => {
            let t = new Set;
            return e.forEach(e => {
              null != e.applicationId && null == e.application && t.add(e.applicationId)
            }), Array.from(t)
          }, [e]);
          return (0, g.Z)(t)
        }(i);
      (0, m.Z)(i, e);
      let y = r.useMemo(() => (0, R.Z)({
        channel: e,
        messages: i,
        oldestUnreadMessageId: l,
        treatSpam: a && !o,
        summaries: d,
        selectedSummary: f
      }), [i, e, l, a, d, f, h, o]);
      return {
        messages: i,
        channelStream: y,
        oldestUnreadMessageId: l,
        editingMessageId: (0, c.e7)([_.Z], () => {
          var t;
          return null == (t = _.Z.getEditingMessage(e.id)) ? true : t.id
        })
      }
    }(t);
    return (0, i.jsx)(v.aQ.Provider, {
      value: (0, M.Z)(D, d),
      children: (0, i.jsx)(L.v, {
        children: (0, i.jsx)(K, W(G({}, u), {
          messageGroupSpacing: E,
          showNewMessagesBar: true,
          channel: t,
          messageDisplayCompact: !o && (a || w),
          messages: U,
          channelStream: V,
          permissionVersion: f,
          uploads: (0, c.e7)([N.Z], () => N.Z.getFiles(t.id), [t]),
          unreadCount: (0, c.e7)([T.ZP], () => T.ZP.getUnreadCount(t.id), [t]),
          hasUnreads: null != H,
          canChat: y,
          editingMessageId: B,
          fontSize: S,
          keyboardModeEnabled: k,
          showingQuarantineBanner: n,
          hideSummaries: l,
          typingGradient: s
        }))
      })
    })
  })
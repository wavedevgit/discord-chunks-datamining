/** Chunk was on 73551 **/
/** chunk id: 400023, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => q
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

function V(e, t) {
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
let W = (0, Chunk717976.animated)(Chunk481060.eTT),
  Y = Chunk73800.memo(function(e) {
    var t, n;
    let {
      className: l,
      messageGroupSpacing: p,
      scrollerClassName: m,
      channel: g,
      messages: b,
      unreadCount: y,
      showNewMessagesBar: _,
      messageDisplayCompact: x,
      channelStream: v,
      uploads: j,
      hasUnreads: E,
      editingMessageId: S,
      fontSize: P,
      keyboardModeEnabled: Z,
      filterAfterTimestamp: T,
      showingQuarantineBanner: N,
      hideSummaries: w = false,
      jumpBarClassName: R,
      typingGradient: k,
      isChatInputBottomAligned: Y
    } = e, [q, K] = i.useState(null != (n = O.Z.isAtBottom(g.id)) && n), X = i.useMemo(() => x ? (0, M.aJ)({
      compact: true,
      messageGroups: 30,
      groupRange: 4,
      attachments: 8,
      fontSize: P,
      groupSpacing: p
    }) : (0, M.aJ)({
      compact: false,
      messageGroups: 26,
      groupRange: 4,
      attachments: 8,
      fontSize: P,
      groupSpacing: p
    }), [x, P, p]), Q = (0, L.ZP)({
      messages: b,
      channel: g,
      compact: x,
      hasUnreads: E,
      focusId: S,
      placeholderHeight: X.totalHeight,
      canLoadMore: null == T,
      handleScrollToBottom: i.useCallback(() => K(true), [K]),
      handleScrollFromBottom: i.useCallback(() => K(false), [K]),
      additionalMessagePadding: 48 * !!Y
    }), J = (0, D.Z)({
      scrollerRef: Q.ref,
      isEditing: null != S,
      keyboardModeEnabled: Z,
      hasMoreAfter: b.hasMoreAfter
    }), $ = (0, c.e7)([C.Z], () => I.Z.can(B.Plq.READ_MESSAGE_HISTORY, g) ? null : C.Z.getViewingRolesTimestamp(g.getGuildId())), {
      channelStreamMarkup: ee,
      newMessagesBar: et,
      jumpToPresentBar: en,
      forumPostActionBar: er,
      safetyWarningBanner: ei
    } = (0, U.Z)({
      channel: g,
      messages: b,
      unreadCount: y,
      showNewMessagesBar: _,
      messageDisplayCompact: x,
      channelStream: v,
      uploads: j,
      loadMore: Q.loadMore,
      scrollManager: Q,
      specs: X,
      filterAfterTimestamp: null != T ? T : $,
      showingQuarantineBanner: N,
      hideSummaries: w,
      jumpToPresent: () => {
        if (b.hasPresent()) {
          var e;
          null == (e = Q.ref.current) || e.scrollToBottom({
            animate: !f.Z.useReducedMotion
          })
        } else d.Z.jumpToPresent(g.id, B.AQB)
      },
      jumpBarClassName: R
    });
    ! function(e) {
      let t = i.useCallback(() => {
          var t;
          return null == (t = e.current) ? true : t.scrollToBottom()
        }, [e]),
        n = i.useCallback(() => {
          var t;
          return null == (t = e.current) ? true : t.scrollPageUp({
            animate: !f.Z.useReducedMotion
          })
        }, [e]),
        r = i.useCallback(() => {
          var t;
          return null == (t = e.current) ? true : t.scrollPageDown({
            animate: !f.Z.useReducedMotion
          })
        }, [e]);
      (0, A.yp)({
        event: B.CkL.SCROLLTO_PRESENT,
        handler: t
      }), (0, A.yp)({
        event: B.CkL.SCROLL_PAGE_UP,
        handler: n
      }), (0, A.yp)({
        event: B.CkL.SCROLL_PAGE_DOWN,
        handler: r
      })
    }(Q.ref);
    let el = (0, u.mFp)(),
      ea = (0, s.l2)(J),
      {
        ref: eo
      } = ea,
      es = z(ea, ["ref"]),
      ec = (0, h.Z)(e => {
        var t;
        Q.ref.current = e, eo.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
      }),
      {
        fadeStart: eu,
        fadeEnd: ed
      } = (0, u.q_F)({
        fadeStart: k && !q ? 96 : k ? 32 : 16,
        fadeEnd: k && !q ? 24 : 24 * !!k,
        config: {
          tension: 150,
          friction: 15,
          clamp: true
        }
      });
    return (0, r.jsxs)(s.bG, {
      navigator: J,
      children: [null != ei && ei, (0, r.jsxs)("div", {
        className: a()(H.messagesWrapper, l, "group-spacing-".concat(p)),
        children: [null == ei && et, (0, r.jsxs)(W, V(G({
          style: Y ? {
            mask: (0, o.to)([eu, ed], (e, t) => "linear-gradient(180deg, black 0%, black calc(100% - ".concat(e, "px), rgba(0,0,0,0) calc(100% - ").concat(t, "px), rgba(0,0,0,0) 100%)"))
          } : true,
          ref: ec,
          customTheme: true,
          className: a()(m, H.scroller),
          contentClassName: H.scrollerContent,
          onResize: Q.handleResize,
          onScroll: Q.handleScroll,
          onMouseDown: Q.handleMouseDown,
          onMouseUp: Q.handleMouseUp
        }, el), {
          tabIndex: false,
          role: "group",
          children: [er, (0, r.jsxs)("ol", V(G({
            className: a()(H.scrollerInner, {
              [H.scrollerAllowSticky]: g.isModeratorReportChannel()
            }),
            "aria-label": F.intl.formatToPlainString(F.t.XarRiI, {
              channelName: g.name
            })
          }, es), {
            children: [(0, r.jsx)("span", {
              className: H.navigationDescription,
              id: "messagesNavigationDescription",
              "aria-hidden": true,
              children: F.intl.string(F.t.Spb3s7)
            }), ee, (0, r.jsx)("div", {
              className: a()({
                [H.scrollerSpacer]: !N,
                [H.empty]: 0 === b.length && !b.loadingMore,
                [H.emptyForum]: 1 === b.length && !b.loadingMore && g.isForumPost() && (null == (t = b.first()) ? true : t.isFirstMessageInForumPost(g))
              })
            })]
          }))]
        })), en]
      })]
    })
  }, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden),
  q = Chunk73800.memo(function(e) {
    var {
      channel: t,
      showingQuarantineBanner: n,
      hideSummaries: l = false,
      forceCompact: a = false,
      forceCozy: o = false,
      typingGradient: s = false,
      isChatInputBottomAligned: u = false
    } = e, d = z(e, ["channel", "showingQuarantineBanner", "hideSummaries", "forceCompact", "forceCozy", "typingGradient", "isChatInputBottomAligned"]);
    let {
      canManageMessages: h,
      permissionVersion: C,
      canChat: O
    } = function(e) {
      let t = e.getGuildId(),
        n = (0, c.e7)([S.Z], () => null == t || S.Z.canChatInGuild(t), [t]),
        {
          canManageMessages: r,
          permissionVersion: i
        } = (0, c.cj)([I.Z], () => ({
          canManageMessages: I.Z.can(B.Plq.MANAGE_MESSAGES, e),
          permissionVersion: null != t ? I.Z.getGuildVersion(t) : null
        }), [e, t]);
      return {
        canChat: n,
        permissionVersion: i,
        canManageMessages: r
      }
    }(t), {
      messageGroupSpacing: A,
      fontSize: M,
      messageDisplayCompact: D,
      renderSpoilers: L,
      keyboardModeEnabled: U
    } = function() {
      let e = v.jU.useSetting(),
        t = v.cC.useSetting(),
        {
          messageGroupSpacing: n,
          fontSize: r,
          keyboardModeEnabled: i
        } = (0, c.cj)([f.Z], () => {
          let {
            messageGroupSpacing: e,
            fontSize: t,
            keyboardModeEnabled: n
          } = f.Z;
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
      messages: F,
      channelStream: H,
      oldestUnreadMessageId: W,
      editingMessageId: q
    } = function(e) {
      var t, n;
      let r = (0, c.e7)([P.Z], () => P.Z.getMessages(e.id), [e.id]),
        l = (0, c.e7)([Z.ZP], () => {
          var t;
          return null != (t = Z.ZP.getOldestUnreadMessageId(e.id)) ? t : null
        }, [e.id]),
        {
          enabled: a
        } = _.Z.useExperiment({
          location: "41de6d_1"
        }, {
          autoTrackExposure: false
        }),
        o = null != (n = null == (t = N.default.getUser(j.default.getId())) ? true : t.hasFlag(B.xW$.SPAMMER)) && n,
        s = (0, p.ts)(e),
        u = (0, y.Z)("use_topic_dividers_in_chat"),
        d = (0, c.Wu)([x.Z], () => {
          var t;
          return s && u && null != (t = x.Z.summaries(e.id)) ? t : []
        }, [s, e.id, u]),
        h = (0, c.e7)([x.Z], () => s ? x.Z.selectedSummary(e.id) : null, [s, e.id]),
        f = function(e) {
          let t = i.useMemo(() => {
            let t = new Set;
            return e.forEach(e => {
              null != e.applicationId && null == e.application && t.add(e.applicationId)
            }), Array.from(t)
          }, [e]);
          return (0, g.Z)(t)
        }(r);
      (0, m.Z)(r, e);
      let b = i.useMemo(() => (0, R.Z)({
        channel: e,
        messages: r,
        oldestUnreadMessageId: l,
        treatSpam: a && !o,
        summaries: d,
        selectedSummary: h
      }), [r, e, l, a, d, h, f, o]);
      return {
        messages: r,
        channelStream: b,
        oldestUnreadMessageId: l,
        editingMessageId: (0, c.e7)([E.Z], () => {
          var t;
          return null == (t = E.Z.getEditingMessage(e.id)) ? true : t.id
        })
      }
    }(t);
    return (0, r.jsx)(b.aQ.Provider, {
      value: (0, w.Z)(L, h),
      children: (0, r.jsx)(k.v, {
        children: (0, r.jsx)(Y, V(G({}, d), {
          messageGroupSpacing: A,
          showNewMessagesBar: true,
          channel: t,
          messageDisplayCompact: !o && (a || D),
          messages: F,
          channelStream: H,
          permissionVersion: C,
          uploads: (0, c.e7)([T.Z], () => T.Z.getFiles(t.id), [t]),
          unreadCount: (0, c.e7)([Z.ZP], () => Z.ZP.getUnreadCount(t.id), [t]),
          hasUnreads: null != W,
          canChat: O,
          editingMessageId: q,
          fontSize: M,
          keyboardModeEnabled: U,
          showingQuarantineBanner: n,
          hideSummaries: l,
          typingGradient: s,
          isChatInputBottomAligned: u
        }))
      })
    })
  })
/** Chunk was on 97492 **/
/** chunk id: 371648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => X
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk432371 = require("./432371.js"),
  Chunk765548 = require("./765548.js"),
  Chunk775602 = require("./775602.js"),
  Chunk821720 = require("./821720.js"),
  Chunk429913 = require("./429913.js"),
  Chunk354328 = require("./354328.js"),
  Chunk559149 = require("./559149.js"),
  Chunk164956 = require("./164956.js"),
  Chunk302031 = require("./302031.jsx"),
  Chunk513272 = require("./513272.js"),
  Chunk253932 = require("./253932.js"),
  Chunk617617 = require("./617617.js"),
  Chunk961350 = require("./961350.js"),
  Chunk72314 = require("./72314.js"),
  Chunk580745 = require("./580745.js"),
  Chunk834942 = require("./834942.js"),
  Chunk320501 = require("./320501.js"),
  Chunk576705 = require("./576705.js"),
  Chunk222823 = require("./222823.js"),
  Chunk399263 = require("./399263.js"),
  Chunk287809 = require("./287809.js"),
  Chunk234320 = require("./234320.jsx"),
  Chunk863439 = require("./863439.js"),
  Chunk504136 = require("./504136.js"),
  Chunk540385 = require("./540385.jsx"),
  Chunk830178 = require("./830178.jsx"),
  Chunk722432 = require("./722432.js"),
  Chunk258024 = require("./258024.js"),
  Chunk672341 = require("./672341.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk478186 = require("./478186.js");

function K(e) {
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
  var n, r, l, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.getOwnPropertyNames(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  return i
}
let Y = (0, Chunk108531.animated)(Chunk397927.fKU),
  q = Chunk64700.memo(function(e) {
    var t, n, i;
    let s, f, b, {
        className: g,
        messageGroupSpacing: m,
        scrollerClassName: A,
        channel: O,
        messages: j,
        unreadCount: v,
        showNewMessagesBar: E,
        messageDisplayCompact: C,
        channelStream: S,
        uploads: I,
        hasUnreads: T,
        editingMessageId: P,
        fontSize: w,
        keyboardModeEnabled: D,
        filterAfterTimestamp: M,
        showingQuarantineBanner: G,
        hideSummaries: q = false,
        jumpBarClassName: X,
        typingGradient: J
      } = e,
      [Q, Z] = l.useState(null != (t = _.A.isAtBottom(O.id)) && t),
      $ = l.useMemo(() => C ? (0, L.bW)({
        compact: true,
        messageGroups: 30,
        groupRange: 4,
        attachments: 8,
        fontSize: w,
        groupSpacing: m
      }) : (0, L.bW)({
        compact: false,
        messageGroups: 26,
        groupRange: 4,
        attachments: 8,
        fontSize: w,
        groupSpacing: m
      }), [C, w, m]),
      ee = (0, U.Ay)({
        messages: j,
        channel: O,
        compact: C,
        hasUnreads: T,
        focusId: P,
        placeholderHeight: $.totalHeight,
        canLoadMore: null == M,
        handleScrollToBottom: l.useCallback(() => Z(true), [Z]),
        handleScrollFromBottom: l.useCallback(() => Z(false), [Z]),
        additionalMessagePadding: 48
      }),
      et = (0, k.A)({
        scrollerRef: ee.ref,
        isEditing: null != P,
        keyboardModeEnabled: D,
        hasMoreAfter: j.hasMoreAfter
      }),
      en = (0, c.bG)([y.A], () => N.A.can(F.xBc.READ_MESSAGE_HISTORY, O) ? null : y.A.getViewingRolesTimestamp(O.getGuildId())),
      {
        channelStreamMarkup: er,
        newMessagesBar: el,
        jumpToPresentBar: ei,
        forumPostActionBar: ea,
        safetyWarningBanner: es
      } = (0, V.A)({
        channel: O,
        messages: j,
        unreadCount: v,
        showNewMessagesBar: E,
        messageDisplayCompact: C,
        channelStream: S,
        uploads: I,
        loadMore: ee.loadMore,
        scrollManager: ee,
        specs: $,
        filterAfterTimestamp: null != M ? M : en,
        showingQuarantineBanner: G,
        hideSummaries: q,
        jumpToPresent: () => {
          if (j.hasPresent()) {
            var e;
            null == (e = ee.ref.current) || e.scrollToBottom({
              animate: !h.A.useReducedMotion
            })
          } else d.A.jumpToPresent(O.id, F.EMb)
        },
        jumpBarClassName: X
      });
    i = ee.ref, s = l.useCallback(() => {
      var e;
      return null == (e = i.current) ? true : e.scrollToBottom()
    }, [i]), f = l.useCallback(() => {
      var e;
      return null == (e = i.current) ? true : e.scrollPageUp({
        animate: !h.A.useReducedMotion
      })
    }, [i]), b = l.useCallback(() => {
      var e;
      return null == (e = i.current) ? true : e.scrollPageDown({
        animate: !h.A.useReducedMotion
      })
    }, [i]), (0, R.Vo)({
      event: F.jej.SCROLLTO_PRESENT,
      handler: s
    }), (0, R.Vo)({
      event: F.jej.SCROLL_PAGE_UP,
      handler: f
    }), (0, R.Vo)({
      event: F.jej.SCROLL_PAGE_DOWN,
      handler: b
    });
    let eo = (0, u.R7z)(),
      ec = (0, o.LT)(et),
      {
        ref: eu
      } = ec,
      ed = z(ec, ["ref"]),
      ef = (0, p.A)(e => {
        var t;
        ee.ref.current = e, eu.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
      }),
      ep = (0, c.bG)([x.A], () => {
        var e;
        let t = null == (e = x.A.settings.appearance) ? true : e.clientThemeSettings;
        return (null == t ? true : t.backgroundGradientPresetId) != null || (null == t ? true : t.customUserThemeSettings) != null
      }),
      eh = l.useMemo(() => J ? Q ? B.gA : B.ru : B.Zd, [J, Q]),
      eb = l.useMemo(() => J ? Q ? B.cz : B.XF : B.U6, [J, Q]);
    return (0, r.jsxs)(o.hD, {
      navigator: et,
      children: [null != es && es, (0, r.jsxs)("div", {
        className: a()(B.Og, g, "group-spacing-".concat(m)),
        children: [null == es && el, (0, r.jsxs)(Y, W(K({
          ref: ef,
          customTheme: true,
          className: a()(A, B.XG, ep ? eb : true),
          contentClassName: B.gT,
          onResize: ee.handleResize,
          onScroll: ee.handleScroll,
          onMouseDown: ee.handleMouseDown,
          onMouseUp: ee.handleMouseUp
        }, eo), {
          tabIndex: false,
          role: "group",
          children: [ea, (0, r.jsxs)("ol", W(K({
            className: a()(B.bv, {
              [B.FD]: O.isModeratorReportChannel()
            }),
            "aria-label": H.intl.formatToPlainString(H.t.XarRiL, {
              channelName: O.name
            })
          }, ed), {
            children: [(0, r.jsx)("span", {
              className: B.$4,
              id: "messagesNavigationDescription",
              "aria-hidden": true,
              children: H.intl.string(H.t["Spb3s/"])
            }), er, (0, r.jsx)("div", {
              className: a()({
                [B.lB]: !G,
                [B.Ie]: 0 === j.length && !j.loadingMore,
                [B.Fb]: 1 === j.length && !j.loadingMore && O.isForumPost() && (null == (n = j.first()) ? true : n.isFirstMessageInForumPost(O))
              })
            })]
          }))]
        })), ep ? null : (0, r.jsx)("div", {
          className: eh
        }), ei]
      })]
    })
  }, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden),
  X = Chunk64700.memo(function(e) {
    let {
      channel: t,
      showingQuarantineBanner: n,
      hideSummaries: i = false,
      forceCompact: a = false,
      forceCozy: s = false,
      typingGradient: o = false
    } = e, u = z(e, ["channel", "showingQuarantineBanner", "hideSummaries", "forceCompact", "forceCozy", "typingGradient"]), {
      canManageMessages: d,
      permissionVersion: p,
      canChat: y
    } = function(e) {
      let t = e.getGuildId(),
        n = (0, c.bG)([S.A], () => null == t || S.A.canChatInGuild(t), [t]),
        {
          canManageMessages: r,
          permissionVersion: l
        } = (0, c.cf)([N.A], () => ({
          canManageMessages: N.A.can(F.xBc.MANAGE_MESSAGES, e),
          permissionVersion: null != t ? N.A.getGuildVersion(t) : null
        }), [e, t]);
      return {
        canChat: n,
        permissionVersion: l,
        canManageMessages: r
      }
    }(t), {
      messageGroupSpacing: x,
      fontSize: _,
      messageDisplayCompact: R,
      renderSpoilers: L,
      keyboardModeEnabled: k
    } = function() {
      let e = v.hH.useSetting(),
        t = v.gs.useSetting(),
        {
          messageGroupSpacing: n,
          fontSize: r,
          keyboardModeEnabled: l
        } = (0, c.cf)([h.A], () => {
          let {
            messageGroupSpacing: e,
            fontSize: t,
            keyboardModeEnabled: n
          } = h.A;
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
        keyboardModeEnabled: l
      }
    }(), {
      messages: U,
      channelStream: V,
      oldestUnreadMessageId: H,
      editingMessageId: B
    } = function(e) {
      var t, n, r;
      let i, a = (0, c.bG)([I.A], () => I.A.getMessages(e.id), [e.id]),
        s = (0, c.bG)([T.Ay], () => {
          var t;
          return null != (t = T.Ay.getOldestUnreadMessageId(e.id)) ? t : null
        }, [e.id]),
        {
          enabled: o
        } = A.A.useExperiment({
          location: "41de6d_1"
        }, {
          autoTrackExposure: false
        }),
        u = null != (t = null == (n = w.default.getUser(E.default.getId())) ? true : n.hasFlag(F.nhx.SPAMMER)) && t,
        d = (0, f.cI)(e),
        p = (0, m.A)("use_topic_dividers_in_chat"),
        h = (0, c.yK)([j.A], () => {
          var t;
          return d && p && null != (t = j.A.summaries(e.id)) ? t : []
        }, [d, e.id, p]),
        y = (0, c.bG)([j.A], () => d ? j.A.selectedSummary(e.id) : null, [d, e.id]),
        O = (r = a, i = l.useMemo(() => {
          let e = new Set;
          return r.forEach(t => {
            null != t.applicationId && null == t.application && e.add(t.applicationId)
          }), Array.from(e)
        }, [r]), (0, g.A)(i));
      (0, b.A)(a, e);
      let v = l.useMemo(() => (0, M.A)({
        channel: e,
        messages: a,
        oldestUnreadMessageId: s,
        treatSpam: o && !u,
        summaries: h,
        selectedSummary: y
      }), [a, e, s, o, h, y, O, u]);
      return {
        messages: a,
        channelStream: v,
        oldestUnreadMessageId: s,
        editingMessageId: (0, c.bG)([C.A], () => {
          var t;
          return null == (t = C.A.getEditingMessage(e.id)) ? true : t.id
        })
      }
    }(t);
    return (0, r.jsx)(O.Bs.Provider, {
      value: (0, D.A)(L, d),
      children: (0, r.jsx)(G.t, {
        children: (0, r.jsx)(q, W(K({}, u), {
          messageGroupSpacing: x,
          showNewMessagesBar: true,
          channel: t,
          messageDisplayCompact: !s && (a || R),
          messages: U,
          channelStream: V,
          permissionVersion: p,
          uploads: (0, c.bG)([P.A], () => P.A.getFiles(t.id), [t]),
          unreadCount: (0, c.bG)([T.Ay], () => T.Ay.getUnreadCount(t.id), [t]),
          hasUnreads: null != H,
          canChat: y,
          editingMessageId: B,
          fontSize: _,
          keyboardModeEnabled: k,
          showingQuarantineBanner: n,
          hideSummaries: i,
          typingGradient: o
        }))
      })
    })
  })
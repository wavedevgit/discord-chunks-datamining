/** Chunk was on 78528 **/
/** chunk id: 371648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => X
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
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
let Y = (0, Chunk353709.animated)(Chunk397927.fKU),
  q = Chunk64700.memo(function(e) {
    var t, n, i;
    let a, p, g, {
        className: m,
        messageGroupSpacing: b,
        scrollerClassName: A,
        channel: _,
        messages: O,
        unreadCount: j,
        showNewMessagesBar: x,
        messageDisplayCompact: C,
        channelStream: S,
        uploads: I,
        hasUnreads: T,
        editingMessageId: P,
        fontSize: w,
        keyboardModeEnabled: D,
        filterAfterTimestamp: M,
        showingQuarantineBanner: k,
        hideSummaries: q = false,
        jumpBarClassName: X,
        typingGradient: J
      } = e,
      [Q, Z] = l.useState(null != (t = E.A.isAtBottom(_.id)) && t),
      $ = l.useMemo(() => C ? (0, L.bW)({
        compact: true,
        messageGroups: 30,
        groupRange: 4,
        attachments: 8,
        fontSize: w,
        groupSpacing: b
      }) : (0, L.bW)({
        compact: false,
        messageGroups: 26,
        groupRange: 4,
        attachments: 8,
        fontSize: w,
        groupSpacing: b
      }), [C, w, b]),
      ee = (0, U.Ay)({
        messages: O,
        channel: _,
        compact: C,
        hasUnreads: T,
        focusId: P,
        placeholderHeight: $.totalHeight,
        canLoadMore: null == M,
        handleScrollToBottom: l.useCallback(() => Z(true), [Z]),
        handleScrollFromBottom: l.useCallback(() => Z(false), [Z]),
        additionalMessagePadding: 48
      }),
      et = (0, G.A)({
        scrollerRef: ee.ref,
        isEditing: null != P,
        keyboardModeEnabled: D,
        hasMoreAfter: O.hasMoreAfter
      }),
      en = (0, c.bG)([y.A], () => N.A.can(V.xBc.READ_MESSAGE_HISTORY, _) ? null : y.A.getViewingRolesTimestamp(_.getGuildId())),
      {
        channelStreamMarkup: er,
        newMessagesBar: el,
        jumpToPresentBar: ei,
        forumPostActionBar: es,
        safetyWarningBanner: ea
      } = (0, B.A)({
        channel: _,
        messages: O,
        unreadCount: j,
        showNewMessagesBar: x,
        messageDisplayCompact: C,
        channelStream: S,
        uploads: I,
        loadMore: ee.loadMore,
        scrollManager: ee,
        specs: $,
        filterAfterTimestamp: null != M ? M : en,
        showingQuarantineBanner: k,
        hideSummaries: q,
        jumpToPresent: () => {
          if (O.hasPresent()) {
            var e;
            null == (e = ee.ref.current) || e.scrollToBottom({
              animate: !f.A.useReducedMotion
            })
          } else d.A.jumpToPresent(_.id, V.EMb)
        },
        jumpBarClassName: X
      });
    i = ee.ref, a = l.useCallback(() => {
      var e;
      return null == (e = i.current) ? true : e.scrollToBottom()
    }, [i]), p = l.useCallback(() => {
      var e;
      return null == (e = i.current) ? true : e.scrollPageUp({
        animate: !f.A.useReducedMotion
      })
    }, [i]), g = l.useCallback(() => {
      var e;
      return null == (e = i.current) ? true : e.scrollPageDown({
        animate: !f.A.useReducedMotion
      })
    }, [i]), (0, R.Vo)({
      event: V.jej.SCROLLTO_PRESENT,
      handler: a
    }), (0, R.Vo)({
      event: V.jej.SCROLL_PAGE_UP,
      handler: p
    }), (0, R.Vo)({
      event: V.jej.SCROLL_PAGE_DOWN,
      handler: g
    });
    let eo = (0, u.R7z)(),
      ec = (0, o.LT)(et),
      {
        ref: eu
      } = ec,
      ed = z(ec, ["ref"]),
      ep = (0, h.A)(e => {
        var t;
        ee.ref.current = e, eu.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
      }),
      eh = (0, c.bG)([v.A], () => {
        var e;
        let t = null == (e = v.A.settings.appearance) ? true : e.clientThemeSettings;
        return (null == t ? true : t.backgroundGradientPresetId) != null || (null == t ? true : t.customUserThemeSettings) != null
      }),
      ef = l.useMemo(() => J ? Q ? H.gA : H.ru : H.Zd, [J, Q]),
      eg = l.useMemo(() => J ? Q ? H.cz : H.XF : H.U6, [J, Q]);
    return (0, r.jsxs)(o.hD, {
      navigator: et,
      children: [null != ea && ea, (0, r.jsxs)("div", {
        className: s()(H.Og, m, "group-spacing-".concat(b)),
        children: [null == ea && el, (0, r.jsxs)(Y, W(K({
          ref: ep,
          customTheme: true,
          className: s()(A, H.XG, eh ? eg : true),
          contentClassName: H.gT,
          onResize: ee.handleResize,
          onScroll: ee.handleScroll,
          onMouseDown: ee.handleMouseDown,
          onMouseUp: ee.handleMouseUp
        }, eo), {
          tabIndex: false,
          role: "group",
          children: [es, (0, r.jsxs)("ol", W(K({
            className: s()(H.bv, {
              [H.FD]: _.isModeratorReportChannel()
            }),
            "aria-label": F.intl.formatToPlainString(F.t.XarRiL, {
              channelName: _.name
            })
          }, ed), {
            children: [(0, r.jsx)("span", {
              className: H.$4,
              id: "messagesNavigationDescription",
              "aria-hidden": true,
              children: F.intl.string(F.t["Spb3s/"])
            }), er, (0, r.jsx)("div", {
              className: s()({
                [H.lB]: !k,
                [H.Ie]: 0 === O.length && !O.loadingMore,
                [H.Fb]: 1 === O.length && !O.loadingMore && _.isForumPost() && (null == (n = O.first()) ? true : n.isFirstMessageInForumPost(_))
              })
            })]
          }))]
        })), eh ? null : (0, r.jsx)("div", {
          className: ef
        }), ei]
      })]
    })
  }, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden),
  X = Chunk64700.memo(function(e) {
    let {
      channel: t,
      showingQuarantineBanner: n,
      hideSummaries: i = false,
      forceCompact: s = false,
      forceCozy: a = false,
      typingGradient: o = false
    } = e, u = z(e, ["channel", "showingQuarantineBanner", "hideSummaries", "forceCompact", "forceCozy", "typingGradient"]), {
      canManageMessages: d,
      permissionVersion: h,
      canChat: y
    } = function(e) {
      let t = e.getGuildId(),
        n = (0, c.bG)([S.A], () => null == t || S.A.canChatInGuild(t), [t]),
        {
          canManageMessages: r,
          permissionVersion: l
        } = (0, c.cf)([N.A], () => ({
          canManageMessages: N.A.can(V.xBc.MANAGE_MESSAGES, e),
          permissionVersion: null != t ? N.A.getGuildVersion(t) : null
        }), [e, t]);
      return {
        canChat: n,
        permissionVersion: l,
        canManageMessages: r
      }
    }(t), {
      messageGroupSpacing: v,
      fontSize: E,
      messageDisplayCompact: R,
      renderSpoilers: L,
      keyboardModeEnabled: G
    } = function() {
      let e = j.hH.useSetting(),
        t = j.gs.useSetting(),
        {
          messageGroupSpacing: n,
          fontSize: r,
          keyboardModeEnabled: l
        } = (0, c.cf)([f.A], () => {
          let {
            messageGroupSpacing: e,
            fontSize: t,
            keyboardModeEnabled: n
          } = f.A;
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
      channelStream: B,
      oldestUnreadMessageId: F,
      editingMessageId: H
    } = function(e) {
      var t, n, r;
      let i, s = (0, c.bG)([I.A], () => I.A.getMessages(e.id), [e.id]),
        a = (0, c.bG)([T.Ay], () => {
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
        u = null != (t = null == (n = w.default.getUser(x.default.getId())) ? true : n.hasFlag(V.nhx.SPAMMER)) && t,
        d = (0, p.cI)(e),
        h = (0, b.A)("use_topic_dividers_in_chat"),
        f = (0, c.yK)([O.A], () => {
          var t;
          return d && h && null != (t = O.A.summaries(e.id)) ? t : []
        }, [d, e.id, h]),
        y = (0, c.bG)([O.A], () => d ? O.A.selectedSummary(e.id) : null, [d, e.id]),
        _ = (r = s, i = l.useMemo(() => {
          let e = new Set;
          return r.forEach(t => {
            null != t.applicationId && null == t.application && e.add(t.applicationId)
          }), Array.from(e)
        }, [r]), (0, m.A)(i));
      (0, g.A)(s, e);
      let j = l.useMemo(() => (0, M.A)({
        channel: e,
        messages: s,
        oldestUnreadMessageId: a,
        treatSpam: o && !u,
        summaries: f,
        selectedSummary: y
      }), [s, e, a, o, f, y, _, u]);
      return {
        messages: s,
        channelStream: j,
        oldestUnreadMessageId: a,
        editingMessageId: (0, c.bG)([C.A], () => {
          var t;
          return null == (t = C.A.getEditingMessage(e.id)) ? true : t.id
        })
      }
    }(t);
    return (0, r.jsx)(_.Bs.Provider, {
      value: (0, D.A)(L, d),
      children: (0, r.jsx)(k.t, {
        children: (0, r.jsx)(q, W(K({}, u), {
          messageGroupSpacing: v,
          showNewMessagesBar: true,
          channel: t,
          messageDisplayCompact: !a && (s || R),
          messages: U,
          channelStream: B,
          permissionVersion: h,
          uploads: (0, c.bG)([P.A], () => P.A.getFiles(t.id), [t]),
          unreadCount: (0, c.bG)([T.Ay], () => T.Ay.getUnreadCount(t.id), [t]),
          hasUnreads: null != F,
          canChat: y,
          editingMessageId: H,
          fontSize: E,
          keyboardModeEnabled: G,
          showingQuarantineBanner: n,
          hideSummaries: i,
          typingGradient: o
        }))
      })
    })
  })
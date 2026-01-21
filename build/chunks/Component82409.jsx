/** Chunk was on 82124 **/
/** chunk id: 82409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U
}), require("./361932.js"), require("./187205.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk81239 = require("./81239.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js");
require("./28664.jsx");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45114 = require("./45114.js"),
  Chunk493773 = require("./493773.js");
require("./100527.js"), require("./906732.jsx");
var Chunk315174 = require("./315174.jsx"),
  Chunk768943 = require("./768943.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk306680 = require("./306680.js"),
  Chunk709054 = require("./709054.js"),
  Chunk821020 = require("./821020.js"),
  Chunk948154 = require("./948154.js"),
  Chunk804932 = require("./804932.jsx"),
  Chunk725739 = require("./725739.js"),
  Chunk787879 = require("./787879.js"),
  Chunk370774 = require("./370774.js"),
  Chunk334426 = require("./334426.js"),
  Chunk862149 = require("./862149.jsx"),
  Chunk207913 = require("./207913.jsx"),
  Chunk333834 = require("./333834.jsx"),
  Chunk982183 = require("./982183.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk422110 = require("./422110.js");

function D(e) {
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
let M = [],
  k = {
    controller: new Chunk81239.Controller({
      value: 1,
      immediate: true
    }),
    renderBanner: false,
    bannerVisible: false,
    communityInfoVisible: false,
    shouldShowSubscribeTooltip: false,
    bannerVisibleHeight: Chunk982183.$J,
    hasGuildSubheader: false,
    disableBannerAnimation: true
  };

function L(e) {
  let {
    includePanelSpacing: t
  } = e, n = (0, C.fJ)(), {
    selectedFilter: l
  } = (0, E.Z)(), o = (0, s.e7)([S.Z], () => S.Z.oldestDisplayedMessageId), c = (0, s.Wu)([S.Z], () => S.Z.getInboxMessages()), I = (0, s.Wu)([v.ZP, b.Z, S.Z], () => c.filter(e => !(0, _.YH)({
    messageId: e.id,
    channelId: e.channelId,
    guildId: e.guildId,
    ReadStateStore_: v.ZP,
    GuildStore_: b.Z
  }) && !(0, _.Tj)(e, S.Z.selectedItemInfo))), P = (0, s.Wu)([v.ZP, b.Z, S.Z], () => c.filter(e => (0, _.YH)({
    messageId: e.id,
    channelId: e.channelId,
    guildId: e.guildId,
    ReadStateStore_: v.ZP,
    GuildStore_: b.Z
  }) || (0, _.Tj)(e, S.Z.selectedItemInfo))), Z = i.useCallback(e => {
    l !== T.V5.BOOKMARKS && x.Z.loadMoreInbox({
      viewId: n,
      loadingTrigger: e
    })
  }, [l, n]), {
    hasLoadedEver: w,
    canLoadMore: L
  } = (0, s.cj)([S.Z], () => ({
    hasLoadedEver: S.Z.hasLoadedEver,
    canLoadMore: S.Z.canLoadMore({})
  }));
  i.useEffect(() => {
      L && !w && Z(T.X.ON_OPEN)
    }, [L, w, Z]),
    function(e) {
      let {
        unreadChannelIds: t
      } = (0, _.O4)();
      i.useEffect(() => {
        null != e && t.forEach(e => {
          var t;
          let n = y.Z.getMessages(e),
            r = null == (t = n.last()) ? true : t.id,
            i = v.ZP.ackMessageId(e),
            l = n.hasPresent() && n.ready && !n.cached;
          null != r && null != i && l && O.default.compare(i, r) >= 0 && p.ack(e, {
            section: A.jXE.NOTIFICATIONS_INBOX,
            object: A.qAy.ACK_INBOX_CHANNEL_NO_MESSAGES,
            objectType: A.AnalyticsObjectTypes.ACK_AUTOMATIC
          }, true)
        })
      }, [e, t])
    }(w ? P : null);
  let U = (0, s.Wu)([g.Z], () => g.Z.getSavedMessages()),
    V = i.useMemo(() => U.flatMap(e => {
      var t;
      let {
        message: n
      } = e;
      return null == n ? M : [{
        id: n.id,
        channelId: n.channel_id,
        guildId: null == (t = m.Z.getBasicChannel(n.channel_id)) ? true : t.guild_id,
        kind: T.fL.BOOKMARK,
        message: n
      }]
    }), [U]),
    z = G(I, l, o),
    W = G(P, l, null);
  (0, f.ZP)(() => {
    var e;
    d.Z.dispatch({
      type: "NOTIFICATIONS_INBOX_OPEN"
    });
    let t = (0, j.Ag)({
        location: "NotificationsInboxSidebar"
      }).notificationCenterVariant,
      r = null == (e = S.Z.getDevOverrides().navOnClick) || e;
    if (t !== j.jP.SIDEBAR || false === r) return;
    let {
      message: i,
      isUnread: l
    } = function(e, t) {
      var n, r, i;
      let l = null == (n = e[e.length - 1]) ? true : n.message,
        a = null == (r = t[t.length - 1]) ? true : r.message,
        o = null != a ? a : l;
      if (null != o) return {
        message: o,
        isUnread: null != a
      };
      let s = S.Z.getNotifyingChannelIds();
      if (null == s || 0 === s.length) return {
        message: null,
        isUnread: false
      };
      let c = s[0],
        u = v.ZP.getTrackedAckMessageId(c);
      return null == u ? {
        message: null,
        isUnread: false
      } : {
        message: {
          id: O.default.atNextMillisecond(u),
          channel_id: c
        },
        isUnread: null != (i = v.ZP.hasUnread(c)) && i
      }
    }(z, W);
    null != i && x.Z.inboxItemClick({
      message: i,
      channel: {
        id: i.channel_id
      },
      isUnread: l,
      isSidebar: true,
      track: false,
      viewId: n
    })
  }), (0, f.zq)(() => {
    d.Z.dispatch({
      type: "NOTIFICATIONS_INBOX_CLOSE"
    })
  });
  let {
    filterStyle: K
  } = (0, j.pN)({
    location: "NotificationsInboxSidebar"
  }), Y = K === j.v8.DROPDOWN && l !== T.V5.ALL, q = (0, T.H_)(l);
  return (0, r.jsx)("nav", {
    className: a()(R.container, {
      [R.panelSpacing]: t
    }),
    children: (0, r.jsxs)(u.y5t, {
      forceLevel: 1,
      component: (0, r.jsx)(h.ZP, D({
        hasSubheader: true,
        guild: q
      }, k)),
      children: [l === T.V5.ALL && (0, r.jsx)(H, {
        hideBanner: !w || l !== T.V5.ALL
      }), Y && (0, r.jsx)(u.LZC, {
        size: 8
      }), (0, r.jsx)(N.Z, {
        className: R.messageList,
        renderMessageGroup: F,
        messages: l === T.V5.BOOKMARKS ? V : z,
        unreadMessages: l === T.V5.BOOKMARKS ? [] : W,
        listName: "notifications-inbox",
        renderLoadingState: B,
        ignoreGrouping: l === T.V5.BOOKMARKS,
        loadMore: Z
      })]
    })
  })
}

function U(e) {
  return (0, r.jsx)(C.HP, {
    children: (0, r.jsx)(L, D({}, e))
  })
}

function G(e, t, n) {
  return i.useMemo(() => 0 === e.length || t === T.V5.BOOKMARKS ? M : e.filter(e => {
    let {
      id: r
    } = e;
    return !(O.default.age(r) > T.ib || null != n && 0 >= O.default.compare(r, n)) && t === T.V5.ALL
  }), [e, t, n])
}

function B() {
  return (0, r.jsx)(P.Z, {})
}

function F(e, t) {
  return (0, r.jsx)(Z.Z, {
    message: e[0],
    groupedMessages: e.slice(1),
    isUnread: t
  }, e[0].id)
}

function H(e) {
  let {
    hideBanner: t
  } = e, n = (0, I.d)(e => e.shouldHide());
  return (0, r.jsx)("div", {
    className: a()(R.caughtUpContainer, {
      [R.hide]: n || t
    }),
    children: (0, r.jsxs)("div", {
      className: R.caughtUpContent,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "text-feedback-positive",
        className: R.caughtUpText,
        children: w.intl.string(w.t["6XMM+D"])
      }), (0, r.jsx)(u.W6s, {
        size: "sm",
        color: c.Z.colors.TEXT_FEEDBACK_POSITIVE.css
      })]
    })
  })
}
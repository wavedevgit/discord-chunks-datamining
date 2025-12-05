/** Chunk was on 83037 **/
/** chunk id: 82409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
}), require("./361932.js"), require("./187205.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js");
require("./28664.jsx");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45114 = require("./45114.js"),
  Chunk493773 = require("./493773.js");
require("./100527.js"), require("./906732.jsx");
var Chunk315174 = require("./315174.jsx"),
  Chunk340541 = require("./340541.js"),
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
  Chunk553984 = require("./553984.jsx"),
  Chunk333834 = require("./333834.jsx"),
  Chunk982183 = require("./982183.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk567133 = require("./567133.js");

function M(e) {
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
let k = [],
  G = {
    controller: new Chunk205120.Controller({
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

function U(e) {
  var t, n;
  let {
    includePanelSpacing: l
  } = e, a = (0, C.fJ)(), {
    selectedFilter: c
  } = (0, E.Z)(), P = (0, s.e7)([S.Z], () => S.Z.oldestDisplayedMessageId), N = (0, s.Wu)([S.Z], () => S.Z.getInboxMessages()), Z = (0, s.Wu)([O.ZP, _.Z, S.Z], () => N.filter(e => !(0, I.YH)({
    messageId: e.id,
    channelId: e.channelId,
    guildId: e.guildId,
    ReadStateStore_: O.ZP,
    GuildStore_: _.Z
  }) && !(0, I.Tj)(e, S.Z.selectedItemInfo))), D = (0, s.Wu)([O.ZP, _.Z, S.Z], () => N.filter(e => (0, I.YH)({
    messageId: e.id,
    channelId: e.channelId,
    guildId: e.guildId,
    ReadStateStore_: O.ZP,
    GuildStore_: _.Z
  }) || (0, I.Tj)(e, S.Z.selectedItemInfo))), U = i.useCallback(e => {
    c !== A.V5.BOOKMARKS && x.Z.loadMoreInbox({
      viewId: a,
      loadingTrigger: e
    })
  }, [c, a]), {
    hasLoadedEver: B,
    canLoadMore: W
  } = (0, s.cj)([S.Z], () => ({
    hasLoadedEver: S.Z.hasLoadedEver,
    canLoadMore: S.Z.canLoadMore({})
  }));
  i.useEffect(() => {
      W && !B && U(A.X.ON_OPEN)
    }, [W, B, U]),
    function(e) {
      let {
        unreadChannelIds: t
      } = (0, I.O4)();
      i.useEffect(() => {
        null != e && t.forEach(e => {
          var t;
          let n = y.Z.getMessages(e),
            r = null == (t = n.last()) ? true : t.id,
            i = O.ZP.ackMessageId(e),
            l = n.hasPresent() && n.ready && !n.cached;
          null != r && null != i && l && v.default.compare(i, r) >= 0 && f.ack(e, {
            section: R.jXE.NOTIFICATIONS_INBOX,
            object: R.qAy.ACK_INBOX_CHANNEL_NO_MESSAGES,
            objectType: R.AnalyticsObjectTypes.ACK_AUTOMATIC
          }, true)
        })
      }, [e, t])
    }(B ? D : null);
  let K = (0, s.Wu)([m.Z], () => m.Z.getSavedMessages()),
    Y = i.useMemo(() => K.flatMap(e => {
      var t;
      let {
        message: n
      } = e;
      return null == n ? k : [{
        id: n.id,
        channelId: n.channel_id,
        guildId: null == (t = b.Z.getBasicChannel(n.channel_id)) ? true : t.guild_id,
        kind: A.fL.BOOKMARK,
        message: n
      }]
    }), [K]),
    q = F(Z, c, P),
    Q = F(D, c, null);
  (0, h.ZP)(() => {
    var e;
    d.Z.dispatch({
      type: "NOTIFICATIONS_INBOX_OPEN"
    });
    let t = (0, j.Ag)({
        location: "NotificationsInboxSidebar"
      }).notificationCenterVariant,
      n = null == (e = S.Z.getDevOverrides().navOnClick) || e;
    if (t !== j.jP.SIDEBAR || false === n) return;
    let {
      message: r,
      isUnread: i
    } = function(e, t) {
      var n, r, i;
      let l = null == (n = e[e.length - 1]) ? true : n.message,
        o = null == (r = t[t.length - 1]) ? true : r.message,
        a = null != o ? o : l;
      if (null != a) return {
        message: a,
        isUnread: null != o
      };
      let s = S.Z.getNotifyingChannelIds();
      if (null == s || 0 === s.length) return {
        message: null,
        isUnread: false
      };
      let c = s[0],
        u = O.ZP.getTrackedAckMessageId(c);
      return null == u ? {
        message: null,
        isUnread: false
      } : {
        message: {
          id: v.default.atNextMillisecond(u),
          channel_id: c
        },
        isUnread: null != (i = O.ZP.hasUnread(c)) && i
      }
    }(q, Q);
    null != r && x.Z.inboxItemClick({
      message: r,
      channel: {
        id: r.channel_id
      },
      isUnread: i,
      isSidebar: true,
      track: false,
      viewId: a
    })
  }), (0, h.zq)(() => {
    d.Z.dispatch({
      type: "NOTIFICATIONS_INBOX_CLOSE"
    })
  });
  let {
    filterStyle: X
  } = (0, j.pN)({
    location: "NotificationsInboxSidebar"
  }), J = (0, g._k)({
    location: "NotificationsInboxSidebar"
  }), $ = X === j.v8.DROPDOWN && c !== A.V5.ALL, ee = (0, A.H_)(c);
  return (0, r.jsx)("nav", {
    className: o()(L.container, {
      [L.panelSpacing]: l
    }),
    children: (0, r.jsxs)(u.y5t, {
      forceLevel: 1,
      component: (0, r.jsx)(p.ZP, (t = M({
        hasSubheader: true,
        guild: ee
      }, G), n = n = {
        children: (0, r.jsx)(u.Kqy, {
          direction: "horizontal",
          gap: 4,
          style: {
            marginRight: false
          },
          children: X === j.v8.DROPDOWN && !J.isGuildEntrypointEnabled && (0, r.jsx)(w.p, {})
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t)),
      children: [c === A.V5.ALL && (0, r.jsx)(z, {
        hideBanner: !B || c !== A.V5.ALL
      }), $ && (0, r.jsx)(u.LZC, {
        size: 8
      }), (0, r.jsx)(T.Z, {
        className: L.messageList,
        renderMessageGroup: H,
        messages: c === A.V5.BOOKMARKS ? Y : q,
        unreadMessages: c === A.V5.BOOKMARKS ? [] : Q,
        listName: "notifications-inbox",
        renderLoadingState: V,
        ignoreGrouping: c === A.V5.BOOKMARKS,
        loadMore: U
      })]
    })
  })
}

function B(e) {
  return (0, r.jsx)(C.HP, {
    children: (0, r.jsx)(U, M({}, e))
  })
}

function F(e, t, n) {
  return i.useMemo(() => 0 === e.length || t === A.V5.BOOKMARKS ? k : e.filter(e => {
    let {
      id: r
    } = e;
    return !(v.default.age(r) > A.ib || null != n && 0 >= v.default.compare(r, n)) && t === A.V5.ALL
  }), [e, t, n])
}

function V() {
  return (0, Chunk54381.jsx)(Chunk862149.Z, {})
}

function H(e, t) {
  return (0, r.jsx)(Z.Z, {
    message: e[0],
    groupedMessages: e.slice(1),
    isUnread: t
  }, e[0].id)
}

function z(e) {
  let {
    hideBanner: t
  } = e, n = (0, P.d)(e => e.shouldHide());
  return (0, r.jsx)("div", {
    className: o()(L.caughtUpContainer, {
      [L.hide]: n || t
    }),
    children: (0, r.jsxs)("div", {
      className: L.caughtUpContent,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "text-feedback-positive",
        className: L.caughtUpText,
        children: D.intl.string(D.t["6XMM+D"])
      }), (0, r.jsx)(u.W6s, {
        size: "sm",
        color: c.Z.colors.TEXT_FEEDBACK_POSITIVE.css
      })]
    })
  })
}
/** Chunk was on 34779 **/
/** chunk id: 82409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G
}), require("./361932.js"), require("./187205.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45114 = require("./45114.js"),
  Chunk493773 = require("./493773.js");
require("./100527.js"), require("./906732.jsx");
var Chunk377171 = require("./377171.js"),
  Chunk315174 = require("./315174.jsx"),
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
  Chunk21678 = require("./21678.js");

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
let k = {
  controller: new Chunk126663.Controller({
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
  } = e, s = (0, E.fJ)(), {
    selectedFilter: p
  } = (0, S.Z)(), P = (0, a.e7)([x.Z], () => x.Z.oldestDisplayedMessageId), N = (0, a.Wu)([x.Z], () => x.Z.getInboxMessages()), w = (0, a.Wu)([y.ZP, O.Z, x.Z], () => N.filter(e => !(0, I.YH)({
    messageId: e.id,
    channelId: e.channelId,
    guildId: e.guildId,
    ReadStateStore_: y.ZP,
    GuildStore_: O.Z
  }) && C.default.compare(e.id, P) > 0 && !(0, I.Tj)(e, x.Z.selectedItemInfo))), D = (0, a.Wu)([y.ZP, O.Z, x.Z], () => N.filter(e => (0, I.YH)({
    messageId: e.id,
    channelId: e.channelId,
    guildId: e.guildId,
    ReadStateStore_: y.ZP,
    GuildStore_: O.Z
  }) || (0, I.Tj)(e, x.Z.selectedItemInfo))), U = i.useCallback(e => {
    p !== A.V5.BOOKMARKS && j.Z.loadMoreInbox({
      viewId: s,
      loadingTrigger: e
    })
  }, [p, s]), {
    hasLoadedEver: G,
    canLoadMore: W
  } = (0, a.cj)([x.Z], () => ({
    hasLoadedEver: x.Z.hasLoadedEver,
    canLoadMore: x.Z.canLoadMore({})
  }));
  i.useEffect(() => {
      W && !G && U(A.X.ON_OPEN)
    }, [W, G, U]),
    function(e) {
      let {
        unreadChannelIds: t
      } = (0, I.O4)();
      i.useEffect(() => {
        null != e && t.forEach(e => {
          var t;
          let n = _.Z.getMessages(e),
            r = null == (t = n.last()) ? true : t.id,
            i = y.ZP.ackMessageId(e);
          null != r && null != i && n.hasPresent() && C.default.compare(i, r) >= 0 && d.In(e, {
            section: R.jXE.NOTIFICATIONS_INBOX,
            object: R.qAy.ACK_INBOX_CHANNEL_NO_MESSAGES,
            objectType: R.Qqv.ACK_AUTOMATIC
          }, true)
        })
      }, [e, t])
    }(G ? D : null);
  let K = (0, a.Wu)([m.Z], () => m.Z.getSavedMessages()),
    Y = i.useMemo(() => K.flatMap(e => {
      var t;
      let {
        message: n
      } = e;
      return null == n ? [] : [{
        id: n.id,
        channelId: n.channel_id,
        guildId: null == (t = b.Z.getBasicChannel(n.channel_id)) ? true : t.guild_id,
        kind: A.fL.BOOKMARK,
        message: n
      }]
    }), [K]),
    q = B(w, p),
    X = B(D, p);
  (0, h.ZP)(() => {
    var e;
    u.Z.dispatch({
      type: "NOTIFICATIONS_INBOX_OPEN"
    });
    let t = (0, v.Ag)({
        location: "NotificationsInboxSidebar"
      }).notificationCenterVariant,
      n = null == (e = x.Z.getDevOverrides().navOnClick) || e;
    if (t !== v.jP.SIDEBAR || false === n) return;
    let {
      message: r,
      isUnread: i
    } = function(e, t) {
      var n, r, i;
      let l = null == (n = e[e.length - 1]) ? true : n.message,
        o = null == (r = t[t.length - 1]) ? true : r.message,
        s = null != o ? o : l;
      if (null != s) return {
        message: s,
        isUnread: null != o
      };
      let a = x.Z.getNotifyingChannelIds();
      if (null == a || 0 === a.length) return {
        message: null,
        isUnread: false
      };
      let c = a[0],
        u = y.ZP.getTrackedAckMessageId(c);
      return null == u ? {
        message: null,
        isUnread: false
      } : {
        message: {
          id: C.default.atNextMillisecond(u),
          channel_id: c
        },
        isUnread: null != (i = y.ZP.hasUnread(c)) && i
      }
    }(q, X);
    null != r && j.Z.inboxItemClick({
      message: r,
      channel: {
        id: r.channel_id
      },
      isUnread: i,
      isSidebar: true,
      track: false,
      viewId: s
    })
  }), (0, h.zq)(() => {
    u.Z.dispatch({
      type: "NOTIFICATIONS_INBOX_CLOSE"
    })
  });
  let {
    filterStyle: Q
  } = (0, v.pN)({
    location: "NotificationsInboxSidebar"
  }), {
    entrypoints: J
  } = (0, g._k)({
    location: "NotificationsInboxSidebar"
  }), $ = Q === v.v8.DROPDOWN && p !== A.V5.ALL, ee = (0, A.H_)();
  return (0, r.jsx)("nav", {
    className: o()(L.container, {
      [L.panelSpacing]: l
    }),
    children: (0, r.jsxs)(c.y5t, {
      forceLevel: 1,
      component: (0, r.jsx)(f.ZP, (t = M({
        hasSubheader: true,
        guild: ee
      }, k), n = n = {
        children: (0, r.jsx)(c.Kqy, {
          direction: "horizontal",
          gap: 4,
          style: {
            marginRight: false
          },
          children: Q === v.v8.DROPDOWN && !J && (0, r.jsx)(Z.p, {})
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
      children: [Q === v.v8.TABS && (0, r.jsx)(Z.Z, {}), p === A.V5.ALL && (0, r.jsx)(H, {
        hideBanner: !G || p !== A.V5.ALL
      }), $ && (0, r.jsx)(z, {
        filter: p
      }), (0, r.jsx)(T.Z, {
        className: L.messageList,
        renderMessageGroup: F,
        messages: p === A.V5.BOOKMARKS ? Y : q,
        unreadMessages: p === A.V5.BOOKMARKS ? [] : X,
        listName: "notifications-inbox",
        renderLoadingState: V,
        ignoreGrouping: p === A.V5.BOOKMARKS,
        loadMore: U
      })]
    })
  })
}

function G(e) {
  return (0, r.jsx)(E.HP, {
    children: (0, r.jsx)(U, M({}, e))
  })
}

function B(e, t) {
  return i.useMemo(() => 0 === e.length ? [] : e.filter(e => {
    let {
      id: n,
      channelId: r,
      kind: i
    } = e;
    if (C.default.age(n) > A.ib) returnfalse;
    if (t === A.V5.ALL) returntrue;
    if (t === A.V5.MENTIONS) return i === A.fL.MENTION;
    if (t === A.V5.ANNOUNCEMENTS) {
      let e = b.Z.getBasicChannel(r);
      return (null == e ? true : e.type) === R.d4z.GUILD_ANNOUNCEMENT
    }
    returnfalse
  }), [e, t])
}

function V() {
  return (0, Chunk255367.jsx)(Chunk862149.Z, {})
}

function F(e, t) {
  return (0, r.jsx)(w.Z, {
    message: e[0],
    groupedMessages: e.slice(1),
    isUnread: t
  }, e[0].id)
}

function H(e) {
  let {
    hideBanner: t
  } = e, n = (0, P.d)(e => e.shouldHide());
  return (0, r.jsx)("div", {
    className: o()(L.caughtUpContainer, {
      [L.hide]: n || t
    }),
    children: (0, r.jsxs)("div", {
      className: L.caughtUpContent,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-feedback-positive",
        className: L.caughtUpText,
        children: D.intl.string(D.t["6XMM+P"])
      }), (0, r.jsx)(c.W6s, {
        size: "sm",
        color: p.Z.TEXT_FEEDBACK_POSITIVE
      })]
    })
  })
}

function z(e) {
  let {
    filter: t
  } = e, n = (0, A.NV)();
  return (0, r.jsx)(c.X6q, {
    color: "text-primary",
    variant: "text-sm/semibold",
    className: L.filterHeaderWrap,
    children: n[t]
  }, "filter-header")
}
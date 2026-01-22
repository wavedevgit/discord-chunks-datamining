/** Chunk was on 97492 **/
/** chunk id: 480680, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => U
}), require("./114821.js"), require("./339614.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js");
require("./990078.jsx");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk334738 = require("./334738.js"),
  Chunk964486 = require("./964486.js");
require("./793574.js"), require("./688810.jsx");
var Chunk952790 = require("./952790.jsx"),
  Chunk85109 = require("./85109.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk320501 = require("./320501.js"),
  Chunk222823 = require("./222823.js"),
  Chunk661191 = require("./661191.js"),
  Chunk851109 = require("./851109.js"),
  Chunk706341 = require("./706341.js"),
  Chunk932883 = require("./932883.jsx"),
  Chunk599486 = require("./599486.js"),
  Chunk320697 = require("./320697.js"),
  Chunk394953 = require("./394953.js"),
  Chunk628325 = require("./628325.js"),
  Chunk524628 = require("./524628.jsx"),
  Chunk81435 = require("./81435.jsx"),
  Chunk313452 = require("./313452.jsx"),
  Chunk849077 = require("./849077.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk760362 = require("./760362.js");

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
let L = [],
  G = {
    controller: new Chunk108531.Controller({
      value: 1,
      immediate: true
    }),
    renderBanner: false,
    bannerVisible: false,
    communityInfoVisible: false,
    shouldShowSubscribeTooltip: false,
    bannerVisibleHeight: Chunk849077.Sp,
    hasGuildSubheader: false,
    disableBannerAnimation: true
  };

function k(e) {
  let {
    includePanelSpacing: t
  } = e, n = (0, x.op)(), {
    selectedFilter: i
  } = (0, E.A)(), s = (0, o.bG)([_.A], () => _.A.oldestDisplayedMessageId), c = (0, o.yK)([_.A], () => _.A.getInboxMessages()), S = (0, o.yK)([y.Ay, m.A, _.A], () => c.filter(e => !(0, C.EJ)({
    messageId: e.id,
    channelId: e.channelId,
    guildId: e.guildId,
    ReadStateStore_: y.Ay,
    GuildStore_: m.A
  }) && !(0, C.zo)(e, _.A.selectedItemInfo))), I = (0, o.yK)([y.Ay, m.A, _.A], () => c.filter(e => (0, C.EJ)({
    messageId: e.id,
    channelId: e.channelId,
    guildId: e.guildId,
    ReadStateStore_: y.Ay,
    GuildStore_: m.A
  }) || (0, C.zo)(e, _.A.selectedItemInfo))), N = l.useCallback(e => {
    i !== P.Io.BOOKMARKS && v.A.loadMoreInbox({
      viewId: n,
      loadingTrigger: e
    })
  }, [i, n]), {
    hasLoadedEver: R,
    canLoadMore: k
  } = (0, o.cf)([_.A], () => ({
    hasLoadedEver: _.A.hasLoadedEver,
    canLoadMore: _.A.canLoadMore({})
  }));
  l.useEffect(() => {
      k && !R && N(P.VA.ON_OPEN)
    }, [k, R, N]),
    function(e) {
      let {
        unreadChannelIds: t
      } = (0, C.U4)();
      l.useEffect(() => {
        null != e && t.forEach(e => {
          var t;
          let n = A.A.getMessages(e),
            r = null == (t = n.last()) ? true : t.id,
            l = y.Ay.ackMessageId(e),
            i = n.hasPresent() && n.ready && !n.cached;
          null != r && null != l && i && O.default.compare(l, r) >= 0 && f.ack(e, {
            section: w.JJy.NOTIFICATIONS_INBOX,
            object: w.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
            objectType: w.AnalyticsObjectTypes.ACK_AUTOMATIC
          }, true)
        })
      }, [e, t])
    }(R ? I : null);
  let U = (0, o.yK)([b.A], () => b.A.getSavedMessages()),
    K = l.useMemo(() => U.flatMap(e => {
      var t;
      let {
        message: n
      } = e;
      return null == n ? L : [{
        id: n.id,
        channelId: n.channel_id,
        guildId: null == (t = g.A.getBasicChannel(n.channel_id)) ? true : t.guild_id,
        kind: P.yL.BOOKMARK,
        message: n
      }]
    }), [U]),
    W = V(S, i, s),
    z = V(I, i, null);
  (0, p.Ay)(() => {
    var e;
    d.h.dispatch({
      type: "NOTIFICATIONS_INBOX_OPEN"
    });
    let t = (0, j.GE)({
        location: "NotificationsInboxSidebar"
      }).notificationCenterVariant,
      r = null == (e = _.A.getDevOverrides().navOnClick) || e;
    if (t !== j.U5.SIDEBAR || false === r) return;
    let {
      message: l,
      isUnread: i
    } = function(e, t) {
      var n, r, l;
      let i = null == (r = e[e.length - 1]) ? true : r.message,
        a = null == (l = t[t.length - 1]) ? true : l.message,
        s = null != a ? a : i;
      if (null != s) return {
        message: s,
        isUnread: null != a
      };
      let o = _.A.getNotifyingChannelIds();
      if (null == o || 0 === o.length) return {
        message: null,
        isUnread: false
      };
      let c = o[0],
        u = y.Ay.getTrackedAckMessageId(c);
      return null == u ? {
        message: null,
        isUnread: false
      } : {
        message: {
          id: O.default.atNextMillisecond(u),
          channel_id: c
        },
        isUnread: null != (n = y.Ay.hasUnread(c)) && n
      }
    }(W, z);
    null != l && v.A.inboxItemClick({
      message: l,
      channel: {
        id: l.channel_id
      },
      isUnread: i,
      isSidebar: true,
      track: false,
      viewId: n
    })
  }), (0, p.l0)(() => {
    d.h.dispatch({
      type: "NOTIFICATIONS_INBOX_CLOSE"
    })
  });
  let {
    filterStyle: Y
  } = (0, j.X8)({
    location: "NotificationsInboxSidebar"
  }), q = Y === j.yF.DROPDOWN && i !== P.Io.ALL, X = (0, P.Yw)(i);
  return (0, r.jsx)("nav", {
    className: a()(D.kL, {
      [D.Yu]: t
    }),
    children: (0, r.jsxs)(u.Fmo, {
      forceLevel: 1,
      component: (0, r.jsx)(h.Ay, M({
        hasSubheader: true,
        guild: X
      }, G)),
      children: [i === P.Io.ALL && (0, r.jsx)(B, {
        hideBanner: !R || i !== P.Io.ALL
      }), q && (0, r.jsx)(u.hKd, {
        size: 8
      }), (0, r.jsx)(T.A, {
        className: D.cl,
        renderMessageGroup: H,
        messages: i === P.Io.BOOKMARKS ? K : W,
        unreadMessages: i === P.Io.BOOKMARKS ? [] : z,
        listName: "notifications-inbox",
        renderLoadingState: F,
        ignoreGrouping: i === P.Io.BOOKMARKS,
        loadMore: N
      })]
    })
  })
}

function U(e) {
  return (0, r.jsx)(x.GM, {
    children: (0, r.jsx)(k, M({}, e))
  })
}

function V(e, t, n) {
  return l.useMemo(() => 0 === e.length || t === P.Io.BOOKMARKS ? L : e.filter(e => {
    let {
      id: r
    } = e;
    return !(O.default.age(r) > P.V$ || null != n && 0 >= O.default.compare(r, n)) && t === P.Io.ALL
  }), [e, t, n])
}

function F() {
  return (0, r.jsx)(I.A, {})
}

function H(e, t) {
  return (0, r.jsx)(N.A, {
    message: e[0],
    groupedMessages: e.slice(1),
    isUnread: t
  }, e[0].id)
}

function B(e) {
  let {
    hideBanner: t
  } = e, n = (0, S.S)(e => e.shouldHide());
  return (0, r.jsx)("div", {
    className: a()(D.dl, {
      [D.jD]: n || t
    }),
    children: (0, r.jsxs)("div", {
      className: D.XD,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "text-feedback-positive",
        className: D.vi,
        children: R.intl.string(R.t["6XMM+D"])
      }), (0, r.jsx)(u.iA$, {
        size: "sm",
        color: c.A.colors.TEXT_FEEDBACK_POSITIVE.css
      })]
    })
  })
}
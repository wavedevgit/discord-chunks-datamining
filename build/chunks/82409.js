/** Chunk was on 61717 **/
n.d(t, {
  Z: () => T
}), n(388685), n(361932), n(187205), n(415506);
var r = n(255367),
  i = n(73800),
  l = n(120356),
  o = n.n(l),
  s = n(392711),
  a = n(386230),
  c = n(442837),
  u = n(481060),
  d = n(235820),
  h = n(100527),
  p = n(906732),
  f = n(377171),
  g = n(315174),
  m = n(455199),
  b = n(768943),
  y = n(592125),
  O = n(594174),
  v = n(709054),
  _ = n(821020),
  C = n(370774),
  j = n(739340),
  S = n(207913),
  x = n(553984),
  E = n(333834),
  P = n(982183),
  I = n(981631),
  w = n(388032),
  N = n(21678);
let Z = {
  controller: new a.Controller({
    value: 1,
    immediate: !0
  }),
  renderBanner: !1,
  bannerVisible: !1,
  communityInfoVisible: !1,
  shouldShowSubscribeTooltip: !1,
  bannerVisibleHeight: P.$J,
  hasGuildSubheader: !1,
  disableBannerAnimation: !0
};

function T(e) {
  var t, n;
  let {
    includePanelSpacing: l
  } = e, {
    messages: a,
    hasMore: d,
    loading: h,
    hasLoadedEver: p
  } = (0, c.cj)([m.Z], () => ({
    messages: m.Z.getMentions(),
    hasMore: m.Z.hasMore,
    loading: m.Z.loading,
    hasLoadedEver: m.Z.hasLoadedEver,
    guildFilter: m.Z.guildFilter,
    roleFilter: m.Z.roleFilter,
    everyoneFilter: m.Z.everyoneFilter
  })), [f, C] = i.useState(P.V5.ALL), [S, w] = i.useState(P.xM.UNREAD), {
    messages: T,
    loadState: k,
    loadMore: U,
    hasLoadedEver: G
  } = (0, j.ZP)();
  (0, i.useEffect)(() => {
    if (!p) return void A(null)
  }, [p]);
  let B = (0, c.e7)([O.default], () => O.default.getCurrentUser()),
    V = (0, c.e7)([b.Z], () => b.Z.getSavedMessages()),
    H = i.useMemo(() => {
      var e;
      if (!G) return null;
      if (f === P.V5.BOOKMARKS) return V.flatMap(e => {
        let {
          message: t
        } = e;
        return null != t ? [{
          kind: P.fL.BOOKMARK,
          message: t
        }] : []
      });
      let t = (0, s.uniqBy)([...null != (e = null == a ? void 0 : a.map(e => ({
        kind: P.fL.MENTION,
        message: e
      }))) ? e : [], ...T.filter(e => e.author.id !== (null == B ? void 0 : B.id)).map(e => ({
        message: e,
        kind: P.fL.ALL_MESSAGES_CHANNEL
      }))], e => {
        let {
          message: t
        } = e;
        return t.id
      }).filter(e => {
        let {
          message: t
        } = e;
        return t.author.id !== (null == B ? void 0 : B.id) && v.default.age(t.id) < P.ib
      });
      if (f === P.V5.ALL) return t;
      if (f === P.V5.ANNOUNCEMENTS) return null == t ? void 0 : t.filter(e => {
        let {
          message: t
        } = e, n = y.Z.getChannel(t.channel_id);
        return (null == n ? void 0 : n.type) === I.d4z.GUILD_ANNOUNCEMENT
      });
      if (f === P.V5.MENTIONS) return null == t ? void 0 : t.filter(e => {
        let {
          message: t
        } = e;
        return (null == B ? void 0 : B.id) != null && t.mentioned && t.mentions.includes(null == B ? void 0 : B.id)
      });
      throw Error("Unknown filter: ".concat(f))
    }, [f, a, B, V, T, G]),
    F = S === P.xM.READ && !h && G,
    {
      notificationCenterVariant: z
    } = _.L.useExperiment({
      location: "NotificationsInboxSidebar"
    }),
    W = "sidebar" === z && f !== P.V5.ALL;
  return (0, r.jsxs)("nav", {
    className: o()(N.container, {
      [N.panelSpacing]: l
    }),
    children: [(0, r.jsx)(g.ZP, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r
        })
      }
      return e
    }({
      hasSubheader: !0,
      guild: P.F7
    }, Z), n = n = {
      children: (0, r.jsxs)(u.Kqy, {
        direction: "horizontal",
        gap: 4,
        children: ["sidebar" === z && (0, r.jsx)(x.p, {
          selectedFilter: f,
          setSelectedFilter: C,
          className: N.headerButton
        }), (0, r.jsx)(M, {})]
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
    }), t)), "popout" === z && (0, r.jsx)(x.Z, {
      selectedFilter: f,
      setSelectedFilter: C
    }), f === P.V5.ALL && (0, r.jsx)(D, {
      canShow: F
    }), W && (0, r.jsx)(L, {
      filter: f
    }), (0, r.jsx)(E.Z, {
      className: N.messageList,
      renderMessageGroup: R,
      messages: H,
      loading: h || k === j.jd.Loading,
      listName: "notifications-inbox",
      loadMore: function(e) {
        let t = null != a && a.length > 0 ? a[a.length - 1].id : null;
        d && !h && A(null, t), k !== j.jd.Done && k !== j.jd.Loading && U(e)
      },
      setInboxReadState: w,
      ignoreGrouping: f !== P.V5.ALL
    })]
  })
}

function A(e, t) {
  let n = m.Z.guildFilter,
    r = m.Z.roleFilter,
    i = m.Z.everyoneFilter,
    l = null;
  null != e && null != n && (l = n === I.NgX.ALL_SERVERS ? null : e.getGuildId()), d.Z.fetchRecentMentions(t, I.DJj, l, r, i)
}

function R(e, t, n) {
  return (0, r.jsx)(S.Z, {
    message: e[0],
    goToSidebar: t,
    groupedMessages: e.slice(1),
    isUnread: n
  }, e[0].id)
}

function D(e) {
  let {
    canShow: t
  } = e, [n, l] = i.useState(!1), [s, a] = i.useState(!1), c = s ? u.kSu : u.kmB;
  return (0, r.jsx)(u.P3F, {
    onClick: () => l(!0),
    onMouseEnter: () => a(!0),
    onMouseLeave: () => a(!1),
    className: o()(N.caughtUpContainer, {
      [N.hide]: !(!n && t)
    }),
    children: (0, r.jsxs)("div", {
      className: N.caughtUpContent,
      children: [(0, r.jsx)(u.Text, {
        variant: s ? "text-sm/medium" : "text-sm/normal",
        color: "text-positive",
        className: N.caughtUpText,
        children: w.intl.string(w.t["6XMM+P"])
      }), (0, r.jsx)(c, {
        size: "sm",
        className: N.caughtUpIcon,
        color: f.Z.TEXT_POSITIVE
      })]
    })
  })
}

function L(e) {
  let {
    filter: t
  } = e;
  return (0, r.jsx)(u.X6q, {
    color: "text-primary",
    variant: "text-sm/semibold",
    className: N.filterHeaderWrap,
    children: P.by[t]
  }, "filter-header")
}

function M() {
  let [e, t] = (0, i.useState)(!1), {
    analyticsLocations: n
  } = (0, p.ZP)(h.Z.NOTIFICATIONS_INBOX);
  return (0, r.jsx)(u.ua7, {
    position: "bottom",
    align: "left",
    text: w.intl.string(w.t.h850Sk),
    shouldShow: e,
    forceOpen: e,
    hideOnClick: !0,
    children: i => {
      let {
        onClick: l
      } = i;
      return (0, r.jsx)(u.P3F, {
        className: N.headerButton,
        onMouseEnter: () => t(!0),
        onMouseLeave: () => t(!1),
        onClick: () => {
          (0, C.j4)(n), null == l || l()
        },
        children: (0, r.jsx)(u.ewm, {
          size: "xs",
          color: e ? f.Z.INTERACTIVE_HOVER : f.Z.INTERACTIVE_NORMAL
        })
      })
    }
  })
}
/** Chunk was on 75293 **/
n.d(t, {
  Z: () => S
}), n(388685), n(642613), n(415506);
var r = n(255367),
  i = n(73800),
  l = n(120356),
  o = n.n(l),
  s = n(392711),
  a = n(714673),
  c = n(442837),
  u = n(481060),
  d = n(235820),
  h = n(315174),
  p = n(455199),
  f = n(592125),
  g = n(594174),
  m = n(709054),
  b = n(207913),
  y = n(553984),
  O = n(333834),
  v = n(982183),
  _ = n(981631),
  C = n(21678);
let j = {
  controller: new a.Controller({
    value: 1,
    immediate: !0
  }),
  renderBanner: !1,
  bannerVisible: !1,
  communityInfoVisible: !1,
  shouldShowSubscribeTooltip: !1,
  bannerVisibleHeight: v.$J,
  hasGuildSubheader: !1,
  disableBannerAnimation: !0
};

function S(e) {
  let {
    includePanelSpacing: t
  } = e, {
    messages: n,
    hasMore: l,
    loading: a,
    hasLoadedEver: u
  } = (0, c.cj)([p.Z], () => ({
    messages: p.Z.getMentions(),
    hasMore: p.Z.hasMore,
    loading: p.Z.loading,
    hasLoadedEver: p.Z.hasLoadedEver,
    guildFilter: p.Z.guildFilter,
    roleFilter: p.Z.roleFilter,
    everyoneFilter: p.Z.everyoneFilter
  })), [d, b] = i.useState(v.V5.ALL);
  (0, i.useEffect)(() => {
    if (!u) return void E(null)
  }, [u]);
  let S = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
    I = i.useMemo(() => {
      let e = (0, s.uniqBy)([...null != n ? n : []].sort((e, t) => m.default.compare(t.id, e.id)), "id");
      if (d === v.V5.ALL) return e;
      if (d === v.V5.ANNOUNCEMENTS) return null == e ? void 0 : e.filter(e => {
        let t = f.Z.getChannel(e.channel_id);
        return (null == t ? void 0 : t.type) === _.d4z.GUILD_ANNOUNCEMENT
      });
      if (d === v.V5.MENTIONS) return null == e ? void 0 : e.filter(e => (null == S ? void 0 : S.id) != null && e.mentioned && e.mentions.includes(null == S ? void 0 : S.id));
      throw Error("Unknown filter: ".concat(d))
    }, [d, n, S]);
  return (0, r.jsxs)("nav", {
    className: o()(C.container, {
      [C.panelSpacing]: t
    }),
    children: [(0, r.jsx)(h.ZP, function(e) {
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
      guild: v.F7
    }, j)), (0, r.jsx)(y.Z, {
      selectedFilter: d,
      setSelectedFilter: b
    }), (0, r.jsx)(O.ZP, {
      className: C.messageList,
      renderMessage: P,
      messages: I,
      loading: a,
      hasMore: l,
      analyticsName: "Notifications Inbox",
      channel: null,
      listName: "notifications-inbox",
      loadMore: function() {
        E(null, null != n && n.length > 0 ? n[n.length - 1].id : null)
      },
      renderEmptyState: x
    })]
  })
}

function E(e, t) {
  let n = p.Z.guildFilter,
    r = p.Z.roleFilter,
    i = p.Z.everyoneFilter,
    l = null;
  null != e && null != n && (l = n === _.NgX.ALL_SERVERS ? null : e.getGuildId()), d.Z.fetchRecentMentions(t, _.DJj, l, r, i)
}

function x() {
  return (0, r.jsx)(u.LZC, {
    size: 16
  })
}

function P(e, t) {
  return (0, r.jsx)(b.B, {
    message: e,
    goToSidebar: t
  }, e.id)
}
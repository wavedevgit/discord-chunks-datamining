/** Chunk was on 83379 **/
n.d(t, {
  Z: () => w
});
var r = n(200651),
  i = n(192379),
  a = n(120356),
  o = n.n(a),
  l = n(442837),
  s = n(524437),
  c = n(481060),
  u = n(235820),
  d = n(494404),
  p = n(493773),
  m = n(110924),
  f = n(198620),
  h = n(294218),
  g = n(216789),
  _ = n(695346),
  b = n(592125),
  v = n(731290),
  x = n(944486),
  y = n(455199),
  E = n(655354),
  O = n(999671),
  N = n(324081),
  j = n(240126),
  C = n(791914),
  I = n(981631),
  S = n(388032),
  T = n(199225);
let P = {
  offset: {
    left: 4,
    right: -12
  }
};

function A(e, t, n) {
  let r = t ? y.Z.guildFilter : null,
    i = t ? y.Z.roleFilter : null,
    a = t ? y.Z.everyoneFilter : null,
    o = null;
  null != e && null != r && (o = r === I.NgX.ALL_SERVERS ? null : e.getGuildId()), u.Z.fetchRecentMentions(n, I.DJj, o, i, a)
}

function w(e) {
  let {
    setTab: t,
    onJump: n,
    badgeState: a,
    closePopout: c
  } = e, h = (0, l.e7)([b.Z, x.Z], () => b.Z.getChannel(x.Z.getChannelId())), {
    messages: _,
    hasMore: v,
    loading: E,
    guildFilter: N,
    roleFilter: j,
    everyoneFilter: P
  } = (0, l.cj)([y.Z], () => ({
    messages: y.Z.getMentions(),
    hasMore: y.Z.hasMore,
    loading: y.Z.loading,
    guildFilter: y.Z.guildFilter,
    roleFilter: y.Z.roleFilter,
    everyoneFilter: y.Z.everyoneFilter
  })), w = (0, g.Us)({
    location: "RecentMentions"
  }), k = (0, m.Z)(N), D = (0, m.Z)(j), L = (0, m.Z)(P);
  i.useEffect(() => {
    if (!y.Z.hasLoadedEver) {
      A(h, !0);
      return
    }(null != k && N !== k || null != D && j !== D || null != L && P !== L) && A(h, !0)
  }, [k, N, D, j, L, P, h, !0]), (0, p.ZP)(() => {
    (null == _ ? void 0 : _.some(f.k5)) && (u.Z.clearMentions(), A(h, !0))
  }), i.useEffect(() => () => {
    u.Z.truncateMentions(I.DJj)
  }, []);
  let M = i.useCallback(() => (0, r.jsx)(C.Z, {
    tab: s.X.MENTIONS,
    setTab: t,
    badgeState: a,
    closePopout: c,
    children: (0, r.jsx)(O.Z, {})
  }), [!0, t, a, c]);
  return (0, r.jsx)(d.ZP, {
    className: o()(T.recentMentionsPopout, {
      [T.widerInbox]: w
    }),
    scrollerClassName: T.scroller,
    onFetch: () => null,
    onJump: n,
    onCloseMessage: function(e) {
      u.Z.deleteRecentMention(e.id)
    },
    channel: h,
    messages: _,
    loading: E,
    hasMore: v,
    analyticsName: "Recent Mentions",
    loadMore: function() {
      A(h, !0, null != _ && _.length > 0 ? _[_.length - 1].id : null)
    },
    canCloseAllMessages: !0,
    renderHeader: M,
    renderEmptyState: R,
    renderMessage: Z,
    "aria-label": S.NW.string(S.t.jbV6MD),
    listName: "recents"
  })
}

function Z(e, t) {
  return [(0, r.jsx)(k, {
    message: e,
    gotoMessage: t,
    dismissible: !0
  }, e.id)]
}

function k(e) {
  let {
    message: t,
    gotoMessage: n,
    dismissible: i
  } = e;
  if (null == t) return null;
  let a = b.Z.getChannel(t.channel_id);
  if (null == a) return null;
  let o = v.Z.didAgree(a.getGuildId()),
    l = !!a.isNSFW() && !o;
  return (0, r.jsxs)("div", {
    className: T.container,
    children: [(0, r.jsx)(N.Z, {
      channel: a,
      gotoChannel: n,
      children: null != i ? (0, r.jsx)(c.M0o, {
        className: T.closeButton,
        tooltip: S.NW.string(S.t.cpT0Cg),
        color: c.YX$.TERTIARY,
        icon: (0, r.jsx)(c.Dio, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: () => u.Z.deleteRecentMention(t.id)
      }) : null
    }), (0, r.jsxs)("div", {
      className: T.messageContainer,
      children: [(0, r.jsx)(E.Z, {
        className: T.jumpMessageButton,
        onJump: n
      }), (0, r.jsx)(h.Z, {
        message: t,
        channel: a,
        className: T.message,
        hideAccessories: l,
        compact: _.jU.getSetting(),
        animateAvatar: !1,
        focusProps: P,
        trackAnnouncementViews: !0
      }, t.id)]
    })]
  })
}

function R(e) {
  return (0, r.jsx)(j.Z, {
    Icon: c.lOy,
    header: S.NW.string(S.t["bgDz7+"]),
    tip: S.NW.string(S.t.NS15vr)
  })
}
/** Chunk was on 11160 **/
/** chunk id: 903672, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk235820 = require("./235820.js"),
  Chunk494404 = require("./494404.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk110924 = require("./110924.js"),
  Chunk81643 = require("./81643.js"),
  Chunk974814 = require("./974814.js"),
  Chunk622822 = require("./622822.js"),
  Chunk198620 = require("./198620.js"),
  Chunk294218 = require("./294218.jsx"),
  Chunk216789 = require("./216789.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk731290 = require("./731290.js"),
  Chunk944486 = require("./944486.js"),
  Chunk455199 = require("./455199.js"),
  Chunk655354 = require("./655354.jsx"),
  Chunk324081 = require("./324081.jsx"),
  Chunk240126 = require("./240126.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk889833 = require("./889833.js");
let w = {
  offset: {
    left: 4,
    right: false
  }
};

function Z(e, t, n) {
  let r = t ? x.ZP.guildFilter : null,
    i = t ? x.ZP.roleFilter : null,
    l = t ? x.ZP.everyoneFilter : null,
    o = null;
  null != e && null != r && (o = r === P.NgX.ALL_SERVERS ? null : e.getGuildId()), c.Z.fetchRecentMentions({
    before: n,
    limit: P.DJj,
    guildId: o,
    roles: i,
    everyone: l
  })
}

function T(e) {
  let {
    onJump: t
  } = e, n = (0, a.e7)([_.Z, j.Z], () => _.Z.getChannel(j.Z.getChannelId())), {
    messages: l,
    hasMore: s,
    loading: h,
    guildFilter: f,
    roleFilter: g,
    everyoneFilter: b
  } = (0, a.cj)([x.ZP], () => ({
    messages: x.ZP.getMentions(),
    hasMore: x.ZP.hasMore,
    loading: x.ZP.loading,
    guildFilter: x.ZP.guildFilter,
    roleFilter: x.ZP.roleFilter,
    everyoneFilter: x.ZP.everyoneFilter
  })), y = (0, O.Us)({
    location: "RecentMentions"
  }), v = (0, p.Z)(f), C = (0, p.Z)(g), E = (0, p.Z)(b);
  i.useEffect(() => {
    if (!x.ZP.hasLoadedEver) return void Z(n, true);
    (null != v && f !== v || null != C && g !== C || null != E && b !== E) && Z(n, true)
  }, [v, f, C, g, E, b, n, true]), (0, d.ZP)(() => {
    (null == l ? true : l.some(m.k5)) && (c.Z.clearMentions(), Z(n, true))
  }), i.useEffect(() => () => {
    c.Z.truncateMentions(P.DJj)
  }, []);
  let S = i.useCallback(() => null, []);
  return (0, r.jsx)(u.ZP, {
    className: o()(N.recentMentionsPopout, {
      [N.widerInbox]: y
    }),
    scrollerClassName: N.scroller,
    onFetch: () => null,
    onJump: t,
    onCloseMessage: function(e) {
      c.Z.deleteRecentMention(e.id)
    },
    channel: n,
    messages: l,
    loading: h,
    hasMore: s,
    analyticsName: "Recent Mentions",
    loadMore: function() {
      Z(n, true, null != l && l.length > 0 ? l[l.length - 1].id : null)
    },
    canCloseAllMessages: true,
    renderHeader: S,
    renderEmptyState: D,
    renderMessage: A,
    "aria-label": I.intl.string(I.t.jbV6MD),
    listName: "recents"
  })
}

function A(e, t) {
  return [(0, r.jsx)(R, {
    message: e,
    gotoMessage: t,
    dismissible: true
  }, e.id)]
}

function R(e) {
  let {
    message: t,
    gotoMessage: n,
    dismissible: i
  } = e, l = (0, f.s8)({
    location: "recent-mentions"
  });
  if (null == t) return null;
  let o = _.Z.getChannel(t.channel_id);
  if (null == o || (0, g.aC)(o) && l && (0, h.sf)()) return null;
  let a = v.Z.didAgree(o.getGuildId()),
    u = !!(0, g.aC)(o) && !a;
  return (0, r.jsxs)("div", {
    className: N.container,
    children: [(0, r.jsx)(E.Z, {
      channel: o,
      gotoChannel: n,
      children: null != i ? (0, r.jsx)(s.M0o, {
        className: N.closeButton,
        tooltip: I.intl.string(I.t.cpT0Cg),
        color: s.YX$.TERTIARY,
        icon: (0, r.jsx)(s.Dio, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: () => c.Z.deleteRecentMention(t.id)
      }) : null
    }), (0, r.jsxs)("div", {
      className: N.messageContainer,
      children: [(0, r.jsx)(C.Z, {
        className: N.jumpMessageButton,
        onJump: n
      }), (0, r.jsx)(b.Z, {
        message: t,
        channel: o,
        className: N.message,
        hideAccessories: u,
        compact: y.jU.getSetting(),
        animateAvatar: false,
        focusProps: w,
        trackAnnouncementViews: true
      }, t.id)]
    })]
  })
}

function D() {
  return (0, Chunk951288.jsx)(Chunk240126.Z, {
    Icon: Chunk481060.lOy,
    header: Chunk388032.intl.string(Chunk388032.t["bgDz7+"]),
    tip: Chunk388032.intl.string(Chunk388032.t.NS15vr)
  })
}
/** Chunk was on 71832 **/
/** chunk id: 903672, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
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
  Chunk969604 = require("./969604.js");
let I = {
  offset: {
    left: 4,
    right: false
  }
};

function N(e, t, n) {
  let r = t ? v.ZP.guildFilter : null,
    i = t ? v.ZP.roleFilter : null,
    l = t ? v.ZP.everyoneFilter : null,
    o = null;
  null != e && null != r && (o = r === E.NgX.ALL_SERVERS ? null : e.getGuildId()), c.Z.fetchRecentMentions({
    before: n,
    limit: E.DJj,
    guildId: o,
    roles: i,
    everyone: l
  })
}

function Z(e) {
  let {
    onJump: t
  } = e, n = (0, a.e7)([O.Z, _.Z], () => O.Z.getChannel(_.Z.getChannelId())), {
    messages: l,
    hasMore: s,
    loading: f,
    guildFilter: g,
    roleFilter: b,
    everyoneFilter: y
  } = (0, a.cj)([v.ZP], () => ({
    messages: v.ZP.getMentions(),
    hasMore: v.ZP.hasMore,
    loading: v.ZP.loading,
    guildFilter: v.ZP.guildFilter,
    roleFilter: v.ZP.roleFilter,
    everyoneFilter: v.ZP.everyoneFilter
  })), j = (0, m.Us)({
    location: "RecentMentions"
  }), x = (0, p.Z)(g), C = (0, p.Z)(b), I = (0, p.Z)(y);
  i.useEffect(() => {
    if (!v.ZP.hasLoadedEver) return void N(n, true);
    (null != x && g !== x || null != C && b !== C || null != I && y !== I) && N(n, true)
  }, [x, g, C, b, I, y, n, true]), (0, d.ZP)(() => {
    (null == l ? true : l.some(h.k5)) && (c.Z.clearMentions(), N(n, true))
  }), i.useEffect(() => () => {
    c.Z.truncateMentions(E.DJj)
  }, []);
  let Z = i.useCallback(() => null, []);
  return (0, r.jsx)(u.ZP, {
    className: o()(P.recentMentionsPopout, {
      [P.widerInbox]: j
    }),
    scrollerClassName: P.scroller,
    onFetch: () => null,
    onJump: t,
    onCloseMessage: function(e) {
      c.Z.deleteRecentMention(e.id)
    },
    channel: n,
    messages: l,
    loading: f,
    hasMore: s,
    analyticsName: "Recent Mentions",
    loadMore: function() {
      N(n, true, null != l && l.length > 0 ? l[l.length - 1].id : null)
    },
    canCloseAllMessages: true,
    renderHeader: Z,
    renderEmptyState: A,
    renderMessage: w,
    "aria-label": S.intl.string(S.t.jbV6MD),
    listName: "recents"
  })
}

function w(e, t) {
  return [(0, r.jsx)(T, {
    message: e,
    gotoMessage: t,
    dismissible: true
  }, e.id)]
}

function T(e) {
  let {
    message: t,
    gotoMessage: n,
    dismissible: i
  } = e;
  if (null == t) return null;
  let l = O.Z.getChannel(t.channel_id);
  if (null == l || (0, f._t)(l) || (0, f.ft)(l)) return null;
  let o = y.Z.didAgree(l.getGuildId()),
    a = !!(0, f.qF)(l) && !o;
  return (0, r.jsxs)("div", {
    className: P.container,
    children: [(0, r.jsx)(x.Z, {
      channel: l,
      gotoChannel: n,
      children: null != i ? (0, r.jsx)(s.M0o, {
        className: P.closeButton,
        tooltip: S.intl.string(S.t.cpT0Cg),
        color: s.YX$.TERTIARY,
        icon: (0, r.jsx)(s.Dio, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: () => c.Z.deleteRecentMention(t.id)
      }) : null
    }), (0, r.jsxs)("div", {
      className: P.messageContainer,
      children: [(0, r.jsx)(j.Z, {
        className: P.jumpMessageButton,
        onJump: n
      }), (0, r.jsx)(g.Z, {
        message: t,
        channel: l,
        className: P.message,
        hideAccessories: a,
        compact: b.jU.getSetting(),
        animateAvatar: false,
        focusProps: I,
        trackAnnouncementViews: true
      }, t.id)]
    })]
  })
}

function A() {
  return (0, Chunk951288.jsx)(Chunk240126.Z, {
    Icon: Chunk481060.lOy,
    header: Chunk388032.intl.string(Chunk388032.t["bgDz7+"]),
    tip: Chunk388032.intl.string(Chunk388032.t.NS15vr)
  })
}
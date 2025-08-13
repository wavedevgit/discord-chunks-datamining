/** Chunk was on 41753 **/
/** chunk id: 903672, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk235820 = require("./235820.js"),
  Chunk494404 = require("./494404.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk110924 = require("./110924.js"),
  Chunk81643 = require("./81643.js"),
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
  Chunk193578 = require("./193578.js");
let N = {
  offset: {
    left: 4,
    right: false
  }
};

function w(e, t, n) {
  let r = t ? v.ZP.guildFilter : null,
    i = t ? v.ZP.roleFilter : null,
    l = t ? v.ZP.everyoneFilter : null,
    o = null;
  null != e && null != r && (o = r === x.NgX.ALL_SERVERS ? null : e.getGuildId()), c.Z.fetchRecentMentions({
    before: n,
    limit: x.DJj,
    guildId: o,
    roles: i,
    everyone: l
  })
}

function Z(e) {
  let {
    onJump: t
  } = e, n = (0, s.e7)([_.Z, C.Z], () => _.Z.getChannel(C.Z.getChannelId())), {
    messages: l,
    hasMore: a,
    loading: p,
    guildFilter: f,
    roleFilter: m,
    everyoneFilter: O
  } = (0, s.cj)([v.ZP], () => ({
    messages: v.ZP.getMentions(),
    hasMore: v.ZP.hasMore,
    loading: v.ZP.loading,
    guildFilter: v.ZP.guildFilter,
    roleFilter: v.ZP.roleFilter,
    everyoneFilter: v.ZP.everyoneFilter
  })), y = (0, b.Us)({
    location: "RecentMentions"
  }), j = (0, h.Z)(f), E = (0, h.Z)(m), S = (0, h.Z)(O);
  i.useEffect(() => {
    if (!v.ZP.hasLoadedEver) return void w(n, true);
    (null != j && f !== j || null != E && m !== E || null != S && O !== S) && w(n, true)
  }, [j, f, E, m, S, O, n, true]), (0, d.ZP)(() => {
    (null == l ? true : l.some(g.k5)) && (c.Z.clearMentions(), w(n, true))
  }), i.useEffect(() => () => {
    c.Z.truncateMentions(x.DJj)
  }, []);
  let N = i.useCallback(() => null, []);
  return (0, r.jsx)(u.ZP, {
    className: o()(P.recentMentionsPopout, {
      [P.widerInbox]: y
    }),
    scrollerClassName: P.scroller,
    onFetch: () => null,
    onJump: t,
    onCloseMessage: function(e) {
      c.Z.deleteRecentMention(e.id)
    },
    channel: n,
    messages: l,
    loading: p,
    hasMore: a,
    analyticsName: "Recent Mentions",
    loadMore: function() {
      w(n, true, null != l && l.length > 0 ? l[l.length - 1].id : null)
    },
    canCloseAllMessages: true,
    renderHeader: N,
    renderEmptyState: R,
    renderMessage: T,
    "aria-label": I.intl.string(I.t.jbV6MD),
    listName: "recents"
  })
}

function T(e, t) {
  return [(0, r.jsx)(A, {
    message: e,
    gotoMessage: t,
    dismissible: true
  }, e.id)]
}

function A(e) {
  let {
    message: t,
    gotoMessage: n,
    dismissible: i
  } = e;
  if (null == t) return null;
  let l = _.Z.getChannel(t.channel_id);
  if (null == l || (0, f.aC)(l) && (0, p.sf)()) return null;
  let o = y.Z.didAgree(l.getGuildId()),
    s = !!(0, f.aC)(l) && !o;
  return (0, r.jsxs)("div", {
    className: P.container,
    children: [(0, r.jsx)(E.Z, {
      channel: l,
      gotoChannel: n,
      children: null != i ? (0, r.jsx)(a.M0o, {
        className: P.closeButton,
        tooltip: I.intl.string(I.t.cpT0Cg),
        color: a.YX$.TERTIARY,
        icon: (0, r.jsx)(a.Dio, {
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
      }), (0, r.jsx)(m.Z, {
        message: t,
        channel: l,
        className: P.message,
        hideAccessories: s,
        compact: O.jU.getSetting(),
        animateAvatar: false,
        focusProps: N,
        trackAnnouncementViews: true
      }, t.id)]
    })]
  })
}

function R() {
  return (0, Chunk255367.jsx)(Chunk240126.Z, {
    Icon: Chunk481060.lOy,
    header: Chunk388032.intl.string(Chunk388032.t["bgDz7+"]),
    tip: Chunk388032.intl.string(Chunk388032.t.NS15vr)
  })
}
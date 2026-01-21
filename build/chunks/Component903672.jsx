/** Chunk was on 82124 **/
/** chunk id: 903672, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk235820 = require("./235820.js"),
  Chunk493773 = require("./493773.js"),
  Chunk110924 = require("./110924.js"),
  Chunk622822 = require("./622822.js"),
  Chunk198620 = require("./198620.js"),
  Chunk294218 = require("./294218.jsx"),
  Chunk598999 = require("./598999.jsx"),
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
  Chunk771047 = require("./771047.js");
let P = {
  offset: {
    left: 4,
    right: false
  }
};

function Z(e, t, n) {
  let r = t ? j.ZP.guildFilter : null,
    i = t ? j.ZP.roleFilter : null,
    l = t ? j.ZP.everyoneFilter : null,
    a = null;
  null != e && null != r && (a = r === S.NgX.ALL_SERVERS ? null : e.getGuildId()), c.Z.fetchRecentMentions({
    before: n,
    limit: S.DJj,
    guildId: a,
    roles: i,
    everyone: l
  })
}

function N(e) {
  let {
    onJump: t
  } = e, n = (0, o.e7)([y.Z, O.Z], () => y.Z.getChannel(O.Z.getChannelId())), {
    messages: l,
    hasMore: s,
    loading: p,
    guildFilter: h,
    roleFilter: b,
    everyoneFilter: v
  } = (0, o.cj)([j.ZP], () => ({
    messages: j.ZP.getMentions(),
    hasMore: j.ZP.hasMore,
    loading: j.ZP.loading,
    guildFilter: j.ZP.guildFilter,
    roleFilter: j.ZP.roleFilter,
    everyoneFilter: j.ZP.everyoneFilter
  })), x = (0, m.Us)({
    location: "RecentMentions"
  }), C = (0, d.Z)(h), E = (0, d.Z)(b), P = (0, d.Z)(v);
  i.useEffect(() => {
    if (!j.ZP.hasLoadedEver) return void Z(n, true);
    (null != C && h !== C || null != E && b !== E || null != P && v !== P) && Z(n, true)
  }, [C, h, E, b, P, v, n, true]), (0, u.ZP)(() => {
    (null == l ? true : l.some(f.k5)) && (c.Z.clearMentions(), Z(n, true))
  }), i.useEffect(() => () => {
    c.Z.truncateMentions(S.DJj)
  }, []);
  let N = i.useCallback(() => null, []);
  return (0, r.jsx)(g.ZP, {
    className: a()(I.recentMentionsPopout, {
      [I.widerInbox]: x
    }),
    scrollerClassName: I.scroller,
    onFetch: () => null,
    onJump: t,
    onCloseMessage: function(e) {
      c.Z.deleteRecentMention(e.id)
    },
    channel: n,
    messages: l,
    loading: p,
    hasMore: s,
    analyticsName: "Recent Mentions",
    loadMore: function() {
      Z(n, true, null != l && l.length > 0 ? l[l.length - 1].id : null)
    },
    canCloseAllMessages: true,
    renderHeader: N,
    renderEmptyState: w,
    renderMessage: T,
    "aria-label": _.intl.string(_.t.jbV6MM),
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
  let l = y.Z.getChannel(t.channel_id);
  if (null == l || (0, p._t)(l) || (0, p.ft)(l)) return null;
  let a = v.Z.didAgree(l.getGuildId()),
    o = !!(0, p.qF)(l) && !a;
  return (0, r.jsxs)("div", {
    className: I.container,
    children: [(0, r.jsx)(C.Z, {
      channel: l,
      gotoChannel: n,
      children: null != i ? (0, r.jsx)(s.PZ7, {
        size: "sm",
        onClick: () => c.Z.deleteRecentMention(t.id)
      }) : null
    }), (0, r.jsxs)("div", {
      className: I.messageContainer,
      children: [(0, r.jsx)(x.Z, {
        className: I.jumpMessageButton,
        onJump: n
      }), (0, r.jsx)(h.Z, {
        message: t,
        channel: l,
        className: I.message,
        hideAccessories: o,
        compact: b.jU.getSetting(),
        animateAvatar: false,
        focusProps: P,
        trackAnnouncementViews: true
      }, t.id)]
    })]
  })
}

function w() {
  return (0, r.jsx)(E.Z, {
    Icon: s.lOy,
    header: _.intl.string(_.t.bgDz74),
    tip: _.intl.string(_.t.NS15vk)
  })
}
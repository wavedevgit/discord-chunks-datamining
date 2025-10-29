/** Chunk was on 36925 **/
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
  Chunk889833 = require("./889833.js");
let P = {
  offset: {
    left: 4,
    right: false
  }
};

function N(e, t, n) {
  let r = t ? j.ZP.guildFilter : null,
    i = t ? j.ZP.roleFilter : null,
    l = t ? j.ZP.everyoneFilter : null,
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
  } = e, n = (0, a.e7)([_.Z, y.Z], () => _.Z.getChannel(y.Z.getChannelId())), {
    messages: l,
    hasMore: s,
    loading: p,
    guildFilter: h,
    roleFilter: b,
    everyoneFilter: O
  } = (0, a.cj)([j.ZP], () => ({
    messages: j.ZP.getMentions(),
    hasMore: j.ZP.hasMore,
    loading: j.ZP.loading,
    guildFilter: j.ZP.guildFilter,
    roleFilter: j.ZP.roleFilter,
    everyoneFilter: j.ZP.everyoneFilter
  })), v = (0, m.Us)({
    location: "RecentMentions"
  }), C = (0, d.Z)(h), x = (0, d.Z)(b), P = (0, d.Z)(O);
  i.useEffect(() => {
    if (!j.ZP.hasLoadedEver) return void N(n, true);
    (null != C && h !== C || null != x && b !== x || null != P && O !== P) && N(n, true)
  }, [C, h, x, b, P, O, n, true]), (0, u.ZP)(() => {
    (null == l ? true : l.some(f.k5)) && (c.Z.clearMentions(), N(n, true))
  }), i.useEffect(() => () => {
    c.Z.truncateMentions(E.DJj)
  }, []);
  let Z = i.useCallback(() => null, []);
  return (0, r.jsx)(g.ZP, {
    className: o()(I.recentMentionsPopout, {
      [I.widerInbox]: v
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
      N(n, true, null != l && l.length > 0 ? l[l.length - 1].id : null)
    },
    canCloseAllMessages: true,
    renderHeader: Z,
    renderEmptyState: A,
    renderMessage: T,
    "aria-label": S.intl.string(S.t.jbV6MM),
    listName: "recents"
  })
}

function T(e, t) {
  return [(0, r.jsx)(w, {
    message: e,
    gotoMessage: t,
    dismissible: true
  }, e.id)]
}

function w(e) {
  let {
    message: t,
    gotoMessage: n,
    dismissible: i
  } = e;
  if (null == t) return null;
  let l = _.Z.getChannel(t.channel_id);
  if (null == l || (0, p._t)(l) || (0, p.ft)(l)) return null;
  let o = O.Z.didAgree(l.getGuildId()),
    a = !!(0, p.qF)(l) && !o;
  return (0, r.jsxs)("div", {
    className: I.container,
    children: [(0, r.jsx)(C.Z, {
      channel: l,
      gotoChannel: n,
      children: null != i ? (0, r.jsx)(s.M0o, {
        className: I.closeButton,
        tooltip: S.intl.string(S.t.cpT0Cq),
        color: s.YX$.TERTIARY,
        icon: (0, r.jsx)(s.Dio, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: () => c.Z.deleteRecentMention(t.id)
      }) : null
    }), (0, r.jsxs)("div", {
      className: I.messageContainer,
      children: [(0, r.jsx)(v.Z, {
        className: I.jumpMessageButton,
        onJump: n
      }), (0, r.jsx)(h.Z, {
        message: t,
        channel: l,
        className: I.message,
        hideAccessories: a,
        compact: b.jU.getSetting(),
        animateAvatar: false,
        focusProps: P,
        trackAnnouncementViews: true
      }, t.id)]
    })]
  })
}

function A() {
  return (0, Chunk951288.jsx)(Chunk240126.Z, {
    Icon: Chunk481060.lOy,
    header: Chunk388032.intl.string(Chunk388032.t.bgDz74),
    tip: Chunk388032.intl.string(Chunk388032.t.NS15vk)
  })
}
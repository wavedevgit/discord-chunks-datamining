/** Chunk was on 44669 **/
/** chunk id: 492498, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk378939 = require("./378939.js"),
  Chunk964486 = require("./964486.js"),
  Chunk475743 = require("./475743.js"),
  Chunk323073 = require("./323073.js"),
  Chunk202803 = require("./202803.js"),
  Chunk636922 = require("./636922.jsx"),
  Chunk835835 = require("./835835.jsx"),
  Chunk566908 = require("./566908.js"),
  Chunk253932 = require("./253932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk517019 = require("./517019.js"),
  Chunk309010 = require("./309010.js"),
  Chunk187508 = require("./187508.js"),
  Chunk576456 = require("./576456.jsx"),
  Chunk572448 = require("./572448.jsx"),
  Chunk963702 = require("./963702.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk318136 = require("./318136.js");
let I = {
  offset: {
    left: 4,
    right: false
  }
};

function N(e, t, n) {
  let r = t ? j.Ay.guildFilter : null,
    l = t ? j.Ay.roleFilter : null,
    i = t ? j.Ay.everyoneFilter : null,
    s = null;
  null != e && null != r && (s = r === E.KE7.ALL_SERVERS ? null : e.getGuildId()), c.A.fetchRecentMentions({
    before: n,
    limit: E.Ue3,
    guildId: s,
    roles: l,
    everyone: i
  })
}

function T(e) {
  let {
    onJump: t
  } = e, n = (0, a.bG)([A.A, O.A], () => A.A.getChannel(O.A.getChannelId())), {
    messages: i,
    hasMore: o,
    loading: p,
    guildFilter: g,
    roleFilter: b,
    everyoneFilter: y
  } = (0, a.cf)([j.Ay], () => ({
    messages: j.Ay.getMentions(),
    hasMore: j.Ay.hasMore,
    loading: j.Ay.loading,
    guildFilter: j.Ay.guildFilter,
    roleFilter: j.Ay.roleFilter,
    everyoneFilter: j.Ay.everyoneFilter
  })), x = (0, m.Sc)({
    location: "RecentMentions"
  }), _ = (0, d.A)(g), v = (0, d.A)(b), I = (0, d.A)(y);
  l.useEffect(() => {
    j.Ay.hasLoadedEver ? (null != _ && g !== _ || null != v && b !== v || null != I && y !== I) && N(n, true) : N(n, true)
  }, [_, g, v, b, I, y, n, true]), (0, u.Ay)(() => {
    (null == i ? true : i.some(h.$r)) && (c.A.clearMentions(), N(n, true))
  }), l.useEffect(() => () => {
    c.A.truncateMentions(E.Ue3)
  }, []);
  let T = l.useCallback(() => null, []);
  return (0, r.jsx)(f.Ay, {
    className: s()(S.sH, {
      [S.qC]: x
    }),
    scrollerClassName: S.XG,
    onFetch: () => null,
    onJump: t,
    onCloseMessage: function(e) {
      c.A.deleteRecentMention(e.id)
    },
    channel: n,
    messages: i,
    loading: p,
    hasMore: o,
    analyticsName: "Recent Mentions",
    loadMore: function() {
      N(n, true, null != i && i.length > 0 ? i[i.length - 1].id : null)
    },
    canCloseAllMessages: true,
    renderHeader: T,
    renderEmptyState: R,
    renderMessage: P,
    "aria-label": C.intl.string(C.t.jbV6MM),
    listName: "recents"
  })
}

function P(e, t) {
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
    dismissible: l
  } = e;
  if (null == t) return null;
  let i = A.A.getChannel(t.channel_id);
  if (null == i || (0, p.Jm)(i) || (0, p.$v)(i)) return null;
  let s = y.A.didAgree(i.getGuildId()),
    a = !!(0, p.Gc)(i) && !s;
  return (0, r.jsxs)("div", {
    className: S.kL,
    children: [(0, r.jsx)(_.A, {
      channel: i,
      gotoChannel: n,
      children: null != l ? (0, r.jsx)(o.JnF, {
        size: "sm",
        onClick: () => c.A.deleteRecentMention(t.id)
      }) : null
    }), (0, r.jsxs)("div", {
      className: S.zC,
      children: [(0, r.jsx)(x.A, {
        className: S.QT,
        onJump: n
      }), (0, r.jsx)(g.A, {
        message: t,
        channel: i,
        className: S.iU,
        hideAccessories: a,
        compact: b.hH.getSetting(),
        animateAvatar: false,
        focusProps: I,
        trackAnnouncementViews: true
      }, t.id)]
    })]
  })
}

function R() {
  return (0, r.jsx)(v.A, {
    Icon: o.XxR,
    header: C.intl.string(C.t.bgDz74),
    tip: C.intl.string(C.t.NS15vk)
  })
}
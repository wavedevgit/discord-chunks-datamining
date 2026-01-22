/** Chunk was on 97492 **/
/** chunk id: 492498, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
    a = null;
  null != e && null != r && (a = r === _.KE7.ALL_SERVERS ? null : e.getGuildId()), c.A.fetchRecentMentions({
    before: n,
    limit: _.Ue3,
    guildId: a,
    roles: l,
    everyone: i
  })
}

function T(e) {
  let {
    onJump: t
  } = e, n = (0, s.bG)([A.A, O.A], () => A.A.getChannel(O.A.getChannelId())), {
    messages: i,
    hasMore: o,
    loading: f,
    guildFilter: h,
    roleFilter: m,
    everyoneFilter: y
  } = (0, s.cf)([j.Ay], () => ({
    messages: j.Ay.getMentions(),
    hasMore: j.Ay.hasMore,
    loading: j.Ay.loading,
    guildFilter: j.Ay.guildFilter,
    roleFilter: j.Ay.roleFilter,
    everyoneFilter: j.Ay.everyoneFilter
  })), v = (0, g.Sc)({
    location: "RecentMentions"
  }), x = (0, d.A)(h), E = (0, d.A)(m), I = (0, d.A)(y);
  l.useEffect(() => {
    j.Ay.hasLoadedEver ? (null != x && h !== x || null != E && m !== E || null != I && y !== I) && N(n, true) : N(n, true)
  }, [x, h, E, m, I, y, n, true]), (0, u.Ay)(() => {
    (null == i ? true : i.some(p.$r)) && (c.A.clearMentions(), N(n, true))
  }), l.useEffect(() => () => {
    c.A.truncateMentions(_.Ue3)
  }, []);
  let T = l.useCallback(() => null, []);
  return (0, r.jsx)(b.Ay, {
    className: a()(S.sH, {
      [S.qC]: v
    }),
    scrollerClassName: S.XG,
    onFetch: () => null,
    onJump: t,
    onCloseMessage: function(e) {
      c.A.deleteRecentMention(e.id)
    },
    channel: n,
    messages: i,
    loading: f,
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
  if (null == i || (0, f.Jm)(i) || (0, f.$v)(i)) return null;
  let a = y.A.didAgree(i.getGuildId()),
    s = !!(0, f.Gc)(i) && !a;
  return (0, r.jsxs)("div", {
    className: S.kL,
    children: [(0, r.jsx)(x.A, {
      channel: i,
      gotoChannel: n,
      children: null != l ? (0, r.jsx)(o.JnF, {
        size: "sm",
        onClick: () => c.A.deleteRecentMention(t.id)
      }) : null
    }), (0, r.jsxs)("div", {
      className: S.zC,
      children: [(0, r.jsx)(v.A, {
        className: S.QT,
        onJump: n
      }), (0, r.jsx)(h.A, {
        message: t,
        channel: i,
        className: S.iU,
        hideAccessories: s,
        compact: m.hH.getSetting(),
        animateAvatar: false,
        focusProps: I,
        trackAnnouncementViews: true
      }, t.id)]
    })]
  })
}

function R() {
  return (0, r.jsx)(E.A, {
    Icon: o.XxR,
    header: C.intl.string(C.t.bgDz74),
    tip: C.intl.string(C.t.NS15vk)
  })
}
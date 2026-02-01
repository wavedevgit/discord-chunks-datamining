/** Chunk was on 71447 **/
/** chunk id: 437331, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => N
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk941971 = require("./941971.jsx"),
  Chunk309632 = require("./309632.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk290863 = require("./290863.js"),
  Chunk222823 = require("./222823.js"),
  Chunk287809 = require("./287809.js"),
  Chunk914853 = require("./914853.js"),
  Chunk1404 = require("./1404.jsx"),
  Chunk102983 = require("./102983.jsx"),
  Chunk578093 = require("./578093.jsx"),
  Chunk912156 = require("./912156.jsx"),
  Chunk472204 = require("./472204.js"),
  Chunk576420 = require("./576420.js"),
  Chunk549866 = require("./549866.jsx"),
  Chunk876891 = require("./876891.jsx"),
  Chunk336148 = require("./336148.js"),
  Chunk783346 = require("./783346.js");

function I(e) {
  return (0, i.jsx)(l.hVq, {
    count: e
  })
}

function j(e) {
  var t, n;
  let {
    channelId: r,
    listItemId: s,
    mentionCount: u,
    unread: d
  } = e, h = null != (t = (0, a.Ay)(null != (n = c.A.getChannel(r)) ? n : true, true)) ? t : "???";
  return (0, i.jsx)(m.D, {
    listItemId: s,
    leftIndicator: (0, i.jsx)(o.A, {
      unread: d
    }),
    avatar: (0, i.jsx)(l.euF, {
      src: true,
      "aria-hidden": true,
      size: l._3J.SIZE_32
    }),
    primaryText: (0, i.jsx)("span", {
      children: (0, i.jsx)(l.Text, {
        className: S.Xh,
        variant: "text-sm/medium",
        color: "text-muted",
        children: h
      })
    }),
    rightActions: () => u > 0 ? I(u) : null
  })
}

function T(e) {
  var t;
  let {
    channel: n,
    listItemId: s,
    mentionCount: c,
    isMentionLowImportance: d,
    unread: p
  } = e, v = n.id, E = null != (t = (0, a.Ay)(n, false)) ? t : "???", j = (0, _.X)(n), T = (0, u.A)(n, false), {
    user: C,
    status: N,
    isMobile: w
  } = (0, r.cf)([f.default, h.A], () => {
    if (!n.isDM()) return {
      user: null,
      status: null,
      isMobile: false
    };
    let e = n.getRecipientId(),
      t = null != e ? f.default.getUser(e) : null;
    return {
      user: t,
      status: null != e ? h.A.getStatus(e) : null,
      isMobile: null != e && h.A.isMobileOnline(e)
    }
  }, [n]), P = (0, x.lC)({
    channel: n,
    user: C
  }), D = n.isMultiUserDM() || n.isPrivate() && n.recipients.length >= 2, R = (0, b.j7)({
    channelId: v,
    guildId: null,
    shouldStopEvent: false
  });
  return (0, i.jsx)(m.D, {
    listItemId: s,
    leftIndicator: (0, i.jsx)(o.A, {
      unread: p
    }),
    onClick: R,
    onContextMenu: P,
    avatar: (0, i.jsx)(y.h, {
      channel: n,
      user: C,
      "aria-hidden": true,
      size: l._3J.SIZE_32,
      status: N,
      isMobile: w,
      isTyping: j,
      mentionCount: c,
      isMentionLowImportance: d
    }),
    primaryText: (0, i.jsx)("div", {
      className: S.QV,
      children: (0, i.jsx)(l.Text, {
        className: S.Xh,
        variant: "text-sm/medium",
        color: p || c > 0 ? "text-strong" : "text-muted",
        children: E
      })
    }),
    secondaryText: null != T ? (0, i.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: (0, i.jsx)(O.b, {
        channel: n,
        message: T
      })
    }) : null,
    rightActions: e => (0, i.jsxs)(i.Fragment, {
      children: [c > 0 ? I(c) : null, e && D ? (0, i.jsx)(A.j, {
        tab: g.x.MESSAGES,
        targetId: v
      }) : null]
    })
  })
}

function C(e) {
  var t, n, c;
  let h, {
      channel: p,
      listItemId: f,
      mentionCount: y,
      unread: E,
      recentlyAddedTimestampMs: j
    } = e,
    T = p.id,
    C = null != (t = null == (c = p.getGuildId) ? true : c.call(p)) ? t : null,
    N = (0, r.bG)([d.A], () => {
      var e;
      return null != C && null != (e = d.A.getGuild(C)) ? e : null
    }, [C]),
    w = null != (n = (0, a.Ay)(p, false)) ? n : "???",
    P = (0, _.X)(p),
    D = (0, u.A)(p, false),
    R = (0, l.rdh)(l.LU0.colors.TEXT_STRONG),
    k = (0, l.rdh)(l.LU0.colors.TEXT_MUTED),
    M = E || y > 0 ? "text-strong" : "text-muted",
    L = E || y > 0 ? R : k,
    U = (0, x.Qi)({
      channel: p,
      guild: N
    }),
    G = (0, b.j7)({
      channelId: T,
      guildId: C,
      shouldStopEvent: false
    });
  return (0, i.jsx)(m.D, {
    listItemId: f,
    recentlyAddedTimestampMs: j,
    leftIndicator: (0, i.jsx)(o.A, {
      unread: E
    }),
    onClick: G,
    onContextMenu: U,
    avatar: (0, i.jsx)(v.A, {
      channel: p,
      guild: null != N ? N : true,
      size: v.Q.SMALL_32,
      isTyping: P
    }),
    primaryText: (0, i.jsxs)("div", {
      className: S.QV,
      children: [null == (h = (0, s.gU)(p, N)) ? null : (0, i.jsx)(h, {
        color: L.hex(),
        size: "xxs",
        className: S.p
      }), (0, i.jsx)(l.Text, {
        className: S.Xh,
        variant: "text-sm/medium",
        color: M,
        children: w
      })]
    }),
    secondaryText: null != D ? (0, i.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: (0, i.jsx)(O.b, {
        channel: p,
        message: D
      })
    }) : null,
    rightActions: e => (0, i.jsxs)(i.Fragment, {
      children: [y > 0 ? I(y) : null, e ? (0, i.jsx)(A.j, {
        tab: g.x.MESSAGES,
        targetId: T
      }) : null]
    })
  })
}

function N(e) {
  let {
    channelId: t,
    listItemId: n,
    shouldHighlightIfRecentlyAdded: l
  } = e, a = (0, r.bG)([c.A], () => c.A.getChannel(t), [t]), {
    mentionCount: s,
    unread: o,
    isMentionLowImportance: u
  } = (0, r.cf)([p.Ay], () => ({
    mentionCount: p.Ay.getMentionCount(t),
    isMentionLowImportance: p.Ay.getIsMentionLowImportance(t),
    unread: p.Ay.hasUnread(t)
  }), [t]), d = (0, E.A2)(t);
  return null == a ? (0, i.jsx)(j, {
    channelId: t,
    listItemId: n,
    mentionCount: s,
    unread: o
  }) : a.isPrivate() ? (0, i.jsx)(T, {
    channel: a,
    listItemId: n,
    mentionCount: s,
    isMentionLowImportance: u,
    unread: o
  }) : (0, i.jsx)(C, {
    channel: a,
    listItemId: n,
    mentionCount: s,
    unread: o,
    recentlyAddedTimestampMs: l ? d : null
  })
}
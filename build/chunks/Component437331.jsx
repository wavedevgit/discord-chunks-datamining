/** Chunk was on 7685 **/
/** chunk id: 437331, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => D
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
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
  Chunk67103 = require("./67103.js"),
  Chunk576420 = require("./576420.js"),
  Chunk549866 = require("./549866.jsx"),
  Chunk336148 = require("./336148.js"),
  Chunk783346 = require("./783346.js");

function T(e) {
  return (0, l.jsx)(s.hVq, {
    count: e
  })
}

function _(e) {
  var t, n;
  let {
    channelId: r,
    listItemId: i,
    mentionCount: o,
    unread: c
  } = e, h = null != (t = (0, a.Ay)(null != (n = d.A.getChannel(r)) ? n : true, true)) ? t : "???";
  return (0, l.jsx)(m.D, {
    listItemId: i,
    leftIndicator: (0, l.jsx)(u.A, {
      unread: c
    }),
    avatar: (0, l.jsx)(s.euF, {
      src: true,
      "aria-hidden": true,
      size: s._3J.SIZE_32
    }),
    primaryText: (0, l.jsx)("span", {
      children: (0, l.jsx)(s.Text, {
        className: N.Xh,
        variant: "text-sm/medium",
        color: "text-muted",
        children: h
      })
    }),
    rightActions: () => o > 0 ? T(o) : null
  })
}

function C(e) {
  var t;
  let {
    channel: n,
    listItemId: o,
    mentionCount: d,
    isMentionLowImportance: h,
    unread: f,
    onPrimaryAction: y,
    onContextMenu: v
  } = e, _ = n.id, C = null != (t = (0, a.Ay)(n, false)) ? t : "???", x = (0, b.X)(n), D = (0, c.A)(n, false), {
    user: M,
    status: j,
    isMobile: w
  } = (0, i.cf)([p.default, g.A], () => {
    if (!n.isDM()) return {
      user: null,
      status: null,
      isMobile: false
    };
    let e = n.getRecipientId(),
      t = null != e ? p.default.getUser(e) : null;
    return {
      user: t,
      status: null != e ? g.A.getStatus(e) : null,
      isMobile: null != e && g.A.isMobileOnline(e)
    }
  }, [n]), P = r.useCallback(e => {
    let t = n.isMultiUserDM() ? S.K.GROUP_DM_CHANNEL : S.K.DM_CHANNEL;
    null == v || v({
      type: t,
      event: e,
      channel: n,
      user: null != M ? M : true
    })
  }, [n, v, M]), R = n.isMultiUserDM() || n.isPrivate() && n.recipients.length >= 2, U = r.useCallback(() => {
    null == y || y({
      type: S.c.OPEN_TEXT_CHAT_CHANNEL,
      channelId: _,
      guildId: null
    })
  }, [_, y]);
  return (0, l.jsx)(m.D, {
    listItemId: o,
    leftIndicator: (0, l.jsx)(u.A, {
      unread: f
    }),
    onClick: U,
    onContextMenu: P,
    avatar: (0, l.jsx)(E.h, {
      channel: n,
      user: M,
      "aria-hidden": true,
      size: s._3J.SIZE_32,
      status: j,
      isMobile: w,
      isTyping: x,
      mentionCount: d,
      isMentionLowImportance: h
    }),
    primaryText: (0, l.jsx)("div", {
      className: N.QV,
      children: (0, l.jsx)(s.Text, {
        className: N.Xh,
        variant: "text-sm/medium",
        color: f || d > 0 ? "text-strong" : "text-muted",
        children: C
      })
    }),
    secondaryText: null != D ? (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: (0, l.jsx)(O.b, {
        channel: n,
        message: D
      })
    }) : null,
    rightActions: e => (0, l.jsxs)(l.Fragment, {
      children: [d > 0 ? T(d) : null, e && R ? (0, l.jsx)(A.j, {
        tab: I.x.MESSAGES,
        targetId: _
      }) : null]
    })
  })
}

function x(e) {
  var t, n, d;
  let g, {
      channel: f,
      listItemId: p,
      mentionCount: E,
      unread: v,
      recentlyAddedTimestampMs: _,
      onPrimaryAction: C,
      onContextMenu: x
    } = e,
    D = f.id,
    M = null != (t = null == (d = f.getGuildId) ? true : d.call(f)) ? t : null,
    j = (0, i.bG)([h.A], () => {
      var e;
      return null != M && null != (e = h.A.getGuild(M)) ? e : null
    }, [M]),
    w = null != (n = (0, a.Ay)(f, false)) ? n : "???",
    P = (0, b.X)(f),
    R = (0, c.A)(f, false),
    U = (0, s.rdh)(s.LU0.colors.TEXT_STRONG),
    G = (0, s.rdh)(s.LU0.colors.TEXT_MUTED),
    L = v || E > 0 ? "text-strong" : "text-muted",
    k = v || E > 0 ? U : G,
    F = r.useCallback(e => {
      null == x || x({
        type: S.K.GUILD_TEXT_CHANNEL,
        event: e,
        channel: f,
        guild: j
      })
    }, [f, j, x]),
    V = r.useCallback(() => {
      null == C || C({
        type: S.c.OPEN_TEXT_CHAT_CHANNEL,
        channelId: D,
        guildId: M
      })
    }, [D, M, C]);
  return (0, l.jsx)(m.D, {
    listItemId: p,
    recentlyAddedTimestampMs: _,
    leftIndicator: (0, l.jsx)(u.A, {
      unread: v
    }),
    onClick: V,
    onContextMenu: F,
    avatar: (0, l.jsx)(y.A, {
      channel: f,
      guild: null != j ? j : true,
      size: y.Q.SMALL_32,
      isTyping: P
    }),
    primaryText: (0, l.jsxs)("div", {
      className: N.QV,
      children: [null == (g = (0, o.gU)(f, j)) ? null : (0, l.jsx)(g, {
        color: k.hex(),
        size: "xxs",
        className: N.p
      }), (0, l.jsx)(s.Text, {
        className: N.Xh,
        variant: "text-sm/medium",
        color: L,
        children: w
      })]
    }),
    secondaryText: null != R ? (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: (0, l.jsx)(O.b, {
        channel: f,
        message: R
      })
    }) : null,
    rightActions: e => (0, l.jsxs)(l.Fragment, {
      children: [E > 0 ? T(E) : null, e ? (0, l.jsx)(A.j, {
        tab: I.x.MESSAGES,
        targetId: D
      }) : null]
    })
  })
}

function D(e) {
  let {
    channelId: t,
    listItemId: n,
    shouldHighlightIfRecentlyAdded: r,
    onPrimaryAction: s,
    onContextMenu: a
  } = e, o = (0, i.bG)([d.A], () => d.A.getChannel(t), [t]), {
    mentionCount: u,
    unread: c,
    isMentionLowImportance: h
  } = (0, i.cf)([f.Ay], () => ({
    mentionCount: f.Ay.getMentionCount(t),
    isMentionLowImportance: f.Ay.getIsMentionLowImportance(t),
    unread: f.Ay.hasUnread(t)
  }), [t]), g = (0, v.A2)(t);
  return null == o ? (0, l.jsx)(_, {
    channelId: t,
    listItemId: n,
    mentionCount: u,
    unread: c
  }) : o.isPrivate() ? (0, l.jsx)(C, {
    channel: o,
    listItemId: n,
    mentionCount: u,
    isMentionLowImportance: h,
    unread: c,
    onPrimaryAction: s,
    onContextMenu: a
  }) : (0, l.jsx)(x, {
    channel: o,
    listItemId: n,
    mentionCount: u,
    unread: c,
    recentlyAddedTimestampMs: r ? g : null,
    onPrimaryAction: s,
    onContextMenu: a
  })
}
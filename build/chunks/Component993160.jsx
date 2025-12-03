/** Chunk was on 93979 **/
/** chunk id: 993160, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk572691 = require("./572691.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk444141 = require("./444141.jsx"),
  Chunk705556 = require("./705556.jsx"),
  Chunk30556 = require("./30556.jsx"),
  Chunk664794 = require("./664794.jsx"),
  Chunk522182 = require("./522182.jsx"),
  Chunk821706 = require("./821706.jsx"),
  Chunk562831 = require("./562831.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  let {
    user: n,
    currentUser: t,
    guildId: f,
    channelId: x,
    displayProfile: h,
    relationshipType: v,
    onClose: j
  } = e, {
    newestAnalyticsLocation: g
  } = (0, o.ZP)(), b = (0, r.Z)({
    user: n,
    guildId: f,
    channelId: x,
    displayProfile: h,
    onClose: j
  }), {
    gameFriends: I,
    hasOutgoingPendingGameFriends: y,
    hasIncomingPendingGameFriends: Z
  } = (0, m.H)({
    userId: n.id
  }), _ = I.length > 0 || y || Z;
  return v === p.OGo.BLOCKED ? null : n.id === t.id ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.Z, {
      user: n,
      guildId: f,
      onClose: j
    }), (0, l.jsx)(d.Z, {
      onClose: j
    }), (0, l.jsx)(c.wV, {
      user: n,
      guildId: f,
      viewProfileItem: b
    })]
  }) : n.bot ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.H, {
      userId: n.id,
      onClose: i.Z.popAll,
      autoFocus: true
    }), (0, l.jsx)(c.wV, {
      user: n,
      guildId: f,
      viewProfileItem: b
    })]
  }) : v === p.OGo.PENDING_INCOMING ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.H, {
      userId: n.id,
      onClose: i.Z.popAll,
      autoFocus: true
    }), (0, l.jsx)(c.wV, {
      user: n,
      guildId: f
    })]
  }) : v === p.OGo.FRIEND || v === p.OGo.PENDING_OUTGOING ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.H, {
      userId: n.id,
      onClose: i.Z.popAll,
      autoFocus: true
    }), (0, l.jsx)(u.g, {
      type: "icon",
      user: n,
      relationshipType: v,
      shouldShowTooltip: true,
      themeColor: "secondary",
      analyticsLocation: g
    }), (0, l.jsx)(c.wV, {
      user: n,
      guildId: f,
      viewProfileItem: b
    })]
  }) : v === p.OGo.NONE && _ ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.H, {
      userId: n.id,
      onClose: i.Z.popAll,
      autoFocus: true
    }), (0, l.jsx)(u.k9, {
      type: "icon",
      user: n,
      analyticsLocation: g,
      themeColor: "secondary",
      gameFriends: I,
      tooltipPosition: "top",
      tooltipAlign: "center",
      shouldShowTooltip: true,
      hasIncomingPendingGameFriends: Z,
      hasOutgoingPendingGameFriends: y
    }), (0, l.jsx)(c.wV, {
      user: n,
      guildId: f,
      viewProfileItem: b
    })]
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.Z7, {
      variant: "primary",
      userId: n.id,
      analyticsLocation: g,
      autoFocus: true
    }), (0, l.jsx)(a.v, {
      userId: n.id,
      onClose: i.Z.popAll,
      variant: "secondary"
    }), (0, l.jsx)(c.wV, {
      user: n,
      guildId: f,
      viewProfileItem: b
    })]
  })
}
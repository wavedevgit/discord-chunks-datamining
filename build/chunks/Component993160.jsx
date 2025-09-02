/** Chunk was on 93979 **/
/** chunk id: 993160, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk572691 = require("./572691.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk444141 = require("./444141.jsx"),
  Chunk705556 = require("./705556.jsx"),
  Chunk30556 = require("./30556.jsx"),
  Chunk664794 = require("./664794.jsx"),
  Chunk522182 = require("./522182.jsx"),
  Chunk821706 = require("./821706.jsx"),
  Chunk562831 = require("./562831.js"),
  Chunk981631 = require("./981631.js");

function x(e) {
  let {
    user: n,
    currentUser: t,
    guildId: x,
    channelId: h,
    displayProfile: b,
    relationshipType: j,
    onClose: v
  } = e, {
    newestAnalyticsLocation: g
  } = (0, i.ZP)(), y = (0, c.Z)({
    user: n,
    guildId: x,
    channelId: h,
    displayProfile: b,
    onClose: v
  }), {
    gameFriends: O,
    hasOutgoingPendingGameFriends: I,
    hasIncomingPendingGameFriends: Z
  } = (0, f.H)({
    userId: n.id
  }), _ = O.length > 0 || I || Z;
  return j === p.OGo.BLOCKED ? null : n.id === t.id ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.Z, {
      user: n,
      guildId: x,
      onClose: v
    }), (0, l.jsx)(u.Z, {
      onClose: v
    }), (0, l.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: x,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  }) : n.bot ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.Z, {
      type: "text",
      userId: n.id,
      onClose: r.Z.popAll,
      autoFocus: true
    }), (0, l.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: x,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  }) : j === p.OGo.PENDING_INCOMING ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.Z, {
      type: "text",
      userId: n.id,
      color: o.zx.Colors.BRAND,
      onClose: r.Z.popAll,
      autoFocus: true
    }), (0, l.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: x,
      themeColor: "secondary"
    })]
  }) : j === p.OGo.FRIEND || j === p.OGo.PENDING_OUTGOING ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.Z, {
      type: "text",
      userId: n.id,
      color: o.zx.Colors.BRAND,
      onClose: r.Z.popAll,
      autoFocus: true
    }), (0, l.jsx)(m.g, {
      type: "icon",
      user: n,
      relationshipType: j,
      shouldShowTooltip: true,
      themeColor: "secondary",
      analyticsLocation: g
    }), (0, l.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: x,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  }) : j === p.OGo.NONE && _ ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.Z, {
      type: "text",
      userId: n.id,
      onClose: r.Z.popAll,
      autoFocus: true
    }), (0, l.jsx)(m.k9, {
      type: "icon",
      user: n,
      analyticsLocation: g,
      themeColor: "secondary",
      gameFriends: O,
      tooltipPosition: "top",
      tooltipAlign: "center",
      shouldShowTooltip: true,
      hasIncomingPendingGameFriends: Z,
      hasOutgoingPendingGameFriends: I
    }), (0, l.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: x,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(m.Z7, {
      type: "text",
      userId: n.id,
      analyticsLocation: g,
      color: o.zx.Colors.BRAND,
      autoFocus: true
    }), (0, l.jsx)(a.Z, {
      type: "icon",
      userId: n.id,
      onClose: r.Z.popAll,
      themeColor: "secondary"
    }), (0, l.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: x,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  })
}
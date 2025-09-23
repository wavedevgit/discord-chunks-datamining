/** Chunk was on 31553 **/
/** chunk id: 993160, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function h(e) {
  let {
    user: n,
    currentUser: t,
    guildId: h,
    channelId: j,
    displayProfile: x,
    relationshipType: v,
    onClose: g
  } = e, {
    newestAnalyticsLocation: b
  } = (0, o.ZP)(), y = (0, s.Z)({
    user: n,
    guildId: h,
    channelId: j,
    displayProfile: x,
    onClose: g
  }), {
    gameFriends: O,
    hasOutgoingPendingGameFriends: Z,
    hasIncomingPendingGameFriends: I
  } = (0, f.H)({
    userId: n.id
  }), P = O.length > 0 || Z || I;
  return v === p.OGo.BLOCKED ? null : n.id === t.id ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.Z, {
      user: n,
      guildId: h,
      onClose: g
    }), (0, l.jsx)(u.Z, {
      onClose: g
    }), (0, l.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: h,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  }) : n.bot ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(c.Z, {
      type: "text",
      userId: n.id,
      onClose: r.Z.popAll,
      autoFocus: true
    }), (0, l.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: h,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  }) : v === p.OGo.PENDING_INCOMING ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(c.Z, {
      type: "text",
      userId: n.id,
      color: i.zx.Colors.BRAND,
      onClose: r.Z.popAll,
      autoFocus: true
    }), (0, l.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: h,
      themeColor: "secondary"
    })]
  }) : v === p.OGo.FRIEND || v === p.OGo.PENDING_OUTGOING ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(c.Z, {
      type: "text",
      userId: n.id,
      color: i.zx.Colors.BRAND,
      onClose: r.Z.popAll,
      autoFocus: true
    }), (0, l.jsx)(m.g, {
      type: "icon",
      user: n,
      relationshipType: v,
      shouldShowTooltip: true,
      themeColor: "secondary",
      analyticsLocation: b
    }), (0, l.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: h,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  }) : v === p.OGo.NONE && P ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(c.Z, {
      type: "text",
      userId: n.id,
      onClose: r.Z.popAll,
      autoFocus: true
    }), (0, l.jsx)(m.k9, {
      type: "icon",
      user: n,
      analyticsLocation: b,
      themeColor: "secondary",
      gameFriends: O,
      tooltipPosition: "top",
      tooltipAlign: "center",
      shouldShowTooltip: true,
      hasIncomingPendingGameFriends: I,
      hasOutgoingPendingGameFriends: Z
    }), (0, l.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: h,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(m.Z7, {
      type: "text",
      userId: n.id,
      analyticsLocation: b,
      color: i.zx.Colors.BRAND,
      autoFocus: true
    }), (0, l.jsx)(c.Z, {
      type: "icon",
      userId: n.id,
      onClose: r.Z.popAll,
      themeColor: "secondary"
    }), (0, l.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: h,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  })
}
/** Chunk was on 82008 **/
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
    channelId: x,
    displayProfile: b,
    relationshipType: j,
    onClose: g
  } = e, {
    newestAnalyticsLocation: v
  } = (0, i.ZP)(), y = (0, c.Z)({
    user: n,
    guildId: h,
    channelId: x,
    displayProfile: b,
    onClose: g
  }), {
    gameFriends: O,
    hasOutgoingPendingGameFriends: I,
    hasIncomingPendingGameFriends: _
  } = (0, m.H)({
    userId: n.id
  }), Z = O.length > 0 || I || _;
  return j === p.OGo.BLOCKED ? null : n.id === t.id ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      user: n,
      guildId: h,
      onClose: g
    }), (0, r.jsx)(u.Z, {
      onClose: g
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: h,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  }) : n.bot ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Z, {
      type: "text",
      userId: n.id,
      onClose: o.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: h,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  }) : j === p.OGo.PENDING_INCOMING ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Z, {
      type: "text",
      userId: n.id,
      color: l.zx.Colors.BRAND,
      onClose: o.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: h,
      themeColor: "secondary"
    })]
  }) : j === p.OGo.FRIEND || j === p.OGo.PENDING_OUTGOING ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Z, {
      type: "text",
      userId: n.id,
      color: l.zx.Colors.BRAND,
      onClose: o.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(f.g, {
      type: "icon",
      user: n,
      relationshipType: j,
      shouldShowTooltip: true,
      themeColor: "secondary",
      analyticsLocation: v
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: h,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  }) : j === p.OGo.NONE && Z ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Z, {
      type: "text",
      userId: n.id,
      onClose: o.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(f.k9, {
      type: "icon",
      user: n,
      analyticsLocation: v,
      themeColor: "secondary",
      gameFriends: O,
      tooltipPosition: "top",
      tooltipAlign: "center",
      shouldShowTooltip: true,
      hasIncomingPendingGameFriends: _,
      hasOutgoingPendingGameFriends: I
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: h,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.Z7, {
      type: "text",
      userId: n.id,
      analyticsLocation: v,
      color: l.zx.Colors.BRAND,
      autoFocus: true
    }), (0, r.jsx)(a.Z, {
      type: "icon",
      userId: n.id,
      onClose: o.Z.popAll,
      themeColor: "secondary"
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: h,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  })
}
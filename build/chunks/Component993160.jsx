/** Chunk was on 16811 **/
/** chunk id: 993160, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => b
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

function b(e) {
  let {
    user: n,
    currentUser: t,
    guildId: b,
    channelId: g,
    displayProfile: x,
    relationshipType: h,
    onClose: j
  } = e, {
    newestAnalyticsLocation: v
  } = (0, i.ZP)(), _ = (0, c.Z)({
    user: n,
    guildId: b,
    channelId: g,
    displayProfile: x,
    onClose: j
  }), {
    gameFriends: y,
    hasOutgoingPendingGameFriends: I,
    hasIncomingPendingGameFriends: O
  } = (0, m.H)({
    userId: n.id
  }), P = y.length > 0 || I || O;
  return h === p.OGo.BLOCKED ? null : n.id === t.id ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Z, {
      user: n,
      guildId: b,
      onClose: j
    }), (0, r.jsx)(u.Z, {
      onClose: j
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: b,
      viewProfileItem: _,
      themeColor: "secondary"
    })]
  }) : n.bot ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      type: "text",
      userId: n.id,
      onClose: l.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: b,
      viewProfileItem: _,
      themeColor: "secondary"
    })]
  }) : h === p.OGo.PENDING_INCOMING ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      type: "text",
      userId: n.id,
      color: o.zx.Colors.BRAND,
      onClose: l.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: b,
      themeColor: "secondary"
    })]
  }) : h === p.OGo.FRIEND || h === p.OGo.PENDING_OUTGOING ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      type: "text",
      userId: n.id,
      color: o.zx.Colors.BRAND,
      onClose: l.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(f.g, {
      type: "icon",
      user: n,
      relationshipType: h,
      shouldShowTooltip: true,
      themeColor: "secondary",
      analyticsLocation: v
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: b,
      viewProfileItem: _,
      themeColor: "secondary"
    })]
  }) : h === p.OGo.NONE && P ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      type: "text",
      userId: n.id,
      onClose: l.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(f.k9, {
      type: "icon",
      user: n,
      analyticsLocation: v,
      themeColor: "secondary",
      gameFriends: y,
      tooltipPosition: "top",
      tooltipAlign: "center",
      shouldShowTooltip: true,
      hasIncomingPendingGameFriends: O,
      hasOutgoingPendingGameFriends: I
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: b,
      viewProfileItem: _,
      themeColor: "secondary"
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.Z7, {
      type: "text",
      userId: n.id,
      analyticsLocation: v,
      color: o.zx.Colors.BRAND,
      autoFocus: true
    }), (0, r.jsx)(s.Z, {
      type: "icon",
      userId: n.id,
      onClose: l.Z.popAll,
      themeColor: "secondary"
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: b,
      viewProfileItem: _,
      themeColor: "secondary"
    })]
  })
}
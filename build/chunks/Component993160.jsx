/** Chunk was on 28883 **/
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
    onClose: g
  } = e, {
    newestAnalyticsLocation: v
  } = (0, i.ZP)(), y = (0, c.Z)({
    user: n,
    guildId: x,
    channelId: h,
    displayProfile: b,
    onClose: g
  }), {
    gameFriends: _,
    hasOutgoingPendingGameFriends: I,
    hasIncomingPendingGameFriends: O
  } = (0, m.H)({
    userId: n.id
  }), Z = _.length > 0 || I || O;
  return j === p.OGo.BLOCKED ? null : n.id === t.id ? (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(a.Z, {
      user: n,
      guildId: x,
      onClose: g
    }), (0, o.jsx)(u.Z, {
      onClose: g
    }), (0, o.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: x,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  }) : n.bot ? (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(s.Z, {
      type: "text",
      userId: n.id,
      onClose: r.Z.popAll,
      autoFocus: true
    }), (0, o.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: x,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  }) : j === p.OGo.PENDING_INCOMING ? (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(s.Z, {
      type: "text",
      userId: n.id,
      color: l.zx.Colors.BRAND,
      onClose: r.Z.popAll,
      autoFocus: true
    }), (0, o.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: x,
      themeColor: "secondary"
    })]
  }) : j === p.OGo.FRIEND || j === p.OGo.PENDING_OUTGOING ? (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(s.Z, {
      type: "text",
      userId: n.id,
      color: l.zx.Colors.BRAND,
      onClose: r.Z.popAll,
      autoFocus: true
    }), (0, o.jsx)(f.g, {
      type: "icon",
      user: n,
      relationshipType: j,
      shouldShowTooltip: true,
      themeColor: "secondary",
      analyticsLocation: v
    }), (0, o.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: x,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  }) : j === p.OGo.NONE && Z ? (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(s.Z, {
      type: "text",
      userId: n.id,
      onClose: r.Z.popAll,
      autoFocus: true
    }), (0, o.jsx)(f.k9, {
      type: "icon",
      user: n,
      analyticsLocation: v,
      themeColor: "secondary",
      gameFriends: _,
      tooltipPosition: "top",
      tooltipAlign: "center",
      shouldShowTooltip: true,
      hasIncomingPendingGameFriends: O,
      hasOutgoingPendingGameFriends: I
    }), (0, o.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: x,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  }) : (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(f.Z7, {
      type: "text",
      userId: n.id,
      analyticsLocation: v,
      color: l.zx.Colors.BRAND,
      autoFocus: true
    }), (0, o.jsx)(s.Z, {
      type: "icon",
      userId: n.id,
      onClose: r.Z.popAll,
      themeColor: "secondary"
    }), (0, o.jsx)(d.Z, {
      type: "icon",
      user: n,
      guildId: x,
      viewProfileItem: y,
      themeColor: "secondary"
    })]
  })
}
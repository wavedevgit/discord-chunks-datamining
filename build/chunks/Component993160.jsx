/** Chunk was on 12756 **/
/** chunk id: 993160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(e) {
  let {
    user: t,
    currentUser: n,
    guildId: g,
    channelId: b,
    displayProfile: j,
    relationshipType: y,
    onClose: O
  } = e, {
    newestAnalyticsLocation: h
  } = (0, o.ZP)(), x = (0, a.Z)({
    user: t,
    guildId: g,
    channelId: b,
    displayProfile: j,
    onClose: O
  }), {
    gameFriends: v,
    hasOutgoingPendingGameFriends: _,
    hasIncomingPendingGameFriends: I
  } = (0, p.H)({
    userId: t.id
  }), P = v.length > 0 || _ || I;
  return y === m.OGo.BLOCKED ? null : t.id === n.id ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      user: t,
      guildId: g,
      onClose: O
    }), (0, r.jsx)(u.Z, {
      onClose: O
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: t,
      guildId: g,
      viewProfileItem: x,
      themeColor: "secondary"
    })]
  }) : t.bot ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      type: "text",
      userId: t.id,
      onClose: l.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: t,
      guildId: g,
      viewProfileItem: x,
      themeColor: "secondary"
    })]
  }) : y === m.OGo.PENDING_INCOMING ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      type: "text",
      userId: t.id,
      color: i.zx.Colors.BRAND,
      onClose: l.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: t,
      guildId: g,
      themeColor: "secondary"
    })]
  }) : y === m.OGo.FRIEND || y === m.OGo.PENDING_OUTGOING ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      type: "text",
      userId: t.id,
      color: i.zx.Colors.BRAND,
      onClose: l.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(f.g, {
      type: "icon",
      user: t,
      relationshipType: y,
      shouldShowTooltip: true,
      themeColor: "secondary",
      analyticsLocation: h
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: t,
      guildId: g,
      viewProfileItem: x,
      themeColor: "secondary"
    })]
  }) : y === m.OGo.NONE && P ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      type: "text",
      userId: t.id,
      onClose: l.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(f.k9, {
      type: "icon",
      user: t,
      analyticsLocation: h,
      themeColor: "secondary",
      gameFriends: v,
      tooltipPosition: "top",
      tooltipAlign: "center",
      shouldShowTooltip: true,
      hasIncomingPendingGameFriends: I,
      hasOutgoingPendingGameFriends: _
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: t,
      guildId: g,
      viewProfileItem: x,
      themeColor: "secondary"
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.Z7, {
      type: "text",
      userId: t.id,
      analyticsLocation: h,
      color: i.zx.Colors.BRAND,
      autoFocus: true
    }), (0, r.jsx)(s.Z, {
      type: "icon",
      userId: t.id,
      onClose: l.Z.popAll,
      themeColor: "secondary"
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: t,
      guildId: g,
      viewProfileItem: x,
      themeColor: "secondary"
    })]
  })
}
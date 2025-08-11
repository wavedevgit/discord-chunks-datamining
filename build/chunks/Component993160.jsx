/** Chunk was on 11776 **/
/** chunk id: 993160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
    relationshipType: h,
    onClose: x
  } = e, {
    newestAnalyticsLocation: y
  } = (0, o.ZP)(), v = (0, a.Z)({
    user: t,
    guildId: g,
    channelId: b,
    displayProfile: j,
    onClose: x
  }), {
    gameFriends: O,
    hasOutgoingPendingGameFriends: _,
    hasIncomingPendingGameFriends: I
  } = (0, m.H)({
    userId: t.id
  }), P = O.length > 0 || _ || I;
  return h === p.OGo.BLOCKED ? null : t.id === n.id ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      user: t,
      guildId: g,
      onClose: x
    }), (0, r.jsx)(u.Z, {
      onClose: x
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: t,
      guildId: g,
      viewProfileItem: v,
      themeColor: "secondary"
    })]
  }) : t.bot ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      type: "text",
      userId: t.id,
      onClose: i.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: t,
      guildId: g,
      viewProfileItem: v,
      themeColor: "secondary"
    })]
  }) : h === p.OGo.PENDING_INCOMING ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      type: "text",
      userId: t.id,
      color: l.zx.Colors.BRAND,
      onClose: i.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: t,
      guildId: g,
      themeColor: "secondary"
    })]
  }) : h === p.OGo.FRIEND || h === p.OGo.PENDING_OUTGOING ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      type: "text",
      userId: t.id,
      color: l.zx.Colors.BRAND,
      onClose: i.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(f.g, {
      type: "icon",
      user: t,
      relationshipType: h,
      shouldShowTooltip: true,
      themeColor: "secondary",
      analyticsLocation: y
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: t,
      guildId: g,
      viewProfileItem: v,
      themeColor: "secondary"
    })]
  }) : h === p.OGo.NONE && P ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      type: "text",
      userId: t.id,
      onClose: i.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(f.k9, {
      type: "icon",
      user: t,
      analyticsLocation: y,
      themeColor: "secondary",
      gameFriends: O,
      tooltipPosition: "top",
      tooltipAlign: "center",
      shouldShowTooltip: true,
      hasIncomingPendingGameFriends: I,
      hasOutgoingPendingGameFriends: _
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: t,
      guildId: g,
      viewProfileItem: v,
      themeColor: "secondary"
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.Z7, {
      type: "text",
      userId: t.id,
      analyticsLocation: y,
      color: l.zx.Colors.BRAND,
      autoFocus: true
    }), (0, r.jsx)(s.Z, {
      type: "icon",
      userId: t.id,
      onClose: i.Z.popAll,
      themeColor: "secondary"
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: t,
      guildId: g,
      viewProfileItem: v,
      themeColor: "secondary"
    })]
  })
}
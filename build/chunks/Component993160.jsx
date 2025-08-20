/** Chunk was on 75283 **/
/** chunk id: 993160, original params: e,t,n (module,exports,require) **/
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
    user: t,
    currentUser: n,
    guildId: b,
    channelId: g,
    displayProfile: h,
    relationshipType: x,
    onClose: _
  } = e, {
    newestAnalyticsLocation: j
  } = (0, l.ZP)(), v = (0, a.Z)({
    user: t,
    guildId: b,
    channelId: g,
    displayProfile: h,
    onClose: _
  }), {
    gameFriends: y,
    hasOutgoingPendingGameFriends: I,
    hasIncomingPendingGameFriends: O
  } = (0, p.H)({
    userId: t.id
  }), Z = y.length > 0 || I || O;
  return x === m.OGo.BLOCKED ? null : t.id === n.id ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      user: t,
      guildId: b,
      onClose: _
    }), (0, r.jsx)(u.Z, {
      onClose: _
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: t,
      guildId: b,
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
      guildId: b,
      viewProfileItem: v,
      themeColor: "secondary"
    })]
  }) : x === m.OGo.PENDING_INCOMING ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      type: "text",
      userId: t.id,
      color: o.zx.Colors.BRAND,
      onClose: i.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: t,
      guildId: b,
      themeColor: "secondary"
    })]
  }) : x === m.OGo.FRIEND || x === m.OGo.PENDING_OUTGOING ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      type: "text",
      userId: t.id,
      color: o.zx.Colors.BRAND,
      onClose: i.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(f.g, {
      type: "icon",
      user: t,
      relationshipType: x,
      shouldShowTooltip: true,
      themeColor: "secondary",
      analyticsLocation: j
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: t,
      guildId: b,
      viewProfileItem: v,
      themeColor: "secondary"
    })]
  }) : x === m.OGo.NONE && Z ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      type: "text",
      userId: t.id,
      onClose: i.Z.popAll,
      autoFocus: true
    }), (0, r.jsx)(f.k9, {
      type: "icon",
      user: t,
      analyticsLocation: j,
      themeColor: "secondary",
      gameFriends: y,
      tooltipPosition: "top",
      tooltipAlign: "center",
      shouldShowTooltip: true,
      hasIncomingPendingGameFriends: O,
      hasOutgoingPendingGameFriends: I
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: t,
      guildId: b,
      viewProfileItem: v,
      themeColor: "secondary"
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.Z7, {
      type: "text",
      userId: t.id,
      analyticsLocation: j,
      color: o.zx.Colors.BRAND,
      autoFocus: true
    }), (0, r.jsx)(s.Z, {
      type: "icon",
      userId: t.id,
      onClose: i.Z.popAll,
      themeColor: "secondary"
    }), (0, r.jsx)(d.Z, {
      type: "icon",
      user: t,
      guildId: b,
      viewProfileItem: v,
      themeColor: "secondary"
    })]
  })
}
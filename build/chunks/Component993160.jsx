/** Chunk was on 93979 **/
/** chunk id: 993160, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => p
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

function p(e) {
  let {
    user: n,
    currentUser: t,
    guildId: p,
    channelId: x,
    displayProfile: h,
    relationshipType: b,
    onClose: v
  } = e, {
    newestAnalyticsLocation: j
  } = (0, o.ZP)(), g = (0, r.Z)({
    user: n,
    guildId: p,
    channelId: x,
    displayProfile: h,
    onClose: v
  }), {
    gameFriends: I,
    hasOutgoingPendingGameFriends: y,
    hasIncomingPendingGameFriends: Z
  } = (0, f.H)({
    userId: n.id
  }), O = I.length > 0 || y || Z;
  return b === m.OGo.BLOCKED ? null : n.id === t.id ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.Z, {
      user: n,
      guildId: p,
      onClose: v
    }), (0, l.jsx)(d.Z, {
      onClose: v
    }), (0, l.jsx)(s.wV, {
      user: n,
      guildId: p,
      viewProfileItem: g
    })]
  }) : n.bot ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(c.H, {
      userId: n.id,
      onClose: i.Z.popAll,
      autoFocus: true
    }), (0, l.jsx)(s.wV, {
      user: n,
      guildId: p,
      viewProfileItem: g
    })]
  }) : b === m.OGo.PENDING_INCOMING ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(c.H, {
      userId: n.id,
      onClose: i.Z.popAll,
      autoFocus: true
    }), (0, l.jsx)(s.wV, {
      user: n,
      guildId: p
    })]
  }) : b === m.OGo.FRIEND || b === m.OGo.PENDING_OUTGOING ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(c.H, {
      userId: n.id,
      onClose: i.Z.popAll,
      autoFocus: true
    }), (0, l.jsx)(u.n1, {
      user: n,
      relationshipType: b,
      analyticsLocation: j
    }), (0, l.jsx)(s.wV, {
      user: n,
      guildId: p,
      viewProfileItem: g
    })]
  }) : b === m.OGo.NONE && O ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(c.H, {
      userId: n.id,
      onClose: i.Z.popAll,
      autoFocus: true
    }), (0, l.jsx)(u.C0, {
      user: n,
      analyticsLocation: j,
      gameFriends: I,
      tooltipPosition: "top",
      tooltipAlign: "center",
      hasIncomingPendingGameFriends: Z,
      hasOutgoingPendingGameFriends: y
    }), (0, l.jsx)(s.wV, {
      user: n,
      guildId: p,
      viewProfileItem: g
    })]
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.Z7, {
      variant: "primary",
      userId: n.id,
      analyticsLocation: j,
      autoFocus: true
    }), (0, l.jsx)(c.v, {
      userId: n.id,
      onClose: i.Z.popAll,
      variant: "secondary"
    }), (0, l.jsx)(s.wV, {
      user: n,
      guildId: p,
      viewProfileItem: g
    })]
  })
}
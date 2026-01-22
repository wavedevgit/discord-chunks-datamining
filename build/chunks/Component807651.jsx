/** Chunk was on 64228 **/
/** chunk id: 807651, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk630054 = require("./630054.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk722868 = require("./722868.jsx"),
  Chunk822775 = require("./822775.jsx"),
  Chunk982985 = require("./982985.jsx"),
  Chunk853397 = require("./853397.jsx"),
  Chunk290090 = require("./290090.jsx"),
  Chunk697250 = require("./697250.jsx"),
  Chunk102951 = require("./102951.js"),
  Chunk652215 = require("./652215.js");

function m(e) {
  let {
    user: l,
    currentUser: t,
    guildId: m,
    channelId: x,
    displayProfile: A,
    relationshipType: j,
    onClose: h
  } = e, {
    newestAnalyticsLocation: g
  } = (0, r.Ay)(), v = (0, s.A)({
    user: l,
    guildId: m,
    channelId: x,
    displayProfile: A,
    onClose: h
  }), {
    gameFriends: b,
    hasOutgoingPendingGameFriends: I,
    hasIncomingPendingGameFriends: y
  } = (0, f.J)({
    userId: l.id
  }), O = b.length > 0 || I || y;
  return j === p.eA$.BLOCKED ? null : l.id === t.id ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(a.A, {
      user: l,
      guildId: m,
      onClose: h
    }), (0, n.jsx)(c.A, {
      onClose: h
    }), (0, n.jsx)(d.Zt, {
      user: l,
      guildId: m,
      viewProfileItem: v
    })]
  }) : l.bot ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.e, {
      userId: l.id,
      onClose: i.A.popAll,
      autoFocus: true
    }), (0, n.jsx)(d.Zt, {
      user: l,
      guildId: m,
      viewProfileItem: v
    })]
  }) : j === p.eA$.PENDING_INCOMING ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.e, {
      userId: l.id,
      onClose: i.A.popAll,
      autoFocus: true
    }), (0, n.jsx)(d.Zt, {
      user: l,
      guildId: m
    })]
  }) : j === p.eA$.FRIEND || j === p.eA$.PENDING_OUTGOING ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.e, {
      userId: l.id,
      onClose: i.A.popAll,
      autoFocus: true
    }), (0, n.jsx)(u.Ef, {
      user: l,
      relationshipType: j,
      analyticsLocation: g
    }), (0, n.jsx)(d.Zt, {
      user: l,
      guildId: m,
      viewProfileItem: v
    })]
  }) : j === p.eA$.NONE && O ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.e, {
      userId: l.id,
      onClose: i.A.popAll,
      autoFocus: true
    }), (0, n.jsx)(u.ES, {
      user: l,
      analyticsLocation: g,
      gameFriends: b,
      tooltipPosition: "top",
      tooltipAlign: "center",
      hasIncomingPendingGameFriends: y,
      hasOutgoingPendingGameFriends: I
    }), (0, n.jsx)(d.Zt, {
      user: l,
      guildId: m,
      viewProfileItem: v
    })]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(u.cO, {
      variant: "primary",
      userId: l.id,
      analyticsLocation: g,
      autoFocus: true
    }), (0, n.jsx)(o.l, {
      userId: l.id,
      onClose: i.A.popAll,
      variant: "secondary"
    }), (0, n.jsx)(d.Zt, {
      user: l,
      guildId: m,
      viewProfileItem: v
    })]
  })
}
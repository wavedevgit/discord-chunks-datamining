/** Chunk was on 64228 **/
/** chunk id: 807651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f(e) {
  let {
    user: t,
    currentUser: n,
    guildId: f,
    channelId: A,
    displayProfile: x,
    relationshipType: j,
    onClose: h
  } = e, {
    newestAnalyticsLocation: g
  } = (0, r.Ay)(), v = (0, s.A)({
    user: t,
    guildId: f,
    channelId: A,
    displayProfile: x,
    onClose: h
  }), {
    gameFriends: b,
    hasOutgoingPendingGameFriends: I,
    hasIncomingPendingGameFriends: y
  } = (0, p.J)({
    userId: t.id
  }), _ = b.length > 0 || I || y;
  return j === m.eA$.BLOCKED ? null : t.id === n.id ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.A, {
      user: t,
      guildId: f,
      onClose: h
    }), (0, l.jsx)(d.A, {
      onClose: h
    }), (0, l.jsx)(c.Zt, {
      user: t,
      guildId: f,
      viewProfileItem: v
    })]
  }) : t.bot ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.e, {
      userId: t.id,
      onClose: i.A.popAll,
      autoFocus: true
    }), (0, l.jsx)(c.Zt, {
      user: t,
      guildId: f,
      viewProfileItem: v
    })]
  }) : j === m.eA$.PENDING_INCOMING ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.e, {
      userId: t.id,
      onClose: i.A.popAll,
      autoFocus: true
    }), (0, l.jsx)(c.Zt, {
      user: t,
      guildId: f
    })]
  }) : j === m.eA$.FRIEND || j === m.eA$.PENDING_OUTGOING ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.e, {
      userId: t.id,
      onClose: i.A.popAll,
      autoFocus: true
    }), (0, l.jsx)(u.Ef, {
      user: t,
      relationshipType: j,
      analyticsLocation: g
    }), (0, l.jsx)(c.Zt, {
      user: t,
      guildId: f,
      viewProfileItem: v
    })]
  }) : j === m.eA$.NONE && _ ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.e, {
      userId: t.id,
      onClose: i.A.popAll,
      autoFocus: true
    }), (0, l.jsx)(u.ES, {
      user: t,
      analyticsLocation: g,
      gameFriends: b,
      tooltipPosition: "top",
      tooltipAlign: "center",
      hasIncomingPendingGameFriends: y,
      hasOutgoingPendingGameFriends: I
    }), (0, l.jsx)(c.Zt, {
      user: t,
      guildId: f,
      viewProfileItem: v
    })]
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.cO, {
      variant: "primary",
      userId: t.id,
      analyticsLocation: g,
      autoFocus: true
    }), (0, l.jsx)(a.l, {
      userId: t.id,
      onClose: i.A.popAll,
      variant: "secondary"
    }), (0, l.jsx)(c.Zt, {
      user: t,
      guildId: f,
      viewProfileItem: v
    })]
  })
}
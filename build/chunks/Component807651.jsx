/** Chunk was on 63974 **/
/** chunk id: 807651, original params: e,t,n (module,exports,require) **/
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
    user: t,
    currentUser: n,
    guildId: m,
    channelId: A,
    displayProfile: x,
    relationshipType: g,
    onClose: j
  } = e, {
    newestAnalyticsLocation: h
  } = (0, r.Ay)(), b = (0, s.A)({
    user: t,
    guildId: m,
    channelId: A,
    displayProfile: x,
    onClose: j
  }), {
    gameFriends: v,
    hasOutgoingPendingGameFriends: I,
    hasIncomingPendingGameFriends: y
  } = (0, p.J)({
    userId: t.id
  }), _ = v.length > 0 || I || y;
  return g === f.eA$.BLOCKED ? null : t.id === n.id ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.A, {
      user: t,
      guildId: m,
      onClose: j
    }), (0, l.jsx)(c.A, {
      onClose: j
    }), (0, l.jsx)(d.Zt, {
      user: t,
      guildId: m,
      viewProfileItem: b
    })]
  }) : t.bot ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.e, {
      userId: t.id,
      onClose: i.A.popAll,
      autoFocus: true
    }), (0, l.jsx)(d.Zt, {
      user: t,
      guildId: m,
      viewProfileItem: b
    })]
  }) : g === f.eA$.PENDING_INCOMING ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.e, {
      userId: t.id,
      onClose: i.A.popAll,
      autoFocus: true
    }), (0, l.jsx)(d.Zt, {
      user: t,
      guildId: m
    })]
  }) : g === f.eA$.FRIEND || g === f.eA$.PENDING_OUTGOING ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.e, {
      userId: t.id,
      onClose: i.A.popAll,
      autoFocus: true
    }), (0, l.jsx)(u.Ef, {
      user: t,
      relationshipType: g,
      analyticsLocation: h
    }), (0, l.jsx)(d.Zt, {
      user: t,
      guildId: m,
      viewProfileItem: b
    })]
  }) : g === f.eA$.NONE && _ ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.e, {
      userId: t.id,
      onClose: i.A.popAll,
      autoFocus: true
    }), (0, l.jsx)(u.ES, {
      user: t,
      analyticsLocation: h,
      gameFriends: v,
      tooltipPosition: "top",
      tooltipAlign: "center",
      hasIncomingPendingGameFriends: y,
      hasOutgoingPendingGameFriends: I
    }), (0, l.jsx)(d.Zt, {
      user: t,
      guildId: m,
      viewProfileItem: b
    })]
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.cO, {
      variant: "primary",
      userId: t.id,
      analyticsLocation: h,
      autoFocus: true
    }), (0, l.jsx)(a.l, {
      userId: t.id,
      onClose: i.A.popAll,
      variant: "secondary"
    }), (0, l.jsx)(d.Zt, {
      user: t,
      guildId: m,
      viewProfileItem: b
    })]
  })
}
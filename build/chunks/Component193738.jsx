/** Chunk was on web.js **/
/** chunk id: 193738, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk994500 = require("./994500.js"),
  Chunk697250 = require("./697250.jsx"),
  Chunk102951 = require("./102951.js"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js");

function f(e) {
  let {
    user: t,
    themeType: n
  } = e, {
    newestAnalyticsLocation: f
  } = (0, a.Ay)(), p = (0, i.bG)([s.default], () => s.default.getId() === t.id), _ = (0, i.bG)([o.A], () => o.A.getRelationshipType(t.id)), {
    gameFriends: h,
    hasOutgoingPendingGameFriends: m,
    hasIncomingPendingGameFriends: g
  } = (0, c.J)({
    userId: t.id
  }), E = h.length > 0 || m || g;
  if (null == t || t.bot || p || _ === u.eA$.BLOCKED) return null;
  if (_ === u.eA$.NONE && E) return n === d.d.MODAL ? null : (0, r.jsx)(l.VI, {
    user: t,
    gameFriends: h,
    hasOutgoingPendingGameFriends: m,
    hasIncomingPendingGameFriends: g,
    analyticsLocation: f
  });
  switch (_) {
    case u.eA$.FRIEND:
    case u.eA$.PENDING_INCOMING:
    case u.eA$.PENDING_OUTGOING:
      if (n === d.d.MODAL && _ !== u.eA$.FRIEND) return null;
      return (0, r.jsx)(l.bc, {
        user: t,
        relationshipType: _,
        analyticsLocation: f
      });
    default:
      if (n === d.d.MODAL) return null;
      return (0, r.jsx)(l.SE, {
        userId: t.id,
        analyticsLocation: f
      })
  }
}
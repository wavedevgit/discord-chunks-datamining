/** Chunk was on web.js **/
/** chunk id: 481932, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk699516 = require("./699516.js"),
  Chunk821706 = require("./821706.jsx"),
  Chunk562831 = require("./562831.js"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js");

function f(e) {
  let {
    user: t,
    themeType: n
  } = e, {
    newestAnalyticsLocation: f
  } = (0, a.ZP)(), p = (0, i.e7)([o.default], () => o.default.getId() === t.id), _ = (0, i.e7)([s.Z], () => s.Z.getRelationshipType(t.id)), {
    gameFriends: m,
    hasOutgoingPendingGameFriends: h,
    hasIncomingPendingGameFriends: g
  } = (0, c.H)({
    userId: t.id
  }), E = m.length > 0 || h || g;
  if (null == t || t.bot || p || _ === u.OGo.BLOCKED) return null;
  if (_ === u.OGo.NONE && E) return n === d.l.MODAL ? null : (0, r.jsx)(l.xv, {
    user: t,
    gameFriends: m,
    hasOutgoingPendingGameFriends: h,
    hasIncomingPendingGameFriends: g,
    analyticsLocation: f
  });
  switch (_) {
    case u.OGo.FRIEND:
    case u.OGo.PENDING_INCOMING:
    case u.OGo.PENDING_OUTGOING:
      if (n === d.l.MODAL && _ !== u.OGo.FRIEND) return null;
      return (0, r.jsx)(l.Xi, {
        user: t,
        relationshipType: _,
        analyticsLocation: f
      });
    default:
      if (n === d.l.MODAL) return null;
      return (0, r.jsx)(l.lJ, {
        userId: t.id,
        analyticsLocation: f
      })
  }
}
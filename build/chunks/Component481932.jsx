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
    themeType: n,
    shouldShowTooltip: f = false
  } = e, {
    newestAnalyticsLocation: _
  } = (0, a.ZP)(), p = (0, i.e7)([o.default], () => o.default.getId() === t.id), h = (0, i.e7)([s.Z], () => s.Z.getRelationshipType(t.id)), {
    gameFriends: m,
    hasOutgoingPendingGameFriends: g,
    hasIncomingPendingGameFriends: E
  } = (0, c.H)({
    userId: t.id
  }), b = m.length > 0 || g || E;
  if (null == t || t.bot || p || h === u.OGo.BLOCKED) return null;
  if (h === u.OGo.NONE && b) return n === d.l.MODAL ? null : (0, r.jsx)(l.k9, {
    type: "banner",
    user: t,
    gameFriends: m,
    hasOutgoingPendingGameFriends: g,
    hasIncomingPendingGameFriends: E,
    analyticsLocation: _,
    shouldShowTooltip: f
  });
  switch (h) {
    case u.OGo.FRIEND:
    case u.OGo.PENDING_INCOMING:
    case u.OGo.PENDING_OUTGOING:
      if (n === d.l.MODAL && h !== u.OGo.FRIEND) return null;
      return (0, r.jsx)(l.g, {
        type: "banner",
        user: t,
        relationshipType: h,
        analyticsLocation: _,
        shouldShowTooltip: f
      });
    default:
      if (n === d.l.MODAL) return null;
      return (0, r.jsx)(l.lJ, {
        userId: t.id,
        analyticsLocation: _
      })
  }
}
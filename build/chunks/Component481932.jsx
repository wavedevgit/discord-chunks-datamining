/** Chunk was on web.js **/
/** chunk id: 481932, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk699516 = require("./699516.js"),
  Chunk821706 = require("./821706.jsx"),
  Chunk562831 = require("./562831.js"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  let {
    user: t,
    themeType: n,
    shouldShowTooltip: f = false
  } = e, {
    newestAnalyticsLocation: _
  } = (0, o.ZP)(), p = (0, i.e7)([a.default], () => a.default.getId() === t.id), h = (0, i.e7)([s.Z], () => s.Z.getRelationshipType(t.id)), {
    gameFriends: m,
    hasOutgoingPendingGameFriends: g,
    hasIncomingPendingGameFriends: E
  } = (0, c.H)({
    userId: t.id
  }), b = m.length > 0 || g || E;
  if (null == t || t.bot || p || h === d.OGo.BLOCKED) return null;
  if (h === d.OGo.NONE && b) return n === u.lY.MODAL ? null : (0, r.jsx)(l.k9, {
    type: "banner",
    user: t,
    gameFriends: m,
    hasOutgoingPendingGameFriends: g,
    hasIncomingPendingGameFriends: E,
    analyticsLocation: _,
    shouldShowTooltip: f
  });
  switch (h) {
    case d.OGo.FRIEND:
    case d.OGo.PENDING_INCOMING:
    case d.OGo.PENDING_OUTGOING:
      if (n === u.lY.MODAL && h !== d.OGo.FRIEND) return null;
      return (0, r.jsx)(l.g, {
        type: "banner",
        user: t,
        relationshipType: h,
        analyticsLocation: _,
        shouldShowTooltip: f
      });
    default:
      if (n === u.lY.MODAL) return null;
      return (0, r.jsx)(l.Z7, {
        type: "banner",
        userId: t.id,
        shouldShowTooltip: f,
        analyticsLocation: _
      })
  }
}
/** Chunk was on web.js **/
/** chunk id: 376708, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C$: () => b,
  Fo: () => g,
  G9: () => A,
  KB: () => _,
  Mn: () => O,
  Yj: () => v,
  iU: () => m,
  uW: () => y,
  xJ: () => E
}), require("./638769.js"), require("./136722.js");
var Chunk811602 = require("./811602.js"),
  Chunk282108 = require("./282108.js"),
  Chunk927492 = require("./927492.js"),
  Chunk969043 = require("./969043.js");
require("./134413.js");
var Chunk203389 = require("./203389.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk320501 = require("./320501.js");
require("./287809.js"), require("./488926.js");
var Chunk628691 = require("./628691.js"),
  Chunk272720 = require("./272720.js"),
  Chunk56595 = require("./56595.js");

function _(e) {
  if (!(0, d.UN)(e.author)) returnfalse;
  let t = l.A.getChannel(e.channel_id);
  if (null == t) returnfalse;
  let n = c.A.getGuild(t.guild_id);
  if (null == n) returnfalse;
  let r = (0, p.A)(n),
    i = (0, f.A)(n);
  return r && null != i
}

function h(e) {
  return y(l.A.getChannel(e))
}

function m(e) {
  return g(l.A.getChannel(e))
}

function g(e) {
  return null != e && e.isModeratorReportChannel() && e.isForumChannel()
}

function E(e) {
  return null != e && e.isModeratorReportChannel() && e.isForumPost()
}

function y(e) {
  return null != e && (g(e) || E(e))
}

function b(e) {
  if (null == e || !(0, o.L)() || !h(e)) returntrue;
  let {
    loaded: t,
    firstMessage: n
  } = s.A.getMessage(e);
  return !t || null == n || !(0, i.y5)(n, r.LO.EXPLICIT)
}

function O(e, t) {
  return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && E(t)
}

function v(e) {
  return e.sort((e, t) => e.id == a.b.MULTIPLE_REPORTS ? false : +(t.id == a.b.MULTIPLE_REPORTS))
}

function A(e, t) {
  var n, r, i;
  let a = l.A.getChannel(e);
  if (null == a || !a.isModeratorReportChannel()) returnfalse;
  let s = u.A.getMessages(e).first();
  return (null == s || null == (i = s.messageSnapshots) || null == (r = i[0]) || null == (n = r.moderatorReport) ? true : n.reported_user_id) === t
}
require("./953660.js")
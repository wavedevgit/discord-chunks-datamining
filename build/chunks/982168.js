/** Chunk was on web.js **/
/** chunk id: 982168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gi: () => O,
  H0: () => S,
  P0: () => b,
  UD: () => h,
  WF: () => y,
  gT: () => E,
  iZ: () => g,
  iq: () => v,
  sP: () => _
}), require("./642613.js"), require("./149765.js");
var Chunk294509 = require("./294509.js"),
  Chunk629710 = require("./629710.js"),
  Chunk860164 = require("./860164.js"),
  Chunk660189 = require("./660189.js");
require("./241559.js");
var Chunk182274 = require("./182274.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js");
require("./594174.js"), require("./700785.js");
var Chunk970257 = require("./970257.js"),
  Chunk893908 = require("./893908.js"),
  Chunk953252 = require("./953252.js");

function _(e) {
  if (!(0, d.Fi)(e.author)) returnfalse;
  let t = l.Z.getChannel(e.channel_id);
  if (null == t) returnfalse;
  let n = c.Z.getGuild(t.guild_id);
  if (null == n) returnfalse;
  let r = (0, p.Z)(n),
    i = (0, f.Z)(n);
  return r && null != i
}

function m(e) {
  return b(l.Z.getChannel(e))
}

function h(e) {
  return g(l.Z.getChannel(e))
}

function g(e) {
  return null != e && e.isModeratorReportChannel() && e.isForumChannel()
}

function E(e) {
  return null != e && e.isModeratorReportChannel() && e.isForumPost()
}

function b(e) {
  return null != e && (g(e) || E(e))
}

function y(e) {
  if (null == e || !(0, s.U)() || !m(e)) returntrue;
  let {
    loaded: t,
    firstMessage: n
  } = a.Z.getMessage(e);
  return !t || null == n || !(0, i.X6)(n, r.qn.EXPLICIT)
}

function O(e, t) {
  return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && E(t)
}

function v(e) {
  return e.sort((e, t) => e.id == o.a.MULTIPLE_REPORTS ? false : +(t.id == o.a.MULTIPLE_REPORTS))
}

function S(e, t) {
  var n, r, i;
  let o = l.Z.getChannel(e);
  if (null == o || !o.isModeratorReportChannel()) returnfalse;
  let a = u.Z.getMessages(e).first();
  return (null == a || null == (i = a.messageSnapshots) || null == (r = i[0]) || null == (n = r.moderatorReport) ? true : n.reported_user_id) === t
}
require("./806246.js")
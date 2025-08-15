/** Chunk was on web.js **/
/** chunk id: 982168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gi: () => y,
  P0: () => E,
  UD: () => h,
  WF: () => b,
  gT: () => g,
  iZ: () => m,
  iq: () => O,
  sP: () => _
}), require("./642613.js"), require("./149765.js");
var Chunk294509 = require("./294509.js"),
  Chunk629710 = require("./629710.js"),
  Chunk860164 = require("./860164.js"),
  Chunk660189 = require("./660189.js");
require("./241559.js");
var Chunk182274 = require("./182274.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js");
require("./594174.js"), require("./700785.js");
var Chunk970257 = require("./970257.js"),
  Chunk893908 = require("./893908.js"),
  Chunk953252 = require("./953252.js");

function _(e) {
  if (!(0, u.Fi)(e.author)) returnfalse;
  let t = l.Z.getChannel(e.channel_id);
  if (null == t) returnfalse;
  let n = c.Z.getGuild(t.guild_id);
  if (null == n) returnfalse;
  let r = (0, f.Z)(n),
    i = (0, d.Z)(n);
  return r && null != i
}

function p(e) {
  return E(l.Z.getChannel(e))
}

function h(e) {
  return m(l.Z.getChannel(e))
}

function m(e) {
  return null != e && e.isModeratorReportChannel() && e.isForumChannel()
}

function g(e) {
  return null != e && e.isModeratorReportChannel() && e.isForumPost()
}

function E(e) {
  return null != e && (m(e) || g(e))
}

function b(e) {
  if (null == e || !(0, s.U)() || !p(e)) returntrue;
  let {
    loaded: t,
    firstMessage: n
  } = o.Z.getMessage(e);
  return !t || null == n || !(0, i.X6)(n, r.qn.EXPLICIT)
}

function y(e, t) {
  return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && g(t)
}

function O(e) {
  return e.sort((e, t) => e.id == a.a.MULTIPLE_REPORTS ? false : +(t.id == a.a.MULTIPLE_REPORTS))
}
require("./806246.js")
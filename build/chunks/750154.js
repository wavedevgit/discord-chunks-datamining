/** Chunk was on web.js **/
/** chunk id: 750154, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JE: () => h,
  Lw: () => p,
  dS: () => m,
  rq: () => _
}), require("./388685.js"), require("./35282.js");
var Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk88751 = require("./88751.js"),
  Chunk157925 = require("./157925.js"),
  Chunk981631 = require("./981631.js");
let c = "stage:",
  u = 1,
  d = 2,
  f = 4;

function p(e, t) {
  let n = 0,
    i = r.default.getId();
  a.ZP.isSpeaker(i, e.id) && (n |= u);
  let s = o.Z.getGuild(e.getGuildId());
  null != s && (s.features.has(l.GuildFeatures.PARTNERED) && (n |= d), s.features.has(l.GuildFeatures.VERIFIED) && (n |= f));
  let p = n.toString(16);
  return "".concat(c).concat(e.guild_id, ":").concat(e.id, ":").concat(p, ":").concat(t.id)
}

function _(e) {
  if (null == e || null == e.party) return;
  let {
    id: t,
    size: n
  } = e.party;
  try {
    if (null == t || !t.startsWith(c)) return;
    let [, e, r, i, o] = t.split(":"), a = parseInt(i, 16);
    return {
      guildId: e,
      channelId: r,
      size: n,
      userIsSpeaker: (a & u) != 0,
      guildIsPartnered: (a & d) != 0,
      guildIsVerified: (a & f) != 0,
      stageInstanceId: o
    }
  } catch (e) {
    return null
  }
}

function m(e) {
  return (null == e ? true : e.application_id) === s.gD
}

function h(e) {
  let t = _(e);
  if (null == t) returnfalse;
  let {
    channelId: n
  } = t;
  return null != i.Z.getChannel(n)
}
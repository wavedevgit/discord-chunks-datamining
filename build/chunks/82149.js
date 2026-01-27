/** Chunk was on web.js **/
/** chunk id: 82149, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cy: () => h,
  IS: () => m,
  UW: () => _,
  eL: () => p
}), require("./896048.js"), require("./747238.js");
var Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk312006 = require("./312006.js"),
  Chunk516607 = require("./516607.js"),
  Chunk652215 = require("./652215.js");
let c = "stage:",
  u = 1,
  d = 2,
  f = 4;

function p(e, t) {
  let n = 0,
    i = r.default.getId();
  o.Ay.isSpeaker(i, e.id) && (n |= u);
  let s = a.A.getGuild(e.getGuildId());
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
    let [, e, r, i, a] = t.split(":"), o = parseInt(i, 16);
    return {
      guildId: e,
      channelId: r,
      size: n,
      userIsSpeaker: (o & u) != 0,
      guildIsPartnered: (o & d) != 0,
      guildIsVerified: (o & f) != 0,
      stageInstanceId: a
    }
  } catch (e) {
    return null
  }
}

function h(e) {
  return (null == e ? true : e.application_id) === s.SS
}

function m(e) {
  let t = _(e);
  if (null == t) returnfalse;
  let {
    channelId: n
  } = t;
  return null != i.A.getChannel(n)
}
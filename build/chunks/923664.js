/** Chunk was on web.js **/
/** chunk id: 923664, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => u,
  w: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk110259 = require("./110259.js"),
  Chunk496675 = require("./496675.js"),
  Chunk300429 = require("./300429.js"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  if (n.can(l.Plq.BYPASS_SLOWMODE, e)) returntrue;
  if (i.Z.getCurrentConfig({
      guildId: e.guild_id,
      location: "canBypassSlowmodeHelper"
    }).enabled) returnfalse;
  switch (t) {
    case o.S.SendMessage:
      return n.can(l.Plq.MANAGE_CHANNELS, e) || n.can(l.Plq.MANAGE_MESSAGES, e);
    case o.S.CreateThread:
      return n.can(l.Plq.MANAGE_THREADS, e);
    default:
      (0, s.vE)(t)
  }
}

function u(e, t) {
  return c(e, t, a.Z)
}

function d(e, t) {
  return (0, r.e7)([a.Z], () => c(e, t, a.Z))
}
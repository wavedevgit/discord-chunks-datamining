/** Chunk was on web.js **/
/** chunk id: 960850, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => u,
  _: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk937161 = require("./937161.js"),
  Chunk576705 = require("./576705.js"),
  Chunk101392 = require("./101392.js"),
  Chunk403362 = require("./403362.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  if (n.can(l.xBc.BYPASS_SLOWMODE, e)) returntrue;
  if (i.A.getCurrentConfig({
      guildId: e.guild_id,
      location: "canBypassSlowmodeHelper"
    }).enabled) returnfalse;
  switch (t) {
    case o.R.SendMessage:
      return n.can(l.xBc.MANAGE_CHANNELS, e) || n.can(l.xBc.MANAGE_MESSAGES, e);
    case o.R.CreateThread:
      return n.can(l.xBc.MANAGE_THREADS, e);
    default:
      (0, s.xb)(t)
  }
}

function u(e, t) {
  return c(e, t, a.A)
}

function d(e, t) {
  return (0, r.bG)([a.A], () => c(e, t, a.A))
}
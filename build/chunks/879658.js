/** Chunk was on web.js **/
/** chunk id: 879658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => c
}), require("./896048.js");
var Chunk734057 = require("./734057.js"),
  Chunk711014 = require("./711014.js"),
  Chunk447508 = require("./447508.js"),
  Chunk27548 = require("./27548.js"),
  Chunk552618 = require("./552618.js"),
  Chunk652215 = require("./652215.js");

function c(e, t) {
  if (e.totalLength >= t) return e;
  let n = new a.o(e.primaryCapacity, e.extendedCapacity),
    l = t - e.totalLength;
  for (let t of i.Ay.getGuildFolders())
    for (let i of t.guildIds)
      for (let t of Object.values(r.A.getMutableBasicGuildChannelsForGuild(i)))
        if (u(t) && (0, o.c)(t) && !(0, s.qA)(t) && d(i, t, n), n.totalLength >= l) return f(n, e);
  return f(n, e)
}

function u(e) {
  return e.type === l.rbe.DM || e.type === l.rbe.GROUP_DM || e.type === l.rbe.GUILD_TEXT
}

function d(e, t, n) {
  n.hasExtended(t.id) || n.put(t.id, {
    guildId: e,
    channelId: t.id,
    channelType: t.type,
    fallback: true
  })
}

function f(e, t) {
  for (let [n, r] of t.allEntries()) e.put(n, r);
  return e
}
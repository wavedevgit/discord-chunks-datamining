/** Chunk was on web.js **/
/** chunk id: 872261, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => c
}), require("./388685.js");
var Chunk592125 = require("./592125.js"),
  Chunk771845 = require("./771845.js"),
  Chunk553245 = require("./553245.js"),
  Chunk814074 = require("./814074.js"),
  Chunk989263 = require("./989263.js"),
  Chunk981631 = require("./981631.js");

function c(e, t) {
  if (e.totalLength >= t) return e;
  let n = new o.b(e.primaryCapacity, e.extendedCapacity),
    l = t - e.totalLength;
  for (let t of i.ZP.getGuildFolders())
    for (let i of t.guildIds)
      for (let t of Object.values(r.Z.getMutableBasicGuildChannelsForGuild(i)))
        if (u(t) && (0, s.v)(t) && !(0, a.Hr)(t) && d(i, t, n), n.totalLength >= l) return f(n, e);
  return f(n, e)
}

function u(e) {
  return e.type === l.d4z.DM || e.type === l.d4z.GROUP_DM || e.type === l.d4z.GUILD_TEXT
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
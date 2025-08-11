/** Chunk was on web.js **/
/** chunk id: 277800, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk149765 = require("./149765.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js");
let s = [Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_VOICE, Chunk981631.d4z.GUILD_ANNOUNCEMENT, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.PUBLIC_THREAD, Chunk981631.d4z.PRIVATE_THREAD],
  l = Chunk149765.$e(Chunk981631.Plq.VIEW_CHANNEL, Chunk981631.Plq.SEND_MESSAGES);

function c(e) {
  if (null == e || !s.includes(e.type)) return [];
  let t = o.Z.getGuild(e.guild_id);
  return null == t ? [] : Object.values(e.permissionOverwrites).filter(e => {
    var n, o;
    return 0 === e.type && (null == (o = i.Z.getRole(t.id, e.id)) || null == (n = o.tags) ? true : n.guild_connections) === null && !r.Db(e.deny, l)
  }).map(e => i.Z.getRole(t.id, e.id)).filter(e => null != e)
}
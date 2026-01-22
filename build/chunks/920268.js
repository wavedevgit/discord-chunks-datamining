/** Chunk was on web.js **/
/** chunk id: 920268, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk136722 = require("./136722.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js");
let o = [Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_VOICE, Chunk652215.rbe.GUILD_ANNOUNCEMENT, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.PUBLIC_THREAD, Chunk652215.rbe.PRIVATE_THREAD],
  l = Chunk136722.kg(Chunk652215.xBc.VIEW_CHANNEL, Chunk652215.xBc.SEND_MESSAGES);

function c(e) {
  if (null == e || !o.includes(e.type)) return [];
  let t = a.A.getGuild(e.guild_id);
  return null == t ? [] : Object.values(e.permissionOverwrites).filter(e => {
    var n, a;
    return 0 === e.type && (null == (a = i.A.getRole(t.id, e.id)) || null == (n = a.tags) ? true : n.guild_connections) === null && !r.X8(e.deny, l)
  }).map(e => i.A.getRole(t.id, e.id)).filter(e => null != e)
}
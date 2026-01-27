/** Chunk was on web.js **/
/** chunk id: 148719, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk136722 = require("./136722.js"),
  Chunk95701 = require("./95701.js"),
  Chunk488926 = require("./488926.js"),
  Chunk818348 = require("./818348.js");

function s(e) {
  if (null == e) returnfalse;
  let {
    type: t
  } = e;
  if (null == e.guild_id || !i.JT.has(t)) returnfalse;
  if (e.isGuildVocal() && !a.MJ(o.xB.CONNECT, e)) returntrue;
  let n = e.permissionOverwrites[e.guild_id];
  return null != n && r.zy(n.deny, o.xB.VIEW_CHANNEL)
}
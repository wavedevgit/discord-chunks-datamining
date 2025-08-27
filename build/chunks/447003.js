/** Chunk was on web.js **/
/** chunk id: 447003, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk149765 = require("./149765.js"),
  Chunk131704 = require("./131704.js"),
  Chunk700785 = require("./700785.js"),
  Chunk231338 = require("./231338.js");

function s(e) {
  if (null == e) returnfalse;
  let {
    type: t
  } = e;
  if (null == e.guild_id || !i.zS.has(t)) returnfalse;
  if (e.isGuildVocal() && !a.Uu(o.Pl.CONNECT, e)) returntrue;
  let n = e.permissionOverwrites[e.guild_id];
  return null != n && r.e$(n.deny, o.Pl.VIEW_CHANNEL)
}
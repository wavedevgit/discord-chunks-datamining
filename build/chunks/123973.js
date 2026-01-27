/** Chunk was on web.js **/
/** chunk id: 123973, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  l: () => s
});
var Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk652215 = require("./652215.js");

function s() {
  let e = a.A.getVoiceChannelId();
  return l(r.A.getChannel(e))
}

function l(e) {
  if (null == e) returnfalse;
  if (o.kvI.CALLABLE.has(e.type)) returntrue;
  let t = i.A.can(o.xBc.USE_SOUNDBOARD, e),
    n = i.A.can(o.xBc.SPEAK, e);
  return e.isGuildVoiceOrThread() && t && n
}
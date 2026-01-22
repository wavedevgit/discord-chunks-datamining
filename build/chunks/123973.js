/** Chunk was on web.js **/
/** chunk id: 123973, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  l: () => o
});
var Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk652215 = require("./652215.js");

function o() {
  let e = a.A.getVoiceChannelId();
  return l(r.A.getChannel(e))
}

function l(e) {
  if (null == e) returnfalse;
  if (s.kvI.CALLABLE.has(e.type)) returntrue;
  let t = i.A.can(s.xBc.USE_SOUNDBOARD, e),
    n = i.A.can(s.xBc.SPEAK, e);
  return e.isGuildVoiceOrThread() && t && n
}
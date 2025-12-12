/** Chunk was on web.js **/
/** chunk id: 641015, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => s,
  Z: () => l
});
var Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js");

function s() {
  let e = Chunk944486.Z.getVoiceChannelId();
  return l(Chunk592125.Z.getChannel(module))
}

function l(e) {
  if (null == e) returnfalse;
  if (a.TPd.CALLABLE.has(e.type)) returntrue;
  let t = i.Z.can(a.Plq.USE_SOUNDBOARD, e),
    n = i.Z.can(a.Plq.SPEAK, e);
  return e.isGuildVoiceOrThread() && t && n
}
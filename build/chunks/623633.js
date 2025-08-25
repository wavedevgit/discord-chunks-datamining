/** Chunk was on web.js **/
/** chunk id: 623633, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js");

function a() {
  return (0, Chunk442837.e7)([Chunk944486.Z, Chunk592125.Z], () => {
    let e = Chunk944486.Z.getVoiceChannelId();
    if (null != module) {
      let t = Chunk592125.Z.getChannel(module);
      if (null == exports ? true : exports.isGuildStageVoice()) return exports
    }
    return null
  })
}
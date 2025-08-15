/** Chunk was on 92522 **/
/** chunk id: 623633, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js");

function u() {
  return (0, Chunk442837.e7)([Chunk944486.Z, Chunk592125.Z], () => {
    let n = Chunk944486.Z.getVoiceChannelId();
    if (null != module) {
      let e = Chunk592125.Z.getChannel(module);
      if (null == exports ? true : exports.isGuildStageVoice()) return exports
    }
    return null
  })
}
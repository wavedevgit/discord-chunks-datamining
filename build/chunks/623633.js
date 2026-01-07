/** Chunk was on web.js **/
/** chunk id: 623633, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js");

function o() {
  return (0, r.e7)([a.Z, i.Z], () => {
    let e = a.Z.getVoiceChannelId();
    if (null != e) {
      let t = i.Z.getChannel(e);
      if (null == t ? true : t.isGuildStageVoice()) return t
    }
    return null
  })
}
/** Chunk was on web.js **/
/** chunk id: 354583, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js");

function s() {
  return (0, r.bG)([a.A, i.A], () => {
    let e = a.A.getVoiceChannelId();
    if (null != e) {
      let t = i.A.getChannel(e);
      if (null == t ? true : t.isGuildStageVoice()) return t
    }
    return null
  })
}
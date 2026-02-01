/** Chunk was on 78229 **/
/** chunk id: 354583, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js");

function a() {
  return (0, r.bG)([l.A, i.A], () => {
    let e = l.A.getVoiceChannelId();
    if (null != e) {
      let t = i.A.getChannel(e);
      if (null == t ? true : t.isGuildStageVoice()) return t
    }
    return null
  })
}
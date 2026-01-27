/** Chunk was on 96430 **/
/** chunk id: 354583, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js");

function l() {
  return (0, r.bG)([a.A, i.A], () => {
    let t = a.A.getVoiceChannelId();
    if (null != t) {
      let e = i.A.getChannel(t);
      if (null == e ? true : e.isGuildStageVoice()) return e
    }
    return null
  })
}
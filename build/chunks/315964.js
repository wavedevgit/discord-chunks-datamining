/** Chunk was on 1272 **/
/** chunk id: 315964, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk570140 = require("./570140.js"),
  Chunk142497 = require("./142497.js"),
  Chunk190378 = require("./190378.js");
let a = {
  init() {
    r.Z.subscribe("VOICE_CHANNEL_SELECT", e => {
      let {
        channelId: t
      } = e;
      null == t && i.Kw(l.v.VOICE_PANEL_INTRODUCTION)
    })
  }
}
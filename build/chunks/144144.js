/** Chunk was on 78086 **/
/** chunk id: 144144, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk570140 = require("./570140.js");
let i = {
  startTyping(e) {
    r.Z.dispatch({
      type: "TYPING_START_LOCAL",
      channelId: e
    })
  },
  stopTyping(e) {
    r.Z.dispatch({
      type: "TYPING_STOP_LOCAL",
      channelId: e
    })
  }
}
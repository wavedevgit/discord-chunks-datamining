/** Chunk was on 50963 **/
"use strict";
n.d(t, {
  Z: () => o
});
var r = n(570140);
let o = {
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
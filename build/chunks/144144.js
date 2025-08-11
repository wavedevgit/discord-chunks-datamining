/** Chunk was on web.js **/
/** chunk id: 144144, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
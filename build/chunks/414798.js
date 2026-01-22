/** Chunk was on web.js **/
/** chunk id: 414798, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk73153 = require("./73153.js");
let i = {
  startTyping(e) {
    r.h.dispatch({
      type: "TYPING_START_LOCAL",
      channelId: e
    })
  },
  stopTyping(e) {
    r.h.dispatch({
      type: "TYPING_STOP_LOCAL",
      channelId: e
    })
  }
}
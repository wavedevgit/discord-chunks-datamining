/** Chunk was on web.js **/
/** chunk id: 923500, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk570140 = require("./570140.js");
let i = {
  disableFalsePositiveButton: function(e, t) {
    r.Z.dispatch({
      type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT",
      messageId: t,
      channelId: e
    })
  }
}
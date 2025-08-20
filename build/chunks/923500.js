/** Chunk was on 57539 **/
/** chunk id: 923500, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk570140 = require("./570140.js");
let a = {
  disableFalsePositiveButton: function(t, e) {
    i.Z.dispatch({
      type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT",
      messageId: e,
      channelId: t
    })
  }
}
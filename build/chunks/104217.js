/** Chunk was on 66009 **/
/** chunk id: 104217, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk73153 = require("./73153.js");
let l = {
  disableFalsePositiveButton: function(t, e) {
    i.h.dispatch({
      type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT",
      messageId: e,
      channelId: t
    })
  }
}
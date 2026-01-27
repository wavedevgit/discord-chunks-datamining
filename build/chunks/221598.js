/** Chunk was on 41727 **/
/** chunk id: 221598, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk73153 = require("./73153.js");
let l = {
  setCallChatToastsEnabled(e, t) {
    r.h.dispatch({
      type: "CALL_CHAT_TOASTS_SET_ENABLED",
      channelId: e,
      toastsEnabled: t
    })
  }
}
/** Chunk was on 81985 **/
/** chunk id: 963876, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk570140 = require("./570140.js");
let i = {
  setCallChatToastsEnabled(e, t) {
    r.Z.dispatch({
      type: "CALL_CHAT_TOASTS_SET_ENABLED",
      channelId: e,
      toastsEnabled: t
    })
  }
}
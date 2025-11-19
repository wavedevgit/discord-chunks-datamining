/** Chunk was on 34740 **/
/** chunk id: 963876, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk570140 = require("./570140.js");
let r = {
  setCallChatToastsEnabled(e, t) {
    i.Z.dispatch({
      type: "CALL_CHAT_TOASTS_SET_ENABLED",
      channelId: e,
      toastsEnabled: t
    })
  }
}
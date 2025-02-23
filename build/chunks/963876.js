/** Chunk was on 71611 (f97ce343811d4d7d.js) **/
n.d(t, {
  Z: () => i
});
var r = n(570140);
let i = {
  setCallChatToastsEnabled(e, t) {
    r.Z.dispatch({
      type: "CALL_CHAT_TOASTS_SET_ENABLED",
      channelId: e,
      toastsEnabled: t
    })
  }
}
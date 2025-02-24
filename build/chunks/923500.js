/** Chunk was on 11814 (e7d0d068f6450d5d.js) **/
n.d(t, {
  Z: () => i
});
var r = n(570140);
let i = {
  disableFalsePositiveButton: function(e, t) {
    r.Z.dispatch({
      type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT",
      messageId: t,
      channelId: e
    })
  }
}
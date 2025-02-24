/** Chunk was on 93886 (c39579f01d1aedae.js) **/
n.d(t, {
  Z: () => i
});
var r = n(544891),
  a = n(981631);
let i = {
  updatePrivateChannelRecipientFlags: (e, t) => r.tn.patch({
    url: a.ANM.CHANNEL_RECIPIENT_ME(e),
    body: {
      flags: t
    },
    rejectWithError: !1
  })
}
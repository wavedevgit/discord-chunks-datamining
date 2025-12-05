/** Chunk was on 93886 **/
/** chunk id: 258732, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let a = {
  updatePrivateChannelRecipientFlags: (e, t) => r.tn.patch({
    url: i.ANM.CHANNEL_RECIPIENT_ME(e),
    body: {
      flags: t
    },
    rejectWithError: false
  })
}
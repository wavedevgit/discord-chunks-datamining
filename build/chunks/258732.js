/** Chunk was on 90550 **/
/** chunk id: 258732, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let l = {
  updatePrivateChannelRecipientFlags: (e, n) => r.tn.patch({
    url: i.ANM.CHANNEL_RECIPIENT_ME(e),
    body: {
      flags: n
    },
    rejectWithError: false
  })
}
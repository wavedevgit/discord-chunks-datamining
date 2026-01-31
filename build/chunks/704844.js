/** Chunk was on 20725 **/
/** chunk id: 704844, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk652215 = require("./652215.js");
let s = {
  updatePrivateChannelRecipientFlags: (e, t) => l.Bo.patch({
    url: r.Rsh.CHANNEL_RECIPIENT_ME(e),
    body: {
      flags: t
    },
    rejectWithError: false
  })
}
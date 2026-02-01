/** Chunk was on 30819 **/
/** chunk id: 704844, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk562465 = require("./562465.js"),
  Chunk652215 = require("./652215.js");
let i = {
  updatePrivateChannelRecipientFlags: (e, t) => n.Bo.patch({
    url: o.Rsh.CHANNEL_RECIPIENT_ME(e),
    body: {
      flags: t
    },
    rejectWithError: false
  })
}
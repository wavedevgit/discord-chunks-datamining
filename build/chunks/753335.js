/** Chunk was on 1272 **/
/** chunk id: 753335, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk570140 = require("./570140.js"),
  Chunk703656 = require("./703656.js"),
  Chunk998502 = require("./998502.js"),
  Chunk852926 = require("./852926.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
let c = {
  [Chunk981631.Etm.OPEN_MESSAGE]: {
    scope: Chunk186901.lH,
    handler(e) {
      let {
        args: {
          guild_id: t,
          channel_id: n,
          message_id: s,
          pid: c
        }
      } = e;
      if ((0, a.jU)(c).context === o.IlC.OVERLAY) return void r.Z.dispatch({
        type: "OVERLAY_OPEN_MESSAGE",
        guildId: t,
        channelId: n,
        messageId: s
      });
      (0, i.dL)({
        pathname: o.Z5c.CHANNEL(t, n, s)
      }), l.ZP.focus()
    }
  }
}
/** Chunk was on 21738 **/
/** chunk id: 1791, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk73153 = require("./73153.js"),
  Chunk976860 = require("./976860.js"),
  Chunk837921 = require("./837921.js"),
  Chunk546983 = require("./546983.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");
let c = {
  [Chunk652215.e$_.OPEN_MESSAGE]: {
    scope: Chunk613057.hj,
    handler(e) {
      let {
        args: {
          guild_id: t,
          channel_id: n,
          message_id: s,
          pid: c
        }
      } = e;
      (0, a.d5)(c).context === o.BRT.OVERLAY ? r.h.dispatch({
        type: "OVERLAY_OPEN_MESSAGE",
        guildId: t,
        channelId: n,
        messageId: s
      }) : ((0, i.bG)({
        pathname: o.BVt.CHANNEL(t, n, s)
      }), l.Ay.focus())
    }
  }
}
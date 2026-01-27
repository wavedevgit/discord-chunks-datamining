/** Chunk was on 59735 **/
/** chunk id: 686449, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk73153 = require("./73153.js"),
  Chunk931260 = require("./931260.js"),
  Chunk543465 = require("./543465.js");
let c = {
  update(e) {
    n.h.dispatch({
      type: "CHANNEL_COLLAPSE",
      channelId: e
    })
  },
  toggleCollapseGuild(e) {
    i.A.saveUserGuildSettings(e, {
      hide_muted_channels: !o.Ay.isGuildCollapsed(e)
    }), n.h.dispatch({
      type: "GUILD_TOGGLE_COLLAPSE_MUTED",
      guildId: e
    })
  }
}
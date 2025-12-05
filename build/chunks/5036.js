/** Chunk was on 87154 **/
/** chunk id: 5036, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk570140 = require("./570140.js"),
  Chunk149071 = require("./149071.js"),
  Chunk9156 = require("./9156.js");
let o = {
  update(e) {
    r.Z.dispatch({
      type: "CHANNEL_COLLAPSE",
      channelId: e
    })
  },
  toggleCollapseGuild(e) {
    i.Z.saveUserGuildSettings(e, {
      hide_muted_channels: !l.ZP.isGuildCollapsed(e)
    }), r.Z.dispatch({
      type: "GUILD_TOGGLE_COLLAPSE_MUTED",
      guildId: e
    })
  }
}
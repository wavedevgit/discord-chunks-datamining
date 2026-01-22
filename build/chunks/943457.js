/** Chunk was on 86746 **/
/** chunk id: 943457, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk110259 = require("./110259.js"),
  Chunk198982 = require("./198982.js"),
  Chunk499785 = require("./499785.js"),
  Chunk652215 = require("./652215.js");
let s = {
  createGuildFromTemplate: async function(t, e, n, s, d) {
    try {
      return (await l.A.post({
        url: r.Rsh.GUILDS,
        body: {
          name: t,
          icon: e,
          channels: n.channels,
          system_channel_id: n.system_channel_id,
          roles: n.roles,
          guild_template_code: n.code,
          staff_only: !!d || true
        },
        trackedActionData: {
          event: i.NetworkActionNames.GUILD_CREATE,
          properties: {
            template_name: n.id,
            is_community_intent: s
          }
        },
        rejectWithError: false
      })).body
    } catch (t) {
      throw new a.LG(t)
    }
  }
}
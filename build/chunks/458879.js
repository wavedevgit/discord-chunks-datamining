/** Chunk was on 79764 **/
/** chunk id: 458879, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk990547 = require("./990547.js"),
  Chunk881052 = require("./881052.js"),
  Chunk573261 = require("./573261.js"),
  Chunk981631 = require("./981631.js");
let a = {
  createGuildFromTemplate: async function(e, t, n, a, o) {
    try {
      return (await r.Z.post({
        url: s.ANM.GUILDS,
        body: {
          name: e,
          icon: t,
          channels: n.channels,
          system_channel_id: n.system_channel_id,
          roles: n.roles,
          guild_template_code: n.code,
          staff_only: !!o || true
        },
        trackedActionData: {
          event: i.NetworkActionNames.GUILD_CREATE,
          properties: {
            template_name: n.id,
            is_community_intent: a
          }
        },
        rejectWithError: false
      })).body
    } catch (e) {
      throw new l.Hx(e)
    }
  }
}
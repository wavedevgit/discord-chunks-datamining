/** Chunk was on 38342 **/
/** chunk id: 151007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk110259 = require("./110259.js"),
  Chunk665906 = require("./665906.js"),
  Chunk496675 = require("./496675.js"),
  Chunk901461 = require("./901461.js"),
  Chunk981631 = require("./981631.js");

function o(e, t) {
  let n = !t.isSystemDM() && !(0, r.Z)(e),
    {
      enabled: o
    } = i.Z.getCurrentConfig({
      guildId: t.guild_id,
      location: "isMessagePinnable"
    }),
    u = (s.Z.can(a.Plq.MANAGE_MESSAGES, t) && !o || s.Z.can(a.Plq.PIN_MESSAGES, t)) && s.Z.can(a.Plq.READ_MESSAGE_HISTORY, t);
  return n && (u || t.isPrivate()) && (0, l.RG)(t) && t.type !== a.d4z.GUILD_VOICE && t.type !== a.d4z.GUILD_STAGE_VOICE
}
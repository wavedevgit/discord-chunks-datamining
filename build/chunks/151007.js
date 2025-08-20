/** Chunk was on 76676 **/
/** chunk id: 151007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk665906 = require("./665906.js"),
  Chunk496675 = require("./496675.js"),
  Chunk190263 = require("./190263.js"),
  Chunk901461 = require("./901461.js"),
  Chunk981631 = require("./981631.js");

function o(e, t) {
  let n = !t.isSystemDM() && !(0, r.Z)(e),
    o = s.D.getCurrentConfig({
      guildId: t.guild_id,
      location: "pin util"
    }).enabled ? l.Z.can(a.Plq.MANAGE_MESSAGES, t) || l.Z.can(a.Plq.PIN_MESSAGES, t) : l.Z.can(a.Plq.MANAGE_MESSAGES, t);
  return n && (o || t.isPrivate()) && (0, i.RG)(t) && t.type !== a.d4z.GUILD_VOICE && t.type !== a.d4z.GUILD_STAGE_VOICE
}
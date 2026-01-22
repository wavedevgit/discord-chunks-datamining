/** Chunk was on 6502 **/
/** chunk id: 492841, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk937161 = require("./937161.js"),
  Chunk406704 = require("./406704.js"),
  Chunk576705 = require("./576705.js"),
  Chunk143413 = require("./143413.js"),
  Chunk652215 = require("./652215.js");

function o(e, t) {
  let n = !t.isSystemDM() && !(0, s.A)(e),
    {
      enabled: o
    } = i.A.getCurrentConfig({
      guildId: t.guild_id,
      location: "isMessagePinnable"
    }),
    u = (r.A.can(a.xBc.MANAGE_MESSAGES, t) && !o || r.A.can(a.xBc.PIN_MESSAGES, t)) && r.A.can(a.xBc.READ_MESSAGE_HISTORY, t);
  return n && (u || t.isPrivate()) && (0, l.jr)(t) && t.type !== a.rbe.GUILD_VOICE && t.type !== a.rbe.GUILD_STAGE_VOICE
}
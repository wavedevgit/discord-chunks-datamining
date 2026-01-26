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
  let n = !t.isSystemDM() && !(0, r.A)(e),
    {
      enabled: o
    } = i.A.getCurrentConfig({
      guildId: t.guild_id,
      location: "isMessagePinnable"
    }),
    c = (s.A.can(a.xBc.MANAGE_MESSAGES, t) && !o || s.A.can(a.xBc.PIN_MESSAGES, t)) && s.A.can(a.xBc.READ_MESSAGE_HISTORY, t);
  return n && (c || t.isPrivate()) && (0, l.jr)(t) && t.type !== a.rbe.GUILD_VOICE && t.type !== a.rbe.GUILD_STAGE_VOICE
}
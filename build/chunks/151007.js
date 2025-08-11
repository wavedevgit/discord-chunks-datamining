/** Chunk was on web.js **/
/** chunk id: 151007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk665906 = require("./665906.js"),
  Chunk496675 = require("./496675.js"),
  Chunk190263 = require("./190263.js"),
  Chunk901461 = require("./901461.js"),
  Chunk981631 = require("./981631.js");

function l(e, t) {
  let n = !t.isSystemDM() && !(0, a.Z)(e),
    l = o.D.getCurrentConfig({
      guildId: t.guild_id,
      location: "pin util"
    }).enabled ? i.Z.can(s.Plq.MANAGE_MESSAGES, t) || i.Z.can(s.Plq.PIN_MESSAGES, t) : i.Z.can(s.Plq.MANAGE_MESSAGES, t);
  return n && (l || t.isPrivate()) && (0, r.RG)(t) && t.type !== s.d4z.GUILD_VOICE && t.type !== s.d4z.GUILD_STAGE_VOICE
}
/** Chunk was on 38342 **/
/** chunk id: 151007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk665906 = require("./665906.js"),
  Chunk496675 = require("./496675.js"),
  Chunk901461 = require("./901461.js"),
  Chunk981631 = require("./981631.js");

function a(e, t) {
  let n = !t.isSystemDM() && !(0, s.Z)(e),
    a = l.Z.can(r.Plq.MANAGE_MESSAGES, t) || l.Z.can(r.Plq.PIN_MESSAGES, t);
  return n && (a || t.isPrivate()) && (0, i.RG)(t) && t.type !== r.d4z.GUILD_VOICE && t.type !== r.d4z.GUILD_STAGE_VOICE
}
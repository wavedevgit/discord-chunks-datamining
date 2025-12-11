/** Chunk was on 40184 **/
/** chunk id: 389303, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk314897 = require("./314897.js"),
  Chunk496675 = require("./496675.js"),
  Chunk938475 = require("./938475.js"),
  Chunk700785 = require("./700785.js"),
  Chunk924301 = require("./924301.js"),
  Chunk85243 = require("./85243.js");

function c(e) {
  if (!e.isGuildVoice() || o.ZP.getGuildScheduledEventsByIndex(o.bN.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 || !r.Z.can(s.AN, e)) returnfalse;
  let t = new Set(l.ZP.getVoiceStatesForChannel(e).map(e => e.user.id)),
    n = i.default.getId();
  for (let i of t)
    if (i !== n && a.BT({
        permission: s.AN,
        user: i,
        context: e
      })) returnfalse;
  returntrue
}
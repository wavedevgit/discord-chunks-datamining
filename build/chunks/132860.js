/** Chunk was on 42402 **/
/** chunk id: 132860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk961350 = require("./961350.js"),
  Chunk576705 = require("./576705.js"),
  Chunk607567 = require("./607567.js"),
  Chunk488926 = require("./488926.js"),
  Chunk698441 = require("./698441.js"),
  Chunk219935 = require("./219935.js");

function c(e) {
  if (!e.isGuildVoice() || a.Ay.getGuildScheduledEventsByIndex(a.ej.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 || !l.A.can(o.EN, e)) returnfalse;
  let t = new Set(i.Ay.getVoiceStatesForChannel(e).map(e => e.user.id)),
    n = r.default.getId();
  for (let r of t)
    if (r !== n && s.$3({
        permission: o.EN,
        user: r,
        context: e
      })) returnfalse;
  returntrue
}
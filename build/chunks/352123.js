/** Chunk was on 42402 **/
/** chunk id: 352123, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o,
  b: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  let t = (0, r.bG)([i.A], () => i.A.getGuild(e.guildId)),
    n = (0, r.bG)([l.A], () => l.A.getChannel(e.channelId)),
    o = (0, r.bG)([s.A], () => s.A.can(a.xBc.ADMINISTRATOR, t)),
    c = (0, r.bG)([s.A], () => s.A.can(a.xBc.MANAGE_MESSAGES, n));
  return {
    isEntryAdmin: o,
    canEdit: o || c,
    canRemove: o || c
  }
}

function c(e) {
  return (0, r.bG)([s.A], () => s.A.can(a.xBc.SEND_MESSAGES, e))
}
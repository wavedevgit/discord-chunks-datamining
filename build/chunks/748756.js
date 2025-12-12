/** Chunk was on 33213 **/
/** chunk id: 748756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => u
}), require("./399606.js");
var Chunk87051 = require("./87051.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk113449 = require("./113449.js"),
  Chunk686660 = require("./686660.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js");

function u(e, t) {
  let n = r.ZP.getGuildFlags(e);
  t === a.s8.ALL_MESSAGES ? i.Z.updateGuildNotificationSettings(e, {
    message_notifications: c.bL.ALL_MESSAGES,
    flags: (0, l.Q4)(n, o.vc.UNREADS_ALL_MESSAGES)
  }, s.ZB.PresetAll) : t === a.s8.MENTIONS ? i.Z.updateGuildNotificationSettings(e, {
    message_notifications: c.bL.ONLY_MENTIONS,
    flags: (0, l.Q4)(n, o.vc.UNREADS_ONLY_MENTIONS)
  }, s.ZB.PresetMentions) : t === a.s8.NOTHING && i.Z.updateGuildNotificationSettings(e, {
    message_notifications: c.bL.NO_MESSAGES,
    flags: (0, l.Q4)(n, o.vc.UNREADS_ONLY_MENTIONS)
  }, s.ZB.PresetNothing)
}
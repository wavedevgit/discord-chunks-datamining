/** Chunk was on 89382 **/
/** chunk id: 748756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => d
}), require("./399606.js");
var Chunk87051 = require("./87051.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk113449 = require("./113449.js"),
  Chunk686660 = require("./686660.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js");

function d(e, t) {
  let n = a.ZP.getGuildFlags(e);
  t === c.s8.ALL_MESSAGES ? i.Z.updateGuildNotificationSettings(e, {
    message_notifications: s.bL.ALL_MESSAGES,
    flags: (0, o.Q4)(n, l.vc.UNREADS_ALL_MESSAGES)
  }, r.ZB.PresetAll) : t === c.s8.MENTIONS ? i.Z.updateGuildNotificationSettings(e, {
    message_notifications: s.bL.ONLY_MENTIONS,
    flags: (0, o.Q4)(n, l.vc.UNREADS_ONLY_MENTIONS)
  }, r.ZB.PresetMentions) : t === c.s8.NOTHING && i.Z.updateGuildNotificationSettings(e, {
    message_notifications: s.bL.NO_MESSAGES,
    flags: (0, o.Q4)(n, l.vc.UNREADS_ONLY_MENTIONS)
  }, r.ZB.PresetNothing)
}
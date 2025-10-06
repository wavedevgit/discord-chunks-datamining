/** Chunk was on 90564 **/
/** chunk id: 748756, original params: e,n,t (module,exports,require) **/
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

function d(e, n) {
  let t = _.ZP.getGuildFlags(e);
  n === c.s8.ALL_MESSAGES ? a.Z.updateGuildNotificationSettings(e, {
    message_notifications: r.bL.ALL_MESSAGES,
    flags: (0, o.Q4)(t, s.vc.UNREADS_ALL_MESSAGES)
  }, i.ZB.PresetAll) : n === c.s8.MENTIONS ? a.Z.updateGuildNotificationSettings(e, {
    message_notifications: r.bL.ONLY_MENTIONS,
    flags: (0, o.Q4)(t, s.vc.UNREADS_ONLY_MENTIONS)
  }, i.ZB.PresetMentions) : n === c.s8.NOTHING && a.Z.updateGuildNotificationSettings(e, {
    message_notifications: r.bL.NO_MESSAGES,
    flags: (0, o.Q4)(t, s.vc.UNREADS_ONLY_MENTIONS)
  }, i.ZB.PresetNothing)
}
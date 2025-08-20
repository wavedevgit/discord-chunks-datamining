/** Chunk was on 99964 **/
/** chunk id: 748756, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  V: () => l
}), require("./399606.js");
var Chunk87051 = require("./87051.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk113449 = require("./113449.js"),
  Chunk686660 = require("./686660.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js");

function l(e, n) {
  let t = a.ZP.getGuildFlags(e);
  n === _.s8.ALL_MESSAGES ? i.Z.updateGuildNotificationSettings(e, {
    message_notifications: r.bL.ALL_MESSAGES,
    flags: (0, s.Q4)(t, c.vc.UNREADS_ALL_MESSAGES)
  }, o.ZB.PresetAll) : n === _.s8.MENTIONS ? i.Z.updateGuildNotificationSettings(e, {
    message_notifications: r.bL.ONLY_MENTIONS,
    flags: (0, s.Q4)(t, c.vc.UNREADS_ONLY_MENTIONS)
  }, o.ZB.PresetMentions) : n === _.s8.NOTHING && i.Z.updateGuildNotificationSettings(e, {
    message_notifications: r.bL.NO_MESSAGES,
    flags: (0, s.Q4)(t, c.vc.UNREADS_ONLY_MENTIONS)
  }, o.ZB.PresetNothing)
}
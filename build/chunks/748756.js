/** Chunk was on 56959 **/
/** chunk id: 748756, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  V: () => _
}), require("./399606.js");
var Chunk87051 = require("./87051.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk113449 = require("./113449.js"),
  Chunk686660 = require("./686660.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js");

function _(e, n) {
  let t = a.ZP.getGuildFlags(e);
  n === c.s8.ALL_MESSAGES ? o.Z.updateGuildNotificationSettings(e, {
    message_notifications: d.bL.ALL_MESSAGES,
    flags: (0, r.Q4)(t, l.vc.UNREADS_ALL_MESSAGES)
  }, i.ZB.PresetAll) : n === c.s8.MENTIONS ? o.Z.updateGuildNotificationSettings(e, {
    message_notifications: d.bL.ONLY_MENTIONS,
    flags: (0, r.Q4)(t, l.vc.UNREADS_ONLY_MENTIONS)
  }, i.ZB.PresetMentions) : n === c.s8.NOTHING && o.Z.updateGuildNotificationSettings(e, {
    message_notifications: d.bL.NO_MESSAGES,
    flags: (0, r.Q4)(t, l.vc.UNREADS_ONLY_MENTIONS)
  }, i.ZB.PresetNothing)
}
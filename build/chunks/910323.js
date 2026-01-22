/** Chunk was on 67208 **/
/** chunk id: 910323, original params: e,c,a (module,exports,require) **/
require.d(exports, {
  i: () => n
}), require("./417597.js");
var Chunk832712 = require("./832712.js"),
  Chunk543465 = require("./543465.js"),
  Chunk477427 = require("./477427.js"),
  Chunk393432 = require("./393432.js"),
  Chunk24873 = require("./24873.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js");

function n(e, c) {
  let a = d.Ay.getGuildFlags(e);
  c === t.N9.ALL_MESSAGES ? f.A.updateGuildNotificationSettings(e, {
    message_notifications: s.orn.ALL_MESSAGES,
    flags: (0, b.md)(a, i.n3.UNREADS_ALL_MESSAGES)
  }, _.fd.PresetAll) : c === t.N9.MENTIONS ? f.A.updateGuildNotificationSettings(e, {
    message_notifications: s.orn.ONLY_MENTIONS,
    flags: (0, b.md)(a, i.n3.UNREADS_ONLY_MENTIONS)
  }, _.fd.PresetMentions) : c === t.N9.NOTHING && f.A.updateGuildNotificationSettings(e, {
    message_notifications: s.orn.NO_MESSAGES,
    flags: (0, b.md)(a, i.n3.UNREADS_ONLY_MENTIONS)
  }, _.fd.PresetNothing)
}
/** Chunk was on 67208 **/
/** chunk id: 910323, original params: e,_,n (module,exports,require) **/
require.d(exports, {
  i: () => d
}), require("./417597.js");
var Chunk832712 = require("./832712.js"),
  Chunk543465 = require("./543465.js"),
  Chunk477427 = require("./477427.js"),
  Chunk393432 = require("./393432.js"),
  Chunk24873 = require("./24873.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js");

function d(e, _) {
  let n = t.Ay.getGuildFlags(e);
  _ === c.N9.ALL_MESSAGES ? a.A.updateGuildNotificationSettings(e, {
    message_notifications: r.orn.ALL_MESSAGES,
    flags: (0, o.md)(n, s.n3.UNREADS_ALL_MESSAGES)
  }, i.fd.PresetAll) : _ === c.N9.MENTIONS ? a.A.updateGuildNotificationSettings(e, {
    message_notifications: r.orn.ONLY_MENTIONS,
    flags: (0, o.md)(n, s.n3.UNREADS_ONLY_MENTIONS)
  }, i.fd.PresetMentions) : _ === c.N9.NOTHING && a.A.updateGuildNotificationSettings(e, {
    message_notifications: r.orn.NO_MESSAGES,
    flags: (0, o.md)(n, s.n3.UNREADS_ONLY_MENTIONS)
  }, i.fd.PresetNothing)
}
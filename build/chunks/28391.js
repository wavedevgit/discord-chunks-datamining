/** Chunk was on 34740 **/
/** chunk id: 28391, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk87051 = require("./87051.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk113449 = require("./113449.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk526761 = require("./526761.js");

function u(e, t, n) {
  i.Z.updateChannelOverrideSettings(e, t, {
    flags: (0, a.pq)(r.ZP.getChannelIdFlags(e, t), n)
  }, l.UE.unreads(n === c.ic.UNREADS_ALL_MESSAGES ? s.i.ALL_MESSAGES : s.i.ONLY_MENTIONS), {
    object: o.qAy.NOTIFICATION_SETTING_UNREAD_NOTICE
  })
}
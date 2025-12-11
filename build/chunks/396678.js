/** Chunk was on 44183 **/
/** chunk id: 396678, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk537413 = require("./537413.js");

function c(e) {
  let t = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
    n = (0, r.e7)([s.Z, i.Z], () => i.Z.getChannel(s.Z.getVoiceChannelId())),
    c = null == n ? true : n.getGuildId(),
    d = (0, r.e7)([l.Z], () => {
      var e;
      return null != c ? null == (e = l.Z.getGuild(c)) ? true : e.premiumTier : null
    });
  return (0, a.Z)(e, t, d)
}
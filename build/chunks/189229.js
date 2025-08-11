/** Chunk was on 54076 **/
/** chunk id: 189229, original params: t,d,e (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => r
});
var Chunk367907 = require("./367907.js"),
  Chunk592125 = require("./592125.js"),
  Chunk888369 = require("./888369.js"),
  Chunk430824 = require("./430824.js"),
  Chunk9156 = require("./9156.js"),
  Chunk981631 = require("./981631.js");

function r(t, d) {
  let e = a.Z.getChannel(t);
  (0, n.yw)(l.rMx.ACK_MESSAGES, {
    channel_id: t,
    guild_id: null == e ? true : e.getGuildId(),
    location: d,
    guild_unread_statuses: u.Z.getGuildsArray().map(t => {
      let d = i.default.hasUnread(t.id),
        e = i.default.getMentionCount(t.id),
        n = c.ZP.isMuted(t.id),
        a = c.ZP.resolveGuildUnreadSetting(t);
      return "".concat(t.id, ",").concat(d, ",").concat(e, ",").concat(n, ",").concat(a)
    })
  })
}
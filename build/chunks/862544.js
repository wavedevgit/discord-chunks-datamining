/** Chunk was on 16137 **/
/** chunk id: 862544, original params: t,d,e (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk58149 = require("./58149.js"),
  Chunk734057 = require("./734057.js"),
  Chunk458294 = require("./458294.js"),
  Chunk71393 = require("./71393.js"),
  Chunk543465 = require("./543465.js"),
  Chunk652215 = require("./652215.js");

function s(t, d) {
  let e = n.A.getChannel(t);
  (0, a.zV)(l.HAw.ACK_MESSAGES, {
    channel_id: t,
    guild_id: null == e ? true : e.getGuildId(),
    location: d,
    guild_unread_statuses: u.A.getGuildsArray().map(t => {
      let d = i.default.hasUnread(t.id),
        e = i.default.getMentionCount(t.id),
        a = c.Ay.isMuted(t.id),
        n = c.Ay.resolveGuildUnreadSetting(t);
      return "".concat(t.id, ",").concat(d, ",").concat(e, ",").concat(a, ",").concat(n)
    })
  })
}
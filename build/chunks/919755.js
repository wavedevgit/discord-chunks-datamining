/** Chunk was on 51235 **/
/** chunk id: 919755, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk306680 = require("./306680.js"),
  Chunk9156 = require("./9156.js"),
  Chunk709054 = require("./709054.js"),
  Chunk231338 = require("./231338.js");

function u(e) {
  return (0, r.cj)([i.Z, a.ZP, o.ZP, l.Z], () => s.default.keys(e).reduce((e, t) => {
    let n = i.Z.getChannel(t),
      r = null == n ? true : n.isGuildVocal();
    return e.badge = e.badge + a.ZP.getMentionCount(t), e.unread = e.unread || !r && l.Z.can(c.Pl.VIEW_CHANNEL, n) && a.ZP.hasUnread(t) && !o.ZP.isChannelMuted(null == n ? true : n.getGuildId(), t), e
  }, {
    badge: 0,
    unread: false
  }))
}
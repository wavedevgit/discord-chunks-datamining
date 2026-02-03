/** Chunk was on 44669 **/
/** chunk id: 210082, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk222823 = require("./222823.js"),
  Chunk543465 = require("./543465.js"),
  Chunk661191 = require("./661191.js"),
  Chunk818348 = require("./818348.js");

function u(e) {
  return (0, r.cf)([l.A, s.Ay, a.Ay, i.A], () => o.default.keys(e).reduce((e, t) => {
    let n = l.A.getChannel(t),
      r = null == n ? true : n.isGuildVocal();
    return e.badge = e.badge + s.Ay.getMentionCount(t), e.unread = e.unread || !r && i.A.can(c.xB.VIEW_CHANNEL, n) && s.Ay.hasUnread(t) && !a.Ay.isChannelMuted(null == n ? true : n.getGuildId(), t), e
  }, {
    badge: 0,
    unread: false
  }))
}
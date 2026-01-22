/** Chunk was on 97492 **/
/** chunk id: 533233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk311907 = require("./311907.js"),
  Chunk313961 = require("./313961.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk113783 = require("./113783.js"),
  Chunk69407 = require("./69407.js"),
  Chunk233993 = require("./233993.js"),
  Chunk96566 = require("./96566.js"),
  Chunk652215 = require("./652215.js");

function f(e) {
  var t;
  let n = (0, r.bG)([l.A], () => l.A.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
    f = (0, s.uy)(e.id),
    p = (0, s.zy)(e.id, o.ip.AUDIENCE),
    h = (0, u.qT)(e.id),
    b = (0, r.bG)([i.A], () => i.A.getGuild(e.guild_id), [e.guild_id]),
    g = (0, r.bG)([a.A], () => a.A.can(c.QY, e), [e]),
    m = null != (t = null == b ? true : b.maxStageVideoChannelUsers) ? t : 0,
    A = !(null != b && b.features.has(d.GuildFeatures.COMMUNITY)) && m > d.uaN;
  return h && !n && g && !A && f + p >= m
}
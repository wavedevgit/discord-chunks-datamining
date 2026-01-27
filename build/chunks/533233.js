/** Chunk was on 77870 **/
/** chunk id: 533233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  var t;
  let n = (0, r.bG)([l.A], () => l.A.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
    p = (0, a.uy)(e.id),
    h = (0, a.zy)(e.id, o.ip.AUDIENCE),
    f = (0, u.qT)(e.id),
    g = (0, r.bG)([i.A], () => i.A.getGuild(e.guild_id), [e.guild_id]),
    m = (0, r.bG)([s.A], () => s.A.can(c.QY, e), [e]),
    b = null != (t = null == g ? true : g.maxStageVideoChannelUsers) ? t : 0,
    A = !(null != g && g.features.has(d.GuildFeatures.COMMUNITY)) && b > d.uaN;
  return f && !n && m && !A && p + h >= b
}
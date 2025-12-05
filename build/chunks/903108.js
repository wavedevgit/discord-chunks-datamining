/** Chunk was on 89522 **/
/** chunk id: 903108, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk442837 = require("./442837.js"),
  Chunk358221 = require("./358221.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk431328 = require("./431328.js"),
  Chunk501655 = require("./501655.js"),
  Chunk146085 = require("./146085.js"),
  Chunk368442 = require("./368442.js"),
  Chunk981631 = require("./981631.js");

function p(e) {
  var t;
  let n = (0, r.e7)([i.Z], () => i.Z.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
    p = (0, s.Io)(e.id),
    h = (0, s.Rk)(e.id, o.pV.AUDIENCE),
    f = (0, d.PK)(e.id),
    g = (0, r.e7)([l.Z], () => l.Z.getGuild(e.guild_id), [e.guild_id]),
    m = (0, r.e7)([a.Z], () => a.Z.can(c.yP, e), [e]),
    b = null != (t = null == g ? true : g.maxStageVideoChannelUsers) ? t : 0,
    _ = !(null != g && g.features.has(u.GuildFeatures.COMMUNITY)) && b > u.RcX;
  return f && !n && m && !_ && p + h >= b
}
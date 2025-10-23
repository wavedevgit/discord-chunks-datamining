/** Chunk was on 1272 **/
/** chunk id: 999309, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk223892 = require("./223892.js"),
  Chunk601964 = require("./601964.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  var t;
  let n = (0, r.e7)([a.Z], () => a.Z.getGuild(e)),
    c = (0, r.e7)([s.default], () => s.default.getCurrentUser()),
    u = null != n && (0, l.eM)(n, c),
    d = (0, i.Sd)();
  return u && null != (t = null == n ? true : n.features.has(o.GuildFeatures.COMMUNITY)) && t && d && !((null == n ? true : n.features.has(o.GuildFeatures.CREATOR_MONETIZABLE)) || (null == n ? true : n.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || (null == n ? true : n.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)))
}
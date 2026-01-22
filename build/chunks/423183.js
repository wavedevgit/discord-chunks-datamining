/** Chunk was on 21738 **/
/** chunk id: 423183, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk469993 = require("./469993.js"),
  Chunk260509 = require("./260509.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  var t;
  let n = (0, r.bG)([a.A], () => a.A.getGuild(e)),
    c = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
    u = null != n && (0, l.bM)(n, c),
    d = (0, i.oS)();
  return u && null != (t = null == n ? true : n.features.has(o.GuildFeatures.COMMUNITY)) && t && d && !((null == n ? true : n.features.has(o.GuildFeatures.CREATOR_MONETIZABLE)) || (null == n ? true : n.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || (null == n ? true : n.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)))
}
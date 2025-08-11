/** Chunk was on 44799 **/
/** chunk id: 393357, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk906732 = require("./906732.js"),
  Chunk213609 = require("./213609.js"),
  Chunk353926 = require("./353926.js"),
  Chunk443002 = require("./443002.js"),
  Chunk703656 = require("./703656.js"),
  Chunk430824 = require("./430824.js"),
  Chunk742139 = require("./742139.js"),
  Chunk639777 = require("./639777.js"),
  Chunk504392 = require("./504392.js"),
  Chunk981631 = require("./981631.js");

function x(e) {
  let {
    guildId: t,
    powerupListingId: n
  } = e, x = (0, i.e7)([d.Z], () => d.Z.getGuild(t)), _ = (0, i.e7)([a.Z], () => a.Z.hasLoadedExperiments), v = (0, f.Z)(t), b = (0, u.At)(), j = (0, p.V)("GuildPowerupsPage"), h = !_ || null == v || null == x, E = (0, l.ZP)(null != b ? b : []);
  return ((0, s.Z)({
    type: o.ImpressionTypes.VIEW,
    name: o.ImpressionNames.BOOST_SHOP_OPENED,
    properties: {
      location_stack: E.analyticsLocations
    }
  }, {
    disableTrack: h
  }), h) ? null : v || j ? <m.Z guildId={t} powerupListingId={n} /> : <c.Z analyticsLocation={{
      section: g.jXE.CHANNEL_LIST,
      object: g.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
    }} guild={x} />
}
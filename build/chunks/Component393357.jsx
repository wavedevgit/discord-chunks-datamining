/** Chunk was on 44799 **/
/** chunk id: 393357, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk353926 = require("./353926.js"),
  Chunk703656 = require("./703656.js"),
  Chunk430824 = require("./430824.js"),
  Chunk639777 = require("./639777.js"),
  Chunk504392 = require("./504392.jsx");

function p(e) {
  let {
    guildId: t,
    powerupListingId: n
  } = e, p = (0, o.e7)([c.Z], () => c.Z.getGuild(t)), m = (0, o.e7)([s.Z], () => s.Z.hasLoadedExperiments), v = (0, d.Z)(t), g = (0, u.At)(), x = !m || null == v || null == p, b = (0, l.ZP)(null != g ? g : []);
  return ((0, a.Z)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.BOOST_SHOP_OPENED,
    properties: {
      location_stack: b.analyticsLocations
    }
  }, {
    disableTrack: x
  }), x) ? null : (0, r.jsx)(f.Z, {
    guildId: t,
    powerupListingId: n
  })
}
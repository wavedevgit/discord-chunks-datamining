/** Chunk was on 44799 **/
/** chunk id: 393357, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk353926 = require("./353926.js"),
  Chunk703656 = require("./703656.js"),
  Chunk430824 = require("./430824.js"),
  Chunk639777 = require("./639777.js"),
  Chunk504392 = require("./504392.jsx");

function m(e) {
  let {
    guildId: t,
    powerupListingId: n
  } = e, m = (0, o.e7)([u.Z], () => u.Z.getGuild(t)), f = (0, o.e7)([a.Z], () => a.Z.hasLoadedExperiments), g = (0, d.Z)(t), v = (0, c.At)(), x = !f || null == g || null == m, _ = (0, s.ZP)(null != v ? v : []);
  return ((0, l.Z)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.BOOST_SHOP_OPENED,
    properties: {
      location_stack: _.analyticsLocations
    }
  }, {
    disableTrack: x
  }), x) ? null : (0, r.jsx)(p.Z, {
    guildId: t,
    powerupListingId: n
  })
}
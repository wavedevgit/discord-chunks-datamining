/** Chunk was on 88615 **/
/** chunk id: 126076, original params: e,t,l (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk49463 = require("./49463.js"),
  Chunk976860 = require("./976860.js"),
  Chunk71393 = require("./71393.js"),
  Chunk363487 = require("./363487.js"),
  Chunk484612 = require("./484612.jsx");

function p(e) {
  let {
    guildId: t,
    powerupListingId: l
  } = e, p = (0, i.bG)([d.A], () => d.A.getGuild(t)), m = (0, i.bG)([a.A], () => a.A.hasLoadedExperiments), v = (0, c.A)(t), A = (0, u.PR)(), g = !m || null == v || null == p, x = (0, s.Ay)(null != A ? A : []);
  return ((0, o.A)({
    type: n.ImpressionTypes.VIEW,
    name: n.ImpressionNames.BOOST_SHOP_OPENED,
    properties: {
      location_stack: x.analyticsLocations
    }
  }, {
    disableTrack: g
  }), g) ? null : (0, r.jsx)(f.A, {
    guildId: t,
    powerupListingId: l
  })
}
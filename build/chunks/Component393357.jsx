/** Chunk was on 44799 **/
/** chunk id: 393357, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk353926 = require("./353926.js"),
  Chunk443002 = require("./443002.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk430824 = require("./430824.js"),
  Chunk742139 = require("./742139.js"),
  Chunk639777 = require("./639777.js"),
  Chunk504392 = require("./504392.jsx"),
  Chunk981631 = require("./981631.js");

function x(e) {
  let {
    guildId: t,
    powerupListingId: n
  } = e, x = (0, i.e7)([d.Z], () => d.Z.getGuild(t)), g = (0, i.e7)([a.Z], () => a.Z.hasLoadedExperiments), v = (0, m.Z)(t), b = (0, u.At)(), h = (0, p.V)("GuildPowerupsPage"), j = !g || null == v || null == x, C = (0, l.ZP)(null != b ? b : []);
  return ((0, s.Z)({
    type: o.ImpressionTypes.VIEW,
    name: o.ImpressionNames.BOOST_SHOP_OPENED,
    properties: {
      location_stack: C.analyticsLocations
    }
  }, {
    disableTrack: j
  }), j) ? null : v || h ? (0, r.jsx)(f.Z, {
    guildId: t,
    powerupListingId: n
  }) : (0, r.jsx)(c.Z, {
    analyticsLocation: {
      section: _.jXE.CHANNEL_LIST,
      object: _.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
    },
    guild: x
  })
}
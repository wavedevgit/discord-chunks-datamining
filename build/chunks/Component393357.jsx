/** Chunk was on 44799 **/
/** chunk id: 393357, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => _
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
  Chunk639777 = require("./639777.js"),
  Chunk504392 = require("./504392.jsx"),
  Chunk981631 = require("./981631.js");

function _(e) {
  let {
    guildId: t,
    powerupListingId: n
  } = e, _ = (0, o.e7)([d.Z], () => d.Z.getGuild(t)), g = (0, o.e7)([s.Z], () => s.Z.hasLoadedExperiments), v = (0, p.Z)(t), x = (0, c.At)(), b = !g || null == v || null == _, h = (0, l.ZP)(null != x ? x : []);
  return ((0, a.Z)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.BOOST_SHOP_OPENED,
    properties: {
      location_stack: h.analyticsLocations
    }
  }, {
    disableTrack: b
  }), b) ? null : v ? (0, r.jsx)(f.Z, {
    guildId: t,
    powerupListingId: n
  }) : (0, r.jsx)(u.Z, {
    analyticsLocation: {
      section: m.jXE.CHANNEL_LIST,
      object: m.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
    },
    guild: _
  })
}
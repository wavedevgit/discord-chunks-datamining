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
  } = e, _ = (0, i.e7)([d.Z], () => d.Z.getGuild(t)), x = (0, i.e7)([a.Z], () => a.Z.hasLoadedExperiments), g = (0, p.Z)(t), v = (0, u.At)(), b = !x || null == g || null == _, h = (0, l.ZP)(null != v ? v : []);
  return ((0, s.Z)({
    type: o.ImpressionTypes.VIEW,
    name: o.ImpressionNames.BOOST_SHOP_OPENED,
    properties: {
      location_stack: h.analyticsLocations
    }
  }, {
    disableTrack: b
  }), b) ? null : g ? (0, r.jsx)(m.Z, {
    guildId: t,
    powerupListingId: n
  }) : (0, r.jsx)(c.Z, {
    analyticsLocation: {
      section: f.jXE.CHANNEL_LIST,
      object: f.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
    },
    guild: _
  })
}
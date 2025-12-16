/** Chunk was on 51218 **/
/** chunk id: 785697, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  D2: () => c,
  SE: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk818083 = require("./818083.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");
let r = (0, Chunk818083.B)({
  kind: "guild",
  id: "2022-11_default_disable_mass_mention",
  label: "Disable mass mentions for communities by default",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
});

function c(e) {
  return r.useExperiment({
    guildId: e,
    location: "dd4beb_1"
  }, {
    autoTrackExposure: true
  })
}

function o(e) {
  var t;
  let i = (0, l.e7)([s.Z], () => s.Z.can(a.Plq.MANAGE_GUILD, e)),
    {
      enabled: n
    } = r.useExperiment({
      guildId: null != (t = null == e ? true : e.id) ? t : a.lds,
      location: "dd4beb_3"
    }, {
      autoTrackExposure: true
    });
  if (null == e) returnfalse;
  let c = e.features.has(a.GuildFeatures.COMMUNITY);
  return i && c && n
}
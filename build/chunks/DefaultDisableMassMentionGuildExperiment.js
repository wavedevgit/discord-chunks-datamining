/** Chunk was on 92853 **/
/** chunk id: 15073, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  TZ: () => d,
  zi: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk600975 = require("./600975.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");
let r = (0, Chunk600975.C)({
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

function o(e) {
  return r.useExperiment({
    guildId: e,
    location: "dd4beb_1"
  }, {
    autoTrackExposure: true
  })
}

function d(e) {
  var t;
  let i = (0, s.bG)([n.A], () => n.A.can(a.xBc.MANAGE_GUILD, e)),
    {
      enabled: l
    } = r.useExperiment({
      guildId: null != (t = null == e ? true : e.id) ? t : a.dJq,
      location: "dd4beb_3"
    }, {
      autoTrackExposure: true
    });
  if (null == e) returnfalse;
  let o = e.features.has(a.GuildFeatures.COMMUNITY);
  return i && o && l
}
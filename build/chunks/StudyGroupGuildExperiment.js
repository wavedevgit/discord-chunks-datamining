/** Chunk was on 21738 **/
/** chunk id: 221094, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk600975 = require("./600975.js"),
  Chunk652215 = require("./652215.js");
let a = (0, Chunk600975.C)({
    kind: "guild",
    id: "2021-10_study_group",
    label: "Student hub study group",
    defaultConfig: {
      enableStudyGroup: false
    },
    treatments: [{
      id: 1,
      label: "Enables study group sidebar",
      config: {
        enableStudyGroup: true
      }
    }]
  }),
  s = e => {
    var t;
    return r.useEffect(() => {
      null != e && e.features.has(l.GuildFeatures.HUB) && a.trackExposure({
        guildId: e.id,
        location: "467c32_1"
      })
    }, [e]), a.useExperiment({
      guildId: null != (t = null == e ? true : e.id) ? t : l.dJq,
      location: "467c32_2"
    }, {
      autoTrackExposure: false,
      disable: null == e || !e.features.has(l.GuildFeatures.HUB)
    })
  }
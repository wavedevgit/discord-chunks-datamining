/** Chunk was on 1272 **/
/** chunk id: 499137, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk818083 = require("./818083.js"),
  Chunk981631 = require("./981631.js");
let a = (0, Chunk818083.B)({
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
  o = e => {
    var t;
    return r.useEffect(() => {
      null != e && e.features.has(l.GuildFeatures.HUB) && a.trackExposure({
        guildId: e.id,
        location: "467c32_1"
      })
    }, [e]), a.useExperiment({
      guildId: null != (t = null == e ? true : e.id) ? t : l.lds,
      location: "467c32_2"
    }, {
      autoTrackExposure: false,
      disable: null == e || !e.features.has(l.GuildFeatures.HUB)
    })
  }
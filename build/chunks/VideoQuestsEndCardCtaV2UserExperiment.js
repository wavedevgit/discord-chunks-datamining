/** Chunk was on 32249 **/
/** chunk id: 208109, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => l
});
let r = (0, require("./818083.js").B)({
    id: "2025-01_video_quests_end_card_cta_v2",
    kind: "user",
    label: "Video Quests End Card CTA V2",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        enabled: false
      }
    }, {
      id: 1,
      label: "Enabled",
      config: {
        enabled: true
      }
    }]
  }),
  l = e => {
    let {
      location: t
    } = e;
    return r.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: true
    }).enabled
  }
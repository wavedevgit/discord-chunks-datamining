/** Chunk was on 88474 **/
/** chunk id: 639555, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Rv: () => l
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2025-01_inappropriate_conversations_new_defaults",
  label: "Inappropriate Conversation Warning Default On",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Inappropriate Conversation Warnings On",
    config: {
      enabled: true
    }
  }]
});

function l(e) {
  let {
    location: t
  } = e, {
    enabled: n
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  });
  return n
}
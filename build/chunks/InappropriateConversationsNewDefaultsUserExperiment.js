/** Chunk was on 96430 **/
/** chunk id: 639555, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Rv: () => i
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

function i(t) {
  let {
    location: e
  } = t, {
    enabled: n
  } = r.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  });
  return n
}
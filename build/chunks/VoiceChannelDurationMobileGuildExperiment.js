/** Chunk was on 82124 **/
/** chunk id: 662237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => r,
  S: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "guild",
  id: "2026-01_voice_channel_duration_mobile",
  label: "Voice Channel Duration (Mobile)",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Display the duration next to the Voice Channel",
    config: {
      enabled: true
    }
  }]
});

function i(e, t) {
  return r.useExperiment({
    guildId: e,
    location: t
  }).enabled
}
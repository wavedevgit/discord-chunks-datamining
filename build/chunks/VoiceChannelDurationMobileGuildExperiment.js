/** Chunk was on 97492 **/
/** chunk id: 661470, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => r,
  a: () => l
});
let r = (0, require("./600975.js").C)({
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

function l(e, t) {
  return r.useExperiment({
    guildId: e,
    location: t
  }).enabled
}
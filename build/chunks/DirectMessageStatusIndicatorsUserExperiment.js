/** Chunk was on 42402 **/
/** chunk id: 967978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => l
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2025-12_direct_message_status_indicators",
  label: "Voice/Video status indicators in direct messages",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "On",
    config: {
      enabled: true
    }
  }]
});

function l(e) {
  let {
    location: t
  } = e;
  return r.useExperiment({
    location: t
  })
}
/** Chunk was on 83037 **/
/** chunk id: 37411, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => i
});
let r = (0, require("./818083.js").B)({
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

function i(e) {
  let {
    location: t
  } = e;
  return r.useExperiment({
    location: t
  })
}
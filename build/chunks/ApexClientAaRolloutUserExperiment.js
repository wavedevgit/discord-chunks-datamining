/** Chunk was on 89839 **/
/** chunk id: 176237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => r,
  D: () => a
});
var Chunk818083 = require("./818083.js");
let a = (0, require("./427164.js").le)({
    name: "2025-06-apex-aa-evolving-tenure-badge-web",
    kind: "user",
    defaultConfig: {
      value: "blue"
    },
    variations: {
      0: {
        value: "blue"
      },
      1: {
        value: "green"
      }
    }
  }),
  r = (0, Chunk818083.B)({
    id: "2025-06_apex_client_aa_rollout",
    kind: "user",
    label: "Apex Client SDK AA Test Rollout",
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
  })
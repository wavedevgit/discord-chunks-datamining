/** Chunk was on 46290 **/
/** chunk id: 740589, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZB: () => r
});
let i = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-06_cached_content_inventory_overlay",
  label: "Sidechannel cached content inventory",
  defaultConfig: {
    treatmentType: null
  },
  treatments: [{
    id: 1,
    label: "Recency",
    config: {
      treatmentType: "recency"
    }
  }, {
    id: 2,
    label: "Affinity x Recency x Traits",
    config: {
      treatmentType: "art"
    }
  }]
});

function r(e) {
  return i.useExperiment({
    location: e
  })
}
/** Chunk was on 45620 **/
/** chunk id: 139668, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  R: () => l
});
let n = (0, require("./818083.js").B)({
    kind: "user",
    id: "2025-03_shop_feed_item_size_experiment",
    label: "Shop Feed Item Size Experiment",
    defaultConfig: {
      numFeedItems: 36
    },
    treatments: [{
      id: 1,
      label: "Increased feed size",
      config: {
        numFeedItems: 72
      }
    }]
  }),
  l = e => n.useExperiment({
    location: e
  }).numFeedItems
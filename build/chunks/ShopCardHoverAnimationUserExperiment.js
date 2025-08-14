/** Chunk was on 86031 **/
/** chunk id: 664018, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  D: () => i,
  E: () => o
});
var n, Chunk818083 = require("./818083.js"),
  i = 12633 == require.j ? ((n = {})[n.CONTROL = 0] = "CONTROL", n[n.TRANSFORMATION = 1] = "TRANSFORMATION", n[n.NO_MOVEMENT = 2] = "NO_MOVEMENT", n) : null;
let l = (0, Chunk818083.B)({
    kind: "user",
    id: "2024-03_shop_card_hover_animation",
    label: "Shop card hover animation experiment",
    defaultConfig: {
      hoverVariant: 0
    },
    treatments: [{
      id: 1,
      label: "Use CSS Transformation",
      config: {
        hoverVariant: 1
      }
    }, {
      id: 2,
      label: "No hover movement",
      config: {
        hoverVariant: 2
      }
    }]
  }),
  o = e => l.useExperiment({
    location: e
  })
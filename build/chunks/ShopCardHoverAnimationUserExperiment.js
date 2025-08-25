/** Chunk was on web.js **/
/** chunk id: 664018, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => i,
  E: () => a
});
var Chunk818083 = require("./818083.js"),
  i = function(e) {
    return e[e.CONTROL = 0] = "CONTROL", e[e.TRANSFORMATION = 1] = "TRANSFORMATION", e[e.NO_MOVEMENT = 2] = "NO_MOVEMENT", e
  }({});
let o = (0, Chunk818083.B)({
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
  a = e => o.useExperiment({
    location: e
  })
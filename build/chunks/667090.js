/** Chunk was on 45620 **/
/** chunk id: 667090, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  W: () => l
});
let r = (0, require("./427164.js").le)({
    name: "2025-12-shop-hero-hscroll",
    kind: "user",
    defaultConfig: {
      enableHeroHScroll: false
    },
    variations: {
      0: {
        enableHeroHScroll: false
      },
      1: {
        enableHeroHScroll: true
      }
    }
  }),
  l = e => r.getConfig({
    location: e
  }).enableHeroHScroll
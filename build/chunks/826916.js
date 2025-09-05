/** Chunk was on 45620 **/
/** chunk id: 826916, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => a,
  N: () => l
});
let r = (0, require("./427164.js").le)({
    name: "2025-09-collectibles-hero-button",
    kind: "user",
    defaultConfig: {
      showAbbreviatedButtonText: false,
      showButtonLeftAligned: false
    },
    variations: {
      0: {
        showButtonLeftAligned: false,
        showAbbreviatedButtonText: false
      },
      1: {
        showButtonLeftAligned: false,
        showAbbreviatedButtonText: true
      },
      2: {
        showButtonLeftAligned: true,
        showAbbreviatedButtonText: false
      },
      3: {
        showButtonLeftAligned: true,
        showAbbreviatedButtonText: true
      }
    }
  }),
  l = e => r.useConfig({
    location: e
  }).showButtonLeftAligned,
  a = e => r.useConfig({
    location: e
  }).showAbbreviatedButtonText
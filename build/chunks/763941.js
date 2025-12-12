/** Chunk was on 45620 **/
/** chunk id: 763941, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  IT: () => o,
  Pc: () => l
});
let r = (0, require("./427164.js").le)({
    name: "2025-10-orb-rental",
    kind: "user",
    defaultConfig: {
      enabled: false,
      rentalDuration: true
    },
    variations: {
      0: {
        enabled: false,
        rentalDuration: true
      },
      1: {
        enabled: true,
        rentalDuration: 3
      },
      2: {
        enabled: true,
        rentalDuration: 7
      },
      3: {
        enabled: true,
        rentalDuration: false
      }
    }
  }),
  l = e => r.useConfig({
    location: e
  }).enabled,
  o = e => r.useConfig({
    location: e
  }).rentalDuration
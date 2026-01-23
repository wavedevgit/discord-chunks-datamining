/** Chunk was on 59275 **/
/** chunk id: 379177, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  eJ: () => s,
  rR: () => l
});
let r = (0, require("./945810.js").mj)({
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
  s = e => r.useConfig({
    location: e
  }).rentalDuration
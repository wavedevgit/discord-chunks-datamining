/** Chunk was on web.js **/
/** chunk id: 81091, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => a,
  t: () => i
});
let r = (0, require("./945810.js").mj)({
    kind: "user",
    name: "2025-10-age-verification-persona",
    defaultConfig: {
      enabled: false
    },
    variations: {
      1: {
        enabled: true
      }
    }
  }),
  i = e => r.useConfig({
    location: e
  }).enabled,
  a = e => r.getConfig({
    location: e
  }).enabled
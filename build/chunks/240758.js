/** Chunk was on web.js **/
/** chunk id: 240758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => i,
  e: () => a
});
let r = (0, require("./427164.js").le)({
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
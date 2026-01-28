/** Chunk was on web.js **/
/** chunk id: 358776, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  WJ: () => a,
  dk: () => i
});
let r = (0, require("./945810.js").mj)({
    name: "2025-12-user-settings-redesign-3",
    kind: "user",
    defaultConfig: {
      enabled: false
    },
    variations: {
      0: {
        enabled: false
      },
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
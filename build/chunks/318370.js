/** Chunk was on web.js **/
/** chunk id: 318370, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => i,
  y: () => o
});
let r = (0, require("./427164.js").le)({
    name: "2025-12-stage-pawtect",
    kind: "user",
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
  }).enabled;

function o(e) {
  return r.getConfig({
    location: e
  }).enabled
}
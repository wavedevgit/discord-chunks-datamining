/** Chunk was on web.js **/
/** chunk id: 191541, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => a,
  f: () => i
});
let r = (0, require("./945810.js").mj)({
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

function a(e) {
  return r.getConfig({
    location: e
  }).enabled
}
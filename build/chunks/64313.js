/** Chunk was on web.js **/
/** chunk id: 64313, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => i,
  o: () => a
});
let r = (0, require("./945810.js").mj)({
    name: "2025-10-gidget-pawtect",
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
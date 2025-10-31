/** Chunk was on web.js **/
/** chunk id: 312870, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => a,
  s: () => i
});
let r = (0, require("./427164.js").le)({
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
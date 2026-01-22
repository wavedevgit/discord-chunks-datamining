/** Chunk was on web.js **/
/** chunk id: 359171, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => i
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2024-03_clickstream_analytics",
  label: "Clickstream Analytics",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable Clickstream Analytics",
    config: {
      enabled: true
    }
  }]
});

function i() {
  let {
    enabled: e
  } = r.getCurrentConfig({
    location: "clickstream"
  });
  return e
}
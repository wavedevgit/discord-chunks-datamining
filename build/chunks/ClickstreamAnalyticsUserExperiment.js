/** Chunk was on web.js **/
/** chunk id: 435749, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
let r = (0, require("./818083.js").B)({
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
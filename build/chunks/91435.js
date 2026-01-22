/** Chunk was on web.js **/
/** chunk id: 91435, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => i
});
let r = (0, require("./250105.js").Ay)({
  kind: "user",
  name: "2025-10-fetch-promotions-endpoint",
  defaultConfig: {
    enabled: false
  },
  variations: {
    1: {
      enabled: true
    }
  }
});

function i(e) {
  let {
    location: t
  } = e;
  return r.getConfig({
    location: t
  }).enabled
}
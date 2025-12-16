/** Chunk was on web.js **/
/** chunk id: 868849, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => i
});
let r = (0, require("./427164.js").le)({
  name: "2025-12-social-layer-storefront-recommendations",
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
});

function i(e) {
  let {
    location: t
  } = e;
  return r.useConfig({
    location: t
  }).enabled
}
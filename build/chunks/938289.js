/** Chunk was on web.js **/
/** chunk id: 938289, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => i
});
let r = (0, require("./945810.js").mj)({
  name: "2026-01-social-layer-storefront-xbox-support",
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
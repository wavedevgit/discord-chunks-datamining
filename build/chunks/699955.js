/** Chunk was on web.js **/
/** chunk id: 699955, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => i,
  n: () => a
});
let r = (0, require("./427164.js").le)({
  name: "2025-12-social-layer-storefront-user-experiment",
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

function a(e) {
  let {
    location: t
  } = e;
  return r.getConfig({
    location: t
  }).enabled
}
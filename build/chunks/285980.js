/** Chunk was on web.js **/
/** chunk id: 285980, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => i
});
let r = (0, require("./427164.js").le)({
  name: "2025-11-user-profile-wishlist-orbs-bundles",
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
  return r.getConfig({
    location: t
  }).enabled
}
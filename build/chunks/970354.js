/** Chunk was on web.js **/
/** chunk id: 970354, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => i
});
let r = (0, require("./945810.js").mj)({
  name: "2025-12-user-profile-wishlist-popout",
  kind: "user",
  defaultConfig: {
    enabled: false,
    showRecommendations: false
  },
  variations: {
    0: {
      enabled: false,
      showRecommendations: false
    },
    1: {
      enabled: true,
      showRecommendations: false
    },
    2: {
      enabled: true,
      showRecommendations: true
    }
  }
});

function i(e) {
  let {
    location: t
  } = e;
  return r.useConfig({
    location: t
  })
}
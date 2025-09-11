/** Chunk was on web.js **/
/** chunk id: 959840, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => i
});
let r = (0, require("./427164.js").le)({
  name: "2025-09-user-profile-wishlist",
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
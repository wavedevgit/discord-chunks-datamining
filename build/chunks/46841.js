/** Chunk was on 37786 **/
/** chunk id: 46841, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => i
});
let r = (0, require("./427164.js").le)({
  name: "2025-09-user-profile-wishlist-viewing",
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
/** Chunk was on 84957 **/
/** chunk id: 46841, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  S: () => i
});
let n = (0, require("./427164.js").le)({
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
  return n.useConfig({
    location: t
  }).enabled
}
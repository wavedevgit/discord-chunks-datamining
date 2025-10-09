/** Chunk was on 69033 **/
/** chunk id: 46841, original params: t,e,r (module,exports,require) **/
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

function i(t) {
  let {
    location: e
  } = t;
  return n.useConfig({
    location: e
  }).enabled
}
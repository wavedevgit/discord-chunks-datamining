/** Chunk was on 31553 **/
/** chunk id: 46841, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  S: () => i
});
let l = (0, require("./427164.js").le)({
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
    location: n
  } = e;
  return l.useConfig({
    location: n
  }).enabled
}
/** Chunk was on 72164 **/
/** chunk id: 46841, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  S: () => r
});
let o = (0, require("./427164.js").le)({
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

function r(e) {
  let {
    location: n
  } = e;
  return o.useConfig({
    location: n
  }).enabled
}
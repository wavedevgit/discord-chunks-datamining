/** Chunk was on 93886 **/
/** chunk id: 46841, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => r
});
let i = (0, require("./427164.js").le)({
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
    location: t
  } = e;
  return i.useConfig({
    location: t
  }).enabled
}
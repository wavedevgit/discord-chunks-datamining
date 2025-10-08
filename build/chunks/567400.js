/** Chunk was on 70820 **/
/** chunk id: 567400, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => l
});
let r = (0, require("./427164.js").le)({
  name: "2025-09-user-profile-wishlist-editing",
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

function l(e) {
  let {
    location: t
  } = e;
  return r.useConfig({
    location: t
  }).enabled
}
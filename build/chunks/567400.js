/** Chunk was on 68255 **/
/** chunk id: 567400, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Y: () => l
});
let n = (0, require("./427164.js").le)({
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
  return n.useConfig({
    location: t
  }).enabled
}
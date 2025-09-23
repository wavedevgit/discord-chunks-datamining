/** Chunk was on 8850 **/
/** chunk id: 959840, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  O: () => l
});
let n = (0, require("./427164.js").le)({
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

function l(e) {
  let {
    location: t
  } = e;
  return n.useConfig({
    location: t
  }).enabled
}
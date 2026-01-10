/** Chunk was on 65414 **/
/** chunk id: 559410, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => i
});
let r = (0, require("./427164.js").le)({
  name: "2025-11-user-profile-wishlist-reordering",
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
/** Chunk was on 30025 **/
/** chunk id: 787309, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => i
});
let r = (0, require("./427164.js").le)({
  name: "2025-10-user-profile-wishlist-breadcrumb",
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
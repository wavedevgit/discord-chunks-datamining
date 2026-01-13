/** Chunk was on 90882 **/
/** chunk id: 479712, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => i
});
let r = (0, require("./427164.js").le)({
  name: "2026-01-social-layer-storefront-recommendations-on-profile-modal",
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
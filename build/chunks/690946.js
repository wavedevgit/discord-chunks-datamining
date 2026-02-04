/** Chunk was on 59569 **/
/** chunk id: 690946, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => l
});
let r = (0, require("./945810.js").mj)({
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

function l(e) {
  let {
    location: t
  } = e;
  return r.useConfig({
    location: t
  }).enabled
}
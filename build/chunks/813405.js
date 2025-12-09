/** Chunk was on 1272 **/
/** chunk id: 813405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
let r = (0, require("./427164.js").le)({
  name: "2025-12-social-layer-storefront-rtc-entrypoint-user-experiment",
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
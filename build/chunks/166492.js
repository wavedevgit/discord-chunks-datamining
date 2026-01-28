/** Chunk was on 91075 **/
/** chunk id: 166492, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  a: () => r
});
let n = (0, require("./945810.js").mj)({
  name: "2025-12-dm-side-panel-show-recommendations-in-breadcrumbs",
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
  return n.useConfig({
    location: t
  }).enabled
}
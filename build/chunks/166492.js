/** Chunk was on web.js **/
/** chunk id: 166492, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => i
});
let r = (0, require("./945810.js").mj)({
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

function i(e) {
  let {
    location: t
  } = e;
  return r.useConfig({
    location: t
  }).enabled
}
/** Chunk was on web.js **/
/** chunk id: 936926, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Eq: () => i
});
let r = (0, require("./945810.js").mj)({
  kind: "user",
  name: "2026-01-family-center-v3",
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
  return r.getConfig({
    location: t
  }).enabled
}
/** Chunk was on web.js **/
/** chunk id: 406360, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => i
});
let r = (0, require("./945810.js").mj)({
  name: "2025-12-hdr-accessibility-setting",
  kind: "user",
  defaultConfig: {
    enabled: false
  },
  variations: {
    1: {
      enabled: true
    }
  }
});

function i(e) {
  return r.useConfig({
    location: e
  }).enabled
}
/** Chunk was on web.js **/
/** chunk id: 226210, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => i
});
let r = (0, require("./945810.js").mj)({
  name: "2026-01-nvenc-new-presets",
  kind: "user",
  defaultConfig: {
    vbvBufferSize: 0
  },
  variations: {
    1: {
      vbvBufferSize: 250
    },
    2: {
      vbvBufferSize: 125
    },
    3: {
      vbvBufferSize: 75
    }
  }
});

function i(e) {
  return r.getConfig({
    location: e
  })
}
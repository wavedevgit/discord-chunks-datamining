/** Chunk was on web.js **/
/** chunk id: 57985, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y1: () => i
});
let r = (0, require("./945810.js").mj)({
  kind: "user",
  name: "2025-08-voice-user-affinity",
  defaultConfig: {
    enabled: false
  },
  variations: {
    0: {
      enabled: false,
      sortType: true
    },
    1: {
      enabled: true,
      sortType: "vc_probability"
    },
    2: {
      enabled: true,
      sortType: "communication_probability"
    }
  }
});

function i(e) {
  return r.getConfig({
    location: e
  }).sortType
}
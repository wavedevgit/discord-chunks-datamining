/** Chunk was on web.js **/
/** chunk id: 724122, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => i
});
let r = (0, require("./250105.js").Ay)({
  kind: "user",
  name: "2025-08-negative-hardware-acceleration",
  defaultConfig: {
    forceEnableVideoHardwareAcceleration: false,
    forceEnableAppHardwareAcceleration: false
  },
  variations: {
    1: {
      forceEnableVideoHardwareAcceleration: true,
      forceEnableAppHardwareAcceleration: false
    },
    2: {
      forceEnableVideoHardwareAcceleration: false,
      forceEnableAppHardwareAcceleration: true
    },
    3: {
      forceEnableVideoHardwareAcceleration: true,
      forceEnableAppHardwareAcceleration: true
    }
  }
});

function i(e) {
  return r.getConfig({
    location: e
  }).forceEnableAppHardwareAcceleration
}
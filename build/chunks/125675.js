/** Chunk was on web.js **/
/** chunk id: 125675, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mu: () => i,
  ar: () => a
});
let r = (0, require("./427164.js").le)({
  name: "2025-12-server-trending-notification",
  kind: "user",
  defaultConfig: {
    showSettingsToggle: false
  },
  variations: {
    1: {
      showSettingsToggle: true
    },
    2: {
      showSettingsToggle: true
    }
  }
});

function i(e) {
  return r.useConfig({
    location: e
  })
}

function a(e) {
  return r.getConfig({
    location: e
  }).showSettingsToggle
}
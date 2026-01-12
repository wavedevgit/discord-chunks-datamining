/** Chunk was on web.js **/
/** chunk id: 925734, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F4: () => a,
  oW: () => i
});
let r = (0, require("./427164.js").le)({
  kind: "user",
  name: "2026-01-profile-updates-notification",
  defaultConfig: {
    showSettingsToggle: false
  },
  variations: {
    0: {
      showSettingsToggle: false
    },
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
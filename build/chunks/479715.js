/** Chunk was on web.js **/
/** chunk id: 479715, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AQ: () => a,
  ZA: () => i
});
let r = (0, require("./945810.js").mj)({
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
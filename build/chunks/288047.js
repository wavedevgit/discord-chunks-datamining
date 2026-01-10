/** Chunk was on web.js **/
/** chunk id: 288047, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZQ: () => i,
  bH: () => a
});
let r = (0, require("./427164.js").le)({
  kind: "user",
  name: "2026-01-friend-is-online-notif-rate-limits",
  defaultConfig: {
    showSettingsToggle: false
  },
  variations: {
    1: {
      showSettingsToggle: true
    },
    2: {
      showSettingsToggle: true
    },
    3: {
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
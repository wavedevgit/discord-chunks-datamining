/** Chunk was on web.js **/
/** chunk id: 49111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LK: () => a,
  _9: () => i
});
let r = (0, require("./945810.js").mj)({
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
/** Chunk was on web.js **/
/** chunk id: 365023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-03_toggle_camera_keybind",
  label: "Toggle Camera Keybind",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Keybind is enabled",
    config: {
      enabled: true
    }
  }]
});

function i() {
  let {
    enabled: e
  } = r.getCurrentConfig({
    location: "keybinds"
  }, {
    autoTrackExposure: false
  });
  return e
}
/** Chunk was on 30202 **/
/** chunk id: 365023, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => r
});
let i = (0, require("./818083.js").B)({
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

function r() {
  let {
    enabled: e
  } = i.getCurrentConfig({
    location: "keybinds"
  }, {
    autoTrackExposure: false
  });
  return module
}
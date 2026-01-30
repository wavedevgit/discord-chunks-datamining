/** Chunk was on 78376 **/
/** chunk id: 168943, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => i
});
let r = (0, require("./600975.js").C)({
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
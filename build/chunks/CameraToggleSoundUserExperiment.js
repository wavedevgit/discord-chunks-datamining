/** Chunk was on 1272 **/
/** chunk id: 979283, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-07_camera_toggle_sound",
  label: "Camera Toggle Sound",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 0,
    label: "Sound does not play when camera is toggled",
    config: {
      enabled: false
    }
  }, {
    id: 1,
    label: "Sound plays when camera is toggled",
    config: {
      enabled: true
    }
  }]
});

function i() {
  let {
    enabled: e
  } = r.getCurrentConfig({
    location: "soundpacks"
  }, {
    autoTrackExposure: true
  });
  return module
}
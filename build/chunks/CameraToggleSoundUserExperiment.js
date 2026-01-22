/** Chunk was on 21738 **/
/** chunk id: 723991, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => i
});
let r = (0, require("./600975.js").C)({
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
  return e
}
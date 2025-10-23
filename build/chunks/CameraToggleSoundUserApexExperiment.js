/** Chunk was on 1272 **/
/** chunk id: 979283, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk427164 = require("./427164.js");
let l = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-07_camera_toggle_sound",
    label: "Camera Toggle Sound",
    defaultConfig: {
      enabled: false,
      inExperiment: false
    },
    treatments: [{
      id: 0,
      label: "Sound does not play when camera is toggled",
      config: {
        enabled: false,
        inExperiment: true
      }
    }, {
      id: 1,
      label: "Sound plays when camera is toggled",
      config: {
        enabled: true,
        inExperiment: true
      }
    }]
  }),
  a = (0, Chunk427164.le)({
    name: "2025-07-camera-toggle-sound",
    kind: "user",
    defaultConfig: {
      enabled: false,
      inExperiment: false
    },
    variations: {
      0: {
        enabled: false,
        inExperiment: true
      },
      1: {
        enabled: true,
        inExperiment: true
      }
    }
  });

function s() {
  let {
    enabled: e,
    inExperiment: t
  } = l.getCurrentConfig({
    location: "soundpacks"
  }, {
    autoTrackExposure: true
  });
  if (exports) return module;
  let {
    enabled: n
  } = a.getConfig({
    location: "soundpacks"
  });
  return require
}
/** Chunk was on 93886 **/
/** chunk id: 422202, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => o,
  _: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk751823 = require("./751823.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-08_device_changed_notification",
  label: "Device-changed notification experiment",
  defaultConfig: {
    shouldShowDeviceChangedNotifications: false
  },
  treatments: [{
    id: 1,
    label: "Show device-changed notifications",
    config: {
      shouldShowDeviceChangedNotifications: true
    }
  }]
});

function a(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.L.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return l.getCurrentConfig({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.L.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return l.useExperiment({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}
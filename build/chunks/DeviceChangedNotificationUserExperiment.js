/** Chunk was on 93886 **/
/** chunk id: 422202, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  P: () => r,
  _: () => d
});
var Chunk818083 = require("./818083.js"),
  Chunk751823 = require("./751823.js");
let o = (0, Chunk818083.B)({
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

function d(e) {
  let {
    location: t,
    autoTrackExposure: a = true
  } = e, {
    isInHoldout: c
  } = n.L.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: a
  });
  return o.getCurrentConfig({
    location: t
  }, {
    disable: c,
    autoTrackExposure: a
  })
}

function r(e) {
  let {
    location: t,
    autoTrackExposure: a = true
  } = e, {
    isInHoldout: c
  } = n.L.useExperiment({
    location: t
  }, {
    autoTrackExposure: a
  });
  return o.useExperiment({
    location: t
  }, {
    disable: c,
    autoTrackExposure: a
  })
}
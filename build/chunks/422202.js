/** Chunk was on 95193 **/
n.d(t, {
  P: () => s,
  _: () => o
});
var i = n(818083),
  r = n(751823);
let l = (0, i.B)({
  kind: "user",
  id: "2025-08_device_changed_notification",
  label: "Device-changed notification experiment",
  defaultConfig: {
    shouldShowDeviceChangedNotifications: !1
  },
  treatments: [{
    id: 1,
    label: "Show device-changed notifications",
    config: {
      shouldShowDeviceChangedNotifications: !0
    }
  }]
});

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = !0
  } = e, {
    isInHoldout: i
  } = r.L.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return l.getCurrentConfig({
    location: t
  }, {
    disable: i,
    autoTrackExposure: n
  })
}

function s(e) {
  let {
    location: t,
    autoTrackExposure: n = !0
  } = e, {
    isInHoldout: i
  } = r.L.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return l.useExperiment({
    location: t
  }, {
    disable: i,
    autoTrackExposure: n
  })
}
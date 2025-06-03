/** Chunk was on 77978 **/
n.d(t, {
  Z: () => o
});
var i = n(818083),
  l = n(355820);
let r = (0, i.B)({
  kind: "user",
  id: "2025-04_custom_status_rtc_entrypoint",
  label: "Custom Status RTC Entrypoint Experiment",
  defaultConfig: {
    customStatusRTCEntrypointEnabled: !1,
    customStatusHoverOnlyRTCEntrypointEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable custom status RTC entrypoint",
    config: {
      customStatusRTCEntrypointEnabled: !0,
      customStatusHoverOnlyRTCEntrypointEnabled: !1
    }
  }, {
    id: 2,
    label: "Enable custom status RTC entrypoint on hover",
    config: {
      customStatusRTCEntrypointEnabled: !1,
      customStatusHoverOnlyRTCEntrypointEnabled: !0
    }
  }]
});

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = !0
  } = e, i = (0, l.P)({
    location: t,
    autoTrackExposure: n
  });
  return r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: i
  })
}
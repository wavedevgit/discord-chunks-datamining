/** Chunk was on 26011 **/
n.d(t, {
  Z: () => o
});
var i = n(818083),
  r = n(355820);
let l = (0, i.B)({
  kind: "user",
  id: "2025-04_custom_status_rtc_entrypoint",
  label: "Custom Status RTC Entrypoint Experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable custom status RTC entrypoint",
    config: {
      enabled: !0
    }
  }]
});

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = !0
  } = e, i = (0, r.P)({
    location: t,
    autoTrackExposure: n
  });
  return l.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: i
  })
}
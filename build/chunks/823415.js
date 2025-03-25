/** Chunk was on 95477 **/
r.d(t, {
  nT: () => i
});
let n = (0, r(818083).B)({
  kind: "user",
  id: "2025-02_show_popout_on_delayed_hover",
  label: "Show Profile Popout On Delayed Hover Experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable showing profile popout on delayed hover",
    config: {
      enabled: !0
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: r = !0
  } = e;
  return n.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: r
  }).enabled
}
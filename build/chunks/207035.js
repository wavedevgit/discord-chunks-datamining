/** Chunk was on 44011 (f8a20969b5404930.js) **/
t.d(e, {
  P: () => i
});
let l = (0, t(818083).B)({
  kind: "user",
  id: "2023-08-30_open-in-popout",
  label: "Open Channel in Popout",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});

function i(n) {
  return l.useExperiment({
    location: n
  }, {
    autoTrackExposure: !1
  }).enabled
}
/** Chunk was on 40383 **/
i.d(t, {
  S: () => r,
  u: () => o
});
let n = (0, i(818083).B)({
  kind: "user",
  id: "2023-01_consumer_education_launch",
  label: "Safety Consumer Education Launch - Block/Mute",
  defaultConfig: {
    bucket: 0,
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Mute",
    config: {
      bucket: 1,
      enabled: !0
    }
  }, {
    id: 2,
    label: "Block",
    config: {
      bucket: 2,
      enabled: !0
    }
  }]
});

function r() {
  return n.useExperiment({
    location: "b85a21_1"
  }, {
    autoTrackExposure: !0
  }).enabled
}

function o() {
  return n.useExperiment({
    location: "b85a21_2"
  }, {
    autoTrackExposure: !1
  }).bucket
}
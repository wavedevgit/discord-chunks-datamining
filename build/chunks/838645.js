/** Chunk was on 93886 (1d5eb829541a42b4.js) **/
n.d(t, {
  H1: () => a,
  s8: () => i
});
let r = (0, n(818083).B)({
  kind: "user",
  id: "2025-02_tigger_pawtect",
  label: "Tigger pawtect",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Tigger pawtect",
    config: {
      enabled: !0
    }
  }]
});

function a(e) {
  let {
    location: t
  } = e;
  return r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: !0
  }).enabled
}

function i(e) {
  let {
    location: t
  } = e;
  return r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: !0
  }).enabled
}
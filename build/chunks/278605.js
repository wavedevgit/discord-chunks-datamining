/** Chunk was on 40580 (29804edbfa36af1f.js) **/
"use strict";
r.d(t, {
  ah: () => i,
  xP: () => o
});
var n = r(818083),
  s = r(987338);
let i = (0, n.B)({
  kind: "user",
  id: "2024-11_marketing_page_v2_experiment",
  label: "Marketing Page V2 Experiment",
  defaultConfig: {
    enabled: !1
  },
  commonTriggerPoint: s.$P.CONNECTION_OPEN,
  treatments: [{
    id: 0,
    label: "User see current marketing page",
    config: {
      enabled: !1
    }
  }, {
    id: 1,
    label: "users see new marketing page",
    config: {
      enabled: !0
    }
  }]
});

function o(e) {
  let {
    enabled: t
  } = i.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  });
  return t
}
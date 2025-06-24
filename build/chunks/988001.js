/** Chunk was on 47253 **/
r.d(o, {
  Z: () => i,
  v: () => a
});
var n = r(818083),
  t = r(987338);
let a = (0, n.B)({
  kind: "user",
  id: "2025-06_plan_selector_cards_nitro_rebrand_experiment",
  label: "Plan Selector Cards Nitro Rebrand Experiment",
  defaultConfig: {
    enabled: !1
  },
  commonTriggerPoint: t.$P.CONNECTION_OPEN,
  treatments: [{
    id: 0,
    label: "User sees control plan selector cards",
    config: {
      enabled: !1
    }
  }, {
    id: 1,
    label: "User sees nitro rebrand plan selector cards",
    config: {
      enabled: !0
    }
  }]
});

function i(e) {
  let {
    location: o
  } = e;
  return a.useExperiment({
    location: o
  }, {
    autoTrackExposure: !0
  }).enabled
}
/** Chunk was on 49750 **/
n.d(t, {
  D: () => o,
  E: () => l
});
var r = n(818083),
  i = n(987338);
let l = (0, r.B)({
    kind: "user",
    id: "2025-02_name_plate_experiment",
    label: "Nameplates Experiment",
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    defaultConfig: {
      canSee: !1,
      canBuy: !1
    },
    treatments: [{
      id: 1,
      label: "Can see",
      config: {
        canSee: !0,
        canBuy: !1
      }
    }, {
      id: 2,
      label: "Can see and buy",
      config: {
        canSee: !0,
        canBuy: !0
      }
    }]
  }),
  o = e => l.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  }).canSee
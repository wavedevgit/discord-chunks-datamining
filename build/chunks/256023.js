/** Chunk was on 1272 (001d1b875900c1de.js) **/
n.d(t, {
  p: () => l
});
var r = n(987170),
  i = n(987338);
let l = (0, r.Z)({
  kind: "user",
  id: "2025-02_test_first_bucket_allocation",
  label: "Test First Bucket Allocation Experiment",
  defaultConfig: {
    enabled: !1
  },
  commonTriggerPoint: i.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Variation with first treatment enabled",
    config: {
      enabled: !0
    }
  }, {
    id: 2,
    label: "Variation with second treatment enabled",
    config: {
      enabled: !0
    }
  }]
})
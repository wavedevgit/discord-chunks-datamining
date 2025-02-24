/** Chunk was on 1272 (d3552a4012cf86c5.js) **/
n.d(t, {
  Z: () => l
});
var r = n(818083),
  i = n(987338);
let l = (0, r.B)({
  kind: "user",
  id: "2025-02_reverse_trial_load_test",
  label: "Reverse Trials",
  defaultConfig: {
    enabled: !1
  },
  commonTriggerPoint: i.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Users receives reverse trial + 1 week follow-up offer",
    config: {
      enabled: !0
    }
  }]
})
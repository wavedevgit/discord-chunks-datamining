/** Chunk was on 1272 (001d1b875900c1de.js) **/
n.d(t, {
  L: () => l
});
var r = n(987170),
  i = n(987338);
let l = (0, r.Z)({
  kind: "user",
  id: "2025-02_test_user_auth_apply_filter_install",
  label: "Test User Auth Apply Filter Install",
  defaultConfig: {
    enabled: !1
  },
  commonTriggerPoint: i.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Variation with treatment enabled",
    config: {
      enabled: !0
    }
  }]
})
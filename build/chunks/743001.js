/** Chunk was on 1272 (4b1b41bf0e3472e1.js) **/
n.d(t, {
  p: () => l
});
var r = n(987170),
  i = n(987338);
let l = (0, r.Z)({
  kind: "user",
  id: "2025-02_test_user_auth_apply_filter_marketing",
  label: "Test User Auth Apply Filter Marketing",
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
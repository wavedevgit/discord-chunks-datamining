/** Chunk was on 1272 (46194273c01318d9.js) **/
n.d(t, {
  b: () => l
});
var r = n(987170),
  i = n(987338);
let l = (0, r.Z)({
  kind: "user",
  id: "2025-02_test_user_auth_filter_install",
  label: "Test User Auth Filter Install",
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
/** Chunk was on 1272 (4b1b41bf0e3472e1.js) **/
n.d(t, {
  Z: () => l
});
var r = n(818083),
  i = n(987338);
let l = (0, r.B)({
  kind: "user",
  id: "2025-01_tiered_tenure_badges_mobile",
  label: "Tiered Tenure Badging Mobile Experience",
  commonTriggerPoint: i.$P.CONNECTION_OPEN,
  defaultConfig: {
    enabled: !1,
    isBadgeVersion2: !1
  },
  treatments: [{
    id: 2,
    label: "Enable Tiered Tenure Badges v2 on mobile",
    config: {
      enabled: !0,
      version: 2,
      isBadgeVersion2: !0
    }
  }]
})
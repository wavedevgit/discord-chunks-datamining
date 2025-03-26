/** Chunk was on 70205 **/
i.d(t, {
  Z: () => a
});
var n = i(818083),
  l = i(987338);
let a = (0, n.B)({
  kind: "user",
  id: "2025-03_activity_notification_improvements",
  label: "Activity Notification Improvements",
  defaultConfig: {
    disableCurrentActivityNotifications: !1
  },
  treatments: [{
    id: 1,
    label: "Disable notifications for current activity",
    config: {
      disableCurrentActivityNotifications: !0
    }
  }],
  commonTriggerPoint: l.$P.CONNECTION_OPEN
})
/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => o
});
var r = n(818083),
  i = n(987338);
let o = (0, r.B)({
  kind: "user",
  id: "2025-02_activity_popout_window_v2",
  label: "Activity Popout Window V2 Experiment",
  defaultConfig: {
    enabled: !1
  },
  commonTriggerPoint: i.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Enable activity popout window",
    config: {
      enabled: !0
    }
  }]
})
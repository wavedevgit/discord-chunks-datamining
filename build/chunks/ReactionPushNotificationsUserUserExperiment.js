/** Chunk was on web.js **/
/** chunk id: 106371, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-08_reaction_push_notifications_user",
  label: "In App Notifications for Reactions",
  defaultConfig: {
    enableInAppNotifications: false,
    enableNotificationsForAllReactions: false
  },
  treatments: [{
    id: 1,
    label: "Enable In App Notifications for Reactions (First Reaction)",
    config: {
      enableInAppNotifications: true,
      enableNotificationsForAllReactions: false
    }
  }, {
    id: 2,
    label: "Enable In App Notifications for Reactions (All Reactions)",
    config: {
      enableInAppNotifications: true,
      enableNotificationsForAllReactions: true
    }
  }, {
    id: 3,
    label: "Enable In App Notifications for Reactions (All Reactions)",
    config: {
      enableInAppNotifications: true,
      enableNotificationsForAllReactions: true
    }
  }]
})
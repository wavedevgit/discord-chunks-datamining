/** Chunk was on web.js **/
/** chunk id: 2818, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-06_message_bookmarks",
  label: "For Later - Bookmarks & Reminders",
  defaultConfig: {
    enabled: false,
    inInbox: true
  },
  treatments: [{
    id: 1,
    label: "Display in inbox",
    config: {
      enabled: true,
      inInbox: true
    }
  }, {
    id: 2,
    label: "Display in header bar",
    config: {
      enabled: true,
      inInbox: false
    }
  }]
})